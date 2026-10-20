"use client";

import { Link } from "@/components/i18n/Link";
import { useActionState } from "react";
import { signInMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { SocialAuth } from "@/components/auth/SocialAuth";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

export function LoginForm({ next }: { next?: string }) {
  const locale = useLocale();
  const [memberState, memberAction, memberPending] = useActionState<AuthState, FormData>(
    signInMember,
    {},
  );

  return (
    <div>
      <form action={memberAction} className="space-y-4">
        {next ? <input type="hidden" name="next" value={next} /> : null}
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
          placeholder="••••••••"
        />
        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-xs text-muted transition-colors hover:text-court hover:underline"
          >
            {pick(locale, {
              ko: "비밀번호를 잊으셨나요?",
              en: "Forgot your password?",
              zh: "忘记密码了吗？",
              ja: "パスワードをお忘れですか？",
              it: "Hai dimenticato la password?",
              fr: "Mot de passe oublié ?",
              es: "¿Olvidaste tu contraseña?",
            })}
          </Link>
        </div>
        <ErrorMessage message={memberState.error} />
        <AuthSubmit pending={memberPending}>
          {pick(locale, {
            ko: "로그인",
            en: "Log in",
            zh: "登录",
            ja: "ログイン",
            it: "Accedi",
            fr: "Se connecter",
            es: "Iniciar sesión",
          })}
        </AuthSubmit>
      </form>

      <SocialAuth />

      <p className="mt-6 text-center text-sm text-muted">
        {pick(locale, {
          ko: "계정이 없으신가요? ",
          en: "Don't have an account? ",
          zh: "还没有账号？",
          ja: "アカウントをお持ちでないですか？ ",
          it: "Non hai un account? ",
          fr: "Vous n'avez pas de compte ? ",
          es: "¿No tienes una cuenta? ",
        })}
        <Link href="/signup" className="font-semibold text-court hover:underline">
          {pick(locale, {
            ko: "회원가입",
            en: "Sign up",
            zh: "注册",
            ja: "新規登録",
            it: "Registrati",
            fr: "S'inscrire",
            es: "Registrarse",
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
