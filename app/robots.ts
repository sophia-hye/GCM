import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/** robots.txt — 공개 페이지 허용, 인증/관리/내부 경로 차단, 사이트맵 안내 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/dashboard",
        "/auth",
        "/api",
        "/onboarding",
        "/apply",
        "/login",
        "/signup",
        "/welcome",
        "/logout",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
