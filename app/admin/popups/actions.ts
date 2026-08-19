"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { AdminState } from "@/app/admin/actions";

const MAX_POPUPS = 3;
const BUCKET = "gallery";

async function requireAdmin(): Promise<boolean> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase
    .from("gcm_profiles")
    .select("is_admin")
    .eq("id", user.id)
    .maybeSingle();
  return data?.is_admin === true;
}

export type UploadUrlResult =
  | { ok: true; path: string; token: string }
  | { ok: false; error: string };

/**
 * 팝업 이미지용 '서명 업로드 URL' 발급.
 * 브라우저가 이 토큰으로 Supabase 스토리지에 '직접' 업로드한다(Vercel 함수 크기 제한 우회).
 */
export async function createPopupUploadUrl(fileName: string): Promise<UploadUrlResult> {
  if (!(await requireAdmin())) return { ok: false, error: "권한이 없습니다." };

  const admin = createAdminClient();
  const { count } = await admin
    .from("gcm_popups")
    .select("id", { count: "exact", head: true });
  if ((count ?? 0) >= MAX_POPUPS) {
    return { ok: false, error: `팝업은 최대 ${MAX_POPUPS}개까지 등록할 수 있습니다. 기존 팝업을 삭제 후 추가해 주세요.` };
  }

  const ext = (fileName.split(".").pop() || "jpg").toLowerCase();
  const path = `popups/${crypto.randomUUID()}.${ext}`;
  const { data, error } = await admin.storage.from(BUCKET).createSignedUploadUrl(path);
  if (error || !data) {
    return { ok: false, error: `업로드 URL 발급 실패: ${error?.message ?? "unknown"}` };
  }
  return { ok: true, path: data.path, token: data.token };
}

/** 업로드 완료된 이미지 경로로 팝업 레코드 생성. */
export async function savePopup(path: string, linkUrl: string): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!path) return { error: "이미지 경로가 없습니다." };

  const admin = createAdminClient();
  const { count } = await admin
    .from("gcm_popups")
    .select("id", { count: "exact", head: true });
  if ((count ?? 0) >= MAX_POPUPS) {
    return { error: `팝업은 최대 ${MAX_POPUPS}개까지 등록할 수 있습니다.` };
  }

  const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(path);
  const { error } = await admin.from("gcm_popups").insert({
    image_url: pub.publicUrl,
    link_url: linkUrl.trim() || null,
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

/** 팝업 활성/비활성 설정 */
export async function setPopupActive(id: string, active: boolean): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_popups").update({ active }).eq("id", id);
  if (error) return { error: "변경 실패: " + error.message };
  revalidatePath("/admin/popups");
  revalidatePath("/");
  return { ok: true };
}

/** 팝업 삭제 */
export async function removePopup(id: string): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_popups").delete().eq("id", id);
  if (error) return { error: "삭제 실패: " + error.message };
  revalidatePath("/admin/popups");
  revalidatePath("/");
  return { ok: true };
}

/** 팝업 링크 수정 */
export async function updatePopupLink(id: string, linkUrl: string): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin
    .from("gcm_popups")
    .update({ link_url: linkUrl.trim() || null })
    .eq("id", id);
  if (error) return { error: "저장 실패: " + error.message };
  revalidatePath("/admin/popups");
  revalidatePath("/");
  return { ok: true };
}

/** 팝업 이미지 교체 (업로드 완료된 경로로) */
export async function updatePopupImage(id: string, path: string): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id || !path) return { error: "id/경로 없음" };
  const admin = createAdminClient();
  const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(path);
  const { error } = await admin
    .from("gcm_popups")
    .update({ image_url: pub.publicUrl })
    .eq("id", id);
  if (error) return { error: "이미지 교체 실패: " + error.message };
  revalidatePath("/admin/popups");
  revalidatePath("/");
  return { ok: true };
}
