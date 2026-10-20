import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { pick, type Locale } from "@/lib/i18n-pick";

type Block = { label: string; body: string };
type Chapter = { no: string; eyebrow: string; title: string; lead: string; blocks: Block[]; outro: string };

function getChapters(locale: Locale): Chapter[] {
  return [
    {
      no: "01",
      eyebrow: "Visual & Vibe",
      title: pick(locale, {
        ko: "말하지 않아도 드러나는 건강한 자신감.",
        en: "A healthy confidence that shows without a word.",
        zh: "无需言语便自然流露的健康自信。",
        ja: "言葉にしなくても伝わる、健やかな自信。",
        it: "Una sicurezza sana che si percepisce senza una parola.",
        fr: "Une assurance saine qui se révèle sans un mot.",
        es: "Una confianza sana que se nota sin decir una palabra.",
      }),
      lead: pick(locale, {
        ko: "테니스에는 다른 스포츠와는 조금 다른 미학이 있습니다. 코트 위에서 만들어지는 균형 잡힌 움직임, 자연스럽게 다듬어지는 체형, 그리고 시대를 초월한 클래식한 스타일.",
        en: "Tennis carries an aesthetic unlike any other sport. The balanced movement built on court, a physique that refines itself naturally, and a classic style that transcends the eras.",
        zh: "网球拥有不同于其他运动的独特美学。球场上练就的均衡身姿，自然雕琢的体态，以及超越时代的经典风格。",
        ja: "テニスには、ほかのスポーツとは少し違う美学があります。コートの上で培われるバランスの取れた動き、自然と整っていく体つき、そして時代を超えて愛されるクラシックなスタイル。",
        it: "Il tennis porta con sé un'estetica diversa da qualsiasi altro sport. Il movimento equilibrato costruito in campo, un fisico che si affina con naturalezza e uno stile classico che attraversa le epoche.",
        fr: "Le tennis possède une esthétique différente de tout autre sport. Le mouvement équilibré forgé sur le court, une silhouette qui s'affine naturellement et un style classique qui traverse les époques.",
        es: "El tenis posee una estética distinta a la de cualquier otro deporte. El movimiento equilibrado que se forja en la pista, una figura que se perfila con naturalidad y un estilo clásico que trasciende las épocas.",
      }),
      blocks: [
        {
          label: pick(locale, {
            ko: "온몸을 사용하는 다이내믹한 움직임",
            en: "Dynamic, full-body movement",
            zh: "调动全身的动感律动",
            ja: "全身を使うダイナミックな動き",
            it: "Un movimento dinamico che coinvolge tutto il corpo",
            fr: "Un mouvement dynamique de tout le corps",
            es: "Un movimiento dinámico que involucra todo el cuerpo",
          }),
          body: pick(locale, {
            ko: "끊임없이 움직이고, 멈추고, 방향을 전환하며 공을 따라가는 테니스는 전신을 사용하는 스포츠입니다. 꾸준한 플레이는 보다 탄탄하고 균형 잡힌 몸을 만들어가는 즐거운 루틴이 됩니다.",
            en: "Constantly moving, stopping, and changing direction to chase the ball, tennis is a sport that engages the whole body. Playing regularly becomes an enjoyable routine that builds a leaner, more balanced physique.",
            zh: "不断地移动、停顿、变向去追逐来球，网球是一项调动全身的运动。规律的练习会成为令人愉悦的日常，塑造更紧致、更均衡的身材。",
            ja: "絶えず動き、止まり、方向を変えながらボールを追うテニスは、全身を使うスポーツです。続けてプレーすることが、より引き締まったバランスのよい体をつくる楽しい習慣になります。",
            it: "In continuo movimento, fermandosi e cambiando direzione per inseguire la palla, il tennis è uno sport che coinvolge tutto il corpo. Giocare con regolarità diventa una piacevole abitudine che modella un fisico più tonico ed equilibrato.",
            fr: "Toujours en mouvement, à s'arrêter et à changer de direction pour suivre la balle, le tennis est un sport qui sollicite tout le corps. Jouer régulièrement devient un rituel agréable qui façonne une silhouette plus tonique et équilibrée.",
            es: "En constante movimiento, deteniéndose y cambiando de dirección para perseguir la pelota, el tenis es un deporte que involucra todo el cuerpo. Jugar con regularidad se convierte en una rutina placentera que esculpe una figura más firme y equilibrada.",
          }),
        },
        {
          label: pick(locale, {
            ko: "시대를 초월하는 Tennis Style",
            en: "A tennis style that transcends the eras",
            zh: "超越时代的 Tennis Style",
            ja: "時代を超えるTennis Style",
            it: "Uno stile tennis che attraversa le epoche",
            fr: "Un style tennis qui traverse les époques",
            es: "Un estilo tenis que trasciende las épocas",
          }),
          body: pick(locale, {
            ko: "화이트 스커트, 폴로 셔츠, 캡과 라켓. 테니스가 오랫동안 하나의 라이프스타일로 사랑받아 온 이유에는 코트 밖에서도 이어지는 고유한 미학이 있습니다.",
            en: "A white skirt, a polo shirt, a cap and a racket. Part of why tennis has long been loved as a lifestyle is an aesthetic all its own that carries on well beyond the court.",
            zh: "白色短裙、Polo 衫、球帽与球拍。网球长久以来被视为一种生活方式而备受喜爱，正源于一种延续到球场之外的独特美学。",
            ja: "ホワイトのスカート、ポロシャツ、キャップとラケット。テニスが長らくひとつのライフスタイルとして愛されてきた理由には、コートの外にも続く独自の美学があります。",
            it: "Una gonna bianca, una polo, un cappellino e una racchetta. Parte del motivo per cui il tennis è amato da tempo come stile di vita è un'estetica tutta sua che prosegue ben oltre il campo.",
            fr: "Une jupe blanche, un polo, une casquette et une raquette. Si le tennis est depuis longtemps aimé comme un mode de vie, c'est en partie grâce à une esthétique qui lui est propre et qui se prolonge bien au-delà du court.",
            es: "Una falda blanca, un polo, una gorra y una raqueta. Parte de por qué el tenis se ha amado durante tanto tiempo como estilo de vida es una estética propia que continúa mucho más allá de la pista.",
          }),
        },
      ],
      outro: pick(locale, {
        ko: "운동을 하는 순간조차, 당신의 라이프스타일이 됩니다.",
        en: "Even the moment you move becomes part of your lifestyle.",
        zh: "即使是挥拍运动的瞬间，也成为你生活方式的一部分。",
        ja: "体を動かすその瞬間さえ、あなたのライフスタイルになります。",
        it: "Persino l'istante in cui ti muovi diventa parte del tuo stile di vita.",
        fr: "Même l'instant où vous bougez devient une part de votre mode de vie.",
        es: "Incluso el momento en que te mueves se convierte en parte de tu estilo de vida.",
      }),
    },
    {
      no: "02",
      eyebrow: "Work & Mind",
      title: pick(locale, {
        ko: "코트에서 만든 자신감은 일상에서도 계속됩니다.",
        en: "The confidence built on court carries into everyday life.",
        zh: "在球场上建立的自信，会延续到日常生活中。",
        ja: "コートで培った自信は、日常でも続いていきます。",
        it: "La sicurezza costruita in campo prosegue nella vita di tutti i giorni.",
        fr: "L'assurance forgée sur le court se prolonge dans la vie quotidienne.",
        es: "La confianza forjada en la pista continúa en la vida cotidiana.",
      }),
      lead: pick(locale, {
        ko: "테니스는 단순히 머리를 비우는 운동이 아닙니다. 빠르게 판단하고, 과감하게 움직이고, 실수를 털어내고 다시 다음 포인트에 집중하는 경험이 반복될수록 생각과 태도에도 긍정적인 변화가 생깁니다.",
        en: "Tennis is more than a way to clear your head. As you repeat the experience of judging quickly, moving boldly, shaking off mistakes and refocusing on the next point, positive changes take root in how you think and carry yourself.",
        zh: "网球不只是放空头脑的运动。当你一次次快速判断、果断移动、放下失误并重新专注于下一分，思维方式与处世态度也会悄然向好。",
        ja: "テニスは単に頭を空にするための運動ではありません。素早く判断し、思い切って動き、ミスを引きずらず次のポイントに集中する——その経験を重ねるほど、考え方や姿勢にも前向きな変化が生まれます。",
        it: "Il tennis è più di un modo per schiarirsi le idee. Ripetendo l'esperienza di decidere in fretta, muoverti con decisione, lasciarti alle spalle gli errori e riconcentrarti sul punto successivo, cambiamenti positivi mettono radici nel tuo modo di pensare e di porti.",
        fr: "Le tennis est bien plus qu'une façon de se vider la tête. À force de juger vite, d'agir avec audace, de laisser filer les erreurs et de vous reconcentrer sur le point suivant, des changements positifs s'installent dans votre façon de penser et de vous comporter.",
        es: "El tenis es mucho más que una forma de despejar la mente. Al repetir la experiencia de decidir rápido, moverte con decisión, soltar los errores y volver a concentrarte en el siguiente punto, arraigan cambios positivos en tu manera de pensar y de comportarte.",
      }),
      blocks: [
        {
          label: pick(locale, {
            ko: "몰입이 만드는 선명한 리셋",
            en: "A clear reset born of full focus",
            zh: "专注带来的清晰重置",
            ja: "没入が生む鮮やかなリセット",
            it: "Un reset netto che nasce dalla piena concentrazione",
            fr: "Une remise à zéro nette née d'une concentration totale",
            es: "Un reinicio nítido que nace de la plena concentración",
          }),
          body: pick(locale, {
            ko: "빠르게 다가오는 공에 온전히 집중하는 순간, 업무와 일정으로 복잡했던 생각은 잠시 멈춥니다. 코트에서의 깊은 몰입은 지친 하루에 새로운 에너지를 더하고, 다시 일상으로 돌아갈 여유를 만들어줍니다.",
            en: "The moment you give your full attention to an incoming ball, the thoughts tangled up in work and schedules go quiet. Deep focus on court adds fresh energy to a tiring day and creates the space to return to daily life renewed.",
            zh: "当你全神贯注于飞速而来的球，那些被工作和日程缠绕的思绪便暂时安静下来。球场上的深度专注，为疲惫的一天注入新的能量，让你以焕然一新的状态回到日常。",
            ja: "速く向かってくるボールに全神経を注ぐ瞬間、仕事や予定で絡まっていた思考はひととき静まります。コートでの深い没入は、疲れた一日に新たなエネルギーを加え、ふたたび日常へ戻るゆとりを生み出します。",
            it: "Nel momento in cui dedichi tutta la tua attenzione a una palla in arrivo, i pensieri aggrovigliati tra lavoro e impegni si fanno silenzio. La concentrazione profonda in campo infonde nuova energia a una giornata faticosa e crea lo spazio per tornare alla vita quotidiana rigenerati.",
            fr: "À l'instant où vous accordez toute votre attention à une balle qui arrive, les pensées emmêlées dans le travail et les agendas se taisent. La concentration profonde sur le court insuffle une énergie nouvelle à une journée épuisante et crée l'espace pour revenir à la vie quotidienne, régénéré.",
            es: "En el instante en que prestas toda tu atención a una pelota que llega, los pensamientos enredados en el trabajo y las agendas se aquietan. La concentración profunda en la pista aporta energía nueva a un día agotador y crea el espacio para volver a la vida cotidiana renovado.",
          }),
        },
        {
          label: pick(locale, {
            ko: "작은 성공이 쌓이는 자신감",
            en: "Confidence built from small wins",
            zh: "由小小胜利积累的自信",
            ja: "小さな成功が積み重なる自信",
            it: "Una sicurezza costruita sulle piccole vittorie",
            fr: "Une assurance bâtie sur de petites victoires",
            es: "Una confianza construida a partir de pequeñas victorias",
          }),
          body: pick(locale, {
            ko: "어제는 어려웠던 샷이 오늘은 들어가고, 조금씩 길어지는 랠리와 좋아지는 플레이를 직접 경험합니다. 눈에 보이는 성장은 자연스럽게 성취감이 되고, 코트에서 얻은 자신감은 일상에서도 새로운 도전을 즐기는 태도로 이어집니다.",
            en: "A shot that felt impossible yesterday lands today, and you experience rallies that stretch longer and play that keeps improving. Visible progress naturally becomes a sense of achievement, and the confidence gained on court grows into an appetite for new challenges in everyday life.",
            zh: "昨天还打不出的球，今天稳稳落入界内；回合渐渐变长，表现不断提升，你都亲身感受得到。看得见的成长自然化作成就感，而在球场上收获的自信，也延伸为日常中乐于迎接新挑战的态度。",
            ja: "昨日は難しかったショットが今日は決まり、少しずつ長くなるラリーと上達していくプレーを、自分の体で実感します。目に見える成長は自然と達成感になり、コートで得た自信は、日常でも新しい挑戦を楽しむ姿勢へとつながります。",
            it: "Un colpo che ieri sembrava impossibile oggi entra, e vivi scambi che si allungano e un gioco che continua a migliorare. I progressi visibili diventano naturalmente senso di realizzazione, e la sicurezza conquistata in campo si trasforma in voglia di nuove sfide nella vita di tutti i giorni.",
            fr: "Un coup qui semblait impossible hier passe aujourd'hui, et vous vivez des échanges qui s'allongent et un jeu qui ne cesse de progresser. Les progrès visibles deviennent naturellement un sentiment d'accomplissement, et l'assurance acquise sur le court se mue en envie de relever de nouveaux défis au quotidien.",
            es: "Un golpe que ayer parecía imposible hoy entra, y vives peloteos que se alargan y un juego que sigue mejorando. El progreso visible se convierte con naturalidad en sensación de logro, y la confianza ganada en la pista se transforma en ganas de afrontar nuevos retos en la vida diaria.",
          }),
        },
        {
          label: "Think Fast. Move Smart.",
          body: pick(locale, {
            ko: "공의 방향을 읽고, 순간적으로 판단하고, 결과에 따라 다음 플레이를 준비합니다. 실수에 오래 머물지 않고 다음 포인트를 준비하는 것. 테니스가 만들어내는 집중력과 빠른 전환의 감각은 코트 밖에서도 더 선명하고 능동적인 하루를 만들어갑니다.",
            en: "You read the ball's direction, judge in an instant, and prepare the next play based on the outcome. Never dwelling on a mistake, always readying the next point. The focus and quick switching that tennis develops shape sharper, more proactive days off the court too.",
            zh: "读出来球的方向，在瞬间做出判断，再根据结果准备下一拍。不在失误上停留，始终为下一分做好准备。网球锻造的专注力与快速切换的敏锐，也让球场之外的每一天更加清晰而主动。",
            ja: "ボールの方向を読み、瞬時に判断し、結果に応じて次のプレーを準備する。ミスに長くとどまらず、次のポイントに備えること。テニスが育む集中力と素早い切り替えの感覚は、コートの外でも、より鮮やかで能動的な一日をつくっていきます。",
            it: "Leggi la direzione della palla, decidi in un istante e prepari il colpo successivo in base all'esito. Senza mai soffermarti su un errore, sempre pronto al punto seguente. La concentrazione e la rapidità di adattamento che il tennis sviluppa danno forma anche fuori dal campo a giornate più lucide e proattive.",
            fr: "Vous lisez la direction de la balle, jugez en un instant et préparez le coup suivant selon le résultat. Sans jamais vous attarder sur une erreur, toujours prêt pour le point suivant. La concentration et la capacité de bascule rapide que développe le tennis façonnent aussi, en dehors du court, des journées plus nettes et plus proactives.",
            es: "Lees la dirección de la pelota, decides en un instante y preparas el siguiente golpe según el resultado. Sin detenerte nunca en un error, siempre listo para el siguiente punto. La concentración y la rapidez de cambio que desarrolla el tenis dan forma también, fuera de la pista, a días más nítidos y proactivos.",
          }),
        },
      ],
      outro: "Better on Court. Better in Life.",
    },
    {
      no: "03",
      eyebrow: "Society & Network",
      title: pick(locale, {
        ko: "좋은 사람들은 좋은 방식으로 연결됩니다.",
        en: "Good people connect in good ways.",
        zh: "美好的人，以美好的方式彼此相连。",
        ja: "良い人は、良いかたちでつながっていきます。",
        it: "Le persone giuste si incontrano nei modi giusti.",
        fr: "Les belles personnes se lient de belle manière.",
        es: "Las buenas personas se conectan de buenas maneras.",
      }),
      lead: pick(locale, {
        ko: "테니스의 진짜 매력은 게임이 끝난 뒤에도 이어집니다. 나이도, 직업도, 배경도 다른 사람들이 하나의 코트에서 만나 같은 게임을 즐깁니다. 처음에는 랠리로 시작된 관계가 자연스럽게 새로운 커뮤니티로 이어집니다.",
        en: "The real charm of tennis lasts long after the game ends. People of different ages, professions, and backgrounds meet on a single court and enjoy the same game. A relationship that begins with a rally naturally grows into a new community.",
        zh: "网球真正的魅力，在比赛结束之后依然延续。年龄、职业、背景各不相同的人，在同一片球场相遇，享受同一场比赛。从一次对打开始的关系，自然而然地汇聚成一个新的社群。",
        ja: "テニスの本当の魅力は、ゲームが終わったあとにも続きます。年齢も、職業も、背景も異なる人たちが、ひとつのコートで出会い、同じゲームを楽しむ。ラリーから始まった関係は、やがて自然に新しいコミュニティへと広がっていきます。",
        it: "Il vero fascino del tennis dura a lungo dopo la fine della partita. Persone di età, professioni e provenienze diverse si incontrano su un unico campo e condividono lo stesso gioco. Un rapporto che nasce da uno scambio cresce con naturalezza in una nuova comunità.",
        fr: "Le vrai charme du tennis se prolonge bien après la fin du match. Des personnes d'âges, de métiers et d'horizons différents se retrouvent sur un même court et partagent le même jeu. Une relation née d'un échange grandit naturellement en une nouvelle communauté.",
        es: "El verdadero encanto del tenis perdura mucho después de que termina el partido. Personas de distintas edades, profesiones y orígenes se encuentran en una misma pista y disfrutan del mismo juego. Una relación que empieza con un peloteo crece con naturalidad hasta formar una nueva comunidad.",
      }),
      blocks: [
        {
          label: "Healthy Social Life",
          body: pick(locale, {
            ko: "함께 운동하고, 경쟁하고, 웃으며 건강한 에너지를 나누는 시간. 코트 위에서 시작된 만남이 일상의 활력으로 이어집니다.",
            en: "Time to move, compete, and laugh together, sharing healthy energy. Connections made on the court carry over into everyday life.",
            zh: "一起运动、一起竞技、一起欢笑，分享健康能量的时光。球场上结下的缘分，化作日常生活的活力。",
            ja: "ともに体を動かし、競い合い、笑いながら健やかなエネルギーを分かち合う時間。コートの上で始まった出会いが、日々の活力へとつながります。",
            it: "Il tempo per muoversi, competere e ridere insieme, condividendo energia sana. Gli incontri nati in campo diventano vitalità nella vita di tutti i giorni.",
            fr: "Le temps de bouger, de rivaliser et de rire ensemble, en partageant une énergie saine. Les rencontres nées sur le court deviennent une vitalité au quotidien.",
            es: "El tiempo para moverse, competir y reír juntos, compartiendo energía sana. Los encuentros que nacen en la pista se transforman en vitalidad en la vida diaria.",
          }),
        },
        {
          label: "Respect Across the Net",
          body: pick(locale, {
            ko: "상대를 존중하는 인사, 좋은 플레이에 보내는 박수, 승패를 받아들이는 태도. 테니스는 실력만큼이나 코트 위의 매너를 중요하게 생각하는 스포츠입니다.",
            en: "A respectful greeting to your opponent, applause for a great play, and grace in victory or defeat. Tennis is a sport that values court manners just as much as skill.",
            zh: "向对手致以尊重的问候，为精彩的一球送上掌声，坦然接受胜负。网球是一项既看重实力、也同样看重球场礼仪的运动。",
            ja: "相手を敬う挨拶、素晴らしいプレーに送る拍手、勝敗を受け入れる姿勢。テニスは、実力と同じくらいコート上のマナーを大切にするスポーツです。",
            it: "Un saluto rispettoso all'avversario, un applauso per una grande giocata e signorilità nella vittoria come nella sconfitta. Il tennis è uno sport che tiene alle buone maniere in campo quanto all'abilità.",
            fr: "Un salut respectueux à l'adversaire, des applaudissements pour un beau point et de l'élégance dans la victoire comme dans la défaite. Le tennis est un sport qui accorde autant d'importance aux bonnes manières sur le court qu'au talent.",
            es: "Un saludo respetuoso al rival, un aplauso por una gran jugada y elegancia tanto en la victoria como en la derrota. El tenis es un deporte que valora los buenos modales en la pista tanto como la habilidad.",
          }),
        },
      ],
      outro: pick(locale, {
        ko: "그리고 GCM에서는 그 연결이 코트 밖에서도 계속됩니다.",
        en: "And at GCM, that connection continues well beyond the court.",
        zh: "而在 GCM，这份连接在球场之外依然延续。",
        ja: "そしてGCMでは、そのつながりがコートの外でも続いていきます。",
        it: "E al GCM quel legame continua ben oltre il campo.",
        fr: "Et au GCM, ce lien se poursuit bien au-delà du court.",
        es: "Y en GCM, esa conexión continúa mucho más allá de la pista.",
      }),
    },
  ];
}

