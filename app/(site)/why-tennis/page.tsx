import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { WhyTennisLeaders } from "@/components/sections/WhyTennisLeaders";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko
      ? "Why Tennis — The Court of Leaders | GCM 테니스 아카데미"
      : "Why Tennis — The Court of Leaders | GCM Tennis Academy",
    description: ko
      ? "성공한 CEO와 리더들이 테니스에 매료되는 이유. 자기통제·네트워킹·몰입·품격, 그리고 당신의 일상을 바꾸는 새로운 라이프스타일."
      : "Why successful CEOs and leaders are drawn to tennis — self-control, networking, focus and poise, and a new lifestyle that changes your everyday.",
    path: "/why-tennis",
  });
}

export default function WhyTennisPage() {
  return (
    <div className="pt-16">
      <WhyTennisLeaders />
    </div>
  );
}
