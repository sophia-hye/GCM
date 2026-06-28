import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { OnboardingForm } from "@/components/auth/OnboardingForm";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata = { title: "추가 정보 입력 | GCM 아카데미" };

export default async function OnboardingPage() {
  if (!isSupabaseConfigured()) redirect("/login");

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // 이미 전화번호(구분)까지 입력된 사용자는 온보딩 불필요
  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("phone")
    .eq("id", user.id)
    .maybeSingle();
  if (profile?.phone) redirect("/");

  return (
    <AuthShell
      title="추가 정보 입력"
      subtitle="원활한 안내를 위해 구분과 연락처를 입력해 주세요."
      footer="문의: contact@gcm-academy.kr"
    >
      <OnboardingForm />
    </AuthShell>
  );
}
