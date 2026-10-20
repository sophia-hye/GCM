import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { Section, SectionHeading } from "@/components/ui";
import { AdultApplicationForm } from "@/components/AdultApplicationForm";
import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "성인 아마추어 클래스 신청 | GCM",
      en: "Adult Amateur Class Application | GCM",
      zh: "成人业余班报名 | GCM",
      ja: "成人アマチュアクラス申し込み | GCM",
      it: "Iscrizione corso amatori adulti | GCM",
      fr: "Inscription au cours amateurs adultes | GCM",
      es: "Inscripción a la clase amateur de adultos | GCM",
    }),
  };
}

export default async function AdultApplyPage() {
  const locale = await getLocale();
  // 로그인 게이트: 비로그인 시 로그인 페이지로(로그인 후 이 폼으로 복귀)
  if (!isSupabaseConfigured()) {
    redirect("/login?next=/apply/adult");
  }
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login?next=/apply/adult");
  }

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Adult Amateur Class"
          title={pick(locale, {
            ko: "성인 아마추어 클래스 신청",
            en: "Adult Amateur Class Application",
            zh: "成人业余班报名",
            ja: "成人アマチュアクラス申し込み",
            it: "Iscrizione al corso amatori adulti",
            fr: "Inscription au cours amateurs adultes",
            es: "Inscripción a la clase amateur de adultos",
          })}
          lead={pick(locale, {
            ko: "용인 전술 트레이닝 프로그램(2026 4기) 신청서입니다. 항목을 입력해 주세요.",
            en: "Application form for the Yongin Tactical Training Program (2026 Season 4). Please fill in the fields below.",
            zh: "这是龙仁战术训练项目（2026 第 4 期）的报名表。请填写以下各项。",
            ja: "龍仁 戦術トレーニングプログラム（2026 第4期）の申込書です。各項目をご入力ください。",
            it: "Modulo di iscrizione al programma di allenamento tattico di Yongin (Stagione 4, 2026). Compila i campi qui sotto.",
            fr: "Formulaire d'inscription au programme d'entraînement tactique de Yongin (saison 4, 2026). Veuillez remplir les champs ci-dessous.",
            es: "Formulario de inscripción al programa de entrenamiento táctico de Yongin (Temporada 4, 2026). Rellena los campos siguientes.",
          })}
        />
        <div className="mt-10 max-w-2xl">
          <AdultApplicationForm />
        </div>
      </Section>
    </div>
  );
}
