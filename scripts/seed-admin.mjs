/**
 * 관리자(admin) 계정 시드 스크립트.
 *
 * 사전 준비:
 *   1) Supabase SQL Editor에서 supabase/migrations/0001_init.sql 실행
 *   2) .env.local 에 NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY 입력
 *
 * 실행 (Node 20.6+):
 *   node --env-file=.env.local scripts/seed-admin.mjs "오성국" "010-1234-5678" "원하는비밀번호"
 *
 * 생성 후 /login 의 "관리자" 탭에서 이름+전화번호+비밀번호로 로그인할 수 있습니다.
 */
import { createClient } from "@supabase/supabase-js";

const [, , name, phone, password] = process.argv;

if (!name || !phone || !password) {
  console.error('사용법: node --env-file=.env.local scripts/seed-admin.mjs "이름" "전화번호" "비밀번호"');
  process.exit(1);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey || serviceKey.includes("your-")) {
  console.error("NEXT_PUBLIC_SUPABASE_URL 과 SUPABASE_SERVICE_ROLE_KEY 를 .env.local 에 설정하세요.");
  process.exit(1);
}

const digits = phone.replace(/\D/g, "");
const e164 = digits.startsWith("82")
  ? `+${digits}`
  : digits.startsWith("0")
    ? `+82${digits.slice(1)}`
    : `+82${digits}`;

const admin = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const { data, error } = await admin.auth.admin.createUser({
  phone: e164,
  password,
  phone_confirm: true,
  user_metadata: { name, phone: digits, role: "admin", source: "gcm" },
});

if (error) {
  console.error("실패:", error.message);
  process.exit(1);
}

// 가입 트리거가 role 을 반영하지만, 혹시 모를 경우를 대비해 명시적으로 보정
await admin.from("gcm_profiles").update({ role: "admin", name, phone: digits }).eq("id", data.user.id);

console.log(`관리자 생성 완료: ${name} (${e164})`);
console.log("이제 /login 관리자 탭에서 로그인하세요.");
