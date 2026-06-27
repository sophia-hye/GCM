import Image from "next/image";
import { gallery } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function Gallery() {
  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="갤러리"
        lead="GCM의 트레이닝과 현장을 사진으로 만나보세요."
      />
      {gallery.length > 0 ? (
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((g) => (
            <div
              key={g.src}
              className="relative aspect-square overflow-hidden rounded-xl bg-court-deep"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="text-sm text-muted">
            갤러리 사진을 준비 중입니다. 곧 공개될 예정입니다.
          </p>
        </div>
      )}
    </Section>
  );
}
