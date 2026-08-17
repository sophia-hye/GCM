import Image from "next/image";
import { CourtLines } from "@/components/ui";
import { TRACK_LABEL, type Player } from "@/lib/players";

export function PlayerCard({ player, ko = true }: { player: Player; ko?: boolean }) {
  const meta = [player.grad_year && `${player.grad_year}`, player.utr && `UTR ${player.utr}`]
    .filter(Boolean)
    .join(" · ");

  const profile: { label: string; value: string }[] = [];
  if (player.birthday) profile.push({ label: ko ? "생년월일" : "Birthday", value: player.birthday });
  if (player.birthplace) profile.push({ label: ko ? "출생지" : "Birthplace", value: player.birthplace });
  if (player.plays) profile.push({ label: "Plays", value: player.plays });
  if (player.backhand) profile.push({ label: "Backhand", value: player.backhand });
  if (player.joined_date) profile.push({ label: ko ? "GCM 합류" : "GCM Joined", value: player.joined_date });

  return (
    <div className="group">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-court-deep">
        {player.image ? (
          <Image
            src={player.image}
            alt={player.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
            <span className="relative font-display text-5xl font-black text-white/40">
              {player.name.slice(0, 1)}
            </span>
          </>
        )}
        {player.track ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {ko ? TRACK_LABEL[player.track].ko : TRACK_LABEL[player.track].en}
          </span>
        ) : null}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">{player.name}</h3>
        {meta ? <p className="mt-1 text-sm font-semibold text-court">{meta}</p> : null}
        {player.result ? <p className="mt-1 text-xs text-ink/70">{player.result}</p> : null}
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
        {player.bio ? <p className="mt-2 text-sm leading-relaxed text-muted">{player.bio}</p> : null}
        {player.video_url ? (
          <a
            href={player.video_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs font-semibold text-court hover:text-court-deep"
          >
            {ko ? "하이라이트 영상 →" : "Highlights →"}
          </a>
        ) : null}
      </div>
    </div>
  );
}
