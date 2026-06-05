export const metadata = { title: "내 전략 보고서 | GCM" };

export default function StrategyPage() {
  const phases = [
    "Reality Check — 왜 지금 미국인가",
    "Growth Strategy — UTR 로드맵",
    "ROI — 비용이 아닌 투자",
    "Total Care System — 5대 관리",
    "Safety Net — 진로 2-Track",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">내 전략 보고서</h1>
        <p className="mt-1 text-sm text-muted">
          GCM과 COV가 함께 설계하는 선수별 글로벌 전략 보고서입니다.
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
          준비되면 무료 진로 상담을 신청해 주세요. (예약 메뉴)
        </p>
      </div>
    </div>
  );
}
