"use client";

import { useState } from "react";
import type { ConsultingExtra } from "@/lib/consulting-content";
import { Section, SectionHeading } from "@/components/ui";

/** "학부모님의 현실적인 고민에 답합니다" — FAQ 아코디언 */
export function ConsultingFaq({ data }: { data: ConsultingExtra["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="consulting-faq" tone="muted">
      <SectionHeading eyebrow="FAQ" title={data.title} lead={data.lead} center />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {data.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-line bg-base/70"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="flex items-start gap-2 font-bold text-ink">
                  <span className="text-court-bright">Q.</span>
                  {item.q}
                </span>
                <span
                  className={`shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ⌄
                </span>
              </button>

              {isOpen ? (
                <div className="border-t border-line px-6 py-5">
                  <p className="whitespace-pre-line text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>

                  {item.table ? (
                    <div className="mt-5 overflow-x-auto">
                      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="bg-card/50 text-ink">
                            {item.table.head.map((h) => (
                              <th key={h} className="px-4 py-3 font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.table.rows.map((row, ri) => (
                            <tr key={ri} className="border-t border-line">
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className={`px-4 py-3 align-top ${
                                    ci === 0 ? "font-semibold text-ink" : "text-muted"
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
