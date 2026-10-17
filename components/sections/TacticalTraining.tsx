import { Section, SectionHeading, Container, Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";

const APPLY_URL = "https://forms.gle/p5kDNcKpsh4j7nV8A";

type Bi = { ko: string; en: string };
type Cat = { title: Bi; items: Bi[] };
type Diff = { no: string; title: Bi; body: Bi };

const INTRO: Bi[] = [
  {
    ko: "개인의 단편적인 경험에만 의존하여 전수하지 않습니다. GCM 코치진은 지금도 전국체전에 출전하는 현직 선수이자, 전 세계 엘리트·프로 대회를 직접 체험하고 분석·연구하는 것이 일상인 진짜 테니스 전문가입니다. 현장에서 실시간으로 다듬어진 최신 트렌드 분석을 바탕으로 세련된 기술을 몸에 흡수시켜 드립니다.",
    en: "We don't teach from fragmented personal experience. GCM's coaches are active players who still compete at the national championships, and true specialists who experience, analyze and research elite and pro tournaments around the world every day. Based on the latest trends refined in real time on the ground, we help you absorb refined technique into your body.",
  },
  {
    ko: "단순 레슨만으로는 잡히지 않던 폼과 습관의 고민을 “기술 - 습관 - 체득”으로 이어지는 25년 연구 체계와 피지컬 밸런스 메커니즘으로 명확하게 해결해 드립니다.",
    en: "The worries about form and habits that simple lessons never fixed — we resolve them clearly through a 25-year research system that connects “technique → habit → mastery,” together with a physical-balance mechanism.",
  },
];

const INTRO_QUOTE: Bi = {
  ko: "프로 데뷔를 준비하는 엘리트 선수의 열정만큼이나, 테니스에 진심인 성인 아마추어분들이 겪는 답답함과 고충을 누구보다 깊이 헤아리기에 GCM이 진심을 다해 함께합니다.",
  en: "Just as we understand the passion of an elite player preparing for a pro debut, we understand — more deeply than anyone — the frustrations of adult amateurs who are serious about tennis. That's why GCM is wholeheartedly with you.",
};

const INTRO_CLOSE: Bi = {
  ko: "누구나 현재 실력에서 확실한 성장을 완성하도록 설계된 GCM만의 3시간 전술 트레이닝 — 그 독보적인 훈련의 깊이를 직접 체험해 보세요.",
  en: "GCM's own 3-hour tactical training, designed so anyone can achieve clear growth from their current level — come experience the depth of this one-of-a-kind training yourself.",
};

const CURRICULUM: Cat[] = [
  {
    title: { ko: "스트록", en: "Stroke" },
    items: [
      { ko: "코어 중심축을 세운 안정적 타법", en: "Stable strokes built on a solid core axis" },
      { ko: "볼 깊이·구질별(플랫·탑스핀·앵글·로브) 대처", en: "Handling by depth and spin (flat, topspin, angle, lob)" },
      { ko: "찬스볼 공략과 수비 상황 전환", en: "Attacking chance balls and turning defense into offense" },
      { ko: "순간적인 코스 선택 판단", en: "Split-second shot-selection judgment" },
    ],
  },
  {
    title: { ko: "네트 플레이", en: "Net Play" },
    items: [
      { ko: "발리 기본 자세와 위치별(앞·뒤) 발리", en: "Volley fundamentals and positional (front/back) volleys" },
      { ko: "포칭(Poaching)과 전진·점프 스매시", en: "Poaching, forward and jump smashes" },
      { ko: "짧은 앵글 발리·드롭샷 감각", en: "Short-angle volleys and drop-shot touch" },
      { ko: "고강도 발리 서키트", en: "High-intensity volley circuits" },
    ],
  },
  {
    title: { ko: "복식 전술", en: "Doubles Tactics" },
    items: [
      { ko: "복식 포지션과 찬스볼 공략·넷 대시", en: "Doubles positioning, chance-ball attacks, net dashes" },
      { ko: "3구 이내 포칭 연계, 전위 압박", en: "Poaching combos within 3 shots, net pressure" },
      { ko: "로브·드롭으로 플레이 전환", en: "Switching play with lobs and drops" },
      { ko: "약속된 패턴 플레이 완성", en: "Completing set-play patterns" },
    ],
  },
  {
    title: { ko: "서브 & 리턴", en: "Serve & Return" },
    items: [
      { ko: "플랫·슬라이스·스핀 서브 메커니즘", en: "Flat, slice and spin serve mechanics" },
      { ko: "서브 서키트, 서브→첫 발리 연계", en: "Serve circuits and serve-to-first-volley links" },
      { ko: "압박·긴장 상황 대비 서브", en: "Serving under pressure and tension" },
      { ko: "실전 리턴 대응", en: "Match-ready return responses" },
    ],
  },
  {
    title: { ko: "피지컬 베이스", en: "Physical Base" },
    items: [
      { ko: "코어 안정성과 상·하체 분리 회전", en: "Core stability and separated upper/lower rotation" },
      { ko: "순발력·방향 전환·감속 버팀", en: "Quickness, change of direction, deceleration" },
      { ko: "부상 방지를 위한 신체 밸런스", en: "Body balance to prevent injury" },
    ],
  },
];

const DIFFERENTIATORS: Diff[] = [
  {
    no: "01",
    title: { ko: "최소 3시간, 체득형 훈련", en: "At least 3 hours — training that sticks" },
    body: {
      ko: "20~30분 레슨으로는 전술이 내 것이 되지 않습니다. 이론 → 반복 숙달 → 실전 적용까지 하루 3시간, 머리와 몸에 완전히 체득합니다.",
      en: "A 20–30 minute lesson won't make tactics your own. From theory to repetition to live application — three hours a day, fully absorbed into mind and body.",
    },
  },
  {
    no: "02",
    title: { ko: "One Team, 함께하는 훈련", en: "One Team — training together" },
    body: {
      ko: "개인 레슨이 아닌 팀 단위 훈련. 파트너의 실수에도 서로 응원하는 화이팅 속에서 'GCM 팀'의 자부심과 소속감을 나눕니다.",
      en: "Team-based training, not solo lessons. In an encouraging atmosphere — even through a partner's mistakes — you share the pride and belonging of 'Team GCM'.",
    },
  },
  {
    no: "03",
    title: { ko: "평일까지 이어지는 밀착 피드백", en: "Close feedback that continues on weekdays" },
    body: {
      ko: "평일 플레이 고민을 훈련에 반영하고, 카카오톡 채널·1:1 전술 코칭·개인별 과제로 성장 효과를 극대화합니다.",
      en: "We fold your weekday play into training, maximizing growth with a KakaoTalk channel, 1:1 tactical coaching, and personalized homework.",
    },
  },
  {
    no: "04",
    title: { ko: "엘리트 선수 교류전 & 정기 이벤트", en: "Elite exhibition matches & regular events" },
    body: {
      ko: "현직 엘리트 선수들과 한 코트에서 호흡하고, 분기별 교류전으로 훈련한 전술을 실전에서 검증합니다.",
      en: "Share a court with active elite players, and test your trained tactics in quarterly exhibition matches.",
    },
  },
  {
    no: "05",
    title: { ko: "진심인 크루들과의 교류", en: "Connecting with crews who are all-in" },
    body: {
      ko: "매 기수 테니스에 진심인 멋진 크루들과 만나, 라이프스타일 전반에 긍정적이고 건강한 에너지를 나눕니다.",
      en: "Each season you meet great crews who are serious about tennis, sharing positive, healthy energy across your whole lifestyle.",
    },
  },
];

const TARGET: Bi[] = [
  {
    ko: "단순한 원포인트 레슨에 한계를 느끼고, 3시간 밀착 훈련으로 확실한 기량 향상을 원하시는 분",
    en: "Those who feel limited by one-point lessons and want clear improvement through 3-hour intensive training",
  },
  {
    ko: "파트너와 함께 화이팅하며 GCM 소속감을 가지고 열정적으로 훈련에 임하실 분",
    en: "Those who'll train passionately with partners, with a sense of belonging to GCM",
  },
  {
    ko: "매주 부여되는 과제와 피드백을 착실히 이행할 뚜렷한 각오와 열정을 가지신 분",
    en: "Those with the resolve and passion to follow through on weekly homework and feedback",
  },
];

export async function TacticalTraining() {
  const ko = (await getLocale()) === "ko";
  const t = (b: Bi) => (ko ? b.ko : b.en);

  return (
    <>
      {/* 인트로 — GCM 전술반 */}
      <Section tone="muted">
        <span className="mb-5 inline-block rounded-full border border-court/30 bg-court/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-court-bright">
          {ko ? "기본기가 있는 분을 위한 심화 트랙" : "An advanced track for those with the basics"}
        </span>
        <SectionHeading
          eyebrow="GCM 전술반"
          title={ko ? "레슨이 아니라, 압도적인 훈련" : "Not a lesson — intensive training"}
          lead={
            ko
              ? "테니스를 잘하기 위해 꼭 알아야 할 상식과 코칭의 관점이 다릅니다."
              : "A different standard of know-how and coaching for getting genuinely better at tennis."
          }
          wideLead
        />
        <div className="mt-10 max-w-3xl space-y-5">
          {INTRO.map((p, i) => (
            <p key={i} className="break-keep text-base leading-loose text-ink/85">
              {t(p)}
            </p>
          ))}
          <blockquote className="border-l-4 border-court pl-5 font-display text-lg font-semibold leading-relaxed text-ink">
            {t(INTRO_QUOTE)}
          </blockquote>
          <p className="break-keep text-base font-semibold leading-loose text-ink">
            {t(INTRO_CLOSE)}
          </p>
        </div>
      </Section>

      {/* 커리큘럼 — 주차 구분 없이 카테고리별 */}
      <Section>
        <SectionHeading
          eyebrow="Curriculum"
          title={ko ? "무엇을 훈련하나요" : "What you train"}
          lead={
            ko
              ? "합류하는 주차와 상관없이, 순환형 시스템으로 매 세션 새로운 실전 테마를 완성합니다. 피지컬과 전술을 유기적으로 결합해 '기술 → 습관 → 체득'으로 이어집니다."
              : "Whatever week you join, a cyclical system lets you complete a fresh live theme every session — physical and tactical work combined into 'technique → habit → mastery'."
          }
          wideLead
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CURRICULUM.map((c, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="rounded-2xl border border-line bg-card/40 p-6"
            >
              <h3 className="font-display text-lg font-bold text-court-bright">{t(c.title)}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it, j) => (
                  <li key={j} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                    <span className="mt-0.5 shrink-0 text-court">·</span>
                    <span>{t(it)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5가지 독보적 차별점 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why GCM 전술반"
          title={ko ? "전술반만의 5가지 차별점" : "Five things only GCM 전술반 offers"}
        />
        <div className="mt-12 space-y-8">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.no} delay={i * 60} className="border-t border-line pt-6">
              <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-semibold tabular-nums text-muted">
                    {d.no}
                  </span>
                  <h3 className="break-keep font-display text-xl font-bold">{t(d.title)}</h3>
                </div>
                <p className="break-keep text-sm leading-relaxed text-muted">{t(d.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 권장 대상 + 신청 CTA */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">
              {ko ? "이런 분께 권합니다" : "Recommended for"}
            </h2>
            <ul className="mt-6 space-y-4">
              {TARGET.map((it, i) => (
                <li key={i} className="flex gap-3 break-keep text-base leading-relaxed text-ink/90">
                  <span className="mt-1 shrink-0 font-semibold text-court">✓</span>
                  <span>{t(it)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-court/30 bg-court/5 p-8 text-center">
            <h3 className="break-keep font-display text-xl font-bold text-court-bright">
              {ko ? "GCM 전술반 신청" : "Apply to GCM 전술반"}
            </h3>
            <p className="mt-3 break-keep text-sm leading-relaxed text-muted">
              {ko
                ? "기존 수강생 재등록 TO가 우선 반영되어 조기 마감될 수 있습니다. 지금 바로 그 깊이를 경험해 보세요."
                : "Returning members' spots are filled first, so openings may close early. Experience the depth for yourself now."}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-court px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-court-deep"
              >
                {ko ? "전술반 신청하기" : "Apply now"}
              </a>
              <Button href="/coaches" variant="outline">
                {ko ? "코치진 보기" : "Meet the coaches"}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
