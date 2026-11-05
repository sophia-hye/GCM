/**
 * GCM 키즈 전술반 8단계 커리큘럼 데이터
 * 한국어 원문은 작성자 원고 그대로 보존한다. (용어 임의 변경 금지)
 * 세부 드릴은 ko + en 제공(그 외 로케일은 en→ko 폴백), 상위 구성/마케팅 문구는 7개 언어 전체 제공.
 */
import type { I18nText } from "@/lib/i18n-pick";

export type KidsDrill = { name: I18nText; desc: I18nText; effect: I18nText };
export type KidsPart = {
  no: string;
  theme: I18nText;
  title: I18nText;
  goal: I18nText;
  drills: KidsDrill[];
};

export const kidsCurriculum: KidsPart[] = [
  {
    no: "Part 1",
    theme: {
      ko: "감각 & 균형",
      en: "Feel & Balance",
      zh: "感觉与平衡",
      ja: "感覚＆バランス",
      it: "Sensibilità & Equilibrio",
      fr: "Sensation & Équilibre",
      es: "Sensación y Equilibrio",
    },
    title: {
      ko: "라켓 & 공과 친해지기",
      en: "Befriending the Racket & Ball",
      zh: "与球拍和球成为朋友",
      ja: "ラケット＆ボールと仲良くなる",
      it: "Fare amicizia con racchetta e palla",
      fr: "Apprivoiser la raquette et la balle",
      es: "Hacer amistad con la raqueta y la pelota",
    },
    goal: {
      ko: "라켓면 조절 능력을 키우고 공과의 친밀감 및 협응력 높이기",
      en: "Build racket-face control and grow familiarity with the ball and coordination",
      zh: "培养拍面控制能力，提升与球的亲近感和协调性",
      ja: "ラケット面のコントロール力を養い、ボールへの親しみと協応力を高める",
      it: "Sviluppare il controllo del piatto corde e aumentare la confidenza con la palla e la coordinazione",
      fr: "Développer le contrôle du tamis et renforcer la familiarité avec la balle et la coordination",
      es: "Desarrollar el control de la cara de la raqueta y aumentar la familiaridad con la pelota y la coordinación",
    },
    drills: [
      {
        name: { ko: "에그 앤 스푼", en: "Egg & Spoon" },
        desc: { ko: "라켓 위 공 올리고 지그재그 걷기", en: "Balance a ball on the racket and walk a zigzag" },
        effect: { ko: "스위트스팟 중심 유지력 및 밸런스 향상", en: "Keeps the ball on the sweet spot and improves balance" },
      },
      {
        name: { ko: "바운스 드블", en: "Bounce Dribble" },
        desc: { ko: "라켓으로 공 바운드하며 콘 돌고 오기", en: "Dribble the ball with the racket around a cone and back" },
        effect: { ko: "하향 임팩트 감각 및 손목 안정성", en: "Downward-impact feel and wrist stability" },
      },
      {
        name: { ko: "꼬깔콘 캐치", en: "Cone Catch" },
        desc: { ko: "삼각콘으로 날아오는 공 받아내기", en: "Catch an incoming ball with a cone" },
        effect: { ko: "공 궤적 예측력 및 시선 고정 능력", en: "Trajectory prediction and steady eye focus" },
      },
      {
        name: { ko: "풍선 리프팅", en: "Balloon Lifting" },
        desc: { ko: "풍선 쳐 올리기", en: "Tap a balloon upward" },
        effect: { ko: "여유로운 반응 시간 확보 및 상체 유연성 배양", en: "Builds relaxed reaction time and upper-body flexibility" },
      },
      {
        name: { ko: "목표물 맞히기", en: "Target Hit" },
        desc: { ko: "콘 공간 안으로 밀어 넣기", en: "Push the ball into the cone zone" },
        effect: { ko: "라켓면 밀어주기 방향성 조절 체득", en: "Learn directional control by pushing through the racket face" },
      },
    ],
  },
  {
    no: "Part 2",
    theme: {
      ko: "폼 & 메커니즘",
      en: "Form & Mechanics",
      zh: "动作与机制",
      ja: "フォーム＆メカニズム",
      it: "Forma & Meccanica",
      fr: "Forme & Mécanique",
      es: "Forma y Mecánica",
    },
    title: {
      ko: "올바른 스탠스 & 포핸드 기본 스윙",
      en: "Proper Stance & Forehand Basics",
      zh: "正确站位与正手基本挥拍",
      ja: "正しいスタンス＆フォアハンド基本スイング",
      it: "Postura corretta & Dritto di base",
      fr: "Bonne posture & Coup droit de base",
      es: "Postura correcta y golpe de derecha básico",
    },
    goal: {
      ko: "회전 동작과 올바른 임팩트 스탠스 및 체중 이동 익히기",
      en: "Learn rotation, a correct impact stance, and weight transfer",
      zh: "掌握转体动作、正确的击球站位与重心转移",
      ja: "回転動作と正しいインパクトのスタンス、体重移動を身につける",
      it: "Imparare la rotazione, la postura d'impatto corretta e il trasferimento del peso",
      fr: "Apprendre la rotation, une posture d'impact correcte et le transfert de poids",
      es: "Aprender la rotación, una postura de impacto correcta y la transferencia de peso",
    },
    drills: [
      {
        name: { ko: "납작콘 스탠스 & 던지기", en: "Flat-Cone Stance & Throw" },
        desc: { ko: "몸 틀어 스탠스 잡고 공 던지기", en: "Turn the body, set the stance, and throw the ball" },
        effect: { ko: "체중 이동 및 상체 회전 감각", en: "Weight transfer and upper-body rotation feel" },
      },
      {
        name: { ko: "4단계 포핸드 스윙", en: "4-Step Forehand Swing" },
        desc: { ko: "무릎 굴리기 ➔ 무릎 넘기기 ➔ 의자 스윙 ➔ 서서 완성", en: "Knee roll → over-the-knee → chair swing → standing finish" },
        effect: { ko: "높낮이별 타점 형성 및 단계별 성취감", en: "Forms contact points at each height with step-by-step achievement" },
      },
      {
        name: { ko: "래더 스텝 + 스윙", en: "Ladder Step + Swing" },
        desc: { ko: "사다리 스텝 후 스윙", en: "Swing after ladder footwork" },
        effect: { ko: "하체 발놀림과 상체 스윙의 분리 및 리듬감", en: "Separates footwork from the upper-body swing and builds rhythm" },
      },
      {
        name: { ko: "얼음! 멈춤 스윙", en: "Freeze! Stop Swing" },
        desc: { ko: "\"스톱!\" 신호에 팔로우 스루 유지", en: "Hold the follow-through on the \"Stop!\" signal" },
        effect: { ko: "피니시 코어 밸런스 및 집중력 강화", en: "Finish-position core balance and focus" },
      },
    ],
  },
  {
    no: "Part 3",
    theme: {
      ko: "양손 스윙",
      en: "Two-Handed Swing",
      zh: "双手挥拍",
      ja: "両手スイング",
      it: "Rovescio a due mani",
      fr: "Revers à deux mains",
      es: "Golpe a dos manos",
    },
    title: {
      ko: "백핸드 기초 & 두 손의 협응력",
      en: "Backhand Basics & Two-Hand Coordination",
      zh: "反手基础与双手协调",
      ja: "バックハンド基礎＆両手の協応力",
      it: "Rovescio di base & Coordinazione a due mani",
      fr: "Bases du revers & Coordination des deux mains",
      es: "Fundamentos de revés y coordinación a dos manos",
    },
    goal: {
      ko: "신체 좌우 균형 발달 및 양손을 활용한 백핸드 타구 기초 다지기",
      en: "Develop left-right body balance and lay the foundation for two-handed backhands",
      zh: "发展身体左右平衡，打好双手反手击球的基础",
      ja: "身体の左右バランスを発達させ、両手を使うバックハンドの基礎を固める",
      it: "Sviluppare l'equilibrio destra-sinistra e costruire le basi del rovescio a due mani",
      fr: "Développer l'équilibre gauche-droite et poser les bases du revers à deux mains",
      es: "Desarrollar el equilibrio izquierda-derecha y sentar las bases del revés a dos manos",
    },
    drills: [
      {
        name: { ko: "비주도 손 밀어주기", en: "Non-Dominant Hand Push" },
        desc: { ko: "왼손으로 공 밀어 넘기기", en: "Push the ball over with the left hand" },
        effect: { ko: "백핸드 면 조절 및 힘 전달력 이해", en: "Backhand face control and understanding force transfer" },
      },
      {
        name: { ko: "양손 잡고 거울 스윙", en: "Two-Hand Mirror Swing" },
        desc: { ko: "포핸드 반대 방향 거울 스윙", en: "Mirror swing opposite to the forehand" },
        effect: { ko: "투핸드 회전 축 안정화 및 골반 회전", en: "Stabilizes the two-handed rotation axis and hip turn" },
      },
      {
        name: { ko: "투핸드 드롭 앤 힛", en: "Two-Hand Drop & Hit" },
        desc: { ko: "직접 떨어뜨리고 양손 스윙", en: "Self-drop and swing with two hands" },
        effect: { ko: "정확한 바운드 타점 잡기 및 협응력", en: "Finding the precise bounce contact point and coordination" },
      },
      {
        name: { ko: "포 & 백 전환 릴레이", en: "Fore & Back Switch Relay" },
        desc: { ko: "구호에 맞춰 라켓 손 전환", en: "Switch the racket hand on the call" },
        effect: { ko: "순간 그립 전환 반응 속도 극대화", en: "Maximizes instant grip-switch reaction speed" },
      },
    ],
  },
  {
    no: "Part 4",
    theme: {
      ko: "풋워크 & 타점",
      en: "Footwork & Contact Point",
      zh: "步法与击球点",
      ja: "フットワーク＆打点",
      it: "Gioco di gambe & Punto d'impatto",
      fr: "Jeu de jambes & Point d'impact",
      es: "Juego de pies y punto de impacto",
    },
    title: {
      ko: "공간 감각 & 방향 전환 스텝",
      en: "Spatial Awareness & Direction-Change Steps",
      zh: "空间感与变向步法",
      ja: "空間感覚＆方向転換ステップ",
      it: "Consapevolezza spaziale & Passi di cambio direzione",
      fr: "Sens de l'espace & Pas de changement de direction",
      es: "Conciencia espacial y pasos de cambio de dirección",
    },
    goal: {
      ko: "코트 안에서 자유롭게 움직이며 공과의 최적 거리를 맞추는 능력 배양",
      en: "Move freely on court and learn to find the ideal distance to the ball",
      zh: "在球场上自由移动，培养与球保持最佳距离的能力",
      ja: "コート内を自由に動き、ボールとの最適な距離を合わせる能力を養う",
      it: "Muoversi liberamente in campo e trovare la distanza ideale dalla palla",
      fr: "Se déplacer librement sur le court et trouver la distance idéale avec la balle",
      es: "Moverse libremente en la cancha y encontrar la distancia ideal a la pelota",
    },
    drills: [
      {
        name: { ko: "드롭 앤 힛 (Drop & Hit)", en: "Drop & Hit" },
        desc: { ko: "직접 떨어뜨린 공 타격", en: "Strike a self-dropped ball" },
        effect: { ko: "공의 정점 타점 감각 및 자율 타구", en: "Feel for the peak contact point and self-fed striking" },
      },
      {
        name: { ko: "컬러 콘 타겟팅", en: "Color Cone Targeting" },
        desc: { ko: "색깔 구호에 반응하여 이동", en: "Move in response to a color call" },
        effect: { ko: "청각-시각 반응 속도 및 민첩성", en: "Audio-visual reaction speed and agility" },
      },
      {
        name: { ko: "3방향 이동 스윙", en: "3-Direction Movement Swing" },
        desc: { ko: "앞/옆/뒤 위치 이동 후 타격", en: "Strike after moving front / side / back" },
        effect: { ko: "전후좌우 잔발 스텝 및 공간 감각 체득", en: "Small-step footwork in every direction and spatial awareness" },
      },
      {
        name: { ko: "콘 세우기 스피드 릴레이", en: "Cone-Standing Speed Relay" },
        desc: { ko: "쓰러진 콘 빠르게 세우기", en: "Stand up fallen cones quickly" },
        effect: { ko: "하체 근지구력 및 순발력 강화", en: "Lower-body endurance and explosive quickness" },
      },
    ],
  },
  {
    no: "Part 5",
    theme: {
      ko: "로브 & 드롭",
      en: "Lob & Drop",
      zh: "高球与放小球",
      ja: "ロブ＆ドロップ",
      it: "Pallonetto & Smorzata",
      fr: "Lob & Amortie",
      es: "Globo y Dejada",
    },
    title: {
      ko: "다양한 높낮이 조절 & 반응 능력",
      en: "Height Control & Reaction",
      zh: "多种高低控制与反应能力",
      ja: "様々な高低のコントロール＆反応力",
      it: "Controllo delle altezze & Reattività",
      fr: "Contrôle des hauteurs & Réactivité",
      es: "Control de alturas y capacidad de reacción",
    },
    goal: {
      ko: "공의 높낮이와 거리를 섬세하게 조절하는 터치 감각 익히기",
      en: "Develop the touch to finely control the ball's height and depth",
      zh: "掌握精细调节球的高低与距离的触球手感",
      ja: "ボールの高低と距離を繊細に調整するタッチ感覚を身につける",
      it: "Sviluppare il tocco per controllare con precisione altezza e profondità della palla",
      fr: "Développer le toucher pour contrôler finement la hauteur et la profondeur de la balle",
      es: "Desarrollar el toque para controlar con precisión la altura y la profundidad de la pelota",
    },
    drills: [
      {
        name: { ko: "살짝 넘기기 (드롭 Touch)", en: "Soft Drop (Touch)" },
        desc: { ko: "네트 바로 앞 부드럽게 넘기기", en: "Softly float the ball just over the net" },
        effect: { ko: "임팩트 시 힘 빼기 및 미세 손목 조절", en: "Releasing force at impact and fine wrist control" },
      },
      {
        name: { ko: "높이 띄우기 (키즈 로브)", en: "High Lift (Kids Lob)" },
        desc: { ko: "공을 높이 띄워 콘 박스에 넣기", en: "Loft the ball high into a cone box" },
        effect: { ko: "높은 궤적 거리 조절 및 체중 싣기", en: "High-arc depth control and loading weight" },
      },
      {
        name: { ko: "높은 공/낮은 공 스텝", en: "High Ball / Low Ball Step" },
        desc: { ko: "높낮이가 다른 공 맞추기", en: "Meet balls at different heights" },
        effect: { ko: "무릎 굽힘을 통한 타점 높이 조절 습관화", en: "Habitualizing contact-height control through knee bend" },
      },
      {
        name: { ko: "높낮이 캐치 게임", en: "Height Catch Game" },
        desc: { ko: "파트너가 던져주는 다양한 높이 공 잡기", en: "Catch balls a partner tosses at varying heights" },
        effect: { ko: "고저차 시선 추적 능력 극대화", en: "Maximizes eye-tracking across high and low balls" },
      },
    ],
  },
  {
    no: "Part 6",
    theme: {
      ko: "사회성 & 컨트롤",
      en: "Social Skills & Control",
      zh: "社交能力与控制",
      ja: "社会性＆コントロール",
      it: "Socialità & Controllo",
      fr: "Sociabilité & Contrôle",
      es: "Habilidades sociales y control",
    },
    title: {
      ko: "파트너 협동 & 스피드 훈련",
      en: "Partner Cooperation & Speed",
      zh: "搭档协作与速度训练",
      ja: "パートナー協働＆スピードトレーニング",
      it: "Cooperazione con il partner & Velocità",
      fr: "Coopération avec le partenaire & Vitesse",
      es: "Cooperación con la pareja y velocidad",
    },
    goal: {
      ko: "친구와 호흡을 맞추며 힘 조절과 정확한 방향성을 익히는 협동심 배양",
      en: "Sync with a friend to learn force control, accuracy, and teamwork",
      zh: "与朋友默契配合，培养力度控制、精准方向性与协作精神",
      ja: "友だちと呼吸を合わせ、力加減と正確な方向性を学ぶ協同心を育む",
      it: "Sincronizzarsi con un amico per imparare controllo della forza, precisione e spirito di squadra",
      fr: "Se synchroniser avec un ami pour apprendre le dosage, la précision et l'esprit d'équipe",
      es: "Sincronizarse con un amigo para aprender el control de la fuerza, la precisión y el trabajo en equipo",
    },
    drills: [
      {
        name: { ko: "2인 1조 공 굴리기", en: "Pairs Ball Roll" },
        desc: { ko: "콘 사이로 정확하게 굴리기", en: "Roll the ball accurately between cones" },
        effect: { ko: "상대가 받기 좋은 속도 조절 및 배려심", en: "Pace control for an easy-to-receive ball, and consideration" },
      },
      {
        name: { ko: "거울 놀이 (미러 게임)", en: "Mirror Game" },
        desc: { ko: "리더의 동작 따라하기", en: "Follow the leader's movements" },
        effect: { ko: "관찰력, 동체 시력 및 예측력 향상", en: "Observation, dynamic vision, and anticipation" },
      },
      {
        name: { ko: "토스 앤 캐치", en: "Toss & Catch" },
        desc: { ko: "네트 사이에 두고 손으로 주고받기", en: "Toss and catch by hand across the net" },
        effect: { ko: "네트 너머 공간 거리감 체득", en: "Sense of distance across the net" },
      },
      {
        name: { ko: "공 모으기 미션", en: "Ball Gathering Mission" },
        desc: { ko: "특정 색상 공 골라 담기", en: "Pick and collect balls of a specific color" },
        effect: { ko: "팀워크, 협동심 및 빠른 상황 판단력", en: "Teamwork, cooperation, and quick decision-making" },
      },
    ],
  },
  {
    no: "Part 7",
    theme: {
      ko: "게임의 시작",
      en: "The Start of the Game",
      zh: "比赛的开始",
      ja: "ゲームの始まり",
      it: "L'inizio del gioco",
      fr: "Le début du jeu",
      es: "El inicio del juego",
    },
    title: {
      ko: "서비스(서브) 기초 & 리턴 준비",
      en: "Serve Basics & Return Readiness",
      zh: "发球基础与接发准备",
      ja: "サービス(サーブ)基礎＆リターン準備",
      it: "Basi del servizio & Preparazione alla risposta",
      fr: "Bases du service & Préparation au retour",
      es: "Fundamentos del saque y preparación del resto",
    },
    goal: {
      ko: "테니스 경기의 출발점인 서브 동작과 상대 공을 맞이하는 리턴 준비 자세 체득",
      en: "Learn the serve motion that starts every point and the ready stance to return",
      zh: "掌握作为比赛起点的发球动作，以及迎接来球的接发准备姿势",
      ja: "テニスの出発点であるサーブ動作と、相手の球を迎えるリターン準備の姿勢を身につける",
      it: "Imparare il movimento del servizio che avvia ogni punto e la posizione pronta per la risposta",
      fr: "Apprendre le mouvement de service qui lance chaque point et la position prête pour le retour",
      es: "Aprender el movimiento de saque que inicia cada punto y la postura lista para el resto",
    },
    drills: [
      {
        name: { ko: "하이 터치 토스 (Toss)", en: "High-Touch Toss" },
        desc: { ko: "공을 위로 똑바로 던져 잡기", en: "Toss the ball straight up and catch it" },
        effect: { ko: "수직 던지기 정밀도 및 손끝 감각", en: "Vertical-toss precision and fingertip feel" },
      },
      {
        name: { ko: "키즈 언더 서브 & 오버헤드 찌르기", en: "Kids Under-Serve & Overhead Poke" },
        desc: { ko: "밑에서 넘기기/위에서 쳐넘기기", en: "Serve underhand / poke the ball over from above" },
        effect: { ko: "상체 연신 동작 및 인플레이 능력", en: "Upper-body extension and the ability to start play" },
      },
      {
        name: { ko: "리턴 대기 스탠스", en: "Return Ready Stance" },
        desc: { ko: "스플릿 스텝 후 준비 자세", en: "Ready stance after a split step" },
        effect: { ko: "순발력을 높이는 스플릿 스텝 리듬 체득", en: "Split-step rhythm that sharpens quickness" },
      },
      {
        name: { ko: "서브 & 타겟 맞히기", en: "Serve & Target Hit" },
        desc: { ko: "서브로 캐릭터 타겟 맞히기", en: "Hit a character target with a serve" },
        effect: { ko: "목표를 향한 집중력 및 정확도 향상", en: "Focus on a target and accuracy" },
      },
    ],
  },
  {
    no: "Part 8",
    theme: {
      ko: "종합 실전",
      en: "Full Match Play",
      zh: "综合实战",
      ja: "総合実戦",
      it: "Partita completa",
      fr: "Match complet",
      es: "Juego de partido completo",
    },
    title: {
      ko: "네트 랠리 & 키즈 테니스 올림픽",
      en: "Net Rally & Kids Tennis Olympics",
      zh: "网前对拉与儿童网球奥林匹克",
      ja: "ネットラリー＆キッズテニスオリンピック",
      it: "Palleggio a rete & Olimpiadi di tennis per bambini",
      fr: "Échange au filet & Olympiades de tennis enfants",
      es: "Peloteo en la red y Olimpiadas de tenis infantil",
    },
    goal: {
      ko: "8일간 배운 모든 기술을 종합하여 실전 랠리와 재미있는 미니 경기 경험",
      en: "Bring together every skill from the 8 sessions in real rallies and fun mini-matches",
      zh: "综合8天所学的全部技术，体验实战对拉与有趣的迷你比赛",
      ja: "8日間で学んだすべての技術を総合し、実戦ラリーと楽しいミニ試合を経験する",
      it: "Unire tutte le abilità delle 8 sessioni in scambi reali e divertenti mini-partite",
      fr: "Réunir toutes les compétences des 8 séances dans de vrais échanges et de petits matchs amusants",
      es: "Reunir todas las habilidades de las 8 sesiones en peloteos reales y divertidos mini-partidos",
    },
    drills: [
      {
        name: { ko: "밴드 활용 밸런스 랠리", en: "Band Balance Rally" },
        desc: { ko: "왼손으로 밴드 잡고 랠리", en: "Rally while holding a band in the left hand" },
        effect: { ko: "비주도 손 균형을 통한 랠리 유지력", en: "Rally endurance through non-dominant-hand balance" },
      },
      {
        name: { ko: "원바운드 네트 랠리", en: "One-Bounce Net Rally" },
        desc: { ko: "원바운드 후 넘기는 연속 랠리", en: "Continuous rally returning after one bounce" },
        effect: { ko: "상대 구질 적응 및 지속적 랠리 성취감", en: "Adapting to the opponent's ball and the joy of sustained rallies" },
      },
      {
        name: { ko: "1:1 미니 존(Zone) 게임", en: "1:1 Mini Zone Game" },
        desc: { ko: "레드볼 활용 미니 매치", en: "Mini match using red balls" },
        effect: { ko: "기본 점수 계산 방식 및 경기 매너 체득", en: "Basic scoring and match etiquette" },
      },
      {
        name: { ko: "키즈 테니스 올림픽", en: "Kids Tennis Olympics" },
        desc: { ko: "미션 수행 왕중왕전", en: "A grand mission-based championship" },
        effect: { ko: "동기부여 극대화 및 수업 만족도 완성", en: "Maximum motivation and a complete, satisfying finish" },
      },
    ],
  },
];

/** 드릴 총 개수 (상단 통계용) */
export const kidsDrillCount = kidsCurriculum.reduce((n, p) => n + p.drills.length, 0);
