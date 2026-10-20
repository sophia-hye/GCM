"use client";

import { useActionState, useState } from "react";
import { completeOnboarding, type AuthState } from "@/app/auth/actions";
import { AuthSubmit } from "@/components/auth/AuthShell";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";
import { REFERRAL_OPTIONS, REFERRAL_OTHER } from "@/lib/referral";

const selectClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright";

export function OnboardingForm() {
  const locale = useLocale();
  const [referral, setReferral] = useState("");
  const [state, action, pending] = useActionState<AuthState, FormData>(
    completeOnboarding,
    {},
  );

  return (
    <form action={action} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, {
            ko: "구분",
            en: "Role",
            zh: "身份",
            ja: "区分",
            it: "Ruolo",
            fr: "Rôle",
            es: "Rol",
          })}
        </label>
        <select
          name="role"
          defaultValue="student"
          className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
        >
          <option value="student">
            {pick(locale, {
              ko: "선수 본인",
              en: "Player",
              zh: "选手本人",
              ja: "選手本人",
              it: "Atleta",
              fr: "Joueur",
              es: "Jugador",
            })}
          </option>
          <option value="amateur">
            {pick(locale, {
              ko: "아마추어 선수",
              en: "Amateur player",
              zh: "业余选手",
              ja: "アマチュア選手",
              it: "Atleta amatoriale",
              fr: "Joueur amateur",
              es: "Jugador aficionado",
            })}
          </option>
          <option value="parent">
            {pick(locale, {
              ko: "학부모",
              en: "Parent",
              zh: "家长",
              ja: "保護者",
              it: "Genitore",
              fr: "Parent",
              es: "Padre o madre",
            })}
          </option>
          <option value="coach">
            {pick(locale, {
              ko: "코치",
              en: "Coach",
              zh: "教练",
              ja: "コーチ",
              it: "Allenatore",
              fr: "Entraîneur",
              es: "Entrenador",
            })}
          </option>
          <option value="others">
            {pick(locale, {
              ko: "기타 (Others)",
              en: "Others",
              zh: "其他",
              ja: "その他",
              it: "Altro",
              fr: "Autre",
              es: "Otro",
            })}
          </option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, {
            ko: "전화번호",
            en: "Phone",
            zh: "电话号码",
            ja: "電話番号",
            it: "Telefono",
            fr: "Téléphone",
            es: "Teléfono",
          })}
        </label>
        <PhoneInput />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, {
            ko: "성별",
            en: "Gender",
            zh: "性别",
            ja: "性別",
            it: "Sesso",
            fr: "Sexe",
            es: "Sexo",
          })}
        </label>
        <select
          name="gender"
          required
          defaultValue=""
          className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
        >
          <option value="" disabled>
            {pick(locale, {
              ko: "선택해 주세요",
              en: "Please select",
              zh: "请选择",
              ja: "選択してください",
              it: "Seleziona",
              fr: "Veuillez sélectionner",
              es: "Selecciona",
            })}
          </option>
          <option value="male">
            {pick(locale, {
              ko: "남",
              en: "Male",
              zh: "男",
              ja: "男性",
              it: "Uomo",
              fr: "Homme",
              es: "Hombre",
            })}
          </option>
          <option value="female">
            {pick(locale, {
              ko: "여",
              en: "Female",
              zh: "女",
              ja: "女性",
              it: "Donna",
              fr: "Femme",
              es: "Mujer",
            })}
          </option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, {
            ko: "생년월일",
            en: "Date of Birth",
            zh: "出生日期",
            ja: "生年月日",
            it: "Data di nascita",
            fr: "Date de naissance",
            es: "Fecha de nacimiento",
          })}
        </label>
        <input
          type="date"
          name="birth_date"
          required
          className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, {
            ko: "GCM을 알게 된 경로",
            en: "How did you hear about GCM?",
            zh: "您是如何了解 GCM 的？",
            ja: "GCM を知ったきっかけ",
            it: "Come hai conosciuto GCM?",
            fr: "Comment avez-vous connu GCM ?",
            es: "¿Cómo conociste GCM?",
          })}
          <span className="text-danger"> *</span>
        </label>
        <select
          name="referral"
          required
          value={referral}
          onChange={(e) => setReferral(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled>
            {pick(locale, {
              ko: "선택해 주세요",
              en: "Please select",
              zh: "请选择",
              ja: "選択してください",
              it: "Seleziona",
              fr: "Veuillez sélectionner",
              es: "Selecciona",
            })}
          </option>
          {REFERRAL_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {pick(locale, o)}
            </option>
          ))}
        </select>
        {referral === REFERRAL_OTHER ? (
          <input
            name="referral_other"
            required
            placeholder={pick(locale, {
              ko: "어떻게 알게 되셨는지 적어주세요",
              en: "Please tell us how",
              zh: "请告诉我们您是如何了解的",
              ja: "どのように知ったかご記入ください",
              it: "Dicci come ci hai conosciuto",
              fr: "Dites-nous comment",
              es: "Cuéntanos cómo",
            })}
            className={`mt-2 ${selectClass} placeholder:text-muted/60`}
          />
        ) : null}
      </div>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <AuthSubmit pending={pending}>
        {pick(locale, {
          ko: "시작하기",
          en: "Get started",
          zh: "开始",
          ja: "始める",
          it: "Inizia",
          fr: "Commencer",
          es: "Comenzar",
        })}
      </AuthSubmit>
    </form>
  );
}
