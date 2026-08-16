import { pageMetadata } from "@/lib/page-metadata";
import { WhyTennisLeaders } from "@/components/sections/WhyTennisLeaders";

export const metadata = pageMetadata({
  title: "Why Tennis — The Court of Leaders | GCM 테니스 아카데미",
  description: "성공한 CEO와 리더들이 테니스에 매료되는 이유. 자기통제·네트워킹·몰입·품격, 그리고 당신의 일상을 바꾸는 새로운 라이프스타일.",
  path: "/why-tennis",
});

export default function WhyTennisPage() {
  return (
    <div className="pt-16">
      <WhyTennisLeaders />
    </div>
  );
}
