import { pageMetadata } from "@/lib/page-metadata";
import { WhyTennis } from "@/components/sections/WhyTennis";

export const metadata = pageMetadata({
  title: "Kids — 왜 테니스인가 | GCM 테니스 아카데미",
  description: "테니스가 길러주는 주체성·회복 탄력성·정직성·전략적 사고. AI 시대가 요구하는 1% 리더의 역량을 조기에 입히는 최고의 인성·리더십 교육.",
  path: "/kids",
});

export default function KidsPage() {
  return (
    <div className="pt-16">
      <WhyTennis />
    </div>
  );
}
