import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Team } from "@/components/sections/Team";

export const metadata = pageMetadata({ title: "코치진 소개 | GCM 테니스 아카데미", description: "오성국 대표를 비롯한 GCM 코치진 소개. 국제무대를 경험한 전문가들이 기술·피지컬·멘탈을 함께 지도합니다.", path: "/coaches" });

export default function CoachesPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="코치진 소개" path="/coaches" coaches />
      <Team />
    </div>
  );
}
