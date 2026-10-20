import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";
import { getLocale } from "@/lib/i18n";
import { LOCALES, localePrefix, DEFAULT_LOCALE, OG_LOCALES } from "@/lib/i18n-pick";

/** 주어진 unprefixed 경로에 대한 로케일별 절대 URL */
function urlFor(locale: string, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const p = path === "/" ? "" : path;
  return `${SITE_URL}${prefix}${p}` || SITE_URL;
}

/** hreflang alternates(언어별 URL + x-default) 생성 */
export function languageAlternates(path: string): Record<string, string> {
  const langs: Record<string, string> = { "x-default": urlFor(DEFAULT_LOCALE, path) };
  for (const l of LOCALES) langs[l] = urlFor(l, path);
  return langs;
}

/**
 * 페이지별 메타데이터 생성 — 페이지 고유 title/description 을 OG·Twitter 에도 반영.
 * 현재 로케일의 canonical + 전 로케일 hreflang(alternates.languages) 을 자동 설정한다.
 * OG 이미지는 루트 `app/opengraph-image.tsx`(브랜드 이미지)를 전 페이지가 공유한다.
 */
export async function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Promise<Metadata> {
  const locale = await getLocale();
  const canonical = `${localePrefix(locale)}${path === "/" ? "" : path}` || "/";
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: urlFor(locale, path),
      type: "website",
      siteName: "GCM 테니스 아카데미",
      locale: OG_LOCALES[locale],
      // 페이지별 openGraph 를 지정하면 루트 opengraph-image 상속이 끊기므로 명시한다.
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "GCM Tennis Academy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
