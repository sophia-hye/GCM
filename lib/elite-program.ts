/**
 * GCM 엘리트 선수 전문 육성 프로그램 데이터
 * 한국어 원문은 작성자 원고 그대로 보존한다. (용어 임의 변경 금지)
 * 모듈 제목·설명은 7개 언어, 세부 항목(bullets)은 ko + en 제공(그 외 로케일은 en→ko 폴백).
 */
import type { I18nText } from "@/lib/i18n-pick";

export type EliteModule = {
  no: string;
  code: string; // 영문 헤딩(언어 중립 라벨)
  title: I18nText;
  desc: I18nText;
  points: I18nText[];
};

export const eliteModules: EliteModule[] = [
  {
    no: "01",
    code: "COURSE SELECTION TRAINING",
    title: {
      ko: "코스 선택 및 상황 판단 훈련",
      en: "Course Selection & Situational Judgment",
      zh: "线路选择与情境判断训练",
      ja: "コース選択＆状況判断トレーニング",
      it: "Scelta della traiettoria e lettura della situazione",
      fr: "Choix de trajectoire & lecture du jeu",
      es: "Elección de dirección y lectura de la situación",
    },
    desc: {
      ko: "상황에 따른 최적의 코스 선택과 상대의 예측을 역이용하는 전술적 판단 능력을 향상시킵니다.",
      en: "Sharpen the tactical judgment to choose the best shot direction for each situation and to turn the opponent's anticipation against them.",
      zh: "提升因势选择最佳线路、并反用对手预判的战术判断能力。",
      ja: "状況に応じた最適なコース選択と、相手の予測を逆手に取る戦術的判断力を高めます。",
      it: "Affina il giudizio tattico per scegliere la traiettoria migliore in ogni situazione e ritorcere contro l'avversario la sua anticipazione.",
      fr: "Aiguisez le jugement tactique pour choisir la meilleure trajectoire selon la situation et retourner l'anticipation de l'adversaire contre lui.",
      es: "Agudiza el criterio táctico para elegir la mejor dirección en cada situación y usar en contra la anticipación del rival.",
    },
    points: [
      { ko: "상황별 최적의 타구 방향 및 코스 선택", en: "Choosing the best shot direction and course for each situation" },
      { ko: "상대의 위치와 움직임을 활용한 공간 공략", en: "Attacking space by exploiting the opponent's position and movement" },
      { ko: "상대의 예측과 반대되는 역방향 코스 공략", en: "Attacking the reverse course against the opponent's read" },
      { ko: "상대를 움직이게 만드는 코스 구성", en: "Constructing courses that make the opponent move" },
      { ko: "공격 기회 창출을 위한 전략적 코스 선택", en: "Strategic course selection to create attacking chances" },
    ],
  },
  {
    no: "02",
    code: "MATCH SITUATION TRAINING",
    title: {
      ko: "실전 상황 및 포인트 완성 훈련",
      en: "Match Situation & Point Finishing",
      zh: "实战情境与得分完成训练",
      ja: "実戦状況＆ポイント完成トレーニング",
      it: "Situazioni di partita e chiusura del punto",
      fr: "Situations de match & conclusion du point",
      es: "Situaciones de partido y cierre del punto",
    },
    desc: {
      ko: "실제 경기에서 발생하는 다양한 상황을 재현하고, 주어진 패턴을 통해 포인트를 완성하는 능력을 기릅니다.",
      en: "Recreate the situations that arise in real matches and build the ability to finish points through set patterns.",
      zh: "还原实际比赛中出现的各种情境，通过既定套路培养完成得分的能力。",
      ja: "実際の試合で生じる様々な状況を再現し、与えられたパターンでポイントを完成させる能力を養います。",
      it: "Ricrea le situazioni che emergono nelle partite reali e sviluppa la capacità di chiudere i punti attraverso schemi prestabiliti.",
      fr: "Recréez les situations des vrais matchs et développez la capacité à conclure les points selon des schémas établis.",
      es: "Recrea las situaciones que surgen en partidos reales y desarrolla la capacidad de cerrar puntos mediante patrones definidos.",
    },
    points: [
      { ko: "상황별 전술 패턴 훈련", en: "Situation-based tactical pattern drills" },
      { ko: "공격 전개 및 포인트 연결 능력 향상", en: "Developing attacks and linking points" },
      { ko: "찬스볼을 활용한 결정력 강화", en: "Sharpening the finish on chance balls" },
      { ko: "중요한 순간의 마무리 능력 향상", en: "Closing ability in key moments" },
      { ko: "경기 흐름과 상황에 따른 전략적 대응", en: "Strategic responses to game flow and situation" },
    ],
  },
  {
    no: "03",
    code: "REPETITION TRAINING",
    title: {
      ko: "상황별 반복 및 기술 완성 훈련",
      en: "Repetition & Skill Mastery",
      zh: "情境反复与技术精炼训练",
      ja: "状況別反復＆技術完成トレーニング",
      it: "Ripetizione e padronanza tecnica",
      fr: "Répétition & maîtrise technique",
      es: "Repetición y dominio técnico",
    },
    desc: {
      ko: "공격, 주도권 확보, 중립 상황 등 다양한 경기 상황을 반복적으로 훈련하여 기술의 안정성과 완성도를 높입니다.",
      en: "Repeatedly train attacking, initiative-taking, and neutral situations to raise the stability and completeness of your skills.",
      zh: "反复训练进攻、争夺主动权、中立等多种比赛情境，提升技术的稳定性与完成度。",
      ja: "攻撃・主導権確保・中立状況など様々な試合状況を反復的に訓練し、技術の安定性と完成度を高めます。",
      it: "Allena ripetutamente situazioni di attacco, di iniziativa e neutre per aumentare stabilità e completezza dei colpi.",
      fr: "Entraînez de façon répétée les situations d'attaque, de prise d'initiative et neutres pour gagner en stabilité et en maîtrise.",
      es: "Entrena repetidamente situaciones de ataque, de iniciativa y neutras para aumentar la estabilidad y la solidez técnica.",
    },
    points: [
      { ko: "공격 상황에서의 부분 기술 반복 훈련", en: "Repeating partial skills in attacking situations" },
      { ko: "주도권을 가져오기 위한 리딩(Leading) 훈련", en: "Leading drills to take the initiative" },
      { ko: "중립 상황에서의 안정적인 랠리 유지", en: "Sustaining stable rallies in neutral situations" },
      { ko: "특정 기술 및 타구 패턴의 집중 반복", en: "Focused repetition of specific skills and shot patterns" },
      { ko: "반복 훈련을 통한 기술의 자동화 및 일관성 향상", en: "Automating skills and improving consistency through repetition" },
    ],
  },
  {
    no: "04",
    code: "ENDURANCE & DEFENSIVE TRAINING",
    title: {
      ko: "지속력 및 수비 전환 훈련",
      en: "Endurance & Defensive Transition",
      zh: "持续力与防守转换训练",
      ja: "持続力＆守備転換トレーニング",
      it: "Resistenza e transizione difensiva",
      fr: "Endurance & transition défensive",
      es: "Resistencia y transición defensiva",
    },
    desc: {
      ko: "긴 랠리와 어려운 상황에서도 집중력을 유지하고, 수비를 통해 경기의 흐름을 가져오는 능력을 기릅니다.",
      en: "Hold focus through long rallies and tough spots, and learn to swing momentum your way through defense.",
      zh: "在长回合与困难局面中保持专注，并通过防守把比赛节奏拉到自己一边。",
      ja: "長いラリーや苦しい状況でも集中力を保ち、守備から試合の流れを引き寄せる能力を養います。",
      it: "Mantieni la concentrazione in scambi lunghi e momenti difficili e impara a girare l'inerzia a tuo favore con la difesa.",
      fr: "Gardez la concentration dans les longs échanges et les moments difficiles, et apprenez à renverser le momentum par la défense.",
      es: "Mantén la concentración en peloteos largos y momentos difíciles, y aprende a girar la inercia a tu favor mediante la defensa.",
    },
    points: [
      { ko: "장시간 랠리 지속 능력 향상", en: "Improving endurance for long rallies" },
      { ko: "움직임과 타구의 연속성을 유지하는 훈련", en: "Keeping movement and striking continuous" },
      { ko: "불리한 상황에서의 수비 및 회복 능력 강화", en: "Strengthening defense and recovery when behind" },
      { ko: "수비 상황에서 공격 기회로 전환하는 훈련", en: "Turning defense into attacking chances" },
      { ko: "체력적 한계 상황에서의 집중력 및 경기 운영 능력 향상", en: "Focus and match management at physical limits" },
    ],
  },
  {
    no: "05",
    code: "TOUCH & FEEL TRAINING",
    title: {
      ko: "볼 감각 및 섬세한 기술 훈련",
      en: "Touch & Feel",
      zh: "球感与细腻技术训练",
      ja: "ボール感覚＆繊細な技術トレーニング",
      it: "Tocco e sensibilità",
      fr: "Toucher & sensation",
      es: "Toque y sensibilidad",
    },
    desc: {
      ko: "다양한 구질과 타구 감각을 익히고, 상황에 따라 섬세하게 볼을 다룰 수 있는 능력을 향상시킵니다.",
      en: "Master a range of ball types and feel, and develop the ability to handle the ball with finesse as the situation demands.",
      zh: "掌握多种球性与击球手感，提升因势细腻处理球的能力。",
      ja: "多様な球質と打球感覚を身につけ、状況に応じて繊細にボールを扱う能力を高めます。",
      it: "Padroneggia diversi tipi di palla e il tocco, sviluppando la capacità di gestire la palla con finezza secondo la situazione.",
      fr: "Maîtrisez divers types de balle et le toucher, et développez la capacité à manier la balle avec finesse selon la situation.",
      es: "Domina distintos tipos de bola y el toque, y desarrolla la capacidad de manejar la bola con finura según la situación.",
    },
    points: [
      { ko: "디펜스 상황에서의 안정적인 볼 컨트롤", en: "Stable ball control in defensive situations" },
      { ko: "슬라이스의 구질 및 깊이 조절", en: "Controlling slice quality and depth" },
      { ko: "드롭샷 및 숏볼 활용 능력", en: "Using drop shots and short balls" },
      { ko: "볼의 높이, 속도, 회전 변화에 대한 적응", en: "Adapting to changes in height, speed and spin" },
      { ko: "다양한 타구 감각과 터치 능력 향상", en: "Improving varied striking feel and touch" },
    ],
  },
  {
    no: "06",
    code: "SERVE DEVELOPMENT TRAINING",
    title: {
      ko: "서브 기술 및 퍼포먼스 훈련",
      en: "Serve Development",
      zh: "发球技术与表现训练",
      ja: "サーブ技術＆パフォーマンストレーニング",
      it: "Sviluppo del servizio",
      fr: "Développement du service",
      es: "Desarrollo del saque",
    },
    desc: {
      ko: "체중 이동과 신체 회전의 효율적인 활용을 통해 서브의 스피드, 파워, 구질 및 성공 확률을 향상시킵니다.",
      en: "Use weight transfer and body rotation efficiently to improve serve speed, power, variety and success rate.",
      zh: "通过高效运用重心转移与身体旋转，提升发球的速度、力量、球性与成功率。",
      ja: "体重移動と身体回転の効率的な活用により、サーブのスピード・パワー・球質・成功率を高めます。",
      it: "Sfrutta trasferimento del peso e rotazione del corpo per migliorare velocità, potenza, varietà e percentuale del servizio.",
      fr: "Exploitez le transfert de poids et la rotation du corps pour améliorer la vitesse, la puissance, la variété et la réussite au service.",
      es: "Aprovecha la transferencia de peso y la rotación del cuerpo para mejorar velocidad, potencia, variedad y efectividad del saque.",
    },
    points: [
      { ko: "체중 이동 및 운동 사슬(Kinetic Chain) 활용", en: "Using weight transfer and the kinetic chain" },
      { ko: "스윙 스피드와 임팩트 파워 향상", en: "Improving swing speed and impact power" },
      { ko: "플랫, 슬라이스, 킥 서브 등 다양한 구질 훈련", en: "Training flat, slice and kick serves" },
      { ko: "코스별 서브 정확도 및 구질 변화", en: "Serve accuracy and variation by course" },
      { ko: "퍼스트 서브 성공률과 세컨드 서브 안정성 강화", en: "First-serve percentage and second-serve stability" },
      { ko: "경기 상황에 따른 서브 전략 및 패턴 훈련", en: "Serve strategy and patterns by match situation" },
    ],
  },
  {
    no: "07",
    code: "PHYSICAL & POWER TRAINING",
    title: {
      ko: "피지컬 및 파워 퍼포먼스 훈련",
      en: "Physical & Power",
      zh: "体能与力量表现训练",
      ja: "フィジカル＆パワーパフォーマンストレーニング",
      it: "Fisico e potenza",
      fr: "Physique & puissance",
      es: "Físico y potencia",
    },
    desc: {
      ko: "효율적인 신체 움직임과 폭발적인 파워를 만들어 경기에서 필요한 운동 능력을 극대화합니다.",
      en: "Build efficient movement and explosive power to maximize the athleticism a match demands.",
      zh: "打造高效的身体动作与爆发力，将比赛所需的运动能力最大化。",
      ja: "効率的な身体の動きと爆発的なパワーを作り、試合に必要な運動能力を最大化します。",
      it: "Costruisci movimenti efficienti e potenza esplosiva per massimizzare l'atletismo richiesto in partita.",
      fr: "Développez des mouvements efficaces et une puissance explosive pour maximiser l'athlétisme qu'exige un match.",
      es: "Desarrolla un movimiento eficiente y potencia explosiva para maximizar el atletismo que exige un partido.",
    },
    points: [
      { ko: "스윙 스피드 및 폭발적인 파워 향상", en: "Improving swing speed and explosive power" },
      { ko: "코어 안정성 및 회전 파워 강화", en: "Core stability and rotational power" },
      { ko: "지면 반력(Ground Force)을 활용한 파워 생성", en: "Generating power from ground force" },
      { ko: "신체 회전과 운동 사슬의 효율적인 연결", en: "Efficiently linking body rotation and the kinetic chain" },
      { ko: "순발력, 민첩성 및 풋워크 향상", en: "Quickness, agility and footwork" },
      { ko: "서킷 트레이닝을 통한 경기 체력 강화", en: "Match fitness through circuit training" },
      { ko: "경기력 향상과 부상 예방을 위한 신체 밸런스 관리", en: "Body-balance management for performance and injury prevention" },
    ],
  },
];
