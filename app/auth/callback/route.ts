import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/** 이메일 확인 / 소셜(카카오) 로그인 콜백: code 를 세션으로 교환 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code && isSupabaseConfigured()) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // 소셜 가입자는 전화번호/구분 정보가 없으므로 온보딩으로 유도
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from("gcm_profiles")
          .select("phone")
          .eq("id", user.id)
          .maybeSingle();
        if (!profile?.phone) {
          return NextResponse.redirect(`${origin}/onboarding`);
        }
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login`);
}
