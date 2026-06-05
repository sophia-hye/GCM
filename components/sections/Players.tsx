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

      <div className="mt-8 flex gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === f.key
                ? "border-lime bg-lime/10 text-lime"
                : "border-line text-muted hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((player) => (
          <div
            key={player.name}
            className="group overflow-hidden rounded-2xl border border-line bg-card"
          >
            <div className="relative flex h-48 items-center justify-center bg-court-gradient">
              <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
              <span className="relative font-display text-5xl font-black text-white/40">
                {player.name.slice(0, 1)}
              </span>
              <span className="absolute right-3 top-3 rounded-md bg-base/70 px-2 py-1 font-display text-xs font-bold text-lime">
                UTR {player.utr}
              </span>
            </div>
            <div className="p-5">
              <p className="text-base font-bold">{player.name}</p>
              <p className="text-xs text-muted">Class of {player.grad}</p>
              <p className="mt-3 inline-block rounded-md bg-court/15 px-2 py-1 text-xs text-court-bright">
                {player.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
