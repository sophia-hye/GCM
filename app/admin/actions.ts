"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminConfigured } from "@/lib/supabase/env";
import { normalizePhone, toE164 } from "@/lib/phone";
import { FAQ_MAX } from "@/lib/faq";

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

  // 담당 코치 배정 (빈 값이면 미지정)
  const coachRaw = String(formData.get("coach") ?? "").trim();
  const coach = coachRaw || null;

  const supabase = await createClient();
  await supabase.from("gcm_bookings").update({ status, scheduled_at, coach }).eq("id", id);
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

/** 관리자: 경기 분석에 코치 피드백 저장 */
export async function saveCoachFeedback(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  const feedback = String(formData.get("coach_feedback") ?? "").trim() || null;

  const supabase = await createClient();
  await supabase.from("gcm_match_analyses").update({ coach_feedback: feedback }).eq("id", id);
  revalidatePath("/admin/analyses");
}

/** 관리자: 회원(선수) 승인/해제 — 승인된 회원만 매치 셀프 피드백 작성 가능 */
export async function setMemberApproved(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  const approved = String(formData.get("approved") ?? "") === "true";
  if (!id) return;

  const supabase = await createClient();
  await supabase.from("gcm_profiles").update({ approved }).eq("id", id);
  revalidatePath(`/admin/members/${id}`);
  revalidatePath("/admin/members");
}

/** 관리자 승격 / 해제 — admin 만 실행. 본인 계정은 강등 불가. */
export async function setMemberRole(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  const makeAdmin = String(formData.get("make_admin") ?? "") === "true";
  if (!id) return;

  const supabase = await createClient();
  // 자기 자신 강등 방지(관리자 락아웃 예방)
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!makeAdmin && user?.id === id) return;

  // 승격 시 approved 도 함께 켠다(관리자는 항상 승인 상태). 해제 시 기본 역할(student)로.
  const patch = makeAdmin ? { role: "admin", approved: true } : { role: "student" };
  await supabase.from("gcm_profiles").update(patch).eq("id", id);
  revalidatePath(`/admin/members/${id}`);
  revalidatePath("/admin/members");
}

/** 관리자: 이야기 게시글 승인/반려 (published | rejected | pending) */
export async function setVoiceStatus(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["pending", "published", "rejected"].includes(status)) return;

  const supabase = await createClient();
  await supabase
    .from("gcm_voices")
    .update({ status, published_at: status === "published" ? new Date().toISOString() : null })
    .eq("id", id);
  revalidatePath("/admin/voices");
  revalidatePath("/testimonial");
}

/* ============================================================
 * FAQ (gcm_faqs) — Contact 페이지 FAQ 관리, 최대 10개
 * ============================================================ */
const faqTableMissing =
  "저장에 실패했습니다. gcm_faqs 테이블이 없으면 supabase/schema.sql의 FAQ 블록을 SQL Editor에서 먼저 실행해 주세요.";

/** FAQ 신규 등록 (최대 10개) */
export async function createFaq(_prev: AdminState, formData: FormData): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "관리자 로그인이 필요합니다." };

  const question = String(formData.get("question") ?? "").trim();
  const answer = String(formData.get("answer") ?? "").trim();
  if (!question || !answer) return { error: "질문과 답변을 모두 입력해 주세요." };

  const supabase = await createClient();
  const { count, error: countErr } = await supabase
    .from("gcm_faqs")
    .select("id", { count: "exact", head: true });
  if (countErr) return { error: faqTableMissing };
  if ((count ?? 0) >= FAQ_MAX) {
    return { error: `FAQ는 최대 ${FAQ_MAX}개까지 등록할 수 있습니다.` };
  }

  const { data: last } = await supabase
    .from("gcm_faqs")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();
  const nextOrder = (last?.sort_order ?? 0) + 1;

  const { error } = await supabase
    .from("gcm_faqs")
    .insert({ question, answer, sort_order: nextOrder });
  if (error) return { error: faqTableMissing };

  revalidatePath("/admin/faq");
  revalidatePath("/contact");
  return { ok: true };
}

/** FAQ 내용 수정 / 공개여부 토글 */
export async function updateFaq(_prev: AdminState, formData: FormData): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "관리자 로그인이 필요합니다." };

  const id = String(formData.get("id") ?? "");
  const question = String(formData.get("question") ?? "").trim();
  const answer = String(formData.get("answer") ?? "").trim();
  const published = formData.get("published") === "on";
  if (!id) return { error: "잘못된 요청입니다." };
  if (!question || !answer) return { error: "질문과 답변을 모두 입력해 주세요." };

  const supabase = await createClient();
  const { error } = await supabase
    .from("gcm_faqs")
    .update({ question, answer, published })
    .eq("id", id);
  if (error) return { error: faqTableMissing };

  revalidatePath("/admin/faq");
  revalidatePath("/contact");
  return { ok: true };
}

/** FAQ 삭제 */
export async function deleteFaq(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  await supabase.from("gcm_faqs").delete().eq("id", id);
  revalidatePath("/admin/faq");
  revalidatePath("/contact");
}

/** FAQ 순서 이동 (인접 항목과 sort_order 교환) */
export async function moveFaq(formData: FormData): Promise<void> {
  if (!(await requireAdmin())) return;
  const id = String(formData.get("id") ?? "");
  const dir = String(formData.get("dir") ?? "");
  if (!id || !["up", "down"].includes(dir)) return;

  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_faqs")
    .select("id, sort_order")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  const rows = (data ?? []) as { id: string; sort_order: number }[];
  const idx = rows.findIndex((r) => r.id === id);
  if (idx === -1) return;
  const swapIdx = dir === "up" ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= rows.length) return;

  const a = rows[idx];
  const b = rows[swapIdx];
  await supabase.from("gcm_faqs").update({ sort_order: b.sort_order }).eq("id", a.id);
  await supabase.from("gcm_faqs").update({ sort_order: a.sort_order }).eq("id", b.id);
  revalidatePath("/admin/faq");
  revalidatePath("/contact");
}
