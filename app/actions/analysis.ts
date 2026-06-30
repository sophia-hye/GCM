"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export type AnalysisState = { ok?: boolean; error?: string };

/** 선수: 경기 자기분석 제출 */
export async function submitMatchAnalysis(
  _prev: AnalysisState,
  formData: FormData,
): Promise<AnalysisState> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "로그인이 필요합니다." };

  // 승인된 선수(또는 관리자)만 작성 가능
  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("approved, role")
    .eq("id", user.id)
    .maybeSingle();
  if (!(profile?.approved || profile?.role === "admin")) {
    return { error: "코치 승인 후 작성할 수 있습니다. 관리자에게 문의해 주세요." };
  }

  const matchDate = String(formData.get("match_date") ?? "").trim();
  if (!matchDate) return { error: "경기 날짜를 입력해 주세요." };

  const text = (k: string) => {
    const v = String(formData.get(k) ?? "").trim();
    return v || null;
  };

  const { error } = await supabase.from("gcm_match_analyses").insert({
    user_id: user.id,
    match_date: matchDate,
    opponent: text("opponent"),
    better_than_last: text("better_than_last"),
    improved_than_last: text("improved_than_last"),
    worse_than_last: text("worse_than_last"),
    needed: text("needed"),
    needed_practice: text("needed_practice"),
  });

  if (error) {
    if (/relation .*gcm_match_analyses.* does not exist|find the table/i.test(error.message)) {
      return { error: "분석 테이블이 아직 준비되지 않았습니다. 관리자에게 문의해 주세요." };
    }
    return { error: "저장 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." };
  }

  revalidatePath("/dashboard/analysis");
  return { ok: true };
}
