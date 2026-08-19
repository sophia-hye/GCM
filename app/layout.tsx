import type { Metadata } from "next";
import { Archivo, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-url";
import { StructuredData } from "@/components/StructuredData";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});

const SITE_DESCRIPTION =
  "엘리트 선수 육성 | ATP•WTA•ITF 프로/주니어 집중 훈련 | 테니스 대학리그 진출 (미국 NCAA 진학)";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GCM 테니스 아카데미 | 엘리트 선수 육성 · 테니스 유학 · NCAA 진학",
  description: SITE_DESCRIPTION,
  keywords: [
    "GCM 테니스 아카데미",
    "테니스 아카데미",
    "테니스 유학",
    "엘리트 테니스",
    "선수 육성",
    "NCAA 진학",
    "테니스 장학",
    "UTR",
    "오성국",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "GCM 테니스 아카데미 | 엘리트 선수 육성 · 테니스 유학 · NCAA 진학",
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "GCM 테니스 아카데미",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCM 테니스 아카데미 | 엘리트 선수 육성 · 테니스 유학 · NCAA 진학",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // GA4 측정 ID: env(NEXT_PUBLIC_GA_ID)가 있으면 우선, 없으면 프로덕션 배포에서만 기본 ID 사용.
  // (로컬·프리뷰 트래픽이 GA에 섞이지 않도록 production 에서만 로드)
  const gaId =
    process.env.NEXT_PUBLIC_GA_ID ??
    (process.env.VERCEL_ENV === "production" ? "G-XV035JGQB7" : undefined);

  return (
    <html lang="ko" className={`${archivo.variable} ${playfair.variable} h-full antialiased`}>
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      <body className="min-h-full flex flex-col bg-base text-ink">
        {/* 한글 본문 폰트(Wanted Sans)를 렌더 블로킹 없이 로드 — CDN 지연/차단 시에도 앱 CSS는 즉시 적용되고 폰트만 폴백(system-ui) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.createElement('link');l.rel='stylesheet';" +
              "l.href='https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css';" +
              "l.media='print';l.onload=function(){l.media='all'};document.head.appendChild(l);})();",
          }}
        />
        <StructuredData />
        {children}
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
