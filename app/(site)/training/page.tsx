import { PageJsonLd } from "@/components/PageJsonLd";
import { StatBar } from "@/components/sections/StatBar";
import { Programs } from "@/components/sections/Programs";
import { Curriculum } from "@/components/sections/Curriculum";
import { TotalCare } from "@/components/sections/TotalCare";
import { SafetyNet } from "@/components/sections/SafetyNet";

export const metadata = { title: "선수 트레이닝 프로그램 | GCM 테니스 아카데미", description: "기술·피지컬·멘탈을 통합한 GCM 선수 트레이닝. 키즈부터 주니어 엘리트, 프로 지망까지 단계별 성장 로드맵을 제공합니다." };

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
