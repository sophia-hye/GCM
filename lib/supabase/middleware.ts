import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "./env";
import { localePrefix, type Locale } from "@/lib/i18n-pick";

/**
 * 미들웨어에서 세션 토큰을 갱신하고 보호 라우트 접근을 제어한다.
 * 또한 언어별 URL 접두어(/en, /zh 등)를 내부 경로로 rewrite 하고,
 * 선택된 로케일을 x-gcm-locale 헤더로 전달한다(getLocale 이 읽음).
 */
export async function updateSession(
  request: NextRequest,
  locale: Locale,
  rest: string,
) {
  // 접두어가 제거되어 rest 가 원래 경로와 다르면 rewrite 가 필요하다.
  const needsRewrite = request.nextUrl.pathname !== rest;

  const reqHeaders = new Headers(request.headers);
  reqHeaders.set("x-gcm-locale", locale);

  const makeResponse = () => {
    if (needsRewrite) {
      const url = request.nextUrl.clone();
      url.pathname = rest;
      return NextResponse.rewrite(url, { request: { headers: reqHeaders } });
    }
    return NextResponse.next({ request: { headers: reqHeaders } });
  };

  let response = makeResponse();

  // 자격증명 미설정 시 인증 로직을 건너뛴다(공개 페이지 정상 동작).
  if (!isSupabaseConfigured()) {
    return response;
  }

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = makeResponse();
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 라우트 판정은 접두어를 제거한 경로(rest) 기준, 리다이렉트는 로케일 접두어 유지
  const lp = localePrefix(locale);
  if (!user && (rest.startsWith("/dashboard") || rest.startsWith("/admin"))) {
    const url = request.nextUrl.clone();
    url.pathname = `${lp}/login`;
    return NextResponse.redirect(url);
  }

  // 인증된 사용자가 로그인/회원가입 페이지 접근 시 홈으로
  if (user && (rest === "/login" || rest === "/signup")) {
    const url = request.nextUrl.clone();
    url.pathname = lp || "/";
    return NextResponse.redirect(url);
  }

  return response;
}
