import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { getDict } from "@/lib/site-content";
import { getContentMap, cmsText, cmsParas } from "@/lib/cms";

/** About 페이지: 대표 원장 인사말 */
export async function DirectorMessage() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { directorMessage: d } = getDict(locale);
  const map = await getContentMap();

  const eyebrow = cmsText(map, "director.eyebrow", d.eyebrow, locale);
  const title = cmsText(map, "director.title", d.title, locale);
  const before = cmsParas(map, "director.before", d.before, locale);
  const quote = cmsText(map, "director.quote", d.quote, locale);
  const after = cmsParas(map, "director.after", d.after, locale);
  const signature = cmsText(map, "director.signature", d.signature, locale);

  return (
    <Section id="director-message">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
        {/* 대표 사진 */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mx-auto max-w-[240px] overflow-hidden rounded-2xl border border-line lg:max-w-none">
            <Image
              src={d.image}
              alt={pick(locale, { ko: "대표 원장 오성국", en: "Executive Director Seong-gook Oh", zh: "执行院长 Seong-gook Oh", ja: "代表院長 Seong-gook Oh", it: "Direttore Esecutivo Seong-gook Oh", fr: "Directeur Exécutif Seong-gook Oh", es: "Director Ejecutivo Seong-gook Oh" })}
              width={520}
              height={650}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-ink lg:text-left">
            {ko ? (
              <>
                오성국 <span className="font-normal text-muted">· 대표 원장</span>
              </>
            ) : (
              <>
                <span className="font-normal text-muted">
                  {pick(locale, { en: "Executive Director,", zh: "执行院长，", ja: "代表院長、", it: "Direttore Esecutivo,", fr: "Directeur Exécutif,", es: "Director Ejecutivo," })}
                </span>{" "}
                Seong-gook Oh
              </>
            )}
          </p>
        </div>

        {/* 인사말 본문 */}
        <div className="max-w-2xl space-y-5">
          {before.map((p) => (
            <p key={p} className="whitespace-pre-line text-base leading-relaxed text-ink/85">
              {p}
            </p>
          ))}

          <blockquote className="my-8 whitespace-pre-line border-l-2 border-court pl-5 font-display text-lg font-semibold leading-relaxed text-ink">
            {quote}
          </blockquote>

          {after.map((p) => (
            <p key={p} className="whitespace-pre-line text-base leading-relaxed text-ink/85">
              {p}
            </p>
          ))}

          <p className="pt-4 text-right font-display text-base font-semibold text-ink">
            {signature}
          </p>
        </div>
      </div>
    </Section>
  );
}
