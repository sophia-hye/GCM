"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { slugifyProgram } from "@/lib/programs";
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

/** 프로그램 대표 이미지용 서명 업로드 URL 발급 */
export async function createProgramUploadUrl(fileName: string): Promise<UploadUrlResult> {
  if (!(await requireAdmin())) return { ok: false, error: "권한이 없습니다." };
  const admin = createAdminClient();
  const ext = (fileName.split(".").pop() || "jpg").toLowerCase();
  const path = `programs/${crypto.randomUUID()}.${ext}`;
  const { data, error } = await admin.storage.from(BUCKET).createSignedUploadUrl(path);
  if (error || !data) {
    return { ok: false, error: `업로드 URL 발급 실패: ${error?.message ?? "unknown"}` };
  }
  return { ok: true, path: data.path, token: data.token };
}

type ProgramInput = {
  title: string;
  summary: string;
  description: string;
  price: string; // 폼 문자열 → 원 정수로 파싱
  duration: string;
  published: boolean;
  imagePath?: string;
};

function normalize(input: ProgramInput) {
  const digits = input.price.replace(/[^\d]/g, "");
  const price = digits ? parseInt(digits, 10) : null;
  return {
    title: input.title.trim(),
    summary: input.summary.trim() || null,
    description: input.description.trim() || null,
    price,
    duration: input.duration.trim() || null,
    published: input.published,
  };
}

const tableMissing =
  "저장에 실패했습니다. gcm_programs 테이블이 없으면 supabase/schema.sql의 gcm_programs 블록을 먼저 실행해 주세요.";

/** 프로그램 신규 등록 */
export async function saveProgram(input: ProgramInput): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  const fields = normalize(input);
  if (!fields.title) return { error: "프로그램 제목을 입력해 주세요." };
  if (!input.imagePath) return { error: "대표 이미지를 업로드해 주세요." };

  const admin = createAdminClient();
  const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(input.imagePath);
  const { count } = await admin.from("gcm_programs").select("id", { count: "exact", head: true });
  const { data: last } = await admin
    .from("gcm_programs")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await admin.from("gcm_programs").insert({
    ...fields,
    slug: slugifyProgram(fields.title, crypto.randomUUID()),
    image: pub.publicUrl,
    sort_order: (last?.sort_order ?? (count ?? 0)) + 1,
  });
  if (error) return { error: tableMissing };

  revalidatePath("/admin/programs");
  revalidatePath("/store/programs");
  return { ok: true };
}

/** 프로그램 수정 (imagePath 있으면 이미지 교체) */
export async function updateProgram(id: string, input: ProgramInput): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "잘못된 요청입니다." };
  const fields = normalize(input);
  if (!fields.title) return { error: "프로그램 제목을 입력해 주세요." };

  const admin = createAdminClient();
  const patch: Record<string, unknown> = { ...fields };
  if (input.imagePath) {
    const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(input.imagePath);
    patch.image = pub.publicUrl;
  }

  const { error } = await admin.from("gcm_programs").update(patch).eq("id", id);
  if (error) return { error: tableMissing };

  revalidatePath("/admin/programs");
  revalidatePath("/store/programs");
  revalidatePath(`/store/programs`);
  return { ok: true };
}

export async function setProgramPublished(id: string, published: boolean): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_programs").update({ published }).eq("id", id);
  if (error) return { error: "변경 실패: " + error.message };
  revalidatePath("/admin/programs");
  revalidatePath("/store/programs");
  return { ok: true };
}

export async function removeProgram(id: string): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_programs").delete().eq("id", id);
  if (error) return { error: "삭제 실패: " + error.message };
  revalidatePath("/admin/programs");
  revalidatePath("/store/programs");
  return { ok: true };
}

export async function moveProgram(id: string, dir: "up" | "down"): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { data } = await admin
    .from("gcm_programs")
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
  await admin.from("gcm_programs").update({ sort_order: b.sort_order }).eq("id", a.id);
  await admin.from("gcm_programs").update({ sort_order: a.sort_order }).eq("id", b.id);
  revalidatePath("/admin/programs");
  revalidatePath("/store/programs");
  return { ok: true };
}
