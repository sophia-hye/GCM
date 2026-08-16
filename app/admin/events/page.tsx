import { createClient } from "@/lib/supabase/server";
import type { SeouliteEvent } from "@/lib/events";
import { EventsAdmin } from "./EventsAdmin";

export const metadata = { title: "Seoulite 모임 관리 | GCM Admin" };

export default async function AdminEventsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gcm_events")
    .select("id, slug, title, location, event_date, body, images, sort_order, published")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const rows = (data ?? []) as SeouliteEvent[];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">Seoulite Net&apos;work 모임 관리</h1>
      <p className="mt-1 text-sm text-muted">
        월간 모임 후기를 등록하면 공개된 글만 Social Events &gt; Seoulite Net&apos;work 페이지에
        인스타 피드형 카드로 노출되고, 각 상세 페이지가 생성됩니다.
      </p>

      {error ? (
        <p className="mt-6 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          gcm_events 테이블이 아직 없습니다. supabase/schema.sql의 gcm_events 블록을 SQL Editor에서
          실행해 주세요.
        </p>
      ) : (
        <div className="mt-8">
          <EventsAdmin rows={rows} />
        </div>
      )}
    </div>
  );
}
