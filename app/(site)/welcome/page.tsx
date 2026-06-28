import { Section, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "가입 완료 | GCM Tennis Academy" };

export default async function WelcomePage() {
  const en = (await getLocale()) === "en";
  return (
    <div className="pt-16">
      <Section>
        <div className="mx-auto max-w-lg rounded-2xl border border-line bg-card p-10 text-center">
          <p className="font-display text-5xl">🎉</p>
          <h1 className="mt-4 font-display text-3xl font-bold">
            {en ? "Welcome to GCM!" : "가입이 완료되었습니다"}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {en
              ? "Your registration is complete. Welcome aboard — let's get started."
              : "GCM 회원가입이 완료되었습니다. 환영합니다! 이제 서비스를 이용하실 수 있습니다."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" variant="lime">
              {en ? "Go to Home" : "홈으로 가기"}
            </Button>
            <Button href="/dashboard" variant="outline">
              {en ? "My Page" : "마이페이지"}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
