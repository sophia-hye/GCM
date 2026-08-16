export type Program = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  description: string | null;
  price: number | null;
  duration: string | null;
  image: string | null;
  sort_order: number;
  published: boolean;
};

/** 원(KRW) 정수를 표시용 문자열로. null 이면 '가격 문의' */
export function formatPrice(price: number | null, ko = true): string {
  if (price == null) return ko ? "가격 문의" : "Contact for price";
  return ko ? `${price.toLocaleString("ko-KR")}원` : `KRW ${price.toLocaleString("en-US")}`;
}

/** 제목에서 slug 후보 생성(한글은 랜덤 접미사로 유일성 확보) */
export function slugifyProgram(title: string, rand: string): string {
  const base = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-");
  const ascii = base.replace(/[^a-z0-9-]/g, "");
  return `${ascii || "program"}-${rand.slice(0, 6)}`;
}
