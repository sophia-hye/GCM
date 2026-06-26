"use client";

import { useState } from "react";
import { players } from "@/lib/site-data";
import { Section, SectionHeading, CourtLines } from "@/components/ui";

type Filter = "all" | "professional" | "college";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "professional", label: "프로 트랙" },
  { key: "college", label: "대학 트랙" },
];

export function Players() {
  const [filter, setFilter] = useState<Filter>("all");
  const list = players.filter((p) => filter === "all" || p.track === filter);

  return (
    <Section id="players">
      <SectionHeading
        eyebrow="Our Players"
        title="배출 · 소속 선수"
        lead="프로가 된 후가 아니라, 되기 전부터 브랜드를 함께 만듭니다."
      />

      <div className="mt-8 flex gap-6 border-b border-line pb-3">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`text-sm font-medium transition-colors ${
              filter === f.key ? "text-court" : "text-muted hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((player) => (
          <div key={player.name} className="group">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-court-deep">
              <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
              <span className="relative font-display text-5xl font-black text-white/40">
                {player.name.slice(0, 1)}
              </span>
              <span className="absolute right-3 top-3 rounded-md bg-base/85 px-2 py-1 font-display text-xs font-bold text-court">
                UTR {player.utr}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-base font-bold">{player.name}</p>
              <p className="text-xs text-muted">Class of {player.grad}</p>
              <p className="mt-2 text-xs font-semibold text-court">{player.result}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
