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

/** 다국어 문자열 묶음 — en 필수, 나머지는 선택(없으면 en→ko 폴백) */
export type I18nText = { en: string; ko?: string } & Partial<Record<Locale, string>>;

/** 현재 로케일에 맞는 문자열 선택 (요청 → en → ko 폴백) */
export function pick(locale: Locale, m: I18nText): string {
  return m[locale] ?? m.en ?? m.ko ?? "";
}
