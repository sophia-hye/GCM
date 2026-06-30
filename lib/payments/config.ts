/**
 * 결제 설정 (클라이언트 안전 — 시크릿 키는 절대 여기 두지 않음).
 * 토스페이먼츠 테스트 클라이언트 키 기본값 사용. 운영 시 NEXT_PUBLIC_TOSS_CLIENT_KEY 로 교체.
 */
export const TOSS_CLIENT_KEY =
  process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY ?? "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";

export type PaymentKind = "consulting_deposit" | "court";

/** 동호인 코트 요금: 주간 35,000 / 야간(18시 이후) 50,000 */
export const COURT_PRICE = { day: 35000, night: 50000, nightStartHour: 18 };

/** 코트 운영시간: 평일 09–19, 주말 09–17 → 시작 시간 슬롯(1시간 단위) */
export function slotsForCourtDate(dateStr: string): string[] {
  if (!dateStr) return [];
  const day = new Date(`${dateStr}T00:00:00+09:00`).getUTCDay(); // 0=일,6=토
  const weekend = day === 0 || day === 6;
  const lastStart = weekend ? 16 : 18; // 주말 16시 시작(17시 종료) / 평일 18시 시작(19시 종료)
  const out: string[] = [];
  for (let h = 9; h <= lastStart; h++) out.push(`${String(h).padStart(2, "0")}:00`);
  return out;
}

/** 선택 시간대의 코트 요금(원) — 18시 이후는 야간 요금 */
export function courtPriceForTime(time: string): number {
  const h = Number(time.slice(0, 2));
  return Number.isFinite(h) && h >= COURT_PRICE.nightStartHour ? COURT_PRICE.night : COURT_PRICE.day;
}

export function isNight(time: string): boolean {
  return Number(time.slice(0, 2)) >= COURT_PRICE.nightStartHour;
}

/** 종류별 주문명/라벨 (consulting_deposit 은 정액, court 는 시간대별) */
export const PAYMENT_CONFIG: Record<PaymentKind, { orderName: string; label: string; amount?: number }> = {
  consulting_deposit: {
    orderName: "GCM 컨설팅 예약금",
    label: "컨설팅 예약금",
    amount: 50000,
  },
  court: {
    orderName: "GCM 동호인 코트 이용료",
    label: "동호인 코트 이용료",
  },
};

/** 금액의 단일 소스 — 서버가 이 함수로 금액을 결정한다(클라이언트 값 신뢰 금지). */
export function resolveAmount(kind: PaymentKind, meta: Record<string, unknown>): number {
  if (kind === "court") {
    const date = String(meta.date ?? "");
    const time = String(meta.time ?? "");
    if (!slotsForCourtDate(date).includes(time)) return 0; // 운영시간 밖이면 무효
    return courtPriceForTime(time);
  }
  return PAYMENT_CONFIG[kind].amount ?? 0;
}

export function isPaymentKind(v: string): v is PaymentKind {
  return v === "consulting_deposit" || v === "court";
}
