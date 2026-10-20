import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading, Button } from "@/components/ui";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { ProgramCard } from "@/components/ProgramCard";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";
import type { Program } from "@/lib/programs";

const PARTNERSHIP: { label: I18nText; body: I18nText }[] = [
  {
    label: {
      ko: "글로벌 협약 기관 단기 프로그램",
      en: "Short-Term Programs at Partner Institutions",
      zh: "全球合作机构短期项目",
      ja: "グローバル提携機関の短期プログラム",
      it: "Programmi brevi presso istituzioni partner",
      fr: "Programmes courts dans les institutions partenaires",
      es: "Programas cortos en instituciones asociadas",
    },
    body: {
      ko: "세계 각국의 파트너십 기관을 통해 회원별 목적(스포츠, 학술, 리더십 등)에 맞춘 맞춤형 단기 과정 연계",
      en: "Customized short-term courses tailored to each member's goals (sports, academics, leadership, etc.) through partner institutions around the world.",
      zh: "通过世界各地的合作机构，为每位会员的目标（体育、学术、领导力等）量身定制短期课程衔接。",
      ja: "世界各国の提携機関を通じて、会員ごとの目的（スポーツ、学術、リーダーシップなど）に合わせたオーダーメイドの短期コースを連携。",
      it: "Corsi brevi personalizzati in base agli obiettivi di ciascun membro (sport, studio, leadership, ecc.) tramite istituzioni partner in tutto il mondo.",
      fr: "Des cours courts personnalisés selon les objectifs de chaque membre (sport, études, leadership, etc.) grâce à des institutions partenaires dans le monde entier.",
      es: "Cursos cortos personalizados según los objetivos de cada miembro (deporte, estudios, liderazgo, etc.) a través de instituciones asociadas de todo el mundo.",
    },
  },
  {
    label: {
      ko: "대학 진학 및 입학 전형 자문",
      en: "University Admissions Advising",
      zh: "大学升学及入学申请咨询",
      ja: "大学進学・入学選考アドバイス",
      it: "Consulenza per l'ammissione all'università",
      fr: "Conseil en admission universitaire",
      es: "Asesoría de admisión universitaria",
    },
    body: {
      ko: "해외 명문대 및 글로벌 대학 진학 시 유리한 전공 분야 탐색, 특별 입학 전형 정보 및 장학금 기회 안내",
      en: "Guidance on advantageous fields of study for admission to prestigious universities abroad, along with special admission pathways and scholarship opportunities.",
      zh: "探索海外名校及全球高校升学时的优势专业领域，提供特殊入学途径信息与奖学金机会。",
      ja: "海外名門大学やグローバル大学への進学に有利な専攻分野の探索、特別入学選考の情報・奨学金の機会をご案内。",
      it: "Orientamento sui settori di studio vantaggiosi per l'ammissione a università prestigiose all'estero, oltre a percorsi di ammissione speciali e opportunità di borse di studio.",
      fr: "Accompagnement sur les domaines d'études avantageux pour l'admission dans des universités prestigieuses à l'étranger, ainsi que des voies d'admission spéciales et des opportunités de bourses.",
      es: "Orientación sobre las áreas de estudio ventajosas para la admisión en universidades prestigiosas en el extranjero, junto con vías de admisión especiales y oportunidades de becas.",
    },
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "Education Program | GCM 테니스 아카데미",
      en: "Education Program | GCM Tennis Academy",
      zh: "Education Program | GCM Tennis Academy",
      ja: "Education Program | GCM Tennis Academy",
      it: "Education Program | GCM Tennis Academy",
      fr: "Education Program | GCM Tennis Academy",
      es: "Education Program | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM이 설계한 교육 프로그램. 목적과 수준에 맞춘 커리큘럼을 확인하고 신청하세요.",
      en: "GCM education programs designed for your goals and level. Explore the curriculum and apply.",
      zh: "GCM 精心设计的教育项目。查看符合目标与水平的课程并报名。",
      ja: "GCMが設計した教育プログラム。目的とレベルに合わせたカリキュラムを確認してお申し込みください。",
      it: "Programmi educativi GCM pensati per i tuoi obiettivi e il tuo livello. Scopri il programma e iscriviti.",
      fr: "Programmes éducatifs GCM conçus pour vos objectifs et votre niveau. Découvrez le cursus et inscrivez-vous.",
      es: "Programas educativos de GCM diseñados para tus objetivos y nivel. Explora el plan de estudios e inscríbete.",
    }),
    path: "/store/programs",
  });
}

