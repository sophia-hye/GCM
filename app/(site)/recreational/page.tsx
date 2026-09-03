import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Recreational } from "@/components/sections/Recreational";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "키즈 · 성인 테니스 클래스 | GCM 테니스 아카데미" : "Kids · Adult Tennis Class | GCM Tennis Academy",
    description: ko
      ? "선수반이 아니어도 즐기는 GCM 키즈·성인 아마추어 테니스 클래스. 입문부터 전술·게임 운영까지."
      : "GCM kids and adult amateur tennis classes for non-competitive players — from beginner basics to tactics and game management.",
    path: "/recreational",
  });
}

export default function RecreationalPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="키즈·성인 클래스" path="/recreational" />
      <Recreational />
    </div>
  );
}
