"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faq";

export function FaqAccordion({ items }: { items: Pick<Faq, "id" | "question" | "answer">[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-2xl divide-y divide-line border-y border-line">
      {items.map((f) => {
        const open = openId === f.id;
        return (
          <div key={f.id}>
            <button
              type="button"
              onClick={() => setOpenId(open ? null : f.id)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base font-bold text-ink">{f.question}</span>
              <span
                className={`shrink-0 text-court transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted">{f.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
