import type { Metadata } from "next";
import { Archivo, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-url";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GCM Tennis Academy | 고성능 테니스 트레이닝",
  description:
    "기술 · 피지컬 · 멘탈을 통합한 고성능 테니스 아카데미. 진지한 선수를 위한 구조화된 트레이닝과 UTR 성장 로드맵, 프로·대학 진로를 함께합니다.",
  openGraph: {
    title: "GCM Tennis Academy | 고성능 테니스 트레이닝",
    description:
      "기술 · 피지컬 · 멘탈을 하나로. 진지한 선수를 위한 고성능 트레이닝 환경.",
    type: "website",
    siteName: "GCM Tennis Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCM Tennis Academy | 고성능 테니스 트레이닝",
    description: "기술 · 피지컬 · 멘탈을 하나로. 진지한 선수를 위한 고성능 트레이닝 환경.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${archivo.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base text-ink">
        {children}
      </body>
    </html>
  );
}
