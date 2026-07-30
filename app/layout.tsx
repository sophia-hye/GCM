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
  "기술·피지컬·멘탈을 통합한 고성능 테니스 아카데미. 오성국 대표(前 주니어 국가대표 코치)가 이끌며 UTR 성장 로드맵, ATP·WTA 프로 진출, 미국 대학(NCAA) 진학·장학 컨설팅까지 함께합니다.";

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
      <body className="min-h-full flex flex-col bg-base text-ink">
        <StructuredData />
        {children}
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
