import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return { title: ko ? "개인정보 처리방침 | GCM Tennis Academy" : "Privacy Policy | GCM Tennis Academy" };
}

const articles: { title: string; paragraphs: string[] }[] = [
  {
    title: "제1조 (개인정보의 처리목적)",
    paragraphs: [
      "회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하는 개인정보는 다음 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.",
      "1. 상담 신청 접수 및 응대 : 미국 대학 테니스 진학·멘탈 웰니스 관련 상담 신청의 접수, 본인 식별 및 연락, 상담 진행 및 결과 안내.",
      "2. 고충 처리 : 문의·민원인의 신원 확인, 문의사항 확인, 사실조사를 위한 연락·통지, 처리 결과 통보.",
      "3. 회원 가입 및 관리 : 회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 이용에 대한 통지·연락.",
    ],
  },
  {
    title: "제2조 (처리하는 개인정보 항목)",
    paragraphs: [
      "① 상담 신청 서비스 : 회사는 상담 신청 서비스 제공을 위해 다음의 개인정보를 처리합니다.",
      "· 필수항목 : 보호자 성명, 연락처(전화 또는 이메일)",
      "· 선택항목 : 자녀 나이/학년, 관심 트랙, 문의 내용, 이메일",
      "② 회원 가입 서비스 : 회사는 회원 가입 및 회원제 서비스 제공을 위해 다음의 개인정보를 처리합니다.",
      "· 필수항목 : 이름, 이메일, 전화번호, 비밀번호, 성별, 생년월일, 구분(선수/아마추어/학부모)",
      "③ 회사는 주민등록번호 등 고유식별정보는 수집하지 않으며, 결제 기능은 제공하지 않습니다.",
    ],
  },
  {
    title: "제3조 (개인정보의 처리 및 보유기간)",
    paragraphs: [
      "① 회사는 법령에 따른 보유·이용기간 또는 정보주체로부터 동의받은 보유·이용기간 내에서 개인정보를 처리·보유합니다.",
      "② 상담 신청 정보는 상담 목적 달성 후 1년간 보유 후 파기합니다. 다만 정보주체가 그 이전에 삭제를 요청하는 경우 지체없이 파기하며, 관계 법령에 따라 보존이 필요한 경우 해당 기간까지 보관합니다.",
      "③ 회원 가입 정보는 회원 탈퇴 시까지 보유하며, 탈퇴 시 지체없이 파기합니다. 다만 관계 법령에 따라 보존이 필요한 경우 해당 기간까지 보관합니다.",
    ],
  },
  {
    title: "제4조 (개인정보의 제3자 제공)",
    paragraphs: [
      "① 회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의 또는 법률의 특별한 규정 등 개인정보 보호법 제17조·제18조에 해당하는 경우를 제외하고는 제3자에게 제공하지 않습니다.",
      "② 현재 회사는 정보주체의 개인정보를 제3자에게 제공하고 있지 않습니다. 향후 제3자 제공이 필요한 경우 사전에 정보주체로부터 별도의 동의를 받고 본 처리방침을 통해 공개합니다.",
    ],
  },
  {
    title: "제5조 (개인정보 처리의 위탁)",
    paragraphs: [
      "① 회사는 원활한 서비스 제공을 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.",
      "· 수탁자 : Supabase, Inc. / 위탁 업무 : 상담 신청 데이터의 저장·관리(데이터베이스)",
      "· 수탁자 : Vercel, Inc. / 위탁 업무 : 웹사이트 호스팅 및 운영",
      "· (이메일 알림 운영 시) 수탁자 : Resend, Inc. / 위탁 업무 : 상담 접수 알림 이메일 발송",
      "② 위 수탁사는 국외(미국 등)에 서버를 둘 수 있으며, 회사는 위탁계약 시 개인정보 보호법에 따라 안전한 처리에 관한 사항을 명시하고 수탁자를 관리·감독합니다.",
      "③ 위탁업무의 내용이나 수탁자가 변경될 경우 지체없이 본 처리방침을 통해 공개합니다.",
    ],
  },
  {
    title: "제6조 (정보주체와 법정대리인의 권리·의무 및 행사 방법)",
    paragraphs: [
      "① 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.",
      "② 권리 행사는 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치합니다.",
      "③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우, 회사는 정정 또는 삭제를 완료할 때까지 해당 개인정보를 이용하거나 제공하지 않습니다.",
      "④ 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.",
      "⑤ 만 14세 미만 아동의 개인정보는 법정대리인의 동의 하에 처리하며, 본 서비스의 상담 신청은 보호자(법정대리인)가 진행하는 것을 원칙으로 합니다.",
    ],
  },
  {
    title: "제7조 (개인정보의 파기)",
    paragraphs: [
      "① 회사는 보유기간 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때 지체없이 해당 개인정보를 파기합니다.",
      "② 파기 방법 : 전자적 파일 형태의 정보는 재생할 수 없는 기술적 방법으로 삭제하며, 종이 문서는 분쇄 또는 소각하여 파기합니다.",
    ],
  },
  {
    title: "제8조 (개인정보의 안전성 확보조치)",
    paragraphs: [
      "회사는 개인정보의 안전성 확보를 위해 다음의 조치를 취합니다.",
      "1. 관리적 조치 : 접근 권한 최소화 및 관리자 인증.",
      "2. 기술적 조치 : 데이터 접근 통제(인증된 관리자만 열람), 전송 구간 암호화(HTTPS), 데이터베이스 접근 정책(RLS) 적용.",
      "3. 물리적 조치 : 데이터는 보안이 확보된 클라우드 인프라(Supabase·Vercel)에 보관.",
    ],
  },
  {
    title: "제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부)",
    paragraphs: [
      "① 회사는 서비스 이용 분석을 위해 방문 통계 도구(Vercel Analytics)를 사용하며, 이는 개인을 식별하지 않는 익명 통계를 수집합니다.",
      "② 정보주체는 웹 브라우저 설정을 통해 쿠키 허용·차단을 설정할 수 있습니다. 다만 차단 시 일부 서비스 이용에 어려움이 발생할 수 있습니다.",
      "③ 회사는 마케팅·광고 목적의 식별 쿠키나 제3자 추적기를 사용하지 않습니다.",
    ],
  },
  {
    title: "제10조 (개인정보 보호책임자)",
    paragraphs: [
      "① 회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
      "· 개인정보 보호책임자 : [담당자 성명/직책 기재]",
      "· 연락처 : tennis.gcm@gmail.com",
      "② 정보주체는 서비스 이용 중 발생한 개인정보 보호 관련 문의·불만·피해구제 등을 위 연락처로 문의하실 수 있으며, 회사는 지체없이 답변·처리합니다.",
    ],
  },
  {
    title: "제11조 (권익침해 구제 방법)",
    paragraphs: [
      "정보주체는 아래 기관에 개인정보 침해에 대한 피해구제·상담을 문의할 수 있습니다.",
      "· 개인정보 분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)",
      "· 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)",
      "· 대검찰청 : (국번없이) 1301 (www.spo.go.kr)",
      "· 경찰청 : (국번없이) 182 (ecrm.police.go.kr)",
    ],
  },
  {
    title: "제12조 (개인정보 처리방침의 시행 및 변경)",
    paragraphs: [
      "이 개인정보 처리방침은 시행일부터 적용되며, 법령·정책 또는 내용의 추가·삭제·수정이 있는 경우 변경사항의 시행 7일 전부터 사이트를 통해 공지합니다.",
    ],
  },
];

