import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { getPublishedPlayers } from "@/lib/players-query";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/i18n-pick";
import { languageAlternates } from "@/lib/page-metadata";

function urlFor(locale: string, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const p = path === "/" ? "" : path;
  return `${SITE_URL}${prefix}${p}` || SITE_URL;
}

/** 공개 페이지 사이트맵 — 7개 언어 URL + hreflang alternates(검색엔진 색인용) */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/coaches", priority: 0.8, changeFrequency: "monthly" },
    { path: "/players", priority: 0.8, changeFrequency: "monthly" },
    { path: "/alumni", priority: 0.7, changeFrequency: "monthly" },
    { path: "/testimonial", priority: 0.7, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
    { path: "/training", priority: 0.8, changeFrequency: "monthly" },
    { path: "/recreational", priority: 0.7, changeFrequency: "monthly" },
    { path: "/consulting", priority: 0.8, changeFrequency: "monthly" },
    { path: "/scholarship", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const entry = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
  ): MetadataRoute.Sitemap => {
    const languages = languageAlternates(path);
    return LOCALES.map((l) => ({
      url: urlFor(l, path),
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  };

  const staticEntries = routes.flatMap((r) => entry(r.path, r.changeFrequency, r.priority));

  // 개별 선수 페이지 (DB 조회 실패 시에도 사이트맵은 정적 경로로 응답)
  let players: Awaited<ReturnType<typeof getPublishedPlayers>> = [];
  try {
    players = await getPublishedPlayers();
  } catch {
    players = [];
  }
  const playerEntries = players.flatMap((p) => entry(`/players/${p.slug}`, "monthly", 0.6));

  return [...staticEntries, ...playerEntries];
}
