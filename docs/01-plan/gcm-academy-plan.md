# GCM 아카데미 웹사이트 구축 계획

> 출처: eqüre 피치덱 + summit-23(축구 유학) 벤치마크 + 테니스 아카데미 방향성(동탄) PDF + covspo.kr(소속사)
> 작성일: 2026-06-05 / 개정 3: 테니스 엘리트 육성 아카데미 포지셔닝 반영

## 1. 포지셔닝 (확정)

**GCM 아카데미**는 대표 **오성국**이 운영하는 1인 **테니스 엘리트 육성 + 진로 컨설팅 아카데미**다.
스포츠 매니지먼트사 **COV Spotainment(covspo.kr)** 와 연계된다.

- 본질: 단순 유학원이 아니라 **선수 육성(코칭) → 진로 설계(프로/대학)** 를 잇는 아카데미.
- 진로 두 갈래:
  1. **Professional** — 프로 투어 선수로 성장 (투어 스케줄/대회 동행 관리)
  2. **College Recruitment(옵션)** — 국내/미국 대학 테니스 팀 진학(유학)
- 차별점(eqüre 계승): 기술 코칭에 더해 **데이터 기반 진로 설계 + 멘탈 케어**.
- 비주얼: 경쟁사 summit-23처럼 **테니스 스포츠가 강하게 드러나는** 다크+액션 톤.

**핵심 상품 = COV ELITE Premium Management** (윤하건 선수 전략 보고서로 확인):
GCM(오성국)은 COV와 "ONE TEAM"으로, 선수별 **개인 글로벌 전략 보고서**(NCAA D1 진학 +
프로/산업 2트랙)와 **Total Care System**을 제공하는 프리미엄 1:1 매니지먼트가 본질이다.
세일즈 후크: "비용이 아닌 투자(ROI)", "실패 없는 안전망(2-Track)", "180일의 기적".
실제 운영 브랜드(COV ELITE) 톤은 **블랙 + 골드/샴페인 럭셔리**.

## 2. 핵심 요구사항 (확정)

| 항목 | 결정 |
|------|------|
| 정체성 | 테니스 엘리트 육성 + 진로(프로/유학) 아카데미, 대표 오성국, 1인 운영 |
| 진로 트랙 | Professional / College Recruitment(국내·미국 대학) |
| 벤치마크 | summit-23.com(구조), covspo.kr(소속·톤) |
| 비주얼 | 테니스가 시각적으로 강하게 드러나게 (다크 + 액션) |
| 기능 범위 | 회원/수강 관리 포함 (1인 운영 규모에 맞게 경량) |
| 기술 스택 | Next.js(App Router) + TypeScript + Tailwind CSS |

## 3. 커리큘럼 & 진로 모델 (동탄 PDF 기반) — 사이트의 핵심 콘텐츠

### 3.1 4단계 발달 모델
| 단계 | 핵심 | 내용 |
|------|------|------|
| FOUNDATION | 기본기 | 테니스 기본기 · 풋워크 · 체력훈련 |
| DEVELOPMENT | 발전 | 게임 적응 능력 · 스텝 능력 향상 · 다양한 게임 경험 |
| JUNIOR ELITE | 실전 | 국내/국제 대회 토너먼트 출전 · 실전 경험 · 문제점 보완 |
| PROFESSIONAL | 프로 | 투어 스케줄 관리 · 투어 대회 동행(옵션) · 대회 후 보완 |

### 3.2 진로 분기 (Junior Elite 이후)
- **Professional**: 엘리트 → 프로 선수, 주니어 투어 일정 관리, 프로 준비
- **College Recruitment(옵션)**: 국내 대학 / 미국 대학 테니스 팀 지원, 미국 대학 입학 후 팀 활동 + 학업

### 3.3 기술 코칭 프로그램 (4대 기술)
- 포핸드 / 백핸드 / 발리 / 서브 — 각 Basic · Point · 문제점 인지&보완 · Focus
- 주간 스케줄 예시: 월(포핸드) · 수(백핸드) · 토(발리) · 일(서브)

## 3.5 프리미엄 매니지먼트 (COV ELITE) — 핵심 세일즈 콘텐츠

윤하건 선수 글로벌 전략 보고서(2026-2030)의 구조를, 웹사이트 서비스 소개 + 회원 산출물로 차용.

| Phase | 웹 활용 |
|------|---------|
| 01 Reality Check | "왜 지금 미국인가" 설득 섹션 (국내 환경 제약 → 전략적 경로 전환) |
| 02 Growth Strategy | **UTR 성장 로드맵** 시각화 (현재→D1 편입→프로/실업), 성장곡선 그래프 |
| 03 ROI | **"비용이 아닌 투자"** — UTR별 선수가치/연봉/계약금 표 (회수 논리) |
| 04 Personal Branding | 선수 SNS·미디어·하이라이트 영상·비주얼 에셋 → 선수 프로필의 핵심 |
| 05 Total Care System | **Technical / Academic / Mental / Global Manner / Operations** 5대 관리 |
| 06 Safety Net | **2-Track**: A 프로 선수(Primary) / B 스포츠 산업 리더 (부상·진로변경 대비) |
| 07 Social Responsibility | 재능기부·멘토링, 명문대 입학 가산 |
| 09 Conclusion | "ONE TEAM" + Vision/Promise/Action(180일의 기적) → 최종 CTA |

