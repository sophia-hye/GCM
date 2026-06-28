"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  ADMIN_SIGNUP_KEY,
  isAdminConfigured,
  isSupabaseConfigured,
} from "@/lib/supabase/env";
import { normalizePhone } from "@/lib/phone";

export type AuthState = { error?: string };

const NOT_CONFIGURED =
  "백엔드(Supabase)가 아직 설정되지 않았습니다. .env.local에 자격증명을 입력해 주세요.";

const SIGNUP_UNAVAILABLE =
  "회원가입 기능이 아직 활성화되지 않았습니다(service_role 키 필요). 관리자에게 문의해 주세요.";

/** 간단한 이메일 형식 검증 */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** 통합 로그인: 이메일 + 비밀번호. 계정 role 에 따라 관리자/일반으로 분기한다. */
export async function signInMember(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "이메일과 비밀번호를 입력해 주세요." };

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error || !data.user) {
    return { error: "이메일 또는 비밀번호가 일치하지 않습니다." };
  }

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("role")
    .eq("id", data.user.id)
    .maybeSingle();

  // 로그인 후 복귀 경로(next): 오픈 리다이렉트 방지를 위해 내부 절대경로만 허용
  const next = String(formData.get("next") ?? "");
  const safeNext =
    next.startsWith("/") && !next.startsWith("//") ? next : "";

  revalidatePath("/", "layout");
  if (safeNext) {
    redirect(safeNext);
  }
  // 관리자 계정이면 관리자 페이지로, 그 외에는 홈으로 이동
  if (profile?.role === "admin") {
    redirect("/admin");
  }
  redirect("/");
}

/** 관리자 로그인: 이메일 + 비밀번호 */
export async function signInAdmin(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) {
    return { error: "이메일과 비밀번호를 입력해 주세요." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error || !data.user) {
    return { error: "이메일 또는 비밀번호가 일치하지 않습니다." };
  }

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("role")
    .eq("id", data.user.id)
    .maybeSingle();

  if (!profile || profile.role !== "admin") {
    await supabase.auth.signOut();
    return { error: "관리자 권한이 없습니다." };
  }

  revalidatePath("/", "layout");
  redirect("/admin");
}

/** 소셜 가입자 온보딩: 구분(role) + 전화번호 입력 후 프로필 보완 */
export async function completeOnboarding(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "로그인이 필요합니다. 다시 로그인해 주세요." };

  const role = String(formData.get("role") ?? "student");
  const phone = normalizePhone(String(formData.get("phone") ?? ""));

  if (!["student", "parent", "amateur"].includes(role)) {
    return { error: "구분을 선택해 주세요." };
  }
  if (!phone) return { error: "전화번호를 입력해 주세요." };

  const { error } = await supabase
    .from("gcm_profiles")
    .update({ role, phone })
    .eq("id", user.id);

  if (error) {
    if (/duplicate|unique/i.test(error.message)) {
      return { error: "이미 등록된 전화번호입니다." };
    }
    if (/role_check|check constraint/i.test(error.message)) {
      return { error: "'아마추어 선수' 구분은 DB 역할 제약 적용 후 사용할 수 있습니다." };
    }
    return { error: "저장 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." };
  }

  revalidatePath("/", "layout");
  redirect("/welcome");
}

export async function signOut() {
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  revalidatePath("/", "layout");
  redirect("/logout");
}

/**
 * 가입 후 곧바로 세션을 생성한다(서버 쿠키 설정).
 * service_role 로 만든 계정은 세션이 없으므로 일반 클라이언트로 로그인한다.
 */
async function signInAfterSignup(email: string, password: string) {
  const supabase = await createClient();
  await supabase.auth.signInWithPassword({ email, password });
}

/** 회원(선수/학부모) 자가 가입: 이메일 + 비밀번호 (+ 연락처 전화번호) */
export async function signUpMember(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };
  if (!isAdminConfigured()) return { error: SIGNUP_UNAVAILABLE };

  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizePhone(String(formData.get("phone") ?? ""));
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const role = String(formData.get("role") ?? "student");
  if (!name || !phone) return { error: "이름과 전화번호를 입력해 주세요." };
  if (!email) return { error: "이메일을 입력해 주세요." };
  if (!isValidEmail(email)) return { error: "올바른 이메일 형식이 아닙니다." };
  if (password.length < 6) return { error: "비밀번호는 6자 이상이어야 합니다." };
  if (!["student", "parent", "amateur"].includes(role)) return { error: "잘못된 역할입니다." };

  const admin = createAdminClient();
  const { error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name, phone, email, role, source: "gcm" },
  });

  if (error) {
    const dup = error.message.toLowerCase().includes("already");
    return { error: dup ? "이미 가입된 이메일입니다." : error.message };
  }

  await signInAfterSignup(email, password);
  revalidatePath("/", "layout");
  redirect("/welcome");
}

/** 관리자 자가 가입: 이메일 + 비밀번호 + 관리자 키 (+ 연락처 전화번호) */
export async function signUpAdmin(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };
  if (!isAdminConfigured()) return { error: SIGNUP_UNAVAILABLE };

  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizePhone(String(formData.get("phone") ?? ""));
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const key = String(formData.get("admin_key") ?? "");

  if (!name || !phone) {
    return { error: "이름과 전화번호를 입력해 주세요." };
  }
  if (!email) return { error: "이메일을 입력해 주세요." };
  if (!isValidEmail(email)) return { error: "올바른 이메일 형식이 아닙니다." };
  if (password.length < 8) {
    return { error: "비밀번호는 8자 이상이어야 합니다." };
  }
  if (!ADMIN_SIGNUP_KEY) {
    return { error: "관리자 가입이 비활성화되어 있습니다. 관리자 키를 설정해 주세요." };
  }
  if (key !== ADMIN_SIGNUP_KEY) {
    return { error: "관리자 키가 올바르지 않습니다." };
  }

  const admin = createAdminClient();
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name, phone, email, role: "admin", source: "gcm" },
  });

  if (error) {
    const dup = error.message.toLowerCase().includes("already");
    return { error: dup ? "이미 가입된 이메일입니다." : error.message };
  }

  // 트리거가 role 을 반영하지만 혹시 모를 경우를 대비해 명시적으로 보정
  if (data.user) {
    await admin
      .from("gcm_profiles")
      .update({ role: "admin", name, phone, email })
      .eq("id", data.user.id);
  }

  await signInAfterSignup(email, password);
  revalidatePath("/", "layout");
  redirect("/admin");
}
