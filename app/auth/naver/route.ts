import { NextResponse, type NextRequest } from "next/server";
import { NAVER_CLIENT_ID, isNaverConfigured } from "@/lib/supabase/env";

/** 네이버 로그인 시작 — 네이버 인가 페이지로 리다이렉트(state 쿠키로 CSRF 방지) */
export async function GET(request: NextRequest) {
  const { origin } = request.nextUrl;

  if (!isNaverConfigured()) {
    return NextResponse.redirect(`${origin}/login?error=naver_not_configured`);
  }

  const state = crypto.randomUUID();
  const redirectUri = `${origin}/auth/naver/callback`;

  const authUrl = new URL("https://nid.naver.com/oauth2.0/authorize");
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("client_id", NAVER_CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("state", state);

  const res = NextResponse.redirect(authUrl.toString());
  res.cookies.set("naver_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return res;
}
