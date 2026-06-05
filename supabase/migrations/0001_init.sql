-- GCM 아카데미 스키마 (Phase 2 인증/회원/문의 + Phase 3 진도/예약)
-- 멱등(idempotent) 스크립트: 여러 번 실행해도 안전하다.
-- Supabase SQL Editor 또는 CLI(supabase db push)로 실행.

-- =========================================================
-- 1) 테이블 (없으면 생성)
-- =========================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'student',
  name text not null default '',
  phone text,
  parent_id uuid references public.profiles (id),
  created_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  grad_year text,
  utr text,
  track text,
  result text,
  video_url text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  stage text not null default 'foundation',
  track text not null default 'undecided',
  current_utr text,
  target_utr text,
  note text,
  updated_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  type text not null,
  scheduled_at timestamptz,
  status text not null default 'requested',
  memo text,
  created_at timestamptz not null default now()
);

-- =========================================================
-- 2) 컬럼/제약 보정 (기존 테이블이 구버전이어도 맞춰준다)
-- =========================================================
-- 누락 컬럼 추가(구버전 호환)
alter table public.profiles add column if not exists role text not null default 'student';
alter table public.profiles add column if not exists name text not null default '';
alter table public.profiles add column if not exists phone text;
alter table public.profiles add column if not exists parent_id uuid references public.profiles (id);

alter table public.progress add column if not exists current_utr text;
alter table public.progress add column if not exists target_utr text;
alter table public.progress add column if not exists note text;

-- name NULL 보정 후 NOT NULL/기본값 설정
update public.profiles set name = '' where name is null;
alter table public.profiles alter column name set default '';
alter table public.profiles alter column name set not null;

-- CHECK 제약 (이름 지정 후 재생성으로 멱등 처리)
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('student', 'parent', 'admin'));

alter table public.inquiries drop constraint if exists inquiries_status_check;
alter table public.inquiries add constraint inquiries_status_check
  check (status in ('new', 'contacted', 'closed'));

alter table public.players drop constraint if exists players_track_check;
alter table public.players add constraint players_track_check
  check (track is null or track in ('professional', 'college'));

alter table public.progress drop constraint if exists progress_stage_check;
alter table public.progress add constraint progress_stage_check
  check (stage in ('foundation', 'development', 'junior_elite', 'professional'));

alter table public.progress drop constraint if exists progress_track_check;
alter table public.progress add constraint progress_track_check
  check (track in ('undecided', 'professional', 'college'));

alter table public.bookings drop constraint if exists bookings_type_check;
alter table public.bookings add constraint bookings_type_check
  check (type in ('consulting', 'lesson', 'tournament', 'showcase'));

alter table public.bookings drop constraint if exists bookings_status_check;
alter table public.bookings add constraint bookings_status_check
  check (status in ('requested', 'confirmed', 'done', 'cancelled'));

-- 전화번호 유니크(빈값/NULL 제외 partial index) + 진도 1인 1행
alter table public.profiles drop constraint if exists profiles_phone_key;
create unique index if not exists profiles_phone_uniq
  on public.profiles (phone) where phone is not null and phone <> '';

create unique index if not exists progress_user_uniq
  on public.progress (user_id);

-- =========================================================
-- 3) RLS 활성화 (반복 안전)
-- =========================================================
alter table public.profiles  enable row level security;
alter table public.inquiries enable row level security;
alter table public.players   enable row level security;
alter table public.progress  enable row level security;
alter table public.bookings  enable row level security;

-- 관리자 판별 helper
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- =========================================================
-- 4) 정책 (구/신 이름 모두 drop 후 재생성 → 멱등)
-- =========================================================
-- profiles
drop policy if exists profiles_select_own   on public.profiles;
drop policy if exists profiles_update_own   on public.profiles;
drop policy if exists profiles_select_admin on public.profiles;
drop policy if exists profiles_admin_all    on public.profiles;
create policy profiles_select_own on public.profiles for select using (auth.uid() = id);
create policy profiles_update_own on public.profiles for update using (auth.uid() = id);
create policy profiles_admin_all  on public.profiles for all    using (public.is_admin());

-- inquiries
drop policy if exists inquiries_insert_public on public.inquiries;
drop policy if exists inquiries_select_admin  on public.inquiries;
drop policy if exists inquiries_admin_all      on public.inquiries;
create policy inquiries_insert_public on public.inquiries for insert with check (true);
create policy inquiries_admin_all     on public.inquiries for all    using (public.is_admin());

-- players
drop policy if exists players_select_published on public.players;
drop policy if exists players_all_admin        on public.players;
drop policy if exists players_admin_all        on public.players;
create policy players_select_published on public.players for select using (published = true);
create policy players_admin_all        on public.players for all    using (public.is_admin());

-- progress
drop policy if exists progress_select_own on public.progress;
drop policy if exists progress_admin_all  on public.progress;
create policy progress_select_own on public.progress for select using (auth.uid() = user_id);
create policy progress_admin_all  on public.progress for all    using (public.is_admin());

-- bookings
drop policy if exists bookings_select_own on public.bookings;
drop policy if exists bookings_insert_own on public.bookings;
drop policy if exists bookings_admin_all  on public.bookings;
create policy bookings_select_own on public.bookings for select using (auth.uid() = user_id);
create policy bookings_insert_own on public.bookings for insert with check (auth.uid() = user_id);
create policy bookings_admin_all  on public.bookings for all    using (public.is_admin());

-- =========================================================
-- 5) 신규 가입 시 프로필 자동 생성
-- =========================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, name, phone, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', ''),
    coalesce(new.raw_user_meta_data ->> 'phone', ''),
    coalesce(new.raw_user_meta_data ->> 'role', 'student')
  )
  on conflict (id) do update
    set name  = excluded.name,
        phone = excluded.phone,
        role  = excluded.role;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
