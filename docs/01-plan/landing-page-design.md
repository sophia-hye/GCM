# GCM 아카데미 랜딩 페이지 상세 설계

> 미국 대학 테니스 진학(NCAA D1) + 프로/산업 2트랙 프리미엄 매니지먼트(COV ELITE) 랜딩
> 벤치마크: summit-23.com / 핵심 상품: COV ELITE Premium Management / 에셋: 임시 스톡
> 작성일: 2026-06-05 / 개정 2: 테니스 코트 블루 + 라임 톤 확정, COV ELITE 콘텐츠 통합

## A. 디자인 토큰 (확정) — 테니스 코트 블루 + 라임/화이트

색에서 테니스가 즉시 연상되도록: **하드코트 블루 주력 + 테니스공 라임 + 화이트 포인트**.

| 역할 | 값 | 비고 |
|------|-----|------|
| bg/base | `#08111F` | 딥 네이비블루 베이스(다크) |
| bg/court | `#0E4D78` | 딥 코트 블루(섹션 패널/Hero 오버레이) |
| bg/card | `#12283F` | 카드 |
| court/primary | `#1D6FB8` | 메인 하드코트 블루(US/호주오픈 톤) |
| court/bright | `#3FA7E0` | 밝은 코트 블루(hover/그라데이션 끝) |
| ball/lime | `#C9F227` | 테니스공 라임 — 핵심 포인트/CTA |
| white | `#FFFFFF` / off `#EAF2FA` | 라인·텍스트·포인트 |
| text/primary | `#EAF2FA` | 본문 |
| text/muted | `#94AEC9` | 보조 |
| danger | `#FF5A5A` | 경고/강조 |

- 코트 그라데이션: `linear-gradient(135deg, #0E4D78, #1D6FB8, #3FA7E0)`
- 라임(`#C9F227`)은 CTA 버튼·핵심 숫자·강조 1~2곳에만 — 화이트와 함께 코트 블루 위에서 강한 대비
- 코트 라인(화이트 얇은 선) 모티프를 구분선/보더 장식으로 활용 → "코트" 느낌 강화

### 타이포
- 영문 헤드라인: Archivo / Anton (대문자 굵게)
- 한글: Pretendard / Hero 56-72px, 섹션 제목 36-44px, 본문 16-18px

### 모션
- Hero 자동 슬라이드(6s), ken burns 줌
- 스크롤 fade-up, 숫자 카운트업, UTR 성장곡선 드로잉 애니메이션
- 코트/캠퍼스 풀블리드 패럴랙스

## B. 랜딩 섹션 구성 (COV ELITE 보고서 흐름 통합)

### 1. 글로벌 네비 (sticky)
About / Premium / Curriculum / Career / Players / Schedule / News / Contact + [로그인] [무료 상담]

### 2. Hero (풀스크린 슬라이더)
- 비주얼: 테니스 코트 풀스크린 액션(서브·랠리·야간 코트) + 코트 블루 그라데이션 오버레이
- 헤드라인(영): "YOUR PATH TO COLLEGE TENNIS IN THE USA"
- 서브(한): "데이터로 설계하고 멘탈로 지켜내는, 미국 대학 테니스의 완벽한 길"
- CTA: [무료 진로 상담] (라임 버튼) / [선수 성과 보기]

### 3. 신뢰 지표 카운터 바
- "배출 선수 OO · 누적 장학금 $OO M · 제휴 대학 OO · 평균 UTR 상승 +O.O" (카운트업, 라임 강조)

### 4. Why Now — 왜 지금 미국인가 (Reality Check)
- 카피: "국내 한 길만으로는 부족합니다. 전략적 경로 전환이 기대가치를 바꿉니다."
- 3포인트: 국내 환경 제약 / 전략적 경로(미국 대학) / 압도적 기대가치. 우측 코트 풀블리드.

### 5. UTR 성장 로드맵 (Growth Strategy) — 데이터 신뢰 섹션
- 성장곡선 그래프: 현재(10.5) → CC/D1 편입(11.5~12.0) → 졸업/프로(13.0+)
- 단계 카드 3종 + 체크포인트(피지컬·멘탈 / 학업·어학 GPA 2.5+ / 데이터·영상 포트폴리오)

### 6. ROI — "비용이 아닌 투자" (강력 세일즈)
- UTR 레벨별 표: 선수 가치/예상 연봉/예상 계약금 (12.5~13.2 / 13.5~14.2 / 14.5+)
- 결론 배너(라임 강조): "대학 4년 투자는 실업팀 계약금만으로도 상당 부분 회수"

