import { pick, toLocale, type Locale, type I18nMap } from "@/lib/i18n-pick";

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
  i18n?: I18nMap;
};

/** 로케일별 표시값. ko→원본, 그 외→i18n[locale] → *_en → 한국어 폴백. */
export function localizeProgram(p: Program, loc: boolean | Locale): Program {
  const locale = toLocale(loc);
  if (locale === "ko") return p;
  const tr = p.i18n?.[locale];
  return {
    ...p,
    title: tr?.title || p.title_en || p.title,
    summary: tr?.summary ?? p.summary_en ?? p.summary,
    description: tr?.description ?? p.description_en ?? p.description,
    duration: tr?.duration ?? p.duration_en ?? p.duration,
  };
}

/** 원(KRW) 정수를 표시용 문자열로. null 이면 '가격 문의' */
export function formatPrice(price: number | null, loc: boolean | Locale = true): string {
  const locale = toLocale(loc);
  if (price == null)
    return pick(locale, {
      ko: "가격 문의",
      en: "Contact for price",
      zh: "价格请咨询",
      ja: "価格はお問い合わせ",
      it: "Prezzo su richiesta",
      fr: "Prix sur demande",
      es: "Precio a consultar",
    });
  if (locale === "ko") return `${price.toLocaleString("ko-KR")}원`;
  return `KRW ${price.toLocaleString("en-US")}`;
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
