import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { formatEventDate, type SeouliteEvent } from "@/lib/events";

async function getEvent(slug: string): Promise<SeouliteEvent | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_events")
    .select("id, slug, title, location, event_date, body, images, sort_order, published")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  return (data as SeouliteEvent) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ev = await getEvent(slug);
  if (!ev) return { title: "GCM Festival at Hannam | GCM 테니스 아카데미" };
  return pageMetadata({
    title: `${ev.title} | GCM Festival at Hannam`,
    description: ev.body?.slice(0, 100) || "GCM Festival at Hannam 모임 후기.",
    path: `/events/gcm-festival-at-hannam/${ev.slug}`,
  });
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ev = await getEvent(slug);
  if (!ev) notFound();

  const locale = await getLocale();
  const ko = locale === "ko";
  const meta = [formatEventDate(ev.event_date), ev.location].filter(Boolean).join(" · ");

  return (
    <div className="pt-16">
      <Container className="py-16 sm:py-24">
        <Link href="/events/gcm-festival-at-hannam" className="text-sm font-semibold text-muted hover:text-court">
          ← {ko ? "GCM Festival at Hannam" : "Back to GCM Festival at Hannam"}
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-court">GCM Festival at Hannam</p>
          <h1 className="mt-3 break-keep font-display text-3xl font-black leading-[1.15] sm:text-4xl">
            {ev.title}
          </h1>
          {meta ? <p className="mt-3 text-sm text-muted">{meta}</p> : null}
        </div>

        {ev.images[0] ? (
          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-court-deep">
            <Image
              src={ev.images[0]}
              alt={ev.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>
        ) : null}

        {ev.body ? (
          <div className="mt-10 max-w-3xl">
            <p className="whitespace-pre-line break-keep leading-relaxed text-ink/85">{ev.body}</p>
          </div>
        ) : null}

        {ev.images.length > 1 ? (
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {ev.images.slice(1).map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg bg-court-deep">
                <Image
                  src={src}
                  alt={`${ev.title} ${i + 2}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
}
