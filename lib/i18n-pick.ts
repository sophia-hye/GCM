/**
 * 다국어 공통 유틸 (서버/클라이언트 공용 — next/headers 미포함).
 * 지원 언어: 한국어·영어 + 중국어·일본어·이탈리아어·프랑스어·스페인어.
 * 번역이 없는 항목은 영어(en) → 한국어(ko) 순으로 폴백한다.
 */

export type Locale = "ko" | "en" | "zh" | "ja" | "it" | "fr" | "es";

export const LOCALES: readonly Locale[] = ["ko", "en", "zh", "ja", "it", "fr", "es"];

export const DEFAULT_LOCALE: Locale = "ko";

/** 언어 토글에 표시할 짧은 라벨 */
export const LOCALE_LABELS: Record<Locale, string> = {
  ko: "한",
  en: "EN",
  zh: "中",
  ja: "日",
  it: "IT",
  fr: "FR",
  es: "ES",
};

/** 언어 전체 이름(접근성·aria용) */
export const LOCALE_NAMES: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語",
  it: "Italiano",
  fr: "Français",
  es: "Español",
};

/** OpenGraph / html lang 등에 쓰는 로케일 코드 */
export const OG_LOCALES: Record<Locale, string> = {
  ko: "ko_KR",
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
  it: "it_IT",
  fr: "fr_FR",
  es: "es_ES",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** 기본 로케일(ko)은 접두어 없음. 그 외 언어만 /{locale}/ 접두어를 가진다. */
export const PREFIXED_LOCALES: readonly Locale[] = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** URL 경로에서 로케일 접두어를 분리. ex) "/en/scholarship" → { locale:"en", rest:"/scholarship" } */
export function localeFromPath(pathname: string): { locale: Locale; rest: string } {
  const seg = pathname.split("/")[1] ?? "";
  if ((PREFIXED_LOCALES as readonly string[]).includes(seg)) {
    const rest = pathname.slice(seg.length + 1) || "/";
    return { locale: seg as Locale, rest };
  }
  return { locale: DEFAULT_LOCALE, rest: pathname };
}

/** 로케일에 맞춘 경로 접두어. 내부 링크 prefix 용. ko→"", 그 외→"/<locale>" */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** 내부 경로를 현재 로케일 경로로. 외부/특수 링크는 그대로. */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (locale === DEFAULT_LOCALE) return href;
  // 이미 접두어가 있으면 중복 방지
  const first = href.split("/")[1] ?? "";
  if ((LOCALES as readonly string[]).includes(first)) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}

/** 다국어 문자열 묶음 — en 필수, 나머지는 선택(없으면 en→ko 폴백) */
export type I18nText = { en: string; ko?: string } & Partial<Record<Locale, string>>;

/** 현재 로케일에 맞는 문자열 선택 (요청 → en → ko 폴백) */
export function pick(locale: Locale, m: I18nText): string {
  return m[locale] ?? m.en ?? m.ko ?? "";
}

/** DB i18n JSONB 컬럼 형태: { en|zh|ja|it|fr|es: { <field>: <translated> } } */
export type I18nMap = Partial<Record<Locale, Partial<Record<string, string>>>> | null;

/** boolean(true=ko,false=en) 또는 Locale 을 Locale 로 정규화 (하위호환) */
export function toLocale(loc: boolean | Locale): Locale {
  return typeof loc === "boolean" ? (loc ? "ko" : "en") : loc;
}
