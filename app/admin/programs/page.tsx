import { createClient } from "@/lib/supabase/server";
import type { Program } from "@/lib/programs";
import { ProgramsAdmin } from "./ProgramsAdmin";

export const metadata = { title: "프로그램(상점) 관리 | GCM Admin" };

export default async function AdminProgramsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gcm_programs")
    .select("id, slug, title, summary, description, price, duration, image, sort_order, published")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const rows = (data ?? []) as Program[];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">프로그램(상점) 관리</h1>
      <p className="mt-1 text-sm text-muted">
        Education Program을 등록하면 공개된 프로그램만 Store &gt; Education Program 페이지에 카드로
        노출되고, 각 상세 페이지가 생성됩니다. (온라인 결제 연동 대비 가격 관리)
      </p>

      {error ? (
        <p className="mt-6 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          gcm_programs 테이블이 아직 없습니다. supabase/schema.sql의 gcm_programs 블록을 SQL Editor에서
          실행해 주세요.
        </p>
      ) : (
        <div className="mt-8">
          <ProgramsAdmin rows={rows} />
        </div>
      )}
    </div>
  );
}
