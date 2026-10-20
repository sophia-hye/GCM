"use client";

import { Link } from "@/components/i18n/Link";
import { useActionState } from "react";
import { requestPasswordReset, type PasswordResetState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

export function ForgotPasswordForm() {
  const locale = useLocale();
  const [state, action, pending] = useActionState<PasswordResetState, FormData>(
    requestPasswordReset,
    {},
  );

  if (state.ok) {
    return (
      <div>
        <p className="rounded-lg border border-court/40 bg-court/10 px-4 py-3 text-sm leading-relaxed text-court-bright">
          {pick(locale, {
            ko: "입력하신 이메일로 비밀번호 재설정 링크를 보냈습니다. 메일함(스팸함 포함)을 확인해 주세요.",
            en: "We've sent a password reset link to your email. Please check your inbox (including spam).",
            zh: "我们已将密码重置链接发送至您的邮箱。请查收收件箱（包括垃圾邮件）。",
            ja: "パスワード再設定用のリンクをメールでお送りしました。受信トレイ（迷惑メールフォルダを含む）をご確認ください。",
            it: "Ti abbiamo inviato un link per reimpostare la password via email. Controlla la tua casella di posta (inclusa la cartella spam).",
            fr: "Nous avons envoyé un lien de réinitialisation du mot de passe à votre e-mail. Veuillez vérifier votre boîte de réception (y compris les spams).",
            es: "Hemos enviado un enlace para restablecer tu contraseña a tu correo electrónico. Revisa tu bandeja de entrada (incluido el spam).",
          })}
        </p>
        <p className="mt-6 text-center text-sm text-muted">
          <Link href="/login" className="font-semibold text-court hover:underline">
            {pick(locale, {
              ko: "로그인으로 돌아가기",
              en: "Back to log in",
              zh: "返回登录",
              ja: "ログインに戻る",
              it: "Torna all'accesso",
              fr: "Retour à la connexion",
              es: "Volver a iniciar sesión",
            })}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <form action={action} className="space-y-4">
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
        <ErrorMessage message={state.error} />
        <AuthSubmit pending={pending}>
          {pick(locale, {
            ko: "재설정 링크 받기",
            en: "Send reset link",
            zh: "发送重置链接",
            ja: "再設定リンクを送信",
            it: "Invia link di reimpostazione",
            fr: "Envoyer le lien de réinitialisation",
            es: "Enviar enlace de restablecimiento",
          })}
        </AuthSubmit>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        <Link href="/login" className="font-semibold text-court hover:underline">
          {pick(locale, {
            ko: "로그인으로 돌아가기",
            en: "Back to log in",
            zh: "返回登录",
            ja: "ログインに戻る",
            it: "Torna all'accesso",
            fr: "Retour à la connexion",
            es: "Volver a iniciar sesión",
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
