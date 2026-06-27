"use server";

import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export type AdultApplyState = { ok?: boolean; error?: string };

/** 성인 아마추어 클래스 신청 — 로그인한 회원만, gcm_inquiries 에 저장 */
export async function submitAdultApplication(
  _prev: AdultApplyState,
  formData: FormData,
): Promise<AdultApplyState> {
  if (!isSupabaseConfigured()) {
    return { error: "백엔드가 아직 설정되지 않았습니다." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: "로그인이 필요합니다. 다시 로그인해 주세요." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const gender = String(formData.get("gender") ?? "");
  const times = formData.getAll("times").map(String);
  const club = String(formData.get("club") ?? "").trim();
  const experience = String(formData.get("experience") ?? "").trim();
  const achievement = String(formData.get("achievement") ?? "");
  const improve = String(formData.get("improve") ?? "").trim();
  const videoConsent = String(formData.get("videoConsent") ?? "");
  const privacyConsent = formData.get("privacyConsent");

  if (!name || !phone) return { error: "이름과 연락처를 입력해 주세요." };
  if (!gender) return { error: "성별을 선택해 주세요." };
  if (times.length === 0) return { error: "희망 수업 시간을 1개 이상 선택해 주세요." };
  if (!achievement) return { error: "최고 대회 성적을 선택해 주세요." };
  if (!videoConsent) return { error: "영상 촬영·홍보 활용 동의 여부를 선택해 주세요." };
  if (!privacyConsent) return { error: "개인정보 수집·이용에 동의해 주세요." };

  const message = [
    "[성인 아마추어 클래스 신청]",
    `성별: ${gender}`,
    `희망 수업 시간: ${times.join(", ")}`,
    `현재 소속 클럽/협회: ${club || "-"}`,
    `테니스 구력: ${experience || "-"}`,
    `최고 대회 성적: ${achievement}`,
    `보완하고 싶은 부분: ${improve || "-"}`,
    `영상 촬영·홍보 활용 동의: ${videoConsent}`,
    `신청자 이메일: ${user.email ?? "-"}`,
  ].join("\n");

  const { error } = await supabase.from("gcm_inquiries").insert({
    name,
    phone,
    email: user.email ?? null,
    message,
  });

  if (error) {
    return { error: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." };
  }

  return { ok: true };
}
