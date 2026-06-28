import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { getUI } from "@/lib/site-content";
import type { Locale } from "@/lib/i18n";

export type GalleryPost = {
  id: string;
  title: string;
  body: string | null;
  images: string[];
  created_at: string;
};

export function Gallery({ posts, locale = "ko" }: { posts: GalleryPost[]; locale?: Locale }) {
  const ui = getUI(locale);
  return (
    <Section id="gallery">
      <SectionHeading eyebrow="Gallery" title={ui.galleryTitle} lead={ui.galleryLead} />

      {posts.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="text-sm text-muted">{ui.galleryComing}</p>
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
