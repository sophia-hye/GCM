"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site-data";
import { Button, Container } from "@/components/ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-base/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="font-display text-xl font-extrabold tracking-tight">
          {site.name}
          <span className="text-lime">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            로그인
          </Link>
          <Button href="#contact" variant="lime" className="px-5 py-2">
            무료 상담
          </Button>
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </Container>

      {open ? (
        <Container className="md:hidden">
          <nav className="flex flex-col gap-1 border-t border-line py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-muted hover:bg-card hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Button href="#contact" variant="lime" className="mt-2">
              무료 상담
            </Button>
          </nav>
        </Container>
      ) : null}
    </header>
  );
}
