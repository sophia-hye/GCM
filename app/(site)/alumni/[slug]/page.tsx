import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui";
import { AlumniGallery } from "@/components/alumni/AlumniGallery";
import { ALUMNI, getAlumni, type Alumni } from "@/lib/alumni";
import { SITE_URL } from "@/lib/site-url";

function AlumniJsonLd({ alumni }: { alumni: Alumni }) {
  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: alumni.name,
    url: `${SITE_URL}/alumni/${alumni.slug}`,
    description: alumni.summary,
    image: `${SITE_URL}${alumni.mainImage}`,
    jobTitle: "테니스 선수",
    nationality: "KR",
    knowsAbout: ["Tennis", "테니스"],
    memberOf: { "@type": "SportsOrganization", name: "GCM 테니스 아카데미", url: SITE_URL },
  };
  if (alumni.nameEn) person.alternateName = alumni.nameEn;
  if (alumni.university) {
    person.alumniOf = { "@type": "CollegeOrUniversity", name: alumni.university };
  }
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Alumni", item: `${SITE_URL}/alumni` },
      {
        "@type": "ListItem",
        position: 3,
        name: alumni.name,
        item: `${SITE_URL}/alumni/${alumni.slug}`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([person, breadcrumb]) }}
    />
  );
}

export function generateStaticParams() {
  return ALUMNI.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const alumni = getAlumni(slug);
  if (!alumni) return { title: "Alumni | GCM 테니스 아카데미" };
  return pageMetadata({
    title: `${alumni.name} · GCM Alumni | GCM 테니스 아카데미`,
    description: alumni.summary,
    path: `/alumni/${alumni.slug}`,
  });
}

export default async function AlumniDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const alumni = getAlumni(slug);
  if (!alumni) notFound();

  return (
    <div className="pt-16">
      <AlumniJsonLd alumni={alumni} />
      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <Link
            href="/alumni"
            className="inline-flex items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-court"
          >
            <span>←</span> Alumni
          </Link>

          <header className="mt-6 border-b border-line pb-8">
            <div className="flex flex-wrap gap-1.5">
              {alumni.hashtags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-court/10 px-3 py-1 text-xs font-semibold text-court"
                >
                  #{t}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {alumni.name}
            </h1>
            <p className="mt-3 break-keep text-base text-muted">{alumni.role}</p>
          </header>

          <article className="mt-8 space-y-5">
            {alumni.body.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="!mt-12 break-keep font-display text-2xl font-bold tracking-tight"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="!my-7 break-keep border-l-4 border-court bg-court/5 px-5 py-4 text-lg font-semibold leading-relaxed text-court-deep"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === "signature") {
                return (
                  <p
                    key={i}
                    className="!mt-10 break-keep text-right text-sm font-semibold text-ink"
                  >
                    — {block.text} —
                  </p>
                );
              }
              return (
                <p key={i} className="break-keep text-base leading-loose text-ink/85">
                  {block.text}
                </p>
              );
            })}
          </article>

          <div className="mt-14">
            <h2 className="mb-5 font-display text-xl font-bold tracking-tight">Photos</h2>
            <AlumniGallery images={alumni.gallery} name={alumni.name} />
          </div>
        </Container>
      </section>
    </div>
  );
}
