import { Section, SectionHeading } from "@/components/ui";

const STEPS = [
  { title: "온라인 신청", body: "기본 정보 · 테니스 프로필 · 목표를 작성해 온라인으로 제출합니다." },
  { title: "서류 검토", body: "제출 내용과 경기 기록 · ITF/국내 랭킹을 종합적으로 검토합니다." },
  { title: "실기 평가 · 면담", body: "코칭 세션과 면담으로 태도 · 투지 · 경기력과 코칭 수용성을 확인합니다." },
  { title: "선발 & 통보", body: "종합 평가 후 장학 대상을 선발하고 개별적으로 결과를 안내합니다." },
  { title: "장학 등록 & 로드맵", body: "발달 단계별 관리와 UTR · 랭킹 성장 로드맵을 함께 시작합니다." },
];

/** 장학 신청 단계 과정 */
export function ScholarshipSteps() {
  return (
    <Section id="scholarship-steps">
      <SectionHeading
        eyebrow="How to apply"
        title="장학 신청 단계"
        lead="신청부터 선발, 성장 로드맵까지 — GCM 장학은 이렇게 진행됩니다."
        wideLead
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line bg-card/40 p-6">
            <span className="font-display text-2xl font-black tabular-nums text-court/40">
              0{i + 1}
            </span>
            <h3 className="mt-2 break-keep font-display text-base font-bold text-ink">{s.title}</h3>
            <p className="mt-2 break-keep text-sm leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
