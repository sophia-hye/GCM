import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/** 성인 아마추어 클래스 신청 입력 폼 (Google Forms) */
const FORM_URL =
  "https://docs.google.com/forms/d/1n5xFCJ7ZG44ZOwu8TT5Y4e9TNPPosmcYQyBPMJkv4YA/viewform";

/**
 * 성인 클래스 수업 신청 게이트.
 * - 로그인 상태: 구글 폼으로 이동
 * - 비로그인: 로그인 페이지로 이동(로그인 후 다시 이 경로로 복귀)
 */
export async function GET(request: NextRequest) {
  const { origin } = request.nextUrl;

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      return NextResponse.redirect(FORM_URL);
    }
  }

  const loginUrl = `${origin}/login?next=${encodeURIComponent("/apply/adult")}`;
  return NextResponse.redirect(loginUrl);
}
