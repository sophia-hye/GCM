import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { RecreationalClass } from "@/components/sections/RecreationalClass";
import { TacticalTraining } from "@/components/sections/TacticalTraining";
import { AmateurLifestyle } from "@/components/sections/AmateurLifestyle";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "성인 아마추어 테니스 클래스 | GCM 테니스 아카데미",
      en: "Adult Amateur Tennis Class | GCM Tennis Academy",
      zh: "成人业余网球课程 | GCM Tennis Academy",
      ja: "大人アマチュアテニスクラス | GCM Tennis Academy",
      it: "Corso di tennis amatoriale per adulti | GCM Tennis Academy",
      fr: "Cours de tennis amateur pour adultes | GCM Tennis Academy",
      es: "Clase de tenis amateur para adultos | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "즐기며 배우는 성인 아마추어 테니스. 기본기부터 전술·게임 운영까지 GCM과 함께.",
      en: "Adult amateur tennis you learn while enjoying it — from fundamentals to tactics and game management, together with GCM.",
      zh: "在享受中学习的成人业余网球。从基本功到战术与比赛掌控，与 GCM 同行。",
      ja: "楽しみながら学ぶ大人アマチュアテニス。基本から戦術・ゲーム運びまでGCMと一緒に。",
      it: "Tennis amatoriale per adulti da imparare divertendosi — dai fondamentali alla tattica e alla gestione della partita, insieme a GCM.",
      fr: "Le tennis amateur pour adultes que l'on apprend en s'amusant — des fondamentaux à la tactique et à la gestion du jeu, avec GCM.",
      es: "Tenis amateur para adultos que aprendes disfrutando — desde los fundamentos hasta la táctica y la gestión del juego, junto a GCM.",
    }),
    path: "/amateurs",
  });
}

export default function AmateursPage() {
  return (
    <div className="pt-16">
      <RecreationalClass classKey="ADULT" eyebrow="Amateurs" />
      <TacticalTraining />
      <AmateurLifestyle />
    </div>
  );
}
