import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

/**
 * 페이지별 메타데이터 생성 — 페이지 고유 title/description 을 OG·Twitter 에도 반영해
 * 각 페이지가 자기만의 소셜 미리보기(제목·설명·URL)를 갖게 한다.
 * OG 이미지는 루트 `app/opengraph-image.tsx`(브랜드 이미지)를 전 페이지가 공유한다.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      type: "website",
      siteName: "GCM 테니스 아카데미",
      locale: "ko_KR",
      // 페이지별 openGraph 를 지정하면 루트 opengraph-image 상속이 끊기므로 명시한다.
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "GCM Tennis Academy — GCM. with egüre",
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
