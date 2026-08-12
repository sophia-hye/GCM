-- ============================================================
-- GCM 팝업 (gcm_popups) — 관리자가 이미지 팝업을 최대 3개 게시
--   이미지는 기존 'gallery' 스토리지 버킷(public)에 popups/ 경로로 업로드.
--   이 블록만 SQL Editor 에 붙여넣어 단독 실행 가능.
-- ============================================================
create table if not exists public.gcm_popups (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  link_url text,                       -- (선택) 팝업 클릭 시 이동할 주소
  active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
alter table public.gcm_popups enable row level security;
create index if not exists gcm_popups_active_idx on public.gcm_popups (active, sort_order);
-- 공개: 활성 팝업만 조회. 관리자: 전체 관리.
drop policy if exists "gcm_popups_select_active" on public.gcm_popups;
create policy "gcm_popups_select_active" on public.gcm_popups for select using (active = true);
drop policy if exists "gcm_popups_admin_all" on public.gcm_popups;
create policy "gcm_popups_admin_all" on public.gcm_popups for all
  using (public.is_gcm_admin()) with check (public.is_gcm_admin());
