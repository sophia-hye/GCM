import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { PageJsonLd } from "@/components/PageJsonLd";
import { StatBar } from "@/components/sections/StatBar";
import { Programs } from "@/components/sections/Programs";
import { Curriculum } from "@/components/sections/Curriculum";
import { TotalCare } from "@/components/sections/TotalCare";
import { SafetyNet } from "@/components/sections/SafetyNet";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "선수 트레이닝 프로그램 | GCM 테니스 아카데미",
      en: "Player Training Program | GCM Tennis Academy",
      zh: "选手训练计划 | GCM Tennis Academy",
      ja: "選手トレーニングプログラム | GCM Tennis Academy",
      it: "Programma di allenamento per atleti | GCM Tennis Academy",
      fr: "Programme d'entraînement des joueurs | GCM Tennis Academy",
      es: "Programa de entrenamiento de jugadores | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "기술·피지컬·멘탈을 통합한 GCM 선수 트레이닝. 키즈부터 주니어 엘리트, 프로 지망까지 단계별 성장 로드맵을 제공합니다.",
      en: "GCM player training integrating technique, physical and mental — a stage-by-stage growth roadmap from kids to junior elite and aspiring pros.",
      zh: "融合技术、体能与心理的 GCM 选手训练。从少儿到青少年精英、职业志向者，提供分阶段的成长路线图。",
      ja: "技術・フィジカル・メンタルを統合したGCMの選手トレーニング。キッズからジュニアエリート、プロ志望まで段階的な成長ロードマップを提供します。",
      it: "Allenamento degli atleti GCM che integra tecnica, fisico e mente — una roadmap di crescita per fasi, dai bambini fino all'élite junior e agli aspiranti professionisti.",
      fr: "L'entraînement des joueurs GCM intégrant technique, physique et mental — une feuille de route de progression par étapes, des enfants à l'élite junior et aux futurs professionnels.",
      es: "Entrenamiento de jugadores de GCM que integra técnica, físico y mente — una hoja de ruta de crecimiento por etapas, desde niños hasta la élite júnior y los aspirantes a profesionales.",
    }),
    path: "/training",
  });
}

export default async function TrainingPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "선수 트레이닝",
          en: "Player Training",
          zh: "选手训练",
          ja: "選手トレーニング",
          it: "Allenamento atleti",
          fr: "Entraînement des joueurs",
          es: "Entrenamiento de jugadores",
        })}
        path="/training"
        courses
      />
      <StatBar />
      <Programs />
      <Curriculum />
      <TotalCare />
      <SafetyNet />
    </div>
  );
}
