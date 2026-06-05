/**
 * 기존 가짜 이메일({전화번호}@gcm.local) 계정을 phone 필드 방식으로 이전.
 * 이미 만든 관리자/회원 계정을 재생성 없이 phone 로그인 가능하게 한다.
 *
 * 실행 (Node 20.6+):
 *   node --env-file=.env.local scripts/migrate-to-phone.mjs
 *
 * 사전: Supabase Authentication > Providers 에서 Phone 활성화.
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey || serviceKey.includes("your-")) {
  console.error("NEXT_PUBLIC_SUPABASE_URL 과 SUPABASE_SERVICE_ROLE_KEY 를 .env.local 에 설정하세요.");
  process.exit(1);
}

function toE164(digits) {
  if (digits.startsWith("82")) return `+${digits}`;
  if (digits.startsWith("0")) return `+82${digits.slice(1)}`;
  return `+82${digits}`;
}

const admin = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

let page = 1;
let migrated = 0;
let scanned = 0;

for (;;) {
  const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 100 });
  if (error) {
    console.error("목록 조회 실패:", error.message);
    process.exit(1);
  }
  if (!data.users.length) break;

  for (const u of data.users) {
    scanned += 1;
    const isFakeEmail = u.email?.endsWith("@gcm.local");
    if (!isFakeEmail || u.phone) continue;

    const digits = u.email.split("@")[0].replace(/\D/g, "");
    if (!digits) continue;

    const { error: upErr } = await admin.auth.admin.updateUserById(u.id, {
      phone: toE164(digits),
      phone_confirm: true,
    });
    if (upErr) {
      console.warn(`  - ${u.email} 실패: ${upErr.message}`);
    } else {
      migrated += 1;
      console.log(`  + ${u.email} → ${toE164(digits)}`);
    }
  }

  if (data.users.length < 100) break;
  page += 1;
}

console.log(`완료: ${scanned}명 중 ${migrated}명 이전됨.`);
