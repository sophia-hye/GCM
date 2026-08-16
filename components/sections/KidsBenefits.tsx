import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { site } from "@/lib/site-data";

type Bi = { ko: string; en: string };

const REASONS: { title: Bi; sub: Bi; source: Bi; body: Bi }[] = [
  {
    title: { ko: "전두엽 & 소뇌 동시 자극", en: "Frontal Lobe & Cerebellum, Activated at Once" },
    sub: { ko: "학습 집중력 향상", en: "Sharper focus for learning" },
    source: {
      ko: "하버드 의과대학 연구 · 뇌과학 학술지 (Frontiers in Human Neuroscience)",
      en: "Harvard Medical School research · Frontiers in Human Neuroscience",
    },
    body: {
      ko: "테니스는 공의 회전·속도·낙하지점을 0.1초 내에 예측해야 합니다. 이 과정에서 전두엽(집중력·인지 능력)과 소뇌(감각 통합)가 동시에 활성화되어, 공부에 필요한 몰입력과 문제 해결 능력이 비약적으로 상승합니다.",
      en: "Tennis requires predicting the ball's spin, speed and landing point within 0.1 seconds. This simultaneously activates the frontal lobe (focus and cognition) and the cerebellum (sensory integration), dramatically raising the immersion and problem-solving ability needed for study.",
    },
  },
  {
    title: { ko: "성장판 자극 및 전신 코어 강화", en: "Growth-Plate Stimulation & Full-Body Core" },
    sub: { ko: "균형 잡힌 신체 발달", en: "Balanced physical development" },
    source: {
      ko: "대한스포츠의학회 · 유소년 신체발달 연구",
      en: "Korean Society of Sports Medicine · youth development research",
    },
    body: {
      ko: "순간적인 순발력(Sprint)과 감속(Deceleration) 동작은 하체 관절과 성장판에 적절한 자극을 주어 성장을 촉진합니다. 라켓을 휘두르는 회전 운동은 척추 주변 코어 근육을 균형 있게 발달시킵니다.",
      en: "Explosive sprints and deceleration give appropriate stimulation to the lower-body joints and growth plates, promoting growth. The rotational swing develops the core muscles around the spine in balance.",
    },
  },
  {
    title: { ko: "회복탄력성 & 높은 멘탈 지수", en: "Resilience & a High Mental Index" },
    sub: { ko: "자기 효능감 · 위기 관리", en: "Self-efficacy & crisis management" },
    source: { ko: "미국 스포츠심리학회(AASP) 연구", en: "Association for Applied Sport Psychology (AASP)" },
    body: {
      ko: "경기 중 외부의 도움 없이 스스로 전략을 수정하고 감정을 제어해야 합니다. 실수를 빠르게 털어내고 다음 포인트를 준비하는 훈련은 아이의 자기 효능감과 위기 관리 능력을 끌어올립니다.",
      en: "During a match, players must adjust strategy and control emotions on their own, without outside help. Shaking off mistakes and preparing for the next point raises a child's self-efficacy and crisis-management ability.",
    },
  },
  {
    title: { ko: "평생 유지되는 사회성 & 매너", en: "Lifelong Social Skills & Manners" },
    sub: { ko: "배려심 · 공감 능력", en: "Consideration & empathy" },
    source: {
      ko: "영국 스포츠의학 저널(BJSM) 장기 추적 조사",
      en: "British Journal of Sports Medicine (BJSM) longitudinal study",
    },
    body: {
      ko: "라켓 스포츠를 경험한 아동은 타인에 대한 배려심과 공감 능력이 높게 나타났습니다. 네트를 경계로 상대를 존중하는 정제된 규칙을 통해 어디서나 환영받는 매너와 품격을 갖추게 됩니다.",
      en: "Children who play racket sports show higher consideration and empathy for others. Through refined rules that respect the opponent across the net, they gain the manners and grace that are welcomed anywhere.",
    },
  },
  {
    title: { ko: "장기적 신체 건강 & 수명 연장", en: "Long-Term Health & Longevity" },
    sub: { ko: "평생의 신체·정신 자산", en: "A lifelong physical & mental asset" },
    source: { ko: "코펜하겐 심장 연구 (Copenhagen City Heart Study)", en: "Copenhagen City Heart Study" },
    body: {
      ko: "여러 스포츠 중 테니스를 즐기는 사람들의 기대 수명이 가장 길게(평균 9.7년 연장) 나타났습니다. 어릴 때 배운 테니스는 평생 아이의 신체적·정신적 자산이 됩니다.",
      en: "Among many sports, tennis players showed the longest life expectancy (about 9.7 years longer on average). Tennis learned in childhood becomes a lifelong physical and mental asset.",
    },
  },
];

export async function KidsBenefits() {
  const ko = (await getLocale()) === "ko";
  const t = (b: Bi) => (ko ? b.ko : b.en);

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
              {ko ? (
                <>
                  왜 아이의 첫 스포츠는
                  <br />
                  <span className="text-[#d4ff3d]">테니스</span>여야 할까요?
                </>
              ) : (
                <>
                  Why should a child&apos;s
                  <br />
                  first sport be <span className="text-[#d4ff3d]">tennis</span>?
                </>
              )}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl break-keep text-base leading-relaxed text-white/85 sm:text-lg">
              {ko
                ? "전 세계 엘리트 집단이 자녀의 첫 스포츠로 테니스를 선택하는 이유. 단순한 소문이 아닌 학술적·의학적 근거로 정리해 드립니다."
                : "Why the world's elite choose tennis as their child's first sport — organized not as rumor, but with academic and medical evidence."}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 5가지 근거 */}
      <Section>
        <SectionHeading
          eyebrow="The Evidence"
          title={ko ? "테니스가 아이에게 남기는 5가지" : "5 things tennis gives a child"}
          lead={
            ko
              ? "집중력부터 성장, 멘탈, 사회성, 평생 건강까지 — 근거가 뒷받침하는 변화."
              : "From focus to growth, mental strength, social skills and lifelong health — changes backed by evidence."
          }
          wideLead
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title.en}
              delay={i * 60}
              className={`rounded-2xl border border-line bg-card/40 p-6 ${
                i === REASONS.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-lg font-black tabular-nums text-court/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="break-keep font-display text-xl font-bold">{t(r.title)}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-court-bright">{t(r.sub)}</p>
                </div>
              </div>
              <p className="mt-4 break-keep text-sm leading-relaxed text-ink/85">{t(r.body)}</p>
              <p className="mt-4 inline-block rounded-full border border-line px-3 py-1 text-xs text-muted">
                {ko ? "근거" : "Evidence"} · {t(r.source)}
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
            {ko ? "GCM KIDS VIP 특별 혜택" : "GCM KIDS VIP Special Offer"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl break-keep text-sm leading-relaxed text-ink/85 sm:text-base">
            {ko
              ? "지금 바로 DM으로 ‘VIP 체험수업’을 신청해 보세요. 아이의 성향과 체형을 고려한 전담 코치진의 1:1 밀착 상담을 제공해 드립니다."
              : "Apply for a ‘VIP trial lesson’ by DM right now. Our dedicated coaches provide close 1:1 consultation tailored to your child's disposition and physique."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-court px-7 py-3.5 text-sm font-bold text-white transition hover:bg-court-deep"
            >
              {ko ? "인스타그램 DM으로 신청하기 →" : "Apply via Instagram DM →"}
            </a>
            <a
              href="/contact"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-bold text-ink transition hover:border-court-bright"
            >
              {ko ? "상담 문의" : "Contact us"}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
