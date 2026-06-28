import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/** 공개 페이지 사이트맵 (검색엔진 색인용) */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/coaches", priority: 0.8, changeFrequency: "monthly" },
    { path: "/players", priority: 0.7, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
    { path: "/training", priority: 0.8, changeFrequency: "monthly" },
    { path: "/recreational", priority: 0.7, changeFrequency: "monthly" },
    { path: "/consulting", priority: 0.8, changeFrequency: "monthly" },
    { path: "/scholarship", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
