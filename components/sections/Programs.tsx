import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

export async function Programs() {
  const locale = await getLocale();
  const { programs, programsLead } = getDict(locale);
  const ui = getUI(locale);

  return (
    <Section id="programs" reveal={false}>
      <Reveal>
        <SectionHeading eyebrow="Programmes" title={ui.programsTitle} lead={programsLead} />
      </Reveal>
      <Reveal className="mt-12">
        <Image
          src="/img/programs-journey.png"
          alt="키즈에서 챔피언으로 — 단계별 성장 여정"
          width={2172}
          height={724}
          priority
          unoptimized
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="mx-auto h-auto w-full max-w-4xl"
        />
      </Reveal>

      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal
            key={p.key}
            delay={i * 160}
            className="flex flex-col border-t border-line pt-8"
          >
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              {p.no}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">{p.key}</h3>
            <p className="mt-1 text-sm font-semibold text-court">{p.target}</p>
            <p className="mt-1 text-xs text-muted">{p.duration}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.desc}</p>

            <ul className="mt-5 space-y-2 text-sm text-ink/90">
              {p.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-court">·</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button href="/consulting" variant="link">
                {ui.consultApply}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
