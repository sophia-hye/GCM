import { ConsultingBanner } from "@/components/sections/ConsultingBanner";
import { ConsultingIntro } from "@/components/sections/ConsultingIntro";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Section, SectionHeading, Button } from "@/components/ui";
import { PAYMENT_CONFIG } from "@/lib/payments/config";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Consulting | GCM Tennis Academy" };

export default async function ConsultingPage() {
  const en = (await getLocale()) === "en";
  return (
    <div className="pt-16">
      <ConsultingBanner />
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

        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">
              {en ? "Confirm with a deposit" : "예약금 결제로 상담 확정"}
            </p>
            <p className="mt-1 text-sm text-muted">
              {en
                ? `A deposit of ${(PAYMENT_CONFIG.consulting_deposit.amount ?? 0).toLocaleString("ko-KR")} KRW confirms your consulting slot.`
                : `예약금 ${(PAYMENT_CONFIG.consulting_deposit.amount ?? 0).toLocaleString("ko-KR")}원 결제 시 상담 일정이 확정됩니다.`}
            </p>
          </div>
          <Button href="/pay/consulting_deposit" variant="court">
            {en ? "Pay deposit" : "예약금 결제하기"}
          </Button>
        </div>
      </Section>
    </div>
  );
}
