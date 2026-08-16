export type StoreProduct = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  description: string | null;
  price: number | null;
  duration: string | null; // 옵션/규격 등 부가 표기
  image: string | null;
  sort_order: number;
  published: boolean;
};

/** 제목에서 slug 후보 생성(한글은 랜덤 접미사로 유일성 확보) */
export function slugifyProductTitle(title: string, rand: string): string {
  const base = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-");
  const ascii = base.replace(/[^a-z0-9-]/g, "");
  return `${ascii || "product"}-${rand.slice(0, 6)}`;
}
