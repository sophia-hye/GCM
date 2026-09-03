import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return { title: ko ? "회원가입 | GCM 아카데미" : "Sign up | GCM Academy" };
}

export default async function SignupPage() {
  const ko = (await getLocale()) === "ko";
  return (
    <AuthShell
      title={ko ? "회원가입" : "Sign up"}
      subtitle={ko ? "GCM 아카데미 회원으로 등록하세요." : "Register as a GCM Academy member."}
      footer={ko ? "문의: tennis.gcm@gmail.com" : "Contact: tennis.gcm@gmail.com"}
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <SignupForm />
    </AuthShell>
  );
}
