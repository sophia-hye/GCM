// 가입/로그인 방식(이메일·카카오·네이버·구글)을 gcm_profiles.signup_method 컬럼에 저장한다.
// 판별 기준: 네이버는 user_metadata.provider, 그 외(카카오·구글)는 app_metadata.provider.
// 이메일 자체 가입은 provider 가 없으므로 'email'.

export type AuthProviderMeta = {
  app_metadata?: { provider?: string } | null;
  user_metadata?: { provider?: string } | null;
};

export function detectSignupMethod(u: AuthProviderMeta): string {
  if (u.user_metadata?.provider === "naver") return "naver";
  const p = u.app_metadata?.provider;
  if (p === "kakao") return "kakao";
  if (p === "google") return "google";
  return "email";
}

export const SIGNUP_METHOD_LABEL: Record<string, string> = {
  email: "이메일",
  kakao: "카카오",
  naver: "네이버",
  google: "구글",
};

export function signupMethodLabel(value?: string | null): string {
  if (!value) return "-";
  return SIGNUP_METHOD_LABEL[value] ?? value;
}
