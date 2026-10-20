"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "@/components/i18n/LocaleProvider";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NAMES,
  localeFromPath,
  localePrefix,
  type Locale,
} from "@/lib/i18n-pick";

export function LocaleToggle({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();

  const choose = (next: Locale) => {
    if (next === locale) return;
    const { rest } = localeFromPath(pathname);
    const target = `${localePrefix(next)}${rest}` || "/";
    // 로케일 전환은 전체 내비게이션으로 — 같은 내부 경로 rewrite 로 인한
    // 클라이언트 라우터 캐시 재사용을 피해 새 로케일로 확실히 렌더한다.
    window.location.assign(target + window.location.search + window.location.hash);
  };

  const base = "rounded-full px-2 py-0.5 text-xs font-semibold transition-colors";
  const activeCls = light ? "bg-white/90 text-ink" : "bg-court text-white";
  const idleCls = light ? "text-white/70 hover:text-white" : "text-muted hover:text-ink";

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-0.5 rounded-full border p-0.5 ${
        light ? "border-white/40" : "border-line"
      }`}
      aria-label="language"
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => choose(l)}
          className={`${base} ${locale === l ? activeCls : idleCls}`}
          aria-pressed={locale === l}
          aria-label={LOCALE_NAMES[l]}
          title={LOCALE_NAMES[l]}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
