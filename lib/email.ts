import "server-only";
import { Resend } from "resend";

const FROM = process.env.RESEND_FROM ?? "";
const NOTIFY_TO = process.env.INQUIRY_NOTIFY_TO ?? "tennis.gcm@gmail.com";

/**
 * Resend(이메일 발송) 설정 여부.
 * 미설정(.env.local 비어있음)이면 발송 로직을 건너뛰어 개발/프리뷰가 정상 동작한다.
 */
export function isEmailConfigured(): boolean {
  const key = process.env.RESEND_API_KEY ?? "";
  return key.length > 0 && !key.startsWith("your-") && FROM.length > 0;
}

type InquiryPayload = {
  tag: string; // 문의 종류 (상담 신청 / 문의 / 성인반 신청 등)
  name: string;
  phone: string;
  email?: string | null;
  message?: string;
};

/**
 * 상담/문의 접수 알림을 관리자에게 발송한다(Resend).
 * ⚠️ 베스트 에포트 — 이미 DB 저장은 끝났으므로, 메일 실패가 접수 자체를 실패시키지 않는다.
 */
export async function sendInquiryNotification(p: InquiryPayload): Promise<void> {
  if (!isEmailConfigured()) return;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const lines = [
      `종류: ${p.tag}`,
      `이름: ${p.name}`,
      `연락처: ${p.phone}`,
      p.email ? `이메일: ${p.email}` : null,
      p.message ? `\n${p.message}` : null,
    ].filter(Boolean);

    await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: p.email || undefined,
      subject: `[GCM] ${p.tag} — ${p.name}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    // 접수는 이미 저장됐으므로 로그만 남기고 조용히 넘어간다.
    console.error("[email] 상담/문의 알림 발송 실패:", error);
  }
}
