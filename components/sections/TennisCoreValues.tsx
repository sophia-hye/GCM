import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";

type Bi = { ko: string; en: string };

const CORE: { n: string; label: string; title: Bi; body: Bi; take: Bi }[] = [
  {
    n: "01",
    label: "Self-Reliance",
    title: { ko: "주체성 · 문제해결능력", en: "Self-Reliance & Problem-Solving" },
    body: {
      ko: "경기가 시작되면 외부의 개입이 금지되는 대표적인 '단독 스포츠'. 랠리 중 몇 초도 안 되는 짧은 순간에 공의 궤적, 상대의 위치, 바람의 방향까지 계산해 최선의 샷을 스스로 결정해야 합니다.",
      en: "A quintessential 'solo sport' where, once play begins, outside help is banned. In a split-second rally you must read the ball's path, the opponent's position and even the wind, and decide your best shot alone.",
    },
    take: {
      ko: "코트에서 혼자 선택하고 그 결과에 책임지는 경험 → 자기 주도적으로 문제를 정의하고 솔루션을 내는 인재로 성장합니다.",
      en: "Choosing alone on court and owning the result → grows into a person who defines problems and delivers solutions on their own.",
    },
  },
  {
    n: "02",
    label: "Resilience",
    title: { ko: "회복 탄력성 · 멘탈 관리", en: "Resilience & Mental Management" },
    body: {
      ko: "테니스는 '실수(Error)의 스포츠'. 프로조차 수많은 에러를 범하며, 한 포인트를 잃었다고 낙담하면 다음 포인트까지 연속으로 잃습니다. 자책을 털어내고 'Next Ball'에 집중하는 멘탈 훈련이 필수입니다.",
      en: "Tennis is a 'sport of errors'. Even pros miss constantly, and dwelling on one lost point costs the next. Shaking off self-blame and focusing on the 'next ball' is essential mental training.",
    },
    take: {
      ko: "실패에 좌절하기보다 인정하고 Next Step으로 전환하는 능력(Agility) → 변화가 빠른 현대 사회에서 인재의 핵심 평가 기준.",
      en: "The agility to accept failure and pivot to the next step rather than despair → a core criterion for talent in a fast-changing world.",
    },
  },
  {
    n: "03",
    label: "Integrity & Sportsmanship",
    title: { ko: "정직성 · 매너 · 공정한 경쟁", en: "Integrity · Manners · Fair Play" },
    body: {
      ko: "심판 없이 선수 스스로 라인 안팎을 판정하는 'Self-call'. 자신의 이익을 위해 거짓말하고 싶은 유혹을 이기고 정직하게 판정하며, 경기 후에는 악수를 나누고 결과에 승복하는 법을 배웁니다.",
      en: "With no umpire, players call the lines themselves ('self-call'). Resisting the temptation to cheat, they judge honestly, shake hands afterward and learn to accept the result.",
    },
    take: {
      ko: "룰을 준수하고 상대를 존중하는 '도덕적 자율성과 정직성'을 체화 → 조직 내에서 신뢰받는 리더로 성장합니다.",
      en: "Embodying moral autonomy and honesty — following rules and respecting opponents → grows into a leader others trust.",
    },
  },
  {
    n: "04",
    label: "Strategic Thinking",
    title: { ko: "융합적 뇌 발달 · 순발력", en: "Integrated Brain Development & Agility" },
    body: {
      ko: "'몸으로 두는 체스'. 시각 피질·운동 피질·전전두엽(기획과 판단)을 동시에 활성화하는 복합 뇌 운동으로, 0.5초도 안 되는 시간에 상대의 수를 예측하고 전략을 바꾸는 과정이 뇌의 신경망을 극적으로 발달시킵니다.",
      en: "'Chess played with the body'. A complex brain workout that fires the visual cortex, motor cortex and prefrontal lobe at once — predicting the opponent's move and switching strategy in under half a second dramatically develops neural networks.",
    },
    take: {
      ko: "실시간 데이터와 정황을 빠르게 읽고 전략적 비전과 순발력을 발휘하는 능력 → 상위 1% 인재의 특징. 뇌의 유연성(Neuroplasticity)은 학업·비즈니스 전략 능력으로 직결됩니다.",
      en: "Reading real-time data fast and showing strategic vision and quickness → a hallmark of the top 1%. Neuroplasticity translates directly into academic and business strategy.",
    },
  },
];

