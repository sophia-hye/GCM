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
  role text not null default 'student' check (role in ('student', 'parent', 'admin')),
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
  memo text,
  created_at timestamptz not null default now()
);
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
-- 관리자 지정 (시드/가입 후 1회):
-- update public.gcm_profiles set role = 'admin' where phone = '01000000000';
-- ============================================================
