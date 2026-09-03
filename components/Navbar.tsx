"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site-data";
import { Container } from "@/components/ui";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LocaleToggle } from "@/components/i18n/LocaleToggle";

const NAV_T = {
  ko: { login: "로그인", signup: "회원가입", mypage: "마이페이지", logout: "로그아웃" },
  en: { login: "Login", signup: "Sign up", mypage: "My Page", logout: "Logout" },
} as const;

/** nav 라벨은 대부분 영문이지만 한국어인 항목만 EN에서 번역 */
const NAV_LABEL_EN: Record<string, string> = {
  "대표원장 인사말": "Director's Message",
};
function navLabel(label: string, locale: "ko" | "en"): string {
  return locale === "en" ? NAV_LABEL_EN[label] ?? label : label;
}

type NavAuth = { name: string; role: string } | null;

export function Navbar({ auth = null }: { auth?: NavAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
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

  const solid = scrolled || open || !isHome;
  const logoColor = solid ? "text-ink" : "text-white";
  const linkColor = solid ? "text-ink" : "text-white/85";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-base/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-baseline gap-2">
          <span className={`font-display text-xl font-extrabold tracking-tight ${logoColor}`}>
            {site.name}
            <span className="text-lime">.</span>
          </span>
        </Link>

        {/* 데스크톱: 그룹 + 드롭다운(hover) */}
        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((group) =>
            "href" in group ? (
              <Link
                key={group.label}
                href={group.href}
                className={`whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors hover:opacity-80 ${linkColor}`}
              >
                {group.label}
              </Link>
            ) : (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors hover:opacity-80 ${linkColor}`}
              >
                {group.label}
                <svg
                  className="h-3 w-3 opacity-70 transition-transform duration-200 group-hover:rotate-180"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden
                >
                  <path d="M2.5 4.5 6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="min-w-[190px] rounded-xl border border-line bg-base/95 p-2 shadow-xl backdrop-blur">
                  {group.items.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className={`block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors hover:bg-card ${
                        pathname === it.href ? "font-semibold text-court" : "text-ink"
                      }`}
                    >
                      {navLabel(it.label, locale)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <LocaleToggle light={!solid} />
          {auth ? (
            <>
              <Link
                href="/dashboard"
                className={`whitespace-nowrap text-sm transition-colors hover:opacity-80 ${linkColor}`}
              >
                {t.mypage}
              </Link>
              <LogoutButton
                className={`whitespace-nowrap text-sm transition-colors hover:opacity-80 ${linkColor}`}
              >
                {t.logout}
              </LogoutButton>
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
            solid ? "border-line text-ink" : "border-white/70 bg-black/30 text-white backdrop-blur"
          }`}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </Container>

      {/* 모바일: 아코디언 */}
      {open ? (
        <Container className="xl:hidden">
          <nav className="flex max-h-[76vh] flex-col gap-1 overflow-y-auto border-t border-line py-4">
            {nav.map((group) => {
              if ("href" in group) {
                return (
                  <Link
                    key={group.label}
                    href={group.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-2 py-2.5 text-sm font-semibold hover:bg-card ${
                      pathname === group.href ? "text-court" : "text-ink"
                    }`}
                  >
                    {group.label}
                  </Link>
                );
              }
              const isOpen = openGroup === group.label;
              return (
                <div key={group.label}>
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-sm font-semibold text-ink hover:bg-card"
                  >
                    {group.label}
                    <span className="text-muted">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <div className="mb-1 ml-2 flex flex-col border-l border-line pl-2">
                      {group.items.map((it) => (
                        <Link
                          key={it.href}
                          href={it.href}
                          onClick={() => setOpen(false)}
                          className={`rounded-lg px-2 py-2 text-sm hover:bg-card ${
                            pathname === it.href ? "font-semibold text-court" : "text-muted"
                          }`}
                        >
                          {navLabel(it.label, locale)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}

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
                <LogoutButton className="w-full rounded-lg px-2 py-2 text-left text-sm text-ink hover:bg-card">
                  {t.logout}
                </LogoutButton>
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
