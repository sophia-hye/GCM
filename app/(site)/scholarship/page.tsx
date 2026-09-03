import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Scholarship } from "@/components/sections/Scholarship";
import { ScholarshipAlumniCTA } from "@/components/sections/ScholarshipAlumniCTA";
import { ScholarshipSteps } from "@/components/sections/ScholarshipSteps";
import { ScholarshipForm } from "@/components/ScholarshipForm";
import { Section } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "장학 제도 신청 | GCM 테니스 아카데미" : "Scholarship Application | GCM Tennis Academy",
    description: ko
      ? "GCM 테니스 장학 제도 안내 및 신청. 태도·투지·인성을 갖춘 선수에게 전액·부분 장학을 지원합니다."
      : "GCM tennis scholarship information and application. Full and partial scholarships for players with the right attitude, grit, and character.",
    path: "/scholarship",
  });
}

export default async function ScholarshipPage() {
  const ko = (await getLocale()) === "ko";
  return (
    <div className="pt-16">
      <PageJsonLd name={ko ? "장학 제도" : "Scholarship"} path="/scholarship" />
      <Scholarship />
      <ScholarshipAlumniCTA />
      <ScholarshipSteps />
      <Section className="pt-0">
        <ScholarshipForm />
      </Section>
    </div>
  );
}
