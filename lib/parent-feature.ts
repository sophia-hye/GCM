import type { I18nText } from "@/lib/i18n-pick";

/**
 * /players 하단에 노출하는 학부모 대표 후기(제주 전국대회 응원기).
 * ko/en 기준이며 나머지 언어는 추가 번역으로 채운다(없으면 en 폴백).
 * gallery 가 있는 섹션은 본문 아래에 사진 갤러리(클릭 시 라이트박스)를 노출한다.
 */
export type FeatureSection = {
  icon?: string;
  heading: I18nText;
  paras: I18nText[];
  gallery?: string[];
};

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
    ko: "테니스 라켓 대신 응원 피켓을 들고, GCM과 함께 제주도로 향한 특별한 3박 4일",
    en: "Holding a cheer sign instead of a racket — a special four-day trip to Jeju with GCM",
    zh: "放下网球拍，举起应援牌——与GCM一起奔赴济州岛的特别四天三夜",
    ja: "ラケットの代わりに応援ボードを持って——GCMと一緒に済州島へ向かった特別な3泊4日",
    it: "Un cartello di tifo al posto della racchetta: un viaggio speciale di quattro giorni a Jeju con GCM",
    fr: "Une pancarte d'encouragement à la place de la raquette : un séjour spécial de quatre jours à Jeju avec GCM",
    es: "Con un cartel de ánimo en vez de una raqueta: un viaje especial de cuatro días a Jeju con GCM",
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
      ko: "아이가 만 6세 때부터 테니스를 시작했을 만큼 저희 가족에겐 매일의 정규 훈련이 정말 소중했습니다. 그렇다 보니 3박 4일 일정 중 비록 단 하루 빠지는 정규 훈련이었지만, '멀리 제주도까지 응원을 하러 가는 것이 과연 맞을까?' 하는 학부모로서의 고민도 있었습니다.",
      en: "Our child started tennis at the age of six, so daily routine training has always been truly precious to our family. That's why, even though it meant missing just one day of regular training over the four-day trip, I did wonder as a parent, \"Is it really right to travel all the way to Jeju just to cheer?\"",
      zh: "孩子从满6岁起就开始打网球，每天的常规训练对我们一家来说都无比珍贵。正因如此，尽管四天三夜的行程中只会缺席一天的常规训练，身为家长的我仍不免犹豫：“大老远跑到济州岛去加油，这样做真的对吗？”",
      ja: "子どもは満6歳からテニスを始めたほどで、我が家にとって毎日の定期練習は本当に大切なものでした。そのため、3泊4日の日程の中で休むのはたった一日の定期練習とはいえ、「遠く済州島まで応援に行くのは、果たして正しいのだろうか?」という保護者としての悩みもありました。",
      it: "Nostro figlio ha iniziato a giocare a tennis a sei anni, perciò l'allenamento quotidiano è sempre stato davvero prezioso per la nostra famiglia. Ecco perché, anche se significava saltare un solo giorno di allenamento regolare durante il viaggio di quattro giorni, come genitore mi sono chiesto: «È davvero giusto viaggiare fino a Jeju solo per fare il tifo?»",
      fr: "Notre enfant a commencé le tennis à six ans ; l'entraînement quotidien a donc toujours été vraiment précieux pour notre famille. C'est pourquoi, même s'il ne s'agissait de manquer qu'une seule journée d'entraînement régulier sur ce séjour de quatre jours, je me suis demandé, en tant que parent : « Est-ce vraiment raisonnable de voyager jusqu'à Jeju juste pour encourager ? »",
      es: "Nuestro hijo empezó a jugar al tenis a los seis años, así que el entrenamiento diario siempre ha sido muy valioso para nuestra familia. Por eso, aunque solo supusiera faltar a un día de entrenamiento regular durante el viaje de cuatro días, como madre o padre me pregunté: «¿De verdad está bien viajar hasta Jeju solo para animar?»",
    },
    {
      ko: "하지만 아이의 성장과 긴 인생 여정까지 다각도로 바라봐 주시는 GCM 어드바이저 팀과 코치진의 깊은 통찰력, 전문가적 견해가 있었기에 부모로서 확신을 갖고 현명한 결정을 내릴 수 있었습니다.",
      en: "But thanks to the deep insight and expert perspective of GCM's advisory team and coaches — who view our child's growth and even his long life journey from every angle — I was able to make a wise decision with confidence as a parent.",
      zh: "但正因为有从多个角度审视孩子成长乃至漫长人生旅程的GCM顾问团队与教练团的深刻洞察与专业见解，身为父母的我才得以满怀信心地做出明智的决定。",
      ja: "けれども、子どもの成長、そして長い人生の歩みまでを多角的に見つめてくださるGCMのアドバイザーチームとコーチ陣の深い洞察力、専門家としての見解があったからこそ、親として確信をもって賢明な決断を下すことができました。",
      it: "Ma grazie alla profonda intuizione e alla prospettiva esperta del team di consulenti e dei coach del GCM — che guardano alla crescita di nostro figlio e persino al suo lungo cammino di vita da ogni angolazione — come genitore ho potuto prendere una decisione saggia con fiducia.",
      fr: "Mais grâce à la profonde perspicacité et au regard d'experts de l'équipe de conseillers et des coachs du GCM — qui considèrent la croissance de notre enfant et même son long parcours de vie sous tous les angles — j'ai pu, en tant que parent, prendre une décision avisée en toute confiance.",
      es: "Pero gracias a la profunda perspicacia y la mirada experta del equipo de asesores y los entrenadores del GCM —que contemplan el crecimiento de nuestro hijo e incluso su largo camino de vida desde todos los ángulos—, como madre o padre pude tomar una decisión sabia con confianza.",
    },
    {
      ko: "3박 4일의 일정을 마치고 돌아온 지금, 단 하루의 훈련 공백과는 비교할 수 없을 만큼 이 선택이야말로 GCM이 지향하는 '진짜 교육'의 가치를 온전히 확인한 소중한 시간이었음을 느낍니다.",
      en: "Now, back from those four days, I feel that this choice — incomparable to a single day's gap in training — was a precious time that fully confirmed the value of the 'real education' GCM stands for.",
      zh: "如今结束四天三夜的行程归来，我深深感到，这个选择远非一天的训练空白所能相比，而是一段完整确认了GCM所追求的“真正的教育”价值的珍贵时光。",
      ja: "3泊4日の日程を終えて帰ってきた今、たった一日の練習の空白とは比べものにならないほど、この選択こそGCMが目指す「本物の教育」の価値をまるごと確かめられた、かけがえのない時間だったと感じています。",
      it: "Ora, tornati da quei quattro giorni, sento che questa scelta — incomparabile con un solo giorno di allenamento mancato — è stata un tempo prezioso che ha pienamente confermato il valore della 'vera educazione' in cui il GCM crede.",
      fr: "Aujourd'hui, de retour de ces quatre jours, je sens que ce choix — sans commune mesure avec une seule journée d'entraînement manquée — a été un moment précieux qui a pleinement confirmé la valeur de la « vraie éducation » que défend le GCM.",
      es: "Ahora, de vuelta de esos cuatro días, siento que esta elección —incomparable con un solo día de entrenamiento perdido— fue un tiempo precioso que confirmó plenamente el valor de la 'verdadera educación' que defiende el GCM.",
    },
  ],
  sections: [
    {
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
          ko: "이번 대회는 국가대표를 포함하여 각 지자체 대표 유명 선수들 모두가 집결하는 전국체육대회(전국체전)였습니다.",
          en: "This competition was the National Sports Festival, where famous players representing each region — national team members included — all come together.",
          zh: "本次比赛是全国体育大会（全国体典），汇聚了包括国家队选手在内、代表各地区的知名选手。",
          ja: "今回の大会は、国家代表を含め、各自治体を代表する有名選手たちが一堂に会する全国体育大会（全国体典）でした。",
          it: "Questa competizione era il Festival Nazionale dello Sport, dove si riuniscono giocatori famosi in rappresentanza di ogni regione, membri della nazionale compresi.",
          fr: "Cette compétition était le Festival national des sports, où se réunissent des joueurs célèbres représentant chaque région, membres de l'équipe nationale compris.",
          es: "Esta competición era el Festival Nacional del Deporte, donde se reúnen jugadores célebres en representación de cada región, incluidos miembros de la selección nacional.",
        },
        {
          ko: "이 무대에 출전하신 GCM 오성국 코치님과 김주빈 코치님은 개인 선수의 화려한 커리어보다 대한민국 테니스 꿈나무들을 육성하는 데 헌신하기로 결심하신 분들입니다. 평소 아이들 코칭에만 올인하느라 개인 훈련 시간이 부족했음에도, 두 코치님이 보여주신 경기는 가슴 깊은 울림을 주었습니다.",
          en: "GCM's Coach Oh Seong-gook and Coach Kim Ju-bin, who competed on this stage, are people who chose to devote themselves to nurturing Korea's young tennis hopefuls rather than to their own glittering playing careers. Even though pouring everything into coaching the children had left them little time for personal training, the matches the two coaches played struck a deep chord.",
          zh: "登上这一舞台的GCM Oh Seong-gook教练与Kim Ju-bin教练，是两位选择奉献于培养韩国网球新苗、而非追求个人辉煌职业生涯的人。尽管平日全身心投入于指导孩子、个人训练时间不足，两位教练所展现的比赛依然深深触动了人心。",
          ja: "この舞台に出場されたGCMのOh Seong-gookコーチとKim Ju-binコーチは、個人選手としての華やかなキャリアよりも、韓国テニスの未来を担う子どもたちの育成に身を捧げることを決意された方々です。普段は子どもたちのコーチングに全力を注ぐあまり個人の練習時間が足りなかったにもかかわらず、お二人が見せてくださった試合は、胸の奥深くに響くものでした。",
          it: "Il coach Oh Seong-gook e il coach Kim Ju-bin del GCM, che hanno gareggiato su questo palcoscenico, sono persone che hanno scelto di dedicarsi a far crescere i giovani talenti del tennis coreano anziché alla propria brillante carriera agonistica. Anche se dedicare tutto all'allenamento dei ragazzi aveva lasciato loro poco tempo per gli allenamenti personali, le partite che i due coach hanno giocato hanno toccato nel profondo.",
          fr: "Le coach Oh Seong-gook et le coach Kim Ju-bin du GCM, qui concouraient sur cette scène, sont des personnes qui ont choisi de se consacrer à former les jeunes espoirs du tennis coréen plutôt qu'à leur propre carrière de joueur éclatante. Même si se donner entièrement à l'encadrement des enfants leur avait laissé peu de temps pour leur entraînement personnel, les matchs livrés par les deux coachs ont profondément résonné en nous.",
          es: "El entrenador Oh Seong-gook y el entrenador Kim Ju-bin del GCM, que compitieron en este escenario, son personas que eligieron dedicarse a formar a las jóvenes promesas del tenis coreano en lugar de a su propia brillante carrera como jugadores. Aunque volcarse por completo en entrenar a los niños les había dejado poco tiempo para su entrenamiento personal, los partidos que disputaron los dos entrenadores calaron muy hondo.",
        },
        {
          ko: "오성국 코치님께서는 내로라하는 대표급 상대에도 '단식 무패 승률'이라는 독보적인 경기력으로 값진 동메달을 따내셨습니다. 팀전 특성상 완벽한 승률에도 동메달에 그칠 수 있는 상황이었지만, 결과와 상관없이 팀원들과 기쁨을 나누는 모습에서 진정한 리더의 품격을 느꼈습니다.",
          en: "Even against top-tier, national-level opponents, Coach Oh earned a hard-won bronze medal with a standout performance — an undefeated singles record. Because of the nature of the team event, a perfect win rate could still end in only a bronze, yet in the way he shared his joy with his teammates regardless of the result, I felt the dignity of a true leader.",
          zh: "Oh Seong-gook教练面对响当当的国家级对手，仍以“单打不败胜率”这一独树一帜的表现赢得了宝贵的铜牌。由于团体赛的特点，即便拥有完美的胜率也可能止步于铜牌，但无论结果如何，他与队友们分享喜悦的身影，让我感受到了真正领袖的风范。",
          ja: "Oh Seong-gookコーチは、名だたる代表級の相手に対しても「シングルス無敗の勝率」という傑出した戦いぶりで、価値ある銅メダルを勝ち取られました。団体戦の性質上、完璧な勝率でも銅メダルにとどまることのある状況でしたが、結果にかかわらずチームメイトと喜びを分かち合うその姿に、真のリーダーの品格を感じました。",
          it: "Anche contro avversari di altissimo livello, da nazionale, il coach Oh ha conquistato una sofferta medaglia di bronzo con una prestazione straordinaria: un record di imbattibilità nel singolare. Per la natura della prova a squadre, una percentuale di vittorie perfetta poteva comunque tradursi solo in un bronzo, eppure nel modo in cui ha condiviso la gioia con i compagni, a prescindere dal risultato, ho colto la dignità di un vero leader.",
          fr: "Même face à des adversaires de tout premier plan, de niveau national, le coach Oh a décroché une médaille de bronze durement gagnée grâce à une performance remarquable : un parcours invaincu en simple. Du fait de la nature de l'épreuve par équipes, un taux de victoires parfait pouvait tout de même ne donner qu'un bronze ; pourtant, dans la façon dont il a partagé sa joie avec ses coéquipiers, quel que soit le résultat, j'ai perçu la dignité d'un vrai leader.",
          es: "Incluso ante rivales de primerísimo nivel, de categoría nacional, el entrenador Oh se ganó una merecida medalla de bronce con una actuación sobresaliente: un registro invicto en individuales. Por la naturaleza de la prueba por equipos, un porcentaje de victorias perfecto podía quedarse aun así solo en un bronce; sin embargo, en la forma en que compartió su alegría con sus compañeros, al margen del resultado, percibí la dignidad de un verdadero líder.",
        },
        {
          ko: "김주빈 코치님 역시 상대가 국가대표이자 아시안게임 금메달리스트라는 최정상 선수였음에도, 끝까지 물러서지 않고 매 포인트 최선을 다하셨습니다. 그 포기하지 않는 모습은 관람하던 모든 관중들은 물론 저와 아이의 가슴속에도 깊은 감동을 주었습니다. 백 마디 말보다 더 강력한 귀감이 되어주신 두 코치님이 계시다는 사실에 깊은 감사와 자부심을 느낍니다.",
          en: "Coach Kim, too, even though his opponent was a top-of-the-top player — a national team member and an Asian Games gold medalist — never backed down to the end, giving his all on every point. That refusal to give up moved not only all the spectators watching but struck deep in my child's heart and mine. I feel profound gratitude and pride that we have two coaches who became role models more powerful than a hundred words.",
          zh: "Kim Ju-bin教练同样如此——尽管对手是国家队选手、Asian Games金牌得主这样的顶尖选手，他仍毫不退缩，每一分都全力以赴，坚持到最后。那种绝不放弃的身影，不仅打动了现场所有观众，也深深感动了我和孩子。有这样胜过千言万语、堪为榜样的两位教练，让我满怀深深的感激与自豪。",
          ja: "Kim Ju-binコーチもまた、相手が国家代表でありAsian Gamesの金メダリストという最高峰の選手であったにもかかわらず、最後まで一歩も引かず、一ポイント一ポイントに全力を尽くされました。その決してあきらめない姿は、観戦していたすべての観客はもちろん、私と子どもの胸にも深い感動を与えてくれました。百の言葉よりも力強い手本となってくださったお二人のコーチがいてくださること——そのことに、私は深い感謝と誇りを感じます。",
          it: "Anche il coach Kim, pur avendo di fronte un giocatore ai vertici assoluti — membro della nazionale e medaglia d'oro agli Asian Games — non si è mai tirato indietro fino alla fine, dando il massimo su ogni punto. Quel rifiuto di arrendersi ha commosso non solo tutti gli spettatori presenti, ma ha toccato nel profondo il cuore di mio figlio e il mio. Provo profonda gratitudine e orgoglio nel sapere di avere due coach diventati modelli più potenti di cento parole.",
          fr: "Le coach Kim non plus, bien que son adversaire fût un joueur au sommet absolu — membre de l'équipe nationale et médaillé d'or aux Asian Games — n'a jamais reculé jusqu'au bout, se donnant à fond sur chaque point. Ce refus d'abandonner a ému non seulement tous les spectateurs présents, mais a aussi profondément touché le cœur de mon enfant et le mien. J'éprouve une profonde gratitude et une grande fierté d'avoir deux coachs devenus des modèles plus puissants que cent paroles.",
          es: "El entrenador Kim tampoco, aunque su rival era un jugador de lo más alto —miembro de la selección nacional y medallista de oro en los Asian Games—, se echó atrás hasta el final, entregándose por completo en cada punto. Esa negativa a rendirse conmovió no solo a todos los espectadores presentes, sino que también caló hondo en el corazón de mi hijo y en el mío. Siento una profunda gratitud y orgullo de contar con dos entrenadores que se han convertido en modelos más poderosos que cien palabras.",
        },
      ],
    },
    {
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
          ko: "이번 경험을 통해 우리 GCM이 가진 가장 큰 강점인 '플레잉 코치' 시스템의 진가를 다시 한번 실감했습니다. GCM의 코치님들은 단순히 가르치는 분들이 아니라, 전국체전과 같은 큰 시합을 뛰는 선수 겸 코치이십니다.",
          en: "Through this experience I once again realized the true worth of GCM's greatest strength — its 'playing coach' system. GCM's coaches are not simply instructors; they are player-coaches who compete in major tournaments like the National Sports Festival.",
          zh: "通过这次经历，我再一次切实体会到GCM最大的优势——“球员型教练”体系的真正价值。GCM的教练们并不只是单纯教学的人，而是会征战全国体典这类大型赛事的选手兼教练。",
          ja: "今回の経験を通して、私はGCMが持つ最大の強みである「プレイングコーチ」システムの真価をあらためて実感しました。GCMのコーチたちは、単に教えるだけの人ではなく、全国体典のような大きな試合に出場する選手兼コーチなのです。",
          it: "Grazie a questa esperienza ho capito ancora una volta il vero valore del più grande punto di forza del GCM: il suo sistema di «coach-giocatori». I coach del GCM non sono semplici istruttori; sono coach-atleti che gareggiano in grandi tornei come il Festival Nazionale dello Sport.",
          fr: "Grâce à cette expérience, j'ai de nouveau pris la mesure de la vraie valeur du plus grand atout du GCM : son système de « coachs-joueurs ». Les coachs du GCM ne sont pas de simples instructeurs ; ce sont des coachs-joueurs qui disputent de grands tournois comme le Festival national des sports.",
          es: "Gracias a esta experiencia comprendí una vez más el verdadero valor de la mayor fortaleza del GCM: su sistema de «entrenadores-jugadores». Los entrenadores del GCM no son simples instructores; son entrenadores-jugadores que compiten en grandes torneos como el Festival Nacional del Deporte.",
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
          ko: "매일 자신을 지도해 주시는 코치님이 여전히 코트 위에서 현역 선수로 멋지게 뛰며 존재감을 증명하시는 모습을 보며, 아이는 코치님을 향한 존경심과 신뢰를 더욱 깊게 다지게 되었습니다. 책이나 말로 배우는 것보다, 온몸으로 뛰며 도전하는 스승의 등 뒤를 보고 자란다는 것—이것이야말로 GCM을 선택한 제 결정에 가장 큰 확신을 주는 이유입니다.",
          en: "Watching the coach who guides him every day still playing brilliantly as an active competitor on court and proving his presence, my child's respect and trust for his coach grew even deeper. Growing up watching the back of a mentor who runs and challenges himself with his whole body, rather than learning only from books or words — this is exactly what gives me the greatest confidence in my decision to choose GCM.",
          zh: "看着每天指导自己的教练，如今依然作为现役选手在球场上精彩拼搏、证明自身存在感，孩子对教练的敬佩与信任愈发深厚。在用全身心去拼搏、去挑战的师长背影下成长，而不只是从书本或言语中学习——这正是让我对选择GCM这一决定最有信心的理由。",
          ja: "毎日自分を指導してくださるコーチが、今なお現役選手としてコートの上で見事に戦い、その存在感を証明される姿を見て、子どものコーチへの尊敬と信頼はいっそう深まりました。本や言葉だけで学ぶのではなく、全身で走り挑戦する師の背中を見て育つこと——これこそ、GCMを選んだ私の決断に最も大きな確信を与えてくれる理由です。",
          it: "Vedendo il coach che lo guida ogni giorno giocare ancora da protagonista, da atleta in attività sul campo, e dimostrare la propria presenza, il rispetto e la fiducia di mio figlio verso di lui sono cresciuti ancora di più. Crescere osservando la schiena di un mentore che corre e si mette alla prova con tutto il corpo, anziché imparare solo dai libri o dalle parole — è esattamente questo che mi dà la massima fiducia nella mia decisione di scegliere il GCM.",
          fr: "En voyant le coach qui le guide chaque jour continuer à jouer brillamment en tant que compétiteur en activité sur le court et à affirmer sa présence, le respect et la confiance de mon enfant envers lui se sont encore approfondis. Grandir en regardant le dos d'un mentor qui court et se dépasse de tout son corps, plutôt qu'en apprenant seulement dans les livres ou par les mots — c'est précisément ce qui me donne la plus grande confiance dans ma décision de choisir le GCM.",
          es: "Al ver al entrenador que lo guía cada día seguir jugando de maravilla como competidor en activo en la cancha y demostrar su presencia, el respeto y la confianza de mi hijo hacia él se hicieron aún más profundos. Crecer observando la espalda de un mentor que corre y se desafía con todo su cuerpo, en lugar de aprender solo de los libros o las palabras: es precisamente esto lo que me da la mayor confianza en mi decisión de elegir el GCM.",
        },
      ],
    },
    {
      heading: {
        ko: "코치님들 덕분에 만난 유명 선수들, 그리고 더 커진 GCM에 대한 자부심",
        en: "The famous players we met thanks to our coaches, and a greater pride in GCM",
        zh: "因教练们而得以结识的知名选手，以及对GCM愈发深厚的自豪",
        ja: "コーチたちのおかげで出会えた有名選手たち、そしていっそう大きくなったGCMへの誇り",
        it: "I giocatori famosi che abbiamo incontrato grazie ai nostri coach e un orgoglio ancora più grande per il GCM",
        fr: "Les joueurs célèbres que nous avons rencontrés grâce à nos coachs, et une fierté grandissante pour le GCM",
        es: "Los jugadores famosos que conocimos gracias a nuestros entrenadores y un orgullo aún mayor por el GCM",
      },
      paras: [
        {
          ko: "테니스 실력을 키우기 위해서는 매일 반복 훈련하는 과정도 중요하지만, 좋은 선수가 되기 위해서는 경기 운영을 관찰하고 분석하며 넓은 시야를 갖는 경험이 반드시 필요합니다.",
          en: "Daily repetitive training matters for building tennis skills, but to become a good player, the experience of observing and analyzing match play and gaining a broad perspective is absolutely essential.",
          zh: "要提升网球水平，每天反复训练的过程固然重要，但要成为一名优秀的选手，观察并分析比赛运营、拥有开阔视野的经验也必不可少。",
          ja: "テニスの実力を伸ばすには毎日の反復練習の過程も大切ですが、良い選手になるためには、試合運びを観察・分析し、広い視野を持つ経験が必ず必要です。",
          it: "L'allenamento quotidiano e ripetitivo conta per costruire le abilità nel tennis, ma per diventare un buon atleta è assolutamente indispensabile l'esperienza di osservare e analizzare il gioco delle partite e acquisire una prospettiva ampia.",
          fr: "L'entraînement quotidien et répétitif compte pour développer les compétences au tennis, mais pour devenir un bon joueur, l'expérience d'observer et d'analyser le déroulement des matchs et d'acquérir une large perspective est absolument indispensable.",
          es: "El entrenamiento diario y repetitivo importa para desarrollar las habilidades en el tenis, pero para llegar a ser un buen jugador es absolutamente indispensable la experiencia de observar y analizar el desarrollo de los partidos y adquirir una perspectiva amplia.",
        },
        {
          ko: "이번 제주 여정은 아이에게 그야말로 살아있는 배움터였습니다. 국내 최고 수준의 현역 선수들이 함께하는 GCM 소속답게, 우리 코치님들 덕분에 아이는 코트 주변에서 우리나라를 대표하는 유명 선수들의 경기를 바로 옆에서 관람할 수 있었습니다.",
          en: "This trip to Jeju was, quite literally, a living classroom for my child. True to belonging to GCM — where the country's top active players are part of the fold — thanks to our coaches my child was able to watch, right up close by the courts, the matches of famous players who represent our country.",
          zh: "这趟济州之行对孩子而言，简直就是一座鲜活的课堂。正如隶属于汇聚国内顶尖现役选手的GCM那般，多亏了我们的教练，孩子得以在球场旁近距离观看代表我国的知名选手的比赛。",
          ja: "今回の済州の旅は、子どもにとってまさに生きた学びの場でした。国内最高水準の現役選手たちが集うGCMに所属しているからこそ、私たちのコーチのおかげで、子どもはコートのそばでわが国を代表する有名選手たちの試合をすぐ間近で観戦することができました。",
          it: "Questo viaggio a Jeju è stato, letteralmente, un'aula viva per mio figlio. Da buon membro del GCM — dove fanno parte della squadra i migliori atleti in attività del Paese — grazie ai nostri coach mio figlio ha potuto guardare, proprio accanto ai campi, le partite di giocatori famosi che rappresentano il nostro Paese.",
          fr: "Ce voyage à Jeju a été, au sens propre, une salle de classe vivante pour mon enfant. Fidèle à son appartenance au GCM — où évoluent les meilleurs joueurs en activité du pays — grâce à nos coachs, mon enfant a pu regarder, tout près des courts, les matchs de joueurs célèbres qui représentent notre pays.",
          es: "Este viaje a Jeju fue, literalmente, un aula viva para mi hijo. Fiel a su pertenencia al GCM —donde forman parte los mejores jugadores en activo del país—, gracias a nuestros entrenadores mi hijo pudo ver, justo al lado de las canchas, los partidos de jugadores famosos que representan a nuestro país.",
        },
        {
          ko: "특히 유명한 선수들과 마주할 때도 “우리 코치님 제자예요”라는 한마디에 자연스럽게 친근감을 나누고, 평소 동경하던 대표 선수들과 직접 대화를 나누며 쉽게 가까워지는 특별한 경험도 했습니다.",
          en: "In particular, even when meeting famous players, a single phrase — “I'm a student of our coach” — naturally broke the ice, and he had the special experience of talking directly with the national players he had long admired and growing close to them with ease.",
          zh: "尤其是在与知名选手相遇时，只需一句“我是我们教练的学生”，便自然地拉近了距离；孩子还获得了与平日仰慕的代表选手直接交谈、轻松亲近的特别经历。",
          ja: "特に、有名な選手たちと向き合うときも「私、うちのコーチの教え子なんです」という一言で自然と親しみが生まれ、普段あこがれていた代表選手たちと直接言葉を交わし、気軽に打ち解けるという特別な経験もしました。",
          it: "In particolare, anche incontrando giocatori famosi, una sola frase — «Sono un allievo del nostro coach» — rompeva naturalmente il ghiaccio, e ha vissuto l'esperienza speciale di parlare direttamente con i giocatori della nazionale che aveva sempre ammirato e di avvicinarsi a loro con facilità.",
          fr: "En particulier, même en rencontrant des joueurs célèbres, une simple phrase — « Je suis un élève de notre coach » — brisait naturellement la glace, et il a vécu l'expérience spéciale de parler directement avec les joueurs de l'équipe nationale qu'il admirait depuis longtemps et de se rapprocher d'eux avec aisance.",
          es: "En particular, incluso al encontrarse con jugadores famosos, una sola frase —«Soy alumno de nuestro entrenador»— rompía el hielo de forma natural, y vivió la experiencia especial de hablar directamente con los jugadores de la selección que tanto había admirado y de acercarse a ellos con facilidad.",
        },
        {
          ko: "선수들의 움직임과 전술을 눈으로 담는 것은 물론, 현장에서 빛나는 코치님들의 든든한 존재감 덕분에 아이는 GCM이라는 울타리 안에서 깊은 소속감과 자부심을 느꼈습니다. 코치님이 현장에서 얼마나 멋지고 존경스러운 분들인지 피부로 와닿았기에, 아이의 꿈과 시야도 한 뼘 더 크게 자라날 수 있었습니다.",
          en: "Beyond taking in the players' movement and tactics with his own eyes, thanks to the reassuring presence of his coaches shining on the ground, my child felt a deep sense of belonging and pride within the shelter of GCM. Because he felt first-hand just how admirable and respectable his coaches are in the field, his dreams and his horizons were able to grow a notch wider.",
          zh: "孩子不仅用双眼捕捉选手们的跑动与战术，更因教练们在现场熠熠生辉、令人安心的存在感，而在GCM这片天地中感受到深深的归属感与自豪。正因切身体会到教练们在赛场上是多么出色、多么令人敬佩，孩子的梦想与视野也得以更宽广地成长。",
          ja: "選手たちの動きや戦術を目に焼きつけるのはもちろん、現場で輝くコーチたちの頼もしい存在感のおかげで、子どもはGCMという垣根の中で深い所属感と誇りを感じました。コーチが現場でどれほど素晴らしく尊敬すべき方々であるかを肌で感じ取ったからこそ、子どもの夢も視野も一回り大きく育つことができました。",
          it: "Oltre a cogliere con i propri occhi i movimenti e le tattiche dei giocatori, grazie alla rassicurante presenza dei suoi coach che brillavano sul campo, mio figlio ha provato un profondo senso di appartenenza e orgoglio dentro il riparo del GCM. Proprio perché ha percepito in prima persona quanto siano ammirevoli e degni di rispetto i suoi coach sul campo, i suoi sogni e i suoi orizzonti hanno potuto crescere di un bel po'.",
          fr: "Au-delà de saisir de ses propres yeux les déplacements et les tactiques des joueurs, grâce à la présence rassurante de ses coachs rayonnant sur le terrain, mon enfant a ressenti un profond sentiment d'appartenance et de fierté au sein du refuge qu'est le GCM. Parce qu'il a ressenti de première main à quel point ses coachs sont admirables et respectables sur le terrain, ses rêves et ses horizons ont pu grandir d'un cran.",
          es: "Más allá de captar con sus propios ojos los movimientos y las tácticas de los jugadores, gracias a la tranquilizadora presencia de sus entrenadores brillando sobre el terreno, mi hijo sintió un profundo sentido de pertenencia y orgullo dentro del amparo del GCM. Precisamente porque percibió de primera mano lo admirables y respetables que son sus entrenadores en la cancha, sus sueños y sus horizontes pudieron crecer un buen trecho.",
        },
      ],
      gallery: [
        "/img/parent-review/1.webp",
        "/img/parent-review/2.webp",
        "/img/parent-review/3.webp",
        "/img/parent-review/4.webp",
        "/img/parent-review/5.webp",
        "/img/parent-review/6.webp",
        "/img/parent-review/7.webp",
        "/img/parent-review/8.webp",
        "/img/parent-review/9.webp",
        "/img/parent-review/10.webp",
        "/img/parent-review/11.webp",
      ],
    },
    {
      heading: {
        ko: "든든한 GCM 어드바이저 코칭팀과 함께해 더욱 안심되는 아카데미",
        en: "An academy made all the more reassuring by GCM's dependable advisory coaching team",
        zh: "有GCM可靠的顾问教练团队相伴，让人更加安心的学院",
        ja: "頼もしいGCMのアドバイザーコーチングチームが共にいるからこそ、より安心できるアカデミー",
        it: "Un'accademia resa ancora più rassicurante dall'affidabile team di coaching e consulenza del GCM",
        fr: "Une académie rendue d'autant plus rassurante par l'équipe fiable de coaching et de conseil du GCM",
        es: "Una academia aún más tranquilizadora gracias al confiable equipo de coaching y asesoría del GCM",
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
          ko: "훈련을 하루 참여하지 못한 것은 일시적인 공백일 수 있지만, 제주도에서 얻은 감동과 동기부여는 그 무엇과도 바꿀 수 없는 소중한 자산이 되었습니다. 다른 학부모님들께서도 고민되실 때 GCM의 지도와 교육관을 믿고 용기 내어보시길 추천하고 싶습니다.",
          en: "Missing a single day of training may be a momentary gap, but the inspiration and motivation gained in Jeju became a precious asset that nothing could replace. To other parents who may be hesitating, I would recommend trusting GCM's guidance and educational philosophy and finding the courage to take the step.",
          zh: "缺席一天训练或许只是一时的空白，但在济州岛收获的感动与动力，却成了任何东西都无法替代的宝贵财富。若其他家长也在犹豫，我想推荐大家信任GCM的指导与教育理念，鼓起勇气去尝试。",
          ja: "練習を一日参加できなかったことは一時的な空白かもしれませんが、済州島で得た感動と動機づけは、何ものにも代えがたい貴重な財産となりました。ほかの保護者の方々も迷われたときには、GCMの指導と教育観を信じて、勇気を出してみられることをおすすめしたいです。",
          it: "Saltare un solo giorno di allenamento può essere una pausa momentanea, ma l'ispirazione e la motivazione ricevute a Jeju sono diventate un bene prezioso che nulla potrebbe sostituire. Agli altri genitori che fossero indecisi, consiglierei di fidarsi della guida e della visione educativa del GCM e di trovare il coraggio di fare il passo.",
          fr: "Manquer une seule journée d'entraînement n'est peut-être qu'un vide passager, mais l'inspiration et la motivation gagnées à Jeju sont devenues un bien précieux que rien ne pourrait remplacer. Aux autres parents qui hésiteraient, je recommanderais de faire confiance à l'accompagnement et à la vision éducative du GCM et de trouver le courage de se lancer.",
          es: "Faltar a un solo día de entrenamiento quizá sea un vacío momentáneo, pero la inspiración y la motivación obtenidas en Jeju se convirtieron en un bien precioso que nada podría reemplazar. A los demás padres que estén dudando, les recomendaría confiar en la guía y la filosofía educativa del GCM y reunir el valor para dar el paso.",
        },
      ],
    },
  ],
  quote: {
    ko: "GCM에서는 기술적 훈련을 넘어, 아이의 태도와 마음, 그리고 넓은 시야까지 온전히 성장의 판을 열어주는 특별한 교육·훈련이 진행됩니다.",
    en: "At GCM, beyond technical training, a special kind of education and training unfolds — one that fully opens a stage of growth for a child's attitude, heart, and even a broad perspective.",
    zh: "在GCM，进行的是一种超越技术训练的特别教育与训练——它为孩子的态度、心灵乃至开阔的视野，完整地打开成长的舞台。",
    ja: "GCMでは、技術的な訓練を超えて、子どもの態度や心、そして広い視野までをまるごと育てる成長の場を開く、特別な教育・訓練が行われます。",
    it: "Al GCM, oltre all'allenamento tecnico, si svolge un'educazione e un addestramento speciali, capaci di aprire pienamente un palcoscenico di crescita per l'atteggiamento, il cuore e perfino l'ampia prospettiva di un bambino.",
    fr: "Au GCM, au-delà de l'entraînement technique, se déroule une éducation et une formation particulières, qui ouvrent pleinement une scène de croissance pour l'attitude, le cœur et même la large perspective d'un enfant.",
    es: "En el GCM, más allá del entrenamiento técnico, se desarrolla una educación y una formación especiales que abren plenamente un escenario de crecimiento para la actitud, el corazón e incluso la amplia perspectiva de un niño.",
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
      ko: "값진 동메달을 획득하신 오성국 코치님께 다시 한번 축하를 드리며, 결과와 상관없이 여전히 현장에서 가장 빛나는 멋진 경기를 보여주신 코치님들과 이 모든 뜻깊은 경험을 가능하게 해준 GCM 테니스 아카데미에 진심으로 감사드립니다.",
      en: "Congratulations once again to Coach Oh Seong-gook on his well-deserved bronze medal, and my heartfelt thanks to the coaches who, regardless of the result, still delivered the most brilliant play on the ground, and to GCM Tennis Academy for making all of these meaningful experiences possible.",
      zh: "再次向赢得宝贵铜牌的Oh Seong-gook教练表示祝贺，也由衷感谢无论结果如何、依然在赛场上奉献出最耀眼精彩比赛的教练们，以及让这一切意义非凡的经历成为可能的GCM网球学院。",
      ja: "価値ある銅メダルを獲得されたOh Seong-gookコーチに、あらためてお祝いを申し上げます。そして、結果にかかわらず、今なお現場で最も輝く見事な試合を見せてくださったコーチたち、そしてこのすべての意義深い経験を可能にしてくれたGCMテニスアカデミーに、心から感謝いたします。",
      it: "Congratulazioni ancora una volta al coach Oh Seong-gook per la sua meritata medaglia di bronzo, e il mio grazie di cuore ai coach che, a prescindere dal risultato, hanno comunque offerto il gioco più brillante sul campo, e all'accademia di tennis GCM per aver reso possibili tutte queste esperienze significative.",
      fr: "Félicitations encore une fois au coach Oh Seong-gook pour sa médaille de bronze amplement méritée, et mes remerciements les plus sincères aux coachs qui, quel que soit le résultat, ont tout de même offert le jeu le plus éclatant sur le terrain, ainsi qu'à l'académie de tennis GCM pour avoir rendu possibles toutes ces expériences riches de sens.",
      es: "Felicidades una vez más al entrenador Oh Seong-gook por su merecida medalla de bronce, y mi más sincero agradecimiento a los entrenadores que, al margen del resultado, siguieron ofreciendo el juego más brillante sobre el terreno, y a la academia de tenis GCM por hacer posibles todas estas experiencias tan significativas.",
    },
  ],
};
