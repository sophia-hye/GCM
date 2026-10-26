import { redirect } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { VoiceForm } from "@/components/VoiceForm";
import { getLocale } from "@/lib/i18n";
import { pick, localePrefix } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "이야기 남기기 | GCM 테니스 아카데미",
      en: "Share Your Story | GCM Tennis Academy",
      zh: "分享你的故事 | GCM Tennis Academy",
      ja: "体験を投稿する | GCM Tennis Academy",
      it: "Condividi la tua storia | GCM Tennis Academy",
      fr: "Partagez votre histoire | GCM Tennis Academy",
      es: "Comparte tu historia | GCM Tennis Academy",
    }),
  };
}

export default async function NewVoicePage() {
  const locale = await getLocale();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    const lp = localePrefix(locale);
    redirect(`${lp}/login?next=${lp}/testimonial/new`);
  }

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("name")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Testimonial"
          title={pick(locale, {
            ko: "이야기 남기기",
            en: "Share Your Story",
            zh: "分享你的故事",
            ja: "体験を投稿する",
            it: "Condividi la tua storia",
            fr: "Partagez votre histoire",
            es: "Comparte tu historia",
          })}
          lead={pick(locale, {
            ko: "GCM과 함께한 경험을 자유롭게 들려주세요. 관리자 승인 후 게시판에 공개됩니다.",
            en: "Feel free to share your experience with GCM. Your story will be published after administrator approval.",
            zh: "欢迎自由分享您与 GCM 共度的经历。经管理员批准后将发布到留言板。",
            ja: "GCMと過ごした経験を自由にお聞かせください。管理者の承認後に掲示板へ公開されます。",
            it: "Raccontaci liberamente la tua esperienza con GCM. La tua storia sarà pubblicata dopo l'approvazione dell'amministratore.",
            fr: "Partagez librement votre expérience avec GCM. Votre histoire sera publiée après approbation par un administrateur.",
            es: "Comparte libremente tu experiencia con GCM. Tu historia se publicará tras la aprobación del administrador.",
          })}
        />
        <div className="mt-10 max-w-xl">
          <VoiceForm defaultName={profile?.name || ""} />
        </div>
      </Section>
    </div>
  );
}
