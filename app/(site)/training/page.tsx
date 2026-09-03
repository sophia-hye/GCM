import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { PageJsonLd } from "@/components/PageJsonLd";
import { StatBar } from "@/components/sections/StatBar";
import { Programs } from "@/components/sections/Programs";
import { Curriculum } from "@/components/sections/Curriculum";
import { TotalCare } from "@/components/sections/TotalCare";
import { SafetyNet } from "@/components/sections/SafetyNet";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "선수 트레이닝 프로그램 | GCM 테니스 아카데미" : "Player Training Program | GCM Tennis Academy",
    description: ko
      ? "기술·피지컬·멘탈을 통합한 GCM 선수 트레이닝. 키즈부터 주니어 엘리트, 프로 지망까지 단계별 성장 로드맵을 제공합니다."
      : "GCM player training integrating technique, physical and mental — a stage-by-stage growth roadmap from kids to junior elite and aspiring pros.",
    path: "/training",
  });
}

export default function TrainingPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="선수 트레이닝" path="/training" courses />
      <StatBar />
      <Programs />
      <Curriculum />
      <TotalCare />
      <SafetyNet />
    </div>
  );
}