export default async function StoreProgramsPage() {
  const locale = await getLocale();
  const ko = locale === "ko";

  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_programs")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const programs = (data ?? []) as Program[];

  if (programs.length === 0) {
    return (
      <div className="pt-16">
        <ComingSoon
          eyebrow="Store"
          title="Education Program"
          desc={pick(locale, {
            ko: "교육 프로그램을 준비하고 있습니다. 곧 신청하실 수 있도록 열어드리겠습니다.",
            en: "We're preparing education programs. We'll open applications soon.",
            zh: "我们正在筹备教育项目，很快将开放报名。",
            ja: "教育プログラムを準備中です。まもなくお申し込みいただけるよう公開します。",
            it: "Stiamo preparando i programmi educativi. Apriremo presto le iscrizioni.",
            fr: "Nous préparons les programmes éducatifs. Les inscriptions ouvriront bientôt.",
            es: "Estamos preparando los programas educativos. Pronto abriremos las inscripciones.",
          })}
        />
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Store"
          title="Education Program"
          lead={pick(locale, {
            ko: "목적과 수준에 맞춘 GCM의 교육 프로그램.",
            en: "GCM education programs tailored to your goals and level.",
            zh: "符合目标与水平的 GCM 教育项目。",
            ja: "目的とレベルに合わせたGCMの教育プログラム。",
            it: "Programmi educativi GCM su misura per i tuoi obiettivi e il tuo livello.",
            fr: "Des programmes éducatifs GCM adaptés à vos objectifs et à votre niveau.",
            es: "Programas educativos de GCM adaptados a tus objetivos y nivel.",
          })}
          wideLead
        />
        <p className="mt-6 max-w-3xl break-keep text-base leading-relaxed text-ink/80">
          {pick(locale, {
            ko: "한국에서 성장하며 글로벌 역량을 다지고자 하는 회원들이 현지화된 몰입형 경험을 통해 비판적 사고, 글로벌 소통 능력, 그리고 넓은 시야를 갖춘 인재로 거듭날 수 있도록 설계된 GCM의 대표 프로그램들을 안내해 드립니다.",
            en: "For members who want to grow in Korea while building global competencies, GCM introduces its flagship programs, designed to help them become individuals with critical thinking, global communication skills, and a broad perspective through localized, immersive experiences.",
            zh: "为希望在韩国成长、同时夯实全球竞争力的会员，我们介绍 GCM 的旗舰项目。这些项目通过本地化的沉浸式体验，帮助会员成长为具备批判性思维、全球沟通能力与开阔视野的人才。",
            ja: "韓国で成長しながらグローバルな素養を培いたい会員が、ローカライズされた没入型の経験を通じて、批判的思考・グローバルなコミュニケーション力・広い視野を備えた人材へと成長できるよう設計された、GCMの代表的なプログラムをご案内します。",
            it: "Per i membri che desiderano crescere in Corea sviluppando al contempo competenze globali, GCM presenta i suoi programmi di punta, pensati per aiutarli a diventare persone dotate di pensiero critico, capacità di comunicazione globale e un'ampia prospettiva attraverso esperienze localizzate e immersive.",
            fr: "Pour les membres qui souhaitent évoluer en Corée tout en développant des compétences mondiales, GCM présente ses programmes phares, conçus pour les aider à devenir des personnes dotées d'esprit critique, de compétences de communication internationale et d'une large perspective grâce à des expériences localisées et immersives.",
            es: "Para los miembros que desean crecer en Corea mientras desarrollan competencias globales, GCM presenta sus programas insignia, diseñados para ayudarles a convertirse en personas con pensamiento crítico, habilidades de comunicación global y una amplia perspectiva a través de experiencias localizadas e inmersivas.",
          })}
        </p>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} locale={locale} />
          ))}
        </div>

        {/* 협약 교육기관 파트너십 & 상담 안내 */}
        <div className="mt-16 grid gap-6 border-t border-line pt-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card/40 p-6 sm:p-8">
            <h3 className="break-keep font-display text-lg font-bold">
              {pick(locale, {
                ko: "🎓 전 세계 협약 교육기관 연계 & 진학 파트너십",
                en: "🎓 Global Partner Institution Network & Admissions Partnerships",
                zh: "🎓 全球合作教育机构衔接与升学合作",
                ja: "🎓 世界の提携教育機関との連携＆進学パートナーシップ",
                it: "🎓 Rete globale di istituzioni partner e partnership per l'ammissione",
                fr: "🎓 Réseau mondial d'institutions partenaires & partenariats d'admission",
                es: "🎓 Red global de instituciones asociadas y alianzas de admisión",
              })}
            </h3>
            <p className="mt-3 break-keep text-sm leading-relaxed text-muted">
              {pick(locale, {
                ko: "GCM은 단순히 단기 프로그램에 머무르지 않고, GCM 선수 또는 회원 자녀들의 진로 방향에 맞춰 글로벌 교육 기회를 지속적으로 확장합니다.",
                en: "GCM goes beyond short-term programs, continuously expanding global education opportunities aligned with the career paths of GCM players and members' children.",
                zh: "GCM 不止步于短期项目，而是根据 GCM 选手或会员子女的发展方向，持续拓展全球教育机会。",
                ja: "GCMは短期プログラムにとどまらず、GCM選手や会員のお子さまの進路に合わせて、グローバルな教育機会を継続的に広げています。",
                it: "GCM va oltre i programmi brevi, ampliando continuamente le opportunità di formazione globale in linea con i percorsi di carriera dei giocatori GCM e dei figli dei membri.",
                fr: "GCM ne se limite pas aux programmes courts : elle élargit continuellement les opportunités de formation mondiale en phase avec les parcours des joueurs GCM et des enfants des membres.",
                es: "GCM va más allá de los programas cortos y amplía continuamente las oportunidades de educación global en línea con las trayectorias de los jugadores de GCM y de los hijos de los miembros.",
              })}
            </p>
            <ul className="mt-4 space-y-3">
              {PARTNERSHIP.map((p) => (
                <li
                  key={p.label.en}
                  className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85"
                >
                  <span className="mt-0.5 shrink-0 font-semibold text-court">·</span>
                  <span>
                    <b className="font-semibold text-ink">{pick(locale, p.label)}</b>:{" "}
                    {pick(locale, p.body)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-2xl border border-court/30 bg-court/5 p-6 sm:p-8">
            <h3 className="break-keep font-display text-lg font-bold text-court-bright">
              {pick(locale, {
                ko: "💡 상담 및 문의 안내",
                en: "💡 Consultation & Inquiries",
                zh: "💡 咨询与联系指引",
                ja: "💡 相談・お問い合わせのご案内",
                it: "💡 Consulenza e richieste",
                fr: "💡 Consultation & demandes",
                es: "💡 Consulta y contacto",
              })}
            </h3>
            <p className="mt-3 break-keep text-sm leading-relaxed text-muted">
              {pick(locale, {
                ko: "개인별 목표와 현재 준비 상황에 적합한 교육 과정을 찾으실 수 있도록 맞춤형 1:1 상담을 지원합니다. 추가적인 상담이나 프로그램 세부 조건이 궁금하시면 언제든 문의해 주세요.",
                en: "We offer personalized one-on-one consultations to help you find the education program that fits your individual goals and current level of preparation. If you have any further questions about consultations or program details, please feel free to reach out anytime.",
                zh: "我们提供量身定制的一对一咨询，帮助您找到契合个人目标与当前准备情况的教育课程。如需进一步咨询或了解项目的详细条件，欢迎随时联系。",
                ja: "個々の目標と現在の準備状況に合った教育課程を見つけられるよう、オーダーメイドの1対1相談をご提供します。追加の相談やプログラムの詳細条件についてご不明な点があれば、いつでもお問い合わせください。",
                it: "Offriamo consulenze individuali personalizzate per aiutarti a trovare il programma educativo più adatto ai tuoi obiettivi e al tuo attuale livello di preparazione. Per ulteriori domande sulle consulenze o sui dettagli dei programmi, non esitare a contattarci in qualsiasi momento.",
                fr: "Nous proposons des consultations individuelles personnalisées pour vous aider à trouver le programme éducatif adapté à vos objectifs et à votre niveau de préparation actuel. Pour toute question sur les consultations ou les détails des programmes, n'hésitez pas à nous contacter à tout moment.",
                es: "Ofrecemos consultas individuales personalizadas para ayudarte a encontrar el programa educativo que se ajuste a tus objetivos y a tu nivel de preparación actual. Si tienes más preguntas sobre las consultas o los detalles de los programas, no dudes en contactarnos en cualquier momento.",
              })}
            </p>
            <div className="mt-6">
              <Button href="/consulting" variant="court">
                {pick(locale, {
                  ko: "상담하기",
                  en: "Request consultation",
                  zh: "咨询",
                  ja: "相談する",
                  it: "Richiedi una consulenza",
                  fr: "Demander une consultation",
                  es: "Solicitar consulta",
                })}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
