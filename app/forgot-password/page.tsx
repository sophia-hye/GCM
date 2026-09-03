import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return { title: ko ? "비밀번호 찾기 | GCM 아카데미" : "Reset Password | GCM Academy" };
}

export default async function ForgotPasswordPage() {
  const ko = (await getLocale()) === "ko";
  return (
    <AuthShell
      title={ko ? "비밀번호 찾기" : "Reset password"}
      subtitle={ko ? "가입한 이메일로 재설정 링크를 보내드립니다." : "We'll send a reset link to your registered email."}
      footer={ko ? "문의: tennis.gcm@gmail.com" : "Contact: tennis.gcm@gmail.com"}
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