const UNIQUE: { title: Bi; body: Bi }[] = [
  {
    title: { ko: "축구·농구 대비 '상대적 공평함'", en: "'Relative Fairness' vs. Soccer & Basketball" },
    body: {
      ko: "농구는 키, 축구는 체격·스피드 같은 타고난 피지컬이 절대적입니다. 테니스는 체격이 작아도 타이밍·전략·회전(스핀)·멘탈로 대형 선수를 압도할 수 있는 몇 안 되는 스포츠입니다.",
      en: "Basketball rewards height, soccer size and speed. Tennis is one of the few sports where a smaller player can overwhelm a bigger one through timing, strategy, spin and mentality.",
    },
  },
  {
    title: { ko: "골프 대비 '평생 감각 + 단시간 폭발적 운동량'", en: "'Lifelong Feel + Explosive Workout' vs. Golf" },
    body: {
      ko: "골프는 운동량이 적고, 축구·농구는 나이가 들면 부상으로 접게 됩니다. 테니스는 1시간 동안 체스(머리싸움)와 마라톤(유산소)을 동시에 하는 고강도 운동이며, 어릴 때 익힌 스윙과 풋워크는 80세까지 즐기는 '평생의 유산'이 됩니다.",
      en: "Golf burns little; soccer and basketball fade with age and injury. Tennis is an hour of chess (mind) and marathon (cardio) at once, and the swing and footwork learned young become a 'lifelong legacy' enjoyed past 80.",
    },
  },
  {
    title: { ko: "단체 종목 대비 '100% 자기 주도성'", en: "'100% Ownership' vs. Team Sports" },
    body: {
      ko: "팀 스포츠는 내 실수가 묻히거나 팀원 때문에 지기도 해 '남 탓'과 '억울함'을 배우기 쉽습니다. 테니스는 코트 안에 나 혼자이기에 득점도 실점도, 승리도 패배도 오롯이 나의 책임 — 결과에 100% 책임지는 성숙한 어른으로 자랍니다.",
      en: "In team sports mistakes get buried and you can lose because of teammates — breeding blame and resentment. In tennis you're alone on court, so every point, win or loss is fully yours — growing a mature adult who owns the outcome 100%.",
    },
  },
  {
    title: { ko: "모든 스포츠 대비 '글로벌 매너(Etiquette)'", en: "'Global Etiquette' vs. Every Sport" },
    body: {
      ko: "대부분의 스포츠가 심판 판정에 의존하거나 몸싸움이 격렬합니다. 테니스는 치기 좋게 공을 건네는 배려, 좋은 샷에 박수를 보내는 품격, 스스로 정직하게 판정하는 Self-call 등 '스포츠맨십' 자체가 규칙으로 명시된 유일무이한 스포츠입니다.",
      en: "Most sports lean on referees or hard physical contact. Tennis is the one sport where sportsmanship itself is written into the rules — feeding the ball considerately, applauding good shots, and calling lines honestly.",
    },
  },
];

const TOPCLASS: { title: Bi; body: Bi }[] = [
  {
    title: { ko: "지적 · 신체적 고도 충전", en: "Peak Mental & Physical Recharge" },
    body: {
      ko: "복잡한 결정을 내리는 CEO들에게 테니스는 뇌를 극적으로 활성화하면서 동시에 업무 스트레스를 완전히 잊게 하는 '최상급 몰입(Flow)'을 제공합니다.",
      en: "For CEOs making complex decisions, tennis offers top-tier flow — firing up the brain while making work stress vanish completely.",
    },
  },
  {
    title: { ko: "시간 효율적인 고강도 네트워크", en: "Time-Efficient, High-Intensity Networking" },
    body: {
      ko: "6~8시간 걸리는 골프에 비해 1~2시간 안에 폭발적 운동량·완벽한 몰입·밀도 높은 교류를 동시에 얻습니다. 바쁜 리더에게 '시간 대비 최고의 가치(ROI)'.",
      en: "Where golf takes 6–8 hours, tennis delivers an explosive workout, full immersion and dense exchange in 1–2 — the best ROI for busy leaders.",
    },
  },
  {
    title: { ko: "매너 · 품격 기반 네트워크", en: "Networking Built on Manners & Class" },
    body: {
      ko: "판정을 상대에게 맡기는 신뢰(Self-call) 기반의 신사 스포츠. 코트 위의 매너와 위기 대응에 인품과 비즈니스 에티켓이 그대로 드러나, 성공한 이들은 테니스로 '함께 일할 사람'을 선별합니다.",
      en: "A gentleman's sport built on trust (self-call). Character and business etiquette show in on-court manners and crisis response — the successful use tennis to pick who they'll work with.",
    },
  },
];

