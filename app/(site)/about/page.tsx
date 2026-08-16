import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { AboutStory } from "@/components/sections/AboutStory";
import { WhyNow } from "@/components/sections/WhyNow";

export const metadata = pageMetadata({ title: "아카데미 소개 · 철학 | GCM 테니스 아카데미", description: "GCM 테니스 아카데미의 설립 배경과 교육 철학, 한 선수를 여러 전문가가 함께 책임지는 통합 퍼포먼스 모델을 소개합니다.", path: "/about" });

export default function AboutPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="아카데미 소개" path="/about" />
      <AboutStory />
      <WhyNow />
    </div>
  );
}
