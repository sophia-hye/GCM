import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict } from "@/lib/site-content";

/** About 페이지: 대표 원장 인사말 */
export async function DirectorMessage() {
  const { directorMessage: d } = getDict(await getLocale());

  return (
    <Section id="director-message">
      <SectionHeading eyebrow={d.eyebrow} title={d.title} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
        {/* 대표 사진 */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mx-auto max-w-[240px] overflow-hidden rounded-2xl border border-line lg:max-w-none">
            <Image
              src={d.image}
              alt="대표 원장 오성국"
              width={520}
              height={650}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-ink lg:text-left">
            오성국 <span className="font-normal text-muted">· 대표 원장</span>
          </p>
        </div>

        {/* 인사말 본문 */}
        <div className="max-w-2xl space-y-5">
          {d.before.map((p) => (
            <p key={p} className="text-base leading-relaxed text-ink/85">
              {p}
            </p>
          ))}

          <blockquote className="my-8 border-l-2 border-court pl-5 font-display text-lg font-semibold leading-relaxed text-ink">
            {d.quote}
          </blockquote>

          {d.after.map((p) => (
            <p key={p} className="text-base leading-relaxed text-ink/85">
              {p}
            </p>
          ))}

          <p className="pt-4 text-right font-display text-base font-semibold text-ink">
            {d.signature}
          </p>
        </div>
      </div>
    </Section>
  );
}
