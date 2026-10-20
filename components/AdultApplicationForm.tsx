"use client";

import { useActionState, useState } from "react";
import {
  submitAdultApplication,
  type AdultApplyState,
} from "@/app/actions/adultApplication";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";
import type { Locale } from "@/lib/i18n-pick";

const FIELD =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

// value 는 한글 canonical(제출·저장용), 표시는 로케일별
type Option = {
  value: string;
  en: string;
  zh: string;
  ja: string;
  it: string;
  fr: string;
  es: string;
};

/** value(한글 canonical)는 제출값으로 유지하고, 표시만 로케일별로 선택 */
function optionLabel(locale: Locale, o: Option): string {
  return pick(locale, {
    ko: o.value,
    en: o.en,
    zh: o.zh,
    ja: o.ja,
    it: o.it,
    fr: o.fr,
    es: o.es,
  });
}

const LESSON_TIMES: Option[] = [
  { value: "토요일 12–15시", en: "Saturday 12–3 PM", zh: "周六 12–15 点", ja: "土曜 12–15時", it: "Sabato 12–15", fr: "Samedi 12 h – 15 h", es: "Sábado 12–15 h" },
  { value: "토요일 15–18시 30분", en: "Saturday 3–6:30 PM", zh: "周六 15–18 点 30 分", ja: "土曜 15–18時30分", it: "Sabato 15–18:30", fr: "Samedi 15 h – 18 h 30", es: "Sábado 15–18:30 h" },
];

const EXPERIENCE: Option[] = [
  { value: "6개월 미만", en: "Less than 6 months", zh: "不足 6 个月", ja: "6か月未満", it: "Meno di 6 mesi", fr: "Moins de 6 mois", es: "Menos de 6 meses" },
  { value: "6개월 ~ 1년", en: "6 months – 1 year", zh: "6 个月 ~ 1 年", ja: "6か月～1年", it: "6 mesi – 1 anno", fr: "6 mois – 1 an", es: "6 meses – 1 año" },
  { value: "1년 ~ 3년", en: "1 – 3 years", zh: "1 ~ 3 年", ja: "1～3年", it: "1 – 3 anni", fr: "1 – 3 ans", es: "1 – 3 años" },
  { value: "3년 ~ 5년", en: "3 – 5 years", zh: "3 ~ 5 年", ja: "3～5年", it: "3 – 5 anni", fr: "3 – 5 ans", es: "3 – 5 años" },
  { value: "5년 ~ 10년", en: "5 – 10 years", zh: "5 ~ 10 年", ja: "5～10年", it: "5 – 10 anni", fr: "5 – 10 ans", es: "5 – 10 años" },
  { value: "10년 이상", en: "10+ years", zh: "10 年以上", ja: "10年以上", it: "Oltre 10 anni", fr: "Plus de 10 ans", es: "Más de 10 años" },
];

