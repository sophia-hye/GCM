/**
 * 대표원장 인사말 다국어 번역 (zh/ja/it/fr/es).
 * eyebrow/image 는 영어 기준(브랜드 표시어·파일 경로)을 유지하고,
 * title·signature·homeSummary·before·quote·after 를 번역한다.
 * 영어(enDirectorMessage)를 기준으로 번역하며, 없는 언어는 영어로 폴백된다.
 */
import type { Locale } from "@/lib/i18n-pick";

export type DirectorMessageTx = {
  title: string;
  signature: string;
  homeSummary: string[];
  before: string[];
  quote: string;
  after: string[];
};

const zh: DirectorMessageTx = {
  title: "院长致辞",
  signature: "GCM 学院创始人兼院长 吴成国 敬上",
  homeSummary: [
    "您好。我是 GCM 学院创始人兼院长吴成国。向每一位来到 GCM 的家长与选手，致以我最诚挚的感谢。",
    "我相信，网球不仅是一项运动，更是一种伟大的教育，是人生最有力的养分。在目标明确的选手共同体中，孩子们培养出超越极限的耐力与斗志、无论胜负都稳如磐石的职业精神，以及自我约束的能力与端正的态度。在球场上挥洒的诚实汗水，成为塑造人格、立人树德的全人教育的根基。",
    "许多家长因对未来模糊的不安而不自觉地逼迫孩子。GCM 学院愿替您承担这份沉重的负担。升学策略、前途的忧虑与指导，交由包括资深北美招生官在内的专家负责；我们与美国专业升学教育机构携手，从 Plan A 起就细致地规划奖学金与升学路线图。在家里，请只给予温暖的爱与鼓励。",
  ],
  before: [
    "您好。我是 GCM 学院创始人兼院长吴成国。向每一位来到 GCM 的家长与选手，致以我最诚挚的感谢。",
    "过去，我的父母相信孩子拥有无限的可能，毅然做出决断，让我在国际职业网球这个更大的舞台上一展身手。为了让我能全心投入网球实力的提升与全人的成长，他们跳出既定的框架，甚至让我在中学时期离开学校，选择了『学院』与『国际赛事』这样的环境。正是因为他们为孩子的未来倾尽所有的深沉之爱与勇气，今天的我才能作为一名教育者站在这里。",
    "正因如此，我比任何人都更深切地理解——那些希望为孩子打开更广阔世界、更安全机会的家长们那份恳切的心，以及有时隐藏在这份心愿背后的不安。",
    "网球不仅是一项运动，更是一种伟大的教育，是人生最有力的养分。在目标明确的选手共同体中，孩子们学会超越极限的非凡耐力与斗志、无论胜负都镇定自若的坚定职业精神与心理管理，以及自我约束的能力与端正的态度。在球场上挥洒的诚实汗水，成为塑造人格的全人教育的根基。",
    "网球也是全世界通行、最宏大且最有品格的『全球人脉舞台』。即使起初各自带着不同的目标与期待握起球拍，在这里所有人都会融为一体——因为仅凭一支球拍，便能跨越世代与国界，分享深厚的情谊与喜悦。",
    "在 GCM 学院，现役职业选手与 GCM 同好会员通过交流赛彼此热情地激励与加油。在这份美好的同行之中，孩子们习得归属感这一坚实的价值，体会关怀他人的利他之心与善的影响力，自然而然地成长为具备高雅『全球礼仪』的领袖。更进一步，这将超越青少年时期的一技之长，成为滋养人生直至晚年的终身伴侣运动。",
  ],
  quote: "一两次的可能或结果，并不能决定孩子的未来；因此，我们用心调整，让学习绝不成为压力或负担。",
  after: [
    "许多家长因对未来模糊的不安而不自觉地逼迫孩子，结果让本应最为珍贵的家庭关系产生了距离。",
    "GCM 学院愿把这份沉重的不安，从家长与孩子的肩上卸下。升学的策略、对未来艰难的忧虑与指导，就由我们这些教育者与专家来替您承担。在家里，请只给予温暖的爱与无条件的支持。帮助孩子充分感受这份爱，进而以发自内心的责任感站上球场去回报——这正是我们所追求的真正教育。",
    "为此，与 GCM 同行的教育者们，都是在北美担任招生官数十年的顶尖资深人士。我们不仅进行网球指导，更细致地并行全人化的辅导。无论孩子最终走上职业选手之路，还是将网球作为宝贵的财富、另择新的方向，都很好。在任何时刻，我们都会提出最佳的备选方案与路线图，让孩子们始终不失从容与安心。",
    "在任何岔路口——无论是意外的伤病，还是突然的方向转变——我们可靠的伙伴，即美国专业的辅导与升学教育机构，都会与我们同在。我们从 Plan A 到 B、C、D、E，细致地准备了多种可能，让学生能够凭借奖学金安全地进入北美名校。无论他们走哪条路，我们都将成为坚实的后盾，不让他们放弃梦想。",
    "对于具备职业潜力的选手，我们为其开启在国际舞台上竞技的道路——提供相应的训练、辅导、巡回赛日程管理，乃至巡回赛费用的奖学金支持——竭尽全力，助其成长为活跃于 ATP、WTA 巡回赛的选手。",
    "为了让家长对孩子的奉献结出最美的果实，我们将怀着父母之心与教育者的使命感与您同行。在 GCM 学院所提供的安全而宽广的路线图上，我们的孩子堂堂正正站上世界舞台的机会，如今已通过连接韩国、意大利与上海的 GCM 全球网络，向您敞开。",
    "愿家人以家人之姿彼此相爱，愿未来与专家一同从容地筹备。作为您最值得信赖的教育伙伴，我们将始终陪伴在您身旁。谢谢。",
  ],
};

