"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { CourtLines } from "@/components/ui";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
  backgroundImage,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
  backgroundImage?: string;
}) {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-court-gradient bg-cover bg-center px-5 py-16"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage ? null : (
        <CourtLines className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 text-white/10" />
      )}
      <div className={backgroundImage ? "absolute inset-0 bg-ink/55" : "absolute inset-0 bg-base/40"} />

      <div className="relative z-10 w-full max-w-md">
        <Link
          href="/"
          className="mb-8 block text-center font-display text-2xl font-extrabold"
        >
          GCM<span className="text-lime">.</span>
        </Link>

        <div className="rounded-2xl border border-white/15 bg-base/90 p-7 backdrop-blur">
          <h1 className="font-display text-2xl font-bold">{title}</h1>
          <p className="mt-1 text-sm text-ink/70">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>

        <p className="mt-6 text-center text-sm">
          <span
            className={
              backgroundImage
                ? "inline-block rounded-full bg-ink/60 px-4 py-1.5 font-medium text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.6)] backdrop-blur-sm"
                : "text-muted"
            }
          >
            {footer}
          </span>
        </p>
      </div>
    </main>
  );
}

export function AuthField({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright"
      />
    </div>
  );
}

export function AuthSubmit({
  children,
  pending,
}: {
  children: ReactNode;
  pending: boolean;
}) {
  const ko = useLocale() === "ko";
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-full bg-lime px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:brightness-105 disabled:opacity-60"
    >
      {pending ? (ko ? "처리 중..." : "Processing...") : children}
    </button>
  );
}
