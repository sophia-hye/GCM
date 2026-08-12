import { cache } from "react";
import { directorMessage as d } from "@/lib/site-data";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * 콘텐츠 편집(CMS) 레지스트리.
 * 각 필드는 코드 기본값(default)을 가지며, gcm_content 에 오버라이드가 있으면 그것을 사용한다.
 * 오버라이드는 '한국어' 렌더링에만 적용한다(영어는 코드 번역 유지).
 * 여러 문단 필드(multiline+paragraphs)는 문단 사이를 '빈 줄'로 구분해 저장/편집한다.
 */
export type CmsField = {
  key: string;
  section: string;
  label: string;
  multiline: boolean;
  paragraphs?: boolean; // true 면 빈 줄로 문단 분리
  default: string;
};

const PARA = "\n\n";

export const CMS_FIELDS: CmsField[] = [
  { key: "director.eyebrow", section: "대표 원장 인사말", label: "상단 영문 라벨", multiline: false, default: d.eyebrow },
  { key: "director.title", section: "대표 원장 인사말", label: "제목", multiline: false, default: d.title },
  { key: "director.homeSummary", section: "대표 원장 인사말", label: "홈 요약 인사말 (문단은 빈 줄로 구분)", multiline: true, paragraphs: true, default: d.homeSummary.join(PARA) },
  { key: "director.before", section: "대표 원장 인사말", label: "소개 페이지 인사말 — 앞부분 (빈 줄로 문단 구분)", multiline: true, paragraphs: true, default: d.before.join(PARA) },
  { key: "director.quote", section: "대표 원장 인사말", label: "인용 문구", multiline: true, default: d.quote },
  { key: "director.after", section: "대표 원장 인사말", label: "소개 페이지 인사말 — 뒷부분 (빈 줄로 문단 구분)", multiline: true, paragraphs: true, default: d.after.join(PARA) },
  { key: "director.signature", section: "대표 원장 인사말", label: "서명", multiline: false, default: d.signature },
];

export function fieldFor(key: string): CmsField | undefined {
  return CMS_FIELDS.find((f) => f.key === key);
}

/** 오버라이드 맵을 한 번만 조회(요청 단위 캐시). 테이블 없거나 미설정이면 빈 맵. */
export const getContentMap = cache(async (): Promise<Map<string, string>> => {
  const map = new Map<string, string>();
  if (!isSupabaseConfigured()) return map;
  try {
    const supabase = await createClient();
    const { data } = await supabase.from("gcm_content").select("key, value");
    for (const row of data ?? []) map.set(row.key, row.value);
  } catch {
    // 테이블 미생성 등 — 기본값 사용
  }
  return map;
});

/** 단일 텍스트 리졸브. 한국어일 때만 오버라이드 적용. */
export function cmsText(map: Map<string, string>, key: string, fallback: string, ko: boolean): string {
  if (!ko) return fallback;
  return map.get(key) ?? fallback;
}

/** 문단 배열 리졸브(빈 줄 기준 분리). 한국어일 때만 오버라이드 적용. */
export function cmsParas(map: Map<string, string>, key: string, fallback: string[], ko: boolean): string[] {
  if (!ko) return fallback;
  const v = map.get(key);
  if (v == null) return fallback;
  const parts = v.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
  return parts.length > 0 ? parts : fallback;
}
