import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { KidsBenefits } from "@/components/sections/KidsBenefits";
import { RecreationalClass } from "@/components/sections/RecreationalClass";
import { TennisCoreValues } from "@/components/sections/TennisCoreValues";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko
      ? "Kids — 왜 아이의 첫 스포츠는 테니스인가 | GCM 테니스 아카데미"
      : "Kids — Why Tennis Should Be Your Child's First Sport | GCM Tennis Academy",
    description: ko
      ? "전 세계 엘리트가 자녀의 첫 스포츠로 테니스를 선택하는 이유. 집중력·성장·멘탈·사회성·평생 건강까지, 학술적·의학적 근거로 정리한 GCM KIDS."
      : "Why elites worldwide choose tennis as their child's first sport — focus, growth, mental strength, social skills and lifelong health, backed by academic and medical evidence. GCM KIDS.",
    path: "/kids",
  });
}

export default function KidsPage() {
  return (
    <div className="pt-16">
      <KidsBenefits />
      <RecreationalClass classKey="KIDS" eyebrow="Kids Class" />
      <TennisCoreValues />
    </div>
  );
}
