import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { ConsultingBanner } from "@/components/sections/ConsultingBanner";
import { ConsultingIntro } from "@/components/sections/ConsultingIntro";
import { ConsultingExtras } from "@/components/sections/consulting/ConsultingExtras";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Section, SectionHeading } from "@/components/ui";
import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "테니스 유학 · 대학 진학 컨설팅 | GCM 테니스 아카데미",
      en: "Tennis Study Abroad · College Admissions Consulting | GCM Tennis Academy",
      zh: "网球留学 · 大学升学咨询 | GCM 网球学院",
      ja: "テニス留学 · 大学進学コンサルティング | GCM テニスアカデミー",
      it: "Tennis all'estero · Consulenza ammissioni universitarie | GCM Tennis Academy",
      fr: "Tennis à l'étranger · Conseil en admissions universitaires | GCM Tennis Academy",
      es: "Tenis en el extranjero · Asesoría de admisiones universitarias | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "미국 대학(NCAA·NJCAA) 테니스 진학·유학 컨설팅. UTR 진단부터 장학·입시 전략, 부상 대비 플랜B까지 GCM이 함께 설계합니다.",
      en: "U.S. college (NCAA·NJCAA) tennis recruiting and study-abroad consulting. From UTR assessment to scholarship & admissions strategy and an injury plan B, GCM designs it with you.",
      zh: "美国大学（NCAA·NJCAA）网球升学与留学咨询。从 UTR 诊断到奖学金与入学策略，再到伤病应对的 Plan B，GCM 与您共同规划。",
      ja: "米国大学（NCAA·NJCAA）テニス進学・留学コンサルティング。UTR 診断から奨学・入試戦略、ケガ対策の Plan B まで、GCM が共に設計します。",
      it: "Reclutamento tennistico e consulenza per lo studio nei college USA (NCAA·NJCAA). Dalla valutazione UTR alla strategia di borse e ammissioni fino a un piano B per gli infortuni, GCM lo progetta con te.",
      fr: "Recrutement tennis et conseil d'études dans les universités américaines (NCAA·NJCAA). De l'évaluation UTR à la stratégie de bourses et d'admission jusqu'à un plan B en cas de blessure, GCM conçoit tout avec vous.",
      es: "Reclutamiento de tenis y asesoría de estudios en universidades de EE. UU. (NCAA·NJCAA). Desde el diagnóstico UTR hasta la estrategia de becas y admisiones y un plan B ante lesiones, GCM lo diseña contigo.",
    }),
    path: "/consulting",
  });
}

export default async function ConsultingPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "진학 컨설팅",
          en: "Admissions Consulting",
          zh: "升学咨询",
          ja: "進学コンサルティング",
          it: "Consulenza ammissioni",
          fr: "Conseil en admissions",
          es: "Asesoría de admisiones",
        })}
        path="/consulting"
        faq
      />
      <ConsultingBanner />
      <ConsultingIntro />
      <ConsultingExtras />
      <Section id="consultation">
        <SectionHeading
          eyebrow="Get Started"
          title={pick(locale, {
            ko: "상담 신청",
            en: "Request Consulting",
            zh: "申请咨询",
            ja: "相談を申し込む",
            it: "Richiedi una consulenza",
            fr: "Demander un conseil",
            es: "Solicitar asesoría",
          })}
          lead={pick(locale, {
            ko: "연락처를 남겨주시면 전문 어드바이저가 선수에게 맞는 방향을 안내해 드립니다.",
            en: "Leave your contact and a specialist advisor will guide the right direction for the athlete.",
            zh: "留下您的联系方式，专业顾问将为选手指引合适的方向。",
            ja: "ご連絡先を残していただければ、専門アドバイザーが選手に合った方向をご案内します。",
            it: "Lascia i tuoi contatti e un consulente specializzato indicherà la direzione giusta per l'atleta.",
            fr: "Laissez vos coordonnées et un conseiller spécialisé indiquera la bonne direction pour le joueur.",
            es: "Deja tus datos y un asesor especializado guiará la dirección adecuada para el jugador.",
          })}
        />
        <div className="mt-10">
          <ConsultationForm />
        </div>
      </Section>
    </div>
  );
}
