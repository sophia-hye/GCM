"use client";

import Image from "next/image";
import { useState } from "react";
import { CourtLines } from "@/components/ui";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
  achievements: readonly string[];
};

export function CoachCard({
  member,
  bioLabel = "약력 보기 →",
}: {
  member: Member;
  bioLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const hasBio = member.achievements.length > 0;

  return (
    <>
      <div
        onClick={hasBio ? () => setOpen(true) : undefined}
        role={hasBio ? "button" : undefined}
        tabIndex={hasBio ? 0 : undefined}
        onKeyDown={hasBio ? (e) => (e.key === "Enter" || e.key === " ") && setOpen(true) : undefined}
        className={`group ${hasBio ? "cursor-pointer" : ""}`}
      >
        <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-court-deep">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <>
              <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
              <span className="relative font-display text-5xl font-black text-white/40">
                {member.name.slice(0, 1)}
              </span>
            </>
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-court">{member.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{member.bio}</p>
          {hasBio ? (
            <span className="mt-3 inline-block text-xs font-semibold text-court">
              {bioLabel}
            </span>
          ) : null}
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-auto rounded-2xl border border-line bg-card p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-extrabold">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-court-bright">{member.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="닫기"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
              >
                ✕
              </button>
            </div>

            <ul className="mt-6 space-y-2.5">
              {member.achievements.map((a) => (
                <li key={a} className="flex gap-2 text-sm leading-relaxed text-ink/90">
                  <span className="mt-1 text-lime">·</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
