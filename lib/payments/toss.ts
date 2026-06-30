import "server-only";

/** 토스 시크릿 키 (서버 전용). 운영 시 TOSS_SECRET_KEY 로 교체. 기본은 토스 문서용 테스트 키. */
const TOSS_SECRET_KEY =
  process.env.TOSS_SECRET_KEY ?? "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";

const CONFIRM_URL = "https://api.tosspayments.com/v1/payments/confirm";

export type TossConfirmResult =
  | { ok: true; method: string | null; approvedAt: string | null; raw: unknown }
  | { ok: false; code: string; message: string };

/**
 * 결제 승인 (서버 전용). 클라이언트가 보낸 금액을 신뢰하지 않고
 * 호출 전 서버 저장 금액과 대조해야 한다.
 */
export async function confirmTossPayment(params: {
  paymentKey: string;
  orderId: string;
  amount: number;
}): Promise<TossConfirmResult> {
  const auth = Buffer.from(`${TOSS_SECRET_KEY}:`).toString("base64");
  try {
    const res = await fetch(CONFIRM_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const data = (await res.json()) as Record<string, unknown>;
    if (!res.ok) {
      return {
        ok: false,
        code: String(data.code ?? "UNKNOWN"),
        message: String(data.message ?? "결제 승인에 실패했습니다."),
      };
    }
    return {
      ok: true,
      method: (data.method as string) ?? null,
      approvedAt: (data.approvedAt as string) ?? null,
      raw: data,
    };
  } catch (e) {
    return { ok: false, code: "NETWORK", message: "결제 서버 통신 오류" };
  }
}
