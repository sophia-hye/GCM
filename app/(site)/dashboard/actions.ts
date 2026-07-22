"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export type BookingState = { ok?: boolean; error?: string };

const TYPES = ["consulting", "lesson", "tournament", "showcase"];

/** 회원 본인 예약 요청 생성 */
export async function createBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  if (!isSupabaseConfigured()) return { error: "백엔드가 설정되지 않았습니다." };

  const type = String(formData.get("type") ?? "");
  const scheduledAt = String(formData.get("scheduled_at") ?? "");
  const memo = String(formData.get("memo") ?? "").trim();

  if (!TYPES.includes(type)) return { error: "예약 유형을 선택해 주세요." };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "로그인이 필요합니다." };

  const { error } = await supabase.from("gcm_bookings").insert({
    user_id: user.id,
    type,
    scheduled_at: scheduledAt ? new Date(scheduledAt).toISOString() : null,
    memo: memo || null,
  });

  if (error) return { error: "예약 요청 중 오류가 발생했습니다." };

  revalidatePath("/dashboard/schedule");
  return { ok: true };
}

export type CheckinState = { ok?: boolean; error?: string };

/** 멘탈 케어 체크인 기록 */
export async function createCheckin(
  _prev: CheckinState,
  formData: FormData,
): Promise<CheckinState> {
  if (!isSupabaseConfigured()) return { error: "백엔드가 설정되지 않았습니다." };

  const mood = Number(formData.get("mood_score") ?? 0);
  const note = String(formData.get("note") ?? "").trim();
  if (!(mood >= 1 && mood <= 5)) return { error: "오늘 컨디션을 선택해 주세요." };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "로그인이 필요합니다." };

  const { error } = await supabase
    .from("gcm_checkins")
    .insert({ user_id: user.id, mood_score: mood, note: note || null });

  if (error) return { error: "기록 중 오류가 발생했습니다." };

  revalidatePath("/dashboard/checkin");
  revalidatePath("/dashboard");
  return { ok: true };
}
