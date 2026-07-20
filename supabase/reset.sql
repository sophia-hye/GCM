-- =====================================================================
--  ⚠️  DANGER — public 스키마 전체 초기화 (되돌릴 수 없음)
-- ---------------------------------------------------------------------
--  용도: 새 Supabase 프로젝트를 GCM 전용으로 깨끗이 비울 때만 사용.
--  실행: Supabase 대시보드 > SQL Editor 에 붙여넣고 Run.
--
--  🚫 실행 전 반드시 확인:
--     - 지금 접속한 프로젝트가 'GCM 프로젝트'가 맞는가?
--     - 다른 서비스와 공유하는 프로젝트에서는 절대 실행 금지.
--  이 스크립트는 public 스키마의 모든 테이블·데이터·함수·정책·트리거·타입을
--  전부 삭제합니다. 백업이 필요하면 먼저 내보내기 하십시오.
--
--  초기화 후: supabase/schema.sql 을 실행해 GCM 테이블을 새로 생성.
-- =====================================================================

-- 1) public 스키마의 모든 객체(테이블·데이터·함수·정책·트리거·타입) 전체 삭제
drop schema public cascade;

-- 2) 빈 public 스키마 재생성 + Supabase 기본 권한 복구
create schema public;

grant usage on schema public to postgres, anon, authenticated, service_role;
grant all   on schema public to postgres, service_role;

alter default privileges in schema public grant all on tables    to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on functions to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on sequences to postgres, anon, authenticated, service_role;

-- ---------------------------------------------------------------------
-- 3) (선택) 복제되어 넘어온 인증 사용자 계정까지 비우기 — 매우 주의.
--    필요할 때만 아래 주석을 해제해 실행하십시오.
-- ---------------------------------------------------------------------
-- delete from auth.users;
