import Link from "next/link";
import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { getContentMap, cmsText, cmsList } from "@/lib/cms";
import { WTL_TEXT, LEADER_REASONS, LIFE_CHANGES, type Bi } from "@/lib/why-tennis-content";

export async function WhyTennisLeaders() {
  const ko = (await getLocale()) === "ko";
  const map = await getContentMap();
  const t = (b: Bi) => (ko ? b.ko : b.en);
  const cx = (key: string, b: Bi) => cmsText(map, key, t(b), ko);

  return (
    <>
      {/* 히어로 — The Court of Leaders */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/80">
              Why Tennis
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-black leading-[1.15] text-white sm:text-5xl">
              The Court of <span className="text-[#d4ff3d]">Leaders</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl break-keep text-base leading-relaxed text-white/85 sm:text-lg">
              {cx("wtl.hero.intro", WTL_TEXT.heroIntro)}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 리더들이 테니스에 열광하는 이유 */}
      <Section>
        <SectionHeading
          eyebrow="For Leaders"
          title={cx("wtl.leaders.title", WTL_TEXT.leadersTitle)}
          lead={cx("wtl.leaders.lead", WTL_TEXT.leadersLead)}
          wideLead
        />
        <div className="mt-14 space-y-10">
          {LEADER_REASONS.map((r, i) => (
            <Reveal key={r.n} className="border-t border-line pt-6">
              <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <span className="font-display text-sm font-semibold tabular-nums text-muted">{r.n}</span>
                  <h3 className="mt-2 break-keep font-display text-2xl font-bold">
                    {cx(`wtl.leader.${i}.title`, r.title)}
                  </h3>
                  <p className="mt-3 break-keep text-sm leading-relaxed text-muted">
                    {cx(`wtl.leader.${i}.lead`, r.lead)}
                  </p>
                </div>
                <div className="space-y-4">
                  {r.points.map((p, pi) => (
                    <div key={pi} className="border-l-2 border-court pl-4">
                      <p className="font-semibold text-ink">{cx(`wtl.leader.${i}.p${pi}k`, p.k)}</p>
                      <p className="mt-1 break-keep text-sm leading-relaxed text-ink/80">
                        {cx(`wtl.leader.${i}.p${pi}v`, p.v)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 브랜드 카피 */}
      <section className="bg-court-gradient">
        <Container className="py-20 sm:py-28">
          <Reveal className="mx-auto max-w-2xl text-center text-white">
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/70">
              The Court of Leaders
            </p>
            <p className="mt-6 break-keep font-display text-xl font-bold leading-relaxed sm:text-2xl">
              {cx("wtl.brand.q", WTL_TEXT.brandQ)}
            </p>
            <p className="mt-5 break-keep leading-relaxed text-white/85">
              {cx("wtl.brand.body", WTL_TEXT.brandBody)}
            </p>
            <p className="mt-6 break-keep font-display text-lg font-bold text-[#d4ff3d]">
              {cx("wtl.brand.close", WTL_TEXT.brandClose)}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 일반 입문자 — 내 삶이 리셋된다 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Your New Lifestyle"
          title={cx("wtl.life.title", WTL_TEXT.lifeTitle)}
          lead={cx("wtl.life.lead", WTL_TEXT.lifeLead)}
          wideLead
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LIFE_CHANGES.map((c, i) => (
            <Reveal key={c.n} delay={i * 60} className="rounded-2xl border border-line bg-base/40 p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-black text-court-bright">{c.n}</span>
                <h3 className="break-keep font-display text-lg font-bold">{cx(`wtl.life.${i}.title`, c.title)}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {cmsList(map, `wtl.life.${i}.points`, c.points.map(t), ko).map((p, pi) => (
                  <li key={pi} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                    <span className="mt-0.5 shrink-0 font-semibold text-court">·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 동기부여 CTA — 강조(빨강 배경 · 흰 글씨 · 라임 버튼) */}
      <Section tone="court">
        <Reveal className="mx-auto max-w-2xl text-center text-white">
          <h2 className="break-keep font-display text-3xl font-black leading-snug sm:text-4xl">
            {ko ? (
              <>
                단 한 번의 스트로크가
                <br />
                당신의 일상을 바꿉니다
              </>
            ) : (
              <>
                A single stroke
                <br />
                can change your everyday
              </>
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-xl break-keep text-sm leading-relaxed text-white/85 sm:text-base">
            {cx("wtl.cta.body", WTL_TEXT.ctaBody)}
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/apply/adult"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4ff3d] px-9 py-4 font-display text-base font-black text-black shadow-lg transition hover:brightness-105 hover:-translate-y-0.5"
            >
              {cx("wtl.cta.button", WTL_TEXT.ctaButton)}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
