import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Team } from "@/components/sections/Team";
import { Section, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "코치진 소개 | GCM 테니스 아카데미",
      en: "Our Coaches | GCM Tennis Academy",
      zh: "教练团队介绍 | GCM 网球学院",
      ja: "コーチ陣の紹介 | GCM テニスアカデミー",
      it: "I nostri allenatori | GCM Tennis Academy",
      fr: "Nos entraîneurs | GCM Tennis Academy",
      es: "Nuestros entrenadores | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "오성국 대표를 비롯한 GCM 코치진 소개. 국제무대를 경험한 전문가들이 기술·피지컬·멘탈을 함께 지도합니다.",
      en: "Meet the GCM coaching staff, including Executive Director Seong-gook Oh. Experts who have competed on the international stage guide technique, physical and mental together.",
      zh: "认识以代表院长吴成国为首的 GCM 教练团队。经历过国际舞台的专家们，同时指导技术、体能与心理。",
      ja: "代表院長オ・ソングクをはじめとする GCM コーチ陣の紹介。国際舞台を経験した専門家が、技術・フィジカル・メンタルを共に指導します。",
      it: "Conosci lo staff tecnico di GCM, incluso il Direttore Oh Seong-gook. Esperti che hanno gareggiato sul palcoscenico internazionale guidano insieme tecnica, fisico e mente.",
      fr: "Découvrez le staff de GCM, dont le directeur Oh Seong-gook. Des experts ayant évolué sur la scène internationale encadrent ensemble la technique, le physique et le mental.",
      es: "Conoce al cuerpo técnico de GCM, incluido el director Oh Seong-gook. Expertos que han competido en el escenario internacional guían juntos la técnica, el físico y la mente.",
    }),
    path: "/coaches",
  });
}

export default async function CoachesPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd name="코치진 소개" path="/coaches" coaches />
      <Team />
      <Section tone="muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="break-keep font-display text-2xl font-bold sm:text-3xl">
            {pick(locale, {
              ko: "우리 아이에게 맞는 코칭이 궁금하신가요?",
              en: "Curious which coaching fits your child?",
              zh: "想了解最适合孩子的教学方式吗？",
              ja: "お子さまに合ったコーチングが気になりますか？",
              it: "Vuoi sapere quale coaching è giusto per tuo figlio?",
              fr: "Vous vous demandez quel encadrement convient à votre enfant ?",
              es: "¿Quieres saber qué tipo de coaching le conviene a tu hijo?",
            })}
          </h2>
          <p className="mt-3 break-keep leading-relaxed text-muted">
            {pick(locale, {
              ko: "선수의 현재 위치와 목표에 맞는 코칭·진로를 편하게 문의하세요.",
              en: "Reach out about coaching and pathways tailored to where your athlete is now.",
              zh: "欢迎咨询契合选手当前水平与目标的教学与升学路径。",
              ja: "選手の現在地と目標に合ったコーチング・進路をお気軽にお問い合わせください。",
              it: "Contattaci per un coaching e un percorso su misura per il livello attuale del tuo atleta.",
              fr: "Contactez-nous pour un encadrement et un parcours adaptés au niveau actuel de votre joueur.",
              es: "Consúltanos sobre el coaching y el itinerario adecuados al nivel actual de tu jugador.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/consulting" variant="court">
              {pick(locale, { ko: "상담하기", en: "Request consultation", zh: "预约咨询", ja: "相談する", it: "Richiedi una consulenza", fr: "Demander un conseil", es: "Solicitar asesoría" })}
            </Button>
            <Button href="/testimonial" variant="outline">
              {pick(locale, { ko: "후기 보러가기", en: "See reviews", zh: "查看后记", ja: "レビューを見る", it: "Vedi le testimonianze", fr: "Voir les témoignages", es: "Ver reseñas" })}
            </Button>
            <Button href="/players" variant="outline">
              {pick(locale, { ko: "선수 보러가기", en: "Meet the players", zh: "认识选手", ja: "選手を見る", it: "Scopri gli atleti", fr: "Voir les joueurs", es: "Ver a los jugadores" })}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
