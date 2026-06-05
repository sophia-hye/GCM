import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "./env";

/**
 * service_role 키 기반 관리자 클라이언트 (서버 전용, RLS 우회).
 * 회원 계정 생성 등 admin 작업에만 사용. 절대 클라이언트로 노출 금지.
 */
export function createAdminClient() {
  return createSupabaseClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
