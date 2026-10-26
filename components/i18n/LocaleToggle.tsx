"use client";

import { useEffect, useRef, useState } from "react";
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

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </svg>
  );
}

export function LocaleToggle({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    const { rest } = localeFromPath(pathname);
    const target = `${localePrefix(next)}${rest}` || "/";
    // 로케일 전환은 전체 내비게이션으로 — 같은 내부 경로 rewrite 로 인한
    // 클라이언트 라우터 캐시 재사용을 피해 새 로케일로 확실히 렌더한다.
    window.location.assign(target + window.location.search + window.location.hash);
  };

  const triggerCls = light
    ? "border-white/40 text-white/90 hover:bg-white/10"
    : "border-line text-ink hover:bg-card";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${triggerCls}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={LOCALE_NAMES[locale]}
        title={LOCALE_NAMES[locale]}
      >
        <GlobeIcon className="h-4 w-4" />
        <span>{LOCALE_LABELS[locale]}</span>
        <svg
          viewBox="0 0 12 12"
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 max-h-[70vh] min-w-[9rem] overflow-y-auto rounded-xl border border-line bg-base py-1 shadow-lg"
        >
          {LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              role="menuitemradio"
              aria-checked={locale === l}
              onClick={() => choose(l)}
              className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors ${
                locale === l
                  ? "font-semibold text-court"
                  : "text-ink hover:bg-card"
              }`}
            >
              <span>{LOCALE_NAMES[l]}</span>
              <span className={locale === l ? "text-court" : "text-muted"}>
                {LOCALE_LABELS[l]}
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
