/** 전화번호에서 숫자만 추출 (표시/저장 및 비밀번호 키로 사용) */
export function normalizePhone(raw: string): string {
  return (raw ?? "").replace(/\D/g, "");
}

/**
 * 한국 전화번호를 Supabase Auth용 E.164 형식으로 변환.
 * 예) 010-1234-5678 → +821012345678
 */
export function toE164(raw: string): string {
  const d = normalizePhone(raw);
  if (!d) return "";
  if (d.startsWith("82")) return `+${d}`;
  if (d.startsWith("0")) return `+82${d.slice(1)}`;
  return `+82${d}`;
}
