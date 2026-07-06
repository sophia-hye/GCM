import type { ReactNode } from "react";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict } from "@/lib/site-content";

/** 본문 내 '이큐어(equre.us)' / 'equre (equre.us)' 문구를 equre.us 링크로 변환 */
const EQURE_RE = /([^\s‘’'"]*\s*\(equre\.us\))/;

function renderParagraph(text: string): ReactNode {
  return text.split(EQURE_RE).map((part, i) =>
    EQURE_RE.test(part) ? (
      <a
        key={i}
        href="https://equre.us"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-court underline underline-offset-2 hover:text-court-bright"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

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
            <p key={p} className="whitespace-pre-line text-base leading-relaxed text-ink/85">
              {renderParagraph(p)}
            </p>
          ))}

          <blockquote className="my-8 whitespace-pre-line border-l-2 border-court pl-5 font-display text-lg font-semibold leading-relaxed text-ink">
            {d.quote}
          </blockquote>

          {d.after.map((p) => (
            <p key={p} className="whitespace-pre-line text-base leading-relaxed text-ink/85">
              {renderParagraph(p)}
            </p>
          ))}

          <p className="pt-4 text-right font-display text-base font-semibold text-ink">
            {d.signature}
          </p>

          <div className="mt-10 flex items-center gap-3 border-t border-line pt-6">
            <span className="font-display text-xl font-extrabold tracking-tight text-ink">
              GCM<span className="text-lime">.</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted">
              with
            </span>
            <a
              href="https://equre.us"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="equre — equre.us"
              className="inline-flex items-center transition-opacity hover:opacity-70"
            >
              <Image
                src="/logo/equre.png"
                alt="equre"
                width={2670}
                height={1006}
                className="h-4 w-auto translate-y-[3px]"
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
