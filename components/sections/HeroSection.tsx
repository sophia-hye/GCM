"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-data";
import { Button, Container, CourtLines } from "@/components/ui";

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-court-gradient"
    >
      {/* 코트 라인 장식 */}
      <CourtLines className="pointer-events-none absolute -right-16 top-0 h-full w-[55%] text-white/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />
      <div className="absolute inset-0 bg-base/30" />

      <Container className="relative z-10 pt-24">
        <div key={index} className="max-w-3xl animate-fade-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-lime">
            {slide.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            {slide.headline.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/80">{slide.sub}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact" variant="lime">
              무료 진로 상담
            </Button>
            <Button href="#players" variant="outline">
              선수 성과 보기
            </Button>
          </div>

          <div className="mt-10 flex gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                aria-label={`슬라이드 ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-lime" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
