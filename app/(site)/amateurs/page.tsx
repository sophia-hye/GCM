import { pageMetadata } from "@/lib/page-metadata";
import { RecreationalClass } from "@/components/sections/RecreationalClass";

export const metadata = pageMetadata({
  title: "성인 아마추어 테니스 클래스 | GCM 테니스 아카데미",
  description: "즐기며 배우는 성인 아마추어 테니스. 기본기부터 전술·게임 운영까지 GCM과 함께.",
  path: "/amateurs",
});

export default function AmateursPage() {
  return (
    <div className="pt-16">
      <RecreationalClass classKey="ADULT" eyebrow="Amateurs" />
    </div>
  );
}
