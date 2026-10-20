import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "비밀번호 찾기 | GCM 아카데미",
      en: "Reset Password | GCM Academy",
      zh: "找回密码 | GCM 学院",
      ja: "パスワードの再設定 | GCM アカデミー",
      it: "Reimposta password | Accademia GCM",
      fr: "Réinitialiser le mot de passe | Académie GCM",
      es: "Restablecer contraseña | Academia GCM",
    }),
  };
}

export default async function ForgotPasswordPage() {
  const locale = await getLocale();
  return (
    <AuthShell
      title={pick(locale, {
        ko: "비밀번호 찾기",
        en: "Reset password",
        zh: "找回密码",
        ja: "パスワードの再設定",
        it: "Reimposta la password",
        fr: "Réinitialiser le mot de passe",
        es: "Restablecer contraseña",
      })}
      subtitle={pick(locale, {
        ko: "가입한 이메일로 재설정 링크를 보내드립니다.",
        en: "We'll send a reset link to your registered email.",
        zh: "我们会将重置链接发送到您注册的电子邮件。",
        ja: "登録されたメールアドレスに再設定リンクをお送りします。",
        it: "Invieremo un link di reimpostazione all'email che hai registrato.",
        fr: "Nous enverrons un lien de réinitialisation à votre adresse e-mail enregistrée.",
        es: "Enviaremos un enlace de restablecimiento al correo electrónico que registraste.",
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
      <ForgotPasswordForm />
    </AuthShell>
  );
}
