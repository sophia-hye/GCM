import { AlumniGallery } from "@/components/alumni/AlumniGallery";
import { SITE_URL } from "@/lib/site-url";
import type { Alumni } from "@/lib/alumni";

function AlumniJsonLd({ alumni }: { alumni: Alumni }) {
  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: alumni.name,
    url: `${SITE_URL}/alumni#${alumni.slug}`,
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
  if (alumni.articles.length) {
    person.subjectOf = alumni.articles.map((a) => ({
      "@type": "NewsArticle",
      headline: a.title,
      url: a.url,
      publisher: { "@type": "Organization", name: a.source },
    }));
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}

/** Alumni 한 명의 전체 스토리 — 헤더 + 편지 본문 + 관련 기사 + 사진 그리드 */
export function AlumniStory({ alumni }: { alumni: Alumni }) {
  return (
    <article id={alumni.slug} className="mx-auto max-w-3xl">
      <AlumniJsonLd alumni={alumni} />

      <header className="border-b border-line pb-8">
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
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {alumni.name}
        </h2>
        <p className="mt-3 break-keep text-base text-muted">{alumni.role}</p>
      </header>

      <div className="mt-8 space-y-5">
        {alumni.body.map((block, i) => {
          if (block.type === "heading") {
            return (
              <h3
                key={i}
                className="!mt-12 break-keep font-display text-2xl font-bold tracking-tight"
              >
                {block.text}
              </h3>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote
                key={i}
                className="!my-7 break-keep border-l-4 border-court pl-5 font-display text-xl font-semibold leading-relaxed text-ink"
              >
                {block.text}
              </blockquote>
            );
          }
          if (block.type === "highlight") {
            return (
              <p
                key={i}
                className="!my-6 break-keep rounded-xl border border-court/20 bg-court/5 px-5 py-4 text-base font-semibold leading-relaxed text-court-deep"
              >
                {block.text}
              </p>
            );
          }
          if (block.type === "bold") {
            return (
              <p key={i} className="break-keep text-base font-bold leading-loose text-ink">
                {block.text}
              </p>
            );
          }
          if (block.type === "point") {
            return (
              <p
                key={i}
                className="break-keep text-lg font-bold leading-relaxed text-court"
              >
                {block.text}
              </p>
            );
          }
          if (block.type === "box") {
            return (
              <p
                key={i}
                className="!my-7 break-keep rounded-lg border-2 border-court px-5 py-4 text-lg font-bold leading-relaxed text-court-deep"
              >
                {block.text}
              </p>
            );
          }
          if (block.type === "signature") {
            return (
              <p key={i} className="!mt-10 break-keep text-right text-sm font-semibold text-ink">
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
      </div>

      {alumni.articles.length ? (
        <section className="mt-14">
          <h3 className="mb-5 font-display text-xl font-bold tracking-tight">관련 기사</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {alumni.articles.map((a) => (
              <a
                key={a.url}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-line bg-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-court/50 hover:shadow-md"
              >
                <div>
                  <span className="inline-block rounded-full bg-court/10 px-2.5 py-0.5 text-xs font-semibold text-court">
                    {a.source}
                  </span>
                  <p className="mt-3 break-keep text-sm font-semibold leading-relaxed text-ink">
                    {a.title}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-court transition-colors group-hover:text-court-deep">
                  기사 보기
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-14">
        <h3 className="mb-5 font-display text-xl font-bold tracking-tight">Photos</h3>
        <AlumniGallery images={alumni.gallery} name={alumni.name} />
      </section>
    </article>
  );
}
