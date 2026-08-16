/** Contact 페이지 FAQ 최대 등록 개수 */
export const FAQ_MAX = 10;

export type Faq = {
  id: string;
  question: string;
  answer: string;
  published: boolean;
  sort_order: number;
};
