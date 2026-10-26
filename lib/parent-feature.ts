import type { I18nText } from "@/lib/i18n-pick";

/**
 * /players 하단에 노출하는 학부모 대표 후기(제주 전국대회 응원기).
 * ko/en 기준이며 나머지 언어는 추가 번역으로 채운다(없으면 en 폴백).
 */
export type FeatureSection = { icon: string; heading: I18nText; paras: I18nText[] };

export const PARENT_FEATURE: {
  eyebrow: string;
  title: I18nText;
  intro: I18nText[];
  sections: FeatureSection[];
  quote: I18nText;
  closing: I18nText[];
} = {
  eyebrow: "Parents' Voice",
  title: {
    ko: "[학부모 후기] 테니스 라켓 대신 응원 피켓을 들고, GCM과 함께 제주도로 향한 특별한 3박 4일 🎾",
    en: "[Parent's Review] Holding a cheer sign instead of a racket — a special 4-day trip to Jeju with GCM 🎾",
    zh: "「学生家长后记」放下网球拍，举起应援牌——与GCM一起奔赴济州岛的特别四天三夜 🎾",
    ja: "「保護者レビュー」ラケットの代わりに応援ボードを持って——GCMと一緒に済州島へ向かった特別な3泊4日 🎾",
    it: "«Testimonianza» Un cartello di tifo al posto della racchetta — un viaggio speciale di quattro giorni a Jeju con GCM 🎾",
    fr: "« Témoignage de parent » Une pancarte d'encouragement à la place de la raquette — un séjour spécial de quatre jours à Jeju avec GCM 🎾",
    es: "«Reseña de una familia» Con un cartel de ánimo en vez de una raqueta: un viaje especial de cuatro días a Jeju con GCM 🎾",
  },
  intro: [
    {
      ko: "아이가 평소 매일 참여하던 GCM 정규 테니스 훈련을 잠시 쉬고, 아주 특별한 여정을 다녀왔습니다. 바로 우리 GCM 코치님 두 분이 출전하시는 제주 전국대회 현장에 3박 4일 동안 직접 찾아가 응원하기 위해서였습니다.",
      en: "Our child took a short break from the daily GCM training routine for a very special journey — to spend four days and three nights in Jeju, cheering on two of our GCM coaches competing at a national tournament.",
      zh: "我们的孩子暂时放下了平日每天参加的GCM常规网球训练，踏上了一段非常特别的旅程——在济州岛度过四天三夜，为出战全国大赛的两位GCM教练加油助威。",
      ja: "我が子は、普段毎日参加しているGCMの定期テニス練習をしばらく休み、とても特別な旅に出かけました。全国大会に出場する二人のGCMコーチを応援するため、済州島で3泊4日を過ごすためです。",
      it: "Nostro figlio ha preso una breve pausa dalla routine quotidiana di allenamento al GCM per un viaggio molto speciale: trascorrere quattro giorni e tre notti a Jeju, per tifare due dei nostri coach del GCM impegnati in un torneo nazionale.",
      fr: "Notre enfant a fait une courte pause dans sa routine d'entraînement quotidienne au GCM pour un voyage très spécial : passer quatre jours et trois nuits à Jeju afin d'encourager deux de nos coachs du GCM en lice lors d'un tournoi national.",
      es: "Nuestro hijo hizo una breve pausa en la rutina diaria de entrenamiento del GCM para un viaje muy especial: pasar cuatro días y tres noches en Jeju animando a dos de nuestros entrenadores del GCM que competían en un torneo nacional.",
    },
    {
      ko: "'매일 해야 하는 정규 훈련을 쉬고, 멀리 제주도까지 응원을 하러 가는 것이 과연 맞을까?' 처음에는 학부모로서 고민도 있었습니다. 하지만 3박 4일의 일정을 마치고 돌아온 지금, 이 선택이야말로 GCM이 지향하는 '진짜 교육'의 가치를 온전히 확인한 소중한 시간이었음을 느낍니다.",
      en: "\"Is it really right to skip the daily routine and travel all the way to Jeju just to cheer?\" As a parent, I did hesitate at first. But now, back from those four days, I feel this choice was a precious time that fully confirmed the value of the 'real education' GCM stands for.",
      zh: "“放下每天必做的常规训练，大老远跑到济州岛去加油，这样做真的对吗？”起初身为家长的我也曾犹豫。但如今结束了四天三夜的行程归来，我深深感到，正是这个选择，让我完整地确认了GCM所追求的“真正的教育”的价值，是一段无比珍贵的时光。",
      ja: "「毎日やるべき定期練習を休んで、遠く済州島まで応援に行くのは、果たして正しいのだろうか?」最初は保護者として悩みもありました。けれども3泊4日の日程を終えて帰ってきた今、この選択こそ、GCMが目指す「本物の教育」の価値をまるごと確かめられた、かけがえのない時間だったと感じています。",
      it: "«È davvero giusto saltare la routine quotidiana e viaggiare fino a Jeju solo per fare il tifo?» All'inizio, come genitore, ho avuto qualche dubbio. Ma ora, tornati da quei quattro giorni, sento che questa scelta è stata un tempo prezioso che ha pienamente confermato il valore della 'vera educazione' in cui il GCM crede.",
      fr: "« Est-ce vraiment raisonnable de sauter l'entraînement quotidien et de voyager jusqu'à Jeju juste pour encourager ? » En tant que parent, j'ai d'abord hésité. Mais aujourd'hui, de retour de ces quatre jours, je sens que ce choix a été un moment précieux qui a pleinement confirmé la valeur de la « vraie éducation » que défend le GCM.",
      es: "«¿De verdad está bien saltarse la rutina diaria y viajar hasta Jeju solo para animar?» Como madre o padre, al principio dudé. Pero ahora, de vuelta de esos cuatro días, siento que esta elección fue un tiempo precioso que confirmó plenamente el valor de la 'verdadera educación' que defiende el GCM.",
    },
  ],
  sections: [
    {
      icon: "🥇",
      heading: {
        ko: "현장에서 직접 확인한 GCM 코치진의 열정과 스포츠맨십",
        en: "The passion and sportsmanship of the GCM coaches, seen first-hand",
        zh: "在现场亲眼见证的GCM教练团的热情与体育精神",
        ja: "現場で直に目にしたGCMコーチ陣の情熱とスポーツマンシップ",
        it: "La passione e la sportività dei coach del GCM, viste in prima persona",
        fr: "La passion et l'esprit sportif des coachs du GCM, vus de mes propres yeux",
        es: "La pasión y la deportividad de los entrenadores del GCM, vistas de primera mano",
      },
      paras: [
        {
          ko: "이번 대회에는 GCM 아카데미의 오성국 코치님과 김주빈 코치님께서 출전하셨습니다. 오성국 코치님께서는 멋진 경기력으로 값진 동메달을 획득하셨고, 아이와 함께 진심으로 축하하며 벅찬 기쁨을 나눌 수 있었습니다.",
          en: "At this tournament, GCM Academy's Coach Oh Seong-gook and Coach Kim Ju-bin competed. Coach Oh played wonderfully and earned a well-deserved bronze medal, and my child and I were able to celebrate together and share an overwhelming joy.",
          zh: "本次大赛中，GCM学院的Oh Seong-gook教练与Kim Ju-bin教练出战。Oh教练以精彩的表现赢得了宝贵的铜牌，我和孩子由衷地为他庆祝，分享着满溢的喜悦。",
          ja: "今回の大会には、GCMアカデミーのOh Seong-gookコーチとKim Ju-binコーチが出場しました。Ohコーチは見事なプレーで価値ある銅メダルを獲得され、子どもと一緒に心から祝福し、あふれる喜びを分かち合うことができました。",
          it: "In questo torneo hanno gareggiato il coach Oh Seong-gook e il coach Kim Ju-bin dell'accademia GCM. Il coach Oh ha giocato in modo splendido e ha conquistato una meritata medaglia di bronzo: io e mio figlio abbiamo potuto festeggiare insieme e condividere una gioia travolgente.",
          fr: "Lors de ce tournoi, le coach Oh Seong-gook et le coach Kim Ju-bin de l'académie GCM étaient en lice. Le coach Oh a livré un match magnifique et a décroché une médaille de bronze amplement méritée ; mon enfant et moi avons pu célébrer ensemble et partager une joie immense.",
          es: "En este torneo compitieron el entrenador Oh Seong-gook y el entrenador Kim Ju-bin de la academia GCM. El entrenador Oh jugó de maravilla y se ganó una merecida medalla de bronce; mi hijo y yo pudimos celebrarlo juntos y compartir una alegría inmensa.",
        },
        {
          ko: "또 김주빈 코치님께서는 상대가 국가대표이자 아시안게임 금메달리스트라는 강력한 선수임에도 불구하고, 끝까지 물러서지 않고 매 포인트 최선을 다해 경기에 임하셨습니다. 그 모습은 현장에서 지켜보던 모든 관중은 물론, 저와 아이의 가슴속에도 깊은 울림과 감동을 주었습니다.",
          en: "And even though his opponent was a formidable player — a national team member and an Asian Games gold medalist — Coach Kim never backed down, giving his all on every single point to the very end. That sight moved not only all the spectators watching, but struck a deep chord in my child and me as well.",
          zh: "另外，尽管Kim Ju-bin教练的对手是国家队选手、Asian Games金牌得主这样强劲的选手，他仍毫不退缩，每一分都全力以赴，坚持到最后一刻。那一幕不仅打动了现场观战的所有观众，也在我和孩子的心中激起了深深的回响与感动。",
          ja: "また、Kim Ju-binコーチは、相手が国家代表でありAsian Gamesの金メダリストという強豪選手であったにもかかわらず、最後まで一歩も引かず、一ポイント一ポイントに全力を尽くして試合に臨まれました。その姿は、現場で見守っていたすべての観客はもちろん、私と子どもの胸にも深い響きと感動を与えてくれました。",
          it: "E anche se il suo avversario era un atleta formidabile — membro della nazionale e medaglia d'oro agli Asian Games — il coach Kim non si è mai tirato indietro, dando tutto su ogni singolo punto fino alla fine. Quella scena ha commosso non solo tutti gli spettatori presenti, ma ha toccato una corda profonda anche in me e in mio figlio.",
          fr: "Et même si son adversaire était un joueur redoutable — membre de l'équipe nationale et médaillé d'or aux Asian Games — le coach Kim n'a jamais baissé les bras, se donnant à fond sur chaque point jusqu'au bout. Ce spectacle a ému non seulement tous les spectateurs présents, mais a aussi profondément touché mon enfant et moi.",
          es: "Y aunque su rival era un jugador formidable —miembro de la selección nacional y medallista de oro en los Asian Games—, el entrenador Kim nunca se echó atrás, entregándose por completo en cada punto hasta el final. Esa imagen conmovió no solo a todos los espectadores presentes, sino que también caló hondo en mi hijo y en mí.",
        },
        {
          ko: "승리의 기쁨도 값지지만, 강한 상대 앞에서도 포기하지 않고 자신의 경기를 끝까지 펼쳐 나가는 코치님의 모습은 백 마디 말보다 더 강력한 교육이었습니다. 결과를 넘어 도전하는 태도, 끈기, 그리고 진짜 스포츠맨십을 온몸으로 보여주시는 코치님이 곁에 계신다는 사실에 깊은 감사와 자부심을 느끼게 되었습니다.",
          en: "The joy of winning is precious, but a coach who refuses to give up before a strong opponent and plays out his own game to the end was a more powerful lesson than a hundred words. I came to feel deep gratitude and pride that our child has, right beside him, coaches who embody with their whole being an attitude of challenge beyond results, perseverance, and true sportsmanship.",
          zh: "胜利的喜悦固然宝贵，但在强敌面前绝不放弃、把自己的比赛坚持打到最后的教练身影，比千言万语都更有力量，是最好的教育。超越胜负的挑战态度、坚韧，以及真正的体育精神——有这样用整个身心去诠释这一切的教练在孩子身边，让我深深感到感激与自豪。",
          ja: "勝利の喜びも尊いものですが、強い相手の前でもあきらめず、自分の試合を最後まで貫き通すコーチの姿は、百の言葉よりも力強い教育でした。結果を超えて挑戦する姿勢、粘り強さ、そして本物のスポーツマンシップを全身で示してくださるコーチがそばにいてくださること——そのことに、私は深い感謝と誇りを感じるようになりました。",
          it: "La gioia della vittoria è preziosa, ma un coach che davanti a un avversario forte si rifiuta di arrendersi e porta avanti la propria partita fino alla fine è stato una lezione più potente di cento parole. Ho iniziato a provare profonda gratitudine e orgoglio nel sapere che nostro figlio ha, proprio accanto a sé, coach che incarnano con tutto se stessi un atteggiamento di sfida che va oltre il risultato, la perseveranza e la vera sportività.",
          fr: "La joie de gagner est précieuse, mais un coach qui refuse d'abandonner face à un adversaire redoutable et mène son propre match jusqu'au bout a été une leçon plus puissante que cent paroles. J'en suis venu à ressentir une profonde gratitude et une grande fierté de savoir que notre enfant a, juste à ses côtés, des coachs qui incarnent de tout leur être une attitude de défi au-delà du résultat, la persévérance et le véritable esprit sportif.",
          es: "La alegría de ganar es valiosa, pero un entrenador que se niega a rendirse ante un rival fuerte y juega su propio partido hasta el final fue una lección más poderosa que cien palabras. Llegué a sentir una profunda gratitud y orgullo al saber que nuestro hijo tiene, justo a su lado, entrenadores que encarnan con todo su ser una actitud de desafío más allá de los resultados, la perseverancia y la verdadera deportividad.",
        },
      ],
    },
    {
      icon: "🎾",
      heading: {
        ko: "코치이자 현역 선수, '플레잉 코치님'과 함께하는 훈련의 진짜 가치",
        en: "The true value of training with a 'playing coach' — a coach who is also an active player",
        zh: "身兼现役选手的教练——与“球员型教练”一同训练的真正价值",
        ja: "コーチでありながら現役選手——『プレイングコーチ』と共にする練習の本当の価値",
        it: "Il vero valore di allenarsi con un «coach-giocatore» — un coach che è anche un atleta in attività",
        fr: "La vraie valeur d'un entraînement avec un « coach-joueur » — un coach qui est aussi un joueur en activité",
        es: "El verdadero valor de entrenar con un «entrenador-jugador»: un entrenador que también es un jugador en activo",
      },
      paras: [
        {
          ko: "이번 경험을 통해 우리 GCM이 가진 가장 큰 강점인 '플레잉 코치' 시스템의 진가를 다시 한번 실감했습니다. GCM의 코치님들은 단순히 가르치는 분들이 아니라, 지금도 코트 위에서 치열하게 뛰며 시합을 뛰는 선수 겸 코치이십니다.",
          en: "Through this experience I once again realized the true worth of GCM's greatest strength — its 'playing coach' system. GCM's coaches are not simply instructors; they are still player-coaches who compete fiercely on court to this day.",
          zh: "通过这次经历，我再一次切实体会到GCM最大的优势——“球员型教练”体系的真正价值。GCM的教练们并不只是单纯传授技术的人，而是至今仍在球场上拼搏参赛的选手兼教练。",
          ja: "今回の経験を通して、私はGCMが持つ最大の強みである『プレイングコーチ』システムの真価をあらためて実感しました。GCMのコーチたちは、単に教えるだけの人ではなく、今もコートの上で激しく戦い試合に出続ける選手兼コーチなのです。",
          it: "Grazie a questa esperienza ho capito ancora una volta il vero valore del più grande punto di forza del GCM: il suo sistema di «coach-giocatori». I coach del GCM non sono semplici istruttori; sono tuttora coach-atleti che competono con grinta in campo ancora oggi.",
          fr: "Grâce à cette expérience, j'ai pris une nouvelle fois la mesure de la vraie valeur du plus grand atout du GCM : son système de « coachs-joueurs ». Les coachs du GCM ne sont pas de simples instructeurs ; ce sont encore aujourd'hui des coachs-joueurs qui s'affrontent avec acharnement sur le court.",
          es: "Gracias a esta experiencia comprendí una vez más el verdadero valor de la mayor fortaleza del GCM: su sistema de «entrenadores-jugadores». Los entrenadores del GCM no son simples instructores; siguen siendo entrenadores-jugadores que compiten con intensidad en la cancha hasta el día de hoy.",
        },
        {
          ko: "말과 기술로 설명해 주시는 가르침도 중요하지만, 코치님 스스로 경기장에서 막막함과 압박감을 이겨내며 선수로서 부딪히고 성장하는 과정을 직접 보여주는 것은 차원이 다른 교육입니다.",
          en: "Teaching through words and technique matters, of course, but a coach showing in person how he overcomes uncertainty and pressure on the court — confronting and growing as a player himself — is education on an entirely different level.",
          zh: "用语言和技术来讲解的教导固然重要，但教练亲身在赛场上克服茫然与压力、作为选手去拼搏并成长的过程展现给孩子看，这是层次完全不同的教育。",
          ja: "言葉や技術で説明してくださる指導も大切ですが、コーチ自身が試合の場で戸惑いやプレッシャーを乗り越え、選手として立ち向かい成長していく過程を直に見せてくださることは、次元の違う教育です。",
          it: "Insegnare con le parole e con la tecnica conta, certo, ma un coach che mostra di persona come supera l'incertezza e la pressione in campo — mettendosi in gioco e crescendo lui stesso come atleta — è un'educazione di tutt'altro livello.",
          fr: "Enseigner par les mots et la technique compte, bien sûr, mais un coach qui montre en personne comment il surmonte l'incertitude et la pression sur le court — en se confrontant et en grandissant lui-même en tant que joueur — c'est une éducation d'un tout autre niveau.",
          es: "Enseñar con palabras y técnica importa, por supuesto, pero un entrenador que muestra en persona cómo supera la incertidumbre y la presión en la cancha —enfrentándose y creciendo él mismo como jugador— es una educación de un nivel completamente distinto.",
        },
        {
          ko: "매일 자신을 지도해 주시는 코치님이 코트 위에서 끊임없이 도전하는 모습을 보며, 아이는 코치님에 대한 존경심과 신뢰를 더욱 깊게 다지게 되었습니다. 책이나 말로 배우는 것보다, 온몸으로 뛰는 스승의 모습을 보고 자란다는 것—이것이야말로 GCM을 선택한 제 결정에 가장 큰 확신을 주는 이유입니다.",
          en: "Watching the coach who guides him every day keep challenging himself on court, my child's respect and trust for his coach grew even deeper. Growing up watching a mentor who competes with his whole body, rather than learning only from books or words — this is exactly what gives me the greatest confidence in my decision to choose GCM.",
          zh: "看着每天指导自己的教练在球场上不断挑战自我，孩子对教练的敬佩与信任愈发深厚。在用全身心去拼搏的师长身边成长，而不只是从书本或言语中学习——这正是让我对选择GCM这一决定最有信心的理由。",
          ja: "毎日自分を指導してくださるコーチがコートの上で絶えず挑戦し続ける姿を見て、子どものコーチへの尊敬と信頼はいっそう深まりました。本や言葉だけで学ぶのではなく、全身で戦う師の姿を見て育つこと——これこそ、GCMを選んだ私の決断に最も大きな確信を与えてくれる理由です。",
          it: "Vedendo il coach che lo guida ogni giorno continuare a mettersi alla prova in campo, il rispetto e la fiducia di mio figlio verso il suo coach sono cresciuti ancora di più. Crescere osservando un mentore che gareggia con tutto il corpo, anziché imparare solo dai libri o dalle parole — è esattamente questo che mi dà la massima fiducia nella mia decisione di scegliere il GCM.",
          fr: "En regardant le coach qui le guide chaque jour continuer à se dépasser sur le court, le respect et la confiance de mon enfant envers son coach se sont encore approfondis. Grandir en observant un mentor qui se bat de tout son corps, plutôt qu'en apprenant seulement dans les livres ou par les mots — c'est précisément ce qui me donne la plus grande confiance dans ma décision de choisir le GCM.",
          es: "Al ver al entrenador que lo guía cada día seguir desafiándose a sí mismo en la cancha, el respeto y la confianza de mi hijo hacia su entrenador se hicieron aún más profundos. Crecer observando a un mentor que compite con todo su cuerpo, en lugar de aprender solo de los libros o las palabras: es precisamente esto lo que me da la mayor confianza en mi decisión de elegir el GCM.",
        },
      ],
    },
    {
      icon: "👁️",
      heading: {
        ko: "시야를 넓히는 살아있는 배움, GCM이 만드는 성장의 기회",
        en: "Living learning that broadens horizons — the growth opportunities GCM creates",
        zh: "拓宽视野的鲜活学习——GCM所创造的成长机会",
        ja: "視野を広げる生きた学び——GCMがつくる成長の機会",
        it: "Un apprendimento vivo che allarga gli orizzonti — le opportunità di crescita che il GCM crea",
        fr: "Un apprentissage vivant qui élargit les horizons — les occasions de grandir que le GCM crée",
        es: "Un aprendizaje vivo que amplía horizontes: las oportunidades de crecimiento que el GCM crea",
      },
      paras: [
        {
          ko: "테니스 실력을 키우기 위해서는 매일 반복 훈련하는 과정도 중요하지만, 좋은 선수가 되기 위해서는 경기 운영을 관찰하고 분석하며 시야를 넓히는 경험이 반드시 필요하다는 것을 GCM에서 배워왔습니다.",
          en: "Daily repetitive training matters for building tennis skills, but to become a good player one also needs the experience of observing and analyzing match play to widen one's perspective — something we have learned at GCM.",
          zh: "要提升网球水平，每天反复训练的过程固然重要，但要成为一名优秀的选手，还必须拥有观察、分析比赛运营以拓宽视野的经验——这是我们在GCM学到的。",
          ja: "テニスの実力を伸ばすには毎日の反復練習の過程も大切ですが、良い選手になるためには試合運びを観察・分析し、視野を広げる経験が欠かせない——このことを、私たちはGCMで学んできました。",
          it: "L'allenamento quotidiano e ripetitivo conta per costruire le abilità nel tennis, ma per diventare un buon atleta serve anche l'esperienza di osservare e analizzare il gioco delle partite per ampliare la propria prospettiva — qualcosa che abbiamo imparato al GCM.",
          fr: "L'entraînement quotidien et répétitif compte pour développer les compétences au tennis, mais pour devenir un bon joueur, il faut aussi l'expérience d'observer et d'analyser le déroulement des matchs afin d'élargir sa perspective — ce que nous avons appris au GCM.",
          es: "El entrenamiento diario y repetitivo importa para desarrollar las habilidades en el tenis, pero para llegar a ser un buen jugador también hace falta la experiencia de observar y analizar el desarrollo de los partidos para ampliar la propia perspectiva: algo que hemos aprendido en el GCM.",
        },
        {
          ko: "이번 여정 동안 아이는 GCM 코치님들의 경기뿐만 아니라 우리나라를 대표하는 유명 선수들의 경기를 가까이서 관람하고, 직접 만나 이야기를 나누는 특별한 기회도 가졌습니다.",
          en: "During this trip, my child had the special chance not only to watch the GCM coaches' matches up close, but also to see matches of the country's top players and even meet and talk with them in person.",
          zh: "在这次旅程中，孩子不仅近距离观看了GCM教练们的比赛，还获得了观赏代表我国的知名选手比赛、并亲自与他们见面交流的特别机会。",
          ja: "今回の旅の間、子どもはGCMのコーチたちの試合だけでなく、わが国を代表する有名選手たちの試合を間近で観戦し、直接会って言葉を交わすという特別な機会も得ました。",
          it: "Durante questo viaggio, mio figlio ha avuto la speciale occasione non solo di guardare da vicino le partite dei coach del GCM, ma anche di vedere le partite dei migliori atleti del Paese e persino di incontrarli e parlare con loro di persona.",
          fr: "Pendant ce voyage, mon enfant a eu la chance particulière non seulement de regarder de près les matchs des coachs du GCM, mais aussi de voir les matchs des meilleurs joueurs du pays et même de les rencontrer et de parler avec eux en personne.",
          es: "Durante este viaje, mi hijo tuvo la ocasión especial no solo de ver de cerca los partidos de los entrenadores del GCM, sino también de presenciar los partidos de los mejores jugadores del país e incluso de conocerlos y hablar con ellos en persona.",
        },
        {
          ko: "선수들의 움직임과 전술, 중요한 순간의 판단을 눈으로 직접 확인하는 과정은 아이에게 단순한 관람을 넘어 '살아있는 공부'가 되었습니다. 아이들에게 단순 기술 훈련을 넘어 코트 안팎에서 다각도로 성장할 수 있는 판을 열어주는 GCM의 교육적 방향성에 또 한 번 감탄했습니다.",
          en: "Seeing with his own eyes the players' movement, tactics, and decisions in crucial moments became, for my child, 'living study' beyond mere spectating. I was once again amazed by GCM's educational direction, which opens a stage for children to grow from many angles both on and off the court — far beyond simple skills training.",
          zh: "亲眼确认选手们的跑动、战术以及关键时刻的判断，对孩子而言成了超越单纯观赛的“鲜活的学习”。GCM超越单纯技术训练、为孩子们打开在球场内外多角度成长之舞台的教育方向，再一次令我赞叹。",
          ja: "選手たちの動きや戦術、重要な場面での判断を自分の目で直に確かめる過程は、子どもにとって単なる観戦を超えた『生きた勉強』になりました。単なる技術訓練を超えて、コートの内外で多角的に成長できる場を開いてくれるGCMの教育的な方向性に、またしても感嘆しました。",
          it: "Vedere con i propri occhi i movimenti degli atleti, le tattiche e le decisioni nei momenti cruciali è diventato, per mio figlio, uno 'studio vivo' che va oltre la semplice osservazione. Sono rimasto di nuovo colpito dalla direzione educativa del GCM, che apre ai ragazzi un palcoscenico per crescere da molteplici angolazioni, dentro e fuori dal campo — ben oltre il semplice allenamento tecnico.",
          fr: "Voir de ses propres yeux les déplacements des joueurs, leurs tactiques et leurs décisions dans les moments cruciaux est devenu, pour mon enfant, une « étude vivante » qui dépasse le simple fait de regarder. J'ai de nouveau été émerveillé par l'orientation éducative du GCM, qui ouvre aux enfants une scène pour grandir sous de multiples angles, sur le court comme en dehors — bien au-delà d'un simple entraînement technique.",
          es: "Ver con sus propios ojos los movimientos de los jugadores, las tácticas y las decisiones en los momentos cruciales se convirtió, para mi hijo, en un 'estudio vivo' que va más allá de la mera observación. Una vez más me asombró la orientación educativa del GCM, que abre a los niños un escenario para crecer desde muchos ángulos, dentro y fuera de la cancha, mucho más allá del simple entrenamiento técnico.",
        },
      ],
    },
    {
      icon: "🤝",
      heading: {
        ko: "든든한 GCM 어드바이저 팀과 함께여서 더 안심되는 곳",
        en: "A place made more reassuring by GCM's dependable advisory team",
        zh: "有GCM可靠的顾问团队相伴，让人更加安心的地方",
        ja: "頼もしいGCMのアドバイザーチームが共にいるからこそ、より安心できる場所",
        it: "Un luogo reso più rassicurante dall'affidabile team di consulenti del GCM",
        fr: "Un lieu rendu plus rassurant par l'équipe de conseillers fiable du GCM",
        es: "Un lugar más tranquilizador gracias al confiable equipo de asesores del GCM",
      },
      paras: [
        {
          ko: "무엇보다 이번 3박 4일은 아이와 코치님들, 그리고 GCM과의 관계를 더욱 단단하게 만들어 주었습니다.",
          en: "Above all, these four days made the bond between my child, the coaches, and GCM even stronger.",
          zh: "最重要的是，这四天三夜让孩子与教练们以及GCM之间的纽带变得更加牢固。",
          ja: "何よりも、この3泊4日は、子どもとコーチたち、そしてGCMとの関係をいっそう強く確かなものにしてくれました。",
          it: "Soprattutto, questi quattro giorni hanno reso ancora più forte il legame tra mio figlio, i coach e il GCM.",
          fr: "Avant tout, ces quatre jours ont rendu encore plus fort le lien entre mon enfant, les coachs et le GCM.",
          es: "Sobre todo, estos cuatro días hicieron aún más fuerte el vínculo entre mi hijo, los entrenadores y el GCM.",
        },
        {
          ko: "한 포인트 한 포인트 마음을 모아 응원하고 승패의 순간을 함께 나누며, 아이의 마음속에는 코치님을 향한 깊은 애정과 믿음이 쌓였습니다. 힘든 순간에도 믿고 따라갈 수 있는 스승이 있다는 것은 아이의 테니스 인생에 가장 든든한 버팀목이 될 것입니다.",
          en: "Cheering with all our hearts on every single point and sharing the moments of winning and losing together, a deep affection and trust toward his coaches took root in my child's heart. Having mentors he can believe in and follow even through hard moments will be the firmest support in his tennis life.",
          zh: "一分一分地齐心应援，一同分享胜负的瞬间，孩子心中对教练们的深厚情感与信任也随之扎根。在艰难时刻也能信赖并追随的师长，将成为孩子网球人生中最坚实的支柱。",
          ja: "一ポイント一ポイントに心を一つにして応援し、勝敗の瞬間を共に分かち合う中で、子どもの心にはコーチたちへの深い愛情と信頼が積み重なっていきました。つらい瞬間にも信じてついていける師がいるということは、子どものテニス人生で最も頼もしい支えとなるでしょう。",
          it: "Tifando con tutto il cuore su ogni singolo punto e condividendo insieme i momenti di vittoria e di sconfitta, nel cuore di mio figlio hanno messo radici un affetto e una fiducia profondi verso i suoi coach. Avere dei mentori in cui credere e da seguire anche nei momenti difficili sarà il sostegno più saldo nella sua vita tennistica.",
          fr: "En encourageant de tout notre cœur sur chaque point et en partageant ensemble les moments de victoire et de défaite, une affection et une confiance profondes envers ses coachs ont pris racine dans le cœur de mon enfant. Avoir des mentors en qui croire et qu'il peut suivre même dans les moments difficiles sera le soutien le plus solide de sa vie de joueur de tennis.",
          es: "Animando con todo el corazón en cada punto y compartiendo juntos los momentos de victoria y derrota, en el corazón de mi hijo echaron raíces un cariño y una confianza profundos hacia sus entrenadores. Tener mentores en quienes creer y a quienes seguir incluso en los momentos difíciles será el apoyo más firme en su vida en el tenis.",
        },
        {
          ko: "훈련을 며칠 쉬는 것은 일시적인 공백일 수 있지만, 제주도에서 얻은 감동과 동기부여는 그 무엇과도 바꿀 수 없는 소중한 자산이 되었습니다.",
          en: "Skipping a few days of training may be a momentary gap, but the inspiration and motivation gained in Jeju became a precious asset that nothing could replace.",
          zh: "暂停几天训练或许只是一时的空白，但在济州岛收获的感动与动力，却成了任何东西都无法替代的宝贵财富。",
          ja: "練習を数日休むことは一時的な空白かもしれませんが、済州島で得た感動と動機づけは、何ものにも代えがたい貴重な財産となりました。",
          it: "Saltare qualche giorno di allenamento può essere una pausa momentanea, ma l'ispirazione e la motivazione ricevute a Jeju sono diventate un bene prezioso che nulla potrebbe sostituire.",
          fr: "Manquer quelques jours d'entraînement n'est peut-être qu'un vide passager, mais l'inspiration et la motivation gagnées à Jeju sont devenues un bien précieux que rien ne pourrait remplacer.",
          es: "Saltarse unos días de entrenamiento quizá sea un vacío momentáneo, pero la inspiración y la motivación obtenidas en Jeju se convirtieron en un bien precioso que nada podría reemplazar.",
        },
      ],
    },
  ],
  quote: {
    ko: "기술만 가르치는 곳은 많지만, 아이의 태도와 마음까지 함께 키워주는 곳은 흔치 않습니다.",
    en: "There are many places that teach only skills, but few that nurture a child's attitude and heart as well.",
    zh: "只教技术的地方有很多，但能连同孩子的态度与心灵一起培养的地方却并不多见。",
    ja: "技術だけを教える場所は多くありますが、子どもの態度や心まで一緒に育ててくれる場所はそう多くありません。",
    it: "Ci sono molti posti che insegnano solo la tecnica, ma pochi che coltivano anche l'atteggiamento e il cuore di un bambino.",
    fr: "Il existe beaucoup d'endroits qui n'enseignent que la technique, mais peu qui cultivent aussi l'attitude et le cœur d'un enfant.",
    es: "Hay muchos lugares que enseñan solo técnica, pero pocos que cultiven también la actitud y el corazón de un niño.",
  },
  closing: [
    {
      ko: "아이들에게 단단한 본보기가 되어주시는 현장의 플레잉 코치진, 그리고 학업·진로진학·멘토링까지 아이의 성장을 다각도로 뒷받침해 주는 든든한 GCM의 어드바이저 팀이 있기에 학부모로서 앞으로의 성장이 더욱 기대되고 안심이 됩니다.",
      en: "With playing coaches who serve as solid role models on the ground, and GCM's dependable advisory team supporting our child's growth from every angle — academics, career and admissions, and mentoring — I feel, as a parent, even more excited and reassured about the growth ahead.",
      zh: "有在现场为孩子们树立坚实榜样的球员型教练，还有从学业、升学进路到心灵辅导、从多个角度支持孩子成长的可靠的GCM顾问团队——身为家长，我对今后的成长更加期待，也更加安心。",
      ja: "子どもたちに確かな手本となってくださる現場のプレイングコーチ陣、そして学業・進路進学・メンタリングまで、子どもの成長を多角的に支えてくれる頼もしいGCMのアドバイザーチームがいてくださるからこそ、保護者として、これからの成長がいっそう楽しみで、安心できます。",
      it: "Con coach-giocatori che fanno da solidi modelli sul campo e l'affidabile team di consulenti del GCM che sostiene la crescita di nostro figlio da ogni punto di vista — studio, carriera e ammissioni, e mentoring — come genitore mi sento ancora più entusiasta e rassicurato riguardo alla crescita che verrà.",
      fr: "Avec des coachs-joueurs qui servent de solides modèles sur le terrain, et l'équipe de conseillers fiable du GCM qui soutient la croissance de notre enfant sous tous les angles — études, orientation et admissions, et mentorat — je me sens, en tant que parent, encore plus enthousiaste et rassuré quant à la croissance à venir.",
      es: "Con entrenadores-jugadores que sirven de sólidos modelos a seguir sobre el terreno, y el confiable equipo de asesores del GCM que apoya el crecimiento de nuestro hijo desde todos los ángulos —estudios, orientación y admisiones, y mentoría—, como madre o padre me siento aún más ilusionado y tranquilo respecto al crecimiento que viene.",
    },
    {
      ko: "값진 동메달을 획득하신 오성국 코치님께 다시 한번 축하를 드리며, 결과와 상관없이 포기하지 않는 멋진 경기를 보여주신 코치님들과 이 모든 배움의 기회를 가능하게 해준 GCM 테니스 아카데미에 진심으로 감사드립니다. ❤️🎾",
      en: "Congratulations once again to Coach Oh Seong-gook on his well-deserved bronze medal, and my heartfelt thanks to the coaches who showed such admirable play without ever giving up — regardless of the result — and to GCM Tennis Academy for making all of these learning opportunities possible. ❤️🎾",
      zh: "再次向赢得宝贵铜牌的Oh Seong-gook教练表示祝贺，也由衷感谢无论结果如何都从不放弃、展现出精彩比赛的教练们，以及让这一切学习机会成为可能的GCM网球学院。❤️🎾",
      ja: "価値ある銅メダルを獲得されたOh Seong-gookコーチに、あらためてお祝いを申し上げます。そして、結果にかかわらずあきらめない見事な試合を見せてくださったコーチたち、そしてこのすべての学びの機会を可能にしてくれたGCMテニスアカデミーに、心から感謝いたします。❤️🎾",
      it: "Congratulazioni ancora una volta al coach Oh Seong-gook per la sua meritata medaglia di bronzo, e il mio grazie di cuore ai coach che hanno mostrato un gioco così ammirevole senza mai arrendersi — a prescindere dal risultato — e all'accademia di tennis GCM per aver reso possibili tutte queste opportunità di apprendimento. ❤️🎾",
      fr: "Félicitations encore une fois au coach Oh Seong-gook pour sa médaille de bronze amplement méritée, et mes remerciements les plus sincères aux coachs qui ont montré un jeu si admirable sans jamais abandonner — quel que soit le résultat — et à l'académie de tennis GCM pour avoir rendu possibles toutes ces occasions d'apprentissage. ❤️🎾",
      es: "Felicidades una vez más al entrenador Oh Seong-gook por su merecida medalla de bronce, y mi más sincero agradecimiento a los entrenadores que mostraron un juego tan admirable sin rendirse jamás —sin importar el resultado— y a la academia de tenis GCM por hacer posibles todas estas oportunidades de aprendizaje. ❤️🎾",
    },
  ],
};
