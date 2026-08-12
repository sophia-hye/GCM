import { createClient } from "@/lib/supabase/server";
import { CMS_FIELDS } from "@/lib/cms";
import { ContentFieldForm } from "@/app/admin/content/ContentFieldForm";

export const metadata = { title: "콘텐츠 편집 | GCM Admin" };

export default async function AdminContentPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("gcm_content").select("key, value");
  const overrides = new Map<string, string>((data ?? []).map((r) => [r.key, r.value]));

  // 섹션별 그룹
  const sections = Array.from(new Set(CMS_FIELDS.map((f) => f.section)));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">콘텐츠 편집</h1>
        <p className="mt-1 text-sm text-muted">
          사이트 핵심 문구를 직접 수정합니다. 저장하면 홈·소개 페이지에 바로 반영됩니다. (한국어 기준)
        </p>
      </div>

      {sections.map((section) => (
        <div key={section} className="space-y-4">
          <h2 className="font-display text-lg font-bold text-court-bright">{section}</h2>
          <div className="space-y-4">
            {CMS_FIELDS.filter((f) => f.section === section).map((f) => (
              <ContentFieldForm
                key={f.key}
                field={{ key: f.key, label: f.label, multiline: f.multiline, paragraphs: f.paragraphs }}
                value={overrides.get(f.key) ?? f.default}
                overridden={overrides.has(f.key)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
