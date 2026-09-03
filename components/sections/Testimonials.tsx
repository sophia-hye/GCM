import Link from "next/link";
import { Section, SectionHeading, Button } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getLocale } from "@/lib/i18n";
import { getUI } from "@/lib/site-content";
import { localizeVoice, type VoiceLocalizable } from "@/lib/voices";

type Voice = VoiceLocalizable & {
  id: string;
  relation: string;
};

/** 홈 미리보기용 최신 후기 3개 */
async function getRecentVoices(): Promise<Voice[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("gcm_voices")
      .select("id, relation, author_name, title, body, title_en, body_en, author_name_en")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(3);
    return (data ?? []) as Voice[];
  } catch {
    return [];
  }
}

export async function Testimonials() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const ui = getUI(locale);
  const relationLabel: Record<string, string> = ko
    ? { player: "선수", parent: "학부모" }
    : { player: "Player", parent: "Parent" };
  const voices = await getRecentVoices();

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Testimonial" title={ui.testimonialsTitle} />
        {voices.length > 0 ? (
          <Link
            href="/testimonial"
            className="text-sm font-semibold text-court transition-colors hover:text-court-deep"
          >
            {ko ? "전체 보기 →" : "View all →"}
          </Link>
        ) : null}
      </div>

      {voices.length > 0 ? (
        <>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {voices.map((raw) => {
              const v = localizeVoice(raw, ko);
              return (
                <Link
                  key={v.id}
                  href="/testimonial"
                  className="group flex flex-col rounded-2xl border border-line bg-card/40 p-6 transition-colors hover:border-court-bright"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-court-bright">
                    {relationLabel[v.relation] ?? v.relation}
                  </span>
                  {v.title ? (
                    <h3 className="mt-3 break-keep font-display text-lg font-bold">{v.title}</h3>
                  ) : null}
                  <p className="mt-3 line-clamp-4 flex-1 break-keep text-sm leading-relaxed text-ink/85">
                    {v.body}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-muted">— {v.author_name}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button href="/testimonial" variant="court">
              {ko ? "선수 · 학부모 이야기 더 보기" : "More Player & Parent Stories"}
            </Button>
          </div>
        </>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="text-sm text-muted">{ui.testimonialsComing}</p>
        </div>
      )}
    </Section>
  );
}
