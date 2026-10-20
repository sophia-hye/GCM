import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { AboutStory } from "@/components/sections/AboutStory";
import { WhyNow } from "@/components/sections/WhyNow";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "아카데미 소개 · 철학 | GCM 테니스 아카데미",
      en: "About · Our Philosophy | GCM Tennis Academy",
      zh: "学院介绍 · 理念 | GCM Tennis Academy",
      ja: "アカデミー紹介・理念 | GCM Tennis Academy",
      it: "Chi siamo · La nostra filosofia | GCM Tennis Academy",
      fr: "À propos · Notre philosophie | GCM Tennis Academy",
      es: "Sobre nosotros · Nuestra filosofía | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM 테니스 아카데미의 설립 배경과 교육 철학, 한 선수를 여러 전문가가 함께 책임지는 통합 퍼포먼스 모델을 소개합니다.",
      en: "GCM Tennis Academy's founding background and educational philosophy, and an integrated performance model where multiple experts take joint responsibility for one athlete.",
      zh: "介绍 GCM Tennis Academy 的创立背景与教育理念，以及由多位专家共同负责一名选手的整合型表现模式。",
      ja: "GCM Tennis Academyの設立背景と教育理念、そして一人の選手を複数の専門家が共に担う統合パフォーマンスモデルをご紹介します。",
      it: "Il background fondativo e la filosofia educativa di GCM Tennis Academy, e un modello di performance integrato in cui più esperti si assumono la responsabilità condivisa di un singolo atleta.",
      fr: "Les origines et la philosophie éducative de GCM Tennis Academy, ainsi qu'un modèle de performance intégré où plusieurs experts assument conjointement la responsabilité d'un même joueur.",
      es: "Los orígenes y la filosofía educativa de GCM Tennis Academy, y un modelo de rendimiento integrado en el que varios expertos asumen la responsabilidad conjunta de un mismo jugador.",
    }),
    path: "/about",
  });
}

export default async function AboutPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "아카데미 소개",
          en: "About",
          zh: "学院介绍",
          ja: "アカデミー紹介",
          it: "Chi siamo",
          fr: "À propos",
          es: "Sobre nosotros",
        })}
        path="/about"
      />
      <AboutStory />
      <WhyNow />
    </div>
  );
}
