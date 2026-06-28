import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET,
  isNaverConfigured,
  isAdminConfigured,
} from "@/lib/supabase/env";

/**
 * 네이버 OAuth 콜백.
 * code → 토큰 → 프로필(email) 확인 후, service_role 로 Supabase 사용자 생성/조회하고
 * 매직링크 OTP 로 세션을 발급(쿠키 설정)한다.
 */
export async function GET(request: NextRequest) {
  const { origin, searchParams } = request.nextUrl;
  const fail = (code: string) =>
    NextResponse.redirect(`${origin}/login?error=${code}`);

  if (!isNaverConfigured() || !isAdminConfigured()) {
    return fail("naver_not_configured");
  }

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const cookieState = request.cookies.get("naver_oauth_state")?.value;
  if (!code || !state || !cookieState || state !== cookieState) {
    return fail("naver_state");
  }

  // 1) 토큰 교환
  const tokenUrl = new URL("https://nid.naver.com/oauth2.0/token");
  tokenUrl.searchParams.set("grant_type", "authorization_code");
  tokenUrl.searchParams.set("client_id", NAVER_CLIENT_ID);
  tokenUrl.searchParams.set("client_secret", NAVER_CLIENT_SECRET);
  tokenUrl.searchParams.set("code", code);
  tokenUrl.searchParams.set("state", state);

  const tokenRes = await fetch(tokenUrl.toString());
  const tokenJson = await tokenRes.json();
  const accessToken = tokenJson?.access_token as string | undefined;
  if (!accessToken) return fail("naver_token");

  // 2) 프로필 조회
  const meRes = await fetch("https://openapi.naver.com/v1/nid/me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const meJson = await meRes.json();
  const profile = meJson?.response;
  const email: string | undefined = profile?.email;
  const name: string = profile?.name ?? profile?.nickname ?? "";
  if (!email) return fail("naver_no_email");

  // 3) Supabase 사용자 보장(없으면 생성)
  const admin = createAdminClient();
  const created = await admin.auth.admin.createUser({
    email,
    email_confirm: true,
    user_metadata: { name, email, role: "student", source: "gcm", provider: "naver" },
  });
  // 이미 존재하는 사용자면 createUser 가 에러를 반환하지만 이후 단계에서 정상 처리된다.
  if (created.error && !/already/i.test(created.error.message)) {
    return fail("naver_user");
  }

  // 4) 매직링크 OTP 로 세션 발급
  const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email,
  });
  const otp = linkData?.properties?.email_otp;
  if (linkErr || !otp) return fail("naver_session");

  const supabase = await createClient();
  const { error: verifyErr } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: "email",
  });
  if (verifyErr) return fail("naver_session");

  // 소셜 가입자는 전화번호/구분 정보가 없으므로 온보딩으로 유도
  const {
    data: { user: sessionUser },
  } = await supabase.auth.getUser();
  let dest = `${origin}/`;
  if (sessionUser) {
    const { data: profile } = await supabase
      .from("gcm_profiles")
      .select("phone")
      .eq("id", sessionUser.id)
      .maybeSingle();
    if (!profile?.phone) dest = `${origin}/onboarding`;
  }

  const res = NextResponse.redirect(dest);
  res.cookies.delete("naver_oauth_state");
  return res;
}
