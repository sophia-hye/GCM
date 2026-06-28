"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocale } from "@/app/actions/locale";
import { useLocale } from "@/components/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n";

export function LocaleToggle({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const choose = (next: Locale) => {
    if (next === locale || pending) return;
    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  };

  const base =
    "rounded-full px-2 py-0.5 text-xs font-semibold transition-colors";
  const activeCls = light ? "bg-white/90 text-ink" : "bg-court text-white";
  const idleCls = light ? "text-white/70 hover:text-white" : "text-muted hover:text-ink";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border p-0.5 ${
        light ? "border-white/40" : "border-line"
      }`}
      aria-label="language"
    >
      {(["ko", "en"] as Locale[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => choose(l)}
          className={`${base} ${locale === l ? activeCls : idleCls}`}
          aria-pressed={locale === l}
        >
          {l === "ko" ? "한" : "EN"}
        </button>
      ))}
    </div>
  );
}
