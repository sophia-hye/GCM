"use server";

import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export type InquiryState = { ok?: boolean; error?: string };

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !phone || !message) {
    return { error: "이름, 연락처, 상담 내용을 입력해 주세요." };
  }

  // 백엔드 미설정 시: 저장은 건너뛰고 접수 처리(개발/프리뷰 환경)
  if (!isSupabaseConfigured()) {
    return { ok: true };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("inquiries")
    .insert({ name, phone, email: email || null, message });

  if (error) {
    return { error: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." };
  }

  return { ok: true };
}
