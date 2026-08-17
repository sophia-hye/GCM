import { NextRequest } from "next/server";

/**
 * 팝업 SVG 프록시 — Supabase 스토리지가 SVG를 강제 다운로드(Content-Disposition: attachment)로
 * 서빙하는 문제를 우회한다. 동일 출처에서 'inline' 으로 재서빙하되, 스크립트 실행은 CSP 로 차단해
 * 저장형 XSS 를 방지한다. (우리 Supabase 스토리지 URL 만 허용)
 */
export async function GET(req: NextRequest) {
  const u = req.nextUrl.searchParams.get("u");
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!u || !base || !u.startsWith(`${base}/storage/v1/object/public/`)) {
    return new Response("Bad request", { status: 400 });
  }

  const upstream = await fetch(u);
  if (!upstream.ok) return new Response("Not found", { status: 404 });

  const buf = await upstream.arrayBuffer();
  const type = upstream.headers.get("content-type") || "application/octet-stream";

  return new Response(buf, {
    headers: {
      "Content-Type": type,
      "Content-Disposition": "inline",
      "X-Content-Type-Options": "nosniff",
      // 직접 접근해도 스크립트 실행 불가(SVG 내 스크립트 차단)
      "Content-Security-Policy": "sandbox; default-src 'none'; style-src 'unsafe-inline'; img-src data:",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
