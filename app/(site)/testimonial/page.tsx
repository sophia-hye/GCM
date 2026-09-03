import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import Link from "next/link";
import { Section, SectionHeading, Button } from "@/components/ui";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { localizeVoice, type VoiceLocalizable } from "@/lib/voices";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko
      ? "선수와 학부모의 이야기 | GCM 테니스 아카데미"
      : "Stories from Players and Parents | GCM Tennis Academy",
    description: ko
      ? "GCM 선수와 학부모가 직접 전하는 후기와 이야기."
      : "Reviews and stories shared firsthand by GCM players and parents.",
    path: "/testimonial",
  });
}

type Voice = VoiceLocalizable & {
  id: string;
  relation: string;
  created_at: string;
};

export default async function VoicesPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const ko = (await getLocale()) === "ko";
  const relationLabel: Record<string, string> = ko
    ? { player: "선수", parent: "학부모" }
    : { player: "Player", parent: "Parent" };
  const { submitted } = await searchParams;
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_voices")
    .select("id, relation, author_name, title, body, created_at, title_en, body_en, author_name_en")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  const voices = (data ?? []) as Voice[];

  return (
    <div className="pt-16">
      <PageJsonLd name={ko ? "선수·학부모 이야기" : "Player & Parent Stories"} path="/testimonial" />
      <Section id="testimonial">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Testimonial"
            title={ko ? "선수와 학부모의 이야기" : "Stories from Players and Parents"}
          />
          <Button href="/testimonial/new" variant="court">
            {ko ? "이야기 남기기" : "Share Your Story"}
          </Button>
        </div>

        {submitted ? (
          <p className="mt-6 rounded-lg border border-lime/40 bg-lime/10 px-4 py-3 text-sm text-lime">
            {ko
              ? "소중한 이야기가 접수되었습니다. 관리자 확인·승인 후 게시판에 공개됩니다. 감사합니다."
              : "Your story has been received. It will be published after review and approval by an administrator. Thank you."}
          </p>
        ) : null}

        {voices.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {voices.map((raw) => {
              const v = localizeVoice(raw, ko);
              return (
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
              );
            })}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-line px-6 py-16 text-center text-sm text-muted">
            {ko
              ? "아직 공개된 이야기가 없습니다. 첫 이야기를 남겨주세요."
              : "No stories have been published yet. Be the first to share yours."}
            <div className="mt-4">
              <Link href="/testimonial/new" className="font-semibold text-court hover:underline">
                {ko ? "이야기 남기기 →" : "Share Your Story →"}
              </Link>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
