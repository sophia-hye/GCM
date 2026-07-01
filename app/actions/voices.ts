"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type VoiceState = { error?: string };

/** 회원: 이야기 작성 (항상 pending 으로 생성, 관리자 승인 후 공개) */
export async function submitVoice(_prev: VoiceState, formData: FormData): Promise<VoiceState> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "로그인이 필요합니다." };

  const relation = String(formData.get("relation") ?? "");
  const authorName = String(formData.get("author_name") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim() || null;
  const body = String(formData.get("body") ?? "").trim();

  if (!["player", "parent"].includes(relation)) return { error: "구분을 선택해 주세요." };
  if (!authorName) return { error: "표시할 이름을 입력해 주세요." };
  if (body.length < 5) return { error: "내용을 입력해 주세요." };

  const { error } = await supabase.from("gcm_voices").insert({
    user_id: user.id,
    relation,
    author_name: authorName,
    title,
    body,
    status: "pending",
  });

  if (error) {
    if (/find the table|does not exist/i.test(error.message)) {
      return { error: "게시판이 아직 준비되지 않았습니다. 관리자에게 문의해 주세요." };
    }
    return { error: "저장 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." };
  }

  revalidatePath("/voices");
  redirect("/voices?submitted=1");
}
