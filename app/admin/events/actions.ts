"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { slugifyEvent } from "@/lib/events";
import type { AdminState } from "@/app/admin/actions";

const BUCKET = "gallery";

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

export type UploadUrlResult =
  | { ok: true; path: string; token: string }
  | { ok: false; error: string };

/** 모임 사진용 서명 업로드 URL 발급 (파일마다 1회 호출) */
export async function createEventUploadUrl(fileName: string): Promise<UploadUrlResult> {
  if (!(await requireAdmin())) return { ok: false, error: "권한이 없습니다." };
  const admin = createAdminClient();
  const ext = (fileName.split(".").pop() || "jpg").toLowerCase();
  const path = `events/${crypto.randomUUID()}.${ext}`;
  const { data, error } = await admin.storage.from(BUCKET).createSignedUploadUrl(path);
  if (error || !data) {
    return { ok: false, error: `업로드 URL 발급 실패: ${error?.message ?? "unknown"}` };
  }
  return { ok: true, path: data.path, token: data.token };
}

type EventInput = {
  title: string;
  location: string;
  event_date: string;
  body: string;
  published: boolean;
  imagePaths?: string[]; // 업로드 완료된 경로들(신규/교체 시)
};

function normalize(input: EventInput) {
  return {
    title: input.title.trim(),
    location: input.location.trim() || null,
    event_date: input.event_date.trim() || null,
    body: input.body.trim() || null,
    published: input.published,
  };
}

const tableMissing =
  "저장에 실패했습니다. gcm_events 테이블이 없으면 supabase/schema.sql의 gcm_events 블록을 먼저 실행해 주세요.";

function toPublicUrls(admin: ReturnType<typeof createAdminClient>, paths: string[]): string[] {
  return paths.map((p) => admin.storage.from(BUCKET).getPublicUrl(p).data.publicUrl);
}

/** 모임 후기 신규 등록 */
export async function saveEvent(input: EventInput): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  const fields = normalize(input);
  if (!fields.title) return { error: "제목을 입력해 주세요." };
  if (!input.imagePaths || input.imagePaths.length === 0) {
    return { error: "사진을 1장 이상 업로드해 주세요." };
  }

  const admin = createAdminClient();
  const { count } = await admin.from("gcm_events").select("id", { count: "exact", head: true });
  const { data: last } = await admin
    .from("gcm_events")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await admin.from("gcm_events").insert({
    ...fields,
    slug: slugifyEvent(fields.title, crypto.randomUUID()),
    images: toPublicUrls(admin, input.imagePaths),
    sort_order: (last?.sort_order ?? (count ?? 0)) + 1,
  });
  if (error) return { error: tableMissing };

  revalidatePath("/admin/events");
  revalidatePath("/events/seoulite");
  return { ok: true };
}

/** 모임 후기 수정 (imagePaths 있으면 사진 전체 교체) */
export async function updateEvent(id: string, input: EventInput): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "잘못된 요청입니다." };
  const fields = normalize(input);
  if (!fields.title) return { error: "제목을 입력해 주세요." };

  const admin = createAdminClient();
  const patch: Record<string, unknown> = { ...fields };
  if (input.imagePaths && input.imagePaths.length > 0) {
    patch.images = toPublicUrls(admin, input.imagePaths);
  }

  const { error } = await admin.from("gcm_events").update(patch).eq("id", id);
  if (error) return { error: tableMissing };

  revalidatePath("/admin/events");
  revalidatePath("/events/seoulite");
  return { ok: true };
}

export async function setEventPublished(id: string, published: boolean): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_events").update({ published }).eq("id", id);
  if (error) return { error: "변경 실패: " + error.message };
  revalidatePath("/admin/events");
  revalidatePath("/events/seoulite");
  return { ok: true };
}

export async function removeEvent(id: string): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_events").delete().eq("id", id);
  if (error) return { error: "삭제 실패: " + error.message };
  revalidatePath("/admin/events");
  revalidatePath("/events/seoulite");
  return { ok: true };
}

export async function moveEvent(id: string, dir: "up" | "down"): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { data } = await admin
    .from("gcm_events")
    .select("id, sort_order")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  const rows = (data ?? []) as { id: string; sort_order: number }[];
  const idx = rows.findIndex((r) => r.id === id);
  if (idx === -1) return { error: "대상 없음" };
  const swapIdx = dir === "up" ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= rows.length) return { ok: true };
  const a = rows[idx];
  const b = rows[swapIdx];
  await admin.from("gcm_events").update({ sort_order: b.sort_order }).eq("id", a.id);
  await admin.from("gcm_events").update({ sort_order: a.sort_order }).eq("id", b.id);
  revalidatePath("/admin/events");
  revalidatePath("/events/seoulite");
  return { ok: true };
}