function getClosing(locale: Locale): string[] {
  return [
    pick(locale, {
      ko: "남들과 다른 일상은 거창한 변화에서 시작되지 않습니다.",
      en: "An everyday unlike anyone else's doesn't begin with a grand change.",
      zh: "与众不同的日常，并非始于一场宏大的改变。",
      ja: "人と違う日常は、大げさな変化から始まるわけではありません。",
      it: "Una quotidianità diversa da ogni altra non comincia con un grande cambiamento.",
      fr: "Un quotidien différent de tous les autres ne commence pas par un grand bouleversement.",
      es: "Una vida cotidiana distinta a la de los demás no empieza con un gran cambio.",
    }),
    pick(locale, {
      ko: "퇴근 후 코트에 서는 시간. 라켓을 타고 전해지는 선명한 타구감. 한 포인트에 온전히 몰입하는 순간.",
      en: "The hour you spend on court after work. The crisp feel of the ball traveling up through the racket. The moment you lose yourself completely in a single point.",
      zh: "下班后站上球场的时光。击球那一刻经由球拍清晰传来的触感。全情投入于一分的瞬间。",
      ja: "仕事を終えてコートに立つ時間。ラケットを伝わってくる鮮やかな打球感。ひとつのポイントに全身で没入する瞬間。",
      it: "L'ora che trascorri in campo dopo il lavoro. La sensazione nitida della palla che risale lungo la racchetta. L'istante in cui ti perdi del tutto in un singolo punto.",
      fr: "L'heure passée sur le court après le travail. La sensation nette de la balle qui remonte dans la raquette. L'instant où vous vous perdez entièrement dans un seul point.",
      es: "La hora que pasas en la pista después del trabajo. La sensación nítida de la pelota que sube por la raqueta. El instante en que te entregas por completo a un solo punto.",
    }),
    pick(locale, {
      ko: "복잡했던 하루는 잠시 멈추고 몸과 생각은 다시 가벼워집니다.",
      en: "A hectic day pauses for a while, and body and mind grow light again.",
      zh: "纷杂的一天暂且停歇，身体与思绪重新变得轻盈。",
      ja: "慌ただしかった一日はしばし止まり、体も思考もふたたび軽くなります。",
      it: "Una giornata frenetica si ferma per un attimo e corpo e mente tornano leggeri.",
      fr: "Une journée trépidante s'arrête un moment, et le corps comme l'esprit s'allègent de nouveau.",
      es: "Un día ajetreado se detiene por un momento, y el cuerpo y la mente vuelven a aligerarse.",
    }),
    pick(locale, {
      ko: "꾸준히 다듬어지는 몸, 시간이 지나도 변하지 않는 테니스의 클래식한 스타일, 그리고 코트 위에서 자연스럽게 만나게 되는 좋은 사람들.",
      en: "A body steadily refined, the timeless classic style of tennis that never fades, and the good people you naturally meet on court.",
      zh: "日渐雕琢的身体，历久弥新、从不褪色的网球经典风格，以及你在球场上自然结识的好友。",
      ja: "着実に整っていく体、時を経ても色あせないテニスのクラシックなスタイル、そしてコートの上で自然と出会う良い人たち。",
      it: "Un corpo che si affina costantemente, lo stile classico e senza tempo del tennis che non sbiadisce mai e le belle persone che incontri con naturalezza in campo.",
      fr: "Un corps qui s'affine sans cesse, le style classique et intemporel du tennis qui ne se démode jamais, et les belles personnes que l'on rencontre naturellement sur le court.",
      es: "Un cuerpo que se perfila sin pausa, el estilo clásico y atemporal del tenis que nunca se desvanece, y las buenas personas que conoces con naturalidad en la pista.",
    }),
    pick(locale, {
      ko: "테니스는 단순히 하나의 운동을 배우는 것이 아닙니다.",
      en: "Tennis is not simply learning one more sport.",
      zh: "网球，绝不只是学会又一项运动。",
      ja: "テニスは、単にひとつのスポーツを覚えることではありません。",
      it: "Il tennis non è semplicemente imparare un altro sport.",
      fr: "Le tennis n'est pas simplement l'apprentissage d'un sport de plus.",
      es: "El tenis no es simplemente aprender un deporte más.",
    }),
  ];
}

