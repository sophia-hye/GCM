import Image from "next/image";
import { Link } from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui";
import { PlayerJsonLd } from "@/components/PlayerJsonLd";
import { TRACK_LABEL, localizePlayer } from "@/lib/players";
import { getPublishedPlayers, getPlayerBySlug, parseBio } from "@/lib/players-query";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

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
  const raw = await getPlayerBySlug(slug);
  const locale = await getLocale();
  if (!raw)
    return {
      title: pick(locale, { ko: "선수 | GCM 테니스 아카데미", en: "Player | GCM Tennis Academy", zh: "选手 | GCM 网球学院", ja: "選手 | GCM テニスアカデミー", it: "Atleta | GCM Tennis Academy", fr: "Joueur | GCM Tennis Academy", es: "Jugador | GCM Tennis Academy" }),
    };
  const player = localizePlayer(raw, locale);
  const { tagline } = parseBio(player.bio);
  const bits = [
    tagline,
    player.track ? pick(locale, TRACK_LABEL[player.track]) : null,
    player.utr ? `UTR ${player.utr}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  return pageMetadata({
    title: pick(locale, {
      ko: `${player.name} · GCM 배출·소속 선수 | GCM 테니스 아카데미`,
      en: `${player.name} · GCM Player | GCM Tennis Academy`,
      zh: `${player.name} · GCM 所属选手 | GCM 网球学院`,
      ja: `${player.name} · GCM 所属選手 | GCM テニスアカデミー`,
      it: `${player.name} · Atleta GCM | GCM Tennis Academy`,
      fr: `${player.name} · Joueur GCM | GCM Tennis Academy`,
      es: `${player.name} · Jugador GCM | GCM Tennis Academy`,
    }),
    description:
      bits ||
      pick(locale, {
        ko: `GCM 테니스 아카데미 ${player.name} 선수의 기록과 성장 스토리.`,
        en: `Records and growth story of ${player.name} at GCM Tennis Academy.`,
        zh: `GCM 网球学院 ${player.name} 选手的成绩与成长故事。`,
        ja: `GCM テニスアカデミー ${player.name} 選手の記録と成長ストーリー。`,
        it: `Risultati e storia di crescita di ${player.name} alla GCM Tennis Academy.`,
        fr: `Parcours et histoire de progression de ${player.name} à la GCM Tennis Academy.`,
        es: `Registros e historia de crecimiento de ${player.name} en la GCM Tennis Academy.`,
      }),
    path: `/players/${player.slug}`,
  });
}

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = await getPlayerBySlug(slug);
  if (!raw) notFound();

  const locale = await getLocale();
  const player = localizePlayer(raw, locale);
  const trackLabel = player.track ? pick(locale, TRACK_LABEL[player.track]) : null;

  const { tagline, tags } = parseBio(player.bio);
  const meta = [trackLabel, player.grad_year, player.utr ? `UTR ${player.utr}` : null]
    .filter(Boolean)
    .join(" · ");

  const profile: { label: string; value: string }[] = [];
  if (player.birthday) profile.push({ label: pick(locale, { ko: "생년월일", en: "Birthday", zh: "出生日期", ja: "生年月日", it: "Data di nascita", fr: "Date de naissance", es: "Fecha de nacimiento" }), value: player.birthday });
  if (player.birthplace) profile.push({ label: pick(locale, { ko: "출생지", en: "Birthplace", zh: "出生地", ja: "出身地", it: "Luogo di nascita", fr: "Lieu de naissance", es: "Lugar de nacimiento" }), value: player.birthplace });
  if (player.nationality) profile.push({ label: pick(locale, { ko: "국적", en: "Nationality", zh: "国籍", ja: "国籍", it: "Nazionalità", fr: "Nationalité", es: "Nacionalidad" }), value: player.nationality });
  if (player.plays) profile.push({ label: "Plays", value: player.plays });
  if (player.backhand) profile.push({ label: "Backhand", value: player.backhand });
  if (player.joined_date) profile.push({ label: pick(locale, { ko: "GCM 합류", en: "GCM Joined", zh: "加入 GCM", ja: "GCM 合流", it: "Ingresso in GCM", fr: "Arrivée à GCM", es: "Incorporación a GCM" }), value: player.joined_date });

  return (
    <div className="pt-16">
      <PlayerJsonLd player={player} />
      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Link
            href="/players"
            className="inline-flex items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-court"
          >
            <span>←</span> {pick(locale, { ko: "배출·소속 선수", en: "Players", zh: "所属选手", ja: "所属選手", it: "Atleti", fr: "Joueurs", es: "Jugadores" })}
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
                  {trackLabel}
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
                  {pick(locale, { ko: "하이라이트 영상 →", en: "Highlights →", zh: "精彩集锦 →", ja: "ハイライト映像 →", it: "Highlights →", fr: "Temps forts →", es: "Momentos destacados →" })}
                </a>
              ) : null}
            </div>
          </div>

          {player.description ? (
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold tracking-tight">
                {pick(locale, { ko: "선수 소개", en: "About", zh: "选手介绍", ja: "選手紹介", it: "Chi è", fr: "Présentation", es: "Perfil" })}
              </h2>
              <div className="mt-5 space-y-5">
                {player.description.split(/\n{2,}/).map((para, i) => {
                  const t = para.trim();
                  if (!t) return null;
                  const isQuote =
                    (t.startsWith('"') || t.startsWith("“")) &&
                    (t.endsWith('"') || t.endsWith("”"));
                  return isQuote ? (
                    <blockquote
                      key={i}
                      className="break-keep border-l-4 border-court pl-5 font-display text-lg font-semibold leading-relaxed text-ink"
                    >
                      {t}
                    </blockquote>
                  ) : (
                    <p
                      key={i}
                      className="whitespace-pre-line break-keep text-base leading-loose text-ink/85"
                    >
                      {t}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : null}

          {player.coach_note ? (
            <div className="mt-10 rounded-2xl border-l-2 border-court bg-court/5 px-6 py-5">
              <p className="text-sm font-bold text-court-bright">Coach&apos;s Note</p>
              <p className="mt-2 whitespace-pre-line break-keep leading-relaxed text-ink/85">{player.coach_note}</p>
            </div>
          ) : null}
        </Container>
      </section>
    </div>
  );
}
