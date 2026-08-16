import Image from "next/image";
import Link from "next/link";
import { CourtLines } from "@/components/ui";
import { formatPrice, type Program } from "@/lib/programs";

export function ProgramCard({ program, ko = true }: { program: Program; ko?: boolean }) {
  return (
    <Link href={`/store/programs/${program.slug}`} className="group block">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-court-deep">
        {program.image ? (
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
        )}
        {program.duration ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {program.duration}
          </span>
        ) : null}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold group-hover:text-court">{program.title}</h3>
        {program.summary ? (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{program.summary}</p>
        ) : null}
        <p className="mt-3 font-display text-base font-bold text-court-bright">
          {formatPrice(program.price, ko)}
        </p>
      </div>
    </Link>
  );
}
