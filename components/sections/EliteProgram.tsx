import { Section, SectionHeading, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";
import { eliteModules } from "@/lib/elite-program";

export async function EliteProgram() {
  const locale = await getLocale();
  const t = (b: I18nText) => pick(locale, b);

  const stats: { value: string; label: I18nText }[] = [
    {
      value: `${eliteModules.length}`,
      label: {
        ko: "전문 트레이닝 블록",
        en: "Specialist Training Blocks",
        zh: "专项训练模块",
        ja: "専門トレーニングブロック",
        it: "Blocchi di allenamento specialistici",
        fr: "Blocs d'entraînement spécialisés",
        es: "Bloques de entrenamiento especializados",
      },
    },
    {
      value: "360°",
      label: {
        ko: "전술 · 기술 · 피지컬 통합",
        en: "Tactics · Skill · Physical, integrated",
        zh: "战术 · 技术 · 体能一体化",
        ja: "戦術 · 技術 · フィジカルを統合",
        it: "Tattica · Tecnica · Fisico, integrati",
        fr: "Tactique · Technique · Physique, intégrés",
        es: "Táctica · Técnica · Físico, integrados",
      },
    },
    {
      value: "100%",
      label: {
        ko: "실전 기준으로 설계",
        en: "Built to Match Standards",
        zh: "以实战标准设计",
        ja: "実戦基準で設計",
        it: "Progettato sugli standard di gara",
        fr: "Conçu selon les standards du match",
        es: "Diseñado según estándares de competición",
      },
    },
  ];

  const focusLabel = pick(locale, {
    ko: "훈련 포인트",
    en: "Focus",
    zh: "训练要点",
    ja: "トレーニングポイント",
    it: "Punti chiave",
    fr: "Points clés",
    es: "Puntos clave",
  });

  const whyTitle: I18nText = {
    ko: "GCM 엘리트 트레이닝이 다른 이유",
    en: "What Sets GCM Elite Training Apart",
    zh: "GCM 精英训练的不同之处",
    ja: "GCM エリートトレーニングが違う理由",
    it: "Cosa distingue l'allenamento Elite di GCM",
    fr: "Ce qui distingue l'entraînement Élite de GCM",
    es: "Lo que distingue el entrenamiento Elite de GCM",
  };

  const whyPoints: { title: I18nText; body: I18nText }[] = [
    {
      title: {
        ko: "스스로 해결하는 선수",
        en: "Players Who Solve It Themselves",
        zh: "能自主解决的选手",
        ja: "自ら解決する選手",
        it: "Atleti che risolvono da soli",
        fr: "Des joueurs qui résolvent eux-mêmes",
        es: "Jugadores que lo resuelven por sí mismos",
      },
      body: {
        ko: "정해진 동작만 반복시키지 않습니다. 경기를 읽고, 스스로 판단해 해결하는 힘을 길러 코트 위에서 홀로 설 수 있게 합니다.",
        en: "We don't just drill fixed motions. We build the ability to read the match and solve it independently, so a player can stand on their own on court.",
        zh: "不只是反复固定动作。我们培养读懂比赛、独立判断并解决问题的能力，让选手能在场上独当一面。",
        ja: "決まった動作を繰り返させるだけではありません。試合を読み、自ら判断して解決する力を育て、コートで一人で立てるようにします。",
        it: "Non ci limitiamo a ripetere movimenti fissi. Sviluppiamo la capacità di leggere la partita e risolverla in autonomia, perché l'atleta sappia reggersi da solo in campo.",
        fr: "Nous ne faisons pas que répéter des gestes figés. Nous développons la capacité à lire le match et à le résoudre seul, pour que le joueur tienne debout sur le court.",
        es: "No solo repetimos gestos fijos. Desarrollamos la capacidad de leer el partido y resolverlo de forma autónoma, para que el jugador se sostenga solo en la cancha.",
      },
    },
    {
      title: {
        ko: "실전에서 역산한 설계",
        en: "Designed Backward from the Match",
        zh: "从实战倒推的设计",
        ja: "実戦から逆算した設計",
        it: "Progettato a ritroso dalla partita",
        fr: "Conçu à rebours du match",
        es: "Diseñado desde el partido hacia atrás",
      },
      body: {
        ko: "코스 선택부터 포인트 완성, 수비 전환, 서브와 피지컬까지 — 실제 경기에서 승부를 가르는 장면을 그대로 훈련으로 옮겼습니다.",
        en: "From course selection to finishing points, defensive transition, serve and physical — the moments that decide real matches are translated directly into training.",
        zh: "从线路选择到完成得分、防守转换、发球与体能——把真正决定胜负的比赛场面原样搬进训练。",
        ja: "コース選択からポイント完成、守備転換、サーブとフィジカルまで——実際の試合で勝敗を分ける場面をそのまま訓練に落とし込みました。",
        it: "Dalla scelta della traiettoria alla chiusura del punto, alla transizione difensiva, al servizio e al fisico: i momenti che decidono le partite vere diventano allenamento.",
        fr: "Du choix de trajectoire à la conclusion du point, à la transition défensive, au service et au physique : les moments qui décident les vrais matchs deviennent de l'entraînement.",
        es: "De la elección de dirección al cierre del punto, la transición defensiva, el saque y el físico: los momentos que deciden los partidos reales se convierten en entrenamiento.",
      },
    },
    {
      title: {
        ko: "현역 선수 겸 코치",
        en: "Active Player-Coaches",
        zh: "现役选手兼教练",
        ja: "現役選手兼コーチ",
        it: "Coach ancora in attività",
        fr: "Des coachs encore en compétition",
        es: "Entrenadores aún en activo",
      },
      body: {
        ko: "지금도 큰 무대에서 뛰는 현역 선수 겸 코치가, 세계 엘리트·프로 대회에서 실시간으로 다듬은 최신 전술을 그대로 전합니다.",
        en: "Active player-coaches who still compete on big stages pass on the latest tactics, refined in real time at elite and pro tournaments worldwide.",
        zh: "至今仍征战大舞台的现役选手兼教练，把在全球精英及职业赛事中实时打磨的最新战术原样传授。",
        ja: "今も大舞台で戦う現役選手兼コーチが、世界のエリート・プロ大会でリアルタイムに磨いた最新戦術をそのまま伝えます。",
        it: "Coach-giocatori ancora in gara sui grandi palcoscenici trasmettono le tattiche più recenti, affinate in tempo reale nei tornei élite e pro di tutto il mondo.",
        fr: "Des coachs-joueurs toujours en compétition transmettent les tactiques les plus récentes, affinées en temps réel dans les tournois élite et pro du monde entier.",
        es: "Entrenadores-jugadores que aún compiten en grandes escenarios transmiten las tácticas más recientes, afinadas en tiempo real en torneos de élite y profesionales de todo el mundo.",
      },
    },
  ];

  return (
    <>
      {/* HERO */}
      <Section tone="court" lines>
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="GCM Elite Player Program"
            title={pick(locale, {
              ko: "엘리트 선수 전문 육성 프로그램",
              en: "Elite Player Development Program",
              zh: "精英选手专业培养计划",
              ja: "エリート選手専門育成プログラム",
              it: "Programma di sviluppo per atleti d'élite",
              fr: "Programme de développement des joueurs d'élite",
              es: "Programa de desarrollo de jugadores de élite",
            })}
            lead={pick(locale, {
              ko: "선수 스스로 경기를 읽고, 판단하고, 해결할 수 있는 능력을 키웁니다. 코스 선택부터 피지컬 파워까지, 실전에 바로 쓰이는 7가지 전문 트레이닝으로 설계했습니다.",
              en: "We build players who can read the match, judge, and solve it on their own. From course selection to physical power, the program is designed around seven specialist training blocks that transfer straight to competition.",
              zh: "培养选手自主读懂比赛、判断并解决问题的能力。从线路选择到体能力量，以七大可直接用于实战的专项训练精心设计。",
              ja: "選手自身が試合を読み、判断し、解決できる力を育てます。コース選択からフィジカルパワーまで、実戦にそのまま使える7つの専門トレーニングで設計しました。",
              it: "Formiamo atleti capaci di leggere la partita, decidere e risolverla da soli. Dalla scelta della traiettoria alla potenza fisica, il programma è costruito su sette blocchi specialistici che si trasferiscono direttamente in gara.",
              fr: "Nous formons des joueurs capables de lire le match, de décider et de le résoudre seuls. Du choix de trajectoire à la puissance physique, le programme s'articule autour de sept blocs spécialisés directement transférables en compétition.",
              es: "Formamos jugadores capaces de leer el partido, decidir y resolverlo por sí mismos. De la elección de dirección a la potencia física, el programa se estructura en siete bloques especializados que se trasladan directamente a la competición.",
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

      {/* 7 TRAINING MODULES */}
      <Section id="elite-modules">
        <SectionHeading
          eyebrow="Training Modules"
          title={pick(locale, {
            ko: "무엇을 훈련하나요",
            en: "What You Train",
            zh: "我们训练什么",
            ja: "何を訓練するのか",
            it: "Cosa si allena",
            fr: "Ce que vous entraînez",
            es: "Qué entrenas",
          })}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {eliteModules.map((m) => (
            <article
              key={m.no}
              className="flex flex-col rounded-2xl border border-line bg-card/30 p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm font-bold tracking-widest text-court-bright">
                  {m.no}
                </span>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                  {m.code}
                </span>
              </div>
              <h3 className="mt-3 break-keep font-display text-xl font-bold leading-snug text-ink">
                {t(m.title)}
              </h3>
              <p className="mt-3 break-keep text-[15px] leading-relaxed text-muted">
                {t(m.desc)}
              </p>
              <div className="mt-5 border-t border-line pt-5">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-court-bright">
                  {focusLabel}
                </span>
                <ul className="mt-3 space-y-2.5">
                  {m.points.map((p, i) => (
                    <li key={i} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                      <span className="mt-0.5 shrink-0 text-court">·</span>
                      <span>{t(p)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section tone="muted">
        <SectionHeading eyebrow="Why GCM Elite" title={t(whyTitle)} center />
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

      {/* CTA */}
      <Section tone="court">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-white/70">
            Ready to Go Elite
          </p>
          <h2 className="mt-4 break-keep font-display text-3xl font-bold leading-tight sm:text-4xl">
            {pick(locale, {
              ko: "선수의 다음 단계를 GCM과 함께 설계하세요",
              en: "Design Your Next Level with GCM",
              zh: "与 GCM 一起规划选手的下一阶段",
              ja: "選手の次のステージを GCM と設計しましょう",
              it: "Progetta il tuo prossimo livello con GCM",
              fr: "Concevez votre prochain niveau avec GCM",
              es: "Diseña tu siguiente nivel con GCM",
            })}
          </h2>
          <p className="mt-4 break-keep leading-relaxed text-white/80">
            {pick(locale, {
              ko: "현재 위치 진단부터 전술 · 피지컬 · 진로까지, 선수에게 맞는 엘리트 트레이닝을 편하게 문의해 주세요.",
              en: "From diagnosing where a player is now to tactics, physical, and pathway — reach out about elite training tailored to your athlete.",
              zh: "从诊断当前水平到战术、体能与升学路径，欢迎咨询为选手量身打造的精英训练。",
              ja: "現在地の診断から戦術・フィジカル・進路まで、選手に合ったエリートトレーニングをお気軽にお問い合わせください。",
              it: "Dalla valutazione del livello attuale a tattica, fisico e percorso: scrivici per un allenamento d'élite su misura per il tuo atleta.",
              fr: "Du diagnostic du niveau actuel à la tactique, au physique et au parcours : contactez-nous pour un entraînement élite adapté à votre joueur.",
              es: "Del diagnóstico del nivel actual a la táctica, el físico y el itinerario: escríbenos sobre un entrenamiento de élite a medida de tu jugador.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/consulting" variant="lime">
              {pick(locale, { ko: "프로그램 문의하기", en: "Inquire About the Program", zh: "咨询项目", ja: "プログラムを問い合わせ", it: "Richiedi informazioni", fr: "Se renseigner", es: "Consultar el programa" })}
            </Button>
            <Button href="/coaches" variant="outline-light">
              {pick(locale, { ko: "코치진 보기", en: "Meet the Coaches", zh: "查看教练团队", ja: "コーチ陣を見る", it: "Scopri gli allenatori", fr: "Voir les entraîneurs", es: "Ver entrenadores" })}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
