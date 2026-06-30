/** 예약 배정 코치 목록 + 색상 (캘린더/폼 공용) */
export const COACHES = ["오성국", "윤재원", "김주빈"] as const;

export const COACH_COLOR: Record<string, string> = {
  오성국: "#c2492b", // 테라코타
  윤재원: "#2f6f4f", // 그린
  김주빈: "#3a6ea5", // 블루
};

export const UNASSIGNED_COLOR = "#9a917f"; // 미지정

export function coachColor(coach: string | null | undefined): string {
  return (coach && COACH_COLOR[coach]) || UNASSIGNED_COLOR;
}
