import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";

export type GalleryPost = {
  id: string;
  title: string;
  body: string | null;
  images: string[];
  created_at: string;
};

export function Gallery({ posts }: { posts: GalleryPost[] }) {
  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="갤러리"
        lead="GCM의 트레이닝과 현장을 사진으로 만나보세요."
      />

      {posts.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="text-sm text-muted">
            갤러리 사진을 준비 중입니다. 곧 공개될 예정입니다.
          </p>
        </div>
      ) : (
        <div className="mt-12 space-y-16">
          {posts.map((post) => (
            <article key={post.id}>
              <h3 className="font-display text-xl font-bold sm:text-2xl">{post.title}</h3>
              {post.body ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {post.body}
                </p>
              ) : null}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {post.images.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-square overflow-hidden rounded-xl bg-court-deep"
                  >
                    <Image
                      src={src}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
