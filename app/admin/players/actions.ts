"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { slugifyPlayer } from "@/lib/players";
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
    .select("is_admin")
    .eq("id", user.id)
    .maybeSingle();
  return data?.is_admin === true;
}

export type UploadUrlResult =
  | { ok: true; path: string; token: string }
  | { ok: false; error: string };

/** 선수 사진용 서명 업로드 URL 발급 (브라우저 직접 업로드 → Vercel 제한 우회) */
export async function createPlayerUploadUrl(fileName: string): Promise<UploadUrlResult> {
  if (!(await requireAdmin())) return { ok: false, error: "권한이 없습니다." };
  const admin = createAdminClient();
  const ext = (fileName.split(".").pop() || "jpg").toLowerCase();
  const path = `players/${crypto.randomUUID()}.${ext}`;
  const { data, error } = await admin.storage.from(BUCKET).createSignedUploadUrl(path);
  if (error || !data) {
    return { ok: false, error: `업로드 URL 발급 실패: ${error?.message ?? "unknown"}` };
  }
  return { ok: true, path: data.path, token: data.token };
}

type PlayerInput = {
  name: string;
  track: string;
  grad_year: string;
  utr: string;
  result: string;
  bio: string;
  video_url: string;
  birthday: string;
  birthplace: string;
  nationality: string;
  plays: string;
  backhand: string;
  joined_date: string;
  description: string;
  coach_note: string;
  published: boolean;
  imagePath?: string; // 업로드 완료된 스토리지 경로(신규/교체 시)
};

function normalize(input: PlayerInput) {
  const track = input.track === "professional" || input.track === "college" ? input.track : null;
  return {
    name: input.name.trim(),
    track,
    grad_year: input.grad_year.trim() || null,
    utr: input.utr.trim() || null,
    result: input.result.trim() || null,
    bio: input.bio.trim() || null,
    video_url: input.video_url.trim() || null,
    birthday: input.birthday.trim() || null,
    birthplace: input.birthplace.trim() || null,
    nationality: input.nationality.trim() || null,
    plays: input.plays.trim() || null,
    backhand: input.backhand.trim() || null,
    joined_date: input.joined_date.trim() || null,
    description: input.description.trim() || null,
    coach_note: input.coach_note.trim() || null,
    published: input.published,
  };
}

const tableMissing =
  "저장에 실패했습니다. gcm_players 테이블/컬럼이 없으면 supabase/schema.sql의 gcm_players ALTER 블록을 먼저 실행해 주세요.";

/** 선수 신규 등록 */
export async function savePlayer(input: PlayerInput): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  const fields = normalize(input);
  if (!fields.name) return { error: "선수 이름을 입력해 주세요." };

  const admin = createAdminClient();
  const image = input.imagePath
    ? admin.storage.from(BUCKET).getPublicUrl(input.imagePath).data.publicUrl
    : null;

  const { count } = await admin.from("gcm_players").select("id", { count: "exact", head: true });
  const { data: last } = await admin
    .from("gcm_players")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await admin.from("gcm_players").insert({
    ...fields,
    slug: slugifyPlayer(fields.name, crypto.randomUUID()),
    image,
    sort_order: (last?.sort_order ?? (count ?? 0)) + 1,
  });
  if (error) return { error: tableMissing };

  revalidatePath("/admin/players");
  revalidatePath("/players");
  return { ok: true };
}

/** 선수 정보 수정 (imagePath 있으면 사진 교체) */
export async function updatePlayer(id: string, input: PlayerInput): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "잘못된 요청입니다." };
  const fields = normalize(input);
  if (!fields.name) return { error: "선수 이름을 입력해 주세요." };

  const admin = createAdminClient();
  const patch: Record<string, unknown> = { ...fields };
  if (input.imagePath) {
    const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(input.imagePath);
    patch.image = pub.publicUrl;
  }

  const { error } = await admin.from("gcm_players").update(patch).eq("id", id);
  if (error) return { error: tableMissing };

  revalidatePath("/admin/players");
  revalidatePath("/players");
  return { ok: true };
}

/** 공개/비공개 토글 */
export async function setPlayerPublished(id: string, published: boolean): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_players").update({ published }).eq("id", id);
  if (error) return { error: "변경 실패: " + error.message };
  revalidatePath("/admin/players");
  revalidatePath("/players");
  return { ok: true };
}

/** 선수 삭제 */
export async function removePlayer(id: string): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_players").delete().eq("id", id);
  if (error) return { error: "삭제 실패: " + error.message };
  revalidatePath("/admin/players");
  revalidatePath("/players");
  return { ok: true };
}

/** 순서 이동 (인접 항목과 sort_order 교환) */
export async function movePlayer(id: string, dir: "up" | "down"): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { data } = await admin
    .from("gcm_players")
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
  await admin.from("gcm_players").update({ sort_order: b.sort_order }).eq("id", a.id);
  await admin.from("gcm_players").update({ sort_order: a.sort_order }).eq("id", b.id);
  revalidatePath("/admin/players");
  revalidatePath("/players");
  return { ok: true };
}
