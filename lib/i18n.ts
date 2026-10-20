import { headers } from "next/headers";
import { isLocale } from "@/lib/i18n-pick";
import type { Locale } from "@/lib/i18n-pick";

export type { Locale } from "@/lib/i18n-pick";
export { LOCALES, DEFAULT_LOCALE } from "@/lib/i18n-pick";

/** 서버에서 현재 로케일 읽기 — proxy 가 URL 접두어로부터 설정한 헤더 기반(기본 ko). */
export async function getLocale(): Promise<Locale> {
  const h = await headers();
  const value = h.get("x-gcm-locale");
  return isLocale(value) ? value : "ko";
}
