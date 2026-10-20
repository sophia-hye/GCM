import type { Metadata } from "next";
import { Archivo, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-url";
import { StructuredData } from "@/components/StructuredData";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { getLocale } from "@/lib/i18n";
import { OG_LOCALES, localePrefix, pick } from "@/lib/i18n-pick";
import { languageAlternates } from "@/lib/page-metadata";

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

const SITE_DESCRIPTION_KO =
  "엘리트 선수 육성 | ATP•WTA•ITF 프로/주니어 집중 훈련 | 테니스 대학리그 진출 (미국 NCAA 진학)";
const SITE_DESCRIPTION_EN =
  "Elite player development | ATP/WTA/ITF pro & junior intensive training | Pathway to U.S. college tennis (NCAA)";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = pick(locale, {
    ko: "GCM 테니스 아카데미 | 엘리트 선수 육성 · 테니스 유학 · NCAA 진학",
    en: "GCM Tennis Academy | Elite Player Development · Study Abroad · NCAA",
    zh: "GCM 网球学院 | 精英选手培养 · 网球留学 · NCAA 升学",
    ja: "GCM テニスアカデミー | エリート選手育成 · テニス留学 · NCAA 進学",
    it: "GCM Tennis Academy | Sviluppo di atleti d'élite · Studio all'estero · NCAA",
    fr: "GCM Tennis Academy | Formation de joueurs d'élite · Études à l'étranger · NCAA",
    es: "GCM Tennis Academy | Formación de jugadores de élite · Estudios en el extranjero · NCAA",
  });
  const description = pick(locale, {
    ko: SITE_DESCRIPTION_KO,
    en: SITE_DESCRIPTION_EN,
    zh: "精英选手培养 | ATP·WTA·ITF 职业/青少年集训 | 通往美国大学网球（NCAA 升学）",
    ja: "エリート選手育成 | ATP·WTA·ITF プロ/ジュニア集中トレーニング | 米国大学テニスへの道（NCAA 進学）",
    it: "Sviluppo di giocatori d'élite | Allenamento intensivo pro e junior ATP/WTA/ITF | Percorso verso il tennis universitario USA (NCAA)",
    fr: "Formation de joueurs d'élite | Entraînement intensif pro et junior ATP/WTA/ITF | Voie vers le tennis universitaire américain (NCAA)",
    es: "Formación de jugadores de élite | Entrenamiento intensivo pro y júnior ATP/WTA/ITF | Vía al tenis universitario de EE. UU. (NCAA)",
  });
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
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
    alternates: { canonical: localePrefix(locale) || "/", languages: languageAlternates("/") },
    openGraph: {
      title,
      description,
      type: "website",
      locale: OG_LOCALES[locale],
      url: SITE_URL,
      siteName: pick(locale, {
        ko: "GCM 테니스 아카데미",
        en: "GCM Tennis Academy",
        zh: "GCM 网球学院",
        ja: "GCM テニスアカデミー",
        it: "GCM Tennis Academy",
        fr: "GCM Tennis Academy",
        es: "GCM Tennis Academy",
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // GA4 측정 ID: env(NEXT_PUBLIC_GA_ID)가 있으면 우선, 없으면 프로덕션 배포에서만 기본 ID 사용.
  // (로컬·프리뷰 트래픽이 GA에 섞이지 않도록 production 에서만 로드)
  const gaId =
    process.env.NEXT_PUBLIC_GA_ID ??
    (process.env.VERCEL_ENV === "production" ? "G-XV035JGQB7" : undefined);

  const locale = await getLocale();

  return (
    <html lang={locale} className={`${archivo.variable} ${playfair.variable} h-full antialiased`}>
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
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
