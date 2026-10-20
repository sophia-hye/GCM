import { type ReactNode } from "react";
import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { pick, type Locale } from "@/lib/i18n-pick";
import { site } from "@/lib/site-data";
import { getContentMap, cmsText } from "@/lib/cms";
import { KB_TEXT, KIDS_REASONS, type Bi } from "@/lib/kids-content";

const HERO_TITLE: Record<Locale, ReactNode> = {
  ko: (
    <>
      왜 아이의 첫 스포츠는
      <br />
      <span className="text-[#d4ff3d]">테니스</span>여야 할까요?
    </>
  ),
  en: (
    <>
      Why should a child&apos;s
      <br />
      first sport be <span className="text-[#d4ff3d]">tennis</span>?
    </>
  ),
  zh: (
    <>
      孩子的第一项运动
      <br />
      为什么应该是<span className="text-[#d4ff3d]">网球</span>？
    </>
  ),
  ja: (
    <>
      子どもの最初のスポーツは
      <br />
      なぜ<span className="text-[#d4ff3d]">テニス</span>であるべきか？
    </>
  ),
  it: (
    <>
      Perché il primo sport di un bambino
      <br />
      dovrebbe essere il <span className="text-[#d4ff3d]">tennis</span>?
    </>
  ),
  fr: (
    <>
      Pourquoi le premier sport d&apos;un enfant
      <br />
      devrait-il être le <span className="text-[#d4ff3d]">tennis</span> ?
    </>
  ),
  es: (
    <>
      ¿Por qué el primer deporte de un niño
      <br />
      debería ser el <span className="text-[#d4ff3d]">tenis</span>?
    </>
  ),
};

export async function KidsBenefits() {
  const locale = await getLocale();
  const map = await getContentMap();
  const t = (b: Bi) => pick(locale, b);
  const cx = (key: string, b: Bi) => cmsText(map, key, t(b), locale);

  return (
    <>
      {/* 인트로 */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/80">
              GCM Kids
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl break-keep font-display text-3xl font-black leading-[1.2] text-white sm:text-5xl">
              {HERO_TITLE[locale]}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl break-keep text-base leading-relaxed text-white/85 sm:text-lg">
              {cx("kids.hero.intro", KB_TEXT.heroIntro)}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 5가지 근거 */}
      <Section>
        <SectionHeading
          eyebrow="The Evidence"
          title={cx("kids.evid.title", KB_TEXT.evidTitle)}
          lead={cx("kids.evid.lead", KB_TEXT.evidLead)}
          wideLead
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {KIDS_REASONS.map((r, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className={`rounded-2xl border border-line bg-card/40 p-6 ${
                i === KIDS_REASONS.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-lg font-black tabular-nums text-court/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="break-keep font-display text-xl font-bold">{cx(`kids.reason.${i}.title`, r.title)}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-court-bright">{cx(`kids.reason.${i}.sub`, r.sub)}</p>
                </div>
              </div>
              <p className="mt-4 break-keep text-sm leading-relaxed text-ink/85">{cx(`kids.reason.${i}.body`, r.body)}</p>
              <p className="mt-4 inline-block rounded-full border border-line px-3 py-1 text-xs text-muted">
                {pick(locale, { ko: "근거", en: "Evidence", zh: "依据", ja: "根拠", it: "Evidenza", fr: "Preuve", es: "Evidencia" })} · {cx(`kids.reason.${i}.source`, r.source)}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* VIP 특별 혜택 CTA */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl rounded-3xl border border-court/25 bg-court/5 p-8 text-center sm:p-12">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-court-bright">
            VIP Offer
          </p>
          <h2 className="mt-3 break-keep font-display text-2xl font-black sm:text-3xl">
            {cx("kids.vip.title", KB_TEXT.vipTitle)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl break-keep text-sm leading-relaxed text-ink/85 sm:text-base">
            {cx("kids.vip.desc", KB_TEXT.vipDesc)}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-court px-7 py-3.5 text-sm font-bold text-white transition hover:bg-court-deep"
            >
              {pick(locale, {
                ko: "인스타그램 DM으로 신청하기 →",
                en: "Apply via Instagram DM →",
                zh: "通过 Instagram 私信申请 →",
                ja: "Instagram DM で申し込む →",
                it: "Richiedi via DM su Instagram →",
                fr: "Demander par DM Instagram →",
                es: "Solicitar por DM de Instagram →",
              })}
            </a>
            <a
              href="/contact"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-bold text-ink transition hover:border-court-bright"
            >
              {pick(locale, { ko: "상담 문의", en: "Contact us", zh: "咨询垂询", ja: "お問い合わせ", it: "Contattaci", fr: "Nous contacter", es: "Contáctanos" })}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
