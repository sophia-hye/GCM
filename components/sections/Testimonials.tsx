import { testimonials } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading eyebrow="Voices" title="선수와 학부모의 이야기" />
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
          <p className="text-sm text-muted">
            선수와 학부모의 이야기를 준비하고 있습니다. 동의 확인 후 순차적으로 공개될
            예정입니다.
          </p>
        </div>
      )}
    </Section>
  );
}
