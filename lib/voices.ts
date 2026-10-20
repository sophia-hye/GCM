/** 후기(gcm_voices) 공통 타입과 로컬라이즈 헬퍼 */
import { toLocale, type Locale, type I18nMap } from "@/lib/i18n-pick";

export type VoiceLocalizable = {
  title: string | null;
  body: string;
  author_name: string;
  // 영문(EN) 필드 — 없으면 한글로 폴백
  title_en?: string | null;
  body_en?: string | null;
  author_name_en?: string | null;
  i18n?: I18nMap;
};

/** 로케일별 표시값. ko→원본, 그 외→i18n[locale] → *_en → 한국어 폴백. */
export function localizeVoice<T extends VoiceLocalizable>(v: T, loc: boolean | Locale): T {
  const locale = toLocale(loc);
  if (locale === "ko") return v;
  const tr = v.i18n?.[locale];
  return {
    ...v,
    title: tr?.title ?? v.title_en ?? v.title,
    body: tr?.body || v.body_en || v.body,
    author_name: tr?.author_name || v.author_name_en || v.author_name,
  };
}
