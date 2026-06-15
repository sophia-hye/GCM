import { utrRoadmap } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

const W = 600;
const H = 240;
const MIN = 10;
const MAX = 13.6;

function points() {
  const data = utrRoadmap.curve;
  return data.map((d, i) => {
    const x = (i / (data.length - 1)) * (W - 40) + 20;
    const y = H - ((d.y - MIN) / (MAX - MIN)) * (H - 30) - 15;
    return { ...d, x, y };
  });
}

export function UTRRoadmap() {
  const pts = points();
  const line = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `20,${H} ${line} ${W - 20},${H}`;

  return (
    <Section id="premium" className="bg-card/30">
      <SectionHeading
        eyebrow="Growth Strategy"
        title={utrRoadmap.title}
        lead="데이터로 증명하는 성장 경로. 현재 위치에서 대학 무대, 그리고 프로/실업까지."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {utrRoadmap.milestones.map((m) => (
          <div
            key={m.stage}
            className={`rounded-2xl border p-6 ${
              m.highlight
                ? "border-lime/60 bg-lime/5"
                : "border-line bg-card"
            }`}
          >
            <p className="text-sm text-muted">{m.stage}</p>
            <p
              className={`mt-2 font-display text-3xl font-extrabold ${
                m.highlight ? "text-lime" : "text-ink"
              }`}
            >
              UTR {m.utr}
            </p>
            <p className="mt-2 text-xs text-court-bright">{m.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-line bg-base p-6">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="UTR 성장 곡선">
            <defs>
              <linearGradient id="utrFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3fa7e0" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3fa7e0" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[11, 12, 13].map((g) => {
              const y = H - ((g - MIN) / (MAX - MIN)) * (H - 30) - 15;
              return (
                <g key={g}>
                  <line x1="20" y1={y} x2={W - 20} y2={y} stroke="#20405f" strokeDasharray="4 4" />
                  <text x="0" y={y + 4} fill="#94aec9" fontSize="11">
                    {g}
                  </text>
                </g>
              );
            })}
            <polygon points={area} fill="url(#utrFill)" />
            <polyline
              points={line}
              fill="none"
              stroke="#c9f227"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {pts.map((p) => (
              <g key={p.x}>
                <circle cx={p.x} cy={p.y} r="5" fill="#c9f227" />
                <text x={p.x} y={H - 2} fill="#94aec9" fontSize="10" textAnchor="middle">
                  {p.x}
                </text>
              </g>
            ))}
          </svg>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
            {utrRoadmap.curve.map((c) => (
              <span key={c.x}>{c.x}</span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
            핵심 체크포인트
          </p>
          {utrRoadmap.checkpoints.map((c) => (
            <div key={c.title} className="rounded-xl border border-line bg-card p-5">
              <h4 className="text-sm font-bold text-ink">{c.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
