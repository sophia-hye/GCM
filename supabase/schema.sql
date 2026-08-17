-- ============================================================
-- GCM — Supabase schema (GCM 전용 프로젝트)
-- ※ 이 프로젝트에는 gcm_ 테이블만 존재한다.
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행.
-- ============================================================

-- 0) 정리: 구버전 + 이전 통합본 + gcm_ 재생성
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
  role text not null default 'student' check (role in ('student', 'parent', 'amateur', 'others', 'admin')),
  name text not null default '',
  phone text,
  email text,
  parent_id uuid references public.gcm_profiles (id),
  source text not null default 'gcm',
  approved boolean not null default false, -- 관리자 승인된 우리팀 선수만 매치 셀프 피드백 작성 가능
  gender text check (gender in ('male', 'female')), -- 가입 시 직접 입력(소셜 미제공 대비)
  birth_date date,
  created_at timestamptz not null default now()
);
-- 기존 DB:
--   alter table public.gcm_profiles add column if not exists approved boolean not null default false;
--   alter table public.gcm_profiles add column if not exists gender text check (gender in ('male','female'));
--   alter table public.gcm_profiles add column if not exists birth_date date;
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
  image text,
  bio text,
  birthday text,
  birthplace text,
  plays text,
  backhand text,
  joined_date text,
  sort_order int not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now()
);
-- 기존 DB(테이블이 이미 있는 경우) 아래를 실행:
--   alter table public.gcm_players add column if not exists image text;
--   alter table public.gcm_players add column if not exists bio text;
--   alter table public.gcm_players add column if not exists sort_order int not null default 0;
--   alter table public.gcm_players add column if not exists birthday text;
--   alter table public.gcm_players add column if not exists birthplace text;
--   alter table public.gcm_players add column if not exists plays text;
--   alter table public.gcm_players add column if not exists backhand text;
--   alter table public.gcm_players add column if not exists joined_date text;
alter table public.gcm_players enable row level security;
create index if not exists gcm_players_order_idx on public.gcm_players (sort_order asc, created_at desc);
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
-- 2) GCM 가입 트리거 — auth.users insert 시 gcm_profiles(풀 데이터)만 생성한다.
-- ============================================================
create or replace function public.gcm_handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.gcm_profiles (
    id, name, phone, email, role, source, gender, birth_date
  )
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', ''),
    new.raw_user_meta_data ->> 'phone',
    coalesce(new.raw_user_meta_data ->> 'email', new.email),
    coalesce(new.raw_user_meta_data ->> 'role', 'student'),
    'gcm',
    nullif(new.raw_user_meta_data ->> 'gender', ''),
    (nullif(new.raw_user_meta_data ->> 'birth_date', ''))::date
  )
  on conflict (id) do nothing;
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
  check (role in ('student', 'parent', 'amateur', 'others', 'admin'));

-- ============================================================
-- 관리자 지정 (시드/가입 후 1회):
-- update public.gcm_profiles set role = 'admin' where phone = '01000000000';
-- 또는 이메일로: update public.gcm_profiles set role = 'admin' where email = 'you@example.com';
-- ============================================================

-- ============================================================
-- 매치피드백 (gcm_match_analyses)
--   선수가 시합 후 스스로 기록 → 코치(관리자)가 확인하고 피드백.
--   선수는 '본인 것만' 작성/조회(다른 선수 것은 못 봄), 관리자만 전체 조회/피드백.
-- ============================================================
create table if not exists public.gcm_match_analyses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.gcm_profiles (id) on delete cascade,
  category text not null default 'tournament'
    check (category in ('tournament', 'training')), -- 토너먼트(공식 시합) / 정규 훈련
  match_date date not null,
  opponent text,                -- 토너먼트: 대회명 / 정규 훈련: 훈련 내용·주제
  final_result text,            -- 토너먼트 최종성적(정규 훈련은 미사용)
  better_than_last text,        -- 잘 됐던 부분
  improved_than_last text,      -- 좋아진 부분
  worse_than_last text,         -- 안 됐던 부분
  needed text,                  -- 필요한 부분
  needed_practice text,         -- 필요한 부분과 안 됐던 부분에 따른 필요한 연습
  coach_feedback text,          -- 코치(관리자) 피드백
  created_at timestamptz not null default now()
);
-- 기존 DB에 컬럼 추가(테이블 재생성 없이 단독 실행 가능):
--   alter table public.gcm_match_analyses
--     add column if not exists category text not null default 'tournament'
--       check (category in ('tournament','training')),
--     add column if not exists final_result text;
alter table public.gcm_match_analyses enable row level security;
create index if not exists gcm_match_analyses_user_idx
  on public.gcm_match_analyses (user_id, match_date desc);
-- 선수: 본인 것만 작성/조회(다른 선수 것은 못 봄)
create policy "gcm_ma_select_own" on public.gcm_match_analyses
  for select using (auth.uid() = user_id);
create policy "gcm_ma_insert_own" on public.gcm_match_analyses
  for insert with check (auth.uid() = user_id);
create policy "gcm_ma_update_own" on public.gcm_match_analyses
  for update using (auth.uid() = user_id);
-- 관리자(코치): 전체 조회 + 피드백 작성/수정
create policy "gcm_ma_admin_all" on public.gcm_match_analyses
  for all using (public.is_gcm_admin()) with check (public.is_gcm_admin());

