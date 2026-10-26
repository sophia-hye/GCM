import Image from "next/image";
import { Section } from "@/components/ui";

/**
 * GCM Story 하단 미디어 카드 — 짧은 영상 3개(자동재생·음소거·반복)와 사진 1개를
 * 카드 그리드로 노출. 영상은 ambient 클립이라 컨트롤 없이 재생된다.
 */
const VIDEOS = ["/video/1.mp4", "/video/2.mp4", "/video/3.mp4"];
const IMAGE = "/img/gcm-story/1.webp";

export function GcmStoryMedia() {
  return (
    <Section className="pt-0">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {VIDEOS.map((src) => (
          <div
            key={src}
            className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-court-deep"
          >
            <video
              className="h-full w-full object-cover"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        ))}
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-court-deep">
          <Image
            src={IMAGE}
            alt="GCM"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
