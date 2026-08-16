import { cache } from "react";
import { getDict } from "@/lib/site-content";
import { getConsultingExtra } from "@/lib/consulting-content";
import { educationCoaches } from "@/lib/education-coaches";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * 콘텐츠 편집(CMS) 레지스트리 — 이중언어(한/영) 오버라이드.
 * 각 필드는 코드 기본값(default=한국어, defaultEn=영어)을 가지며,
 * gcm_content 에 (key, locale) 오버라이드가 있으면 해당 언어 렌더에 적용된다.
 * 여러 문단 필드(paragraphs)는 문단 사이를 '빈 줄'로, 리스트(list)는 줄바꿈으로 구분한다.
 */
const K = getDict("ko");
const E = getDict("en");
const cxK = getConsultingExtra("ko");
const cxE = getConsultingExtra("en");

export type CmsField = {
  key: string;
  section: string;
  label: string;
  multiline: boolean;
  paragraphs?: boolean; // true 면 빈 줄로 문단 분리
  list?: boolean; // true 면 한 줄에 하나씩(항목 리스트)
  default: string; // 한국어 기본값
  defaultEn: string; // 영어 기본값
};

const PARA = "\n\n";
const j = (a?: readonly string[]) => (a ?? []).join(PARA);
const jn = (a?: readonly string[]) => (a ?? []).join("\n");
const s = (v?: string) => v ?? "";

const dK = K.directorMessage;
const dE = E.directorMessage;

