import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { ConsultingBanner } from "@/components/sections/ConsultingBanner";
import { ConsultingIntro } from "@/components/sections/ConsultingIntro";
import { ConsultingExtras } from "@/components/sections/consulting/ConsultingExtras";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export const metadata = pageMetadata({ title: "테니스 유학 · 대학 진학 컨설팅 | GCM 테니스 아카데미", description: "미국 대학(NCAA·NJCAA) 테니스 진학·유학 컨설팅. UTR 진단부터 장학·입시 전략, 부상 대비 플랜B까지 GCM이 함께 설계합니다.", path: "/consulting" });

export default async function ConsultingPage() {
  const en = (await getLocale()) === "en";
  return (
    <div className="pt-16">
      <PageJsonLd name="진학 컨설팅" path="/consulting" faq />
      <ConsultingBanner />
      <ConsultingIntro />
      <ConsultingExtras />
      <Section id="consultation">
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