const ja: DirectorMessageTx = {
  title: "代表院長あいさつ",
  signature: "GCM アカデミー 代表院長 オ・ソングク",
  homeSummary: [
    "こんにちは。GCM アカデミー代表院長のオ・ソングクです。GCM を訪ねてくださった保護者と選手の皆さまに、心より感謝申し上げます。",
    "テニスは単なるスポーツを超え、人生を生きるうえで最も力強い糧となる偉大な教育だと信じています。目標の明確な選手の共同体の中で、子どもたちは限界を超える持久力と闘志、勝敗の前でも揺るがないプロ意識、そして自らを律する節制と良い態度を身につけます。コートの上で流した正直な汗は、人格を正しく育てる全人格教育の土台となります。",
    "多くの保護者は、将来への漠然とした不安から、つい子どもを追い立ててしまいます。GCM アカデミーは、その重い荷を代わりに背負います。進学戦略、進路の悩み、コーチングは、北米の入学査定官を務めたベテランをはじめとする専門家が担い、米国の進学専門教育機関とともに、奨学・進学ロードマップを Plan A から丁寧に準備します。ご家庭では、どうか温かい愛と応援だけを送ってあげてください。",
  ],
  before: [
    "こんにちは。GCM アカデミー代表院長のオ・ソングクです。GCM を訪ねてくださった保護者と選手の皆さまに、心より感謝申し上げます。",
    "かつて私の両親は、子どもの無限の可能性を信じ、国際プロの舞台というより大きな場で活躍できるよう、大胆な決断をしてくれました。定型の枠を離れ、テニスの実力向上と全人的な成長にひたすら集中できるよう、中学校を辞めてまで『アカデミー』そして『国際大会出場』という環境を選んでくれたのです。子どもの未来のためにすべてを捧げた両親の深い愛と勇気があったからこそ、今の私が教育者としてこの場に立つことができています。",
    "だからこそ私は、子どものためにより広い世界、より安全な機会を開いてあげたいと願う保護者の切なる思い、そして時にその願いの奥に隠れた不安まで、誰よりも深く理解し共感します。",
    "テニスは単なるスポーツを超え、人生を生きるうえで最も力強い糧となる偉大な教育です。目標の明確な選手の共同体の中で、子どもたちは限界を超える並外れた持久力と闘志、勝敗の前でも落ち着いた確かなプロ意識とメンタル管理、そして自らを律する節制と良い態度を学びます。コートの上で流した正直な汗は、人格を正しく育てる全人格教育の土台となります。",
    "テニスはまた、世界のどこでも通じる、最も大きく品格ある『グローバルな人脈づくりの場』です。はじめはそれぞれ異なる目標と期待でラケットを握ったとしても、ここでは皆が一つになります。ラケット一本で、世代と国境を超えて深い絆と喜びを分かち合えるからです。",
    "GCM アカデミーの中では、現役のプロ選手と GCM の同好会メンバーが交流戦を通じて互いを熱く励まし、応援し合います。この美しい同行の中で、子どもたちは所属感という確かな価値を学び、他者を思いやる利他の心と善い影響力を身につけ、自然と品格ある『グローバルマナー』を備えたリーダーへと成長します。さらに青少年期の特技を超え、老年期のシニアに至るまで人生を豊かに彩る、生涯の伴侶となるスポーツを得るのです。",
  ],
  quote: "一つの可能性、一つの結果だけで子どもの未来が決まるわけではないからこそ、学びが子どもにとって重圧やストレスにならないよう、私たちは細やかに調えます。",
  after: [
    "多くの保護者は、将来への漠然とした不安から、つい子どもを追い立ててしまい、本来最も大切であるはずの家族の関係に距離が生まれてしまいます。",
    "GCM アカデミーは、その重い不安を保護者と子どもの肩から下ろしたいと考えています。進学の戦略、将来への苦しい悩みとコーチングは、私たち教育者と専門家が代わりに背負います。ご家庭では、どうか温かい愛と無条件の応援だけを送ってください。子どもが親の愛を存分に感じ、むしろその愛に応えようとする心から、自ら責任感を持ってコートに立てるよう支えること——それが私たちの目指す真の教育です。",
    "そのために、GCM とともに歩む教育者たちは、北米で数十年にわたり入学査定官を務めた最高のベテランです。私たちはテニスのコーチングだけでなく、全人格的なメンタリングを丁寧に併行します。子どもが最後までプロの道を歩んでも、あるいはテニスを貴重な財産として残し新たな進路を選んでも、どちらも素晴らしいことです。どのような瞬間にも、子どもたちが余裕と安らぎを失わないよう、最善の代案とロードマップを提示します。",
    "思いがけない怪我や突然の進路転換という、いかなる岐路においても、私たちの頼もしいパートナーである米国専門のメンタリング・進学教育機関が共にあります。奨学金を得て北米の名門大学へ安全に進学できるよう、Plan A から B、C、D、E まで、さまざまな場合を細やかに準備しています。どの道を歩んでも、子どもたちが夢をあきらめずに進めるよう、揺るがぬ支えとなります。",
    "プロとして可能性のある選手には、国際舞台で活躍できる道を開き、それに応じたトレーニング・メンタリング・ツアー日程の管理はもちろん、ツアー費用の奨学支援制度まで備えて、ATP・WTA で活躍する選手へと成長できるよう全力を尽くします。",
    "お子さまへの保護者の献身が最高の実りへとつながるよう、親の心と教育者の使命感を持って共に歩みます。GCM アカデミーが提案する安全で広いロードマップの上で、わが子が世界の舞台に堂々と立つ機会は、韓国・イタリア・上海をつなぐ GCM のグローバルネットワークを通じて、今や大きく開かれています。",
    "家族は家族らしく互いに愛し合い、未来は専門家とともに安心して備えていきましょう。最も信頼できる教育パートナーとして、いつもそばで心強く寄り添ってまいります。ありがとうございます。",
  ],
};