export const CMS_FIELDS: CmsField[] = [
  { key: "director.eyebrow", section: "대표 원장 인사말", label: "상단 영문 라벨", multiline: false, default: s(dK.eyebrow), defaultEn: s(dE.eyebrow) },
  { key: "director.title", section: "대표 원장 인사말", label: "제목", multiline: false, default: s(dK.title), defaultEn: s(dE.title) },
  { key: "director.homeSummary", section: "대표 원장 인사말", label: "홈 요약 인사말 (문단은 빈 줄로 구분)", multiline: true, paragraphs: true, default: j(dK.homeSummary), defaultEn: j(dE.homeSummary) },
  { key: "director.before", section: "대표 원장 인사말", label: "소개 페이지 인사말 — 앞부분 (빈 줄로 문단 구분)", multiline: true, paragraphs: true, default: j(dK.before), defaultEn: j(dE.before) },
  { key: "director.quote", section: "대표 원장 인사말", label: "인용 문구", multiline: true, default: s(dK.quote), defaultEn: s(dE.quote) },
  { key: "director.after", section: "대표 원장 인사말", label: "소개 페이지 인사말 — 뒷부분 (빈 줄로 문단 구분)", multiline: true, paragraphs: true, default: j(dK.after), defaultEn: j(dE.after) },
  { key: "director.signature", section: "대표 원장 인사말", label: "서명", multiline: false, default: s(dK.signature), defaultEn: s(dE.signature) },

  ...K.heroSlides.flatMap((slide, i) => {
    const e = E.heroSlides[i] ?? slide;
    return [
      { key: `hero.${i}.headline`, section: "홈", label: `슬라이드 ${i + 1} — 헤드라인`, multiline: false, default: s(slide.headline), defaultEn: s(e.headline) },
      { key: `hero.${i}.accent`, section: "홈", label: `슬라이드 ${i + 1} — 강조어(이탤릭)`, multiline: false, default: s(slide.accent), defaultEn: s(e.accent) },
      { key: `hero.${i}.sub`, section: "홈", label: `슬라이드 ${i + 1} — 설명 문구`, multiline: true, default: s(slide.sub), defaultEn: s(e.sub) },
    ];
  }),

  ...K.team.flatMap((m, i) => {
    const e = E.team[i] ?? m;
    return [
      { key: `coach.${i}.name`, section: "코치진", label: `코치 ${i + 1} — 이름`, multiline: false, default: s(m.name), defaultEn: s(e.name) },
      { key: `coach.${i}.role`, section: "코치진", label: `코치 ${i + 1} — 직함`, multiline: false, default: s(m.role), defaultEn: s(e.role) },
      { key: `coach.${i}.bio`, section: "코치진", label: `코치 ${i + 1} — 소개`, multiline: true, default: s(m.bio), defaultEn: s(e.bio) },
    ];
  }),

  { key: "section.siteGuideLead", section: "홈", label: "둘러보기(Explore) 리드", multiline: true, default: s(K.siteGuideLead), defaultEn: s(E.siteGuideLead) },
  { key: "section.programsLead", section: "홈", label: "트레이닝 시스템 리드", multiline: true, default: s(K.programsLead), defaultEn: s(E.programsLead) },
  { key: "section.ctaTitle", section: "홈", label: "하단 CTA 제목", multiline: false, default: s(K.faqContact.title), defaultEn: s(E.faqContact.title) },
  { key: "section.ctaSub", section: "홈", label: "하단 CTA 설명", multiline: true, default: s(K.faqContact.sub), defaultEn: s(E.faqContact.sub) },

  { key: "section.teamLead", section: "코치진", label: "코치진 섹션 리드", multiline: true, default: s(K.teamLead), defaultEn: s(E.teamLead) },

  ...educationCoaches.flatMap((c, i) => [
    { key: `eduCoach.${i}.title`, section: "코치진", label: `교육 코치 ${i + 1} — 이름`, multiline: false, default: c.title.ko, defaultEn: c.title.en },
    { key: `eduCoach.${i}.desc`, section: "코치진", label: `교육 코치 ${i + 1} — 설명`, multiline: true, default: c.desc.ko, defaultEn: c.desc.en },
    { key: `eduCoach.${i}.points`, section: "코치진", label: `교육 코치 ${i + 1} — 항목`, multiline: true, list: true, default: c.points.map((p) => p.ko).join("\n"), defaultEn: c.points.map((p) => p.en).join("\n") },
  ]),

  { key: "section.consultingTitle", section: "컨설팅·취미반", label: "컨설팅 제목", multiline: false, default: s(K.consulting.title), defaultEn: s(E.consulting.title) },
  { key: "section.consultingLead", section: "컨설팅·취미반", label: "컨설팅 리드", multiline: true, default: s(K.consulting.lead), defaultEn: s(E.consulting.lead) },
  { key: "section.recreationalLead", section: "컨설팅·취미반", label: "키즈·취미반 리드", multiline: true, default: s(K.recreational.lead), defaultEn: s(E.recreational.lead) },

  ...K.programs.flatMap((p, i) => {
    const e = E.programs[i] ?? p;
    return [
      { key: `program.${i}.target`, section: "트레이닝", label: `프로그램 ${i + 1} (${p.key}) — 대상`, multiline: false, default: s(p.target), defaultEn: s(e.target) },
      { key: `program.${i}.duration`, section: "트레이닝", label: `프로그램 ${i + 1} — 단계/기간`, multiline: false, default: s(p.duration), defaultEn: s(e.duration) },
      { key: `program.${i}.desc`, section: "트레이닝", label: `프로그램 ${i + 1} — 설명`, multiline: true, default: s(p.desc), defaultEn: s(e.desc) },
      { key: `program.${i}.points`, section: "트레이닝", label: `프로그램 ${i + 1} — 항목`, multiline: true, list: true, default: jn(p.points), defaultEn: jn(e.points) },
    ];
  }),

  { key: "section.scholarshipTitle", section: "장학", label: "장학 제목", multiline: false, default: s(K.scholarship.title), defaultEn: s(E.scholarship.title) },
  { key: "section.scholarshipLead", section: "장학", label: "장학 리드", multiline: true, default: s(K.scholarship.lead), defaultEn: s(E.scholarship.lead) },
  ...K.scholarship.points.flatMap((p, i) => {
    const e = E.scholarship.points[i] ?? p;
    return [
      { key: `scholarship.point.${i}.title`, section: "장학", label: `항목 ${i + 1} — 제목`, multiline: false, default: s(p.title), defaultEn: s(e.title) },
      { key: `scholarship.point.${i}.body`, section: "장학", label: `항목 ${i + 1} — 내용`, multiline: true, default: s(p.body), defaultEn: s(e.body) },
    ];
  }),
  { key: "scholarship.apply", section: "장학", label: "신청 시 준비물", multiline: true, list: true, default: jn(K.scholarship.apply), defaultEn: jn(E.scholarship.apply) },

  ...K.siteGuide.flatMap((g, i) => {
    const e = E.siteGuide[i] ?? g;
    return [
      { key: `guide.${g.label}.title`, section: "홈 EXPLORE 카드", label: `${g.label} 카드 — 제목`, multiline: false, default: s(g.title), defaultEn: s(e.title) },
      { key: `guide.${g.label}.desc`, section: "홈 EXPLORE 카드", label: `${g.label} 카드 — 설명`, multiline: true, default: s(g.desc), defaultEn: s(e.desc) },
      { key: `guide.${g.label}.items`, section: "홈 EXPLORE 카드", label: `${g.label} 카드 — 항목`, multiline: true, list: true, default: jn(g.items), defaultEn: jn(e.items) },
    ];
  }),

  { key: "founding.title", section: "소개(About)", label: "설립 배경 — 제목", multiline: false, default: s(K.founding.title), defaultEn: s(E.founding.title) },
  { key: "founding.lead", section: "소개(About)", label: "설립 배경 — 리드", multiline: true, default: s(K.founding.lead), defaultEn: s(E.founding.lead) },
  { key: "founding.paragraphs", section: "소개(About)", label: "설립 배경 — 본문 (빈 줄로 문단 구분)", multiline: true, paragraphs: true, default: j(K.founding.paragraphs), defaultEn: j(E.founding.paragraphs) },
  { key: "whoWeAre.title", section: "소개(About)", label: "GCM은 어떤 곳인가 — 제목", multiline: false, default: s(K.whoWeAre.title), defaultEn: s(E.whoWeAre.title) },
  { key: "whoWeAre.lead", section: "소개(About)", label: "GCM은 어떤 곳인가 — 리드", multiline: true, default: s(K.whoWeAre.lead), defaultEn: s(E.whoWeAre.lead) },
  ...K.whoWeAre.pillars.flatMap((p, i) => {
    const e = E.whoWeAre.pillars[i] ?? p;
    return [
      { key: `whoWeAre.pillar.${i}.title`, section: "소개(About)", label: `핵심가치 ${i + 1} — 제목`, multiline: false, default: s(p.title), defaultEn: s(e.title) },
      { key: `whoWeAre.pillar.${i}.body`, section: "소개(About)", label: `핵심가치 ${i + 1} — 내용`, multiline: true, default: s(p.body), defaultEn: s(e.body) },
    ];
  }),

  { key: "cx.hero.title", section: "컨설팅 전문", label: "히어로 — 제목", multiline: true, default: s(cxK.hero.title), defaultEn: s(cxE.hero.title) },
  { key: "cx.hero.sub", section: "컨설팅 전문", label: "히어로 — 설명", multiline: true, default: s(cxK.hero.sub), defaultEn: s(cxE.hero.sub) },
  { key: "cx.philosophy.title", section: "컨설팅 전문", label: "철학 — 제목", multiline: false, default: s(cxK.philosophy.title), defaultEn: s(cxE.philosophy.title) },
  { key: "cx.philosophy.paragraphs", section: "컨설팅 전문", label: "철학 — 본문 (빈 줄로 문단 구분)", multiline: true, paragraphs: true, default: j(cxK.philosophy.paragraphs), defaultEn: j(cxE.philosophy.paragraphs) },
  { key: "cx.investment.title", section: "컨설팅 전문", label: "투자 — 제목", multiline: false, default: s(cxK.investment.title), defaultEn: s(cxE.investment.title) },
  { key: "cx.investment.sub", section: "컨설팅 전문", label: "투자 — 설명", multiline: true, default: s(cxK.investment.sub), defaultEn: s(cxE.investment.sub) },
  { key: "cx.roleModels.title", section: "컨설팅 전문", label: "롤모델 — 제목", multiline: false, default: s(cxK.roleModels.title), defaultEn: s(cxE.roleModels.title) },
  { key: "cx.roleModels.lead", section: "컨설팅 전문", label: "롤모델 — 리드", multiline: true, default: s(cxK.roleModels.lead), defaultEn: s(cxE.roleModels.lead) },
];

