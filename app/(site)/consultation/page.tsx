import { ConsultationForm } from "@/components/ConsultationForm";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { Section, SectionHeading } from "@/components/ui";

export const metadata = { title: "Consultation | GCM Tennis Academy" };

export default function ConsultationPage() {
  return (
    <div className="pt-16">
      <Section id="consultation">
        <SectionHeading
          eyebrow="Consultation"
          title="상담 신청"
          lead="연락처를 남겨주시면 전문 어드바이저가 선수에게 맞는 프로그램을 안내해 드립니다."
        />
        <div className="mt-10">
          <ConsultationForm />
        </div>
      </Section>
      <ScheduleSection />
    </div>
  );
}