const ACHIEVEMENTS: Option[] = [
  { value: "없음", en: "None", zh: "无", ja: "なし", it: "Nessuno", fr: "Aucun", es: "Ninguno" },
  {
    value: "지역 대회 / 테니스 타운 - 본선",
    en: "Regional / Tennis Town - Main draw",
    zh: "地区赛 / 网球城 - 正赛",
    ja: "地域大会／テニスタウン - 本戦",
    it: "Regionale / Tennis Town - Tabellone principale",
    fr: "Régional / Tennis Town - Tableau principal",
    es: "Regional / Tennis Town - Cuadro principal",
  },
  {
    value: "지역 대회 / 테니스 타운 - 입상",
    en: "Regional / Tennis Town - Placed",
    zh: "地区赛 / 网球城 - 获奖",
    ja: "地域大会／テニスタウン - 入賞",
    it: "Regionale / Tennis Town - Premiato",
    fr: "Régional / Tennis Town - Classé",
    es: "Regional / Tennis Town - Premiado",
  },
  {
    value: "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 본선",
    en: "National Rookie/Bronze (M) / Gaenari (W) - Main draw",
    zh: "全国新人组/铜组 (M) / 迎春组 (W) - 正赛",
    ja: "全国新人・ブロンズ (M) ／ケナリ (W) - 本戦",
    it: "Nazionale Rookie/Bronzo (M) / Gaenari (W) - Tabellone principale",
    fr: "National Rookie/Bronze (M) / Gaenari (W) - Tableau principal",
    es: "Nacional Rookie/Bronce (M) / Gaenari (W) - Cuadro principal",
  },
  {
    value: "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 입상",
    en: "National Rookie/Bronze (M) / Gaenari (W) - Placed",
    zh: "全国新人组/铜组 (M) / 迎春组 (W) - 获奖",
    ja: "全国新人・ブロンズ (M) ／ケナリ (W) - 入賞",
    it: "Nazionale Rookie/Bronzo (M) / Gaenari (W) - Premiato",
    fr: "National Rookie/Bronze (M) / Gaenari (W) - Classé",
    es: "Nacional Rookie/Bronce (M) / Gaenari (W) - Premiado",
  },
  {
    value: "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 우승",
    en: "National Rookie/Bronze (M) / Gaenari (W) - Champion",
    zh: "全国新人组/铜组 (M) / 迎春组 (W) - 冠军",
    ja: "全国新人・ブロンズ (M) ／ケナリ (W) - 優勝",
    it: "Nazionale Rookie/Bronzo (M) / Gaenari (W) - Campione",
    fr: "National Rookie/Bronze (M) / Gaenari (W) - Champion",
    es: "Nacional Rookie/Bronce (M) / Gaenari (W) - Campeón",
  },
  {
    value: "전국 오픈부 (남성) / 전국 국화부 (여성) - 본선",
    en: "National Open (M) / Gukhwa (W) - Main draw",
    zh: "全国公开组 (M) / 菊花组 (W) - 正赛",
    ja: "全国オープン (M) ／クッカ (W) - 本戦",
    it: "Nazionale Open (M) / Gukhwa (W) - Tabellone principale",
    fr: "National Open (M) / Gukhwa (W) - Tableau principal",
    es: "Nacional Open (M) / Gukhwa (W) - Cuadro principal",
  },
  {
    value: "전국 오픈부 (남성) / 전국 국화부 (여성) - 입상",
    en: "National Open (M) / Gukhwa (W) - Placed",
    zh: "全国公开组 (M) / 菊花组 (W) - 获奖",
    ja: "全国オープン (M) ／クッカ (W) - 入賞",
    it: "Nazionale Open (M) / Gukhwa (W) - Premiato",
    fr: "National Open (M) / Gukhwa (W) - Classé",
    es: "Nacional Open (M) / Gukhwa (W) - Premiado",
  },
  {
    value: "전국 오픈부 (남성) / 전국 국화부 (여성) - 우승",
    en: "National Open (M) / Gukhwa (W) - Champion",
    zh: "全国公开组 (M) / 菊花组 (W) - 冠军",
    ja: "全国オープン (M) ／クッカ (W) - 優勝",
    it: "Nazionale Open (M) / Gukhwa (W) - Campione",
    fr: "National Open (M) / Gukhwa (W) - Champion",
    es: "Nacional Open (M) / Gukhwa (W) - Campeón",
  },
];

const GENDER: Option[] = [
  { value: "남성", en: "Male", zh: "男", ja: "男性", it: "Uomo", fr: "Homme", es: "Hombre" },
  { value: "여성", en: "Female", zh: "女", ja: "女性", it: "Donna", fr: "Femme", es: "Mujer" },
];

const VIDEO_CONSENT_OPTIONS: Option[] = [
  { value: "동의합니다", en: "I agree", zh: "同意", ja: "同意します", it: "Acconsento", fr: "J'accepte", es: "Acepto" },
  { value: "동의하지 않습니다", en: "I do not agree", zh: "不同意", ja: "同意しません", it: "Non acconsento", fr: "Je n'accepte pas", es: "No acepto" },
];

