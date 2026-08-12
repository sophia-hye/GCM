"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { fieldFor } from "@/lib/cms";
import type { AdminState } from "@/app/admin/actions";

async function requireAdmin(): Promise<boolean> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase
    .from("gcm_profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();
  return data?.role === "admin";
}

/** 콘텐츠 필드 저장. 기본값과 같거나 비우면 오버라이드 삭제(기본값으로 복원). */
export async function saveContentField(
  _prev: AdminState,
  formData: FormData,
): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };

  const key = String(formData.get("key") ?? "");
  const value = String(formData.get("value") ?? "");
  const field = fieldFor(key);
  if (!field) return { error: "알 수 없는 항목입니다." };

  const admin = createAdminClient();

  // 기본값과 동일하거나 비어 있으면 오버라이드 제거 → 코드 기본값 사용
  if (value.trim() === "" || value.trim() === field.default.trim()) {
    const { error } = await admin.from("gcm_content").delete().eq("key", key);
    if (error) {
      return { error: "저장 실패. gcm_content 테이블이 없으면 supabase/content.sql 을 먼저 실행해 주세요." };
    }
  } else {
    const { error } = await admin
      .from("gcm_content")
      .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" });
    if (error) {
      return { error: "저장 실패. gcm_content 테이블이 없으면 supabase/content.sql 을 먼저 실행해 주세요." };
    }
  }

  // 대표 인사말은 홈·소개 페이지에 노출
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/admin/content");
  return { ok: true };
}