export function fieldFor(key: string): CmsField | undefined {
  return CMS_FIELDS.find((f) => f.key === key);
}

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

/** 오버라이드 키 조합: `${locale}::${key}` */
function ck(locale: "ko" | "en", key: string) {
  return `${locale}::${key}`;
}

/** 오버라이드 맵을 한 번만 조회(요청 단위 캐시). 키는 `${locale}::${key}`. */
export const getContentMap = cache(async (): Promise<Map<string, string>> => {
  const map = new Map<string, string>();
  if (!isSupabaseConfigured()) return map;
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("gcm_content").select("key, value, locale");
    if (error) {
      // 구버전(locale 컬럼 없음) 하위호환 — 전부 한국어 오버라이드로 취급
      const { data: legacy } = await supabase.from("gcm_content").select("key, value");
      for (const row of legacy ?? []) map.set(ck("ko", row.key), row.value);
      return map;
    }
    for (const row of data ?? []) {
      const locale = row.locale === "en" ? "en" : "ko";
      map.set(ck(locale, row.key), row.value);
    }
  } catch {
    // 테이블 미생성 등 — 기본값 사용
  }
  return map;
});

/** 단일 텍스트 리졸브. 현재 언어의 오버라이드가 있으면 적용. */
export function cmsText(map: Map<string, string>, key: string, fallback: string, ko: boolean): string {
  return map.get(ck(ko ? "ko" : "en", key)) ?? fallback;
}

/** 문단 배열 리졸브(빈 줄 기준 분리). */
export function cmsParas(map: Map<string, string>, key: string, fallback: string[], ko: boolean): string[] {
  const v = map.get(ck(ko ? "ko" : "en", key));
  if (v == null) return fallback;
  const parts = v.split(/\n{2,}/).map((x) => x.trim()).filter(Boolean);
  return parts.length > 0 ? parts : fallback;
}

/** 리스트 리졸브(줄바꿈 기준 분리, 항목당 한 줄). */
export function cmsList(
  map: Map<string, string>,
  key: string,
  fallback: readonly string[],
  ko: boolean,
): string[] {
  const v = map.get(ck(ko ? "ko" : "en", key));
  if (v == null) return [...fallback];
  const parts = v.split(/\n+/).map((x) => x.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [...fallback];
}