const VIDEO_CONSENT_TEXT = {
  ko: `본 아카데미에서는 트레이닝 과정의 기록 및 홍보 자료 제작을 위하여 수업 중 사진 및 영상 촬영이 진행될 수 있습니다.
촬영은 주로 코치 및 프로그램 진행 모습을 중심으로 이루어지며, 이 과정에서 참가자의 신체 일부 또는 운동 장면이 부수적으로 포함될 수 있습니다.
다만, 특정 참가자를 대상으로 한 근접 촬영 또는 집중 촬영이 필요한 경우에는 반드시 사전에 별도의 동의를 구한 후 촬영을 진행합니다.
촬영된 자료는 아카데미 홍보 및 마케팅(홈페이지, SNS, 온·오프라인 광고, 유료 광고 집행, 인쇄물 등)에 활용될 수 있습니다.
참가자는 본 신청서를 통해 위 내용을 충분히 안내받고 이에 동의합니다.
촬영을 원하지 않는 경우 사전 요청을 통해 촬영 대상에서 제외될 수 있습니다.`,
  en: `During training, the academy may take photos and videos to document sessions and produce promotional materials.
Filming focuses mainly on coaches and program activities, and a participant's body or movements may be incidentally included.
However, if close-up or focused filming of a specific participant is needed, we will always obtain separate prior consent before filming.
The footage may be used for the academy's promotion and marketing (website, social media, online/offline ads, paid advertising, printed materials, etc.).
By submitting this form, the participant confirms they have been fully informed of the above and consent to it.
If you do not wish to be filmed, you may request in advance to be excluded.`,
  zh: `在训练过程中，学院可能会拍摄照片和视频，用于记录课程并制作宣传资料。
拍摄主要以教练和项目活动为中心，参加者的身体部位或运动画面可能会被附带拍入。
但如需对特定参加者进行近距离或集中拍摄，我们将始终事先取得单独的同意后再进行拍摄。
所拍摄的素材可用于学院的宣传和营销（网站、社交媒体、线上/线下广告、付费广告投放、印刷品等）。
参加者通过提交本表格，确认已充分了解上述内容并表示同意。
如不希望被拍摄，可事先提出申请以被排除在拍摄对象之外。`,
  ja: `トレーニング中、アカデミーはセッションの記録および宣伝資料の作成のために写真・動画を撮影する場合があります。
撮影は主にコーチやプログラムの様子を中心に行われ、その過程で参加者の身体の一部や運動の場面が付随的に含まれることがあります。
ただし、特定の参加者を対象とした近接撮影や集中的な撮影が必要な場合は、必ず事前に別途同意を得たうえで撮影を行います。
撮影した素材は、アカデミーの広報・マーケティング（ウェブサイト、SNS、オンライン／オフライン広告、有料広告の実施、印刷物など）に利用される場合があります。
参加者は本申込書の提出をもって、上記内容について十分に説明を受け、これに同意するものとします。
撮影を希望されない場合は、事前のご依頼により撮影対象から除外されることができます。`,
  it: `Durante l'allenamento, l'accademia può scattare foto e registrare video per documentare le sessioni e produrre materiali promozionali.
Le riprese si concentrano principalmente sui coach e sulle attività del programma, e il corpo o i movimenti di un partecipante possono essere inclusi in modo incidentale.
Tuttavia, se è necessaria una ripresa ravvicinata o mirata di un partecipante specifico, otterremo sempre un consenso separato e preventivo prima di filmare.
Il materiale può essere utilizzato per la promozione e il marketing dell'accademia (sito web, social media, annunci online/offline, pubblicità a pagamento, materiali stampati, ecc.).
Inviando questo modulo, il partecipante conferma di essere stato pienamente informato di quanto sopra e di acconsentirvi.
Se non desideri essere ripreso, puoi richiedere in anticipo di essere escluso.`,
  fr: `Pendant l'entraînement, l'académie peut prendre des photos et des vidéos afin de documenter les séances et de produire des supports promotionnels.
Les prises de vue portent principalement sur les entraîneurs et les activités du programme, et le corps ou les mouvements d'un participant peuvent y figurer de manière incidente.
Toutefois, si une prise de vue rapprochée ou ciblée d'un participant précis est nécessaire, nous obtiendrons toujours un consentement distinct et préalable avant de filmer.
Les images peuvent être utilisées pour la promotion et le marketing de l'académie (site web, réseaux sociaux, publicités en ligne/hors ligne, publicité payante, supports imprimés, etc.).
En soumettant ce formulaire, le participant confirme avoir été pleinement informé de ce qui précède et y consentir.
Si vous ne souhaitez pas être filmé, vous pouvez demander à l'avance à en être exclu.`,
  es: `Durante el entrenamiento, la academia puede tomar fotografías y vídeos para documentar las sesiones y producir materiales promocionales.
La grabación se centra principalmente en los entrenadores y las actividades del programa, y el cuerpo o los movimientos de un participante pueden incluirse de forma incidental.
No obstante, si se necesita una grabación en primer plano o centrada en un participante concreto, siempre obtendremos un consentimiento previo y por separado antes de grabar.
El material puede utilizarse para la promoción y el marketing de la academia (sitio web, redes sociales, anuncios en línea/fuera de línea, publicidad de pago, materiales impresos, etc.).
Al enviar este formulario, el participante confirma que ha sido plenamente informado de lo anterior y que lo consiente.
Si no deseas ser grabado, puedes solicitar con antelación quedar excluido.`,
};

