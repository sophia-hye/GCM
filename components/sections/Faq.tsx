import { Section, SectionHeading } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import type { Faq as FaqType } from "@/lib/faq";
import { FaqAccordion } from "./FaqAccordion";

export async function Faq() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_faqs")
    .select("id, question, answer")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  const items = (data ?? []) as Pick<FaqType, "id" | "question" | "answer">[];
  if (items.length === 0) return null;

  const locale = await getLocale();
  const en = locale === "en";

  return (
    <Section id="faq" tone="muted">
      <SectionHeading
        eyebrow="FAQ"
        title={en ? "Frequently Asked Questions" : "자주 묻는 질문"}
        lead={
          en
            ? "Answers to the questions we hear most often."
            : "가장 자주 받는 질문들을 모았습니다."
        }
      />
      <div className="mt-12">
        <FaqAccordion items={items} />
      </div>
    </Section>
  );
}
