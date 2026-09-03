import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site-data";
import { getLocale } from "@/lib/i18n";

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

const kakaoIcon = (
  <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
    <path d="M12 3C6.48 3 2 6.58 2 11c0 2.84 1.94 5.34 4.87 6.73-.16.55-.86 3-.9 3.19 0 0-.02.15.08.21.1.06.22.01.22.01.28-.04 3.2-2.16 3.71-2.53.56.08 1.13.12 1.72.12 5.52 0 10-3.58 10-8S17.52 3 12 3z" />
  </svg>
);

// 순서: 카톡 채널 · 인스타그램 · Contact · 상담하기 (카톡·인스타는 새 창)
function getItems(ko: boolean): Item[] {
  return [
    ...(site.kakao
      ? [{ href: site.kakao, label: ko ? "카카오톡 채널" : "KakaoTalk Channel", external: true, icon: kakaoIcon }]
      : []),
    { href: site.instagram, label: "Instagram", external: true, icon: instagramIcon },
    { href: "/contact", label: "Contact", icon: contactIcon },
    { href: "/consulting", label: ko ? "상담하기" : "Consultation", icon: consultationIcon },
  ];
}

/** 화면 우측에 항상 떠 있는 바로가기 패널 (카톡 · 인스타 · Contact · 상담) */
export async function FloatingMenu() {
  const ko = (await getLocale()) === "ko";
  const items = getItems(ko);
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-center gap-1 rounded-full border border-line bg-base/85 p-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur sm:right-6">
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
