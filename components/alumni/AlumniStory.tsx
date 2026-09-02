import Image from "next/image";
import { AlumniGallery } from "@/components/alumni/AlumniGallery";
import { SITE_URL } from "@/lib/site-url";
import { localizeAlumni, type Alumni } from "@/lib/alumni";

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
export function AlumniStory({ alumni, ko }: { alumni: Alumni; ko: boolean }) {
  const a = localizeAlumni(alumni, ko);
  return (
    <article id={alumni.slug} className="mx-auto max-w-3xl">
      <AlumniJsonLd alumni={alumni} />

      {/* 히어로 — 대표 사진을 배경으로, 이름/소속을 그 위에 오버레이 */}
      <header className="relative overflow-hidden rounded-2xl bg-court-deep">
        <div className="relative aspect-[4/5] sm:aspect-[16/12]">
          <Image
            src={a.mainImage}
            alt={a.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="flex flex-wrap gap-1.5">
            {a.hashtags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                #{t}
              </span>
            ))}
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white drop-shadow sm:text-5xl">
            {a.name}
          </h2>
          <p className="mt-2 break-keep text-sm text-white/85 sm:text-base">{a.role}</p>
          {a.birth ? <p className="mt-1 text-xs text-white/60">{a.birth}</p> : null}
        </div>
      </header>

      <div className="mt-8 space-y-5">
        {a.body.map((block, i) => {
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
          if (block.type === "list") {
            return (
              <ul key={i} className="!my-6 space-y-2.5">
                {block.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 break-keep text-base leading-relaxed text-ink/85"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-court" />
                    <span className="whitespace-pre-line">{it}</span>
                  </li>
                ))}
              </ul>
            );
          }
          if (block.type === "coachnote") {
            return (
              <div
                key={i}
                className="!my-8 rounded-2xl border-l-2 border-court bg-court/5 px-6 py-5"
              >
                <p className="text-sm font-bold text-court-bright">Coach&apos;s Note</p>
                <p className="mt-2 whitespace-pre-line break-keep leading-relaxed text-ink/85">
                  {block.text}
                </p>
              </div>
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

      {a.articles.length ? (
        <section className="mt-14">
          <h3 className="mb-5 font-display text-xl font-bold tracking-tight">
            {ko ? "관련 기사" : "In the News"}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {a.articles.map((ar) => (
              <a
                key={ar.url}
                href={ar.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card/40 transition-all hover:-translate-y-0.5 hover:border-court/50 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-court-deep">
                  <Image
                    src={ar.image}
                    alt={ar.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                    {ar.source}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <p className="break-keep text-sm font-semibold leading-relaxed text-ink">
                    {ar.title}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-court transition-colors group-hover:text-court-deep">
                    {ko ? "기사 보기" : "Read article"}
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {a.gallery.length ? (
        <section className="mt-14">
          <h3 className="mb-5 font-display text-xl font-bold tracking-tight">Photos</h3>
          <AlumniGallery images={a.gallery} name={a.name} ko={ko} />
        </section>
      ) : null}
    </article>
  );
}
