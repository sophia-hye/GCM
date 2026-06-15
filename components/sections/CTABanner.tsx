import { faqContact } from "@/lib/site-data";
import { Section, Button, CourtLines } from "@/components/ui";

export function CTABanner() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-line bg-court-gradient p-10 text-center sm:p-16">
        <CourtLines className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 text-white/10" />
        <div className="absolute inset-0 bg-base/30" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl">
            {faqContact.title}
          </h2>
          <p className="mt-4 text-ink/85">{faqContact.sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/consultation" variant="lime">
              무료 진로 상담
            </Button>
            <Button href="/programs" variant="outline">
              프로그램 보기
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
