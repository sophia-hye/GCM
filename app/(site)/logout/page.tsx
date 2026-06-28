import { Section, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "로그아웃 | GCM Tennis Academy" };

export default async function LogoutPage() {
  const en = (await getLocale()) === "en";
  return (
    <div className="pt-16">
      <Section>
        <div className="mx-auto max-w-lg rounded-2xl border border-line bg-card p-10 text-center">
          <h1 className="font-display text-3xl font-bold">
            {en ? "You've been logged out" : "로그아웃되었습니다"}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {en
              ? "You have been safely signed out. See you again soon."
              : "안전하게 로그아웃되었습니다. 다음에 또 만나요."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" variant="lime">
              {en ? "Go to Home" : "홈으로 가기"}
            </Button>
            <Button href="/login" variant="outline">
              {en ? "Log in again" : "다시 로그인"}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
