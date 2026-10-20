import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "회원가입 | GCM 아카데미",
      en: "Sign up | GCM Academy",
      zh: "注册 | GCM 学院",
      ja: "新規登録 | GCM アカデミー",
      it: "Registrati | Accademia GCM",
      fr: "Inscription | Académie GCM",
      es: "Registrarse | Academia GCM",
    }),
  };
}

export default async function SignupPage() {
  const locale = await getLocale();
  return (
    <AuthShell
      title={pick(locale, {
        ko: "회원가입",
        en: "Sign up",
        zh: "注册",
        ja: "新規登録",
        it: "Registrati",
        fr: "S'inscrire",
        es: "Registrarse",
      })}
      subtitle={pick(locale, {
        ko: "GCM 아카데미 회원으로 등록하세요.",
        en: "Register as a GCM Academy member.",
        zh: "注册成为 GCM 学院会员。",
        ja: "GCM アカデミーの会員として登録してください。",
        it: "Registrati come membro dell'Accademia GCM.",
        fr: "Inscrivez-vous en tant que membre de l'Académie GCM.",
        es: "Regístrate como miembro de la Academia GCM.",
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
      <SignupForm />
    </AuthShell>
  );
}