export async function AmateurLifestyle() {
  const locale = await getLocale();
  const chapters = getChapters(locale);
  const closing = getClosing(locale);

  return (
    <>
      {/* 인트로 히어로 */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
              {pick(locale, {
                ko: "테니스를 처음 시작하는 분께",
                en: "For those just starting tennis",
                zh: "致初次拿起球拍的你",
                ja: "テニスをこれから始める方へ",
                it: "Per chi muove i primi passi nel tennis",
                fr: "Pour celles et ceux qui débutent le tennis",
                es: "Para quienes empiezan a jugar al tenis",
              })}
            </span>
            <p className="mt-5 font-display text-xs font-bold uppercase tracking-[0.3em] text-[#d4ff3d]">
              The New Standard of Your Life
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl break-keep font-display text-3xl font-black leading-[1.2] text-white sm:text-4xl">
              {pick(locale, {
                ko: "일상의 기준을 바꾸는",
                en: "The most refined way to",
                zh: "重塑日常标准的",
                ja: "日常の基準を変える、",
                it: "Il modo più raffinato per",
                fr: "La façon la plus raffinée de",
                es: "La forma más refinada de",
              })}
              <br />
              {pick(locale, {
                ko: "가장 세련된 방법.",
                en: "raise your everyday standard.",
                zh: "最优雅的方式。",
                ja: "もっとも洗練された方法。",
                it: "elevare lo standard di ogni giorno.",
                fr: "élever le niveau de votre quotidien.",
                es: "elevar el nivel de tu día a día.",
              })}
            </h2>
            <p className="mx-auto mt-6 max-w-xl break-keep text-base leading-relaxed text-white/85">
              {pick(locale, {
                ko: "퇴근 후 반복되는 일상에서 벗어나 코트에 서는 순간. 몸은 움직이고, 생각은 가벼워지고, 새로운 사람들이 연결됩니다. 테니스는 단순한 운동을 넘어 당신의 일상을 더 건강하고 감각적으로 만드는 라이프스타일입니다.",
                en: "The moment you step onto the court and break free from the after-work routine. Your body moves, your mind lightens, and new people connect. More than just exercise, tennis is a lifestyle that makes your everyday healthier and more refined.",
                zh: "下班后走出日复一日的循环，站上球场的那一刻。身体舒展，思绪轻盈，新的缘分悄然相连。网球不只是运动，更是一种让你的日常更健康、更有品味的生活方式。",
                ja: "仕事を終え、繰り返される日常から抜け出してコートに立つ瞬間。体は動き、思考は軽くなり、新しい人とのつながりが生まれます。テニスは単なる運動を超えて、あなたの日常をより健やかで感性豊かにするライフスタイルです。",
                it: "L'istante in cui metti piede in campo e ti lasci alle spalle la routine del dopo-lavoro. Il corpo si muove, la mente si alleggerisce e nascono nuove relazioni. Più di un semplice allenamento, il tennis è uno stile di vita che rende la tua quotidianità più sana e raffinata.",
                fr: "L'instant où vous entrez sur le court et vous libérez de la routine d'après le travail. Le corps bouge, l'esprit s'allège et de nouvelles rencontres se nouent. Plus qu'un simple exercice, le tennis est un mode de vie qui rend votre quotidien plus sain et plus raffiné.",
                es: "El instante en que pisas la pista y te liberas de la rutina de después del trabajo. El cuerpo se mueve, la mente se aligera y surgen nuevas conexiones. Más que un simple ejercicio, el tenis es un estilo de vida que hace tu día a día más saludable y refinado.",
              })}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 3개 챕터 */}
      {chapters.map((c, ci) => (
        <Section key={c.no} tone={ci % 2 === 1 ? "muted" : "default"}>
          <SectionHeading eyebrow={`${c.no}. ${c.eyebrow}`} title={c.title} lead={c.lead} wideLead />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.blocks.map((b, i) => (
              <Reveal
                key={b.label}
                delay={i * 60}
                className={`rounded-2xl border border-line bg-card/40 p-6 ${
                  c.blocks.length === 2 && i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="break-keep font-display text-lg font-bold text-court-bright">{b.label}</h3>
                <p className="mt-3 break-keep text-sm leading-relaxed text-ink/85">{b.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 border-l-2 border-court pl-4">
            <p className="break-keep font-display text-lg font-bold text-ink sm:text-xl">{c.outro}</p>
          </Reveal>
        </Section>
      ))}

      {/* 마무리 매니페스토 */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal className="mx-auto max-w-2xl text-white">
            <h2 className="break-keep font-display text-3xl font-black leading-[1.2] sm:text-4xl">
              THE NEW STANDARD
              <br />
              OF YOUR LIFE.
            </h2>
            <div className="mt-8 space-y-4 text-white/85">
              {closing.map((p) => (
                <p key={p} className="break-keep leading-relaxed">
                  {p}
                </p>
              ))}
              <p className="break-keep font-display text-lg font-bold text-[#d4ff3d]">
                {pick(locale, {
                  ko: "더 건강하게 움직이고, 더 깊게 몰입하고, 더 좋은 방식으로 사람들과 연결되는 것.",
                  en: "Moving healthier, immersing deeper, and connecting with people in better ways.",
                  zh: "更健康地舒展身体，更深入地投入，以更美好的方式与人相连。",
                  ja: "より健やかに動き、より深く没入し、より良いかたちで人とつながること。",
                  it: "Muoversi in modo più sano, immergersi più a fondo e legarsi alle persone in modi migliori.",
                  fr: "Bouger plus sainement, s'immerger plus profondément et se lier aux autres de meilleure manière.",
                  es: "Moverte de forma más sana, sumergirte más a fondo y conectar con las personas de mejores maneras.",
                })}
              </p>
              <p className="break-keep leading-relaxed">
                {pick(locale, {
                  ko: "당신의 일상에 새로운 기준을 만드는 일입니다.",
                  en: "It is about setting a new standard for your everyday life.",
                  zh: "这是在为你的日常，立下一个全新的标准。",
                  ja: "それは、あなたの日常に新しい基準をつくることです。",
                  it: "Significa stabilire un nuovo standard per la tua vita di ogni giorno.",
                  fr: "C'est établir un nouveau standard pour votre vie quotidienne.",
                  es: "Se trata de establecer un nuevo estándar para tu vida cotidiana.",
                })}
              </p>
            </div>
            <p className="mt-10 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              Your Game. Your People. Your Standard.
            </p>
            <p className="mt-3 font-display text-2xl font-black text-white">GCM</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
