import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Players } from "@/components/sections/Players";
import { ParentFeature } from "@/components/sections/ParentFeature";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "배출 · 소속 선수 | GCM 테니스 아카데미",
      en: "Players | GCM Tennis Academy",
      zh: "培养 · 所属选手 | GCM 网球学院",
      ja: "輩出 · 所属選手 | GCM テニスアカデミー",
      it: "Atleti | GCM Tennis Academy",
      fr: "Joueurs | GCM Tennis Academy",
      es: "Jugadores | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM에서 성장한 배출·소속 선수들의 기록과 성장 스토리를 소개합니다.",
      en: "Records and growth stories of players developed at GCM Tennis Academy.",
      zh: "介绍在 GCM 成长的培养及所属选手的成绩与成长故事。",
      ja: "GCM で成長した輩出・所属選手の記録と成長ストーリーを紹介します。",
      it: "Risultati e storie di crescita degli atleti cresciuti alla GCM Tennis Academy.",
      fr: "Les parcours et les histoires de progression des joueurs formés à la GCM Tennis Academy.",
      es: "Registros e historias de crecimiento de los jugadores formados en la GCM Tennis Academy.",
    }),
    path: "/players",
  });
}

export default async function PlayersPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd name={pick(locale, { ko: "배출·소속 선수", en: "GCM Players", zh: "培养·所属选手", ja: "輩出·所属選手", it: "Atleti GCM", fr: "Joueurs GCM", es: "Jugadores GCM" })} path="/players" />
      <Players detailed />
      <ParentFeature />
    </div>
  );
}
