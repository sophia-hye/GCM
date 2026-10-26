import { Section, SectionHeading, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";

type Chapter = { no: string; title: I18nText; body: I18nText };

const CHAPTERS: Chapter[] = [
  {
    no: "01",
    title: {
      ko: "기술을 넘어, 한 사람의 성장을 생각했습니다",
      en: "Beyond technique, we thought about a whole person's growth",
      zh: "超越技术，我们思考的是一个人的成长",
      ja: "技術を超えて、一人の成長を考えました",
      it: "Oltre la tecnica, abbiamo pensato alla crescita di una persona intera",
      fr: "Au-delà de la technique, nous avons pensé à la croissance de toute une personne",
      es: "Más allá de la técnica, pensamos en el crecimiento de toda una persona",
    },
    body: {
      ko: "좋은 스윙을 가르치는 곳은 많습니다. 하지만 아이의 태도와 마음, 그리고 코트 밖의 삶까지 함께 책임지는 곳은 드뭅니다. GCM은 '한 선수를 끝까지 책임진다'는 단순하지만 어려운 약속에서 시작되었습니다.",
      en: "There are many places that teach a good swing. But few take responsibility for a child's attitude, heart, and life off the court as well. GCM began with a simple yet difficult promise: to see one athlete through to the end.",
      zh: "教好挥拍的地方有很多，但能连同孩子的态度、心灵乃至场外人生一起负责的地方却很少。GCM始于一个简单却艰难的承诺——把一名选手负责到底。",
      ja: "良いスイングを教える場所は数多くあります。けれど、子どもの態度や心、そしてコートの外の人生までを共に担う場所はまれです。GCMは「一人の選手を最後まで責任を持つ」という、シンプルでいて難しい約束から始まりました。",
      it: "Ci sono molti posti che insegnano un buon colpo. Ma pochi si assumono la responsabilità anche dell'atteggiamento, del cuore e della vita di un ragazzo fuori dal campo. GCM è nata da una promessa semplice ma difficile: accompagnare un atleta fino in fondo.",
      fr: "Il existe beaucoup d'endroits qui enseignent un bon coup. Mais rares sont ceux qui assument aussi l'attitude, le cœur et la vie d'un enfant en dehors du court. GCM est née d'une promesse simple mais difficile : accompagner un joueur jusqu'au bout.",
      es: "Hay muchos lugares que enseñan un buen golpe. Pero pocos se responsabilizan también de la actitud, el corazón y la vida de un niño fuera de la cancha. GCM nació de una promesa sencilla pero difícil: acompañar a un jugador hasta el final.",
    },
  },
  {
    no: "02",
    title: {
      ko: "한 선수를, 여러 전문가가 함께",
      en: "One athlete, guided by many experts together",
      zh: "一名选手，由多位专家共同培养",
      ja: "一人の選手を、複数の専門家が共に",
      it: "Un atleta, guidato insieme da più esperti",
      fr: "Un joueur, encadré ensemble par plusieurs experts",
      es: "Un jugador, guiado en conjunto por varios expertos",
    },
    body: {
      ko: "기술 코치 한 명에게 모든 것을 맡기지 않습니다. 기술·피지컬·멘탈·학업·진로를 각 분야 전문가가 하나의 팀으로 묶여 한 선수를 설계합니다. 이것이 GCM의 통합 퍼포먼스 모델입니다.",
      en: "We don't leave everything to a single technical coach. Technique, physical, mental, academics, and career — specialists in each field come together as one team to design a single athlete's path. This is GCM's integrated performance model.",
      zh: "我们不会把一切都交给一位技术教练。技术、体能、心理、学业与升学——各领域的专家组成一个团队，共同为一名选手量身设计。这就是GCM的整合型表现模式。",
      ja: "すべてを一人の技術コーチに任せることはしません。技術・フィジカル・メンタル・学業・進路——各分野の専門家が一つのチームとなって、一人の選手を設計します。これがGCMの統合パフォーマンスモデルです。",
      it: "Non lasciamo tutto a un solo coach tecnico. Tecnica, fisico, mente, studio e carriera: gli specialisti di ogni ambito si uniscono in un'unica squadra per progettare il percorso di un singolo atleta. Questo è il modello di performance integrato di GCM.",
      fr: "Nous ne confions pas tout à un seul coach technique. Technique, physique, mental, études et orientation : les spécialistes de chaque domaine se réunissent en une seule équipe pour concevoir le parcours d'un même joueur. C'est le modèle de performance intégré de GCM.",
      es: "No dejamos todo en manos de un solo entrenador técnico. Técnica, físico, mente, estudios y orientación: los especialistas de cada ámbito se unen en un solo equipo para diseñar el camino de un mismo jugador. Este es el modelo de rendimiento integrado de GCM.",
    },
  },
  {
    no: "03",
    title: {
      ko: "코트 위에서 직접 증명하는 코치",
      en: "Coaches who prove it on court themselves",
      zh: "亲自在球场上证明自己的教练",
      ja: "コート上で自ら証明するコーチ",
      it: "Coach che lo dimostrano di persona in campo",
      fr: "Des coachs qui le prouvent eux-mêmes sur le court",
      es: "Entrenadores que lo demuestran ellos mismos en la cancha",
    },
    body: {
      ko: "GCM의 코치들은 가르치기만 하지 않습니다. 지금도 큰 무대에서 직접 뛰는 현역 선수 겸 코치로서, 말이 아닌 등으로 가르칩니다. 아이들은 매일 도전하는 어른의 뒷모습을 보고 자랍니다.",
      en: "GCM's coaches don't only teach. As active player-coaches who still compete on big stages, they teach with their backs, not just their words. Every day, the children grow up watching the back of a grown-up who keeps on challenging.",
      zh: "GCM的教练不只是教学。作为至今仍征战大舞台的现役选手兼教练，他们用背影而非言语来教导。孩子们每天在一位不断挑战的大人的背影下成长。",
      ja: "GCMのコーチは教えるだけではありません。今なお大舞台で戦う現役選手兼コーチとして、言葉ではなく背中で教えます。子どもたちは毎日、挑戦し続ける大人の背中を見て育ちます。",
      it: "I coach di GCM non si limitano a insegnare. Da coach-giocatori ancora in gara sui grandi palcoscenici, insegnano con la schiena, non solo con le parole. Ogni giorno i ragazzi crescono guardando la schiena di un adulto che continua a mettersi alla prova.",
      fr: "Les coachs de GCM ne font pas qu'enseigner. En tant que coachs-joueurs toujours en compétition sur de grandes scènes, ils enseignent par leur dos, pas seulement par leurs mots. Chaque jour, les enfants grandissent en regardant le dos d'un adulte qui continue de se dépasser.",
      es: "Los entrenadores de GCM no solo enseñan. Como entrenadores-jugadores que aún compiten en grandes escenarios, enseñan con la espalda, no solo con las palabras. Cada día, los niños crecen mirando la espalda de un adulto que sigue desafiándose.",
    },
  },
  {
    no: "04",
    title: {
      ko: "되기 전부터, 선수의 브랜드를 함께",
      en: "Building an athlete's brand from before they turn pro",
      zh: "从成为职业选手之前，就共同打造选手的品牌",
      ja: "プロになる前から、選手のブランドを共に",
      it: "Costruire il brand di un atleta già prima che diventi pro",
      fr: "Construire la marque d'un joueur avant même qu'il ne passe pro",
      es: "Construir la marca de un jugador desde antes de que sea profesional",
    },
    body: {
      ko: "프로가 된 후가 아니라 되기 전부터 선수의 이야기를 함께 만듭니다. 국내 무대를 넘어 테니스 유학과 NCAA 진학까지, GCM은 선수가 더 큰 세계로 나아가는 길을 끝까지 함께 설계합니다.",
      en: "We start shaping an athlete's story not after they turn pro, but before. Beyond the domestic stage — through tennis study abroad and NCAA admission — GCM designs, all the way through, the path for an athlete to step into a larger world.",
      zh: "我们不是在成为职业选手之后，而是在之前就开始共同书写选手的故事。超越国内舞台，从网球留学到NCAA升学，GCM为选手迈向更广阔世界的道路，自始至终共同规划。",
      ja: "プロになってからではなく、なる前から選手の物語を共につくります。国内の舞台を超え、テニス留学やNCAA進学まで——GCMは選手がより大きな世界へ踏み出す道を、最後まで共に設計します。",
      it: "Iniziamo a dare forma alla storia di un atleta non dopo che è diventato professionista, ma prima. Oltre il palcoscenico nazionale — dagli studi di tennis all'estero all'ammissione NCAA — GCM progetta, fino in fondo, il percorso perché un atleta entri in un mondo più grande.",
      fr: "Nous commençons à façonner l'histoire d'un joueur non pas après son passage chez les pros, mais avant. Au-delà de la scène nationale — des études de tennis à l'étranger à l'admission en NCAA — GCM conçoit, jusqu'au bout, le chemin pour qu'un joueur entre dans un monde plus grand.",
      es: "Empezamos a dar forma a la historia de un jugador no después de hacerse profesional, sino antes. Más allá del escenario nacional —desde los estudios de tenis en el extranjero hasta el ingreso a la NCAA—, GCM diseña, hasta el final, el camino para que un jugador entre en un mundo más grande.",
    },
  },
];

export async function GcmStory() {
  const locale = await getLocale();
  const t = (b: I18nText) => pick(locale, b);

  return (
    <Section id="gcm-story">
      <SectionHeading
        eyebrow="Our Story"
        title="GCM Story"
        lead={pick(locale, {
          ko: "한 번의 스윙보다 한 사람의 성장을 믿는 곳. GCM이 걸어온 이야기입니다.",
          en: "A place that believes in a person's growth more than a single swing. This is the story GCM has walked.",
          zh: "一个相信人的成长胜过一记挥拍的地方。这是GCM走过的故事。",
          ja: "一度のスイングよりも、一人の成長を信じる場所。GCMが歩んできた物語です。",
          it: "Un luogo che crede nella crescita di una persona più che in un singolo colpo. Questa è la storia che GCM ha percorso.",
          fr: "Un lieu qui croit en la croissance d'une personne plus qu'en un simple coup. Voici l'histoire que GCM a parcourue.",
          es: "Un lugar que cree en el crecimiento de una persona más que en un solo golpe. Esta es la historia que GCM ha recorrido.",
        })}
      />

      <div className="mt-16 max-w-3xl border-l border-line">
        {CHAPTERS.map((c) => (
          <div key={c.no} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span className="absolute -left-px top-1 h-6 w-px bg-court" aria-hidden />
            <span className="font-display text-sm font-bold tracking-widest text-court-bright">
              {c.no}
            </span>
            <h3 className="mt-2 break-keep font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
              {t(c.title)}
            </h3>
            <p className="mt-3 break-keep text-[15px] leading-relaxed text-muted">
              {t(c.body)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
