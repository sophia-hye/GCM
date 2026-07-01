import Link from "next/link";
import { Section, SectionHeading, Button } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "선수와 학부모의 이야기 | GCM Tennis Academy" };

type Voice = {
  id: string;
  relation: string;
  author_name: string;
  title: string | null;
  body: string;
  created_at: string;
};

const relationLabel: Record<string, string> = { player: "선수", parent: "학부모" };

export default async function VoicesPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { submitted } = await searchParams;
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_voices")
    .select("id, relation, author_name, title, body, created_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  const voices = (data ?? []) as Voice[];

  return (
    <div className="pt-16">
      <Section id="voices">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Voices" title="선수와 학부모의 이야기" />
          <Button href="/voices/new" variant="court">
            이야기 남기기
          </Button>
        </div>

        {submitted ? (
          <p className="mt-6 rounded-lg border border-lime/40 bg-lime/10 px-4 py-3 text-sm text-lime">
            소중한 이야기가 접수되었습니다. 관리자 확인·승인 후 게시판에 공개됩니다. 감사합니다.
          </p>
        ) : null}

        {voices.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {voices.map((v) => (
              <div key={v.id} className="flex flex-col rounded-2xl border border-line bg-card/40 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-court-bright">
                  {relationLabel[v.relation] ?? v.relation}
                </span>
                {v.title ? <h3 className="mt-3 font-display text-lg font-bold">{v.title}</h3> : null}
                <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-ink/90">
                  {v.body}
                </p>
                <p className="mt-4 text-sm font-semibold text-muted">— {v.author_name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-line px-6 py-16 text-center text-sm text-muted">
            아직 공개된 이야기가 없습니다. 첫 이야기를 남겨주세요.
            <div className="mt-4">
              <Link href="/voices/new" className="font-semibold text-court hover:underline">
                이야기 남기기 →
              </Link>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
