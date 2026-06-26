import { faqContact } from "@/lib/site-data";
import { Section, Button } from "@/components/ui";

export function CTABanner() {
  return (
    <Section>
      <div className="border-t border-line pt-16 text-center sm:pt-20">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {faqContact.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{faqContact.sub}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href="/consulting" variant="court">
            무료 진로 상담
          </Button>
          <Button href="/training" variant="link">
            프로그램 보기
          </Button>
        </div>
      </div>
    </Section>
  );
}
