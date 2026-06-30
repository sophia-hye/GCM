"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminConfigured } from "@/lib/supabase/env";
import { normalizePhone, toE164 } from "@/lib/phone";

export type AdminState = { ok?: boolean; error?: string };

/** 현재 세션이 admin 인지 서버에서 확인 */
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

/** 회원(선수/학부모) 등록 — service_role 로 계정 생성, 비밀번호=전화번호 */
export async function createMember(
  _prev: AdminState,
  formData: FormData,
): Promise<AdminState> {
  if (!isAdminConfigured()) {
    return { error: "service_role 키가 필요합니다. .env.local을 확인해 주세요." };
  }
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };

  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizePhone(String(formData.get("phone") ?? ""));
  const role = String(formData.get("role") ?? "student");

  if (!name || !phone) return { error: "이름과 전화번호를 입력해 주세요." };
  if (!["student", "parent"].includes(role)) return { error: "잘못된 역할입니다." };

  const admin = createAdminClient();
  const { error } = await admin.auth.admin.createUser({
    phone: toE164(phone),
    password: phone,
    phone_confirm: true,
    user_metadata: { name, phone, role, source: "gcm" },
  });

  if (error) {
    const dup = error.message.toLowerCase().includes("already");
    return { error: dup ? "이미 등록된 전화번호입니다." : error.message };
  }

  revalidatePath("/admin/members");
  return { ok: true };
}

/** 갤러리 글 작성 — 이미지를 Storage(gallery)에 업로드하고 gcm_gallery 에 저장 */
export async function createGalleryPost(
  _prev: AdminState,
  formData: FormData,
): Promise<AdminState> {
  if (!isAdminConfigured()) {
    return { error: "service_role 키가 필요합니다. .env.local을 확인해 주세요." };
  }
  if (!(await requireAdmin())) {
    return { error: "관리자 로그인이 필요합니다. 다시 로그인해 주세요." };
  }

  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const files = formData
    .getAll("images")
    .filter((f): f is File => f instanceof File && f.size > 0);

  if (!title) return { error: "제목을 입력해 주세요." };
  if (files.length === 0) return { error: "이미지를 1장 이상 선택해 주세요." };

  const admin = createAdminClient();
  const folder = crypto.randomUUID();
  const urls: string[] = [];

  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      return { error: "이미지 파일만 업로드할 수 있습니다." };
    }
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const path = `${folder}/${crypto.randomUUID()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const { error: upErr } = await admin.storage
      .from("gallery")
      .upload(path, buffer, { contentType: file.type, upsert: false });
    if (upErr) return { error: `이미지 업로드 실패: ${upErr.message}` };
    const { data: pub } = admin.storage.from("gallery").getPublicUrl(path);
    urls.push(pub.publicUrl);
  }

  const { error } = await admin
    .from("gcm_gallery")
    .insert({ title, body: body || null, images: urls });

  if (error) {
    return {
      error:
        "저장에 실패했습니다. gcm_gallery 테이블이 없으면 supabase/schema.sql의 갤러리 블록을 먼저 실행해 주세요.",
    };
  }

  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
  return { ok: true };
}

/** 문의 상태 변경 (고객관리) */
export async function updateInquiryStatus(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["new", "contacted", "closed"].includes(status)) return;

  const supabase = await createClient();
  await supabase.from("gcm_inquiries").update({ status }).eq("id", id);
  revalidatePath("/admin/inquiries");
}

/** 예약 상태 변경 */
export async function updateBookingStatus(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["requested", "confirmed", "done", "cancelled"].includes(status)) return;

  // 예약 시간 수정 (datetime-local 값은 KST 기준 → UTC ISO 로 저장, 비우면 미정)
  const dt = String(formData.get("scheduled_at") ?? "").trim();
  const scheduled_at = dt ? new Date(`${dt}:00+09:00`).toISOString() : null;

  const supabase = await createClient();
  await supabase.from("gcm_bookings").update({ status, scheduled_at }).eq("id", id);
  revalidatePath("/admin/bookings");
}

/** 회원 발달/진로 단계 설정(upsert) */
export async function upsertProgress(
  _prev: AdminState,
  formData: FormData,
): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };

  const userId = String(formData.get("user_id") ?? "");
  const stage = String(formData.get("stage") ?? "foundation");
  const track = String(formData.get("track") ?? "undecided");
  const currentUtr = String(formData.get("current_utr") ?? "").trim();
  const targetUtr = String(formData.get("target_utr") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  if (!userId) return { error: "회원 정보가 없습니다." };
  if (!["foundation", "development", "junior_elite", "professional"].includes(stage)) {
    return { error: "잘못된 단계입니다." };
  }
  if (!["undecided", "professional", "college"].includes(track)) {
    return { error: "잘못된 트랙입니다." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("gcm_progress").upsert(
    {
      user_id: userId,
      stage,
      track,
      current_utr: currentUtr || null,
      target_utr: targetUtr || null,
      note: note || null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );

  if (error) return { error: "저장 중 오류가 발생했습니다." };

  revalidatePath(`/admin/members/${userId}`);
  return { ok: true };
}
