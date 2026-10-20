"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { signUpMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { SocialAuth } from "@/components/auth/SocialAuth";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";
import type { Locale } from "@/lib/i18n-pick";
import { REFERRAL_OPTIONS, REFERRAL_OTHER } from "@/lib/referral";

const selectClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright";

function PhoneField({ locale }: { locale: Locale }) {
  return (
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
  );
}

export function SignupForm() {
  const locale = useLocale();
  const [referral, setReferral] = useState("");
  const [memberState, memberAction, memberPending] = useActionState<AuthState, FormData>(
    signUpMember,
    {},
  );

  return (
    <div>
      <form action={memberAction} className="space-y-4">
        <AuthField
          label={pick(locale, {
            ko: "이름",
            en: "Name",
            zh: "姓名",
            ja: "お名前",
            it: "Nome",
            fr: "Nom",
            es: "Nombre",
          })}
          name="name"
          placeholder={pick(locale, {
            ko: "실명을 입력하세요",
            en: "Enter your full name",
            zh: "请输入真实姓名",
            ja: "本名を入力してください",
            it: "Inserisci il tuo nome completo",
            fr: "Saisissez votre nom complet",
            es: "Introduce tu nombre completo",
          })}
        />
        <PhoneField locale={locale} />
        <AuthField
          label={pick(locale, {
            ko: "이메일",
            en: "Email",
            zh: "电子邮件",
            ja: "メール",
            it: "Email",
            fr: "E-mail",
            es: "Correo electrónico",
          })}
          name="email"
          type="email"
          placeholder="example@email.com"
        />
        <AuthField
          label={pick(locale, {
            ko: "비밀번호",
            en: "Password",
            zh: "密码",
            ja: "パスワード",
            it: "Password",
            fr: "Mot de passe",
            es: "Contraseña",
          })}
          name="password"
          type="password"
          placeholder={pick(locale, {
            ko: "6자 이상",
            en: "At least 6 characters",
            zh: "至少 6 个字符",
            ja: "6文字以上",
            it: "Almeno 6 caratteri",
            fr: "Au moins 6 caractères",
            es: "Al menos 6 caracteres",
          })}
        />
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
        <AuthField
          label={pick(locale, {
            ko: "생년월일",
            en: "Date of Birth",
            zh: "出生日期",
            ja: "生年月日",
            it: "Data di nascita",
            fr: "Date de naissance",
            es: "Fecha de nacimiento",
          })}
          name="birth_date"
          type="date"
        />
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
        <ErrorMessage message={memberState.error} />
        <AuthSubmit pending={memberPending}>
          {pick(locale, {
            ko: "회원가입",
            en: "Sign up",
            zh: "注册",
            ja: "新規登録",
            it: "Registrati",
            fr: "S'inscrire",
            es: "Registrarse",
          })}
        </AuthSubmit>
        <p className="text-center text-xs text-muted">
          {pick(locale, {
            ko: "로그인은 이메일과 비밀번호로 진행됩니다.",
            en: "Log in with your email and password.",
            zh: "请使用电子邮件和密码登录。",
            ja: "ログインはメールとパスワードで行います。",
            it: "Accedi con la tua email e password.",
            fr: "Connectez-vous avec votre e-mail et votre mot de passe.",
            es: "Inicia sesión con tu correo electrónico y contraseña.",
          })}
        </p>
      </form>

      <SocialAuth />

      <p className="mt-6 text-center text-sm text-muted">
        {pick(locale, {
          ko: "이미 계정이 있으신가요? ",
          en: "Already have an account? ",
          zh: "已经有账号了？",
          ja: "すでにアカウントをお持ちですか？ ",
          it: "Hai già un account? ",
          fr: "Vous avez déjà un compte ? ",
          es: "¿Ya tienes una cuenta? ",
        })}
        <Link href="/login" className="font-semibold text-court hover:underline">
          {pick(locale, {
            ko: "로그인",
            en: "Log in",
            zh: "登录",
            ja: "ログイン",
            it: "Accedi",
            fr: "Se connecter",
            es: "Iniciar sesión",
          })}
        </Link>
      </p>
    </div>
  );
}

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
      {message}
    </p>
  );
}
