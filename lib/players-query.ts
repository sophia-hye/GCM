import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase/env";
import type { Player } from "@/lib/players";

/**
 * 쿠키 없는 공개 읽기 클라이언트.
 * RLS 정책(gcm_players_select_published)에 따라 published=true 선수만 조회된다.
 * 사이트맵·개별 선수 페이지 등 요청 컨텍스트(쿠키)가 없어도 되는 곳에서 사용.
 */
function readClient() {
  return createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function getPublishedPlayers(): Promise<Player[]> {
  const { data } = await readClient()
    .from("gcm_players")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  return (data ?? []) as Player[];
}

export async function getPlayerBySlug(slug: string): Promise<Player | null> {
  const { data } = await readClient()
    .from("gcm_players")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  return (data as Player) ?? null;
}

/** bio("한 줄 소개 #특성 #특성")를 태그라인과 해시태그로 분리 */
export function parseBio(bio: string | null): { tagline: string; tags: string[] } {
  const b = (bio ?? "").trim();
  const tags = (b.match(/#[^\s#]+/g) ?? []).map((t) => t.slice(1));
  const tagline = b.replace(/#[^\s#]+/g, "").replace(/\s+/g, " ").trim();
  return { tagline, tags };
}
