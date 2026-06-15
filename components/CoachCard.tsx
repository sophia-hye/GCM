"use client";

import Image from "next/image";
import { useState } from "react";
import { team } from "@/lib/site-data";
import { CourtLines } from "@/components/ui";

type Member = (typeof team)[number];

export function CoachCard({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);
  const hasBio = member.achievements.length > 0;

  return (
    <>
      <div
        onClick={hasBio ? () => setOpen(true) : undefined}
        role={hasBio ? "button" : undefined}
        tabIndex={hasBio ? 0 : undefined}
        onKeyDown={hasBio ? (e) => (e.key === "Enter" || e.key === " ") && setOpen(true) : undefined}
        className={`overflow-hidden rounded-2xl border border-line bg-card ${
          hasBio ? "cursor-pointer transition-colors hover:border-court-bright" : ""
        }`}
      >
        <div className="relative flex h-56 items-center justify-center overflow-hidden bg-court-gradient">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-top"
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
        <div className="p-6">
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-court-bright">{member.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
          {hasBio ? (
            <span className="mt-4 inline-block text-xs font-semibold text-lime">
              약력 보기 →
            </span>
          ) : null}
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-base/80 p-4 backdrop-blur-sm"
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
