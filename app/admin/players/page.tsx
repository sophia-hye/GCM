import { createClient } from "@/lib/supabase/server";
import type { Player } from "@/lib/players";
import { PlayersAdmin } from "./PlayersAdmin";

export const metadata = { title: "선수 관리 | GCM Admin" };

export default async function AdminPlayersPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gcm_players")
    .select(
      "id, slug, name, grad_year, utr, track, result, video_url, image, bio, birthday, birthplace, nationality, plays, backhand, joined_date, description, coach_note, sort_order, published",
    )
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const rows = (data ?? []) as Player[];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">선수 관리</h1>
      <p className="mt-1 text-sm text-muted">
        배출 · 소속 선수를 등록하면 공개된 선수만 /players 페이지에 카드로 노출됩니다.
      </p>

      {error ? (
        <p className="mt-6 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          gcm_players 테이블/컬럼이 아직 없습니다. supabase/schema.sql의 gcm_players ALTER 블록을 SQL
          Editor에서 실행해 주세요.
        </p>
      ) : (
        <div className="mt-8">
          <PlayersAdmin rows={rows} />
        </div>
      )}
    </div>
  );
}
