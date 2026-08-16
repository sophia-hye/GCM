import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading } from "@/components/ui";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { formatEventDate, type SeouliteEvent } from "@/lib/events";

export const metadata = pageMetadata({
  title: "Seoulite Net'work | GCM 테니스 아카데미",
  description: "한남동에서 열리는 GCM Seoulite Net'work 월간 모임. 그날의 순간들을 후기로 만나보세요.",
  path: "/events/seoulite",
});

export default async function SeoulitePage() {
  const locale = await getLocale();
  const ko = locale === "ko";

  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_events")
    .select("id, slug, title, location, event_date, body, images, sort_order, published")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const events = (data ?? []) as SeouliteEvent[];

  if (events.length === 0) {
    return (
      <div className="pt-16">
        <ComingSoon
          eyebrow="Social Events"
          title="Seoulite Net'work"
          desc="한남동에서 열리는 월간 모임 후기를 준비하고 있습니다. 곧 만나보실 수 있습니다."
        />
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Social Events"
          title="Seoulite Net'work"
          lead={
            ko
              ? "한남동에서 열리는 GCM의 월간 모임. 그날의 순간들을 담았습니다."
              : "GCM's monthly gathering in Hannam-dong — moments from each meetup."
          }
          wideLead
        />
        <div className="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {events.map((ev) => (
            <Link
              key={ev.id}
              href={`/events/seoulite/${ev.slug}`}
              className="group relative aspect-square overflow-hidden rounded-lg bg-court-deep"
            >
              {ev.images[0] ? (
                <Image
                  src={ev.images[0]}
                  alt={ev.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              ) : null}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="line-clamp-2 text-sm font-bold text-white">{ev.title}</p>
                {ev.event_date ? (
                  <p className="mt-0.5 text-xs text-white/80">{formatEventDate(ev.event_date)}</p>
                ) : null}
              </div>
              {ev.images.length > 1 ? (
                <span className="absolute right-2 top-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                  {ev.images.length}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
