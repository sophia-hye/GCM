import { cookies } from "next/headers";

export type Locale = "ko" | "en";

export const LOCALE_COOKIE = "locale";

/** 서버에서 현재 로케일 읽기(기본 ko) */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return store.get(LOCALE_COOKIE)?.value === "en" ? "en" : "ko";
}