-- ============================================================
-- 이야기 게시판 (gcm_voices) — 선수/학부모 후기
--   로그인 회원 누구나 작성(pending), 관리자 승인 시 published 공개.
-- ============================================================
create table if not exists public.gcm_voices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.gcm_profiles (id) on delete cascade,
  relation text not null check (relation in ('player', 'parent')), -- 선수/학부모
  author_name text not null,
  title text,
  body text not null,
  status text not null default 'pending' check (status in ('pending', 'published', 'rejected')),
  created_at timestamptz not null default now(),
  published_at timestamptz
);
alter table public.gcm_voices enable row level security;
create index if not exists gcm_voices_status_idx on public.gcm_voices (status, created_at desc);
-- 공개글은 누구나, 본인 글은 본인이, 전체는 관리자가 조회
create policy "gcm_voices_select" on public.gcm_voices for select
  using (status = 'published' or auth.uid() = user_id or public.is_gcm_admin());
-- 로그인 회원이 본인 명의로 작성(항상 pending 으로만 생성 가능)
create policy "gcm_voices_insert_own" on public.gcm_voices for insert
  with check (auth.uid() = user_id and status = 'pending');
-- 승인/반려/수정은 관리자만
create policy "gcm_voices_admin_all" on public.gcm_voices for all
  using (public.is_gcm_admin()) with check (public.is_gcm_admin());

-- ============================================================
-- 8) FAQ (gcm_faqs) — 관리자가 Contact 페이지 FAQ 관리 (최대 10개는 앱에서 제한)
--    이 블록만 SQL Editor 에 붙여넣어 단독 실행 가능(다른 테이블 영향 없음).
-- ============================================================
create table if not exists public.gcm_faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  sort_order int not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.gcm_faqs enable row level security;
create index if not exists gcm_faqs_order_idx on public.gcm_faqs (sort_order asc, created_at asc);
drop policy if exists "gcm_faqs_select_published" on public.gcm_faqs;
create policy "gcm_faqs_select_published" on public.gcm_faqs for select using (published = true);
drop policy if exists "gcm_faqs_admin_all" on public.gcm_faqs;
create policy "gcm_faqs_admin_all" on public.gcm_faqs for all
  using (public.is_gcm_admin()) with check (public.is_gcm_admin());

-- ============================================================
-- 9) Education Program / Store (gcm_programs) — 관리자가 등록하는 판매 프로그램
--    나중에 온라인 결제(PG) 연동을 염두에 둔 구조. price 는 원(KRW) 정수.
--    이 블록만 SQL Editor 에 붙여넣어 단독 실행 가능(다른 테이블 영향 없음).
-- ============================================================
create table if not exists public.gcm_programs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  description text,
  price integer,            -- 원(KRW) 정수. null 이면 '가격 문의'
  duration text,            -- 예: '8주 과정'
  image text,               -- 대표 이미지(= images[0])
  images text[] not null default '{}',  -- 갤러리(여러 장)
  published boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
-- 기존 DB(테이블 존재 시) 아래 1줄만 실행:
--   alter table public.gcm_programs add column if not exists images text[] not null default '{}';
alter table public.gcm_programs enable row level security;
create index if not exists gcm_programs_order_idx on public.gcm_programs (sort_order asc, created_at desc);
drop policy if exists "gcm_programs_select_published" on public.gcm_programs;
create policy "gcm_programs_select_published" on public.gcm_programs for select using (published = true);
drop policy if exists "gcm_programs_admin_all" on public.gcm_programs;
create policy "gcm_programs_admin_all" on public.gcm_programs for all
  using (public.is_gcm_admin()) with check (public.is_gcm_admin());

-- ============================================================
-- 10) Seoulite Net'work (gcm_events) — 관리자가 등록하는 월간 모임 후기(인스타 피드형)
--     images[0] 가 피드 썸네일(커버). 이 블록만 단독 실행 가능.
-- ============================================================
create table if not exists public.gcm_events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  location text,
  event_date date,
  body text,
  images text[] not null default '{}',
  published boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
alter table public.gcm_events enable row level security;
create index if not exists gcm_events_order_idx on public.gcm_events (sort_order asc, created_at desc);
drop policy if exists "gcm_events_select_published" on public.gcm_events;
create policy "gcm_events_select_published" on public.gcm_events for select using (published = true);
drop policy if exists "gcm_events_admin_all" on public.gcm_events;
create policy "gcm_events_admin_all" on public.gcm_events for all
  using (public.is_gcm_admin()) with check (public.is_gcm_admin());

-- ============================================================
-- 11) GCM's Products (gcm_products) — 관리자가 등록하는 판매 상품(굿즈/장비 등)
--     구조는 gcm_programs 와 동일. price 는 원(KRW) 정수. 온라인 결제(PG) 연동 대비.
--     이 블록만 단독 실행 가능.
-- ============================================================
create table if not exists public.gcm_products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  description text,
  price integer,            -- 원(KRW) 정수. null 이면 '가격 문의'
  duration text,            -- 옵션/규격 등 부가 표기(선택)
  image text,
  published boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
alter table public.gcm_products enable row level security;
create index if not exists gcm_products_order_idx on public.gcm_products (sort_order asc, created_at desc);
drop policy if exists "gcm_products_select_published" on public.gcm_products;
create policy "gcm_products_select_published" on public.gcm_products for select using (published = true);
drop policy if exists "gcm_products_admin_all" on public.gcm_products;
create policy "gcm_products_admin_all" on public.gcm_products for all
  using (public.is_gcm_admin()) with check (public.is_gcm_admin());
