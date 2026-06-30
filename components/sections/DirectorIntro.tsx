import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

/** 홈: 대표 원장 인사말 요약 + About 페이지 인사말로 연결 */
export async function DirectorIntro() {
  const locale = await getLocale();
  const { directorMessage: d } = getDict(locale);
  const ui = getUI(locale);

  return (
    <Section id="director-intro" tone="muted">
      <SectionHeading eyebrow={d.eyebrow} title={d.title} />

      <div className="mt-10 grid items-start gap-8 sm:grid-cols-[200px_1fr] sm:gap-10">
        <div className="mx-auto w-full max-w-[200px] overflow-hidden rounded-2xl border border-line sm:mx-0">
          <Image
            src={d.image}
            alt="대표 원장 오성국"
            width={520}
            height={650}
            className="aspect-[4/5] h-auto w-full object-cover"
          />
        </div>

        <div className="max-w-2xl">
          <p className="whitespace-pre-line text-base leading-relaxed text-ink/85">
            {d.before[0]}
          </p>
          <blockquote className="mt-6 border-l-2 border-court pl-5 font-display text-base font-semibold leading-relaxed text-ink">
            {d.quote}
          </blockquote>
          <div className="mt-7">
            <Button href="/about#director-message" variant="link">
              {ui.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