const it: DirectorMessageTx = {
  title: "Messaggio del Direttore",
  signature: "Oh Seong-gook, Fondatore e Direttore, GCM Academy",
  homeSummary: [
    "Salve. Sono Oh Seong-gook, fondatore e direttore della GCM Academy. A ogni genitore e atleta che è arrivato fino a noi, grazie dal profondo del cuore.",
    "Credo che il tennis sia più di uno sport: è una grande educazione che diventa il nutrimento più forte per la vita. All'interno di una comunità di atleti con obiettivi chiari, i bambini costruiscono una resistenza e una grinta oltre i propri limiti, una mentalità professionale che resta salda nella vittoria come nella sconfitta, e l'autodisciplina e il buon atteggiamento per governare se stessi. Il sudore onesto versato in campo diventa il fondamento di un'educazione della persona intera, che forma il carattere.",
    "Molti genitori, spinti da una vaga ansia per il futuro, finiscono per mettere sotto pressione i figli. La GCM Academy porterà per voi quel peso. La strategia per le ammissioni, le preoccupazioni sul percorso e il coaching sono affidati ai nostri specialisti — tra cui veterani funzionari delle ammissioni nordamericane — e insieme a istituzioni specializzate per le ammissioni negli USA prepariamo percorsi di borse di studio e università a partire dal Piano A. A casa, vi preghiamo di donare solo amore e incoraggiamento.",
  ],
  before: [
    "Salve. Sono Oh Seong-gook, fondatore e direttore della GCM Academy. A ogni genitore e atleta che è arrivato fino a noi, grazie dal profondo del cuore.",
    "Anni fa, i miei genitori credettero nel potenziale illimitato del loro figlio e presero la coraggiosa decisione di darmi una chance sul palcoscenico più grande del tennis professionistico internazionale. Uscendo dagli schemi convenzionali, scelsero un ambiente fatto di 'accademia' e 'competizioni internazionali' — lasciando persino le scuole medie — così che potessi concentrarmi interamente sul miglioramento del mio tennis e sulla mia crescita come persona. È grazie al loro profondo amore e al loro coraggio, al dedicare tutto al futuro del figlio, che oggi posso essere qui come educatore.",
    "Per questo comprendo, più di chiunque altro, il desiderio sincero dei genitori di aprire ai propri figli un mondo più ampio e opportunità più sicure — e perfino l'ansia che a volte si nasconde dietro quel desiderio.",
    "Il tennis è più di uno sport; è una grande educazione che diventa il nutrimento più forte per la vita. All'interno di una comunità di atleti con obiettivi chiari, i bambini imparano una resistenza eccezionale oltre i propri limiti, la grinta, una mentalità professionale salda e una gestione mentale che resta calma nella vittoria come nella sconfitta, e l'autodisciplina e il buon atteggiamento per governare se stessi. Il sudore onesto versato in campo diventa il fondamento di un'educazione della persona intera che forma il carattere.",
    "Il tennis è anche l'arena più grande e dignitosa per 'costruire una rete globale' che funziona ovunque nel mondo. Anche se all'inizio impugniamo la racchetta con obiettivi e aspettative diversi, qui diventiamo tutti una cosa sola — perché una sola racchetta permette di condividere legami profondi e gioia oltre le generazioni e i confini.",
    "All'interno della GCM Academy, giocatori professionisti in attività e membri del club GCM si incoraggiano a vicenda attraverso partite di scambio. In questa bella compagnia, i bambini imparano il saldo valore dell'appartenenza, incarnano l'altruismo e un'influenza positiva verso gli altri, e crescono naturalmente come leader dalle dignitose 'buone maniere globali'. Oltre a una specialità giovanile, acquisiscono uno sport compagno di tutta la vita, che arricchisce l'esistenza fino all'età senile.",
  ],
  quote: "Poiché il futuro di un bambino non è mai deciso da una sola possibilità o da un solo risultato, facciamo in modo che l'apprendimento non diventi mai pressione o stress.",
  after: [
    "Molti genitori, spinti da una vaga ansia per il futuro, finiscono per mettere sotto pressione i figli — e nasce una distanza nelle relazioni familiari che dovrebbero essere le più preziose.",
    "La GCM Academy vuole togliere quel pesante peso dalle spalle sia dei genitori sia dei figli. La strategia per le ammissioni e le dure preoccupazioni e il coaching sul futuro — noi educatori e specialisti li porteremo per voi. A casa, vi preghiamo di donare solo amore e sostegno incondizionato. Aiutare un bambino a sentire pienamente quell'amore e, a sua volta, a stare in campo con una responsabilità che nasce da sé per ricambiarlo — è questa la vera educazione che perseguiamo.",
    "A tal fine, gli educatori che collaborano con GCM sono veterani di altissimo livello che hanno servito per decenni come funzionari delle ammissioni in Nord America. Uniamo con cura non solo il coaching tennistico ma anche un mentoring della persona intera. Che un bambino percorra fino in fondo la strada del professionismo, oppure conservi il tennis come un bene prezioso e scelga una nuova direzione, va bene in ogni caso. In ogni momento presenteremo le migliori alternative e roadmap, perché i bambini non perdano mai la loro serenità.",
    "A ogni bivio — un infortunio inatteso o un improvviso cambio di direzione — i nostri partner fidati, istituzioni statunitensi specializzate in mentoring e ammissioni, sono al nostro fianco. Abbiamo preparato con cura i Piani dalla A alla B, C, D ed E, così che gli studenti possano entrare in sicurezza nelle prestigiose università nordamericane con una borsa di studio. Qualunque strada scelgano, saremo il sostegno saldo che impedisce loro di rinunciare ai propri sogni.",
    "Per gli atleti con potenziale professionistico apriamo la via per competere sul palcoscenico internazionale — con allenamenti su misura, mentoring, gestione del calendario del tour e persino un sostegno in borse di studio per le spese del tour — facendo il massimo perché crescano come giocatori capaci di competere nei circuiti ATP e WTA.",
    "Perché la dedizione di un genitore verso il proprio figlio porti i frutti migliori, cammineremo al vostro fianco con il cuore di un genitore e il senso di missione di un educatore. Sulla roadmap sicura e ampia che la GCM Academy offre, la possibilità per i nostri figli di stare con orgoglio sul palcoscenico mondiale è ora aperta attraverso la rete globale GCM che collega Corea, Italia e Shanghai.",
    "Che la famiglia si ami come famiglia, e che il futuro sia preparato con serenità insieme agli esperti. Come il vostro partner educativo più affidabile, saremo sempre al vostro fianco. Grazie.",
  ],
};

