import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { OnboardingForm } from "@/components/auth/OnboardingForm";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "추가 정보 입력 | GCM 아카데미",
      en: "Additional Information | GCM Academy",
      zh: "填写附加信息 | GCM 学院",
      ja: "追加情報の入力 | GCM アカデミー",
      it: "Informazioni aggiuntive | Accademia GCM",
      fr: "Informations complémentaires | Académie GCM",
      es: "Información adicional | Academia GCM",
    }),
  };
}

export default async function OnboardingPage() {
  if (!isSupabaseConfigured()) redirect("/login");
  const locale = await getLocale();

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
      title={pick(locale, {
        ko: "추가 정보 입력",
        en: "Additional information",
        zh: "填写附加信息",
        ja: "追加情報の入力",
        it: "Informazioni aggiuntive",
        fr: "Informations complémentaires",
        es: "Información adicional",
      })}
      subtitle={pick(locale, {
        ko: "원활한 안내를 위해 구분과 연락처를 입력해 주세요.",
        en: "Please enter your role and contact details so we can assist you smoothly.",
        zh: "为了给您提供顺畅的服务，请填写您的身份和联系方式。",
        ja: "スムーズにご案内するため、区分と連絡先を入力してください。",
        it: "Inserisci il tuo ruolo e i tuoi recapiti per permetterci di assisterti al meglio.",
        fr: "Veuillez indiquer votre rôle et vos coordonnées afin que nous puissions vous aider au mieux.",
        es: "Introduce tu rol y tus datos de contacto para que podamos ayudarte sin problemas.",
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
    >
      <OnboardingForm />
    </AuthShell>
  );
}
