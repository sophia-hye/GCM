import { ConsultingIntro } from "@/components/sections/ConsultingIntro";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Consulting | GCM Tennis Academy" };

export default async function ConsultingPage() {
  const en = (await getLocale()) === "en";
  return (
    <div className="pt-16">
      <ConsultingIntro />
      <Section id="consultation" className="pt-0">
        <SectionHeading
          eyebrow="Get Started"
          title={en ? "Request Consulting" : "상담 신청"}
          lead={
            en
              ? "Leave your contact and a specialist advisor will guide the right direction for the athlete."
              : "연락처를 남겨주시면 전문 어드바이저가 선수에게 맞는 방향을 안내해 드립니다."
          }
        />
        <div className="mt-10">
          <ConsultationForm />
        </div>
      </Section>
    </div>
  );
}