export function AdultApplicationForm() {
  const locale = useLocale();
  const [state, action, pending] = useActionState<AdultApplyState, FormData>(
    submitAdultApplication,
    {},
  );
  const [agreed, setAgreed] = useState(false);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/5 p-10 text-center">
        <p className="font-display text-2xl font-bold text-lime">
          {pick(locale, {
            ko: "신청이 접수되었습니다",
            en: "Your application has been received",
            zh: "您的申请已收到",
            ja: "お申し込みを受け付けました",
            it: "La tua candidatura è stata ricevuta",
            fr: "Votre candidature a été reçue",
            es: "Hemos recibido tu solicitud",
          })}
        </p>
        <p className="mt-2 text-sm text-muted">
          {pick(locale, {
            ko: "확인 후 안내드리겠습니다. 감사합니다.",
            en: "We'll review it and get back to you. Thank you.",
            zh: "确认后将与您联系。谢谢。",
            ja: "確認後、ご案内いたします。ありがとうございます。",
            it: "Dopo la verifica ti forniremo le indicazioni. Grazie.",
            fr: "Après vérification, nous vous recontacterons. Merci.",
            es: "Después de revisarla, nos pondremos en contacto. Gracias.",
          })}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6 rounded-2xl border border-line bg-card p-7">
      <Field
        label={pick(locale, {
          ko: "이름",
          en: "Name",
          zh: "姓名",
          ja: "お名前",
          it: "Nome",
          fr: "Nom",
          es: "Nombre",
        })}
        required
      >
        <input
          name="name"
          required
          placeholder={pick(locale, {
            ko: "실명",
            en: "Full name",
            zh: "真实姓名",
            ja: "本名",
            it: "Nome completo",
            fr: "Nom complet",
            es: "Nombre completo",
          })}
          className={FIELD}
        />
      </Field>

      <Field
        label={pick(locale, {
          ko: "연락처",
          en: "Phone",
          zh: "联系方式",
          ja: "連絡先",
          it: "Telefono",
          fr: "Téléphone",
          es: "Teléfono",
        })}
        required
      >
        <input
          name="phone"
          type="tel"
          required
          placeholder="010-0000-0000"
          className={FIELD}
        />
      </Field>

      <Field
        label={pick(locale, {
          ko: "성별",
          en: "Gender",
          zh: "性别",
          ja: "性別",
          it: "Sesso",
          fr: "Sexe",
          es: "Sexo",
        })}
        required
      >
        <div className="flex gap-5 text-sm text-ink">
          {GENDER.map((g) => (
            <label key={g.value} className="flex items-center gap-2">
              <input type="radio" name="gender" value={g.value} required /> {optionLabel(locale, g)}
            </label>
          ))}
        </div>
      </Field>

      <Field
        label={pick(locale, {
          ko: "희망 수업 시간 (복수 선택 가능)",
          en: "Preferred class times (multiple allowed)",
          zh: "希望上课时间（可多选）",
          ja: "希望レッスン時間（複数選択可）",
          it: "Orari di lezione preferiti (selezione multipla)",
          fr: "Créneaux de cours souhaités (choix multiples)",
          es: "Horarios de clase preferidos (selección múltiple)",
        })}
        required
      >
        <div className="flex flex-col gap-2 text-sm text-ink">
          {LESSON_TIMES.map((t) => (
            <label key={t.value} className="flex items-center gap-2">
              <input type="checkbox" name="times" value={t.value} /> {optionLabel(locale, t)}
            </label>
          ))}
        </div>
      </Field>

      <Field
        label={pick(locale, {
          ko: "현재 소속 클럽 / 협회",
          en: "Current club / association",
          zh: "当前所属俱乐部 / 协会",
          ja: "現在所属のクラブ／協会",
          it: "Club / associazione attuale",
          fr: "Club / association actuel",
          es: "Club / asociación actual",
        })}
        required
      >
        <input
          name="club"
          required
          placeholder={pick(locale, {
            ko: "없으면 '없음' 입력",
            en: "Enter 'None' if not applicable",
            zh: "如不适用请填写 'None'",
            ja: "該当しない場合は「None」と入力",
            it: "Scrivi 'None' se non applicabile",
            fr: "Saisissez 'None' si non applicable",
            es: "Escribe 'None' si no aplica",
          })}
          className={FIELD}
        />
      </Field>

      <Field
        label={pick(locale, {
          ko: "테니스 구력",
          en: "Years playing tennis",
          zh: "网球球龄",
          ja: "テニス歴",
          it: "Anni di pratica del tennis",
          fr: "Années de pratique du tennis",
          es: "Años jugando al tenis",
        })}
        required
      >
        <select name="experience" required defaultValue="" className={FIELD}>
          <option value="" disabled>
            {pick(locale, {
              ko: "선택",
              en: "Select",
              zh: "选择",
              ja: "選択",
              it: "Seleziona",
              fr: "Sélectionner",
              es: "Seleccionar",
            })}
          </option>
          {EXPERIENCE.map((e) => (
            <option key={e.value} value={e.value}>
              {optionLabel(locale, e)}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label={pick(locale, {
          ko: "대회 최고 성적",
          en: "Best tournament result",
          zh: "比赛最佳成绩",
          ja: "大会最高成績",
          it: "Miglior risultato in torneo",
          fr: "Meilleur résultat en tournoi",
          es: "Mejor resultado en torneo",
        })}
        required
      >
        <select name="achievement" required defaultValue="" className={FIELD}>
          <option value="" disabled>
            {pick(locale, {
              ko: "선택",
              en: "Select",
              zh: "选择",
              ja: "選択",
              it: "Seleziona",
              fr: "Sélectionner",
              es: "Seleccionar",
            })}
          </option>
          {ACHIEVEMENTS.map((a) => (
            <option key={a.value} value={a.value}>
              {optionLabel(locale, a)}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label={pick(locale, {
          ko: "보완하고 싶은 부분",
          en: "What you'd like to improve",
          zh: "希望改进的方面",
          ja: "改善したい点",
          it: "Cosa vorresti migliorare",
          fr: "Ce que vous aimeriez améliorer",
          es: "Qué te gustaría mejorar",
        })}
        required
      >
        <textarea
          name="improve"
          rows={3}
          required
          placeholder={pick(locale, {
            ko: "개선하고 싶은 점을 적어주세요",
            en: "Tell us what you'd like to improve",
            zh: "请写下您想改进的地方",
            ja: "改善したい点をご記入ください",
            it: "Dicci cosa vorresti migliorare",
            fr: "Dites-nous ce que vous aimeriez améliorer",
            es: "Cuéntanos qué te gustaría mejorar",
          })}
          className={FIELD}
        />
      </Field>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, {
            ko: "트레이닝 중 촬영(코치 중심 촬영, 참가자는 일부 장면에 포함될 수 있음) 및 홍보 활용에 동의합니다.",
            en: "I consent to filming during training (focused on coaches; participants may appear in some scenes) and its use for promotion.",
            zh: "本人同意在训练期间进行拍摄（以教练为主，参加者可能出现在部分画面中）及用于宣传。",
            ja: "トレーニング中の撮影（コーチ中心、参加者が一部の場面に含まれる場合があります）および広報利用に同意します。",
            it: "Acconsento alle riprese durante l'allenamento (incentrate sui coach; i partecipanti possono apparire in alcune scene) e al loro uso promozionale.",
            fr: "Je consens aux prises de vue pendant l'entraînement (centrées sur les entraîneurs ; les participants peuvent apparaître dans certaines scènes) et à leur utilisation à des fins promotionnelles.",
            es: "Doy mi consentimiento para la grabación durante el entrenamiento (centrada en los entrenadores; los participantes pueden aparecer en algunas escenas) y para su uso promocional.",
          })}
          <span className="ml-0.5 text-danger">*</span>
        </label>
        <p className="mb-3 whitespace-pre-line rounded-lg border border-line bg-base/50 p-3 text-xs leading-relaxed text-muted">
          {pick(locale, VIDEO_CONSENT_TEXT)}
        </p>
        <div className="flex gap-5 text-sm text-ink">
          {VIDEO_CONSENT_OPTIONS.map((v) => (
            <label key={v.value} className="flex items-center gap-2">
              <input type="radio" name="videoConsent" value={v.value} required /> {optionLabel(locale, v)}
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input
          type="checkbox"
          name="privacyConsent"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1"
        />
        <span>
          {pick(locale, {
            ko: "개인정보 수집·이용에 동의합니다. (자세한 내용은 개인정보 처리방침 참고)",
            en: "I consent to the collection and use of my personal information. (See the Privacy Policy for details.)",
            zh: "本人同意收集和使用个人信息。（详情请参阅隐私政策）",
            ja: "個人情報の収集・利用に同意します。（詳細はプライバシーポリシーをご参照ください）",
            it: "Acconsento alla raccolta e all'uso dei miei dati personali. (Per i dettagli, consulta l'Informativa sulla privacy.)",
            fr: "Je consens à la collecte et à l'utilisation de mes données personnelles. (Voir la Politique de confidentialité pour plus de détails.)",
            es: "Doy mi consentimiento para la recopilación y el uso de mis datos personales. (Consulta la Política de privacidad para más detalles.)",
          })}
        </span>
      </label>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || !agreed}
        className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
      >
        {pending
          ? pick(locale, {
              ko: "제출 중...",
              en: "Submitting...",
              zh: "提交中...",
              ja: "送信中...",
              it: "Invio in corso...",
              fr: "Envoi en cours...",
              es: "Enviando...",
            })
          : pick(locale, {
              ko: "신청서 제출",
              en: "Submit Application",
              zh: "提交申请",
              ja: "申請書を提出",
              it: "Invia la candidatura",
              fr: "Soumettre la candidature",
              es: "Enviar la solicitud",
            })}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-muted">
        {label}
        {required ? <span className="ml-0.5 text-danger">*</span> : null}
      </label>
      {children}
    </div>
  );
}