// 영문 참고 번역(courtesy translation) — 한글본이 정본이며, 불일치 시 한글본이 우선한다.
const articlesEn: { title: string; paragraphs: string[] }[] = [
  {
    title: "Article 1 (Purpose of Processing Personal Information)",
    paragraphs: [
      "The Company processes personal information for the purposes below. The personal information processed is not used for any purpose other than the following, and if the purpose of use changes, the Company will take necessary measures such as obtaining separate consent in accordance with Article 18 of the Personal Information Protection Act.",
      "1. Receiving and responding to consultation requests: Receiving consultation requests related to U.S. college tennis admissions and mental wellness, identifying and contacting the applicant, conducting the consultation, and informing of results.",
      "2. Handling grievances: Verifying the identity of an inquirer/complainant, confirming the inquiry, contacting/notifying for fact-finding, and notifying of the outcome.",
      "3. Membership registration and management: Confirming intent to register, identifying and authenticating members for membership services, maintaining and managing membership, and notifying/contacting regarding service use.",
    ],
  },
  {
    title: "Article 2 (Personal Information Items Processed)",
    paragraphs: [
      "① Consultation request service: The Company processes the following personal information to provide the consultation request service.",
      "· Required: Guardian's name, contact (phone or email)",
      "· Optional: Child's age/grade, track of interest, inquiry details, email",
      "② Membership service: The Company processes the following personal information for membership registration and membership services.",
      "· Required: Name, email, phone number, password, gender, date of birth, role (player/amateur/parent)",
      "③ The Company does not collect unique identifiers such as resident registration numbers, and does not provide payment functions.",
    ],
  },
  {
    title: "Article 3 (Processing and Retention Period of Personal Information)",
    paragraphs: [
      "① The Company processes and retains personal information within the retention/use period required by law or consented to by the data subject.",
      "② Consultation request information is retained for 1 year after the purpose of the consultation is achieved and then destroyed. However, if the data subject requests deletion before then, it is destroyed without delay; where retention is required under applicable laws, it is kept for the required period.",
      "③ Membership information is retained until membership withdrawal and destroyed without delay upon withdrawal. However, where retention is required under applicable laws, it is kept for the required period.",
    ],
  },
  {
    title: "Article 4 (Provision of Personal Information to Third Parties)",
    paragraphs: [
      "① The Company processes the data subject's personal information only within the scope specified in Article 1, and does not provide it to third parties except where it falls under Articles 17 and 18 of the Personal Information Protection Act, such as the data subject's consent or special provisions of law.",
      "② The Company currently does not provide the data subject's personal information to third parties. If third-party provision becomes necessary in the future, the Company will obtain separate prior consent from the data subject and disclose it through this policy.",
    ],
  },
  {
    title: "Article 5 (Outsourcing of Personal Information Processing)",
    paragraphs: [
      "① For smooth service provision, the Company outsources personal information processing tasks as follows.",
      "· Processor: Supabase, Inc. / Task: Storage and management of consultation request data (database)",
      "· Processor: Vercel, Inc. / Task: Website hosting and operation",
      "· (When email notifications are operated) Processor: Resend, Inc. / Task: Sending consultation-receipt notification emails",
      "② The above processors may operate servers overseas (e.g., in the United States). When entering into outsourcing agreements, the Company specifies matters regarding safe processing in accordance with the Personal Information Protection Act and manages and supervises the processors.",
      "③ If the content of the outsourced tasks or the processor changes, the Company will disclose it without delay through this policy.",
    ],
  },
  {
    title: "Article 6 (Rights and Obligations of the Data Subject and Legal Representative, and How to Exercise Them)",
    paragraphs: [
      "① The data subject may, at any time, exercise rights such as requesting access to, correction of, deletion of, or suspension of processing of their personal information.",
      "② Such rights may be exercised in writing, by phone, or by email, and the Company will act on them without delay.",
      "③ If the data subject requests correction or deletion of errors in personal information, the Company will not use or provide the relevant personal information until the correction or deletion is completed.",
      "④ Rights may be exercised through an agent, such as the data subject's legal representative or an authorized delegate.",
      "⑤ Personal information of children under the age of 14 is processed with the consent of a legal representative, and consultation requests through this service are, in principle, made by a guardian (legal representative).",
    ],
  },
  {
    title: "Article 7 (Destruction of Personal Information)",
    paragraphs: [
      "① When personal information becomes unnecessary due to the expiration of the retention period or achievement of the processing purpose, the Company destroys it without delay.",
      "② Method of destruction: Information in electronic form is deleted using technical methods that render it unrecoverable; paper documents are shredded or incinerated.",
    ],
  },
  {
    title: "Article 8 (Measures to Ensure the Security of Personal Information)",
    paragraphs: [
      "The Company takes the following measures to ensure the security of personal information.",
      "1. Administrative measures: Minimizing access privileges and authenticating administrators.",
      "2. Technical measures: Data access control (only authenticated administrators may view), transmission encryption (HTTPS), and database access policies (RLS).",
      "3. Physical measures: Data is stored in secure cloud infrastructure (Supabase, Vercel).",
    ],
  },
  {
    title: "Article 9 (Installation/Operation of Automatic Collection Devices and Refusal Thereof)",
    paragraphs: [
      "① The Company uses a visit-statistics tool (Vercel Analytics) to analyze service use, which collects anonymous statistics that do not identify individuals.",
      "② The data subject may allow or block cookies through their web browser settings. However, blocking cookies may cause difficulty in using some services.",
      "③ The Company does not use identifying cookies for marketing/advertising purposes or third-party trackers.",
    ],
  },
  {
    title: "Article 10 (Personal Information Protection Officer)",
    paragraphs: [
      "① The Company designates a Personal Information Protection Officer, as below, to take overall responsibility for personal information processing and to handle data subjects' complaints and remedies.",
      "· Personal Information Protection Officer: [Name/Title to be specified]",
      "· Contact: tennis.gcm@gmail.com",
      "② The data subject may direct any inquiry, complaint, or request for remedy regarding personal information protection arising from service use to the contact above, and the Company will respond and handle it without delay.",
    ],
  },
  {
    title: "Article 11 (Remedies for Infringement of Rights)",
    paragraphs: [
      "The data subject may seek remedies or consultation for personal information infringement from the following organizations (Korea).",
      "· Personal Information Dispute Mediation Committee: 1833-6972 (www.kopico.go.kr)",
      "· Personal Information Infringement Report Center: 118 (privacy.kisa.or.kr)",
      "· Supreme Prosecutors' Office: 1301 (www.spo.go.kr)",
      "· National Police Agency: 182 (ecrm.police.go.kr)",
    ],
  },
  {
    title: "Article 12 (Enforcement and Amendment of the Privacy Policy)",
    paragraphs: [
      "This Privacy Policy applies from its effective date. If there are additions, deletions, or amendments due to laws, policies, or content, the Company will announce them through the site from 7 days before the effective date of the changes.",
    ],
  },
];

