import Image from "next/image";
import Link from "next/link";
import { CourtLines } from "@/components/ui";
import { TRACK_LABEL, localizePlayer, type Player } from "@/lib/players";

export function PlayerCard({
  player,
  ko = true,
  detailed = false,
}: {
  player: Player;
  ko?: boolean;
  detailed?: boolean;
}) {
  const p = localizePlayer(player, ko);
  const meta = [p.grad_year && `${p.grad_year}`, p.utr && `UTR ${p.utr}`]
    .filter(Boolean)
    .join(" · ");

  const profile: { label: string; value: string }[] = [];
  if (p.birthday) profile.push({ label: ko ? "생년월일" : "Birthday", value: p.birthday });
  if (p.birthplace) profile.push({ label: ko ? "출생지" : "Birthplace", value: p.birthplace });
  if (p.nationality) profile.push({ label: ko ? "국적" : "Nationality", value: p.nationality });
  if (p.plays) profile.push({ label: "Plays", value: p.plays });
  if (p.backhand) profile.push({ label: "Backhand", value: p.backhand });
  if (p.joined_date) profile.push({ label: ko ? "GCM 합류" : "GCM Joined", value: p.joined_date });

  // bio 는 "한 줄 소개 #특성 #특성" 형식 — 소개(태그라인)와 해시태그(특성)로 분리
  const bio = (p.bio ?? "").trim();
  const tags = (bio.match(/#[^\s#]+/g) ?? []).map((t) => t.slice(1));
  const tagline = bio.replace(/#[^\s#]+/g, "").replace(/\s+/g, " ").trim();

  return (
    <Link href={`/players/${p.slug}`} className="group block">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-court-deep">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
            <span className="relative font-display text-5xl font-black text-white/40">
              {p.name.slice(0, 1)}
            </span>
          </>
        )}
        {p.track ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {ko ? TRACK_LABEL[p.track].ko : TRACK_LABEL[p.track].en}
          </span>
        ) : null}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">{p.name}</h3>
        {tagline ? (
          <p className="mt-1 break-keep text-sm font-medium text-ink/80">{tagline}</p>
        ) : null}
        {tags.length ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
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
        {meta ? <p className="mt-2 text-sm font-semibold text-court">{meta}</p> : null}
        {p.result ? <p className="mt-1 text-xs text-ink/70">{p.result}</p> : null}
        {profile.length ? (
          <dl className="mt-3 space-y-1.5 border-t border-line pt-3">
            {profile.map((r) => (
              <div key={r.label} className="flex gap-3 text-xs leading-relaxed">
                <dt className="w-20 shrink-0 font-semibold uppercase tracking-wide text-court">{r.label}</dt>
                <dd className="break-keep text-ink/80">{r.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {detailed && p.coach_note ? (
          <div className="mt-4 rounded-lg border-l-2 border-court bg-court/5 px-3.5 py-3">
            <p className="text-xs font-bold text-court-bright">Coach&apos;s Note</p>
            <p className="mt-1.5 break-keep text-xs leading-relaxed text-ink/85">{p.coach_note}</p>
          </div>
        ) : null}
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-court transition-colors group-hover:text-court-deep">
          {ko ? "자세히 보기" : "View profile"}
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
