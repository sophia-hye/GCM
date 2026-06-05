import { partners } from "@/lib/site-data";

export function LogoMarquee() {
  const items = [...partners, ...partners];
  return (
    <div className="border-y border-line bg-base py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        Partners & Pathways
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl font-bold uppercase tracking-wide text-muted/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
