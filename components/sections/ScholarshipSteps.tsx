import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

const STEPS = [
  {
    title: { ko: "온라인 신청", en: "Apply Online", zh: "在线申请", ja: "オンライン申請", it: "Candidatura online", fr: "Candidature en ligne", es: "Solicitud en línea" },
    body: {
      ko: "기본 정보 · 테니스 프로필 · 목표를 작성해 온라인으로 제출합니다.",
      en: "Submit your basic info, tennis profile and goals through the online form.",
      zh: "通过在线表单提交您的基本信息、网球资料和目标。",
      ja: "基本情報・テニスプロフィール・目標をオンラインフォームで提出します。",
      it: "Invia i tuoi dati di base, il profilo tennistico e gli obiettivi tramite il modulo online.",
      fr: "Soumettez vos informations de base, votre profil tennis et vos objectifs via le formulaire en ligne.",
      es: "Envía tus datos básicos, tu perfil de tenis y tus objetivos a través del formulario en línea.",
    },
  },
  {
    title: { ko: "서류 검토", en: "Document Review", zh: "材料审核", ja: "書類審査", it: "Revisione dei documenti", fr: "Examen du dossier", es: "Revisión de documentos" },
    body: {
      ko: "제출 내용과 경기 기록 · ITF/국내 랭킹을 종합적으로 검토합니다.",
      en: "We review your submission alongside match records and ITF/national rankings.",
      zh: "我们会结合比赛记录和ITF/国内排名综合审核您的申请材料。",
      ja: "提出内容を試合記録やITF・国内ランキングと合わせて総合的に審査します。",
      it: "Esaminiamo la tua candidatura insieme ai risultati delle partite e ai ranking ITF/nazionali.",
      fr: "Nous examinons votre dossier au regard de vos résultats et de vos classements ITF/nationaux.",
      es: "Revisamos tu solicitud junto con tu historial de partidos y tus rankings ITF/nacionales.",
    },
  },
  {
    title: { ko: "실기 평가 · 면담", en: "On-court Eval · Interview", zh: "实战评估 · 面谈", ja: "実技評価・面談", it: "Valutazione in campo · Colloquio", fr: "Évaluation sur court · Entretien", es: "Evaluación en pista · Entrevista" },
    body: {
      ko: "코칭 세션과 면담으로 태도 · 투지 · 경기력과 코칭 수용성을 확인합니다.",
      en: "A coaching session and interview assess attitude, grit, play and coachability.",
      zh: "通过教学课程和面谈评估态度、拼劲、竞技水平和可塑性。",
      ja: "コーチングセッションと面談で、姿勢・闘志・プレーと指導の受容性を評価します。",
      it: "Una sessione di allenamento e un colloquio valutano atteggiamento, grinta, gioco e capacità di apprendimento.",
      fr: "Une séance d'entraînement et un entretien évaluent l'attitude, la combativité, le jeu et la réceptivité au coaching.",
      es: "Una sesión de entrenamiento y una entrevista evalúan la actitud, la garra, el juego y la disposición al aprendizaje.",
    },
  },
  {
    title: { ko: "선발 & 통보", en: "Selection & Notice", zh: "选拔与通知", ja: "選抜＆通知", it: "Selezione e comunicazione", fr: "Sélection et notification", es: "Selección y notificación" },
    body: {
      ko: "종합 평가 후 장학 대상을 선발하고 개별적으로 결과를 안내합니다.",
      en: "After a full review we select recipients and share results individually.",
      zh: "经过综合评估后选拔奖学金获得者，并逐一通知结果。",
      ja: "総合評価の後に奨学生を選抜し、結果を個別にご案内します。",
      it: "Dopo una valutazione completa selezioniamo i vincitori e comunichiamo i risultati individualmente.",
      fr: "Après un examen complet, nous sélectionnons les lauréats et communiquons les résultats individuellement.",
      es: "Tras una evaluación completa, seleccionamos a los becarios y comunicamos los resultados de forma individual.",
    },
  },
  {
    title: { ko: "장학 등록 & 로드맵", en: "Enrollment & Roadmap", zh: "奖学金注册与路线图", ja: "奨学登録＆ロードマップ", it: "Iscrizione alla borsa e roadmap", fr: "Inscription à la bourse et feuille de route", es: "Inscripción de la beca y hoja de ruta" },
    body: {
      ko: "발달 단계별 관리와 UTR · 랭킹 성장 로드맵을 함께 시작합니다.",
      en: "We begin stage-by-stage management and a UTR · ranking growth roadmap together.",
      zh: "我们一同启动分阶段管理以及UTR · 排名成长路线图。",
      ja: "段階別の育成管理と、UTR・ランキング成長ロードマップを共に始めます。",
      it: "Avviamo insieme una gestione per fasi e una roadmap di crescita UTR · ranking.",
      fr: "Nous lançons ensemble un suivi par étapes et une feuille de route de progression UTR · classement.",
      es: "Iniciamos juntos una gestión por etapas y una hoja de ruta de crecimiento UTR · ranking.",
    },
  },
];

/** 장학 신청 단계 과정 */
export async function ScholarshipSteps() {
  const locale = await getLocale();

  return (
    <Section id="scholarship-steps">
      <SectionHeading
        eyebrow="How to apply"
        title={pick(locale, { ko: "장학 신청 단계", en: "How to Apply", zh: "奖学金申请流程", ja: "奨学金申請ステップ", it: "Come candidarsi", fr: "Comment postuler", es: "Cómo solicitar" })}
        lead={pick(locale, {
          ko: "신청부터 선발, 성장 로드맵까지 — GCM 장학은 이렇게 진행됩니다.",
          en: "From application to selection to a growth roadmap — here's how GCM scholarships work.",
          zh: "从申请到选拔，再到成长路线图 — GCM奖学金就是这样进行的。",
          ja: "申請から選抜、成長ロードマップまで — GCMの奨学金はこのように進みます。",
          it: "Dalla candidatura alla selezione fino alla roadmap di crescita: ecco come funzionano le borse di studio GCM.",
          fr: "De la candidature à la sélection jusqu'à la feuille de route de progression — voici comment fonctionnent les bourses GCM.",
          es: "Desde la solicitud hasta la selección y la hoja de ruta de crecimiento: así funcionan las becas GCM.",
        })}
        wideLead
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li key={i} className="rounded-2xl border border-line bg-card/40 p-6">
            <span className="font-display text-2xl font-black tabular-nums text-court/40">
              0{i + 1}
            </span>
            <h3 className="mt-2 break-keep font-display text-base font-bold text-ink">{pick(locale, s.title)}</h3>
            <p className="mt-2 break-keep text-sm leading-relaxed text-muted">{pick(locale, s.body)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
