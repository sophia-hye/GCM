import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Players } from "@/components/sections/Players";

export const metadata = pageMetadata({ title: "배출 · 소속 선수 | GCM 테니스 아카데미", description: "GCM에서 성장한 배출·소속 선수들의 기록과 성장 스토리를 소개합니다.", path: "/players" });

export default function PlayersPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="배출·소속 선수" path="/players" />
      <Players detailed />
    </div>
  );
}
