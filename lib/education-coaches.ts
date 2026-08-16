export type EduCoach = {
  no: string;
  title: { ko: string; en: string };
  desc: { ko: string; en: string };
  points: { ko: string; en: string }[];
};

/** 교육 코치진 — "3 Coaches for 1 Student" 코칭 시스템(학업관리·생활관리·커리어) */
export const educationCoaches: EduCoach[] = [
  {
    no: "01",
    title: { ko: "학업관리코치", en: "Academic Coach" },
    desc: {
      ko: "학생이 스스로 배우고 성과를 만들어낼 수 있는 자율적 학습 역량을 기르는 과정입니다.",
      en: "Builds the self-directed learning capacity for students to study and achieve on their own.",
    },
    points: [
      {
        ko: "시간 관리·목표 설정·학습 계획 수립, 시험 대비 및 문제 해결 전략 코칭",
        en: "Time management, goal setting, study planning, exam prep and problem-solving strategy",
      },
      {
        ko: "과목별 튜터링 및 학업 성취도 점검",
        en: "Subject-by-subject tutoring and academic progress checks",
      },
      {
        ko: "대학 영어 역량 강화: 강의 이해를 위한 리딩 전략, 에세이·리서치 페이퍼 작성, 강의 노트 필기법, 토론 참여법 등 실전 영어 스킬",
        en: "College English: reading strategy, essay/research writing, note-taking and discussion skills",
      },
      {
        ko: "대학 학점 선수강 전 과정 지원: 미국 대학 수업 시스템 이해, 실라버스 분석, 교수와의 전문적 커뮤니케이션, 학점 관리 전략, Academic Integrity 지도",
        en: "US college credit prep: class system, syllabus analysis, professor communication, GPA strategy, Academic Integrity",
      },
      {
        ko: "예술계열 전공 포트폴리오 준비 지원: 전공별 구성 방향, 작품 선택 및 스토리텔링, 대학·전공 요구사항에 맞춘 포트폴리오 전략",
        en: "Arts-major portfolio prep: structure, work selection, storytelling and program-specific strategy",
      },
    ],
  },
  {
    no: "02",
    title: { ko: "생활관리코치", en: "Life Coach" },
    desc: {
      ko: "미국 생활 적응과 전인적 성장을 위한 자기관리·리더십·독립성을 기르는 과정입니다.",
      en: "Develops self-management, leadership and independence for life in the US and whole-person growth.",
    },
    points: [
      { ko: "생활 적응 코칭: 교통, 은행, 통신, 예절, 의사소통", en: "Daily-life adaptation: transit, banking, telecom, etiquette, communication" },
      { ko: "정서·스트레스 관리, 감정조절 훈련", en: "Emotional and stress management, self-regulation" },
      { ko: "자기주도적 생활 습관 형성 (시간표 관리, 건강 관리)", en: "Self-directed routines (scheduling, health)" },
      { ko: "문화 적응 및 글로벌 매너 교육", en: "Cultural adaptation and global manners" },
      { ko: "리더십·책임감·협업 능력 개발", en: "Leadership, responsibility and collaboration" },
      { ko: "학교 및 지역사회 활동 참여 (봉사·프로젝트)", en: "School and community engagement (service, projects)" },
      { ko: "Character Development 인턴십과 연계", en: "Linked with Character Development internships" },
    ],
  },
  {
    no: "03",
    title: { ko: "커리어코치", en: "Career Coach" },
    desc: {
      ko: "학생의 강점과 관심을 기반으로 전공 선택·진로 탐색·경력 설계를 돕는 과정입니다.",
      en: "Helps choose a major, explore paths and design a career from each student's strengths and interests.",
    },
    points: [
      { ko: "전공/성향 진단 및 강점 분석", en: "Major/aptitude assessment and strengths analysis" },
      { ko: "진로 로드맵 설계 (4-year / transfer / career pathway)", en: "Career roadmap (4-year / transfer / career pathway)" },
      { ko: "전문가 멘토 네트워킹 (의사, 변호사, 엔지니어, 작가 등)", en: "Expert mentor networking (doctors, lawyers, engineers, writers, etc.)" },
      { ko: "실전 대비: 이력서, 인터뷰, 포트폴리오 코칭", en: "Practical prep: résumé, interview and portfolio coaching" },
      { ko: "인턴십 매칭", en: "Internship matching" },
    ],
  },
];
