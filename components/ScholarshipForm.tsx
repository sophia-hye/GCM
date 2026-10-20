"use client";

import { useActionState, useRef, useState } from "react";
import { scholarshipForm, sectionTitle } from "@/lib/forms";
import { submitApplication, type ApplicationState } from "@/app/actions/application";
import { FormField } from "@/components/ui/FormField";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

const action = submitApplication.bind(null, "scholarship");

export function ScholarshipForm() {
  const locale = useLocale();
  const [state, formAction, pending] = useActionState<ApplicationState, FormData>(
    action,
    {},
  );

  // 모든 필수 항목 + 동의 체크가 충족돼야 버튼 활성화
  const formRef = useRef<HTMLFormElement>(null);
  const [valid, setValid] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const refreshValidity = () => setValid(!!formRef.current?.checkValidity());

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
            ko: "검토 후 24시간 내에 연락드리겠습니다. 감사합니다.",
            en: "We will review it and contact you within 24 hours. Thank you.",
            zh: "我们将在审核后 24 小时内与您联系。谢谢。",
            ja: "審査後、24時間以内にご連絡いたします。ありがとうございます。",
            it: "La esamineremo e ti contatteremo entro 24 ore. Grazie.",
            fr: "Nous l'examinerons et vous contacterons sous 24 heures. Merci.",
            es: "La revisaremos y nos pondremos en contacto contigo en un plazo de 24 horas. Gracias.",
          })}
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onInput={refreshValidity}
      onChange={refreshValidity}
      className="space-y-8 rounded-2xl border border-line bg-card p-7"
    >
      <div>
        <h2 className="font-display text-xl font-bold">Scholarship Application</h2>
        <p className="mt-1 text-xs text-danger">
          {pick(locale, {
            ko: "* 필수 항목",
            en: "* Required",
            zh: "* 必填项",
            ja: "* 必須項目",
            it: "* Campo obbligatorio",
            fr: "* Champ obligatoire",
            es: "* Obligatorio",
          })}
        </p>
      </div>

      {scholarshipForm.map((section) => (
        <fieldset key={section.title}>
          <legend className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
            {sectionTitle(section, locale)}
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {section.fields.map((f) => (
              <FormField key={f.name} field={f} />
            ))}
          </div>
        </fieldset>
      ))}

      <div>
        <label className="flex items-start gap-2 text-sm text-muted">
          <input
            type="checkbox"
            name="agree"
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
        {!agreed ? (
          <p className="mt-2 text-xs font-semibold text-danger">
            {pick(locale, {
              ko: "개인정보 수집·이용에 동의해야 신청할 수 있습니다.",
              en: "You must consent to the collection and use of personal information to apply.",
              zh: "您必须同意收集和使用个人信息才能申请。",
              ja: "お申し込みには個人情報の収集・利用への同意が必要です。",
              it: "Per candidarti devi acconsentire alla raccolta e all'uso dei dati personali.",
              fr: "Vous devez consentir à la collecte et à l'utilisation des données personnelles pour postuler.",
              es: "Debes dar tu consentimiento para la recopilación y el uso de los datos personales para poder solicitarlo.",
            })}
          </p>
        ) : null}
      </div>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || !valid || !agreed}
        className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
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
              ko: "장학 신청서 제출",
              en: "Submit Scholarship Application",
              zh: "提交奖学金申请",
              ja: "奨学金申請書を提出",
              it: "Invia la candidatura per la borsa di studio",
              fr: "Soumettre la demande de bourse",
              es: "Enviar la solicitud de beca",
            })}
      </button>
    </form>
  );
}
