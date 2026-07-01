import Link from "next/link";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

/** 홈 둘러보기: 각 메뉴(탭)에 어떤 내용이 있는지 카드로 미리 안내 */
export async function SiteGuide() {
  const locale = await getLocale();
  const { siteGuide, siteGuideLead } = getDict(locale);
  const ui = getUI(locale);

  return (
    <Section id="explore" reveal={false}>
      <Reveal>
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-court-bright">
          Explore GCM
        </p>

        {/* GCM 약어를 먼저, 크고 강하게 각인 */}
        <p className="mt-5 font-display text-4xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-court">G</span>lobal{" "}
          <span className="text-court">C</span>hampions{" "}
          <span className="text-court">M</span>akers
        </p>

        {/* 보조 헤딩 */}
        <h2 className="mt-5 font-display text-2xl font-bold leading-snug text-ink/75 sm:text-3xl">
          Your Path to{" "}
          <span className="font-accent font-semibold italic text-ink">Global Championship</span>{" "}
          Starts Here
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-muted">{siteGuideLead}</p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteGuide.map((g, i) => (
          <Reveal key={g.href} delay={i * 80} className="h-full">
            <Link
              href={g.href}
              className="group flex h-full flex-col rounded-2xl border border-line bg-card/30 p-7 transition-colors hover:border-court hover:bg-card/70"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold tabular-nums text-muted">
                  {g.no}
                </span>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-court-bright">
                  {g.label}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.desc}</p>

              <ul className="mt-4 space-y-1.5 text-sm text-ink/90">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-court">·</span>
                    {it}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-court">
                {ui.learnMore}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
