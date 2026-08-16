import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { getContentMap, cmsText } from "@/lib/cms";
import { TCV_TEXT, TCV_CORE, TCV_UNIQUE, TCV_TOPCLASS, type Bi } from "@/lib/tennis-core-values";

export async function TennisCoreValues() {
  const ko = (await getLocale()) === "ko";
  const map = await getContentMap();
  const t = (b: Bi) => (ko ? b.ko : b.en);
  const cx = (key: string, b: Bi) => cmsText(map, key, t(b), ko);

  return (
    <>
      {/* 인트로 — AI 시대 인재상 */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/80">
              {ko ? "AI 시대 인재상" : "The AI-Era Talent"}
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl break-keep font-display text-3xl font-black leading-[1.2] text-white sm:text-5xl">
              {ko ? (
                <>
                  AI가 대체할 수 없는
                  <br />
                  <span className="text-[#d4ff3d]">1% 영리더</span>의 아우라
                </>
              ) : (
                <>
                  The aura of the <span className="text-[#d4ff3d]">top 1% leader</span>
                  <br />
                  that AI cannot replace
                </>
              )}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl break-keep text-base leading-relaxed text-white/85 sm:text-lg">
              {cx("tcv.hero.intro", TCV_TEXT.heroIntro)}
            </p>
            <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-left backdrop-blur-sm">
                <span className="inline-block rounded-full border border-[#d4ff3d]/60 bg-[#d4ff3d]/15 px-3 py-1 font-display text-sm font-bold text-[#d4ff3d]">
                  {cx("tcv.soft.label", TCV_TEXT.softLabel)}
                </span>
                <p className="mt-2.5 break-keep text-sm text-white/85">{cx("tcv.soft.body", TCV_TEXT.softBody)}</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-left backdrop-blur-sm">
                <span className="inline-block rounded-full border border-[#d4ff3d]/60 bg-[#d4ff3d]/15 px-3 py-1 font-display text-sm font-bold text-[#d4ff3d]">
                  {cx("tcv.meta.label", TCV_TEXT.metaLabel)}
                </span>
                <p className="mt-2.5 break-keep text-sm text-white/85">{cx("tcv.meta.body", TCV_TEXT.metaBody)}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4대 핵심 역량 */}
      <Section>
        <SectionHeading
          eyebrow="Core Competencies"
          title={cx("tcv.core.title", TCV_TEXT.coreTitle)}
          lead={cx("tcv.core.lead", TCV_TEXT.coreLead)}
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {TCV_CORE.map((c, i) => (
            <Reveal key={c.n} className="border-t border-line pt-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-semibold tabular-nums text-muted">{c.n}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-court-bright">{c.label}</span>
              </div>
              <h3 className="mt-3 break-keep font-display text-2xl font-bold">{cx(`tcv.core.${i}.title`, c.title)}</h3>
              <p className="mt-3 break-keep text-sm leading-relaxed text-muted">{cx(`tcv.core.${i}.body`, c.body)}</p>
              <p className="mt-4 border-l-2 border-court pl-4 break-keep text-sm font-medium leading-relaxed text-ink/90">
                {cx(`tcv.core.${i}.take`, c.take)}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 독보적 강점 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Unrivaled"
          title={cx("tcv.unique.title", TCV_TEXT.uniqueTitle)}
          lead={cx("tcv.unique.lead", TCV_TEXT.uniqueLead)}
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {TCV_UNIQUE.map((u, i) => (
            <Reveal key={i} delay={i * 60} className="rounded-2xl border border-line bg-card/30 p-6">
              <h3 className="break-keep font-display text-lg font-bold">{cx(`tcv.unique.${i}.title`, u.title)}</h3>
              <p className="mt-2.5 break-keep text-sm leading-relaxed text-muted">{cx(`tcv.unique.${i}.body`, u.body)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 상징 자본 · 탑클래스 */}
      <Section>
        <SectionHeading
          eyebrow="Symbolic Capital"
          title={cx("tcv.top.title", TCV_TEXT.topTitle)}
          lead={cx("tcv.top.lead", TCV_TEXT.topLead)}
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {TCV_TOPCLASS.map((tc, i) => (
            <Reveal key={i} delay={i * 60} className="border-t border-line pt-6">
              <span className="font-display text-sm font-semibold tabular-nums text-muted">0{i + 1}</span>
              <h3 className="mt-3 break-keep text-lg font-bold">{cx(`tcv.top.${i}.title`, tc.title)}</h3>
              <p className="mt-2.5 break-keep text-sm leading-relaxed text-muted">{cx(`tcv.top.${i}.body`, tc.body)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-12 max-w-2xl rounded-2xl border border-court/25 bg-court/5 p-6 text-center break-keep text-sm leading-relaxed text-ink/85">
          {cx("tcv.top.conclusion", TCV_TEXT.topConclusion)}
        </Reveal>
      </Section>

      {/* 결론 — 위기를 대하는 태도 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Mindset"
          title={cx("tcv.mind.title", TCV_TEXT.mindTitle)}
          lead={cx("tcv.mind.lead", TCV_TEXT.mindLead)}
          wideLead
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-base/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">{cx("tcv.mind.typicalLabel", TCV_TEXT.typicalLabel)}</p>
            <p className="mt-3 break-keep text-base leading-relaxed text-ink/85">{cx("tcv.mind.typicalBody", TCV_TEXT.typicalBody)}</p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-court/30 bg-court/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-court-bright">{cx("tcv.mind.tennisLabel", TCV_TEXT.tennisLabel)}</p>
            <p className="mt-3 break-keep text-base leading-relaxed text-ink/90">{cx("tcv.mind.tennisBody", TCV_TEXT.tennisBody)}</p>
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="break-keep font-display text-lg font-semibold leading-relaxed text-ink sm:text-xl">
            {cx("tcv.mind.flow", TCV_TEXT.flow)}
          </p>
          <p className="mt-4 break-keep text-sm text-muted">{cx("tcv.mind.flowSub", TCV_TEXT.flowSub)}</p>
        </Reveal>
      </Section>
    </>
  );
}
