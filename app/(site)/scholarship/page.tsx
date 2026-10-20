import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Scholarship } from "@/components/sections/Scholarship";
import { ScholarshipAlumniCTA } from "@/components/sections/ScholarshipAlumniCTA";
import { ScholarshipSteps } from "@/components/sections/ScholarshipSteps";
import { ScholarshipForm } from "@/components/ScholarshipForm";
import { Section } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "장학 제도 신청 | GCM 테니스 아카데미",
      en: "Scholarship Application | GCM Tennis Academy",
      zh: "奖学金申请 | GCM Tennis Academy",
      ja: "奨学制度の申請 | GCM Tennis Academy",
      it: "Domanda di borsa di studio | GCM Tennis Academy",
      fr: "Demande de bourse | GCM Tennis Academy",
      es: "Solicitud de beca | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM 테니스 장학 제도 안내 및 신청. 태도·투지·인성을 갖춘 선수에게 전액·부분 장학을 지원합니다.",
      en: "GCM tennis scholarship information and application. Full and partial scholarships for players with the right attitude, grit, and character.",
      zh: "GCM 网球奖学金的介绍与申请。为具备良好态度、拼劲与品格的选手提供全额与部分奖学金。",
      ja: "GCMテニス奨学制度のご案内と申請。態度・闘志・人間性を備えた選手に全額・一部奨学金を支援します。",
      it: "Informazioni e domanda per la borsa di studio di tennis GCM. Borse di studio totali e parziali per atleti con il giusto atteggiamento, grinta e carattere.",
      fr: "Informations et demande de bourse de tennis GCM. Bourses totales et partielles pour les joueurs faisant preuve de la bonne attitude, de combativité et de caractère.",
      es: "Información y solicitud de la beca de tenis de GCM. Becas totales y parciales para jugadores con la actitud, la garra y el carácter adecuados.",
    }),
    path: "/scholarship",
  });
}

export default async function ScholarshipPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "장학 제도",
          en: "Scholarship",
          zh: "奖学金",
          ja: "奨学制度",
          it: "Borsa di studio",
          fr: "Bourse",
          es: "Beca",
        })}
        path="/scholarship"
      />
      <Scholarship />
      <ScholarshipAlumniCTA />
      <ScholarshipSteps />
      <Section className="pt-0">
        <ScholarshipForm />
      </Section>
    </div>
  );
}
