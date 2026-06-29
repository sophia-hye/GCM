"use client";

import { useEffect, useRef, useState } from "react";

const NBSP = " ";

/**
 * 헤딩을 한 글자씩 스태거로 등장시킨다(스크롤 진입 시).
 * 글자별 transform 모션만 사용 → 상위 컨테이너의 opacity 페이드와 충돌하지 않음.
 * 접근성: 전체 텍스트는 aria-label, 각 글자는 aria-hidden.
 */
export function SplitText({
  text,
  className = "",
  stagger = 45,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const chars = Array.from(text);

  return (
    <span ref={ref} aria-label={text} className={className}>
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          aria-hidden
          className="inline-block transition-transform duration-500 ease-out will-change-transform"
          style={{
            transitionDelay: `${i * stagger}ms`,
            transform: shown ? "translateY(0)" : "translateY(0.55em)",
          }}
        >
          {ch === " " ? NBSP : ch}
        </span>
      ))}
    </span>
  );
}
