import type { I18nText } from "@/lib/i18n-pick";

/**
 * /players 하단에 노출하는 학부모 대표 후기(제주 전국대회 응원기).
 * ko/en 기준이며 나머지 언어는 추가 번역으로 채운다(없으면 en 폴백).
 * gallery 가 있는 섹션은 본문 아래에 사진 갤러리(클릭 시 라이트박스)를 노출한다.
 */
export type FeatureSection = {
  icon: string;
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
    ko: "[학부모 후기] 테니스 라켓 대신 응원 피켓을 들고, GCM과 함께 제주도로 향한 특별한 3박 4일",
    en: "[Parent's Review] Holding a cheer sign instead of a racket — a special four-day trip to Jeju with GCM",
    zh: "「学生家长后记」放下网球拍，举起应援牌——与GCM一起奔赴济州岛的特别四天三夜",
    ja: "「保護者レビュー」ラケットの代わりに応援ボードを持って——GCMと一緒に済州島へ向かった特別な3泊4日",
    it: "«Testimonianza di un genitore» Un cartello di tifo al posto della racchetta: un viaggio speciale di quattro giorni a Jeju con GCM",
    fr: "« Témoignage de parent » Une pancarte d'encouragement à la place de la raquette : un séjour spécial de quatre jours à Jeju avec GCM",
    es: "«Reseña de una familia» Con un cartel de ánimo en vez de una raqueta: un viaje especial de cuatro días a Jeju con GCM",
  },
  intro: [
    {
      ko: "아이가 날마다 빠지지 않고 다니던 GCM 정규 훈련을 잠시 접어두고, 우리 가족은 조금 특별한 가방을 꾸렸습니다. 라켓 대신 응원 피켓을 챙겨서요! 우리 GCM 코치님 두 분이 출전하시는 제주 전국대회를 응원하러, 3박 4일 '원정 응원'을 떠났거든요.",
      en: "Our child set aside the daily GCM training he never misses, and our family packed a rather special bag — a cheer sign instead of a racket! We were off on a four-day \"away-game cheering trip\" to Jeju, to root for two of our GCM coaches competing at a national tournament.",
      zh: "我们的孩子暂时放下了每天风雨无阻的GCM常规训练，一家人收拾起一个有点特别的包——装的不是球拍，而是应援牌！我们踏上了四天三夜的“远征应援”之旅，奔赴济州岛，为出战全国大赛的两位GCM教练加油。",
      ja: "我が子が毎日欠かさず通っているGCMの定期練習をちょっとお休みして、我が家はちょっぴり特別なバッグを用意しました。ラケットの代わりに、応援ボードを詰め込んで!全国大会に出場する二人のGCMコーチを応援しに、3泊4日の「遠征応援」に出かけたんです。",
      it: "Nostro figlio ha messo da parte l'allenamento quotidiano al GCM che non salta mai, e la nostra famiglia ha preparato una borsa un po' speciale: dentro, al posto della racchetta, un cartello di tifo! Siamo partiti per una \"trasferta da tifosi\" di quattro giorni a Jeju, per fare il tifo a due dei nostri coach del GCM in gara in un torneo nazionale.",
      fr: "Notre enfant a mis de côté l'entraînement quotidien au GCM qu'il ne manque jamais, et notre famille a préparé un sac un peu spécial : à l'intérieur, à la place de la raquette, une pancarte d'encouragement ! Nous sommes partis pour un « déplacement de supporters » de quatre jours à Jeju, afin d'encourager deux de nos coachs du GCM en lice lors d'un tournoi national.",
      es: "Nuestro hijo dejó a un lado el entrenamiento diario del GCM que nunca se salta, y nuestra familia preparó una bolsa un tanto especial: dentro, en vez de una raqueta, ¡un cartel de ánimo! Nos fuimos de «viaje de hinchada» de cuatro días a Jeju, para animar a dos de nuestros entrenadores del GCM que competían en un torneo nacional.",
    },
    {
      ko: "아이가 만 여섯 살 때부터 라켓을 잡았을 만큼, 저희 집에서 매일의 훈련은 밥만큼이나 당연한 일과였어요. 그래서 비록 딱 하루 빠지는 훈련이었지만 '이 바쁜 와중에 제주도까지 응원을 간다고?' 하는 마음이 솔직히 없지 않았답니다.",
      en: "Our child has held a racket since he was six, so in our home daily training is as natural as having meals. So even though it was only one day off, I'll admit a little \"Are we really flying all the way to Jeju just to cheer, in the middle of all this?\" did cross my mind.",
      zh: "孩子从满六岁起就握起了球拍，在我们家，每天的训练就像吃饭一样理所当然。所以尽管只是缺席一天的训练，老实说，“这么忙还要跑到济州岛去加油？”的念头也不是没有过。",
      ja: "子どもは満六歳からラケットを握ってきたほどで、我が家にとって毎日の練習はごはんと同じくらい当たり前の日課でした。だから、休むのはたった一日の練習とはいえ、「この忙しいのに済州島まで応援に行くの?」という気持ちも、正直ちょっぴりありました。",
      it: "Nostro figlio impugna una racchetta da quando aveva sei anni, perciò a casa nostra l'allenamento quotidiano è naturale quanto mangiare. Così, anche se si trattava di un solo giorno di pausa, lo ammetto: un piccolo \"Ma voliamo davvero fino a Jeju solo per tifare, con tutto quello che c'è da fare?\" mi è passato per la testa.",
      fr: "Notre enfant tient une raquette depuis l'âge de six ans ; chez nous, l'entraînement quotidien est aussi naturel que les repas. Alors même s'il ne s'agissait que d'une seule journée de pause, je l'avoue, un petit « On s'envole vraiment jusqu'à Jeju juste pour encourager, avec tout ce qu'on a à faire ? » m'a traversé l'esprit.",
      es: "Nuestro hijo sostiene una raqueta desde los seis años, así que en nuestra casa el entrenamiento diario es tan natural como comer. Por eso, aunque solo fuera un día libre, lo confieso: un pequeño «¿De verdad volamos hasta Jeju solo para animar, con todo lo que hay que hacer?» se me pasó por la cabeza.",
    },
    {
      ko: "그런데 아이의 하루하루는 물론 긴 인생까지 멀리 내다봐 주시는 GCM 어드바이저 팀과 코치진의 조언을 듣고 나니, 마음이 금세 가벼워졌어요. 덕분에 '그래, 가자!' 하고 신나게 결정을 내릴 수 있었습니다.",
      en: "But after hearing the advice of GCM's advisory team and coaches — who look not only at our child's day-to-day but far ahead into his whole life — my mind grew light in no time. Thanks to them, I could happily decide, \"Alright, let's go!\"",
      zh: "可是，听了既关注孩子的每一天、又着眼于他漫长人生的GCM顾问团队与教练团的建议后，我的心一下子就轻松了。多亏了他们，我才能开开心心地拍板：“好，咱们走！”",
      ja: "けれども、子どもの一日一日はもちろん、長い人生まで遠くを見据えてくださるGCMのアドバイザーチームとコーチ陣の助言を聞いたら、気持ちがすっと軽くなりました。おかげで「よし、行こう!」とウキウキしながら決めることができたんです。",
      it: "Ma dopo aver ascoltato il consiglio del team di consulenti e dei coach del GCM — che guardano non solo al quotidiano di nostro figlio, ma lontano, a tutta la sua vita — il cuore mi si è alleggerito in un attimo. Grazie a loro ho potuto decidere allegramente: «E va bene, andiamo!»",
      fr: "Mais après avoir écouté les conseils de l'équipe de conseillers et des coachs du GCM — qui regardent non seulement le quotidien de notre enfant, mais loin devant, toute sa vie — mon cœur s'est allégé en un clin d'œil. Grâce à eux, j'ai pu décider joyeusement : « Allez, c'est parti ! »",
      es: "Pero después de escuchar el consejo del equipo de asesores y los entrenadores del GCM —que miran no solo el día a día de nuestro hijo, sino mucho más allá, toda su vida—, se me aligeró el corazón en un instante. Gracias a ellos pude decidir con alegría: «¡Venga, vamos!»",
    },
    {
      ko: "그리고 3박 4일을 마치고 돌아온 지금, 확실히 말할 수 있어요. 하루 빠진 훈련은 전혀 아깝지 않았다고요. 오히려 이 선택이야말로 GCM이 말하는 '진짜 교육'이 무엇인지 온몸으로 느낀, 더없이 소중한 시간이었습니다.",
      en: "And now, back from those four days, I can say it for sure: that one missed day of training was no loss at all. If anything, this choice was a truly precious time in which we felt, with our whole bodies, what the 'real education' GCM talks about really means.",
      zh: "如今结束四天三夜归来，我可以笃定地说：缺席的那一天训练，一点都不可惜。相反，正是这个选择，让我们全身心体会到GCM所说的“真正的教育”究竟是什么，成了一段无比珍贵的时光。",
      ja: "そして3泊4日を終えて帰ってきた今、はっきり言えます。休んだ一日の練習は、ちっとも惜しくなかったと。むしろこの選択こそ、GCMの言う「本物の教育」が何なのかを全身で感じた、この上なく大切な時間でした。",
      it: "E ora, tornati da quei quattro giorni, posso dirlo con certezza: quell'unico giorno di allenamento saltato non è stato affatto una perdita. Anzi, questa scelta è stata un tempo davvero prezioso in cui abbiamo sentito, con tutto il corpo, cosa significhi davvero la 'vera educazione' di cui parla il GCM.",
      fr: "Et aujourd'hui, de retour de ces quatre jours, je peux le dire avec certitude : cette seule journée d'entraînement manquée n'a rien été d'une perte. Au contraire, ce choix a été un moment vraiment précieux où nous avons ressenti, de tout notre corps, ce que signifie vraiment la « vraie éducation » dont parle le GCM.",
      es: "Y ahora, de vuelta de esos cuatro días, puedo decirlo con certeza: ese único día de entrenamiento perdido no fue ninguna pérdida. Al contrario, esta elección fue un tiempo verdaderamente precioso en el que sentimos, con todo el cuerpo, lo que de verdad significa la 'verdadera educación' de la que habla el GCM.",
    },
  ],
  sections: [
    {
      icon: "🥇",
      heading: {
        ko: "두 눈으로 직접 확인한 GCM 코치님들의 열정과 스포츠맨십",
        en: "The passion and sportsmanship of the GCM coaches, seen with our own eyes",
        zh: "用双眼亲眼见证的GCM教练们的热情与体育精神",
        ja: "この目で直に確かめたGCMコーチたちの情熱とスポーツマンシップ",
        it: "La passione e la sportività dei coach del GCM, viste con i nostri occhi",
        fr: "La passion et l'esprit sportif des coachs du GCM, vus de nos propres yeux",
        es: "La pasión y la deportividad de los entrenadores del GCM, vistas con nuestros propios ojos",
      },
      paras: [
        {
          ko: "이번 대회는 국가대표까지 총출동하는, 각 지역 대표 선수들이 한자리에 모이는 전국체육대회(전국체전)였어요. 말 그대로 '테니스 고수들의 집합소'였죠.",
          en: "This competition was the National Sports Festival, where representative players from every region gather and even national team members turn out in full force — quite literally a \"gathering of tennis masters.\"",
          zh: "本次比赛是连国家队选手都悉数登场、各地区代表选手齐聚一堂的全国体育大会（全国体典）。简直就是一个“网球高手集结地”。",
          ja: "今回の大会は、国家代表まで勢ぞろいし、各地域の代表選手が一堂に会する全国体育大会（全国体典）でした。まさに「テニスの達人たちの集合所」だったんです。",
          it: "Questa competizione era il Festival Nazionale dello Sport, dove si radunano i giocatori che rappresentano ogni regione e scendono in campo persino i membri della nazionale al gran completo: letteralmente un \"raduno di maestri del tennis\".",
          fr: "Cette compétition était le Festival national des sports, où se rassemblent les joueurs représentant chaque région et où même les membres de l'équipe nationale répondent présents au grand complet — littéralement un « rassemblement de maîtres du tennis ».",
          es: "Esta competición era el Festival Nacional del Deporte, donde se reúnen los jugadores que representan a cada región y hasta los miembros de la selección nacional acuden en pleno: literalmente una \"cumbre de maestros del tenis\".",
        },
        {
          ko: "이 큰 무대에 선 GCM 오성국 코치님과 김주빈 코치님은, 사실 개인 선수로서의 화려한 커리어보다 대한민국 테니스 꿈나무들을 키우는 데 마음을 쏟기로 하신 분들이에요. 평소 아이들 가르치느라 정작 당신들 훈련 시간은 늘 부족하셨는데도, 두 분이 보여주신 경기는 가슴을 뭉클하게 했습니다.",
          en: "GCM's Coach Oh Seong-gook and Coach Kim Ju-bin, who stood on this big stage, are actually people who chose to pour their hearts into raising Korea's young tennis hopefuls rather than into a dazzling playing career of their own. Even though teaching the children left them short on their own training time, the matches the two of them played tugged right at our heartstrings.",
          zh: "站上这一大舞台的GCM Oh Seong-gook教练与Kim Ju-bin教练，其实是两位选择把心血倾注在培养韩国网球新苗上、而非追求个人辉煌职业生涯的人。平日为了教孩子，他们自己的训练时间总是不够，可两位展现的比赛，依然让人心头一热。",
          ja: "この大きな舞台に立たれたGCMのOh Seong-gookコーチとKim Ju-binコーチは、実は個人選手としての華やかなキャリアよりも、韓国テニスの未来を担う子どもたちを育てることに心を注ぐと決めた方々です。普段は子どもたちを教えるあまり、ご自身の練習時間はいつも足りなかったのに、お二人が見せてくださった試合は、胸をじんと熱くさせました。",
          it: "Il coach Oh Seong-gook e il coach Kim Ju-bin del GCM, saliti su questo grande palcoscenico, sono in realtà persone che hanno scelto di mettere il cuore nel far crescere i giovani talenti del tennis coreano, più che in una brillante carriera agonistica tutta loro. Anche se insegnare ai ragazzi li lasciava a corto di tempo per i propri allenamenti, le partite dei due ci hanno scaldato il cuore.",
          fr: "Le coach Oh Seong-gook et le coach Kim Ju-bin du GCM, montés sur cette grande scène, sont en réalité des personnes qui ont choisi de mettre tout leur cœur à faire grandir les jeunes espoirs du tennis coréen plutôt que dans une carrière de joueur éclatante bien à eux. Même si enseigner aux enfants leur laissait peu de temps pour leur propre entraînement, les matchs des deux nous ont serré le cœur.",
          es: "El entrenador Oh Seong-gook y el entrenador Kim Ju-bin del GCM, que se subieron a este gran escenario, son en realidad personas que eligieron volcar su corazón en formar a las jóvenes promesas del tenis coreano más que en una deslumbrante carrera propia como jugadores. Aunque enseñar a los niños les dejaba poco tiempo para su propio entrenamiento, los partidos de los dos nos llegaron al alma.",
        },
        {
          ko: "오성국 코치님은 쟁쟁한 대표급 선수들 사이에서도 '단식 무패'라는 멋진 성적으로 값진 동메달을 목에 거셨어요. 팀전이라 완벽한 승률에도 동메달에 머물 수 있는 상황이었지만, 순위와 상관없이 팀원들과 얼싸안고 기뻐하시는 모습에서 '아, 진짜 리더는 저런 거구나' 싶었습니다.",
          en: "Among those formidable national-level players, Coach Oh hung a hard-won bronze around his neck with a splendid \"undefeated in singles\" record. Because it was a team event, even a perfect win rate could end in only a bronze — yet watching him throw his arms around his teammates and celebrate, no matter the ranking, I thought, \"Ah, so that's what a true leader looks like.\"",
          zh: "Oh Seong-gook教练在响当当的国家级选手中，以“单打不败”的漂亮战绩，把宝贵的铜牌挂上了脖子。由于是团体赛，即便胜率完美也可能只拿到铜牌，但无论名次如何，他与队友们相拥欢庆的身影，让我心想：“啊，原来真正的领袖就是这个样子。”",
          ja: "Oh Seong-gookコーチは、名だたる代表級の選手たちの中でも「シングルス無敗」という見事な成績で、価値ある銅メダルを首にかけられました。団体戦だから、完璧な勝率でも銅メダルどまりになりうる状況でしたが、順位に関係なくチームメイトと抱き合って喜ぶその姿に、「ああ、本物のリーダーってこういう人なんだ」と思いました。",
          it: "Tra quei temibili giocatori di livello nazionale, il coach Oh si è messo al collo un sudato bronzo con uno splendido record di \"imbattuto nel singolare\". Trattandosi di una prova a squadre, anche una percentuale di vittorie perfetta poteva fermarsi al bronzo; eppure, vedendolo abbracciare i compagni e gioire a prescindere dalla classifica, ho pensato: \"Ah, ecco com'è fatto un vero leader.\"",
          fr: "Parmi ces redoutables joueurs de niveau national, le coach Oh s'est passé autour du cou un bronze durement gagné, avec un superbe bilan « invaincu en simple ». Comme il s'agissait d'une épreuve par équipes, même un taux de victoires parfait pouvait s'arrêter au bronze ; pourtant, en le voyant serrer ses coéquipiers dans ses bras et se réjouir, peu importe le classement, je me suis dit : « Ah, voilà à quoi ressemble un vrai leader. »",
          es: "Entre aquellos temibles jugadores de nivel nacional, el entrenador Oh se colgó un merecido bronce con un espléndido registro de \"invicto en individuales\". Al ser una prueba por equipos, incluso un porcentaje de victorias perfecto podía quedarse en un bronce; y sin embargo, al verlo abrazar a sus compañeros y celebrar, sin importar la clasificación, pensé: \"Ah, así es como se ve un verdadero líder.\"",
        },
        {
          ko: "김주빈 코치님은 또 어떻고요. 상대가 국가대표이자 아시안게임 금메달리스트라는 어마어마한 선수였는데도, 끝까지 한 발도 물러서지 않고 매 포인트에 온 힘을 쏟으셨어요. 그 끈질긴 모습에 경기장 관중은 물론 저와 아이까지 괜히 코끝이 찡해졌답니다. 백 마디 잔소리보다 강력한 '살아있는 교과서' 같은 두 분이 우리 아이 곁에 계시다니, 감사하고 또 자랑스러웠어요.",
          en: "And Coach Kim — oh, where do I begin! Even though his opponent was a staggering player — a national team member and an Asian Games gold medalist — he never gave an inch to the end, pouring everything into every single point. His sheer tenacity left not only the spectators but also my child and me with a lump in our throats. To have two coaches like these beside our child — \"living textbooks\" more powerful than a hundred lectures — I felt grateful and so very proud.",
          zh: "Kim Ju-bin教练就更不用说了！尽管对手是国家队选手、Asian Games金牌得主这样了不得的选手，他仍一步都不退让，每一分都拼尽全力，坚持到最后。那股韧劲，让现场观众乃至我和孩子都忍不住鼻头一酸。有这样胜过千言万语、堪称“活教科书”的两位教练陪在孩子身边，我既感激又无比自豪。",
          ja: "Kim Ju-binコーチはまた格別でした!相手が国家代表でありAsian Gamesの金メダリストというとんでもない選手だったのに、最後まで一歩も引かず、一ポイント一ポイントに全力を注がれました。その粘り強い姿に、会場の観客はもちろん、私と子どもまで思わず目頭が熱くなったんです。百の小言よりも力強い「生きた教科書」のようなお二人が我が子のそばにいてくださるなんて、ありがたくて、そして誇らしかったです。",
          it: "E il coach Kim — oh, da dove comincio! Anche se il suo avversario era un giocatore impressionante — membro della nazionale e medaglia d'oro agli Asian Games — non ha ceduto di un passo fino alla fine, mettendo tutto in ogni singolo punto. La sua pura tenacia ha lasciato con un nodo in gola non solo gli spettatori, ma anche me e mio figlio. Avere accanto a nostro figlio due coach così — \"libri di testo viventi\" più potenti di cento prediche — mi ha fatto sentire grato e tanto, tanto orgoglioso.",
          fr: "Et le coach Kim — oh, par où commencer ! Même si son adversaire était un joueur impressionnant — membre de l'équipe nationale et médaillé d'or aux Asian Games — il n'a pas reculé d'un pas jusqu'au bout, mettant tout dans chaque point. Sa ténacité pure nous a tous laissé la gorge nouée, pas seulement les spectateurs, mais aussi mon enfant et moi. Avoir auprès de notre enfant deux coachs pareils — des « manuels vivants » plus puissants que cent sermons — m'a rendu reconnaissant et tellement fier.",
          es: "Y el entrenador Kim, ¡ay, por dónde empiezo! Aunque su rival era un jugador impresionante —miembro de la selección nacional y medallista de oro en los Asian Games—, no cedió ni un paso hasta el final, entregándolo todo en cada punto. Su pura tenacidad nos dejó un nudo en la garganta no solo a los espectadores, sino también a mi hijo y a mí. Tener junto a nuestro hijo a dos entrenadores así —\"libros de texto vivientes\" más poderosos que cien sermones— me hizo sentir agradecido y muy, muy orgulloso.",
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
          ko: "이번 여정에서 우리 GCM의 최고 강점인 '플레잉 코치' 시스템의 진가를 다시 한번 실감했어요. GCM 코치님들은 그냥 가르치기만 하는 분들이 아니라, 전국체전 같은 큰 무대를 직접 뛰는 '현역 선수 겸 코치'시거든요.",
          en: "On this trip I felt all over again the true worth of GCM's greatest strength — its 'playing coach' system. GCM's coaches aren't just teachers; they're 'active player-coaches' who step onto big stages like the National Sports Festival themselves.",
          zh: "这趟旅程让我再一次切实体会到GCM最大的优势——“球员型教练”体系的真正价值。GCM的教练们可不只是教书的人，而是会亲自征战全国体典这类大舞台的“现役选手兼教练”呢。",
          ja: "今回の旅で、私はGCM最大の強みである「プレイングコーチ」システムの真価を、あらためて実感しました。GCMのコーチたちは、ただ教えるだけの人ではなく、全国体典のような大舞台を自ら戦う「現役選手兼コーチ」なんです。",
          it: "In questo viaggio ho sentito di nuovo tutto il valore del più grande punto di forza del GCM: il suo sistema di «coach-giocatori». I coach del GCM non sono semplici insegnanti; sono «coach-atleti in attività» che salgono di persona su grandi palcoscenici come il Festival Nazionale dello Sport.",
          fr: "Lors de ce voyage, j'ai ressenti de nouveau toute la valeur du plus grand atout du GCM : son système de « coachs-joueurs ». Les coachs du GCM ne sont pas de simples enseignants ; ce sont des « coachs-joueurs en activité » qui montent eux-mêmes sur de grandes scènes comme le Festival national des sports.",
          es: "En este viaje volví a sentir todo el valor de la mayor fortaleza del GCM: su sistema de «entrenadores-jugadores». Los entrenadores del GCM no son simples profesores; son «entrenadores-jugadores en activo» que se suben ellos mismos a grandes escenarios como el Festival Nacional del Deporte.",
        },
        {
          ko: "말과 기술로 콕콕 짚어주시는 가르침도 물론 소중하지만, 코치님이 직접 코트에서 막막함과 긴장을 이겨내며 부딪히고 성장하는 모습을 보여주시는 건 정말 차원이 다른 교육이더라고요.",
          en: "Teaching that points things out clearly through words and technique is precious, of course, but a coach showing in person how he overcomes uncertainty and nerves on court — taking them on and growing — turned out to be education on a whole different level.",
          zh: "用语言和技术一点一点为你点破的教导固然珍贵，但教练亲自在球场上克服茫然与紧张、迎难而上并成长的样子，真的是层次完全不同的教育。",
          ja: "言葉や技術でピンポイントに教えてくださる指導ももちろん大切ですが、コーチが自らコートで戸惑いや緊張を乗り越え、立ち向かって成長していく姿を見せてくださるのは、本当に次元の違う教育でした。",
          it: "Un insegnamento che indica le cose con chiarezza, a parole e con la tecnica, è prezioso, certo, ma un coach che mostra di persona come supera l'incertezza e la tensione in campo — affrontandole e crescendo — si è rivelato un'educazione di tutt'altro livello.",
          fr: "Un enseignement qui pointe les choses avec clarté, par les mots et la technique, est précieux, bien sûr, mais un coach qui montre en personne comment il surmonte l'incertitude et le trac sur le court — en les affrontant et en grandissant — s'est révélé une éducation d'un tout autre niveau.",
          es: "Una enseñanza que señala las cosas con claridad, con palabras y técnica, es valiosa, por supuesto, pero un entrenador que muestra en persona cómo supera la incertidumbre y los nervios en la cancha —enfrentándolos y creciendo— resultó ser una educación de un nivel completamente distinto.",
        },
        {
          ko: "매일 자신을 가르쳐주시는 코치님이 여전히 코트 위에서 현역 선수로 멋지게 뛰며 존재감을 뽐내시는 걸 보면서, 아이는 코치님을 향한 존경과 믿음이 한층 더 단단해졌어요. 책이나 말로 배우는 것보다, 온몸으로 뛰며 도전하는 스승의 뒷모습을 보고 자란다는 것—이것이야말로 GCM을 고른 제 선택에 가장 큰 확신을 줍니다.",
          en: "Watching the coach who teaches him every day still playing brilliantly as an active competitor on court, radiating presence, my child's respect and trust for his coach grew sturdier still. Growing up watching the back of a mentor who runs and challenges himself with his whole body, rather than learning only from books or words — this is exactly what gives me the greatest confidence in my choice of GCM.",
          zh: "看着每天教导自己的教练，如今依然作为现役选手在球场上精彩拼搏、尽显存在感，孩子对教练的敬佩与信任变得更加坚定。在用全身心拼搏、迎接挑战的师长背影下成长，而不只是从书本或言语中学习——这正是让我对选择GCM这一决定最有信心的理由。",
          ja: "毎日自分を教えてくださるコーチが、今なお現役選手としてコートの上で見事に戦い、存在感を放つ姿を見て、子どものコーチへの尊敬と信頼はいっそう揺るぎないものになりました。本や言葉だけで学ぶのではなく、全身で走り挑戦する師の背中を見て育つこと——これこそ、GCMを選んだ私の選択に最も大きな確信を与えてくれます。",
          it: "Vedendo il coach che lo istruisce ogni giorno giocare ancora da protagonista, da atleta in attività sul campo, con una presenza che si fa sentire, il rispetto e la fiducia di mio figlio verso di lui sono diventati ancora più solidi. Crescere guardando la schiena di un mentore che corre e si mette alla prova con tutto il corpo, anziché imparare solo dai libri o dalle parole — è proprio questo che mi dà la massima sicurezza nella mia scelta del GCM.",
          fr: "En voyant le coach qui l'instruit chaque jour continuer à jouer brillamment en compétiteur en activité sur le court, rayonnant de présence, le respect et la confiance de mon enfant envers lui sont devenus encore plus solides. Grandir en regardant le dos d'un mentor qui court et se dépasse de tout son corps, plutôt qu'en apprenant seulement dans les livres ou par les mots — c'est précisément ce qui me donne la plus grande assurance dans mon choix du GCM.",
          es: "Al ver al entrenador que lo instruye cada día seguir jugando de maravilla como competidor en activo en la cancha, irradiando presencia, el respeto y la confianza de mi hijo hacia él se hicieron aún más firmes. Crecer mirando la espalda de un mentor que corre y se desafía con todo su cuerpo, en lugar de aprender solo de los libros o las palabras: es justo esto lo que me da la mayor seguridad en mi elección del GCM.",
        },
      ],
    },
    {
      icon: "👁️",
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
          ko: "테니스를 잘하려면 매일 반복 훈련도 중요하지만, 좋은 선수가 되려면 경기 흐름을 눈으로 읽고 분석하며 시야를 넓히는 경험이 꼭 필요하다고 해요.",
          en: "To get good at tennis, daily repetitive training matters, but they say that to become a good player you also absolutely need the experience of reading the flow of a match with your eyes, analyzing it, and widening your perspective.",
          zh: "听说要打好网球，每天反复训练固然重要，但要成为一名优秀的选手，用眼睛读懂并分析比赛走势、开阔视野的经验也必不可少。",
          ja: "テニスが上手になるには毎日の反復練習も大切ですが、良い選手になるには、試合の流れを目で読み取って分析し、視野を広げる経験が欠かせないそうです。",
          it: "Per diventare bravi a tennis conta l'allenamento quotidiano e ripetitivo, ma dicono che per diventare un buon atleta serva assolutamente anche l'esperienza di leggere con gli occhi l'andamento di una partita, analizzarla e allargare la propria prospettiva.",
          fr: "Pour devenir bon au tennis, l'entraînement quotidien et répétitif compte, mais on dit que pour devenir un bon joueur, il faut aussi absolument l'expérience de lire des yeux le déroulement d'un match, de l'analyser et d'élargir sa perspective.",
          es: "Para llegar a ser bueno en el tenis importa el entrenamiento diario y repetitivo, pero dicen que para convertirse en un buen jugador también hace falta sin falta la experiencia de leer con los ojos el desarrollo de un partido, analizarlo y ampliar la perspectiva.",
        },
        {
          ko: "그런 점에서 이번 제주 여정은 아이에게 그야말로 '살아있는 교실'이었습니다. 국내 최고 수준 현역 선수들이 모인 GCM 소속답게, 코치님들 덕분에 아이는 코트 바로 옆에서 우리나라 대표급 유명 선수들의 경기를 코앞에서 지켜볼 수 있었어요.",
          en: "In that sense, this Jeju trip was, quite literally, a 'living classroom' for my child. True to being part of GCM — where the country's top active players come together — thanks to our coaches my child got to watch the matches of famous, national-level players right up close, just beside the court.",
          zh: "从这一点来说，这趟济州之行对孩子而言，简直就是一间“活的教室”。正如隶属于汇聚国内顶尖现役选手的GCM那般，多亏了教练们，孩子得以在球场旁、近在咫尺地观看我国代表级知名选手的比赛。",
          ja: "その点で、今回の済州の旅は、子どもにとってまさに「生きた教室」でした。国内最高水準の現役選手が集うGCMに所属しているからこそ、コーチたちのおかげで、子どもはコートのすぐそばで、わが国の代表級の有名選手たちの試合を目の前で見守ることができたんです。",
          it: "In questo senso, il viaggio a Jeju è stato, letteralmente, un'«aula viva» per mio figlio. Da membro del GCM — dove si ritrovano i migliori atleti in attività del Paese — grazie ai nostri coach mio figlio ha potuto guardare da vicinissimo, proprio a bordo campo, le partite di giocatori famosi di livello nazionale.",
          fr: "En ce sens, ce voyage à Jeju a été, au sens propre, une « salle de classe vivante » pour mon enfant. Fidèle à son appartenance au GCM — où se réunissent les meilleurs joueurs en activité du pays — grâce à nos coachs, mon enfant a pu regarder de tout près, juste au bord du court, les matchs de joueurs célèbres de niveau national.",
          es: "En ese sentido, este viaje a Jeju fue, literalmente, un «aula viva» para mi hijo. Fiel a su pertenencia al GCM —donde se reúnen los mejores jugadores en activo del país—, gracias a nuestros entrenadores mi hijo pudo ver muy de cerca, justo al borde de la cancha, los partidos de jugadores famosos de nivel nacional.",
        },
        {
          ko: "게다가 평소 TV에서만 보던 유명 선수를 마주쳐도 “저 우리 코치님 제자예요!” 한마디면 분위기가 금세 풀려서, 동경하던 선수들과 직접 이야기도 나누고 금세 친해지는 특별한 경험까지 했답니다. (그날 아이 어깨가 한 뼘은 올라갔어요!)",
          en: "On top of that, even when he ran into famous players he'd only ever seen on TV, a single line — “I'm a student of our coach!” — melted the ice in no time, so he even chatted directly with the players he'd admired and grew close to them in a flash. (His shoulders rode a good inch higher that day!)",
          zh: "更妙的是，即便遇到平时只在电视上见过的知名选手，一句“我是我们教练的学生！”就能立刻拉近距离，孩子甚至与仰慕已久的选手直接聊了起来，一下子就熟络了，真是特别的经历。（那天孩子的肩膀足足高了一截！）",
          ja: "しかも、普段はテレビでしか見なかった有名選手に出くわしても、「僕、うちのコーチの教え子なんです!」の一言で場がすっとほぐれて、あこがれの選手たちと直接おしゃべりし、あっという間に打ち解けるという特別な経験までしました。（その日、子どもの肩はひとまわり上がっていました!）",
          it: "Per di più, anche quando incontrava giocatori famosi visti solo in TV, una sola frase — «Sono un allievo del nostro coach!» — scioglieva il ghiaccio in un attimo, così ha persino chiacchierato di persona con i giocatori che ammirava e ci ha fatto amicizia in un lampo. (Quel giorno aveva le spalle belle dritte e un palmo più su!)",
          fr: "En plus, même en tombant sur des joueurs célèbres qu'il n'avait vus qu'à la télé, une seule phrase — « Je suis un élève de notre coach ! » — brisait la glace en un rien de temps, si bien qu'il a même bavardé directement avec les joueurs qu'il admirait et s'est lié d'amitié en un clin d'œil. (Ce jour-là, il avait les épaules redressées d'un bon cran !)",
          es: "Además, aun cuando se topaba con jugadores famosos que solo había visto por la tele, una sola frase —«¡Soy alumno de nuestro entrenador!»— rompía el hielo en un instante, así que hasta charló en persona con los jugadores que admiraba y se hizo amigo de ellos en un abrir y cerrar de ojos. (¡Ese día llevaba los hombros bien erguidos, un palmo más arriba!)",
        },
        {
          ko: "선수들의 움직임과 전술을 눈에 담은 건 물론이고, 현장에서 빛나는 코치님들의 든든한 존재감 덕분에 아이는 'GCM'이라는 울타리 안에서 깊은 소속감과 자부심을 느꼈어요. 우리 코치님이 코트 밖에서뿐 아니라 코트 위에서도 이렇게 멋진 분이라는 걸 피부로 느끼면서, 아이의 꿈과 시야도 한 뼘 더 쑥 자랐습니다.",
          en: "Beyond soaking up the players' movement and tactics with his eyes, thanks to the reassuring presence of his coaches shining on the ground, my child felt a deep sense of belonging and pride within the shelter of 'GCM.' Feeling first-hand that our coaches are this wonderful not only off the court but on it, my child's dreams and horizons shot up a good notch too.",
          zh: "孩子不仅把选手们的跑动与战术收入眼底，更因教练们在现场熠熠生辉、令人安心的存在感，而在“GCM”这片天地里感受到深深的归属感与自豪。切身感受到我们的教练不仅在场下、在场上也这般出色，孩子的梦想与视野也“噌”地又长高了一截。",
          ja: "選手たちの動きや戦術を目に焼きつけたのはもちろん、現場で輝くコーチたちの頼もしい存在感のおかげで、子どもは「GCM」という垣根の中で深い所属感と誇りを感じました。うちのコーチがコートの外だけでなくコートの上でもこんなに素敵な方だと肌で感じて、子どもの夢も視野も、またひとまわりぐんと伸びたんです。",
          it: "Oltre ad assorbire con gli occhi i movimenti e le tattiche dei giocatori, grazie alla rassicurante presenza dei suoi coach che brillavano sul campo, mio figlio ha provato un profondo senso di appartenenza e orgoglio dentro il riparo del «GCM». Sentendo in prima persona che i nostri coach sono così straordinari non solo fuori dal campo ma anche in campo, i sogni e gli orizzonti di mio figlio sono cresciuti di un bel pezzo.",
          fr: "Au-delà d'absorber des yeux les déplacements et les tactiques des joueurs, grâce à la présence rassurante de ses coachs rayonnant sur le terrain, mon enfant a ressenti un profond sentiment d'appartenance et de fierté au sein du refuge qu'est le « GCM ». En ressentant de première main que nos coachs sont aussi formidables non seulement en dehors du court mais aussi dessus, les rêves et les horizons de mon enfant ont grandi d'un bon cran eux aussi.",
          es: "Más allá de empaparse con los ojos de los movimientos y las tácticas de los jugadores, gracias a la tranquilizadora presencia de sus entrenadores brillando sobre el terreno, mi hijo sintió un hondo sentido de pertenencia y orgullo dentro del amparo del «GCM». Al sentir de primera mano que nuestros entrenadores son así de estupendos no solo fuera de la cancha sino también dentro, los sueños y los horizontes de mi hijo crecieron también un buen trecho.",
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
      icon: "🤝",
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
          ko: "무엇보다 이번 3박 4일은 아이와 코치님들, 그리고 GCM과의 사이를 훨씬 더 끈끈하게 만들어 주었어요.",
          en: "Above all, these four days made the bond between my child, the coaches, and GCM so much closer.",
          zh: "最重要的是，这四天三夜让孩子与教练们以及GCM之间的关系变得更加紧密。",
          ja: "何よりも、この3泊4日は、子どもとコーチたち、そしてGCMとの間を、ぐっと深く結びつけてくれました。",
          it: "Soprattutto, questi quattro giorni hanno reso molto più stretto il legame tra mio figlio, i coach e il GCM.",
          fr: "Avant tout, ces quatre jours ont rendu bien plus étroit le lien entre mon enfant, les coachs et le GCM.",
          es: "Sobre todo, estos cuatro días estrecharon muchísimo el vínculo entre mi hijo, los entrenadores y el GCM.",
        },
        {
          ko: "한 포인트 한 포인트 손에 땀을 쥐고 응원하고, 이기고 지는 순간을 함께 울고 웃으며 나누다 보니, 아이 마음속엔 코치님을 향한 깊은 애정과 믿음이 차곡차곡 쌓였습니다. 힘든 순간에도 믿고 따라갈 수 있는 스승이 있다는 건, 앞으로 아이의 테니스 인생에 가장 든든한 버팀목이 될 거예요.",
          en: "Cheering with our hearts in our throats on every single point, crying and laughing together through the wins and losses, a deep affection and trust toward his coaches piled up, layer by layer, in my child's heart. Having mentors he can believe in and follow even through hard times will be the firmest support in his tennis life ahead.",
          zh: "一分一分地捏着一把汗加油，赢了输了都一同哭一同笑，孩子心中对教练们的深厚情感与信任，就这样一点一点地累积起来。在艰难时刻也能信赖并追随的师长，将成为孩子今后网球人生中最坚实的支柱。",
          ja: "一ポイント一ポイント手に汗握って応援し、勝った負けたの瞬間を一緒に泣き笑いしながら分かち合ううちに、子どもの心にはコーチたちへの深い愛情と信頼が、少しずつ積み重なっていきました。つらい瞬間にも信じてついていける師がいるということは、これからの子どものテニス人生で、最も頼もしい支えになるはずです。",
          it: "Tifando col cuore in gola su ogni singolo punto, piangendo e ridendo insieme tra vittorie e sconfitte, nel cuore di mio figlio si sono accumulati, strato dopo strato, un affetto e una fiducia profondi verso i suoi coach. Avere mentori in cui credere e da seguire anche nei momenti difficili sarà il sostegno più saldo nella sua vita tennistica che verrà.",
          fr: "En encourageant le cœur battant sur chaque point, en pleurant et en riant ensemble au fil des victoires et des défaites, une affection et une confiance profondes envers ses coachs se sont accumulées, couche après couche, dans le cœur de mon enfant. Avoir des mentors en qui croire et qu'il peut suivre même dans les moments difficiles sera le soutien le plus solide de sa vie de joueur de tennis à venir.",
          es: "Animando con el corazón en un puño en cada punto, llorando y riendo juntos entre victorias y derrotas, en el corazón de mi hijo se fueron acumulando, capa a capa, un cariño y una confianza profundos hacia sus entrenadores. Tener mentores en quienes creer y a quienes seguir incluso en los momentos difíciles será el apoyo más firme en su vida tenística por venir.",
        },
        {
          ko: "훈련 하루 빠진 건 잠깐의 공백일 뿐이지만, 제주에서 얻은 감동과 동기부여는 그 무엇과도 바꿀 수 없는 보물이 되었어요. 혹시 저처럼 고민하는 학부모님이 계시다면, GCM의 지도와 교육관을 한번 믿고 용기 내 보시길 살짝 추천드리고 싶어요!",
          en: "Missing one day of training is just a brief gap, but the inspiration and motivation we gained in Jeju became a treasure nothing could replace. If there's a parent out there hesitating like I did, I'd love to gently recommend trusting GCM's guidance and philosophy and working up the courage to go for it!",
          zh: "缺席一天训练只是短暂的空白，但在济州收获的感动与动力，却成了任何东西都无法替代的宝物。如果有像我一样纠结的家长，我想悄悄地推荐一句：不妨信任GCM的指导与教育理念，鼓起勇气试一试吧！",
          ja: "練習を一日休んだのはほんの短い空白にすぎませんが、済州で得た感動と動機づけは、何ものにも代えがたい宝物になりました。もし私のように悩んでいる保護者の方がいらっしゃったら、GCMの指導と教育観を一度信じて、勇気を出してみられることを、そっとおすすめしたいです!",
          it: "Saltare un giorno di allenamento è solo una breve pausa, ma l'ispirazione e la motivazione che abbiamo guadagnato a Jeju sono diventate un tesoro insostituibile. Se c'è un genitore là fuori indeciso come lo ero io, mi piacerebbe consigliare con delicatezza di fidarsi della guida e della visione educativa del GCM e di farsi coraggio e provarci!",
          fr: "Manquer une journée d'entraînement n'est qu'un bref vide, mais l'inspiration et la motivation gagnées à Jeju sont devenues un trésor irremplaçable. S'il y a un parent qui hésite comme moi, j'aimerais recommander tout doucement de faire confiance à l'accompagnement et à la vision éducative du GCM et de prendre son courage à deux mains pour se lancer !",
          es: "Faltar a un día de entrenamiento es solo un breve vacío, pero la inspiración y la motivación que ganamos en Jeju se convirtieron en un tesoro irremplazable. Si hay algún padre o madre ahí fuera dudando como yo dudé, me encantaría recomendar con cariño confiar en la guía y la filosofía del GCM y armarse de valor para lanzarse.",
        },
      ],
    },
  ],
  quote: {
    ko: "GCM에서는 기술만 가르치는 게 아니라, 아이의 태도와 마음, 그리고 세상을 보는 넓은 시야까지 함께 키워주는 특별한 교육이 이뤄집니다.",
    en: "At GCM, it's not just skills that are taught — a special kind of education grows a child's attitude, heart, and a wide view of the world, all together.",
    zh: "在GCM，所进行的不只是技术的传授——而是一种连同孩子的态度、心灵，以及看世界的开阔视野一起培养的特别教育。",
    ja: "GCMでは、技術だけを教えるのではなく、子どもの態度や心、そして世界を見る広い視野までを一緒に育ててくれる、特別な教育が行われます。",
    it: "Al GCM non si insegnano soltanto le abilità: un'educazione speciale fa crescere insieme l'atteggiamento, il cuore e un'ampia visione del mondo di un bambino.",
    fr: "Au GCM, on n'enseigne pas seulement des compétences : une éducation particulière fait grandir ensemble l'attitude, le cœur et un large regard sur le monde d'un enfant.",
    es: "En el GCM no solo se enseñan habilidades: una educación especial hace crecer a la vez la actitud, el corazón y una amplia mirada del mundo de un niño.",
  },
  closing: [
    {
      ko: "아이들에게 든든한 본보기가 되어주시는 현장의 플레잉 코치님들, 그리고 학업·진로·멘토링까지 아이의 성장을 구석구석 챙겨주시는 GCM 어드바이저 팀이 있으니, 학부모로서 앞으로가 더 기대되고 마음이 놓입니다.",
      en: "With playing coaches who are rock-solid role models on the ground, and a GCM advisory team that looks after our child's growth in every corner — academics, career path, and mentoring — I feel, as a parent, all the more excited about what's ahead, and at ease.",
      zh: "有在现场为孩子们树立坚实榜样的球员型教练，还有从学业、升学进路到心灵辅导、把孩子的成长照顾得面面俱到的GCM顾问团队——身为家长，我对今后更加期待，也更加安心。",
      ja: "子どもたちに頼もしい手本となってくださる現場のプレイングコーチの皆さん、そして学業・進路・メンタリングまで、子どもの成長を隅々まで気にかけてくださるGCMのアドバイザーチームがいてくださるから、保護者として、これからがもっと楽しみで、安心できます。",
      it: "Con coach-giocatori che sono modelli saldissimi sul campo e un team di consulenti del GCM che si prende cura della crescita di nostro figlio in ogni angolo — studio, percorso professionale e mentoring — come genitore mi sento ancora più entusiasta per ciò che verrà, e sereno.",
      fr: "Avec des coachs-joueurs qui sont des modèles solides comme le roc sur le terrain, et une équipe de conseillers du GCM qui veille à la croissance de notre enfant dans les moindres recoins — études, orientation et mentorat — je me sens, en tant que parent, d'autant plus enthousiaste pour la suite, et rassuré.",
      es: "Con entrenadores-jugadores que son modelos firmes como una roca sobre el terreno, y un equipo de asesores del GCM que cuida del crecimiento de nuestro hijo en cada rincón —estudios, orientación profesional y mentoría—, como madre o padre me siento aún más ilusionado por lo que viene, y tranquilo.",
    },
    {
      ko: "값진 동메달을 따내신 오성국 코치님, 다시 한번 축하드려요! 그리고 결과를 떠나 현장에서 가장 빛나는 경기를 보여주신 코치님들, 이 모든 특별한 추억을 선물해 준 GCM 테니스 아카데미에 진심으로 감사드립니다. ❤️🎾",
      en: "Congratulations once again to Coach Oh Seong-gook on his hard-won bronze medal! And my heartfelt thanks to the coaches who, results aside, gave us the most brilliant play on the ground, and to GCM Tennis Academy for the gift of all these special memories. ❤️🎾",
      zh: "荣获宝贵铜牌的Oh Seong-gook教练，再次恭喜您！也由衷感谢无论结果如何、都在赛场上奉献出最耀眼比赛的教练们，以及把这一切特别回忆当作礼物送给我们的GCM网球学院。❤️🎾",
      ja: "価値ある銅メダルを勝ち取られたOh Seong-gookコーチ、あらためておめでとうございます!そして、結果を抜きにして現場で最も輝く試合を見せてくださったコーチたち、このすべての特別な思い出をプレゼントしてくれたGCMテニスアカデミーに、心から感謝いたします。❤️🎾",
      it: "Congratulazioni ancora una volta al coach Oh Seong-gook per la sua sudata medaglia di bronzo! E il mio grazie di cuore ai coach che, a prescindere dai risultati, ci hanno regalato il gioco più brillante sul campo, e all'accademia di tennis GCM per il dono di tutti questi ricordi speciali. ❤️🎾",
      fr: "Félicitations encore une fois au coach Oh Seong-gook pour sa médaille de bronze durement gagnée ! Et mes remerciements les plus sincères aux coachs qui, résultats mis à part, nous ont offert le jeu le plus éclatant sur le terrain, ainsi qu'à l'académie de tennis GCM pour le cadeau de tous ces souvenirs précieux. ❤️🎾",
      es: "¡Felicidades una vez más al entrenador Oh Seong-gook por su merecida medalla de bronce! Y mi más sincero agradecimiento a los entrenadores que, al margen de los resultados, nos regalaron el juego más brillante sobre el terreno, y a la academia de tenis GCM por el regalo de todos estos recuerdos tan especiales. ❤️🎾",
    },
  ],
};