const fr: DirectorMessageTx = {
  title: "Message du Directeur",
  signature: "Oh Seong-gook, Fondateur et Directeur, GCM Academy",
  homeSummary: [
    "Bonjour. Je suis Oh Seong-gook, fondateur et directeur de la GCM Academy. À chaque parent et à chaque joueur qui est venu jusqu'à nous, merci du fond du cœur.",
    "Je crois que le tennis est bien plus qu'un sport : c'est une grande éducation qui devient le plus puissant des nourritures pour la vie. Au sein d'une communauté de joueurs aux objectifs clairs, les enfants développent une endurance et une combativité au-delà de leurs limites, un état d'esprit professionnel qui reste stable dans la victoire comme dans la défaite, ainsi que la maîtrise de soi et la bonne attitude pour se gouverner. La sueur honnête versée sur le court devient le fondement d'une éducation de la personne tout entière, qui forge le caractère.",
    "Beaucoup de parents, poussés par une vague anxiété quant à l'avenir, finissent par mettre la pression sur leurs enfants. La GCM Academy portera ce lourd fardeau à votre place. La stratégie d'admission, les inquiétudes de parcours et le coaching sont pris en charge par nos spécialistes — dont des vétérans anciens responsables d'admission nord-américains — et, avec des institutions américaines spécialisées dans les admissions, nous préparons des feuilles de route de bourses et d'université dès le Plan A. À la maison, n'offrez que de l'amour chaleureux et des encouragements.",
  ],
  before: [
    "Bonjour. Je suis Oh Seong-gook, fondateur et directeur de la GCM Academy. À chaque parent et à chaque joueur qui est venu jusqu'à nous, merci du fond du cœur.",
    "Il y a des années, mes propres parents ont cru au potentiel illimité de leur enfant et ont pris la décision audacieuse de me donner ma chance sur la plus grande scène du tennis professionnel international. Sortant du moule conventionnel, ils ont choisi un environnement fait d'« académie » et de « compétitions internationales » — quitte à quitter le collège — afin que je puisse me consacrer entièrement à progresser au tennis et à grandir comme personne. C'est grâce à leur amour profond et à leur courage, à tout donner pour l'avenir de leur enfant, que je peux aujourd'hui me tenir ici en tant qu'éducateur.",
    "C'est pourquoi je comprends, plus que quiconque, le vœu sincère des parents d'ouvrir à leurs enfants un monde plus vaste et des opportunités plus sûres — et même l'anxiété qui se cache parfois derrière ce vœu.",
    "Le tennis est bien plus qu'un sport ; c'est une grande éducation qui devient le plus puissant des nourritures pour la vie. Au sein d'une communauté de joueurs aux objectifs clairs, les enfants apprennent une endurance exceptionnelle au-delà de leurs limites, la combativité, un état d'esprit professionnel solide et une gestion mentale qui reste calme dans la victoire comme dans la défaite, ainsi que la maîtrise de soi et la bonne attitude pour se gouverner. La sueur honnête versée sur le court devient le fondement d'une éducation de la personne tout entière qui forge le caractère.",
    "Le tennis est aussi la plus grande et la plus digne des arènes pour « bâtir un réseau mondial » qui fonctionne partout dans le monde. Même si nous prenons d'abord la raquette avec des objectifs et des attentes différents, ici nous ne faisons plus qu'un — parce qu'une seule raquette permet de partager des liens profonds et de la joie par-delà les générations et les frontières.",
    "Au sein de la GCM Academy, des joueurs professionnels en activité et des membres du club GCM s'encouragent mutuellement lors de matchs d'échange. Dans ce bel accompagnement, les enfants apprennent la valeur solide de l'appartenance, incarnent l'altruisme et une influence positive envers les autres, et grandissent naturellement en leaders dotés de dignes « bonnes manières mondiales ». Au-delà d'une spécialité de jeunesse, ils acquièrent un sport compagnon de toute une vie, qui enrichit l'existence jusqu'à l'âge mûr.",
  ],
  quote: "Parce que l'avenir d'un enfant n'est jamais décidé par une seule possibilité ni par un seul résultat, nous veillons à ce que l'apprentissage ne devienne jamais une pression ni un stress.",
  after: [
    "Beaucoup de parents, poussés par une vague anxiété quant à l'avenir, finissent par mettre la pression sur leurs enfants — et une distance s'installe dans les relations familiales qui devraient être les plus précieuses.",
    "La GCM Academy veut ôter cette lourde anxiété des épaules des parents comme des enfants. La stratégie d'admission, les dures inquiétudes et le coaching concernant l'avenir — nous, les éducateurs et les spécialistes, les porterons pour vous. À la maison, n'offrez qu'un amour chaleureux et un soutien inconditionnel. Aider un enfant à ressentir pleinement cet amour et, en retour, à se tenir sur le court avec une responsabilité venue de lui-même pour le lui rendre — telle est la véritable éducation que nous poursuivons.",
    "À cette fin, les éducateurs qui travaillent avec GCM sont des vétérans de tout premier plan, qui ont servi pendant des décennies comme responsables d'admission en Amérique du Nord. Nous associons avec soin non seulement le coaching de tennis, mais aussi un mentorat de la personne tout entière. Qu'un enfant suive jusqu'au bout la voie du professionnalisme, ou qu'il garde le tennis comme un bien précieux et choisisse une nouvelle direction, tout cela est bien. À chaque instant, nous présenterons les meilleures alternatives et feuilles de route afin que les enfants ne perdent jamais leur sérénité.",
    "À chaque croisée des chemins — une blessure inattendue ou un changement soudain de direction — nos partenaires de confiance, des institutions américaines spécialisées dans le mentorat et les admissions, sont à nos côtés. Nous avons soigneusement préparé des Plans A, B, C, D et E afin que les élèves puissent intégrer en toute sécurité de prestigieuses universités nord-américaines avec une bourse. Quel que soit le chemin qu'ils empruntent, nous serons le soutien solide qui les empêche de renoncer à leurs rêves.",
    "Pour les joueurs au potentiel professionnel, nous ouvrons la voie vers la scène internationale — avec un entraînement adapté, du mentorat, la gestion du calendrier du circuit, et même un soutien en bourses pour les frais de tournée — en faisant tout notre possible pour qu'ils deviennent des joueurs évoluant sur les circuits ATP et WTA.",
    "Afin que le dévouement d'un parent envers son enfant porte les plus beaux fruits, nous cheminerons à vos côtés avec un cœur de parent et le sens de la mission d'un éducateur. Sur la feuille de route sûre et vaste qu'offre la GCM Academy, la chance pour nos enfants de se tenir fièrement sur la scène mondiale est désormais ouverte grâce au réseau mondial GCM reliant la Corée, l'Italie et Shanghai.",
    "Que la famille s'aime comme une famille, et que l'avenir se prépare sereinement avec des experts. En tant que votre partenaire éducatif le plus fiable, nous serons toujours à vos côtés. Merci.",
  ],
};

