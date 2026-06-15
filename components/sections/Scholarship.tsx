import { scholarship } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function Scholarship() {
  return (
    <Section id="scholarship" className="bg-card/30">
      <SectionHeading
        eyebrow="Apply for Scholarship"
        title={scholarship.title}
        lead={scholarship.lead}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {scholarship.points.map((p, i) => (
          <div key={p.title} className="rounded-2xl border border-line bg-card p-7">
            <span className="font-display text-sm font-bold text-court-bright">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-card p-7">
        <h3 className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
          신청 시 준비 항목
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {scholarship.apply.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink/90">
              <span className="text-lime">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
