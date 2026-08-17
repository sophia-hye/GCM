import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading, Container } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { formatEventDate, type SeouliteEvent } from "@/lib/events";

const FESTIVAL_NAME = "GCM Festival at Hannam";

export const metadata = pageMetadata({
  title: `${FESTIVAL_NAME} | GCM 테니스 아카데미`,
  description:
    "TENNIS. MUSIC. LIGHT. 한남에서 열리는 GCM Festival at Hannam — 낮과 밤을 잇는 데이&나이트 테니스 축제. 2026.8.29 HANNAM, SEOUL.",
  path: "/events/gcm-festival-at-hannam",
});

export default async function GcmFestivalPage() {
  const ko = (await getLocale()) === "ko";

  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_events")
    .select("id, slug, title, location, event_date, body, images, sort_order, published")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const events = (data ?? []) as SeouliteEvent[];

  return (
    <div className="pt-16">
      {/* 축제 히어로 (Glow Night) */}
      <section className="relative overflow-hidden bg-[#07070e] text-white">
        {/* 모바일: 세로 이미지 / 데스크탑: 가로 이미지 */}
        <Image
          src="/img/festival-glow-vertical.png"
          alt={FESTIVAL_NAME}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50 sm:hidden"
        />
        <Image
          src="/img/festival-glow.png"
          alt={FESTIVAL_NAME}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover opacity-50 sm:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070e]/85 via-[#0b0b1a]/80 to-[#07070e]/95" />
        <Container className="relative py-24 text-center sm:py-36">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-[#d4ff3d]">
            Social Events
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-black leading-[1.05] sm:text-6xl">
            GCM Festival <span className="text-[#d4ff3d]">at Hannam</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm uppercase tracking-[0.15em] text-white/70 sm:text-base">
            A network built around the net.
            <br />
            Different games. One connected culture.
          </p>

          <p className="mt-8 font-display text-lg font-bold text-[#d4ff3d] sm:text-xl">
            TENNIS. MUSIC. LIGHT.
            <br />
            ONE COURT. ONE CULTURE.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full border border-[#d4ff3d]/50 px-4 py-1.5 font-bold text-[#d4ff3d]">
              2026. 8. 29
            </span>
            <span className="rounded-full border border-white/25 px-4 py-1.5 text-white/85">
              HANNAM, SEOUL
            </span>
            <span className="rounded-full border border-white/25 px-4 py-1.5 uppercase tracking-widest text-white/70">
              Coming Soon
            </span>
          </div>

          <p className="mx-auto mt-10 max-w-md break-keep text-sm leading-relaxed text-white/70">
            {ko
              ? "낮과 밤을 잇는 데이 & 나이트 테니스 축제. 커뮤니티 · 뮤직 · 글로우 테니스. 키즈부터 시니어까지, 모두가 하나의 코트에서."
              : "A day & night tennis event. Community · Music · Glow Tennis. From kids to seniors — everyone on one court."}
          </p>
          <p className="mt-6 font-display text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            #GCMFESTIVAL
          </p>
        </Container>
      </section>

      {/* 낮 & 밤 — 하나의 코트 */}
      <section className="bg-[#07070e] pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {[
              {
                lg: "/img/festival-day.png",
                sm: "/img/festival-day-vertical.png",
                label: "Day Tennis",
                sub: ko ? "낮의 코트" : "By day",
              },
              {
                lg: "/img/festival-glow.png",
                sm: "/img/festival-glow-vertical.png",
                label: "Glow Night",
                sub: ko ? "밤의 코트" : "By night",
              },
            ].map((v) => (
              <figure
                key={v.label}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[4/3]"
              >
                {/* 모바일: 세로 이미지 / 데스크탑: 가로 이미지 */}
                <Image
                  src={v.sm}
                  alt={v.label}
                  fill
                  sizes="100vw"
                  className="object-cover sm:hidden"
                />
                <Image
                  src={v.lg}
                  alt={v.label}
                  fill
                  sizes="50vw"
                  className="hidden object-cover sm:block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-5">
                  <p className="font-display text-xl font-black text-white">{v.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#d4ff3d]">{v.sub}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* 등록된 모임/현장 이미지 피드 */}
      {events.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Moments"
            title={ko ? "현장의 순간들" : "Moments from the festival"}
            lead={
              ko
                ? `${FESTIVAL_NAME}의 낮과 밤, 그날의 순간들을 담았습니다.`
                : "Day and night at the GCM Festival — moments we captured."
            }
            wideLead
          />
          <div className="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {events.map((ev) => (
              <Link
                key={ev.id}
                href={`/events/gcm-festival-at-hannam/${ev.slug}`}
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
      ) : null}
    </div>
  );
}
