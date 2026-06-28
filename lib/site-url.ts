/** 사이트 기본 URL (sitemap/robots/메타데이터용). 배포 환경변수로 덮어쓸 수 있음. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gcmacademy.com"
).replace(/\/$/, "");
