import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { RecreationalClass } from "@/components/sections/RecreationalClass";
import { AmateurLifestyle } from "@/components/sections/AmateurLifestyle";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "성인 아마추어 테니스 클래스 | GCM 테니스 아카데미" : "Adult Amateur Tennis Class | GCM Tennis Academy",
    description: ko
      ? "즐기며 배우는 성인 아마추어 테니스. 기본기부터 전술·게임 운영까지 GCM과 함께."
      : "Adult amateur tennis you learn while enjoying it — from fundamentals to tactics and game management, together with GCM.",
    path: "/amateurs",
  });
}

export default function AmateursPage() {
  return (
    <div className="pt-16">
      <RecreationalClass classKey="ADULT" eyebrow="Amateurs" />
      <AmateurLifestyle />
    </div>
  );
}
