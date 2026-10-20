import { Section, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export const metadata = { title: "로그아웃 | GCM Tennis Academy" };

export default async function LogoutPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <Section>
        <div className="mx-auto max-w-lg rounded-2xl border border-line bg-card p-10 text-center">
          <h1 className="font-display text-3xl font-bold">
            {pick(locale, {
              ko: "로그아웃되었습니다",
              en: "You've been logged out",
              zh: "您已退出登录",
              ja: "ログアウトしました",
              it: "Hai effettuato la disconnessione",
              fr: "Vous êtes déconnecté",
              es: "Has cerrado sesión",
            })}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {pick(locale, {
              ko: "안전하게 로그아웃되었습니다. 다음에 또 만나요.",
              en: "You have been safely signed out. See you again soon.",
              zh: "您已安全退出登录。期待下次再见。",
              ja: "安全にログアウトしました。またお会いしましょう。",
              it: "La disconnessione è avvenuta in sicurezza. A presto.",
              fr: "Vous avez été déconnecté en toute sécurité. À bientôt.",
              es: "Se ha cerrado tu sesión de forma segura. ¡Hasta pronto!",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" variant="lime">
              {pick(locale, { ko: "홈으로 가기", en: "Go to Home", zh: "返回首页", ja: "ホームへ", it: "Vai alla home", fr: "Aller à l'accueil", es: "Ir al inicio" })}
            </Button>
            <Button href="/login" variant="outline">
              {pick(locale, { ko: "다시 로그인", en: "Log in again", zh: "重新登录", ja: "再度ログイン", it: "Accedi di nuovo", fr: "Se reconnecter", es: "Volver a acceder" })}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
