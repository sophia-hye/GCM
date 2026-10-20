import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading } from "@/components/ui";
import { AlumniStory } from "@/components/alumni/AlumniStory";
import { ALUMNI } from "@/lib/alumni";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "Alumni | GCM 테니스 아카데미",
      en: "Alumni | GCM Tennis Academy",
      zh: "Alumni | GCM Tennis Academy",
      ja: "Alumni | GCM Tennis Academy",
      it: "Alumni | GCM Tennis Academy",
      fr: "Alumni | GCM Tennis Academy",
      es: "Alumni | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM을 거쳐 세계 무대로 나아간 졸업생 이야기. 스탠포드 대학교 D1 테니스팀 주장 명세인 등 GCM Alumni의 성장 스토리를 소개합니다.",
      en: "Stories of alumni who went on to the world stage after GCM, including Myung Se-in, captain of Stanford's D1 tennis team.",
      zh: "介绍从 GCM 走向世界舞台的毕业生故事，包括斯坦福大学 D1 网球队队长 Myung Se-in 等 GCM Alumni 的成长故事。",
      ja: "GCMを経て世界の舞台へ進んだ卒業生の物語。スタンフォード大学D1テニスチームのキャプテン Myung Se-in など、GCM Alumniの成長ストーリーをご紹介します。",
      it: "Storie di ex allievi che, dopo GCM, sono approdati sulla scena mondiale, tra cui Myung Se-in, capitano della squadra di tennis D1 di Stanford.",
      fr: "Histoires d'anciens élèves qui ont accédé à la scène mondiale après GCM, dont Myung Se-in, capitaine de l'équipe de tennis D1 de Stanford.",
      es: "Historias de exalumnos que llegaron al escenario mundial tras GCM, entre ellos Myung Se-in, capitán del equipo de tenis D1 de Stanford.",
    }),
    path: "/alumni",
  });
}

const PREVIEW: { title: I18nText; desc: I18nText }[] = [
  {
    title: {
      ko: "졸업생 스토리",
      en: "Alumni Stories",
      zh: "毕业生故事",
      ja: "卒業生ストーリー",
      it: "Storie degli ex allievi",
      fr: "Parcours des anciens",
      es: "Historias de exalumnos",
    },
    desc: {
      ko: "GCM을 거쳐 프로 · 대학 · 다양한 커리어로 나아간 졸업생들의 여정을 소개합니다.",
      en: "Journeys of alumni who went on to pro, college and diverse careers after GCM.",
      zh: "介绍从 GCM 走向职业、大学及多元职业道路的毕业生的历程。",
      ja: "GCMを経てプロ・大学・多様なキャリアへ進んだ卒業生の歩みをご紹介します。",
      it: "I percorsi degli ex allievi che dopo GCM hanno intrapreso carriere professionistiche, universitarie e di ogni tipo.",
      fr: "Les parcours d'anciens qui ont rejoint le circuit pro, l'université et des carrières variées après GCM.",
      es: "Los recorridos de exalumnos que tras GCM siguieron carreras profesionales, universitarias y diversas.",
    },
  },
  {
    title: {
      ko: "선후배 멘토링",
      en: "Mentorship",
      zh: "学长学弟指导",
      ja: "先輩・後輩メンタリング",
      it: "Mentorship",
      fr: "Mentorat",
      es: "Mentoría",
    },
    desc: {
      ko: "재학생과 졸업생을 잇는 1:1 멘토링으로 진로와 경험을 나눕니다.",
      en: "One-on-one mentoring that connects current students with alumni.",
      zh: "通过连接在校生与毕业生的一对一指导，分享职业与经验。",
      ja: "在校生と卒業生をつなぐ1対1のメンタリングで進路と経験を分かち合います。",
      it: "Un mentoring individuale che mette in contatto gli studenti attuali con gli ex allievi.",
      fr: "Un mentorat individuel qui relie les élèves actuels aux anciens.",
      es: "Mentoría individual que conecta a los estudiantes actuales con los exalumnos.",
    },
  },
  {
    title: {
      ko: "네트워킹 이벤트",
      en: "Networking",
      zh: "社交活动",
      ja: "ネットワーキング",
      it: "Networking",
      fr: "Réseautage",
      es: "Networking",
    },
    desc: {
      ko: "정기 모임과 글로벌 네트워크로 평생 이어지는 인연을 만듭니다.",
      en: "Regular gatherings and a global network for lifelong connections.",
      zh: "通过定期聚会与全球网络，建立伴随一生的缘分。",
      ja: "定期的な集まりとグローバルなネットワークで、一生続くご縁を育みます。",
      it: "Incontri regolari e una rete globale per connessioni che durano tutta la vita.",
      fr: "Des rencontres régulières et un réseau mondial pour des liens durables.",
      es: "Encuentros periódicos y una red global para vínculos que duran toda la vida.",
    },
  },
  {
    title: {
      ko: "커리어 연계",
      en: "Career Links",
      zh: "职业衔接",
      ja: "キャリア連携",
      it: "Collegamenti di carriera",
      fr: "Liens de carrière",
      es: "Vínculos profesionales",
    },
    desc: {
      ko: "진로 · 인턴십 · 전문가 네트워크로 다음 단계를 함께 설계합니다.",
      en: "Careers, internships and expert networks to design the next step together.",
      zh: "借助职业规划、实习与专家网络，共同设计下一步。",
      ja: "進路・インターンシップ・専門家ネットワークで次のステップを共に設計します。",
      it: "Carriere, tirocini e reti di esperti per progettare insieme il passo successivo.",
      fr: "Carrières, stages et réseaux d'experts pour concevoir ensemble la prochaine étape.",
      es: "Carreras, prácticas y redes de expertos para diseñar juntos el siguiente paso.",
    },
  },
];

