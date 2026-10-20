import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "비밀번호 재설정 | GCM 아카데미",
      en: "Set New Password | GCM Academy",
      zh: "设置新密码 | GCM 学院",
      ja: "新しいパスワードの設定 | GCM アカデミー",
      it: "Imposta nuova password | Accademia GCM",
      fr: "Définir un nouveau mot de passe | Académie GCM",
      es: "Establecer nueva contraseña | Academia GCM",
    }),
  };
}

export default async function ResetPasswordPage() {
  const locale = await getLocale();
  return (
    <AuthShell
      title={pick(locale, {
        ko: "비밀번호 재설정",
        en: "Set new password",
        zh: "设置新密码",
        ja: "新しいパスワードの設定",
        it: "Imposta nuova password",
        fr: "Définir un nouveau mot de passe",
        es: "Establecer nueva contraseña",
      })}
      subtitle={pick(locale, {
        ko: "새 비밀번호를 설정해 주세요.",
        en: "Please set your new password.",
        zh: "请设置您的新密码。",
        ja: "新しいパスワードを設定してください。",
        it: "Imposta la tua nuova password.",
        fr: "Veuillez définir votre nouveau mot de passe.",
        es: "Establece tu nueva contraseña.",
      })}
      footer={pick(locale, {
        ko: "문의: tennis.gcm@gmail.com",
        en: "Contact: tennis.gcm@gmail.com",
        zh: "联系: tennis.gcm@gmail.com",
        ja: "お問い合わせ: tennis.gcm@gmail.com",
        it: "Contatti: tennis.gcm@gmail.com",
        fr: "Contact : tennis.gcm@gmail.com",
        es: "Contacto: tennis.gcm@gmail.com",
      })}
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <ResetPasswordForm />
    </AuthShell>
  );
}
