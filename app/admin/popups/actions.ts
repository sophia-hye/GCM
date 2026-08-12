"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { AdminState } from "@/app/admin/actions";

const MAX_POPUPS = 3;

/** 현재 세션이 admin 인지 확인 */
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

/** 팝업 등록 — 이미지 업로드(gallery 버킷 popups/ 경로) 후 행 생성. 최대 3개. */
export async function createPopup(
  _prev: AdminState,
  formData: FormData,
): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };

  const admin = createAdminClient();

  const { count } = await admin
    .from("gcm_popups")
    .select("id", { count: "exact", head: true });
  if ((count ?? 0) >= MAX_POPUPS) {
    return { error: `팝업은 최대 ${MAX_POPUPS}개까지 등록할 수 있습니다. 기존 팝업을 삭제 후 추가해 주세요.` };
  }

  const file = formData.get("image");
  const linkUrl = String(formData.get("link_url") ?? "").trim();
  if (!(file instanceof File) || file.size === 0) {
    return { error: "이미지를 선택해 주세요." };
  }
  if (!file.type.startsWith("image/")) {
    return { error: "이미지 파일만 업로드할 수 있습니다." };
  }

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const path = `popups/${crypto.randomUUID()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  const { error: upErr } = await admin.storage
    .from("gallery")
    .upload(path, buffer, { contentType: file.type, upsert: false });
  if (upErr) return { error: `이미지 업로드 실패: ${upErr.message}` };
  const { data: pub } = admin.storage.from("gallery").getPublicUrl(path);

  const { error } = await admin.from("gcm_popups").insert({
    image_url: pub.publicUrl,
    link_url: linkUrl || null,
    active: true,
    sort_order: count ?? 0,
  });
  if (error) {
    return {
      error:
        "저장에 실패했습니다. gcm_popups 테이블이 없으면 supabase/popups.sql 을 먼저 실행해 주세요.",
    };
  }

  revalidatePath("/admin/popups");
  revalidatePath("/");
  return { ok: true };
}

/** 팝업 활성/비활성 토글 */
export async function togglePopup(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  const active = String(formData.get("active") ?? "") === "true";
  if (!id) return;
  const admin = createAdminClient();
  await admin.from("gcm_popups").update({ active }).eq("id", id);
  revalidatePath("/admin/popups");
  revalidatePath("/");
}

/** 팝업 삭제 */
export async function deletePopup(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  const admin = createAdminClient();
  await admin.from("gcm_popups").delete().eq("id", id);
  revalidatePath("/admin/popups");
  revalidatePath("/");
}
