import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { EliteProgram } from "@/components/sections/EliteProgram";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "엘리트 선수 전문 육성 프로그램 | GCM 테니스 아카데미",
      en: "Elite Player Development Program | GCM Tennis Academy",
      zh: "精英选手专业培养计划 | GCM Tennis Academy",
      ja: "エリート選手専門育成プログラム | GCM Tennis Academy",
      it: "Programma di sviluppo per atleti d'élite | GCM Tennis Academy",
      fr: "Programme de développement des joueurs d'élite | GCM Tennis Academy",
      es: "Programa de desarrollo de jugadores de élite | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "선수 스스로 경기를 읽고 판단해 해결하는 능력을 기르는 GCM 엘리트 트레이닝. 코스 선택·실전 상황·반복·수비 전환·볼 감각·서브·피지컬까지 7가지 전문 트레이닝.",
      en: "GCM elite training that builds players who read, judge and solve the match on their own — seven specialist blocks: course selection, match situations, repetition, defensive transition, touch, serve and physical.",
      zh: "培养选手自主读懂并解决比赛的 GCM 精英训练。线路选择、实战情境、反复、防守转换、球感、发球与体能共七大专项训练。",
      ja: "選手自身が試合を読み、判断して解決する力を育てる GCM エリートトレーニング。コース選択・実戦状況・反復・守備転換・ボール感覚・サーブ・フィジカルの7つの専門トレーニング。",
      it: "L'allenamento d'élite GCM che forma atleti capaci di leggere, decidere e risolvere la partita da soli: sette blocchi specialistici, dalla scelta della traiettoria al fisico.",
      fr: "L'entraînement élite de GCM qui forme des joueurs capables de lire, décider et résoudre le match seuls : sept blocs spécialisés, du choix de trajectoire au physique.",
      es: "El entrenamiento de élite de GCM que forma jugadores capaces de leer, decidir y resolver el partido por sí mismos: siete bloques especializados, de la elección de dirección al físico.",
    }),
    path: "/elite-program",
    ogImage: "/og/elite-program.jpg",
    ogImageAlt: "GCM Elite Player Program",
  });
}

export default async function EliteProgramPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "엘리트 선수 전문 육성 프로그램",
          en: "Elite Player Development Program",
          zh: "精英选手专业培养计划",
          ja: "エリート選手専門育成プログラム",
          it: "Programma di sviluppo per atleti d'élite",
          fr: "Programme de développement des joueurs d'élite",
          es: "Programa de desarrollo de jugadores de élite",
        })}
        path="/elite-program"
      />
      <EliteProgram />
    </div>
  );
}
