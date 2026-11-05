import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { KidsCurriculum } from "@/components/sections/KidsCurriculum";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "키즈 커리큘럼 — 세계가 주목한 GCM 8단계 프로그램 | GCM 테니스 아카데미",
      en: "Kids Curriculum — The GCM 8-Step Program the World Noticed | GCM Tennis Academy",
      zh: "儿童课程 — 世界瞩目的 GCM 8 阶段项目 | GCM Tennis Academy",
      ja: "キッズ・カリキュラム — 世界が注目した GCM 8ステップ・プログラム | GCM Tennis Academy",
      it: "Curriculum Kids — Il programma GCM in 8 fasi notato dal mondo | GCM Tennis Academy",
      fr: "Programme Kids — Le programme GCM en 8 étapes remarqué par le monde | GCM Tennis Academy",
      es: "Currículo Kids — El programa GCM de 8 fases que el mundo notó | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "놀이에서 실전까지, 모든 드릴에 목표와 발달 효과가 담긴 GCM 키즈 8단계 전술반 커리큘럼. 북미·유럽·아시아 아카데미와의 글로벌 파트너십을 환영합니다.",
      en: "GCM's 8-step kids tactical curriculum — from play to real match play, every drill carries a goal and a developmental effect. Global partnerships with academies in North America, Europe, and Asia welcome.",
      zh: "从游戏到实战，每项训练都蕴含目标与发展效果的 GCM 儿童 8 阶段战术课程。欢迎与北美、欧洲、亚洲学院开展全球合作。",
      ja: "遊びから実戦まで、すべてのドリルに目標と発達効果を込めた GCM キッズ 8ステップ戦術カリキュラム。北米・欧州・アジアのアカデミーとのグローバル提携を歓迎します。",
      it: "Il curriculum tattico Kids GCM in 8 fasi: dal gioco alla partita vera, ogni esercizio ha un obiettivo e un effetto. Benvenute le partnership globali con accademie di Nord America, Europa e Asia.",
      fr: "Le programme tactique Kids GCM en 8 étapes : du jeu au vrai match, chaque exercice a un objectif et un effet. Partenariats mondiaux avec des académies d'Amérique du Nord, d'Europe et d'Asie bienvenus.",
      es: "El currículo táctico Kids GCM de 8 fases: del juego al partido real, cada ejercicio tiene un objetivo y un efecto. Bienvenidas las alianzas globales con academias de Norteamérica, Europa y Asia.",
    }),
    path: "/kids-curriculum",
  });
}

export default async function KidsCurriculumPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "GCM 키즈 커리큘럼",
          en: "GCM Kids Curriculum",
          zh: "GCM 儿童课程",
          ja: "GCM キッズ・カリキュラム",
          it: "Curriculum Kids GCM",
          fr: "Programme Kids GCM",
          es: "Currículo Kids GCM",
        })}
        path="/kids-curriculum"
      />
      <KidsCurriculum />
    </div>
  );
}
