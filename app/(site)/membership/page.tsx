import { ComingSoon } from "@/components/sections/ComingSoon";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "Membership | GCM 테니스 아카데미",
      en: "Membership | GCM Tennis Academy",
      zh: "Membership | GCM Tennis Academy",
      ja: "Membership | GCM Tennis Academy",
      it: "Membership | GCM Tennis Academy",
      fr: "Membership | GCM Tennis Academy",
      es: "Membership | GCM Tennis Academy",
    }),
  };
}

export default async function MembershipPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <ComingSoon
        eyebrow="Social Events"
        title="Membership"
        desc={pick(locale, {
          ko: "GCM 멤버십을 준비하고 있습니다. 곧 안내드리겠습니다.",
          en: "We're preparing GCM Membership. We'll share more soon.",
          zh: "我们正在筹备 GCM 会员服务，敬请期待。",
          ja: "GCMメンバーシップを準備中です。近日中にご案内します。",
          it: "Stiamo preparando l'abbonamento GCM. Presto maggiori informazioni.",
          fr: "Nous préparons l'adhésion GCM. Plus d'informations bientôt.",
          es: "Estamos preparando la membresía GCM. Pronto compartiremos más.",
        })}
      />
    </div>
  );
}
