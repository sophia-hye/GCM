-- GCM 아카데미 Phase 4: 멘탈 케어 체크인
-- 멱등 스크립트. 0001 실행 후 이어서 실행.

create table if not exists public.checkins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  mood_score int not null,
  note text,
  created_at timestamptz not null default now()
);

alter table public.checkins drop constraint if exists checkins_mood_check;
alter table public.checkins add constraint checkins_mood_check
  check (mood_score between 1 and 5);

alter table public.checkins enable row level security;

drop policy if exists checkins_select_own on public.checkins;
drop policy if exists checkins_insert_own on public.checkins;
drop policy if exists checkins_admin_all  on public.checkins;

create policy checkins_select_own on public.checkins for select using (auth.uid() = user_id);
create policy checkins_insert_own on public.checkins for insert with check (auth.uid() = user_id);
create policy checkins_admin_all  on public.checkins for all    using (public.is_admin());

create index if not exists checkins_user_created_idx
  on public.checkins (user_id, created_at desc);
