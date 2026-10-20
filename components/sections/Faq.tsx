import { Section, SectionHeading } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
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

  return (
    <Section id="faq" tone="muted">
      <SectionHeading
        eyebrow="FAQ"
        title={pick(locale, {
          ko: "자주 묻는 질문",
          en: "Frequently Asked Questions",
          zh: "常见问题",
          ja: "よくある質問",
          it: "Domande frequenti",
          fr: "Questions fréquentes",
          es: "Preguntas frecuentes",
        })}
        lead={pick(locale, {
          ko: "가장 자주 받는 질문들을 모았습니다.",
          en: "Answers to the questions we hear most often.",
          zh: "我们整理了最常被问到的问题。",
          ja: "最もよくいただく質問をまとめました。",
          it: "Le risposte alle domande che ci vengono poste più spesso.",
          fr: "Les réponses aux questions que l'on nous pose le plus souvent.",
          es: "Las respuestas a las preguntas que más nos hacen.",
        })}
      />
      <div className="mt-12">
        <FaqAccordion items={items} />
      </div>
    </Section>
  );
}
