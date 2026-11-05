import { Section, SectionHeading, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";
import { site } from "@/lib/site-data";
import { kidsCurriculum, kidsDrillCount } from "@/lib/kids-curriculum";

export async function KidsCurriculum() {
  const locale = await getLocale();
  const t = (b: I18nText) => pick(locale, b);

  const stats: { value: string; label: I18nText }[] = [
    {
      value: `${kidsCurriculum.length}`,
      label: {
        ko: "단계별 커리큘럼",
        en: "Progressive Parts",
        zh: "阶段式课程",
        ja: "段階別カリキュラム",
        it: "Fasi progressive",
        fr: "Étapes progressives",
        es: "Fases progresivas",
      },
    },
    {
      value: `${kidsDrillCount}`,
      label: {
        ko: "목적 기반 드릴",
        en: "Purpose-Built Drills",
        zh: "目的导向训练",
        ja: "目的ベースのドリル",
        it: "Esercizi mirati",
        fr: "Exercices ciblés",
        es: "Ejercicios con propósito",
      },
    },
    {
      value: "100%",
      label: {
        ko: "드릴마다 발달 효과 명시",
        en: "Every Drill Maps to an Effect",
        zh: "每项训练标明发展效果",
        ja: "全ドリルに発達効果を明示",
        it: "Ogni esercizio ha un effetto",
        fr: "Chaque exercice a un effet",
        es: "Cada ejercicio con su efecto",
      },
    },
  ];

  const whyTitle: I18nText = {
    ko: "글로벌 아카데미가 탐내는 이유",
    en: "Why Global Academies Want It",
    zh: "全球学院为何青睐",
    ja: "世界のアカデミーが欲しがる理由",
    it: "Perché le accademie di tutto il mondo la vogliono",
    fr: "Pourquoi les académies du monde entier la veulent",
    es: "Por qué la quieren academias de todo el mundo",
  };

  const whyPoints: { title: I18nText; body: I18nText }[] = [
    {
      title: {
        ko: "철저한 체계성",
        en: "Rigorous Structure",
        zh: "严谨的体系",
        ja: "徹底した体系性",
        it: "Struttura rigorosa",
        fr: "Structure rigoureuse",
        es: "Estructura rigurosa",
      },
      body: {
        ko: "모든 드릴이 하나의 발달 목표와 연결됩니다. 놀이처럼 보여도, 그 안에는 분명한 설계가 있습니다.",
        en: "Every drill is tied to one developmental goal. It looks like play, but there is a deliberate design beneath it.",
        zh: "每项训练都对应一个发展目标。看似游戏，内里却有清晰的设计。",
        ja: "すべてのドリルが一つの発達目標につながります。遊びのようでも、その中に明確な設計があります。",
        it: "Ogni esercizio è legato a un obiettivo di sviluppo. Sembra gioco, ma dietro c'è un progetto preciso.",
        fr: "Chaque exercice est lié à un objectif de développement. Cela ressemble à un jeu, mais tout est pensé.",
        es: "Cada ejercicio se vincula a un objetivo de desarrollo. Parece juego, pero detrás hay un diseño preciso.",
      },
    },
    {
      title: {
        ko: "연령 맞춤 8단계",
        en: "8 Age-Tuned Steps",
        zh: "8个年龄适配阶段",
        ja: "年齢に合わせた8ステップ",
        it: "8 fasi su misura per l'età",
        fr: "8 étapes adaptées à l'âge",
        es: "8 fases adaptadas a la edad",
      },
      body: {
        ko: "감각과 균형에서 시작해 실전 경기까지, 아이의 성장 흐름을 따라 자연스럽게 이어집니다.",
        en: "From feel and balance all the way to real match play, the steps follow a child's natural growth.",
        zh: "从感觉与平衡一路到实战比赛，顺应孩子成长的自然节奏。",
        ja: "感覚とバランスから実戦の試合まで、子どもの成長の流れに沿って自然につながります。",
        it: "Dalla sensibilità e dall'equilibrio fino alla partita vera, seguendo la crescita naturale del bambino.",
        fr: "De la sensation et l'équilibre jusqu'au vrai match, en suivant la croissance naturelle de l'enfant.",
        es: "Desde la sensación y el equilibrio hasta el partido real, siguiendo el crecimiento natural del niño.",
      },
    },
    {
      title: {
        ko: "측정 가능한 성장",
        en: "Measurable Growth",
        zh: "可衡量的成长",
        ja: "測定できる成長",
        it: "Crescita misurabile",
        fr: "Progression mesurable",
        es: "Crecimiento medible",
      },
      body: {
        ko: "드릴마다 기대 효과가 명시되어, 학부모도 코치도 아이의 성장을 눈으로 확인할 수 있습니다.",
        en: "Each drill states its intended effect, so parents and coaches can see a child's growth with their own eyes.",
        zh: "每项训练标明预期效果，家长与教练都能亲眼看到孩子的成长。",
        ja: "ドリルごとに期待される効果が明示され、保護者もコーチも子どもの成長を目で確認できます。",
        it: "Ogni esercizio dichiara l'effetto atteso: genitori e coach vedono con i propri occhi la crescita.",
        fr: "Chaque exercice indique l'effet visé : parents et coachs voient la progression de leurs propres yeux.",
        es: "Cada ejercicio declara su efecto previsto: padres y entrenadores ven el crecimiento con sus propios ojos.",
      },
    },
  ];

  // 섹션 내 라벨
  const goalLabel = pick(locale, { ko: "목표", en: "Goal", zh: "目标", ja: "目標", it: "Obiettivo", fr: "Objectif", es: "Objetivo" });
  const effectLabel = pick(locale, { ko: "효과", en: "Effect", zh: "效果", ja: "効果", it: "Effetto", fr: "Effet", es: "Efecto" });

  return (
    <>
      {/* HERO */}
      <Section tone="court" lines>
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="GCM Signature Curriculum"
            title={pick(locale, {
              ko: "세계가 먼저 알아본 GCM 키즈 8단계 커리큘럼",
              en: "The GCM Kids 8-Step Curriculum the World Noticed First",
              zh: "世界率先关注的 GCM 儿童 8 阶段课程",
              ja: "世界が先に注目した GCM キッズ 8ステップ・カリキュラム",
              it: "Il curriculum Kids GCM in 8 fasi che il mondo ha notato per primo",
              fr: "Le programme Kids GCM en 8 étapes que le monde a d'abord remarqué",
              es: "El currículo Kids GCM de 8 fases que el mundo notó primero",
            })}
            lead={pick(locale, {
              ko: "GCM이 아이들을 위해 설계한 전술반 커리큘럼은, 공개되자마자 한국을 넘어 북미·유럽·아시아의 테니스 교육 기관들이 함께하고 싶다며 먼저 연락해 온 프로그램입니다. 놀이에서 실전까지, 모든 드릴에는 분명한 목표와 발달 효과가 담겨 있습니다.",
              en: "The tactical curriculum GCM designed for children drew interest the moment it was shared — tennis academies across North America, Europe, and Asia reached out to work with us. From play to real match play, every drill carries a clear goal and a developmental effect.",
              zh: "GCM 为孩子们设计的战术课程一经公开，便吸引了来自北美、欧洲、亚洲的网球教育机构主动联系、希望合作。从游戏到实战，每项训练都蕴含明确的目标与发展效果。",
              ja: "GCMが子どものために設計した戦術クラスのカリキュラムは、公開されるや否や、韓国を越えて北米・欧州・アジアのテニス教育機関が「一緒にやりたい」と先に連絡してきたプログラムです。遊びから実戦まで、すべてのドリルに明確な目標と発達効果が込められています。",
              it: "Il curriculum tattico che GCM ha progettato per i bambini ha attirato interesse appena condiviso: accademie di tennis in Nord America, Europa e Asia ci hanno contattati per collaborare. Dal gioco alla partita vera, ogni esercizio ha un obiettivo chiaro e un effetto di sviluppo.",
              fr: "Le programme tactique conçu par GCM pour les enfants a suscité l'intérêt dès sa présentation : des académies de tennis d'Amérique du Nord, d'Europe et d'Asie nous ont contactés pour collaborer. Du jeu au vrai match, chaque exercice a un objectif clair et un effet de développement.",
              es: "El currículo táctico que GCM diseñó para los niños despertó interés en cuanto se dio a conocer: academias de tenis de Norteamérica, Europa y Asia nos contactaron para colaborar. Del juego al partido real, cada ejercicio tiene un objetivo claro y un efecto de desarrollo.",
            })}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <div className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 break-keep text-sm leading-relaxed text-white/75">
                  {t(s.label)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 8 PARTS */}
      <Section id="curriculum">
        <div className="space-y-6">
          {kidsCurriculum.map((part) => (
            <article
              key={part.no}
              className="overflow-hidden rounded-2xl border border-line bg-card/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,22rem)_1fr]">
                {/* 왼쪽: 파트 개요 */}
                <div className="border-b border-line bg-court-gradient p-7 text-white md:border-b-0 md:border-r">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                    {part.no} · {t(part.theme)}
                  </span>
                  <h3 className="mt-3 break-keep font-display text-xl font-bold leading-snug sm:text-2xl">
                    {t(part.title)}
                  </h3>
                  <div className="mt-5 rounded-xl bg-white/10 p-4">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                      {goalLabel}
                    </span>
                    <p className="mt-1.5 break-keep text-sm leading-relaxed text-white/90">
                      {t(part.goal)}
                    </p>
                  </div>
                </div>

                {/* 오른쪽: 드릴 목록 */}
                <ul className="divide-y divide-line">
                  {part.drills.map((d, i) => (
                    <li key={i} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:gap-5">
                      <div className="sm:w-1/2">
                        <h4 className="break-keep font-display text-base font-bold text-ink">
                          {t(d.name)}
                        </h4>
                        <p className="mt-1 break-keep text-sm leading-relaxed text-muted">
                          {t(d.desc)}
                        </p>
                      </div>
                      <div className="sm:w-1/2">
                        <div className="inline-flex items-start gap-2 rounded-lg bg-court/[0.07] px-3 py-2">
                          <span className="mt-px font-display text-[10px] font-bold uppercase tracking-[0.18em] text-court-bright">
                            {effectLabel}
                          </span>
                          <span className="break-keep text-sm leading-relaxed text-ink/80">
                            {t(d.effect)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* WHY GLOBAL ACADEMIES */}
      <Section tone="muted">
        <SectionHeading eyebrow="Built to a Global Standard" title={t(whyTitle)} center />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyPoints.map((p, i) => (
            <div key={i} className="rounded-2xl border border-line bg-base p-7">
              <div className="font-display text-sm font-bold tracking-widest text-court-bright">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 break-keep font-display text-lg font-bold text-ink">
                {t(p.title)}
              </h3>
              <p className="mt-3 break-keep text-[15px] leading-relaxed text-muted">
                {t(p.body)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* GLOBAL PARTNERSHIP CTA */}
      <Section tone="court">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-white/70">
            Global Partnership
          </p>
          <h2 className="mt-4 break-keep font-display text-3xl font-bold leading-tight sm:text-4xl">
            {pick(locale, {
              ko: "북미 · 유럽 · 아시아 — GCM과 직영으로 함께하세요",
              en: "North America · Europe · Asia — Partner Directly with GCM",
              zh: "北美 · 欧洲 · 亚洲 —— 与 GCM 直营合作",
              ja: "北米 · 欧州 · アジア — GCM と直営でともに",
              it: "Nord America · Europa · Asia — Collabora direttamente con GCM",
              fr: "Amérique du Nord · Europe · Asie — Collaborez directement avec GCM",
              es: "Norteamérica · Europa · Asia — Colabora directamente con GCM",
            })}
          </h2>
          <p className="mt-4 break-keep leading-relaxed text-white/80">
            {pick(locale, {
              ko: "GCM 키즈 커리큘럼을 자국 아카데미에 도입하고 싶은 전 세계 파트너를 환영합니다. 직영 운영과 커리큘럼 협력에 대해 편하게 문의해 주세요.",
              en: "We welcome partners worldwide who want to bring the GCM Kids curriculum to their own academy. Reach out about direct operations and curriculum collaboration.",
              zh: "欢迎希望将 GCM 儿童课程引入本国学院的全球伙伴。关于直营运营与课程合作，欢迎随时咨询。",
              ja: "GCMキッズ・カリキュラムを自国のアカデミーに導入したい世界中のパートナーを歓迎します。直営運営やカリキュラム提携について、お気軽にお問い合わせください。",
              it: "Diamo il benvenuto a partner di tutto il mondo che vogliono portare il curriculum Kids GCM nella propria accademia. Scriveteci per gestione diretta e collaborazione sul curriculum.",
              fr: "Nous accueillons les partenaires du monde entier qui souhaitent intégrer le programme Kids GCM dans leur propre académie. Contactez-nous pour une exploitation directe et une collaboration sur le programme.",
              es: "Damos la bienvenida a socios de todo el mundo que quieran llevar el currículo Kids GCM a su propia academia. Escríbenos sobre operación directa y colaboración en el currículo.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="lime">
              {pick(locale, { ko: "파트너십 문의하기", en: "Inquire About Partnership", zh: "咨询合作", ja: "パートナーシップを問い合わせ", it: "Richiedi una partnership", fr: "Demander un partenariat", es: "Consultar sobre alianzas" })}
            </Button>
            <Button href={`mailto:${site.email}`} variant="outline-light">
              {pick(locale, { ko: "이메일로 연락", en: "Email Us", zh: "邮件联系", ja: "メールで連絡", it: "Scrivici via email", fr: "Nous écrire", es: "Escríbenos" })}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