const es: DirectorMessageTx = {
  title: "Mensaje del Director",
  signature: "Oh Seong-gook, Fundador y Director, GCM Academy",
  homeSummary: [
    "Hola. Soy Oh Seong-gook, fundador y director de la GCM Academy. A cada familia y a cada jugador que ha llegado hasta nosotros, gracias de todo corazón.",
    "Creo que el tenis es más que un deporte: es una gran educación que se convierte en el alimento más poderoso para la vida. Dentro de una comunidad de jugadores con objetivos claros, los niños desarrollan una resistencia y una garra más allá de sus límites, una mentalidad profesional que se mantiene firme en la victoria y en la derrota, y la autodisciplina y la buena actitud para gobernarse a sí mismos. El sudor honesto derramado en la pista se convierte en el fundamento de una educación de la persona íntegra, que forja el carácter.",
    "Muchas familias, movidas por una vaga inquietud por el futuro, terminan presionando a sus hijos. La GCM Academy llevará esa pesada carga por ustedes. La estrategia de admisiones, las preocupaciones sobre el futuro y el coaching están a cargo de nuestros especialistas —entre ellos veteranos exoficiales de admisiones norteamericanos— y, junto con instituciones estadounidenses especializadas en admisiones, preparamos hojas de ruta de becas y universidad desde el Plan A. En casa, por favor, ofrezcan solo amor cálido y ánimo.",
  ],
  before: [
    "Hola. Soy Oh Seong-gook, fundador y director de la GCM Academy. A cada familia y a cada jugador que ha llegado hasta nosotros, gracias de todo corazón.",
    "Hace años, mis propios padres creyeron en el potencial ilimitado de su hijo y tomaron la valiente decisión de darme una oportunidad en el escenario más grande del tenis profesional internacional. Saliéndose del molde convencional, eligieron un entorno de «academia» y «competiciones internacionales» —incluso dejando la secundaria— para que pudiera concentrarme por completo en mejorar mi tenis y crecer como persona. Es gracias a su profundo amor y a su valentía, a entregarlo todo por el futuro de su hijo, que hoy puedo estar aquí como educador.",
    "Por eso comprendo, más que nadie, el anhelo sincero de las familias que quieren abrir a sus hijos un mundo más amplio y oportunidades más seguras —e incluso la inquietud que a veces se esconde tras ese deseo.",
    "El tenis es más que un deporte; es una gran educación que se convierte en el alimento más poderoso para la vida. Dentro de una comunidad de jugadores con objetivos claros, los niños aprenden una resistencia excepcional más allá de sus límites, garra, una mentalidad profesional firme y una gestión mental que se mantiene serena en la victoria y en la derrota, y la autodisciplina y la buena actitud para gobernarse a sí mismos. El sudor honesto derramado en la pista se convierte en el fundamento de una educación de la persona íntegra que forja el carácter.",
    "El tenis es también el escenario más grande y digno para «construir una red global» que funciona en cualquier parte del mundo. Aunque al principio empuñemos la raqueta con objetivos y expectativas distintos, aquí todos nos volvemos uno, porque una sola raqueta permite compartir vínculos profundos y alegría a través de generaciones y fronteras.",
    "Dentro de la GCM Academy, jugadores profesionales en activo y miembros del club GCM se animan y se alientan mutuamente mediante partidos de intercambio. En esta hermosa compañía, los niños aprenden el firme valor de la pertenencia, encarnan el altruismo y una influencia positiva hacia los demás, y crecen de forma natural como líderes con dignas «buenas maneras globales». Más allá de una especialidad juvenil, obtienen un deporte compañero para toda la vida, que enriquece la existencia hasta la vejez.",
  ],
  quote: "Puesto que el futuro de un niño nunca se decide por una sola posibilidad ni por un solo resultado, nos aseguramos de que el aprendizaje nunca se convierta en presión ni en estrés.",
  after: [
    "Muchas familias, movidas por una vaga inquietud por el futuro, terminan presionando a sus hijos, y surge una distancia en las relaciones familiares que deberían ser las más valiosas.",
    "La GCM Academy quiere quitar esa pesada inquietud de los hombros tanto de las familias como de los hijos. La estrategia de admisiones y las duras preocupaciones y el coaching sobre el futuro, los llevaremos por ustedes nosotros, los educadores y especialistas. En casa, por favor, ofrezcan solo amor cálido y apoyo incondicional. Ayudar a un niño a sentir plenamente ese amor y, a su vez, a pararse en la pista con una responsabilidad que nace de sí mismo para corresponderlo: esa es la verdadera educación que perseguimos.",
    "Para ello, los educadores que colaboran con GCM son veteranos de primer nivel que sirvieron durante décadas como oficiales de admisiones en Norteamérica. Combinamos con cuidado no solo el coaching de tenis, sino también una mentoría de la persona íntegra. Que un niño recorra hasta el final el camino del profesionalismo, o que conserve el tenis como un bien valioso y elija una nueva dirección, todo está bien. En cada momento presentaremos las mejores alternativas y hojas de ruta para que los niños nunca pierdan su serenidad.",
    "En cualquier encrucijada —una lesión inesperada o un cambio repentino de rumbo— nuestros socios de confianza, instituciones estadounidenses especializadas en mentoría y admisiones, están a nuestro lado. Hemos preparado con cuidado los Planes A, B, C, D y E para que los estudiantes puedan ingresar con seguridad en prestigiosas universidades norteamericanas con beca. Sea cual sea el camino que tomen, seremos el apoyo firme que les impida renunciar a sus sueños.",
    "Para los jugadores con potencial profesional abrimos el camino para competir en el escenario internacional —con entrenamiento a medida, mentoría, gestión del calendario del circuito e incluso apoyo en becas para los gastos de gira— haciendo todo lo posible para que crezcan como jugadores que compiten en los circuitos ATP y WTA.",
    "Para que la entrega de una familia hacia su hijo dé los mejores frutos, caminaremos a su lado con corazón de padre y con el sentido de misión de un educador. Sobre la hoja de ruta segura y amplia que ofrece la GCM Academy, la oportunidad de que nuestros hijos se paren con orgullo en el escenario mundial está ahora abierta a través de la red global de GCM que conecta Corea, Italia y Shanghái.",
    "Que la familia se ame como familia, y que el futuro se prepare con serenidad junto a los expertos. Como su socio educativo más confiable, siempre estaremos a su lado. Gracias.",
  ],
};

export const directorMessageByLocale: Partial<Record<Locale, DirectorMessageTx>> = {
  zh,
  ja,
  it,
  fr,
  es,
};
