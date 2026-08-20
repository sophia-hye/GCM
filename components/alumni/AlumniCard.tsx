import Image from "next/image";
import Link from "next/link";
import type { Alumni } from "@/lib/alumni";

export function AlumniCard({ alumni }: { alumni: Alumni }) {
  return (
    <Link
      href={`/alumni/${alumni.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-card/40 transition-all hover:-translate-y-1 hover:border-court/50 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-court-deep">
        <Image
          src={alumni.mainImage}
          alt={alumni.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="font-display text-xl font-bold text-white">{alumni.name}</h3>
          <p className="mt-0.5 break-keep text-xs text-white/85">{alumni.role}</p>
        </div>
      </div>

      <div className="p-5">
        {alumni.hashtags.length ? (
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {alumni.hashtags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-court/10 px-2.5 py-0.5 text-xs font-semibold text-court"
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}
        <p className="line-clamp-3 break-keep text-sm leading-relaxed text-ink/80">
          {alumni.summary}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-court transition-colors group-hover:text-court-deep">
          스토리 보기
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
