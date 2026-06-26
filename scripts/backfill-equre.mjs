/**
 * GCM에서 가입한 계정(source=gcm)을 equre_profiles 에도 백필.
 * 크로스 로그인 시 equre 앱이 요구하는 프로필 행을 만들어 준다.
 * 실행: node --env-file=.env.local scripts/backfill-equre.mjs
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const admin = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const {
  data: { users },
} = await admin.auth.admin.listUsers({ perPage: 1000 });

const { data: existing } = await admin.from("equre_profiles").select("id");
const have = new Set((existing ?? []).map((e) => e.id));

const { data: gcmRows } = await admin.from("gcm_profiles").select("id, name");
const nameById = new Map((gcmRows ?? []).map((g) => [g.id, g.name]));

for (const u of users) {
  if (have.has(u.id)) {
    console.log(`이미 있음: ${u.email}`);
    continue;
  }
  const { error } = await admin.from("equre_profiles").insert({
    id: u.id,
    email: u.email ?? null,
    name: nameById.get(u.id) ?? u.user_metadata?.name ?? null,
    role: "user",
    source: "gcm",
  });
  console.log(
    `${u.email} → ${error ? `실패: ${error.message}` : "equre_profiles 생성"}`,
  );
}
