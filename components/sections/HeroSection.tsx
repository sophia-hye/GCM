"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-data";
import { Button, Container } from "@/components/ui";

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
      {/* 메인 배경 사진 */}
      <Image
        src="/img/main-clay.png"
        alt="GCM 테니스 트레이닝"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* 가독성 오버레이: 배경 아래쪽에만 적용해 이미지를 또렷하게 유지 */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-base via-base/45 to-transparent" />

      <Container className="relative z-10 pt-24">
        <div key={index} className="max-w-3xl animate-fade-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-white/75">
            {slide.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl leading-[1.1] sm:text-6xl lg:text-7xl">
            <span className="font-display font-black uppercase text-white">{slide.headline}</span>{" "}
            <span className="font-accent font-semibold italic text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              {slide.accent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">{slide.sub}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/consulting" variant="lime">
              무료 진로 상담
            </Button>
            <Button href="#players" variant="outline-light">
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
                  i === index ? "w-8 bg-white" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
