import { cache } from "react";
import {
  directorMessage as d,
  heroSlides,
  team,
  siteGuideLead,
  teamLead,
  programsLead,
  faqContact,
  consulting,
  scholarship,
  recreational,
  programs,
  siteGuide,
  founding,
  whoWeAre,
} from "@/lib/site-data";
import { getConsultingExtra } from "@/lib/consulting-content";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

const cx = getConsultingExtra("ko");

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
  list?: boolean; // true 면 한 줄에 하나씩(항목 리스트)
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

  // 홈 히어로 슬로건 (슬라이드 3개 × headline·accent·sub)
  ...heroSlides.flatMap((s, i) => [
    { key: `hero.${i}.headline`, section: "홈", label: `슬라이드 ${i + 1} — 헤드라인`, multiline: false, default: s.headline },
    { key: `hero.${i}.accent`, section: "홈", label: `슬라이드 ${i + 1} — 강조어(이탤릭)`, multiline: false, default: s.accent },
    { key: `hero.${i}.sub`, section: "홈", label: `슬라이드 ${i + 1} — 설명 문구`, multiline: true, default: s.sub },
  ]),

  // 코치 소개 (코치 3명 × 이름·직함·소개)
  ...team.slice(0, 3).flatMap((m, i) => [
    { key: `coach.${i}.name`, section: "코치진", label: `코치 ${i + 1} — 이름`, multiline: false, default: m.name },
    { key: `coach.${i}.role`, section: "코치진", label: `코치 ${i + 1} — 직함`, multiline: false, default: m.role },
    { key: `coach.${i}.bio`, section: "코치진", label: `코치 ${i + 1} — 소개`, multiline: true, default: m.bio },
  ]),

  // 홈 페이지 섹션 리드
  { key: "section.siteGuideLead", section: "홈", label: "둘러보기(Explore) 리드", multiline: true, default: siteGuideLead },
  { key: "section.programsLead", section: "홈", label: "트레이닝 시스템 리드", multiline: true, default: programsLead },
  { key: "section.ctaTitle", section: "홈", label: "하단 CTA 제목", multiline: false, default: faqContact.title },
  { key: "section.ctaSub", section: "홈", label: "하단 CTA 설명", multiline: true, default: faqContact.sub },
  // 코치진 페이지
  { key: "section.teamLead", section: "코치진", label: "코치진 섹션 리드", multiline: true, default: teamLead },
  // 컨설팅·취미반
  { key: "section.consultingTitle", section: "컨설팅·취미반", label: "컨설팅 제목", multiline: false, default: consulting.title },
  { key: "section.consultingLead", section: "컨설팅·취미반", label: "컨설팅 리드", multiline: true, default: consulting.lead },
  { key: "section.recreationalLead", section: "컨설팅·취미반", label: "키즈·취미반 리드", multiline: true, default: recreational.lead },

  // 트레이닝 (프로그램 3개 × 대상·단계·설명·항목)
  ...programs.flatMap((p, i) => [
    { key: `program.${i}.target`, section: "트레이닝", label: `프로그램 ${i + 1} (${p.key}) — 대상`, multiline: false, default: p.target },
    { key: `program.${i}.duration`, section: "트레이닝", label: `프로그램 ${i + 1} — 단계/기간`, multiline: false, default: p.duration },
    { key: `program.${i}.desc`, section: "트레이닝", label: `프로그램 ${i + 1} — 설명`, multiline: true, default: p.desc },
    { key: `program.${i}.points`, section: "트레이닝", label: `프로그램 ${i + 1} — 항목`, multiline: true, list: true, default: p.points.join("\n") },
  ]),

  // 장학 (리드 + 상세 항목 + 신청 준비물)
  { key: "section.scholarshipTitle", section: "장학", label: "장학 제목", multiline: false, default: scholarship.title },
  { key: "section.scholarshipLead", section: "장학", label: "장학 리드", multiline: true, default: scholarship.lead },
  ...scholarship.points.flatMap((p, i) => [
    { key: `scholarship.point.${i}.title`, section: "장학", label: `항목 ${i + 1} — 제목`, multiline: false, default: p.title },
    { key: `scholarship.point.${i}.body`, section: "장학", label: `항목 ${i + 1} — 내용`, multiline: true, default: p.body },
  ]),
  { key: "scholarship.apply", section: "장학", label: "신청 시 준비물", multiline: true, list: true, default: scholarship.apply.join("\n") },

  // 홈 EXPLORE 카드 (카드별 제목·설명·항목)
  ...siteGuide.flatMap((g) => [
    { key: `guide.${g.label}.title`, section: "홈 EXPLORE 카드", label: `${g.label} 카드 — 제목`, multiline: false, default: g.title },
    { key: `guide.${g.label}.desc`, section: "홈 EXPLORE 카드", label: `${g.label} 카드 — 설명`, multiline: true, default: g.desc },
    { key: `guide.${g.label}.items`, section: "홈 EXPLORE 카드", label: `${g.label} 카드 — 항목`, multiline: true, list: true, default: g.items.join("\n") },
  ]),

  // 소개(About) 상세
  { key: "founding.title", section: "소개(About)", label: "설립 배경 — 제목", multiline: false, default: founding.title },
  { key: "founding.lead", section: "소개(About)", label: "설립 배경 — 리드", multiline: true, default: founding.lead },
  { key: "founding.paragraphs", section: "소개(About)", label: "설립 배경 — 본문 (빈 줄로 문단 구분)", multiline: true, paragraphs: true, default: founding.paragraphs.join(PARA) },
  { key: "whoWeAre.title", section: "소개(About)", label: "GCM은 어떤 곳인가 — 제목", multiline: false, default: whoWeAre.title },
  { key: "whoWeAre.lead", section: "소개(About)", label: "GCM은 어떤 곳인가 — 리드", multiline: true, default: whoWeAre.lead },
  ...whoWeAre.pillars.flatMap((p, i) => [
    { key: `whoWeAre.pillar.${i}.title`, section: "소개(About)", label: `핵심가치 ${i + 1} — 제목`, multiline: false, default: p.title },
    { key: `whoWeAre.pillar.${i}.body`, section: "소개(About)", label: `핵심가치 ${i + 1} — 내용`, multiline: true, default: p.body },
  ]),

  // 컨설팅 페이지 전문 (주요 헤딩·리드)
  { key: "cx.hero.title", section: "컨설팅 전문", label: "히어로 — 제목", multiline: true, default: cx.hero.title },
  { key: "cx.hero.sub", section: "컨설팅 전문", label: "히어로 — 설명", multiline: true, default: cx.hero.sub },
  { key: "cx.philosophy.title", section: "컨설팅 전문", label: "철학 — 제목", multiline: false, default: cx.philosophy.title },
  { key: "cx.philosophy.paragraphs", section: "컨설팅 전문", label: "철학 — 본문 (빈 줄로 문단 구분)", multiline: true, paragraphs: true, default: cx.philosophy.paragraphs.join(PARA) },
  { key: "cx.investment.title", section: "컨설팅 전문", label: "투자 — 제목", multiline: false, default: cx.investment.title },
  { key: "cx.investment.sub", section: "컨설팅 전문", label: "투자 — 설명", multiline: true, default: cx.investment.sub },
  { key: "cx.roleModels.title", section: "컨설팅 전문", label: "롤모델 — 제목", multiline: false, default: cx.roleModels.title },
  { key: "cx.roleModels.lead", section: "컨설팅 전문", label: "롤모델 — 리드", multiline: true, default: cx.roleModels.lead },
];

export function fieldFor(key: string): CmsField | undefined {
  return CMS_FIELDS.find((f) => f.key === key);
}

/** 편집 페이지 탭(섹션) 목록. slug 는 URL 파라미터로 사용. */
export const CMS_SECTIONS: { slug: string; label: string }[] = [
  { slug: "home", label: "홈" },
  { slug: "explore", label: "홈 EXPLORE 카드" },
  { slug: "director", label: "대표 원장 인사말" },
  { slug: "coach", label: "코치진" },
  { slug: "training", label: "트레이닝" },
  { slug: "scholarship", label: "장학" },
  { slug: "pages", label: "컨설팅·취미반" },
  { slug: "about", label: "소개(About)" },
  { slug: "consulting", label: "컨설팅 전문" },
];

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

/** 리스트 리졸브(줄바꿈 기준 분리, 항목당 한 줄). 한국어일 때만 오버라이드 적용. */
export function cmsList(
  map: Map<string, string>,
  key: string,
  fallback: readonly string[],
  ko: boolean,
): string[] {
  if (!ko) return [...fallback];
  const v = map.get(key);
  if (v == null) return [...fallback];
  const parts = v.split(/\n+/).map((s) => s.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [...fallback];
}
