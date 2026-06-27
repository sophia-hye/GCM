"use client";

import Image from "next/image";
import { useState } from "react";
import { players, playerStories } from "@/lib/site-data";
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

      {/* 선수 스토리 — 프로 및 국내외 대학 소속 선수의 사진과 경력 */}
      <div className="mt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-court">
          Player Stories
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">선수 스토리</h3>
        <p className="mt-2 max-w-xl text-sm text-muted">
          프로와 국내외 대학 무대에서 뛰고 있는 GCM 선수들의 경력입니다.
        </p>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {playerStories.map((story) => (
            <article key={story.name} className="group">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-court-deep">
                {story.image ? (
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <>
                    <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
                    <span className="relative font-display text-4xl font-black text-white/40">
                      {story.name.slice(0, 1)}
                    </span>
                  </>
                )}
                <span className="absolute left-3 top-3 rounded-md bg-base/85 px-2 py-1 text-xs font-bold text-court">
                  {story.affiliation}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-base font-bold">{story.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{story.career}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
