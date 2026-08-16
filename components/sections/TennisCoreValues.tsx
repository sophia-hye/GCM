import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";

const CORE = [
  {
    n: "01",
    en: "Self-Reliance",
    title: "주체성 · 문제해결능력",
    body: "경기가 시작되면 외부의 개입이 금지되는 대표적인 '단독 스포츠'. 랠리 중 몇 초도 안 되는 짧은 순간에 공의 궤적, 상대의 위치, 바람의 방향까지 계산해 최선의 샷을 스스로 결정해야 합니다.",
    take: "코트에서 혼자 선택하고 그 결과에 책임지는 경험 → 자기 주도적으로 문제를 정의하고 솔루션을 내는 인재로 성장합니다.",
  },
  {
    n: "02",
    en: "Resilience",
    title: "회복 탄력성 · 멘탈 관리",
    body: "테니스는 '실수(Error)의 스포츠'. 프로조차 수많은 에러를 범하며, 한 포인트를 잃었다고 낙담하면 다음 포인트까지 연속으로 잃습니다. 자책을 털어내고 'Next Ball'에 집중하는 멘탈 훈련이 필수입니다.",
    take: "실패에 좌절하기보다 인정하고 Next Step으로 전환하는 능력(Agility) → 변화가 빠른 현대 사회에서 인재의 핵심 평가 기준.",
  },
  {
    n: "03",
    en: "Integrity & Sportsmanship",
    title: "정직성 · 매너 · 공정한 경쟁",
    body: "심판 없이 선수 스스로 라인 안팎을 판정하는 'Self-call'. 자신의 이익을 위해 거짓말하고 싶은 유혹을 이기고 정직하게 판정하며, 경기 후에는 악수를 나누고 결과에 승복하는 법을 배웁니다.",
    take: "룰을 준수하고 상대를 존중하는 '도덕적 자율성과 정직성'을 체화 → 조직 내에서 신뢰받는 리더로 성장합니다.",
  },
  {
    n: "04",
    en: "Strategic Thinking",
    title: "융합적 뇌 발달 · 순발력",
    body: "'몸으로 두는 체스'. 시각 피질·운동 피질·전전두엽(기획과 판단)을 동시에 활성화하는 복합 뇌 운동으로, 0.5초도 안 되는 시간에 상대의 수를 예측하고 전략을 바꾸는 과정이 뇌의 신경망을 극적으로 발달시킵니다.",
    take: "실시간 데이터와 정황을 빠르게 읽고 전략적 비전과 순발력을 발휘하는 능력 → 상위 1% 인재의 특징. 뇌의 유연성(Neuroplasticity)은 학업·비즈니스 전략 능력으로 직결됩니다.",
  },
];

const UNIQUE = [
  {
    title: "축구·농구 대비 '상대적 공평함'",
    body: "농구는 키, 축구는 체격·스피드 같은 타고난 피지컬이 절대적입니다. 테니스는 체격이 작아도 타이밍·전략·회전(스핀)·멘탈로 대형 선수를 압도할 수 있는 몇 안 되는 스포츠입니다.",
  },
  {
    title: "골프 대비 '평생 감각 + 단시간 폭발적 운동량'",
    body: "골프는 운동량이 적고, 축구·농구는 나이가 들면 부상으로 접게 됩니다. 테니스는 1시간 동안 체스(머리싸움)와 마라톤(유산소)을 동시에 하는 고강도 운동이며, 어릴 때 익힌 스윙과 풋워크는 80세까지 즐기는 '평생의 유산'이 됩니다.",
  },
  {
    title: "단체 종목 대비 '100% 자기 주도성'",
    body: "팀 스포츠는 내 실수가 묻히거나 팀원 때문에 지기도 해 '남 탓'과 '억울함'을 배우기 쉽습니다. 테니스는 코트 안에 나 혼자이기에 득점도 실점도, 승리도 패배도 오롯이 나의 책임 — 결과에 100% 책임지는 성숙한 어른으로 자랍니다.",
  },
  {
    title: "모든 스포츠 대비 '글로벌 매너(Etiquette)'",
    body: "대부분의 스포츠가 심판 판정에 의존하거나 몸싸움이 격렬합니다. 테니스는 치기 좋게 공을 건네는 배려, 좋은 샷에 박수를 보내는 품격, 스스로 정직하게 판정하는 Self-call 등 '스포츠맨십' 자체가 규칙으로 명시된 유일무이한 스포츠입니다.",
  },
];

const TOPCLASS = [
  {
    title: "지적 · 신체적 고도 충전",
    body: "복잡한 결정을 내리는 CEO들에게 테니스는 뇌를 극적으로 활성화하면서 동시에 업무 스트레스를 완전히 잊게 하는 '최상급 몰입(Flow)'을 제공합니다.",
  },
  {
    title: "시간 효율적인 고강도 네트워크",
    body: "6~8시간 걸리는 골프에 비해 1~2시간 안에 폭발적 운동량·완벽한 몰입·밀도 높은 교류를 동시에 얻습니다. 바쁜 리더에게 '시간 대비 최고의 가치(ROI)'.",
  },
  {
    title: "매너 · 품격 기반 네트워크",
    body: "판정을 상대에게 맡기는 신뢰(Self-call) 기반의 신사 스포츠. 코트 위의 매너와 위기 대응에 인품과 비즈니스 에티켓이 그대로 드러나, 성공한 이들은 테니스로 '함께 일할 사람'을 선별합니다.",
  },
];

