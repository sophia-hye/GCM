import Link from "next/link";

/**
 * 개인정보 제3자 제공(Equre) 선택 동의 체크박스.
 * 회원가입(SignupForm)과 소셜 온보딩(OnboardingForm)에서 공용으로 사용한다.
 * 폼 필드명은 `consent_third_party`(체크 시 "on")로 전송된다.
 * 선택 항목 — 미동의해도 가입 가능하며, 동의한 회원만 정보가 Equre로 전달된다.
 */
export function ThirdPartyConsent() {
  return (
    <label className="flex items-start gap-2 rounded-lg border border-line bg-white px-3 py-2.5 text-xs leading-relaxed text-ink">
      <input
        type="checkbox"
        name="consent_third_party"
        value="on"
        className="mt-0.5 h-4 w-4 shrink-0 accent-court-bright"
      />
      <span>
        <span className="font-semibold text-court">[선택]</span> 개인정보 제3자 제공 동의 — 동의 시 회원님의
        개인정보(이름, 이메일, 전화번호, 성별, 생년월일)를 Equre에 제공하여 Equre 서비스에서 저장·이용합니다.
        미동의해도 가입할 수 있습니다.{" "}
        <Link
          href="/privacy"
          target="_blank"
          className="font-semibold text-court underline hover:text-court-bright"
        >
          자세히 보기
        </Link>
      </span>
    </label>
  );
}
