export const metadata = { title: "내 전략 보고서 | GCM" };

export default function StrategyPage() {
  const phases = [
    "현재 진단 — UTR · 기술 · 체력 평가",
    "Growth Strategy — UTR 성장 로드맵",
    "기술 · 전술 발전 계획",
    "Total Care System — 5대 관리",
    "Career Pathways — 프로 · 대학 트랙",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">내 전략 보고서</h1>
        <p className="mt-1 text-sm text-muted">
          GCM이 설계하는 선수별 성장 전략 보고서입니다.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-card/40 p-6">
        <p className="text-sm text-muted">
          상담 및 진단이 완료되면, 아래 항목으로 구성된 개인 전략 보고서가 이곳에서
          제공됩니다.
        </p>
        <ul className="mt-4 space-y-2">
          {phases.map((p, i) => (
            <li key={p} className="flex items-center gap-3 text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-court/20 text-xs font-bold text-court-bright">
                {i + 1}
              </span>
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-court-bright">
          준비되면 진로 상담을 신청해 주세요. (예약 메뉴)
        </p>
      </div>
    </div>
  );
}
