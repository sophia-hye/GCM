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
      ko: "테니스를 배울 수 있는 곳은 많습니다. 하지만 아이의 태도와 마음, 그리고 코트 밖의 삶까지 함께 고민하고 성장시키는 것이 GCM의 깊은 교육 철학입니다. 한 선수를 끝까지 책임지겠다는 어려운 약속을 믿고 기다려주신 분들 덕분에, 아이들은 저마다의 성공 기준을 세우며 함께 꿈을 이루어 가고 있습니다.",
      en: "There are many places to learn tennis. But considering and nurturing a child's attitude, heart, and even their life off the court — that is GCM's deep educational philosophy. Thanks to those who believed in and waited patiently for our difficult promise to see each athlete through to the end, our children are setting their own standards of success and realizing their dreams together.",
      zh: "能学网球的地方有很多。但连同孩子的态度、心灵乃至场外的人生一起思考、一起培养，正是GCM深厚的教育理念。多亏了那些相信并耐心等待我们“把一名选手负责到底”这一艰难承诺的人，孩子们正各自树立起属于自己的成功标准，一同实现着梦想。",
      ja: "テニスを学べる場所はたくさんあります。けれど、子どもの態度や心、そしてコートの外の人生までを共に考え、育てていくこと——それこそがGCMの深い教育哲学です。一人の選手を最後まで責任を持つという難しい約束を信じて待ってくださった方々のおかげで、子どもたちはそれぞれの成功の基準を打ち立てながら、共に夢を叶えています。",
      it: "Ci sono molti posti dove imparare il tennis. Ma considerare e far crescere anche l'atteggiamento, il cuore e la vita di un ragazzo fuori dal campo: questa è la profonda filosofia educativa di GCM. Grazie a chi ha creduto e atteso con pazienza la nostra difficile promessa di accompagnare ogni atleta fino in fondo, i nostri ragazzi stanno definendo i propri criteri di successo e realizzando insieme i loro sogni.",
      fr: "Il existe de nombreux endroits où apprendre le tennis. Mais prendre en compte et faire grandir aussi l'attitude, le cœur et la vie d'un enfant en dehors du court : telle est la profonde philosophie éducative de GCM. Grâce à celles et ceux qui ont cru en notre promesse difficile d'accompagner chaque joueur jusqu'au bout et qui ont su patienter, nos enfants définissent leurs propres critères de réussite et réalisent ensemble leurs rêves.",
      es: "Hay muchos lugares donde aprender tenis. Pero considerar y hacer crecer también la actitud, el corazón y la vida de un niño fuera de la cancha: esa es la profunda filosofía educativa de GCM. Gracias a quienes creyeron y esperaron con paciencia nuestra difícil promesa de acompañar a cada jugador hasta el final, nuestros niños están definiendo sus propios criterios de éxito y cumpliendo juntos sus sueños.",
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
      ko: "GCM의 코치들은 가르치기만 하지 않습니다. 지금도 큰 무대에서 직접 뛰는 현역 선수 겸 코치로서, 말보다 행동으로 먼저 보여줍니다. 아이들은 매일 도전하는 어른의 뒷모습을 보고 자랍니다.",
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