### 7. 4단계 발달 커리큘럼
- FOUNDATION → DEVELOPMENT → JUNIOR ELITE → PROFESSIONAL (가로 스텝, 코트 블루 진행 라인)

### 8. 기술 코칭 (4대 기술)
- 포핸드/백핸드/발리/서브 (Basic·Point·문제점 보완·Focus) + 주간 스케줄(월·수·토·일)

### 9. Total Care System (5대 관리)
- 카드 5종: Technical / Academic / Mental / Global Manner / Operations
- 멘탈 케어를 이 안에 포함(GCM 차별점은 Mental + Global Manner로 부각)

### 10. Safety Net — 진로 2-Track
- 다이어그램: 미국 대학 진학(NCAA D1/장학금) → 분기
  - Track A. 프로 테니스 선수 (Primary) — 글로벌 투어/실업팀
  - Track B. 스포츠 산업 리더 — 부상·진로변경 시 전공전환&인턴십(Sports Mgmt & Ent.)
- College 트랙 6단계: Assessment → Application(NCAA 등록·하이라이트 영상) → Scholarship Negotiation → Visa & Enrollment → Monitoring → Future Planning
- 카피(라임): "어느 길을 가더라도 최정상을 보장합니다."

### 11. 배출/소속 선수 갤러리 + 퍼스널 브랜딩
- 카드: 선수 액션 + 이름 + 졸업연도 + UTR + 진로 결과(프로/대학) + SNS 팔로잉/하이라이트 영상
- 필터: 프로 트랙 / 대학 트랙. "되기 전부터 브랜드 구축" 메시지.

### 12. 진학 대학 로고 월 (College 트랙)
- 그레이스케일 → hover 컬러 마퀴

### 13. 대회 & 캠프 일정
- 카드 리스트: 일자/장소/대상, [예약하기]

### 14. 후기 (선수·학부모)
- 인용형 카드 슬라이더 + 프로필 사진

### 15. 최종 CTA — ONE TEAM
- 카피(영): "ARE YOU READY TO GO PRO & GROW?" / 한: "GCM과 COV가 한 팀으로, 180일의 기적을 증명합니다."
- [무료 진로 상담] 큰 라임 버튼 + 카카오 채널/이메일

### 16. 푸터
- GCM · 대표 오성국 · COV Spotainment 연계, 연락처(이메일/카카오), Instagram/YouTube, 개인정보처리방침, copyright

## C. 임시 스톡 에셋 플랜 (Unsplash / Pexels, 무료 상업적 이용)

검색어: `tennis serve`, `tennis player action`, `hard court tennis`(블루코트 우선), `tennis court aerial`,
`college tennis`, `tennis racket close up`, `tennis stadium night`, `tennis training`
- 블루 하드코트 이미지 우선 선택(브랜드 컬러와 일치)
- 1920px+, 코트 블루 오버레이 전제 / `/public/images/{hero,players,programs}/`
- 라이선스 출처는 `docs/asset-credits.md` 기록, 추후 자체 촬영본으로 동일 파일명 교체

## D. 컴포넌트 인벤토리 (Phase 1)

- `Navbar`, `Footer`, `HeroSlider`, `StatCounter`, `SectionHeading`, `Container`, `GradientText`
- `WhyNowBlock`, `UTRRoadmapChart`, `ROITable`, `CurriculumStepper`, `SkillCoachingTabs`
- `TotalCareGrid`(5카드), `CareerTrackDiagram`, `ProcessTimeline`
- `PlayerCard`, `PlayerFilter`, `LogoMarquee`, `ScheduleCard`, `TestimonialSlider`
- `CTASection`, `ContactForm`(→ inquiries)
- 공통 `Button`(primary=court / lime / outline), `Badge`(UTR·진로결과)

## E. 페이지 우선순위 (Phase 1)
1. `/` 랜딩(위 16섹션)
2. `/players` + `/players/[slug]`
3. `/premium`, `/career`(+college), `/curriculum`
4. `/about`, `/schedule`, `/news`, `/contact`

## F. 다음 단계
1. 본 설계·토큰 확정 후 Phase 0(셋업) → Phase 1 Hero부터 구현
2. 블루 하드코트 스톡 1차 셀렉 → `/public/images`
3. 실제 수치(배출 선수/장학금/제휴대학/UTR)·선수 데이터 확보 시 카운터·로드맵·갤러리 실데이터화
