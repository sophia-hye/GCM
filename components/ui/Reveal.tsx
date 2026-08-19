"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** 스크롤 시 부드럽게 페이드업으로 등장. 모션 비선호 시 즉시 표시. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
    // threshold 0 = 화면에 조금이라도 들어오면 등장. (뷰포트보다 훨씬 긴 콘텐츠도
    // 절대 숨겨지지 않도록 — threshold 를 높이면 긴 요소가 그 비율에 못 미쳐 계속 opacity:0 로 남는다.)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    // 안전장치: IntersectionObserver 가 어떤 이유로든 안 불려도 콘텐츠가 영구히 숨지 않도록.
    const fallback = setTimeout(() => setShown(true), 1500);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
