import { cookies } from "next/headers";
import { isLocale, type Locale } from "@/lib/i18n-pick";

export type { Locale } from "@/lib/i18n-pick";
export { LOCALES, DEFAULT_LOCALE } from "@/lib/i18n-pick";

export const LOCALE_COOKIE = "locale";

/** 서버에서 현재 로케일 읽기(기본 ko, 유효하지 않으면 ko) */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : "ko";
}
