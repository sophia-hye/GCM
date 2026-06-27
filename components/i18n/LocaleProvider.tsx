"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>("ko");

/** 클라이언트 컴포넌트에서 현재 로케일을 읽기 위한 Provider (서버 레이아웃에서 주입) */
export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
