import { testimonials } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Voices"
        title="선수와 학부모의 이야기"
        center
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.author}
            className="rounded-2xl border border-line bg-card p-7"
          >
            <span className="font-display text-4xl leading-none text-court">&ldquo;</span>
            <blockquote className="mt-2 text-sm leading-relaxed text-ink/90">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-court-bright">
              {t.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
