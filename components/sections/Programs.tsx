import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { getDict, getUI } from "@/lib/site-content";
import { getContentMap, cmsText, cmsList } from "@/lib/cms";

export async function Programs() {
  const locale = await getLocale();
  const { programs, programsLead } = getDict(locale);
  const ui = getUI(locale);
  const map = await getContentMap();

  return (
    <Section id="programs" reveal={false}>
      <Reveal>
        <SectionHeading
          eyebrow="Programmes"
          title={ui.programsTitle}
          lead={cmsText(map, "section.programsLead", programsLead, locale)}
        />
      </Reveal>
      <Reveal className="mt-12">
        <Image
          src="/img/programs-journey.png"
          alt={pick(locale, {
            ko: "키즈에서 챔피언으로 — 단계별 성장 여정",
            en: "From kids to champions — a stage-by-stage growth journey",
            zh: "从少儿到冠军——分阶段的成长之旅",
            ja: "キッズからチャンピオンへ——段階ごとの成長の歩み",
            it: "Dai bambini ai campioni — un percorso di crescita per fasi",
            fr: "Des enfants aux champions — un parcours de progression par étapes",
            es: "De niños a campeones: un recorrido de crecimiento por etapas",
          })}
          width={2172}
          height={724}
          priority
          unoptimized
          sizes="100vw"
          className="h-auto w-full"
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
            <p className="mt-1 text-sm font-semibold text-court">
              {cmsText(map, `program.${i}.target`, p.target, locale)}
            </p>
            <p className="mt-1 text-xs text-muted">
              {cmsText(map, `program.${i}.duration`, p.duration, locale)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {cmsText(map, `program.${i}.desc`, p.desc, locale)}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-ink/90">
              {cmsList(map, `program.${i}.points`, p.points, locale).map((point) => (
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
