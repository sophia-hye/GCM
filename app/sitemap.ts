import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { getPublishedPlayers } from "@/lib/players-query";

/** 공개 페이지 사이트맵 (검색엔진 색인용) — 정적 경로 + 선수·Alumni 개별 페이지 */
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

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // 개별 선수 페이지 (DB 조회 실패 시에도 사이트맵은 정적 경로로 응답)
  let players: Awaited<ReturnType<typeof getPublishedPlayers>> = [];
  try {
    players = await getPublishedPlayers();
  } catch {
    players = [];
  }
  const playerEntries: MetadataRoute.Sitemap = players.map((p) => ({
    url: `${SITE_URL}/players/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...playerEntries];
}
