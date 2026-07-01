import { redirect } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { VoiceForm } from "@/components/VoiceForm";

export const metadata = { title: "이야기 남기기 | GCM Tennis Academy" };

export default async function NewVoicePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/voices/new");

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("name")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Voices"
          title="이야기 남기기"
          lead="GCM과 함께한 경험을 자유롭게 들려주세요. 관리자 승인 후 게시판에 공개됩니다."
        />
        <div className="mt-10 max-w-xl">
          <VoiceForm defaultName={profile?.name || ""} />
        </div>
      </Section>
    </div>
  );
}