export async function TennisCoreValues() {
  const ko = (await getLocale()) === "ko";
  const t = (b: Bi) => (ko ? b.ko : b.en);

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
              {ko
                ? "AI 시대의 핵심 인재상은 '정답 찾기(Knowledge)'에서 '맥락 파악과 주체적 판단(Meta)'으로 옮겨가고 있습니다. 테니스는 비인지적 능력(Soft Skills)과 실시간 뇌지컬(Meta-Cognitive)을 동시에 길러주는, 최고의 인성·리더십 조기 교육 플랫폼입니다."
                : "In the AI era, prized talent is shifting from 'finding the answer (Knowledge)' to 'reading context and judging for oneself (Meta)'. Tennis builds both soft skills and real-time meta-cognition at once — the finest early platform for character and leadership."}
            </p>
            <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-left backdrop-blur-sm">
                <span className="inline-block rounded-full border border-[#d4ff3d]/60 bg-[#d4ff3d]/15 px-3 py-1 font-display text-sm font-bold text-[#d4ff3d]">
                  {ko ? "비인지적 능력 (Soft Skills)" : "Non-cognitive (Soft Skills)"}
                </span>
                <p className="mt-2.5 break-keep text-sm text-white/85">
                  {ko
                    ? "심판 없는 정직함(Self-call) · 1:1 외로움을 견디는 회복탄력성"
                    : "Honesty without a referee (self-call) · resilience to endure 1:1 solitude"}
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-left backdrop-blur-sm">
                <span className="inline-block rounded-full border border-[#d4ff3d]/60 bg-[#d4ff3d]/15 px-3 py-1 font-display text-sm font-bold text-[#d4ff3d]">
                  {ko ? "실시간 뇌지컬 (Meta-Cognitive)" : "Real-time Meta-Cognitive"}
                </span>
                <p className="mt-2.5 break-keep text-sm text-white/85">
                  {ko
                    ? "움직이는 3D 체스(공간·궤적 판단) · 0.1초 만에 실행하는 주체적 결단력"
                    : "Moving 3D chess (space & trajectory) · decisive judgment executed in 0.1s"}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4대 핵심 역량 */}
      <Section>
        <SectionHeading
          eyebrow="Core Competencies"
          title={ko ? "테니스가 길러주는 4가지 핵심 역량" : "The 4 core competencies tennis builds"}
          lead={
            ko
              ? "주체성, 회복 탄력성, 정직한 태도, 전략적 사고 — 미래의 사회적 인재상과 완벽히 궤를 같이 합니다."
              : "Self-reliance, resilience, integrity and strategic thinking — perfectly aligned with the talent the future demands."
          }
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {CORE.map((c) => (
            <Reveal key={c.n} className="border-t border-line pt-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-semibold tabular-nums text-muted">{c.n}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-court-bright">
                  {c.label}
                </span>
              </div>
              <h3 className="mt-3 break-keep font-display text-2xl font-bold">{t(c.title)}</h3>
              <p className="mt-3 break-keep text-sm leading-relaxed text-muted">{t(c.body)}</p>
              <p className="mt-4 border-l-2 border-court pl-4 break-keep text-sm font-medium leading-relaxed text-ink/90">
                {t(c.take)}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 독보적 강점 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Unrivaled"
          title={ko ? "테니스만이 가진 독보적인 강점" : "Strengths only tennis has"}
          lead={
            ko
              ? "축구·수영·골프·농구와 비교했을 때, 테니스만의 Unique하고 Unrivaled한 가치."
              : "Compared with soccer, swimming, golf and basketball — the unique, unrivaled value of tennis."
          }
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {UNIQUE.map((u, i) => (
            <Reveal key={u.title.en} delay={i * 60} className="rounded-2xl border border-line bg-card/30 p-6">
              <h3 className="break-keep font-display text-lg font-bold">{t(u.title)}</h3>
              <p className="mt-2.5 break-keep text-sm leading-relaxed text-muted">{t(u.body)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 상징 자본 · 탑클래스 */}
      <Section>
        <SectionHeading
          eyebrow="Symbolic Capital"
          title={ko ? "Top Class가 테니스에 빠지는 이유" : "Why the top class falls for tennis"}
          lead={
            ko
              ? "어릴 때 배우는 테니스는 상류 사회·비즈니스 인프라에 자연스럽게 진입하는 최고의 '상징 자본'과 '인적 자산'입니다."
              : "Tennis learned young is the finest 'symbolic capital' and 'human asset' for entering upper-society and business circles naturally."
          }
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {TOPCLASS.map((tc, i) => (
            <Reveal key={tc.title.en} delay={i * 60} className="border-t border-line pt-6">
              <span className="font-display text-sm font-semibold tabular-nums text-muted">
                0{i + 1}
              </span>
              <h3 className="mt-3 break-keep text-lg font-bold">{t(tc.title)}</h3>
              <p className="mt-2.5 break-keep text-sm leading-relaxed text-muted">{t(tc.body)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-12 max-w-2xl rounded-2xl border border-court/25 bg-court/5 p-6 text-center break-keep text-sm leading-relaxed text-ink/85">
          {ko
            ? "어릴 적 테니스 경험 → 높은 수준의 에티켓 & 자율적 멘탈 체화 → 고소득 전문직·리더 그룹 진입 시 '자연스러운 문화적 공감대' 형성 → 평생의 인적 네트워크와 사회적 자산 확보."
            : "Early tennis experience → refined etiquette & self-driven mentality → a natural cultural rapport when entering high-earning professional and leadership circles → a lifelong network and social capital."}
        </Reveal>
      </Section>

      {/* 결론 — 위기를 대하는 태도 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Mindset"
          title={ko ? "위기를 대하는 태도가 달라집니다" : "Your attitude toward crisis changes"}
          lead={
            ko
              ? "코트 위에서 외로움을 견디고 순간의 위기를 전략으로 극복한 경험은, 훗날 거대한 위기 상황에서 엄청난 멘탈 자산이 됩니다."
              : "Enduring solitude on court and overcoming momentary crises with strategy becomes an immense mental asset in life's bigger crises."
          }
          wideLead
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-base/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {ko ? "일반적인 아이" : "A typical child"}
            </p>
            <p className="mt-3 break-keep text-base leading-relaxed text-ink/85">
              {ko
                ? "시험 망침 → \"난 끝났어, 공부해도 안 돼\" → 장기적 좌절과 방황"
                : "Fails a test → \"I'm done, studying won't help\" → long-term frustration and drift"}
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-court/30 bg-court/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-court-bright">
              {ko ? "테니스를 배운 아이" : "A child who learned tennis"}
            </p>
            <p className="mt-3 break-keep text-base leading-relaxed text-ink/90">
              {ko
                ? "시험 망침 → \"이번 포인트를 잃었을 뿐이야\" → 원인 분석 → 다음 시험 준비"
                : "Fails a test → \"I just lost this one point\" → analyze the cause → prepare for the next"}
            </p>
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="break-keep font-display text-lg font-semibold leading-relaxed text-ink sm:text-xl">
            {ko
              ? "코트 전체의 흐름을 파악 → 상대의 위치와 템포 읽기 → 내가 할 수 있는 최선의 샷에만 집중"
              : "Read the whole court's flow → read the opponent's position and tempo → focus only on your best possible shot"}
          </p>
          <p className="mt-4 break-keep text-sm text-muted">
            {ko ? (
              <>
                Flow(흐름)를 파악하는 여유는 삶의 페이스 조절(Pacing)로 이어집니다.
                <br />
                승패에 승복할 줄 아는 성숙함(Acceptance)과 서로를 향한 깊은 존중(Mutual Respect).
              </>
            ) : (
              <>
                The composure to read the Flow leads to pacing in life.
                <br />
                The maturity to accept wins and losses (Acceptance), and deep mutual respect.
              </>
            )}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
