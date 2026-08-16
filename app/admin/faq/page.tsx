import { createClient } from "@/lib/supabase/server";
import type { Faq } from "@/lib/faq";
import { FaqAdmin } from "./FaqAdmin";

export const metadata = { title: "FAQ 관리 | GCM Admin" };

export default async function AdminFaqPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gcm_faqs")
    .select("id, question, answer, published, sort_order")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  const rows = (data ?? []) as Faq[];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">FAQ 관리</h1>
      <p className="mt-1 text-sm text-muted">
        Contact 페이지에 노출되는 자주 묻는 질문을 관리합니다. 최대 10개까지 등록할 수 있습니다.
      </p>

      {error ? (
        <p className="mt-6 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          gcm_faqs 테이블이 아직 없습니다. supabase/schema.sql의 FAQ 블록을 SQL Editor에서 실행해
          주세요.
        </p>
      ) : (
        <div className="mt-8">
          <FaqAdmin rows={rows} />
        </div>
      )}
    </div>
  );
}
