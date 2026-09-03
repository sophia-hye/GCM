import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Players } from "@/components/sections/Players";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko
      ? "배출 · 소속 선수 | GCM 테니스 아카데미"
      : "Players | GCM Tennis Academy",
    description: ko
      ? "GCM에서 성장한 배출·소속 선수들의 기록과 성장 스토리를 소개합니다."
      : "Records and growth stories of players developed at GCM Tennis Academy.",
    path: "/players",
  });
}

export default async function PlayersPage() {
  const ko = (await getLocale()) === "ko";
  return (
    <div className="pt-16">
      <PageJsonLd name={ko ? "배출·소속 선수" : "GCM Players"} path="/players" />
      <Players detailed />
    </div>
  );
}
