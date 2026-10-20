import { Section, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "가입 완료 | GCM Tennis Academy",
      en: "Welcome | GCM Tennis Academy",
      zh: "注册完成 | GCM Tennis Academy",
      ja: "登録完了 | GCM Tennis Academy",
      it: "Benvenuto | GCM Tennis Academy",
      fr: "Bienvenue | GCM Tennis Academy",
      es: "Bienvenido | GCM Tennis Academy",
    }),
  };
}

export default async function WelcomePage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <Section>
        <div className="mx-auto max-w-lg rounded-2xl border border-line bg-card p-10 text-center">
          <p className="font-display text-5xl">🎉</p>
          <h1 className="mt-4 font-display text-3xl font-bold">
            {pick(locale, {
              ko: "가입이 완료되었습니다",
              en: "Welcome to GCM!",
              zh: "注册已完成",
              ja: "登録が完了しました",
              it: "Benvenuto in GCM!",
              fr: "Bienvenue chez GCM !",
              es: "¡Bienvenido a GCM!",
            })}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {pick(locale, {
              ko: "GCM 회원가입이 완료되었습니다. 환영합니다! 이제 서비스를 이용하실 수 있습니다.",
              en: "Your registration is complete. Welcome aboard — let's get started.",
              zh: "您的 GCM 注册已完成。欢迎加入！现在即可开始使用我们的服务。",
              ja: "GCM への登録が完了しました。ようこそ！これよりサービスをご利用いただけます。",
              it: "La tua registrazione è completa. Benvenuto a bordo: iniziamo.",
              fr: "Votre inscription est terminée. Bienvenue à bord — c'est parti.",
              es: "Tu registro se ha completado. ¡Bienvenido a bordo! Empecemos.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" variant="lime">
              {pick(locale, { ko: "홈으로 가기", en: "Go to Home", zh: "返回首页", ja: "ホームへ", it: "Vai alla home", fr: "Aller à l'accueil", es: "Ir al inicio" })}
            </Button>
            <Button href="/dashboard" variant="outline">
              {pick(locale, { ko: "마이페이지", en: "My Page", zh: "我的页面", ja: "マイページ", it: "Area personale", fr: "Mon compte", es: "Mi cuenta" })}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
