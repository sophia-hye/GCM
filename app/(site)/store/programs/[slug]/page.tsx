import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Container, CourtLines } from "@/components/ui";
import { PurchaseButton } from "@/components/PurchaseButton";
import { MediaFill } from "@/components/MediaFill";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { formatPrice, localizeProgram, type Program } from "@/lib/programs";

async function getProgram(slug: string): Promise<Program | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_programs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (!data) return null;
  return { ...(data as Program), images: (data.images as string[] | null) ?? [] };
}

type Section = { title: string; items: string[]; paras: string[] };

/** 설명 텍스트를 [섹션] 헤더 기준으로 구조화. 대괄호 섹션이 없으면 전체를 intro 로. */
function parseDescription(desc: string): { intro: string[]; sections: Section[] } {
  const blocks = desc
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const b of blocks) {
    const m = b.match(/^\[(.+?)\]\s*([\s\S]*)$/);
    if (m) {
      const lines = m[2]
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      sections.push({
        title: m[1].trim(),
        items: lines.filter((l) => l.startsWith("·")).map((l) => l.replace(/^·\s*/, "")),
        paras: lines.filter((l) => !l.startsWith("·")),
      });
    } else {
      intro.push(b);
    }
  }
  return { intro, sections };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const raw = await getProgram(slug);
  const locale = await getLocale();
  const ko = locale === "ko";
  if (!raw)
    return {
      title: pick(locale, {
        ko: "Education Program | GCM 테니스 아카데미",
        en: "Education Program | GCM Tennis Academy",
        zh: "Education Program | GCM Tennis Academy",
        ja: "Education Program | GCM Tennis Academy",
        it: "Education Program | GCM Tennis Academy",
        fr: "Education Program | GCM Tennis Academy",
        es: "Education Program | GCM Tennis Academy",
      }),
    };
  const program = localizeProgram(raw, ko);
  return pageMetadata({
    title: pick(locale, {
      ko: `${program.title} | GCM 테니스 아카데미`,
      en: `${program.title} | GCM Tennis Academy`,
      zh: `${program.title} | GCM Tennis Academy`,
      ja: `${program.title} | GCM Tennis Academy`,
      it: `${program.title} | GCM Tennis Academy`,
      fr: `${program.title} | GCM Tennis Academy`,
      es: `${program.title} | GCM Tennis Academy`,
    }),
    description:
      program.summary ||
      pick(locale, {
        ko: "GCM 교육 프로그램 상세 안내.",
        en: "GCM education program details.",
        zh: "GCM 教育项目详情介绍。",
        ja: "GCM教育プログラムの詳細案内。",
        it: "Dettagli del programma educativo GCM.",
        fr: "Détails du programme éducatif GCM.",
        es: "Detalles del programa educativo de GCM.",
      }),
    path: `/store/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = await getProgram(slug);
  if (!raw) notFound();

  const locale = await getLocale();
  const ko = locale === "ko";
  const program = localizeProgram(raw, ko);
  const { intro, sections } = program.description
    ? parseDescription(program.description)
    : { intro: [], sections: [] };

  return (
    <div className="pt-16">
      {/* 히어로 배너 */}
      <section className="relative overflow-hidden bg-court-deep text-white">
        {program.image ? (
          <MediaFill src={program.image} alt={program.title} priority sizes="100vw" className="object-cover opacity-45" />
        ) : (
          <CourtLines className="absolute inset-0 h-full w-full text-white/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35" />
        <Container className="relative flex min-h-[46vh] flex-col justify-end py-16 sm:py-24">
          <Link
            href="/store/programs"
            className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            ←{" "}
            {pick(locale, {
              ko: "프로그램 목록",
              en: "All programs",
              zh: "项目列表",
              ja: "プログラム一覧",
              it: "Tutti i programmi",
              fr: "Tous les programmes",
              es: "Todos los programas",
            })}
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4ff3d]">
            Education Program
          </p>
          <h1 className="mt-3 max-w-3xl break-keep font-display text-3xl font-black leading-[1.12] sm:text-5xl">
            {program.title}
          </h1>
          {program.duration ? (
            <p className="mt-4 inline-block w-fit rounded-full border border-white/30 px-4 py-1.5 text-sm text-white/90">
              {program.duration}
            </p>
          ) : null}
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
          {/* 본문 */}
          <div className="min-w-0">
            {program.summary ? (
              <p className="break-keep text-lg leading-relaxed text-ink/85 sm:text-xl">
                {program.summary}
              </p>
            ) : null}
            {intro.map((p, i) => (
              <p key={i} className="mt-5 break-keep leading-relaxed text-ink/80">
                {p}
              </p>
            ))}

            {sections.length > 0 ? (
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {sections.map((sec) => (
                  <div key={sec.title} className="rounded-2xl border border-line bg-card/40 p-6">
                    <h3 className="font-display text-base font-bold text-court-bright">{sec.title}</h3>
                    {sec.paras.map((p, i) => (
                      <p key={i} className="mt-2 break-keep text-sm leading-relaxed text-ink/85">
                        {p}
                      </p>
                    ))}
                    {sec.items.length > 0 ? (
                      <ul className="mt-3 space-y-2">
                        {sec.items.map((it, i) => (
                          <li key={i} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                            <span className="mt-0.5 shrink-0 font-semibold text-court">·</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* 구매/신청 사이드 카드 (sticky) */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {pick(locale, {
                  ko: "참가 안내",
                  en: "Enrollment",
                  zh: "参加指引",
                  ja: "参加のご案内",
                  it: "Iscrizione",
                  fr: "Inscription",
                  es: "Inscripción",
                })}
              </p>
              {program.price == null ? (
                <>
                  <p className="mt-3 break-keep text-sm font-medium leading-relaxed text-ink/85">
                    {pick(locale, {
                      ko: "회원 또는 회원의 지인만 지원 가능합니다.",
                      en: "Open to GCM members and their acquaintances only.",
                      zh: "仅限会员或会员的熟人申请。",
                      ja: "会員または会員のご友人のみお申し込みいただけます。",
                      it: "Riservato ai membri GCM e ai loro conoscenti.",
                      fr: "Réservé aux membres GCM et à leurs proches.",
                      es: "Solo para miembros de GCM y sus conocidos.",
                    })}
                  </p>
                  {program.duration ? (
                    <p className="mt-2 text-sm text-muted">{program.duration}</p>
                  ) : null}
                  <Link
                    href="/consulting"
                    className="mt-5 block w-full rounded-full bg-court px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-court-deep"
                  >
                    {pick(locale, {
                      ko: "상담하기",
                      en: "Request consultation",
                      zh: "咨询",
                      ja: "相談する",
                      it: "Richiedi una consulenza",
                      fr: "Demander une consultation",
                      es: "Solicitar consulta",
                    })}
                  </Link>
                </>
              ) : (
                <>
                  <p className="mt-2 font-display text-2xl font-black text-court-bright">
                    {formatPrice(program.price, ko)}
                  </p>
                  {program.duration ? (
                    <p className="mt-2 text-sm text-muted">{program.duration}</p>
                  ) : null}
                  <div className="mt-5">
                    <PurchaseButton programId={program.id} price={program.price} ko={ko} />
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>

        {/* 갤러리 (대표 이미지 제외한 나머지) */}
        {program.images.length > 1 ? (
          <div className="mt-14 border-t border-line pt-10">
            <h2 className="font-display text-lg font-bold">
              {pick(locale, {
                ko: "갤러리",
                en: "Gallery",
                zh: "画廊",
                ja: "ギャラリー",
                it: "Galleria",
                fr: "Galerie",
                es: "Galería",
              })}
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {program.images.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-court-deep"
                >
                  <MediaFill
                    src={src}
                    alt={`${program.title} ${i + 2}`}
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
