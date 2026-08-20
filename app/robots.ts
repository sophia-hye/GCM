import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/** 비공개(인증/관리/내부) 경로 — 모든 크롤러 공통 차단 */
const DISALLOW = [
  "/admin",
  "/dashboard",
  "/match-feedback",
  "/auth",
  "/api",
  "/onboarding",
  "/apply",
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/welcome",
  "/logout",
];

/**
 * 검색 크롤러 + 생성형 AI(GEO) 크롤러를 명시적으로 허용한다.
 * - 검색: 기본(*) 규칙으로 Googlebot·Bingbot·네이버(Yeti) 등 모두 허용
 * - GEO: ChatGPT(GPTBot·OAI-SearchBot·ChatGPT-User), Gemini/Vertex(Google-Extended),
 *   Perplexity(PerplexityBot), Claude(ClaudeBot·Claude-Web), Apple(Applebot-Extended)
 *   → 공개 페이지 색인·인용을 허용해 답변 엔진 노출 가능성을 연다.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-Web",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
