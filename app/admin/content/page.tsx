import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { CMS_FIELDS, CMS_SECTIONS } from "@/lib/cms";
import { ContentFieldForm } from "@/app/admin/content/ContentFieldForm";

export const metadata = { title: "콘텐츠 편집 | GCM Admin" };

export default async function AdminContentPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const active = CMS_SECTIONS.find((s) => s.slug === tab) ?? CMS_SECTIONS[0];

  const supabase = await createClient();
  const { data } = await supabase.from("gcm_content").select("key, value");
  const overrides = new Map<string, string>((data ?? []).map((r) => [r.key, r.value]));

  const fields = CMS_FIELDS.filter((f) => f.section === active.label);
  const editedCount = (slugLabel: string) =>
    CMS_FIELDS.filter((f) => f.section === slugLabel && overrides.has(f.key)).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">콘텐츠 편집</h1>
        <p className="mt-1 text-sm text-muted">
          섹션 탭을 선택해 핵심 문구를 수정합니다. 저장하면 사이트에 바로 반영됩니다. (한국어 기준)
        </p>
      </div>

      {/* 섹션 탭 */}
      <div className="flex flex-wrap gap-1 border-b border-line">
        {CMS_SECTIONS.map((s) => {
          const isActive = s.slug === active.slug;
          const n = editedCount(s.label);
          return (
            <Link
              key={s.slug}
              href={`/admin/content?tab=${s.slug}`}
              className={`-mb-px rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-b-2 border-court text-court"
                  : "text-muted hover:text-ink"
              }`}
            >
              {s.label}
              {n > 0 ? (
                <span className="ml-1.5 rounded-full bg-lime/15 px-1.5 py-0.5 text-[10px] font-bold text-lime">
                  {n}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>

      <div className="space-y-4">
        {fields.map((f) => (
          <ContentFieldForm
            key={f.key}
            field={{ key: f.key, label: f.label, multiline: f.multiline, paragraphs: f.paragraphs }}
            value={overrides.get(f.key) ?? f.default}
            overridden={overrides.has(f.key)}
          />
        ))}
      </div>
    </div>
  );
}
