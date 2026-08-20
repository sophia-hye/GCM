import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui";
import { PlayerJsonLd } from "@/components/PlayerJsonLd";
import { TRACK_LABEL } from "@/lib/players";
import { getPublishedPlayers, getPlayerBySlug, parseBio } from "@/lib/players-query";

export async function generateStaticParams() {
  const players = await getPublishedPlayers();
  return players.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const player = await getPlayerBySlug(slug);
  if (!player) return { title: "선수 | GCM 테니스 아카데미" };
  const { tagline } = parseBio(player.bio);
  const bits = [
    tagline,
    player.track ? `${TRACK_LABEL[player.track].ko} 트랙` : null,
    player.utr ? `UTR ${player.utr}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  return pageMetadata({
    title: `${player.name} · GCM 배출·소속 선수 | GCM 테니스 아카데미`,
    description:
      bits || `GCM 테니스 아카데미 ${player.name} 선수의 기록과 성장 스토리.`,
    path: `/players/${player.slug}`,
  });
}

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = await getPlayerBySlug(slug);
  if (!player) notFound();

  const { tagline, tags } = parseBio(player.bio);
  const meta = [
    player.track ? TRACK_LABEL[player.track].ko : null,
    player.grad_year,
    player.utr ? `UTR ${player.utr}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const profile: { label: string; value: string }[] = [];
  if (player.birthday) profile.push({ label: "생년월일", value: player.birthday });
  if (player.birthplace) profile.push({ label: "출생지", value: player.birthplace });
  if (player.plays) profile.push({ label: "Plays", value: player.plays });
  if (player.backhand) profile.push({ label: "Backhand", value: player.backhand });
  if (player.joined_date) profile.push({ label: "GCM 합류", value: player.joined_date });

  return (
    <div className="pt-16">
      <PlayerJsonLd player={player} />
      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Link
            href="/players"
            className="inline-flex items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-court"
          >
            <span>←</span> 배출·소속 선수
          </Link>

          <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-court-deep">
              {player.image ? (
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-display text-6xl font-black text-white/40">
                  {player.name.slice(0, 1)}
                </div>
              )}
              {player.track ? (
                <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {TRACK_LABEL[player.track].ko}
                </span>
              ) : null}
            </div>

            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {player.name}
              </h1>
              {tagline ? (
                <p className="mt-3 break-keep text-base leading-relaxed text-ink/80">
                  {tagline}
                </p>
              ) : null}
              {tags.length ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-court/10 px-2.5 py-0.5 text-xs font-semibold text-court"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              ) : null}
              {meta ? <p className="mt-4 text-sm font-semibold text-court">{meta}</p> : null}
              {player.result ? (
                <p className="mt-1.5 break-keep text-sm text-ink/70">{player.result}</p>
              ) : null}

              {profile.length ? (
                <dl className="mt-6 space-y-2 border-t border-line pt-5">
                  {profile.map((r) => (
                    <div key={r.label} className="flex gap-3 text-sm leading-relaxed">
                      <dt className="w-24 shrink-0 font-semibold uppercase tracking-wide text-court">
                        {r.label}
                      </dt>
                      <dd className="break-keep text-ink/80">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {player.video_url ? (
                <a
                  href={player.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-court hover:text-court-deep"
                >
                  하이라이트 영상 →
                </a>
              ) : null}
            </div>
          </div>

          {player.coach_note ? (
            <div className="mt-10 rounded-2xl border-l-2 border-court bg-court/5 px-6 py-5">
              <p className="text-sm font-bold text-court-bright">Coach&apos;s Note</p>
              <p className="mt-2 break-keep leading-relaxed text-ink/85">{player.coach_note}</p>
            </div>
          ) : null}
        </Container>
      </section>
    </div>
  );
}
