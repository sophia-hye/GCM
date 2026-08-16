-- ============================================================
-- GCM 콘텐츠 오버라이드 (gcm_content) — 관리자가 웹에서 핵심 문구 수정 (한/영)
--   (key, locale) = 콘텐츠 식별자 + 언어, value = 덮어쓸 텍스트. 없으면 코드 기본값 사용.
--   이 블록만 SQL Editor 에 붙여넣어 단독 실행 가능.
-- ============================================================
create table if not exists public.gcm_content (
  key text not null,
  locale text not null default 'ko',
  value text not null,
  updated_at timestamptz not null default now(),
  primary key (key, locale)
);

-- 기존 DB(단일 key PK 구버전)를 이중언어로 업그레이드하려면 아래 3줄 실행:
--   alter table public.gcm_content add column if not exists locale text not null default 'ko';
--   alter table public.gcm_content drop constraint if exists gcm_content_pkey;
--   alter table public.gcm_content add primary key (key, locale);

alter table public.gcm_content enable row level security;
-- 공개: 누구나 조회(사이트 렌더용). 관리자: 전체 관리.
drop policy if exists "gcm_content_select_public" on public.gcm_content;
create policy "gcm_content_select_public" on public.gcm_content for select using (true);
drop policy if exists "gcm_content_admin_all" on public.gcm_content;
create policy "gcm_content_admin_all" on public.gcm_content for all
  using (public.is_gcm_admin()) with check (public.is_gcm_admin());
