-- ============================================================
-- GCM — Supabase schema (gcm_ 테이블 정의 + 크로스 로그인 트리거)
-- eqüre와 같은 Supabase 프로젝트(=같은 auth.users)를 공유한다.
-- equre_ 테이블 정의/RLS 는 eqüre 레포의 supabase/schema.sql 이 관리한다.
--
-- 가입 트리거는 이름을 분리(on_auth_user_created_gcm)하고 source 로 걸러서
-- eqüre 트리거(on_auth_user_created_equre)와 한 auth.users 에서 공존한다.
-- → GCM 가입(source != 'equre')이면 gcm_profiles(풀) + equre_profiles(최소행)을
--   함께 만들어, 어디서 가입하든 양쪽에서 로그인 가능(크로스 로그인).
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행.
-- ============================================================

-- 0) 정리: 구버전 + 이전 통합본 + gcm_ 재생성 (equre_ 는 건드리지 않음)
drop trigger if exists on_auth_user_created on auth.users;       -- 이전 통합 트리거 제거
drop trigger if exists on_auth_user_created_gcm on auth.users;
drop function if exists public.handle_new_user cascade;          -- 이전 통합 함수
drop function if exists public.gcm_handle_new_user cascade;
drop function if exists public.is_admin cascade;
drop function if exists public.is_gcm_admin cascade;
drop table if exists public.gcm_checkins cascade;
drop table if exists public.gcm_bookings cascade;
drop table if exists public.gcm_progress cascade;
drop table if exists public.gcm_inquiries cascade;
drop table if exists public.gcm_players cascade;
drop table if exists public.gcm_profiles cascade;
-- 접두어 없던 구버전(혹시 남아있으면)
drop table if exists public.bookings cascade;
drop table if exists public.checkins cascade;
drop table if exists public.progress cascade;
drop table if exists public.inquiries cascade;
drop table if exists public.players cascade;
drop table if exists public.profiles cascade;

-- ============================================================
-- 1) GCM 테이블 (gcm_ 접두어)
-- ============================================================
create table public.gcm_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'student' check (role in ('student', 'parent', 'amateur', 'admin')),
  name text not null default '',
  phone text,
  email text,
  parent_id uuid references public.gcm_profiles (id),
  source text not null default 'gcm',
  created_at timestamptz not null default now()
);
create unique index gcm_profiles_phone_uniq
  on public.gcm_profiles (phone) where phone is not null and phone <> '';
alter table public.gcm_profiles enable row level security;

create or replace function public.is_gcm_admin()
returns boolean language sql security definer set search_path = public as $$
  select exists (select 1 from public.gcm_profiles where id = auth.uid() and role = 'admin');
$$;

create policy "gcm_profiles_select_own" on public.gcm_profiles for select using (auth.uid() = id);
create policy "gcm_profiles_update_own" on public.gcm_profiles for update using (auth.uid() = id);
create policy "gcm_profiles_admin_all" on public.gcm_profiles for all using (public.is_gcm_admin());

create table public.gcm_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'closed')),
  created_at timestamptz not null default now()
);
alter table public.gcm_inquiries enable row level security;
create policy "gcm_inquiries_insert_public" on public.gcm_inquiries for insert with check (true);
create policy "gcm_inquiries_admin_all" on public.gcm_inquiries for all using (public.is_gcm_admin());

create table public.gcm_players (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  grad_year text,
  utr text,
  track text check (track in ('professional', 'college')),
  result text,
  video_url text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.gcm_players enable row level security;
create policy "gcm_players_select_published" on public.gcm_players for select using (published = true);
create policy "gcm_players_admin_all" on public.gcm_players for all using (public.is_gcm_admin());

create table public.gcm_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.gcm_profiles (id) on delete cascade,
  stage text not null default 'foundation'
    check (stage in ('foundation', 'development', 'junior_elite', 'professional')),
  track text not null default 'undecided'
    check (track in ('undecided', 'professional', 'college')),
  current_utr text,
  target_utr text,
  note text,
  updated_at timestamptz not null default now(),
  unique (user_id)
);
alter table public.gcm_progress enable row level security;
create policy "gcm_progress_select_own" on public.gcm_progress for select using (auth.uid() = user_id);
create policy "gcm_progress_admin_all" on public.gcm_progress for all using (public.is_gcm_admin());

create table public.gcm_bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.gcm_profiles (id) on delete cascade,
  type text not null check (type in ('consulting', 'lesson', 'tournament', 'showcase')),
  scheduled_at timestamptz,
  status text not null default 'requested'
    check (status in ('requested', 'confirmed', 'done', 'cancelled')),
  coach text,
  memo text,
  created_at timestamptz not null default now()
);
-- 기존 DB에 컬럼 추가(이미 테이블이 있는 경우):
--   alter table public.gcm_bookings add column if not exists coach text;
alter table public.gcm_bookings enable row level security;
create policy "gcm_bookings_select_own" on public.gcm_bookings for select using (auth.uid() = user_id);
create policy "gcm_bookings_insert_own" on public.gcm_bookings for insert with check (auth.uid() = user_id);
create policy "gcm_bookings_admin_all" on public.gcm_bookings for all using (public.is_gcm_admin());