export default async function PrivacyPage() {
  const ko = (await getLocale()) === "ko";
  const list = ko ? articles : articlesEn;
  return (
    <>
      <header className="border-b border-line bg-base/80 backdrop-blur">
        <Container className="flex h-16 items-center">
          <Link href="/" className="font-display text-xl font-extrabold">
            GCM<span className="text-lime">.</span>
          </Link>
        </Container>
      </header>

      <main className="py-16">
        <Container className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-court-bright">
            Legal
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            {ko ? "개인정보 처리방침" : "Privacy Policy"}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {ko ? "Effective date: 2026년 6월 11일" : "Effective date: June 11, 2026"}
          </p>
          <p className="mt-1 text-sm text-muted">
            {ko
              ? "This policy is provided in Korean as the governing language."
              : "This English version is a courtesy translation. The Korean version is the official, legally governing text; in case of any discrepancy, the Korean version prevails."}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ink/90">
            {ko ? (
              <>
                GCM(Global Champions Makers, 이하 &quot;회사&quot;)은 개인정보 보호법 제30조에 따라
                정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
                있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
              </>
            ) : (
              <>
                GCM (Global Champions Makers, the &quot;Company&quot;) establishes and discloses this
                Privacy Policy as follows, in accordance with Article 30 of the Personal Information
                Protection Act, to protect data subjects&apos; personal information and to handle
                related grievances promptly and smoothly.
              </>
            )}
          </p>

          <div className="mt-10 space-y-10">
            {list.map((a) => (
              <section key={a.title}>
                <h2 className="font-display text-lg font-bold text-court-bright">
                  {a.title}
                </h2>
                <div className="mt-3 space-y-2">
                  {a.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-ink/90">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
