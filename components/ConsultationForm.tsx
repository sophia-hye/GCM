"use client";

import Link from "next/link";
import { useActionState } from "react";
import { consultationForm, sectionTitle } from "@/lib/forms";
import { submitApplication, type ApplicationState } from "@/app/actions/application";
import { FormField } from "@/components/ui/FormField";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

const action = submitApplication.bind(null, "consultation");

export function ConsultationForm() {
  const locale = useLocale();
  const ko = locale === "ko";
  const [state, formAction, pending] = useActionState<ApplicationState, FormData>(
    action,
    {},
  );

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/5 p-10 text-center">
        <p className="font-display text-2xl font-bold text-lime">
          {pick(locale, {
            ko: "상담 신청이 접수되었습니다",
            en: "Your consultation request has been received",
            zh: "您的咨询申请已收到",
            ja: "ご相談のお申し込みを受け付けました",
            it: "La tua richiesta di consulenza è stata ricevuta",
            fr: "Votre demande de consultation a été reçue",
            es: "Hemos recibido tu solicitud de consulta",
          })}
        </p>
        <p className="mt-2 text-sm text-muted">
          {pick(locale, {
            ko: "전문 어드바이저가 24시간 내에 연락드립니다. 감사합니다.",
            en: "A specialist advisor will contact you within 24 hours. Thank you.",
            zh: "专业顾问将在 24 小时内与您联系。谢谢。",
            ja: "専門アドバイザーが24時間以内にご連絡いたします。ありがとうございます。",
            it: "Un consulente specializzato ti contatterà entro 24 ore. Grazie.",
            fr: "Un conseiller spécialisé vous contactera sous 24 heures. Merci.",
            es: "Un asesor especializado se pondrá en contacto contigo en un plazo de 24 horas. Gracias.",
          })}
        </p>
      </div>
    );
  }

  const section = consultationForm[0];

  return (
    <form action={formAction} className="rounded-2xl border border-line bg-card p-7">
      <h2 className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
        {sectionTitle(section, ko)}
      </h2>
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

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.fields.map((f) => (
          <FormField key={f.name} field={f} ko={ko} />
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted">
        {pick(locale, {
          ko: "제출 시 본인은 보호자(법정대리인)로서 본인 및 자녀를 대신하여 GCM에 개인정보 제공 및 연락(전화·문자·이메일)에 동의하며, 상담을 신청합니다. ",
          en: "By submitting, I, as the applicant (or legal guardian) on behalf of myself and my child, consent to providing personal information to GCM and to being contacted (phone, text, email), and I request a consultation. I agree to the ",
          zh: "提交即表示本人作为申请人（或法定监护人），代表本人及子女同意向 GCM 提供个人信息并接受联系（电话、短信、电子邮件），并申请咨询。本人同意 ",
          ja: "送信することにより、本人は申請者（または法定代理人）として、本人および子どものために GCM への個人情報の提供および連絡（電話・SMS・メール）に同意し、相談を申し込みます。",
          it: "Inviando il modulo, io, in qualità di richiedente (o tutore legale) per conto mio e di mio figlio, acconsento a fornire i miei dati personali a GCM e a essere contattato (telefono, SMS, email) e richiedo una consulenza. Accetto l'",
          fr: "En soumettant ce formulaire, moi, en tant que demandeur (ou représentant légal) pour moi-même et mon enfant, je consens à fournir mes données personnelles à GCM et à être contacté (téléphone, SMS, e-mail), et je demande une consultation. J'accepte la ",
          es: "Al enviar este formulario, yo, como solicitante (o tutor legal) en nombre propio y de mi hijo, doy mi consentimiento para proporcionar mis datos personales a GCM y para ser contactado (teléfono, SMS, correo electrónico), y solicito una consulta. Acepto la ",
        })}
        <Link href="/privacy" className="text-court-bright hover:underline">
          {pick(locale, {
            ko: "개인정보 처리방침",
            en: "Privacy Policy",
            zh: "隐私政策",
            ja: "プライバシーポリシー",
            it: "Informativa sulla privacy",
            fr: "Politique de confidentialité",
            es: "Política de privacidad",
          })}
        </Link>
        {pick(locale, {
          ko: " 및 ",
          en: " and ",
          zh: " 和 ",
          ja: " および ",
          it: " e i ",
          fr: " et les ",
          es: " y los ",
        })}
        <Link href="/terms" className="text-court-bright hover:underline">
          {pick(locale, {
            ko: "이용약관",
            en: "Terms of Service",
            zh: "服务条款",
            ja: "利用規約",
            it: "Termini di servizio",
            fr: "Conditions d'utilisation",
            es: "Términos del servicio",
          })}
        </Link>
        {pick(locale, {
          ko: "에 동의합니다.",
          en: ".",
          zh: "。",
          ja: " に同意します。",
          it: ".",
          fr: ".",
          es: ".",
        })}
      </p>

      {state.error ? (
        <p className="mt-4 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
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
              ko: "상담 신청",
              en: "Request Consulting",
              zh: "申请咨询",
              ja: "相談を申し込む",
              it: "Richiedi una consulenza",
              fr: "Demander une consultation",
              es: "Solicitar consulta",
            })}
      </button>
    </form>
  );
}
