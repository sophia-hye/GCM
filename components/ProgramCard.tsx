import Link from "next/link";
import { CourtLines } from "@/components/ui";
import { MediaFill } from "@/components/MediaFill";
import { formatPrice, localizeProgram, type Program } from "@/lib/programs";
import { pick, type Locale } from "@/lib/i18n-pick";

export function ProgramCard({ program, locale }: { program: Program; locale: Locale }) {
  const p = localizeProgram(program, locale);
  return (
    <Link href={`/store/programs/${p.slug}`} className="group block">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-court-deep">
        {p.image ? (
          <MediaFill
            src={p.image}
            alt={p.title}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
        )}
        {p.duration ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {p.duration}
          </span>
        ) : null}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold group-hover:text-court">{p.title}</h3>
        {p.summary ? (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{p.summary}</p>
        ) : null}
        <p className="mt-3 font-display text-base font-bold text-court-bright">
          {p.price == null
            ? pick(locale, {
                ko: "회원 전용 · 상담 문의",
                en: "Members only · Consult",
                zh: "会员专享 · 咨询垂询",
                ja: "会員限定 · 相談",
                it: "Solo soci · Consulenza",
                fr: "Réservé aux membres · Sur demande",
                es: "Solo socios · Consultar",
              })
            : formatPrice(p.price, locale)}
        </p>
      </div>
    </Link>
  );
}
