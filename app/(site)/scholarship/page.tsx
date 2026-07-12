import { PageJsonLd } from "@/components/PageJsonLd";
import { Scholarship } from "@/components/sections/Scholarship";
import { ScholarshipForm } from "@/components/ScholarshipForm";
import { Section } from "@/components/ui";

export const metadata = { title: "장학 제도 신청 | GCM 테니스 아카데미", description: "GCM 테니스 장학 제도 안내 및 신청. 태도·투지·인성을 갖춘 선수에게 전액·부분 장학을 지원합니다." };

export default function ScholarshipPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="장학 제도" path="/scholarship" />
      <Scholarship />
      <Section className="pt-0">
        <ScholarshipForm />
      </Section>
    </div>
  );
}