export default async function AlumniPage() {
  const locale = await getLocale();
  const ko = locale === "ko";

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="GCM Alumni"
          title={pick(locale, {
            ko: "졸업생 이야기",
            en: "Alumni Stories",
            zh: "毕业生故事",
            ja: "卒業生ストーリー",
            it: "Storie degli ex allievi",
            fr: "Parcours des anciens",
            es: "Historias de exalumnos",
          })}
          lead={pick(locale, {
            ko: "GCM을 거쳐 세계 무대로 나아간 졸업생의 여정. 코트 위의 인연이 평생의 자산이 됩니다.",
            en: "The journeys of alumni who went from GCM to the world stage. Connections on court become lifelong assets.",
            zh: "从 GCM 走向世界舞台的毕业生历程。球场上的缘分将成为一生的财富。",
            ja: "GCMを経て世界の舞台へ進んだ卒業生の歩み。コート上のご縁が一生の財産になります。",
            it: "I percorsi degli ex allievi che da GCM hanno raggiunto la scena mondiale. I legami nati in campo diventano un patrimonio per tutta la vita.",
            fr: "Les parcours d'anciens passés de GCM à la scène mondiale. Les liens noués sur le court deviennent un atout pour la vie.",
            es: "Los recorridos de exalumnos que pasaron de GCM al escenario mundial. Los vínculos en la cancha se convierten en un activo de por vida.",
          })}
          wideLead
        />

        <div className="mt-14 space-y-24">
          {ALUMNI.map((alumni) => (
            <AlumniStory key={alumni.slug} alumni={alumni} ko={ko} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What we offer"
          title={pick(locale, {
            ko: "졸업생 네트워크가 잇는 것",
            en: "What the network connects",
            zh: "毕业生网络连接的一切",
            ja: "卒業生ネットワークがつなぐもの",
            it: "Ciò che la rete collega",
            fr: "Ce que le réseau relie",
            es: "Lo que conecta la red",
          })}
          lead={pick(locale, {
            ko: "재학생과 졸업생을 잇는 멘토링부터 글로벌 커리어 네트워크까지, GCM의 인연은 코트 밖에서도 이어집니다.",
            en: "From mentoring to a global career network, GCM connections continue beyond the court.",
            zh: "从连接在校生与毕业生的指导，到全球职业网络，GCM 的缘分在球场之外依然延续。",
            ja: "在校生と卒業生をつなぐメンタリングからグローバルなキャリアネットワークまで、GCMのご縁はコートの外でも続きます。",
            it: "Dal mentoring a una rete di carriera globale, i legami di GCM continuano anche fuori dal campo.",
            fr: "Du mentorat à un réseau de carrière mondial, les liens de GCM se prolongent au-delà du court.",
            es: "Desde la mentoría hasta una red profesional global, los vínculos de GCM continúan más allá de la cancha.",
          })}
          wideLead
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW.map((item) => {
            const title = pick(locale, item.title);
            return (
              <div key={title} className="rounded-2xl border border-line bg-base/50 p-6">
                <h3 className="break-keep font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 break-keep text-sm leading-relaxed text-muted">
                  {pick(locale, item.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
