import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { GcmStory } from "@/components/sections/GcmStory";
import { GcmStoryMedia } from "@/components/sections/GcmStoryMedia";
import { Section, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "GCM 스토리 | GCM 테니스 아카데미",
      en: "GCM Story | GCM Tennis Academy",
      zh: "GCM 故事 | GCM Tennis Academy",
      ja: "GCM ストーリー | GCM Tennis Academy",
      it: "La storia di GCM | GCM Tennis Academy",
      fr: "L'histoire de GCM | GCM Tennis Academy",
      es: "La historia de GCM | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "한 번의 스윙보다 한 사람의 성장을 믿는 GCM 테니스 아카데미가 걸어온 이야기와 철학.",
      en: "The story and philosophy of GCM Tennis Academy — a place that believes in a person's growth more than a single swing.",
      zh: "相信人的成长胜过一记挥拍的 GCM Tennis Academy 走过的故事与理念。",
      ja: "一度のスイングよりも一人の成長を信じる GCM Tennis Academy が歩んできた物語と理念。",
      it: "La storia e la filosofia di GCM Tennis Academy, un luogo che crede nella crescita di una persona più che in un singolo colpo.",
      fr: "L'histoire et la philosophie de GCM Tennis Academy, un lieu qui croit en la croissance d'une personne plus qu'en un simple coup.",
      es: "La historia y la filosofía de GCM Tennis Academy, un lugar que cree en el crecimiento de una persona más que en un solo golpe.",
    }),
    path: "/gcm-story",
  });
}

export default async function GcmStoryPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "GCM 스토리",
          en: "GCM Story",
          zh: "GCM 故事",
          ja: "GCM ストーリー",
          it: "La storia di GCM",
          fr: "L'histoire de GCM",
          es: "La historia de GCM",
        })}
        path="/gcm-story"
      />
      <GcmStory />
      <GcmStoryMedia />

      <Section tone="muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="break-keep font-display text-2xl font-bold sm:text-3xl">
            {pick(locale, {
              ko: "다음 이야기의 주인공은, 당신의 아이입니다",
              en: "The hero of the next story is your child",
              zh: "下一个故事的主角，就是您的孩子",
              ja: "次の物語の主人公は、お子さまです",
              it: "Il protagonista della prossima storia è tuo figlio",
              fr: "Le héros de la prochaine histoire, c'est votre enfant",
              es: "El protagonista de la próxima historia es tu hijo",
            })}
          </h2>
          <p className="mt-3 break-keep leading-relaxed text-muted">
            {pick(locale, {
              ko: "GCM이 걸어온 이야기가 궁금하시거나, 우리 아이의 다음 이야기를 함께 그리고 싶으시다면 언제든 편하게 문의해 주세요.",
              en: "If you'd like to know more about the story GCM has walked, or to shape your child's next story together, reach out anytime.",
              zh: "如果您想更多了解GCM走过的故事，或希望与我们一同描绘孩子的下一段故事，欢迎随时咨询。",
              ja: "GCMが歩んできた物語をもっと知りたい方、あるいはお子さまの次の物語を一緒に描きたい方は、いつでもお気軽にお問い合わせください。",
              it: "Se desideri conoscere meglio la storia che GCM ha percorso, o dare forma insieme alla prossima storia di tuo figlio, contattaci quando vuoi.",
              fr: "Si vous souhaitez en savoir plus sur l'histoire que GCM a parcourue, ou construire ensemble la prochaine histoire de votre enfant, contactez-nous à tout moment.",
              es: "Si quieres conocer mejor la historia que GCM ha recorrido, o dar forma juntos a la próxima historia de tu hijo, contáctanos cuando quieras.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/about" variant="court">
              {pick(locale, { ko: "아카데미 소개", en: "About GCM", zh: "了解学院", ja: "アカデミー紹介", it: "Chi siamo", fr: "À propos", es: "Sobre nosotros" })}
            </Button>
            <Button href="/consulting" variant="outline">
              {pick(locale, { ko: "상담하기", en: "Request consultation", zh: "预约咨询", ja: "相談する", it: "Richiedi una consulenza", fr: "Demander un conseil", es: "Solicitar asesoría" })}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
