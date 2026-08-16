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
  const locale = String(formData.get("locale") ?? "ko") === "en" ? "en" : "ko";
  const field = fieldFor(key);
  if (!field) return { error: "알 수 없는 항목입니다." };

  const admin = createAdminClient();
  const codeDefault = locale === "en" ? field.defaultEn : field.default;
  const tableHint =
    "저장 실패. gcm_content 에 locale 컬럼이 필요합니다. supabase/content.sql(또는 ALTER 블록)을 먼저 실행해 주세요.";

  // 기본값과 동일하거나 비어 있으면 오버라이드 제거 → 코드 기본값 사용
  if (value.trim() === "" || value.trim() === codeDefault.trim()) {
    const { error } = await admin.from("gcm_content").delete().eq("key", key).eq("locale", locale);
    if (error) return { error: tableHint };
  } else {
    const { error } = await admin
      .from("gcm_content")
      .upsert({ key, locale, value, updated_at: new Date().toISOString() }, { onConflict: "key,locale" });
    if (error) return { error: tableHint };
  }

  // 콘텐츠가 여러 페이지에 걸쳐 노출되므로 루트 레이아웃 전체를 갱신한다.
  revalidatePath("/", "layout");
  revalidatePath("/admin/content");
  return { ok: true };
}