create table public.gcm_checkins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.gcm_profiles (id) on delete cascade,
  mood_score int not null check (mood_score between 1 and 5),
  note text,
  created_at timestamptz not null default now()
);
alter table public.gcm_checkins enable row level security;
create index gcm_checkins_user_created_idx on public.gcm_checkins (user_id, created_at desc);
create policy "gcm_checkins_select_own" on public.gcm_checkins for select using (auth.uid() = user_id);
create policy "gcm_checkins_insert_own" on public.gcm_checkins for insert with check (auth.uid() = user_id);
create policy "gcm_checkins_admin_all" on public.gcm_checkins for all using (public.is_gcm_admin());

-- ============================================================
-- 2) GCM 가입 트리거 — GCM 가입(source != 'equre')일 때
--    gcm_profiles(풀 데이터) + equre_profiles(최소행)를 함께 생성한다.
--    → GCM 가입자도 equre 에서 바로 로그인 가능(크로스 로그인).
--    eqüre 가입(source='equre')은 eqüre 트리거가 대칭으로 처리.
--    (트리거 이름이 달라 한 auth.users 에서 공존)
-- ============================================================
create or replace function public.gcm_handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if coalesce(new.raw_user_meta_data ->> 'source', 'gcm') <> 'equre' then
    -- 자기 쪽: 풀 데이터
    insert into public.gcm_profiles (id, name, phone, email, role, source)
    values (
      new.id,
      coalesce(new.raw_user_meta_data ->> 'name', ''),
      new.raw_user_meta_data ->> 'phone',
      coalesce(new.raw_user_meta_data ->> 'email', new.email),
      coalesce(new.raw_user_meta_data ->> 'role', 'student'),
      'gcm'
    )
    on conflict (id) do nothing;

    -- 상대 쪽(equre): 크로스 로그인용 최소행
    insert into public.equre_profiles (id, email, name, source)
    values (
      new.id,
      coalesce(new.raw_user_meta_data ->> 'email', new.email),
      coalesce(new.raw_user_meta_data ->> 'name', ''),
      'gcm'
    )
    on conflict (id) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_gcm on auth.users;
create trigger on_auth_user_created_gcm
  after insert on auth.users
  for each row execute function public.gcm_handle_new_user();

-- ============================================================
-- 3) 갤러리 (gcm_gallery) — 관리자가 글 + 이미지 게시
--    이미지는 Storage 'gallery' 버킷(public)에 업로드하고 URL 배열로 보관.
--    이 블록만 SQL Editor 에 붙여넣어 단독 실행 가능(다른 테이블 영향 없음).
-- ============================================================
create table if not exists public.gcm_gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text,
  images text[] not null default '{}',
  published boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.gcm_gallery enable row level security;
create index if not exists gcm_gallery_created_idx on public.gcm_gallery (created_at desc);
drop policy if exists "gcm_gallery_select_published" on public.gcm_gallery;
create policy "gcm_gallery_select_published" on public.gcm_gallery for select using (published = true);
drop policy if exists "gcm_gallery_admin_all" on public.gcm_gallery;
create policy "gcm_gallery_admin_all" on public.gcm_gallery for all using (public.is_gcm_admin());

-- Storage: 'gallery' 버킷(public)은 앱에서 생성됨. 이미지 업로드는 service_role 로 수행(RLS 우회).

-- ============================================================
-- 4) 기존 DB에 'amateur' 역할 추가 (테이블 재생성 없이 단독 실행 가능)
-- ============================================================
alter table public.gcm_profiles drop constraint if exists gcm_profiles_role_check;
alter table public.gcm_profiles
  add constraint gcm_profiles_role_check
  check (role in ('student', 'parent', 'amateur', 'admin'));

-- ============================================================
-- 관리자 지정 (시드/가입 후 1회):
-- update public.gcm_profiles set role = 'admin' where phone = '01000000000';
-- 또는 이메일로: update public.gcm_profiles set role = 'admin' where email = 'you@example.com';
-- ============================================================

-- ─────────────────────────────────────────────────────────────
-- 결제 (토스페이먼츠) — 동호인 코트 결제 / 컨설팅 예약금
-- 금액은 서버가 결정하며, 승인 시 토스 confirm 결과와 대조한다.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.gcm_payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.gcm_profiles (id) on delete set null,
  kind text not null check (kind in ('consulting_deposit', 'court')),
  amount integer not null check (amount > 0),
  order_id text not null unique,
  order_name text not null,
  status text not null default 'ready'
    check (status in ('ready', 'paid', 'cancelled', 'failed')),
  payment_key text,
  method text,
  meta jsonb not null default '{}'::jsonb,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.gcm_payments enable row level security;
-- 본인 결제만 조회
create policy "gcm_payments_select_own" on public.gcm_payments
  for select using (auth.uid() = user_id);
-- 관리자 전체 조회 (is_gcm_admin() 재사용)
create policy "gcm_payments_admin_all" on public.gcm_payments
  for all using (public.is_gcm_admin()) with check (public.is_gcm_admin());
