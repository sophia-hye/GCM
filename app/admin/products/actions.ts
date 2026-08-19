"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { slugifyProductTitle } from "@/lib/store-products";
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

/** 상품 대표 이미지용 서명 업로드 URL 발급 */
export async function createProductUploadUrl(fileName: string): Promise<UploadUrlResult> {
  if (!(await requireAdmin())) return { ok: false, error: "권한이 없습니다." };
  const admin = createAdminClient();
  const ext = (fileName.split(".").pop() || "jpg").toLowerCase();
  const path = `products/${crypto.randomUUID()}.${ext}`;
  const { data, error } = await admin.storage.from(BUCKET).createSignedUploadUrl(path);
  if (error || !data) {
    return { ok: false, error: `업로드 URL 발급 실패: ${error?.message ?? "unknown"}` };
  }
  return { ok: true, path: data.path, token: data.token };
}

type ProductInput = {
  title: string;
  summary: string;
  description: string;
  price: string;
  duration: string;
  published: boolean;
  imagePath?: string;
};

function normalize(input: ProductInput) {
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
  "저장에 실패했습니다. gcm_products 테이블이 없으면 supabase/schema.sql의 gcm_products 블록을 먼저 실행해 주세요.";

/** 상품 신규 등록 */
export async function saveProduct(input: ProductInput): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  const fields = normalize(input);
  if (!fields.title) return { error: "상품명을 입력해 주세요." };
  if (!input.imagePath) return { error: "대표 이미지를 업로드해 주세요." };

  const admin = createAdminClient();
  const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(input.imagePath);
  const { count } = await admin.from("gcm_products").select("id", { count: "exact", head: true });
  const { data: last } = await admin
    .from("gcm_products")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await admin.from("gcm_products").insert({
    ...fields,
    slug: slugifyProductTitle(fields.title, crypto.randomUUID()),
    image: pub.publicUrl,
    sort_order: (last?.sort_order ?? (count ?? 0)) + 1,
  });
  if (error) return { error: tableMissing };

  revalidatePath("/admin/products");
  revalidatePath("/store/products");
  return { ok: true };
}

/** 상품 수정 (imagePath 있으면 이미지 교체) */
export async function updateProduct(id: string, input: ProductInput): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "잘못된 요청입니다." };
  const fields = normalize(input);
  if (!fields.title) return { error: "상품명을 입력해 주세요." };

  const admin = createAdminClient();
  const patch: Record<string, unknown> = { ...fields };
  if (input.imagePath) {
    const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(input.imagePath);
    patch.image = pub.publicUrl;
  }

  const { error } = await admin.from("gcm_products").update(patch).eq("id", id);
  if (error) return { error: tableMissing };

  revalidatePath("/admin/products");
  revalidatePath("/store/products");
  return { ok: true };
}

export async function setProductPublished(id: string, published: boolean): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_products").update({ published }).eq("id", id);
  if (error) return { error: "변경 실패: " + error.message };
  revalidatePath("/admin/products");
  revalidatePath("/store/products");
  return { ok: true };
}

export async function removeProduct(id: string): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { error } = await admin.from("gcm_products").delete().eq("id", id);
  if (error) return { error: "삭제 실패: " + error.message };
  revalidatePath("/admin/products");
  revalidatePath("/store/products");
  return { ok: true };
}

export async function moveProduct(id: string, dir: "up" | "down"): Promise<AdminState> {
  if (!(await requireAdmin())) return { error: "권한이 없습니다." };
  if (!id) return { error: "id 없음" };
  const admin = createAdminClient();
  const { data } = await admin
    .from("gcm_products")
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
  await admin.from("gcm_products").update({ sort_order: b.sort_order }).eq("id", a.id);
  await admin.from("gcm_products").update({ sort_order: a.sort_order }).eq("id", b.id);
  revalidatePath("/admin/products");
  revalidatePath("/store/products");
  return { ok: true };
}
