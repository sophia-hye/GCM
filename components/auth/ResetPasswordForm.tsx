"use client";

import { useActionState } from "react";
import { updatePassword, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

export function ResetPasswordForm() {
  const locale = useLocale();
  const [state, action, pending] = useActionState<AuthState, FormData>(updatePassword, {});

  return (
    <form action={action} className="space-y-4">
      <AuthField
        label={pick(locale, {
          ko: "새 비밀번호",
          en: "New password",
          zh: "新密码",
          ja: "新しいパスワード",
          it: "Nuova password",
          fr: "Nouveau mot de passe",
          es: "Nueva contraseña",
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
      <AuthField
        label={pick(locale, {
          ko: "새 비밀번호 확인",
          en: "Confirm new password",
          zh: "确认新密码",
          ja: "新しいパスワード（確認）",
          it: "Conferma nuova password",
          fr: "Confirmer le nouveau mot de passe",
          es: "Confirmar nueva contraseña",
        })}
        name="confirm"
        type="password"
        placeholder={pick(locale, {
          ko: "다시 입력",
          en: "Re-enter password",
          zh: "再次输入密码",
          ja: "パスワードを再入力",
          it: "Reinserisci la password",
          fr: "Ressaisissez le mot de passe",
          es: "Vuelve a introducir la contraseña",
        })}
      />
      <ErrorMessage message={state.error} />
      <AuthSubmit pending={pending}>
        {pick(locale, {
          ko: "비밀번호 변경",
          en: "Change password",
          zh: "修改密码",
          ja: "パスワードを変更",
          it: "Cambia password",
          fr: "Changer le mot de passe",
          es: "Cambiar contraseña",
        })}
      </AuthSubmit>
    </form>
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
