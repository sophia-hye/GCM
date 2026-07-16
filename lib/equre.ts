import "server-only";

const EQURE_API_URL = process.env.EQURE_API_URL ?? "";
const EQURE_API_SECRET = process.env.EQURE_API_SECRET ?? "";

/**
 * Eqüre 전송(방식 b: API 호출) 설정 여부.
 * 미설정이면 no-op — 분리/개발 환경에서 가입이 정상 동작한다.
 */
export function isEqureForwardConfigured(): boolean {
  return (
    EQURE_API_URL.startsWith("http") &&
    !EQURE_API_URL.includes("your-") &&
    EQURE_API_SECRET.length > 0 &&
    !EQURE_API_SECRET.startsWith("your-")
  );
}

export type EqureMemberPayload = {
  externalId: string; // GCM auth user id (참조용 — 프로젝트 분리로 Eqüre id 와는 다름)
  email: string;
  name: string;
  phone?: string | null;
  gender?: string | null;
  birthDate?: string | null;
  consentedAt: string; // ISO8601
};

/**
 * 제3자 제공에 '동의한' 회원 정보를 Eqüre 수신 API 로 전송한다(방식 b).
 *
 * ⚠️ 호출 측에서 반드시 consent_third_party === true 일 때만 호출할 것.
 * 베스트 에포트 — 실패해도 GCM 가입 자체는 성공시킨다(로그만 남김). 5초 타임아웃.
 *
 * Eqüre 수신 API 계약(구현은 Eqüre 측):
 *   POST  {EQURE_API_URL}
 *   Header: Authorization: Bearer {EQURE_API_SECRET}
 *   Body  : { source:"gcm", externalId, email, name, phone, gender, birthDate, consentedAt }
 *   Resp  : 2xx 이면 성공. email 을 매칭 키로 사용(프로젝트 분리로 id 불일치).
 */
export async function forwardMemberToEqure(
  payload: EqureMemberPayload,
): Promise<void> {
  if (!isEqureForwardConfigured()) return;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(EQURE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${EQURE_API_SECRET}`,
      },
      body: JSON.stringify({ source: "gcm", ...payload }),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`[equre] 회원 전송 실패: HTTP ${res.status}`);
    }
  } catch (error) {
    // 가입은 이미 완료됐으므로 로그만 남기고 넘어간다.
    console.error("[equre] 회원 전송 예외:", error);
  } finally {
    clearTimeout(timer);
  }
}
