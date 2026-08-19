"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/site-url";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  ADMIN_SIGNUP_KEY,
  isAdminConfigured,
  isSupabaseConfigured,
} from "@/lib/supabase/env";
import { normalizePhone } from "@/lib/phone";

export type AuthState = { error?: string };
export type PasswordResetState = { error?: string; ok?: boolean };

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
    .select("is_admin")
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
  // 관리자 계정이면 마이페이지(대시보드)로, 그 외에는 홈으로 이동
  if (profile?.is_admin) {
    redirect("/dashboard");
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
    .select("is_admin")
    .eq("id", data.user.id)
    .maybeSingle();

  if (!profile?.is_admin) {
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
  const gender = String(formData.get("gender") ?? "");
  const birthDate = String(formData.get("birth_date") ?? "").trim();

  if (!["student", "parent", "amateur", "others", "coach"].includes(role)) {
    return { error: "구분을 선택해 주세요." };
  }
  if (!phone) return { error: "전화번호를 입력해 주세요." };
  if (!["male", "female"].includes(gender)) return { error: "성별을 선택해 주세요." };
  if (!birthDate) return { error: "생년월일을 입력해 주세요." };

  // 같은 전화번호의 다른 회원이 이미 있으면 = 중복 가입(소셜로 또 가입 등).
  // 이번에 새로 만들어진 빈 계정을 정리하고 기존 로그인으로 안내한다.
  if (isAdminConfigured()) {
    const admin = createAdminClient();
    const { data: dup } = await admin
      .from("gcm_profiles")
      .select("id")
      .eq("phone", phone)
      .neq("id", user.id)
      .maybeSingle();
    if (dup) {
      await admin.auth.admin.deleteUser(user.id); // 빈 중복 계정 제거(프로필 cascade)
      await supabase.auth.signOut();
      redirect("/login?dup=1");
    }
  }

  const { error } = await supabase
    .from("gcm_profiles")
    .update({
      role,
      phone,
      gender,
      birth_date: birthDate,
    })
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
  const gender = String(formData.get("gender") ?? "");
  const birthDate = String(formData.get("birth_date") ?? "").trim();
  if (!name || !phone) return { error: "이름과 전화번호를 입력해 주세요." };
  if (!email) return { error: "이메일을 입력해 주세요." };
  if (!isValidEmail(email)) return { error: "올바른 이메일 형식이 아닙니다." };
  if (password.length < 6) return { error: "비밀번호는 6자 이상이어야 합니다." };
  if (!["student", "parent", "amateur", "others", "coach"].includes(role)) return { error: "잘못된 역할입니다." };
  if (!["male", "female"].includes(gender)) return { error: "성별을 선택해 주세요." };
  if (!birthDate) return { error: "생년월일을 입력해 주세요." };

  const admin = createAdminClient();
  const { error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      name,
      phone,
      email,
      role,
      source: "gcm",
      gender,
      birth_date: birthDate,
    },
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
    user_metadata: { name, phone, email, role: "others", source: "gcm" },
  });

  if (error) {
    const dup = error.message.toLowerCase().includes("already");
    return { error: dup ? "이미 가입된 이메일입니다." : error.message };
  }

  // 관리자 자가가입: 구분은 '기타', is_admin 플래그로 관리자 권한 부여
  if (data.user) {
    await admin
      .from("gcm_profiles")
      .update({ is_admin: true, name, phone, email })
      .eq("id", data.user.id);
  }

  await signInAfterSignup(email, password);
  revalidatePath("/", "layout");
  redirect("/admin");
}

/**
 * 비밀번호 재설정 요청 — 입력한 이메일로 재설정 링크를 발송한다.
 * 보안상 계정 존재 여부는 노출하지 않고 항상 성공으로 응답한다.
 */
export async function requestPasswordReset(
  _prev: PasswordResetState,
  formData: FormData,
): Promise<PasswordResetState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!email || !isValidEmail(email)) {
    return { error: "올바른 이메일을 입력해 주세요." };
  }

  const supabase = await createClient();
  const origin = (await headers()).get("origin") || SITE_URL;
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/reset-password`,
  });

  // 계정 존재 여부 노출 방지 — 항상 성공 처리
  return { ok: true };
}

/** 새 비밀번호 설정 — 재설정 링크로 생성된 세션에서 비밀번호를 변경한다. */
export async function updatePassword(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: NOT_CONFIGURED };

  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  if (password.length < 6) return { error: "비밀번호는 6자 이상이어야 합니다." };
  if (password !== confirm) return { error: "비밀번호가 일치하지 않습니다." };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: "재설정 링크가 만료되었거나 유효하지 않습니다. 다시 요청해 주세요." };
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return { error: "비밀번호 변경에 실패했습니다. 잠시 후 다시 시도해 주세요." };
  }

  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login?reset=1");
}
