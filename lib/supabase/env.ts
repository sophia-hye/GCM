export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

/** 관리자 자가 가입에 요구되는 비밀 키 (서버 전용, 절대 클라이언트 노출 금지) */
export const ADMIN_SIGNUP_KEY = process.env.ADMIN_SIGNUP_KEY ?? "";

/** 네이버 OAuth (커스텀 소셜 로그인) */
export const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID ?? "";
export const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET ?? "";

/** 네이버 로그인 사용 가능 여부 (클라이언트 id 는 공개 가능하나 secret 은 서버 전용) */
export function isNaverConfigured(): boolean {
  return (
    NAVER_CLIENT_ID.length > 0 &&
    !NAVER_CLIENT_ID.startsWith("your-") &&
    NAVER_CLIENT_SECRET.length > 0 &&
    !NAVER_CLIENT_SECRET.startsWith("your-")
  );
}

/**
 * 실제 Supabase 자격증명이 설정되어 있는지 확인.
 * placeholder(.env.local 미입력) 상태에서는 인증 기능을 비활성화하고
 * 공개 페이지는 정상 동작하도록 한다.
 */
export function isSupabaseConfigured(): boolean {
  return (
    SUPABASE_URL.startsWith("http") &&
    !SUPABASE_URL.includes("your-project") &&
    SUPABASE_ANON_KEY.length > 20 &&
    !SUPABASE_ANON_KEY.includes("your-anon-key")
  );
}

/** service_role 키까지 설정되어 admin 작업(회원 등록 등)이 가능한지 */
export function isAdminConfigured(): boolean {
  return (
    isSupabaseConfigured() &&
    SUPABASE_SERVICE_ROLE_KEY.length > 20 &&
    !SUPABASE_SERVICE_ROLE_KEY.includes("your-")
  );
}
