import Image from "next/image";
import { Section } from "@/components/ui";

/**
 * GCM Story 하단 미디어 카드 — 사진을 원본 비율 그대로 노출(크롭 없음).
 * 가로·세로 사진이 섞여 있어 CSS columns 메이슨리로 배치한다.
 * (영상은 원본 화질 확보 전까지 임시 제거)
 */
const IMAGES = [
  { src: "/img/gcm-story/1.webp", w: 1600, h: 1067 },
  { src: "/img/gcm-story/2.webp", w: 1200, h: 1600 },
  { src: "/img/gcm-story/3.webp", w: 1200, h: 1600 },
];

export function GcmStoryMedia() {
  return (
    <Section className="pt-0">
      <div className="columns-1 gap-4 sm:columns-2 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {IMAGES.map((img) => (
          <div
            key={img.src}
            className="overflow-hidden rounded-2xl border border-line bg-court-deep"
          >
            <Image
              src={img.src}
              alt="GCM"
              width={img.w}
              height={img.h}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
