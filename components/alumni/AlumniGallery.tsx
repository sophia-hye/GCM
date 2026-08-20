"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * 인스타그램 피드형 정사각 그리드. 사진 클릭 시 크게 보기 라이트박스 모달.
 * 그리드 자체는 JS 없이도 렌더/표시되며, 확대 모달만 클라이언트 상호작용으로 동작한다.
 */
export function AlumniGallery({ images, name }: { images: string[]; name: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(1);
      else if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    // 모달 열림 동안 배경 스크롤 잠금
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close, show]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-lg bg-court-deep"
              aria-label={`${name} 사진 ${i + 1} 크게 보기`}
            >
              <Image
                src={src}
                alt={`${name} ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${name} 사진 크게 보기`}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="닫기"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
          >
            &times;
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  show(-1);
                }}
                aria-label="이전 사진"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:left-6"
              >
                &#8249;
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  show(1);
                }}
                aria-label="다음 사진"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:right-6"
              >
                &#8250;
              </button>
            </>
          ) : null}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
          >
            <Image
              src={images[openIndex]}
              alt={`${name} ${openIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-medium text-white/80">
            {openIndex + 1} / {images.length}
          </span>
        </div>
      ) : null}
    </>
  );
}
