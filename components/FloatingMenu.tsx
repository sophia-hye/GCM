import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site-data";

type Item = {
  href: string;
  label: string;
  external?: boolean;
  icon: ReactNode;
};

const iconClass = "h-5 w-5";

const consultationIcon = (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const contactIcon = (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const instagramIcon = (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const items: Item[] = [
  { href: "/consulting", label: "상담 신청", icon: consultationIcon },
  { href: "/contact", label: "연락처", icon: contactIcon },
  { href: site.instagram, label: "인스타그램", external: true, icon: instagramIcon },
];

/** 화면 우측에 항상 떠 있는 바로가기 패널 (상담 · 연락처 · 인스타그램) */
export function FloatingMenu() {
  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-1 rounded-full border border-line bg-base/85 p-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur sm:right-6">
      {items.map((item, i) => (
        <div key={item.label} className="flex flex-col items-center">
          {i > 0 ? <span className="my-0.5 h-px w-6 bg-line" /> : null}
          <Link
            href={item.href}
            aria-label={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-court hover:text-white"
          >
            {item.icon}
            <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-base/90 px-3 py-1.5 text-xs font-semibold text-ink opacity-0 shadow transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
