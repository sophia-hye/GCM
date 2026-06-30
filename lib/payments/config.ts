/**
 * 결제 설정 (클라이언트 안전 — 시크릿 키는 절대 여기 두지 않음).
 * 토스페이먼츠 테스트 클라이언트 키 기본값 사용. 운영 시 NEXT_PUBLIC_TOSS_CLIENT_KEY 로 교체.
 */
export const TOSS_CLIENT_KEY =
  process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY ?? "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";

export type PaymentKind = "consulting_deposit" | "court";

/** 종류별 금액(원)과 주문명 — 금액의 단일 소스(서버가 결정) */
export const PAYMENT_CONFIG: Record<PaymentKind, { amount: number; orderName: string; label: string }> = {
  consulting_deposit: {
    amount: 50000,
    orderName: "GCM 컨설팅 예약금",
    label: "컨설팅 예약금",
  },
  court: {
    amount: 20000,
    orderName: "GCM 동호인 코트 이용료",
    label: "동호인 코트 이용료",
  },
};

export function isPaymentKind(v: string): v is PaymentKind {
  return v === "consulting_deposit" || v === "court";
}
