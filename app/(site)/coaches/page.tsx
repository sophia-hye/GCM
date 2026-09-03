import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Team } from "@/components/sections/Team";
import { Section, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "코치진 소개 | GCM 테니스 아카데미" : "Our Coaches | GCM Tennis Academy",
    description: ko
      ? "오성국 대표를 비롯한 GCM 코치진 소개. 국제무대를 경험한 전문가들이 기술·피지컬·멘탈을 함께 지도합니다."
      : "Meet the GCM coaching staff, including Executive Director Seong-gook Oh. Experts who have competed on the international stage guide technique, physical and mental together.",
    path: "/coaches",
  });
}

export default async function CoachesPage() {
  const ko = (await getLocale()) === "ko";
  return (
    <div className="pt-16">
      <PageJsonLd name="코치진 소개" path="/coaches" coaches />
      <Team />
      <Section tone="muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="break-keep font-display text-2xl font-bold sm:text-3xl">
            {ko ? "우리 아이에게 맞는 코칭이 궁금하신가요?" : "Curious which coaching fits your child?"}
          </h2>
          <p className="mt-3 break-keep leading-relaxed text-muted">
            {ko
              ? "선수의 현재 위치와 목표에 맞는 코칭·진로를 편하게 문의하세요."
              : "Reach out about coaching and pathways tailored to where your athlete is now."}
          </p>
          <div className="mt-8">
            <Button href="/consulting" variant="court">
              {ko ? "상담하기" : "Request consultation"}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