- 산출물 활용: "계약 시 이런 **개인 전략 보고서**를 제작"을 샘플로 노출(강력한 전환 도구).
  회원 대시보드에서 본인 전략 보고서/UTR 로드맵/Total Care 진행을 열람.
- UTR 마일스톤(예시): 현재 10.5 → D1 편입 11.5~12.0 → 프로/실업 13.0+ / D1 학업 GPA 2.5+.

## 4. 경쟁사 벤치마크 요약 (summit-23)

- 네비: About / High School / College(NCAA·NJCAA) / Our Players / Showcase & Camp / News / Contact
- 풀스크린 스포츠 액션 Hero + "Path to American Sporting Success"
- 6단계 유학 프로세스, 합격 선수 갤러리, 쇼케이스 일정
- 시사점: 실적(선수) 노출 + 스포츠 비주얼이 신뢰·전환의 핵심
- GCM 적용: College Recruitment 트랙에 6단계 프로세스 차용, 여기에 육성 커리큘럼 + 멘탈 케어를 더해 차별화

## 5. 기술 스택 (제안)

- Next.js 14(App Router) + TypeScript / Tailwind CSS + shadcn/ui(다크)
- 미디어 슬라이더(embla/swiper), next/image
- 인증/DB: Supabase(Auth + PostgreSQL) 권장 / 대안 bkend.ai
- 폼/검증: React Hook Form + Zod / 배포: Vercel + Supabase

## 6. 정보 구조 (사이트맵)

### 공개 영역
- `/` 랜딩 (Hero → 소개 → 4단계 커리큘럼 → 진로 트랙 → 기술 코칭 → 합격/배출 선수 → 멘탈케어 → 대회 일정 → 상담 CTA)
- `/about` 소개 (대표 오성국 / GCM 철학 / COV Spotainment 연계)
- `/curriculum` 4단계 발달 모델 + 기술 코칭(포핸드·백핸드·발리·서브) + 주간 스케줄
- `/premium` COV ELITE Premium Management 소개 (Total Care 5대 + 2-Track + ROI + 개인 전략 보고서 샘플)
- `/career` 진로 트랙 (Professional / College Recruitment)
- `/career/college` 미국·국내 대학 진학(유학) 6단계 프로세스
- `/players` 배출/소속 선수 (프로 트랙 / 대학 진학 트랙)
- `/players/[slug]` 선수 프로필 (UTR · ITF · 영상 · 진로 결과)
- `/schedule` 대회/캠프/쇼케이스 일정
- `/news` 뉴스 & 이벤트
- `/contact` 상담 예약 / 문의
- `/auth/login`, `/auth/signup`

### 회원 영역 (로그인)
- `/dashboard` 내 현황 (발달 단계 진행률, 다음 일정, 멘탈 체크인)
- `/dashboard/profile` 선수 프로필(UTR/ITF/영상)
- `/dashboard/strategy` 내 글로벌 전략 보고서 (UTR 로드맵·ROI·Total Care 진행)
- `/dashboard/progress` 4단계 발달/진로 단계 트래킹
- `/dashboard/schedule` 상담/대회/레슨 예약
- `/dashboard/checkin` 멘탈 케어 체크인 (차별점)

### 관리자 영역 (오성국 대표용)
- `/admin` 대시보드 / `/admin/members` 회원·선수 / `/admin/players` 선수 게시
- `/admin/bookings` 예약 / `/admin/inquiries` 문의 / `/admin/content` 뉴스·일정 게시

## 7. 데이터 모델 (초안)

- **profiles**: id, role(student|parent|admin), name, phone, parent_id
- **players**: id, slug, name, grad_year, utr, itf_rank, video_url, track(professional|college), result_college, status, published
- **curriculum_stages**: id, key(foundation|development|junior_elite|professional), title, points[]
- **progress**: id, user_id, stage, track, status, note, updated_at
- **bookings**: id, user_id, type(consulting|lesson|tournament|showcase), scheduled_at, status, memo
- **checkins**: id, user_id, mood_score, note, created_at
- **inquiries**: id, name, phone, email, message, status, created_at
- **posts**: id, type(news|event|schedule), title, body, event_date, published

## 8. 단계별 로드맵 (Phase)

- **Phase 0** 셋업: Next.js+TS+Tailwind, 디자인 토큰, 슬라이더, 레포 구조
- **Phase 1** 공개 사이트(MVP, 스포츠 비주얼): 랜딩 / about / curriculum / career(+college) / players(목록·상세) / schedule / news / contact + 문의 저장
- **Phase 2** 인증 & 회원: Supabase Auth, 역할, 선수 프로필
- **Phase 3** 진행 트래킹 & 예약: 4단계/진로 트래킹, 상담·레슨·대회 예약, 회원 대시보드
- **Phase 4** 멘탈 케어 & 관리자: 체크인, 관리자 대시보드
- **Phase 5** 마감: 반응형/접근성, SEO/OG, 보안, Vercel 배포

## 9. 미결 사항 (확인 필요)

- GCM 정식 브랜드명/로고/도메인, COV Spotainment와의 표기(소속 vs 파트너)
- 배출/소속 실제 선수 데이터(UTR/ITF/진로 결과) 보유 여부
- 멘탈 케어 기능을 1차에 포함할지, 코칭/진로 먼저 출시 후 추가할지
- 결제·다국어(한/영, 유학 타깃 고려) 지원 여부
- 동탄 외 운영 지역/오프라인 코트 위치 정보
