import { Section, SectionHeading } from "@/components/ui";
import { PlayerCard } from "@/components/PlayerCard";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { getUI } from "@/lib/site-content";
import { getContentMap, cmsText } from "@/lib/cms";
import type { Player } from "@/lib/players";

export async function Players({ detailed = false }: { detailed?: boolean }) {
  const locale = await getLocale();
  const ko = locale === "ko";
  const ui = getUI(locale);
  const map = await getContentMap();

  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_players")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const players = (data ?? []) as Player[];

  return (
    <Section id="players" tone="muted">
      <SectionHeading
        eyebrow={cmsText(map, "players.eyebrow", "GCM Players", ko)}
        title={cmsText(map, "players.title", ui.playersTitle, ko)}
        lead={cmsText(map, "players.lead", ui.playersLead, ko)}
      />

      {players.length > 0 ? (
        <div
          className={`mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 ${
            detailed ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {players.map((p) => (
            <PlayerCard key={p.id} player={p} ko={ko} detailed={detailed} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="text-sm text-muted">{cmsText(map, "players.coming", ui.playersComing, ko)}</p>
        </div>
      )}
    </Section>
  );
}
