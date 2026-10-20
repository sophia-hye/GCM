"use client";

import { createClient } from "@/lib/supabase/client";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

export function SocialAuth() {
  const locale = useLocale();
  const handleKakao = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        // OpenID Connect 사용 → 'openid' 필수(ID 토큰 발급). 비즈앱 승인 후 이메일 포함.
        scopes: "openid account_email profile_nickname",
      },
    });
  };

  return (
    <div className="mt-6">
      <div className="relative flex items-center">
        <span className="h-px flex-1 bg-line" />
        <span className="px-3 text-xs text-muted">
          {pick(locale, {
            ko: "또는 소셜 계정으로",
            en: "or continue with",
            zh: "或使用社交账号",
            ja: "またはソーシャルアカウントで",
            it: "oppure continua con",
            fr: "ou continuez avec",
            es: "o continúa con",
          })}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-4 space-y-2">
        <button
          type="button"
          onClick={handleKakao}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-4 py-2.5 text-sm font-semibold text-[#191600] transition hover:brightness-95"
        >
          {pick(locale, {
            ko: "카카오로 시작하기",
            en: "Continue with Kakao",
            zh: "使用 Kakao 继续",
            ja: "Kakao で続ける",
            it: "Continua con Kakao",
            fr: "Continuer avec Kakao",
            es: "Continuar con Kakao",
          })}
        </button>
        <a
          href="/auth/naver"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#03C75A] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          {pick(locale, {
            ko: "네이버로 시작하기",
            en: "Continue with Naver",
            zh: "使用 Naver 继续",
            ja: "Naver で続ける",
            it: "Continua con Naver",
            fr: "Continuer avec Naver",
            es: "Continuar con Naver",
          })}
        </a>
      </div>
    </div>
  );
}
