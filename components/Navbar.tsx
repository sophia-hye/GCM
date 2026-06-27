"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site-data";
import { signOut } from "@/app/auth/actions";
import { Container } from "@/components/ui";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LocaleToggle } from "@/components/i18n/LocaleToggle";

const NAV_T = {
  ko: { login: "로그인", signup: "회원가입", mypage: "마이페이지", logout: "로그아웃" },
  en: { login: "Login", signup: "Sign up", mypage: "My Page", logout: "Logout" },
} as const;

type NavAuth = { name: string; role: string } | null;

export function Navbar({ auth = null }: { auth?: NavAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const locale = useLocale();
  const t = NAV_T[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // solid: 밝은 배경 위(다크 텍스트). 투명: Home 최상단의 어두운 Hero 위(흰 텍스트).
  const solid = scrolled || open || !isHome;
  const logoColor = solid ? "text-ink" : "text-white";
  const linkColor = solid ? "text-ink" : "text-white/80";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-base/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className={`font-display text-xl font-extrabold tracking-tight ${logoColor}`}>
            {site.name}
            <span className="text-lime">.</span>
          </span>
          <span
            className={`text-[10px] font-medium uppercase tracking-widest ${
              solid ? "text-muted" : "text-white/70"
            }`}
          >
            with
          </span>
          <Image
            src="/logo/equre.png"
            alt="egüre"
            width={2670}
            height={1006}
            priority
            className={`h-4 w-auto translate-y-[6px] ${solid ? "" : "invert"}`}
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm transition-colors hover:opacity-80 ${
                  active ? (solid ? "text-court" : "text-lime") : linkColor
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LocaleToggle light={!solid} />
          {auth ? (
            <>
              <Link
                href="/dashboard"
                className={`whitespace-nowrap text-sm transition-colors hover:opacity-80 ${linkColor}`}
              >
                {t.mypage}
              </Link>
              <form action={signOut}>
                <button
                  type="submit"
                  className={`whitespace-nowrap text-sm transition-colors hover:opacity-80 ${linkColor}`}
                >
                  {t.logout}
                </button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`whitespace-nowrap text-sm transition-colors hover:opacity-80 ${linkColor}`}
              >
                {t.login}
              </Link>
              <Link
                href="/signup"
                className="whitespace-nowrap rounded-full bg-court px-4 py-2 text-sm font-semibold text-white transition hover:brightness-105"
              >
                {t.signup}
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border xl:hidden ${
            solid
              ? "border-line text-ink"
              : "border-white/70 bg-black/30 text-white backdrop-blur"
          }`}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </Container>

      {open ? (
        <Container className="xl:hidden">
          <nav className="flex flex-col gap-1 border-t border-line py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 text-sm hover:bg-card hover:text-ink ${
                  pathname === item.href ? "text-court" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-2 py-2">
              <LocaleToggle />
            </div>
            {auth ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-semibold text-court hover:bg-card"
                >
                  {t.mypage}
                </Link>
                <form action={signOut}>
                  <button
                    type="submit"
                    className="w-full rounded-lg px-2 py-2 text-left text-sm text-ink hover:bg-card"
                  >
                    {t.logout}
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm text-ink hover:bg-card"
                >
                  {t.login}
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-semibold text-court hover:bg-card"
                >
                  {t.signup}
                </Link>
              </>
            )}
          </nav>
        </Container>
      ) : null}
    </header>
  );
}
