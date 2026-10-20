import { toLocale, type Locale, type I18nMap } from "@/lib/i18n-pick";

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
  i18n?: I18nMap; // { en|zh|ja|it|fr|es: { title, summary, description, duration } }
};

/** 로케일별 표시값. ko→원본, 그 외→i18n[locale] → i18n.en → 한국어 폴백. */
export function localizeProduct(p: StoreProduct, loc: boolean | Locale): StoreProduct {
  const locale = toLocale(loc);
  if (locale === "ko") return p;
  const L = p.i18n?.[locale];
  const E = p.i18n?.en;
  if (!L && !E) return p;
  return {
    ...p,
    title: L?.title || E?.title || p.title,
    summary: L?.summary ?? E?.summary ?? p.summary,
    description: L?.description ?? E?.description ?? p.description,
    duration: L?.duration ?? E?.duration ?? p.duration,
  };
}

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