export function TennisCoreValues() {
  return (
    <>
      {/* 인트로 — AI 시대 인재상 */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/80">
              AI 시대 인재상
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-black leading-[1.2] text-white sm:text-5xl">
              AI가 대체할 수 없는
              <br />
              <span className="text-[#d4ff3d]">1% 영리더</span>의 아우라
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              AI 시대의 핵심 인재상은 '정답 찾기(Knowledge)'에서 '맥락 파악과 주체적 판단(Meta)'으로
              옮겨가고 있습니다. 테니스는 비인지적 능력(Soft Skills)과 실시간 뇌지컬(Meta-Cognitive)을
              동시에 길러주는, 최고의 인성·리더십 조기 교육 플랫폼입니다.
            </p>
            <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-left backdrop-blur-sm">
                <span className="inline-block rounded-full border border-[#d4ff3d]/60 bg-[#d4ff3d]/15 px-3 py-1 font-display text-sm font-bold text-[#d4ff3d]">
                  비인지적 능력 (Soft Skills)
                </span>
                <p className="mt-2.5 text-sm text-white/85">
                  심판 없는 정직함(Self-call) · 1:1 외로움을 견디는 회복탄력성
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-left backdrop-blur-sm">
                <span className="inline-block rounded-full border border-[#d4ff3d]/60 bg-[#d4ff3d]/15 px-3 py-1 font-display text-sm font-bold text-[#d4ff3d]">
                  실시간 뇌지컬 (Meta-Cognitive)
                </span>
                <p className="mt-2.5 text-sm text-white/85">
                  움직이는 3D 체스(공간·궤적 판단) · 0.1초 만에 실행하는 주체적 결단력
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
          title="테니스가 길러주는 4가지 핵심 역량"
          lead="주체성, 회복 탄력성, 정직한 태도, 전략적 사고 — 미래의 사회적 인재상과 완벽히 궤를 같이 합니다."
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {CORE.map((c) => (
            <Reveal key={c.n} className="border-t border-line pt-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-semibold tabular-nums text-muted">{c.n}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-court-bright">
                  {c.en}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              <p className="mt-4 border-l-2 border-court pl-4 text-sm font-medium leading-relaxed text-ink/90">
                {c.take}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 독보적 강점 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Unrivaled"
          title="테니스만이 가진 독보적인 강점"
          lead="축구·수영·골프·농구와 비교했을 때, 테니스만의 Unique하고 Unrivaled한 가치."
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {UNIQUE.map((u, i) => (
            <Reveal key={u.title} delay={i * 60} className="rounded-2xl border border-line bg-card/30 p-6">
              <h3 className="font-display text-lg font-bold">{u.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{u.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 상징 자본 · 탑클래스 */}
      <Section>
        <SectionHeading
          eyebrow="Symbolic Capital"
          title="Top Class가 테니스에 빠지는 이유"
          lead="어릴 때 배우는 테니스는 상류 사회·비즈니스 인프라에 자연스럽게 진입하는 최고의 '상징 자본'과 '인적 자산'입니다."
          wideLead
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {TOPCLASS.map((t, i) => (
            <Reveal key={t.title} delay={i * 60} className="border-t border-line pt-6">
              <span className="font-display text-sm font-semibold tabular-nums text-muted">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold">{t.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{t.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-12 max-w-2xl rounded-2xl border border-court/25 bg-court/5 p-6 text-center text-sm leading-relaxed text-ink/85">
          어릴 적 테니스 경험 → 높은 수준의 에티켓 &amp; 자율적 멘탈 체화 → 고소득 전문직·리더 그룹 진입 시
          '자연스러운 문화적 공감대' 형성 → 평생의 인적 네트워크와 사회적 자산 확보.
        </Reveal>
      </Section>

      {/* 결론 — 위기를 대하는 태도 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Mindset"
          title="위기를 대하는 태도가 달라집니다"
          lead="코트 위에서 외로움을 견디고 순간의 위기를 전략으로 극복한 경험은, 훗날 거대한 위기 상황에서 엄청난 멘탈 자산이 됩니다."
          wideLead
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-base/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">일반적인 아이</p>
            <p className="mt-3 text-base leading-relaxed text-ink/85">
              시험 망침 → "난 끝났어, 공부해도 안 돼" → 장기적 좌절과 방황
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-court/30 bg-court/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-court-bright">
              테니스를 배운 아이
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/90">
              시험 망침 → "이번 포인트를 잃었을 뿐이야" → 원인 분석 → 다음 시험 준비
            </p>
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="font-display text-lg font-semibold leading-relaxed text-ink sm:text-xl">
            코트 전체의 흐름을 파악 → 상대의 위치와 템포 읽기 → 내가 할 수 있는 최선의 샷에만 집중
          </p>
          <p className="mt-4 text-sm text-muted">
            Flow(흐름)를 파악하는 여유는 삶의 페이스 조절(Pacing)로 이어집니다.
            <br />
            승패에 승복할 줄 아는 성숙함(Acceptance)과 서로를 향한 깊은 존중(Mutual Respect).
          </p>
        </Reveal>
      </Section>
    </>
  );
}
