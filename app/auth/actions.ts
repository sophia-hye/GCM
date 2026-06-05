"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { normalizePhone, toE164 } from "@/lib/phone";

export type AuthState = { error?: string };

const NOT_CONFIGURED =
  "백엔드(Supabase)가 아직 설정되지 않았습니다. .env.local에 자격증명을 입력해 주세요.";

/** 회원(선수/학부모) 로그인: 이름 + 전화번호 */
export async function signInMember(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };

  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizePhone(String(formData.get("phone") ?? ""));
  if (!name || !phone) return { error: "이름과 전화번호를 입력해 주세요." };

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    phone: toE164(phone),
    password: phone,
  });
  if (error || !data.user) {
    return { error: "등록되지 않은 회원이거나 정보가 일치하지 않습니다." };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("name, role")
    .eq("id", data.user.id)
    .maybeSingle();

  if (!profile || profile.name.trim() !== name) {
    await supabase.auth.signOut();
    return { error: "이름과 전화번호가 일치하지 않습니다." };
  }
  if (profile.role === "admin") {
    await supabase.auth.signOut();
    return { error: "관리자 계정은 관리자 로그인을 이용해 주세요." };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

/** 관리자 로그인: 이름 + 전화번호 + 비밀번호 */
export async function signInAdmin(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };

  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizePhone(String(formData.get("phone") ?? ""));
  const password = String(formData.get("password") ?? "");
  if (!name || !phone || !password) {
    return { error: "이름, 전화번호, 비밀번호를 모두 입력해 주세요." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    phone: toE164(phone),
    password,
  });
  if (error || !data.user) {
    return { error: "관리자 정보가 일치하지 않습니다." };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("name, role")
    .eq("id", data.user.id)
    .maybeSingle();

  if (!profile || profile.role !== "admin" || profile.name.trim() !== name) {
    await supabase.auth.signOut();
    return { error: "관리자 권한이 없습니다." };
  }

  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function signOut() {
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  revalidatePath("/", "layout");
  redirect("/");
}
