import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { localeFromPath, DEFAULT_LOCALE } from "@/lib/i18n-pick";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 기본 로케일(ko)은 접두어를 쓰지 않는다. /ko/* 접근은 접두어 없는 경로로 영구 이동.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const { locale, rest } = localeFromPath(pathname);
  return updateSession(request, locale, rest);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
