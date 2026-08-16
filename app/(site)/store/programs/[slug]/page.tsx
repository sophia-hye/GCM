import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui";
import { PurchaseButton } from "@/components/PurchaseButton";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { formatPrice, type Program } from "@/lib/programs";

async function getProgram(slug: string): Promise<Program | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_programs")
    .select("id, slug, title, summary, description, price, duration, image, sort_order, published")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  return (data as Program) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgram(slug);
  if (!program) return { title: "Education Program | GCM 테니스 아카데미" };
  return pageMetadata({
    title: `${program.title} | GCM 테니스 아카데미`,
    description: program.summary || "GCM 교육 프로그램 상세 안내.",
    path: `/store/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await getProgram(slug);
  if (!program) notFound();

  const locale = await getLocale();
  const ko = locale === "ko";

  return (
    <div className="pt-16">
      <Container className="py-16 sm:py-24">
        <Link href="/store/programs" className="text-sm font-semibold text-muted hover:text-court">
          ← {ko ? "프로그램 목록" : "All programs"}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-court-deep">
            {program.image ? (
              <Image
                src={program.image}
                alt={program.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : null}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-court">Education Program</p>
            <h1 className="mt-3 break-keep font-display text-3xl font-black leading-[1.15] sm:text-4xl">
              {program.title}
            </h1>
            {program.duration ? (
              <p className="mt-3 inline-block rounded-full border border-line px-3 py-1 text-sm text-muted">
                {program.duration}
              </p>
            ) : null}
            {program.summary ? (
              <p className="mt-5 break-keep text-lg leading-relaxed text-ink/85">{program.summary}</p>
            ) : null}

            <p className="mt-6 font-display text-2xl font-black text-court-bright">
              {formatPrice(program.price, ko)}
            </p>

            <div className="mt-6">
              <PurchaseButton programId={program.id} price={program.price} ko={ko} />
            </div>
          </div>
        </div>

        {program.description ? (
          <div className="mt-16 max-w-3xl border-t border-line pt-10">
            <h2 className="font-display text-xl font-bold">{ko ? "프로그램 안내" : "Program details"}</h2>
            <p className="mt-4 whitespace-pre-line break-keep leading-relaxed text-ink/85">
              {program.description}
            </p>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
