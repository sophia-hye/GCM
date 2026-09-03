export type Program = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  description: string | null;
  price: number | null;
  duration: string | null;
  image: string | null;
  images: string[]; // 갤러리(여러 장). 첫 장이 대표 이미지
  sort_order: number;
  published: boolean;
  // 영문(EN) 필드 — 없으면 한글로 폴백
  title_en?: string | null;
  summary_en?: string | null;
  description_en?: string | null;
  duration_en?: string | null;
};

/** 영문 로케일이면 *_en 값(없으면 한글)으로 치환한 Program 을 반환 */
export function localizeProgram(p: Program, ko: boolean): Program {
  if (ko) return p;
  return {
    ...p,
    title: p.title_en || p.title,
    summary: p.summary_en ?? p.summary,
    description: p.description_en ?? p.description,
    duration: p.duration_en ?? p.duration,
  };
}

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
