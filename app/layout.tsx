import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GCM 아카데미 | 미국 대학 테니스 진학 & 프리미엄 매니지먼트",
  description:
    "데이터로 설계하고 멘탈로 지켜내는 미국 대학 테니스(NCAA D1)의 완벽한 길. GCM과 COV가 한 팀으로 UTR 로드맵, ROI 전략, Total Care를 제공합니다.",
  openGraph: {
    title: "GCM 아카데미 | 미국 대학 테니스 진학",
    description:
      "UTR 로드맵 · ROI 전략 · Total Care System으로 완성하는 미국 대학 테니스 진학.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base text-ink">
        {children}
      </body>
    </html>
  );
}
