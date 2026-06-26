"use server";

import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import {
  consultationForm,
  scholarshipForm,
  fieldLabelMap,
  type FormSection,
} from "@/lib/forms";

export type ApplicationState = { ok?: boolean; error?: string };

const CONFIG: Record<string, { sections: FormSection[]; tag: string }> = {
  scholarship: { sections: scholarshipForm, tag: "장학 신청" },
  consultation: { sections: consultationForm, tag: "상담 신청" },
};

export async function submitApplication(
  type: "scholarship" | "consultation",
  _prev: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  const conf = CONFIG[type];
  if (!conf) return { error: "잘못된 요청입니다." };

  const labels = fieldLabelMap(conf.sections);
  const first = String(formData.get("firstName") ?? "").trim();
  const last = String(formData.get("lastName") ?? "").trim();
  const name = `${last}${first}`.trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  if (!name || !phone) {
    return { error: "이름과 전화번호는 필수입니다." };
  }

  // 이메일 형식 검증
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "이메일 형식이 올바르지 않습니다." };
  }

  // 키 · 체중 범위 검증 (장학 신청)
  if (type === "scholarship") {
    const height = Number(formData.get("height"));
    const weight = Number(formData.get("weight"));
    if (!Number.isFinite(height) || height < 100 || height > 250) {
      return { error: "키는 100~250cm 사이의 숫자로 입력해 주세요." };
    }
    if (!Number.isFinite(weight) || weight < 20 || weight > 200) {
      return { error: "체중은 20~200kg 사이의 숫자로 입력해 주세요." };
    }
  }

  const lines = [`[${conf.tag}]`];
  for (const key of Object.keys(labels)) {
    if (["firstName", "lastName", "phone", "email"].includes(key)) continue;
    const v = String(formData.get(key) ?? "").trim();
    if (v) lines.push(`${labels[key]}: ${v}`);
  }
  const message = lines.join("\n");

  if (!isSupabaseConfigured()) {
    return { ok: true };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("gcm_inquiries")
    .insert({ name, phone, email: email || null, message });

  if (error) {
    return { error: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." };
  }

  return { ok: true };
}
