import { testimonials } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getUI } from "@/lib/site-content";

export async function Testimonials() {
  const ui = getUI(await getLocale());
  return (
    <Section lines>
      <SectionHeading eyebrow="Voices" title={ui.testimonialsTitle} />
      {testimonials.length > 0 ? (
        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="border-t border-line pt-6">
              <blockquote className="font-accent text-lg italic leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-court">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="text-sm text-muted">{ui.testimonialsComing}</p>
        </div>
      )}
    </Section>
  );
}
