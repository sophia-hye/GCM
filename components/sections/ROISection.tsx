import { roiRows } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function ROISection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Return On Investment"
        title={
          <>
            투자 수익 분석: <span className="text-court-gradient">&apos;비용&apos;이 아닌 &apos;투자&apos;</span>
          </>
        }
        lead="대학 4년의 투자는 실업팀 입단 즉시 '계약금'만으로도 상당 부분 회수 가능합니다."
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-line">
        <div className="grid grid-cols-4 bg-court-deep/60 px-5 py-4 text-xs font-bold uppercase tracking-wide text-court-bright sm:text-sm">
          <span>UTR 레벨</span>
          <span>선수 가치</span>
          <span className="text-right sm:text-left">예상 연봉</span>
          <span className="text-right">예상 계약금</span>
        </div>
        {roiRows.map((row) => (
          <div
            key={row.utr}
            className={`grid grid-cols-4 items-center px-5 py-5 text-sm ${
              row.highlight ? "bg-lime/5" : "bg-card/40"
            } border-t border-line`}
          >
            <span className={`font-display font-bold ${row.highlight ? "text-lime" : "text-ink"}`}>
              {row.utr}
            </span>
            <span className="text-muted">{row.position}</span>
            <span className="text-right font-semibold sm:text-left">{row.salary}</span>
            <span className={`text-right font-bold ${row.highlight ? "text-lime" : "text-court-bright"}`}>
              {row.signing}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">
        * 위 수치는 현재 국내 실업 테니스팀 평균 계약 가이드라인을 바탕으로 산정된 예상치입니다.
      </p>
    </Section>
  );
}
