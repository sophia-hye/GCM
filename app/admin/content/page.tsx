import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { CMS_FIELDS, CMS_SECTIONS } from "@/lib/cms";
import { ContentFieldForm } from "@/app/admin/content/ContentFieldForm";

export const metadata = { title: "콘텐츠 편집 | GCM Admin" };

/** 현재 메뉴/서브메뉴 → 콘텐츠 편집 위치 매핑 (안내용) */
const MENU_MAP: { group: string; items: { label: string; where: string; href?: string }[] }[] = [
  {
    group: "Why GCM",
    items: [
      { label: "About", where: "편집기 · 소개(About) 탭", href: "/admin/content?tab=about" },
      { label: "대표원장 인사말", where: "편집기 · 대표 원장 인사말 탭", href: "/admin/content?tab=director" },
      { label: "Why Tennis", where: "코드 고정 (WhyTennisLeaders)" },
      { label: "Our Team (코치진)", where: "편집기 · 코치진 탭 (교육 코치진은 코드 고정)", href: "/admin/content?tab=coach" },
    ],
  },
  {
    group: "Who we are",
    items: [
      { label: "Players", where: "선수 관리", href: "/admin/players" },
      { label: "Amateurs", where: "편집기 · 컨설팅·취미반 탭(리드) · 상세는 코드", href: "/admin/content?tab=pages" },
      { label: "Kids", where: "코드 고정 (KidsBenefits · TennisCoreValues)" },
      { label: "Scholars", where: "편집기 · 장학 탭", href: "/admin/content?tab=scholarship" },
      { label: "Alumni Network", where: "코드 (준비중 페이지)" },
    ],
  },
  {
    group: "Our Story",
    items: [
      { label: "Testimonials", where: "이야기 게시판 (회원 작성·승인)", href: "/admin/voices" },
      { label: "Gallery", where: "갤러리 관리", href: "/admin/gallery" },
      { label: "Consulting", where: "편집기 · 컨설팅 전문 탭", href: "/admin/content?tab=consulting" },
    ],
  },
  {
    group: "Social Events",
    items: [
      { label: "GCM Festival at Hannam", where: "GCM Festival at Hannam 관리", href: "/admin/events" },
      { label: "Membership", where: "코드 (준비중 페이지)" },
    ],
  },
  {
    group: "Store",
    items: [
      { label: "GCM's Products", where: "GCM's Products 관리", href: "/admin/products" },
      { label: "Education Program", where: "프로그램(상점) 관리", href: "/admin/programs" },
    ],
  },
  {
    group: "홈 · 기타",
    items: [
      { label: "홈 (히어로·리드·CTA)", where: "편집기 · 홈 / 홈 EXPLORE 카드 탭", href: "/admin/content?tab=home" },
      { label: "트레이닝 시스템", where: "편집기 · 트레이닝 탭", href: "/admin/content?tab=training" },
      { label: "Contact FAQ", where: "FAQ 관리", href: "/admin/faq" },
      { label: "팝업", where: "팝업 관리", href: "/admin/popups" },
    ],
  },
];

export default async function AdminContentPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const active = CMS_SECTIONS.find((s) => s.slug === tab) ?? CMS_SECTIONS[0];

  const supabase = await createClient();
  const { data } = await supabase.from("gcm_content").select("key, value, locale");
  // `${locale}::${key}` 로 저장
  const overrides = new Map<string, string>(
    (data ?? []).map((r) => [`${r.locale === "en" ? "en" : "ko"}::${r.key}`, r.value]),
  );
  const koKey = (k: string) => `ko::${k}`;
  const enKey = (k: string) => `en::${k}`;

  const fields = CMS_FIELDS.filter((f) => f.section === active.label);
  const editedCount = (slugLabel: string) =>
    CMS_FIELDS.filter(
      (f) => f.section === slugLabel && (overrides.has(koKey(f.key)) || overrides.has(enKey(f.key))),
    ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">콘텐츠 편집</h1>
        <p className="mt-1 text-sm text-muted">
          섹션 탭을 선택해 핵심 문구를 수정합니다. 저장하면 사이트에 바로 반영됩니다. (한국어 기준)
        </p>
      </div>

      {/* 자주 헷갈리는 부분: 캠프·상품 등은 여기서 편집되지 않음 */}
      <div className="rounded-xl border border-court-bright/40 bg-court-bright/5 p-4 text-sm">
        <p className="font-semibold text-court-bright">
          여기서는 <b>고정 텍스트 문구</b>만 수정됩니다. 아래 항목은 전용 관리 페이지에서 수정하세요.
        </p>
        <ul className="mt-2 space-y-1 text-muted">
          <li>
            · Education Program <b className="text-ink">캠프</b>(하버드 여름 캠프 · 보스턴 겨울 스쿨링 등) 제목·설명·가격·사진 →{" "}
            <Link href="/admin/programs" className="font-semibold text-court hover:underline">
              프로그램 관리
            </Link>
            <span className="text-muted"> (콘텐츠 편집기의 “프로그램” 항목은 트레이닝 Kids/Junior/Pro 티어로, 캠프와 다릅니다)</span>
          </li>
          <li>
            · GCM&apos;s Products →{" "}
            <Link href="/admin/products" className="font-semibold text-court hover:underline">
              GCM&apos;s Products 관리
            </Link>
          </li>
          <li>
            · 갤러리 / 이벤트(Festival) / 팝업 / 선수 → 각 전용 관리 페이지 (아래 “메뉴별 안내” 참고)
          </li>
        </ul>
      </div>

      {/* 현재 메뉴/서브메뉴 구조 → 콘텐츠 편집 위치 안내 */}
      <details className="rounded-2xl border border-line bg-card/50 p-5">
        <summary className="cursor-pointer text-sm font-semibold text-ink">
          메뉴별 콘텐츠 편집 위치 안내 (현재 메뉴 구조 기준)
        </summary>
        <p className="mt-3 text-xs text-muted">
          이 편집기는 <b>텍스트 문구</b>만 수정합니다. 사진·가격·목록형 콘텐츠는 각 전용 관리 페이지에서,
          일부 신규 페이지는 코드에 고정되어 있습니다.
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_MAP.map((g) => (
            <div key={g.group}>
              <p className="text-xs font-bold uppercase tracking-wider text-court-bright">{g.group}</p>
              <ul className="mt-2 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it.label} className="text-xs leading-relaxed">
                    <span className="font-semibold text-ink">{it.label}</span>
                    <span className="text-muted"> — </span>
                    {it.href ? (
                      <Link href={it.href} className="font-medium text-court hover:underline">
                        {it.where}
                      </Link>
                    ) : (
                      <span className="text-muted">{it.where}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>

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
            field={{ key: f.key, label: f.label, multiline: f.multiline, paragraphs: f.paragraphs, list: f.list }}
            koValue={overrides.get(koKey(f.key)) ?? f.default}
            enValue={overrides.get(enKey(f.key)) ?? f.defaultEn}
            koOverridden={overrides.has(koKey(f.key))}
            enOverridden={overrides.has(enKey(f.key))}
          />
        ))}
      </div>
    </div>
  );
}
