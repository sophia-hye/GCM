import { pageMetadata } from "@/lib/page-metadata";
import { RecreationalClass } from "@/components/sections/RecreationalClass";

export const metadata = pageMetadata({
  title: "키즈 테니스 클래스 | GCM 테니스 아카데미",
  description: "놀이처럼 배우는 첫 테니스. 운동 능력과 코트 적응, 기본기를 즐겁게 익히는 GCM 키즈 클래스.",
  path: "/kids",
});

export default function KidsPage() {
  return (
    <div className="pt-16">
      <RecreationalClass classKey="KIDS" eyebrow="Kids" />
    </div>
  );
}
