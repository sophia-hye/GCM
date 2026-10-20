import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Recreational } from "@/components/sections/Recreational";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "키즈 · 성인 테니스 클래스 | GCM 테니스 아카데미",
      en: "Kids · Adult Tennis Class | GCM Tennis Academy",
      zh: "少儿 · 成人网球课程 | GCM Tennis Academy",
      ja: "キッズ・大人テニスクラス | GCM Tennis Academy",
      it: "Corsi di tennis per bambini e adulti | GCM Tennis Academy",
      fr: "Cours de tennis enfants · adultes | GCM Tennis Academy",
      es: "Clases de tenis para niños y adultos | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "선수반이 아니어도 즐기는 GCM 키즈·성인 아마추어 테니스 클래스. 입문부터 전술·게임 운영까지.",
      en: "GCM kids and adult amateur tennis classes for non-competitive players — from beginner basics to tactics and game management.",
      zh: "无需进入选手班也能享受的 GCM 少儿与成人业余网球课程。从入门到战术与比赛掌控。",
      ja: "選手コースでなくても楽しめるGCMのキッズ・大人アマチュアテニスクラス。入門から戦術・ゲーム運びまで。",
      it: "Corsi di tennis amatoriale GCM per bambini e adulti, anche per chi non è agonista — dalle basi per principianti alla tattica e alla gestione della partita.",
      fr: "Cours de tennis amateur GCM pour enfants et adultes, même sans visée compétitive — des bases pour débutants à la tactique et à la gestion du jeu.",
      es: "Clases de tenis amateur de GCM para niños y adultos, también para quienes no compiten — desde las bases para principiantes hasta la táctica y la gestión del juego.",
    }),
    path: "/recreational",
  });
}

export default async function RecreationalPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "키즈·성인 클래스",
          en: "Kids · Adult Class",
          zh: "少儿 · 成人课程",
          ja: "キッズ・大人クラス",
          it: "Corsi bambini e adulti",
          fr: "Cours enfants · adultes",
          es: "Clases para niños y adultos",
        })}
        path="/recreational"
      />
      <Recreational />
    </div>
  );
}
