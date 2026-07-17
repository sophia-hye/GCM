import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Recreational } from "@/components/sections/Recreational";

export const metadata = pageMetadata({ title: "키즈 · 성인 테니스 클래스 | GCM 테니스 아카데미", description: "선수반이 아니어도 즐기는 GCM 키즈·성인 아마추어 테니스 클래스. 입문부터 전술·게임 운영까지.", path: "/recreational" });

export default function RecreationalPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="키즈·성인 클래스" path="/recreational" />
      <Recreational />
    </div>
  );
}
