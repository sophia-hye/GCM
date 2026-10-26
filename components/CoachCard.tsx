"use client";

import Image from "next/image";
import { useState } from "react";
import { CourtLines } from "@/components/ui";

type Member = {
  name: string;
  role: string;
  nameEn?: string;
  roleEn?: string;
  bio: string;
  image: string;
  achievements: readonly string[];
};

export function CoachCard({
  member,
  bioLabel = "약력 보기",
  bioCloseLabel = "약력 접기",
}: {
  member: Member;
  bioLabel?: string;
  bioCloseLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const hasBio = member.achievements.length > 0;
  // 라벨 끝의 화살표(→/↑/↓)는 셰브론 아이콘으로 대체하므로 제거
  const label = (open ? bioCloseLabel : bioLabel).replace(/\s*[→↑↓]\s*$/, "");

  return (
    <div className="group">
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
        {member.nameEn ? <p className="mt-1 text-xs text-muted">{member.nameEn}</p> : null}
        {member.roleEn ? (
          <p className="text-xs font-semibold text-ink/70">{member.roleEn}</p>
        ) : null}
        <p className="mt-2 text-sm leading-relaxed text-muted">{member.bio}</p>

        {hasBio ? (
          <>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-court transition-colors hover:text-court-deep"
            >
              {label}
              <svg
                viewBox="0 0 24 24"
                className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* 아코디언: grid-rows 0fr→1fr 로 부드럽게 펼쳐짐 */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="min-h-0 space-y-2 overflow-hidden pt-3 text-sm leading-relaxed text-ink/90">
                {member.achievements.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-1 shrink-0 text-lime">·</span>
                    <span className="break-keep">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
