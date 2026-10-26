import Image from "next/image";
import { Section } from "@/components/ui";

/**
 * GCM Story 하단 미디어 카드 — 사진을 카드 그리드로 노출.
 * (영상은 원본 화질 확보 전까지 임시 제거)
 */
const IMAGES = ["/img/gcm-story/1.webp", "/img/gcm-story/2.webp", "/img/gcm-story/3.webp"];

export function GcmStoryMedia() {
  return (
    <Section className="pt-0">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {IMAGES.map((src) => (
          <div
            key={src}
            className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-court-deep"
          >
            <Image
              src={src}
              alt="GCM"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
