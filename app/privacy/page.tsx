import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick, type Locale } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "개인정보 처리방침 | GCM Tennis Academy",
      en: "Privacy Policy | GCM Tennis Academy",
      zh: "隐私政策 | GCM Tennis Academy",
      ja: "個人情報処理方針 | GCM Tennis Academy",
      it: "Informativa sulla privacy | GCM Tennis Academy",
      fr: "Politique de confidentialité | GCM Tennis Academy",
      es: "Política de Privacidad | GCM Tennis Academy",
    }),
  };
}

type Article = { title: string; paragraphs: string[] };

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

const articlesZh: Article[] = [
  {
    title: "第1条（个人信息的处理目的）",
    paragraphs: [
      "公司为以下目的处理个人信息。所处理的个人信息不会用于下列目的以外的用途；如使用目的发生变更，公司将依据《个人信息保护法》第18条，采取另行取得同意等必要措施。",
      "1. 咨询申请的受理与回应：受理有关美国大学网球升学与心理健康的咨询申请、确认本人身份并联系、进行咨询并告知结果。",
      "2. 投诉处理：确认咨询人/投诉人的身份、确认咨询事项、为事实调查进行联系与通知、通报处理结果。",
      "3. 会员注册与管理：确认注册意愿、为提供会员制服务进行本人识别与认证、维持与管理会员资格、就服务使用进行通知与联系。",
    ],
  },
  {
    title: "第2条（所处理的个人信息项目）",
    paragraphs: [
      "① 咨询申请服务：为提供咨询申请服务，公司处理以下个人信息。",
      "· 必填项：监护人姓名、联系方式（电话或电子邮件）",
      "· 选填项：子女年龄/年级、关注的方向、咨询内容、电子邮件",
      "② 会员注册服务：为进行会员注册及提供会员制服务，公司处理以下个人信息。",
      "· 必填项：姓名、电子邮件、电话号码、密码、性别、出生日期、身份（选手/业余爱好者/家长）",
      "③ 公司不收集居民登记号等唯一识别信息，也不提供支付功能。",
    ],
  },
  {
    title: "第3条（个人信息的处理及保留期限）",
    paragraphs: [
      "① 公司在法律规定的保留·使用期限或信息主体同意的保留·使用期限内处理并保留个人信息。",
      "② 咨询申请信息在达成咨询目的后保留1年，随后予以销毁。但信息主体在此之前请求删除的，将立即销毁；依相关法律需保存的，保存至相应期限。",
      "③ 会员注册信息保留至会员退出时，退出时立即销毁。但依相关法律需保存的，保存至相应期限。",
    ],
  },
  {
    title: "第4条（向第三方提供个人信息）",
    paragraphs: [
      "① 公司仅在第1条规定的范围内处理信息主体的个人信息，除取得信息主体同意或符合《个人信息保护法》第17条、第18条等法律特别规定的情形外，不向第三方提供。",
      "② 目前公司不向第三方提供信息主体的个人信息。今后如需向第三方提供，将事先另行取得信息主体同意，并通过本处理方针予以公开。",
    ],
  },
  {
    title: "第5条（个人信息处理的委托）",
    paragraphs: [
      "① 为顺畅地提供服务，公司如下委托个人信息处理业务。",
      "· 受托方：Supabase, Inc. / 委托业务：咨询申请数据的存储与管理（数据库）",
      "· 受托方：Vercel, Inc. / 委托业务：网站托管与运营",
      "·（在运营邮件通知时）受托方：Resend, Inc. / 委托业务：发送咨询受理通知邮件",
      "② 上述受托方的服务器可能位于境外（如美国）。公司在签订委托合同时，依据《个人信息保护法》明确有关安全处理的事项，并对受托方进行管理与监督。",
      "③ 如委托业务内容或受托方发生变更，公司将立即通过本处理方针予以公开。",
    ],
  },
  {
    title: "第6条（信息主体及法定代理人的权利、义务及行使方式）",
    paragraphs: [
      "① 信息主体可随时就其个人信息向公司行使查阅、更正、删除、停止处理等权利。",
      "② 上述权利可通过书面、电话、电子邮件等方式行使，公司将立即予以处理。",
      "③ 信息主体就个人信息的错误等请求更正或删除的，在完成更正或删除之前，公司不会使用或提供相关个人信息。",
      "④ 权利可通过信息主体的法定代理人或受委托人等代理人行使。",
      "⑤ 未满14周岁儿童的个人信息，在法定代理人同意下处理；本服务的咨询申请原则上由监护人（法定代理人）进行。",
    ],
  },
  {
    title: "第7条（个人信息的销毁）",
    paragraphs: [
      "① 当因保留期限届满、处理目的达成等原因导致个人信息变得不再必要时，公司将立即予以销毁。",
      "② 销毁方法：电子文件形式的信息以无法复原的技术方法删除；纸质文件通过粉碎或焚烧予以销毁。",
    ],
  },
  {
    title: "第8条（确保个人信息安全的措施）",
    paragraphs: [
      "公司为确保个人信息安全，采取以下措施。",
      "1. 管理措施：最小化访问权限并对管理员进行身份认证。",
      "2. 技术措施：数据访问控制（仅经认证的管理员可查阅）、传输区间加密（HTTPS）、数据库访问策略（RLS）。",
      "3. 物理措施：数据保存于安全的云基础设施（Supabase、Vercel）。",
    ],
  },
  {
    title: "第9条（个人信息自动收集装置的安装·运行及拒绝）",
    paragraphs: [
      "① 公司为分析服务使用情况，使用访问统计工具（Vercel Analytics），其收集的是不识别个人的匿名统计信息。",
      "② 信息主体可通过网页浏览器设置选择允许或阻止 Cookie。但阻止时，部分服务的使用可能受到影响。",
      "③ 公司不使用以营销·广告为目的的识别性 Cookie 或第三方追踪器。",
    ],
  },
  {
    title: "第10条（个人信息保护负责人）",
    paragraphs: [
      "① 公司为统筹负责个人信息处理相关业务，并处理信息主体的投诉及损害救济等事宜，指定如下个人信息保护负责人。",
      "· 个人信息保护负责人：[填写负责人姓名/职务]",
      "· 联系方式：tennis.gcm@gmail.com",
      "② 信息主体就使用服务过程中产生的个人信息保护相关咨询、投诉、损害救济等，可向上述联系方式咨询，公司将立即予以答复与处理。",
    ],
  },
  {
    title: "第11条（权益侵害的救济方式）",
    paragraphs: [
      "信息主体可向以下机构就个人信息侵害申请损害救济与咨询（韩国）。",
      "· 个人信息纠纷调解委员会：1833-6972 (www.kopico.go.kr)",
      "· 个人信息侵害举报中心：118 (privacy.kisa.or.kr)",
      "· 大检察厅：1301 (www.spo.go.kr)",
      "· 警察厅：182 (ecrm.police.go.kr)",
    ],
  },
  {
    title: "第12条（个人信息处理方针的施行与变更）",
    paragraphs: [
      "本个人信息处理方针自施行之日起适用；如因法律、政策或内容的增补、删除、修改而发生变更，公司将自变更事项施行之日起7日前通过本网站予以公告。",
    ],
  },
];

const articlesJa: Article[] = [
  {
    title: "第1条（個人情報の処理目的）",
    paragraphs: [
      "当社は、次の目的のために個人情報を処理します。処理する個人情報は次の目的以外の用途には利用されず、利用目的が変更される場合には、個人情報保護法第18条に従い別途同意を得るなど必要な措置を講じます。",
      "1. 相談申込の受付および対応：米国大学テニス進学・メンタルウェルネスに関する相談申込の受付、本人確認および連絡、相談の実施と結果の案内。",
      "2. 苦情処理：問い合わせ・苦情申立人の本人確認、問い合わせ内容の確認、事実調査のための連絡・通知、処理結果の通報。",
      "3. 会員登録および管理：入会意思の確認、会員制サービス提供に伴う本人確認・認証、会員資格の維持・管理、サービス利用に関する通知・連絡。",
    ],
  },
  {
    title: "第2条（処理する個人情報の項目）",
    paragraphs: [
      "① 相談申込サービス：当社は相談申込サービスの提供のため、次の個人情報を処理します。",
      "· 必須項目：保護者氏名、連絡先（電話またはメール）",
      "· 任意項目：お子さまの年齢/学年、関心のあるトラック、問い合わせ内容、メールアドレス",
      "② 会員登録サービス：当社は会員登録および会員制サービスの提供のため、次の個人情報を処理します。",
      "· 必須項目：氏名、メールアドレス、電話番号、パスワード、性別、生年月日、区分（選手/アマチュア/保護者）",
      "③ 当社は住民登録番号等の固有識別情報は収集せず、決済機能は提供しません。",
    ],
  },
  {
    title: "第3条（個人情報の処理および保有期間）",
    paragraphs: [
      "① 当社は、法令による保有・利用期間または情報主体から同意を得た保有・利用期間の範囲内で個人情報を処理・保有します。",
      "② 相談申込情報は、相談目的の達成後1年間保有した後に破棄します。ただし、情報主体がそれ以前に削除を求める場合は遅滞なく破棄し、関係法令により保存が必要な場合は当該期間まで保管します。",
      "③ 会員登録情報は会員退会時まで保有し、退会時に遅滞なく破棄します。ただし、関係法令により保存が必要な場合は当該期間まで保管します。",
    ],
  },
  {
    title: "第4条（第三者への個人情報の提供）",
    paragraphs: [
      "① 当社は、情報主体の個人情報を第1条に定める範囲内でのみ処理し、情報主体の同意または法律の特別な規定など個人情報保護法第17条・第18条に該当する場合を除き、第三者へ提供しません。",
      "② 現在、当社は情報主体の個人情報を第三者へ提供していません。今後、第三者提供が必要となる場合は、事前に情報主体から別途同意を得たうえで、本処理方針を通じて公開します。",
    ],
  },
  {
    title: "第5条（個人情報の取扱いの委託）",
    paragraphs: [
      "① 当社は円滑なサービス提供のため、次のとおり個人情報の取扱業務を委託しています。",
      "· 受託者：Supabase, Inc. / 委託業務：相談申込データの保存・管理（データベース）",
      "· 受託者：Vercel, Inc. / 委託業務：ウェブサイトのホスティングおよび運営",
      "·（メール通知を運用する場合）受託者：Resend, Inc. / 委託業務：相談受付通知メールの送信",
      "② 上記受託者は国外（米国等）にサーバーを置く場合があり、当社は委託契約時に個人情報保護法に従い安全な取扱いに関する事項を明示し、受託者を管理・監督します。",
      "③ 委託業務の内容または受託者が変更される場合は、遅滞なく本処理方針を通じて公開します。",
    ],
  },
  {
    title: "第6条（情報主体および法定代理人の権利・義務ならびにその行使方法）",
    paragraphs: [
      "① 情報主体は、当社に対していつでも個人情報の閲覧・訂正・削除・処理停止の請求等の権利を行使できます。",
      "② 権利の行使は書面、電話、電子メール等を通じて行うことができ、当社はこれに遅滞なく対応します。",
      "③ 情報主体が個人情報の誤り等について訂正または削除を求めた場合、当社は訂正または削除が完了するまで当該個人情報を利用または提供しません。",
      "④ 権利の行使は、情報主体の法定代理人または委任を受けた者等の代理人を通じて行うことができます。",
      "⑤ 満14歳未満の児童の個人情報は法定代理人の同意のもとで処理し、本サービスの相談申込は保護者（法定代理人）が行うことを原則とします。",
    ],
  },
  {
    title: "第7条（個人情報の破棄）",
    paragraphs: [
      "① 当社は、保有期間の経過、処理目的の達成等により個人情報が不要となったときは、遅滞なく当該個人情報を破棄します。",
      "② 破棄方法：電子ファイル形式の情報は復元できない技術的方法で削除し、紙の文書は裁断または焼却して破棄します。",
    ],
  },
  {
    title: "第8条（個人情報の安全性確保措置）",
    paragraphs: [
      "当社は個人情報の安全性確保のため、次の措置を講じます。",
      "1. 管理的措置：アクセス権限の最小化および管理者の認証。",
      "2. 技術的措置：データアクセス制御（認証された管理者のみ閲覧可）、通信区間の暗号化（HTTPS）、データベースアクセスポリシー（RLS）の適用。",
      "3. 物理的措置：データはセキュリティが確保されたクラウドインフラ（Supabase・Vercel）に保管。",
    ],
  },
  {
    title: "第9条（個人情報の自動収集装置の設置・運営およびその拒否）",
    paragraphs: [
      "① 当社はサービス利用の分析のため訪問統計ツール（Vercel Analytics）を使用しており、これは個人を識別しない匿名統計を収集します。",
      "② 情報主体はウェブブラウザの設定を通じてCookieの許可・ブロックを設定できます。ただし、ブロックした場合、一部サービスの利用に支障が生じることがあります。",
      "③ 当社はマーケティング・広告目的の識別Cookieや第三者トラッカーを使用しません。",
    ],
  },
  {
    title: "第10条（個人情報保護責任者）",
    paragraphs: [
      "① 当社は、個人情報の処理に関する業務を総括して責任を負い、情報主体の苦情処理および被害救済等のため、次のとおり個人情報保護責任者を指定しています。",
      "· 個人情報保護責任者：[担当者氏名/役職を記載]",
      "· 連絡先：tennis.gcm@gmail.com",
      "② 情報主体は、サービス利用中に生じた個人情報保護に関する問い合わせ・苦情・被害救済等について上記連絡先に問い合わせることができ、当社は遅滞なく回答・対応します。",
    ],
  },
  {
    title: "第11条（権益侵害の救済方法）",
    paragraphs: [
      "情報主体は、個人情報侵害に関する被害救済・相談について、次の機関（韓国）に問い合わせることができます。",
      "· 個人情報紛争調停委員会：1833-6972 (www.kopico.go.kr)",
      "· 個人情報侵害申告センター：118 (privacy.kisa.or.kr)",
      "· 大検察庁：1301 (www.spo.go.kr)",
      "· 警察庁：182 (ecrm.police.go.kr)",
    ],
  },
  {
    title: "第12条（個人情報処理方針の施行および変更）",
    paragraphs: [
      "本個人情報処理方針は施行日から適用され、法令・方針または内容の追加・削除・修正がある場合は、変更事項の施行7日前から本サイトを通じて告知します。",
    ],
  },
];

const articlesIt: Article[] = [
  {
    title: "Articolo 1 (Finalità del trattamento dei dati personali)",
    paragraphs: [
      "La Società tratta i dati personali per le finalità di seguito indicate. I dati personali trattati non sono utilizzati per finalità diverse da quelle seguenti e, in caso di modifica della finalità, la Società adotta le misure necessarie, quale l'ottenimento di un consenso separato, ai sensi dell'articolo 18 del Personal Information Protection Act.",
      "1. Ricezione e gestione delle richieste di consulenza: ricezione delle richieste di consulenza relative all'ammissione al tennis universitario negli Stati Uniti e al benessere mentale, identificazione e contatto del richiedente, svolgimento della consulenza e comunicazione dei risultati.",
      "2. Gestione dei reclami: verifica dell'identità di chi presenta una richiesta o un reclamo, conferma della richiesta, contatto/notifica per l'accertamento dei fatti e comunicazione dell'esito.",
      "3. Registrazione e gestione dei membri: conferma della volontà di registrarsi, identificazione e autenticazione dei membri per i servizi riservati agli iscritti, mantenimento e gestione dell'iscrizione, notifiche/contatti relativi all'uso del servizio.",
    ],
  },
  {
    title: "Articolo 2 (Categorie di dati personali trattati)",
    paragraphs: [
      "① Servizio di richiesta di consulenza: la Società tratta i seguenti dati personali per fornire il servizio di richiesta di consulenza.",
      "· Obbligatori: nome del genitore/tutore, recapito (telefono o email)",
      "· Facoltativi: età/classe del figlio, percorso di interesse, dettagli della richiesta, email",
      "② Servizio di iscrizione: la Società tratta i seguenti dati personali per la registrazione e i servizi riservati ai membri.",
      "· Obbligatori: nome, email, numero di telefono, password, genere, data di nascita, ruolo (atleta/amatore/genitore)",
      "③ La Società non raccoglie identificativi univoci quali il numero di registrazione del residente e non fornisce funzioni di pagamento.",
    ],
  },
  {
    title: "Articolo 3 (Periodo di trattamento e conservazione dei dati personali)",
    paragraphs: [
      "① La Società tratta e conserva i dati personali entro il periodo di conservazione/uso previsto dalla legge o acconsentito dall'interessato.",
      "② Le informazioni relative alle richieste di consulenza sono conservate per 1 anno dopo il raggiungimento della finalità della consulenza e quindi distrutte. Tuttavia, se l'interessato ne richiede la cancellazione prima, esse sono distrutte senza indugio; qualora la conservazione sia richiesta dalle leggi applicabili, sono conservate per il periodo previsto.",
      "③ I dati di iscrizione sono conservati fino al recesso dall'iscrizione e distrutti senza indugio al momento del recesso. Tuttavia, qualora la conservazione sia richiesta dalle leggi applicabili, sono conservati per il periodo previsto.",
    ],
  },
  {
    title: "Articolo 4 (Comunicazione dei dati personali a terzi)",
    paragraphs: [
      "① La Società tratta i dati personali dell'interessato esclusivamente nell'ambito specificato all'articolo 1 e non li comunica a terzi, salvo nei casi previsti dagli articoli 17 e 18 del Personal Information Protection Act, quali il consenso dell'interessato o specifiche disposizioni di legge.",
      "② Attualmente la Società non comunica a terzi i dati personali dell'interessato. Qualora in futuro la comunicazione a terzi si rendesse necessaria, la Società otterrà preventivamente un consenso separato dall'interessato e lo renderà noto tramite la presente informativa.",
    ],
  },
  {
    title: "Articolo 5 (Esternalizzazione del trattamento dei dati personali)",
    paragraphs: [
      "① Per una fornitura regolare del servizio, la Società esternalizza le attività di trattamento dei dati personali come segue.",
      "· Responsabile: Supabase, Inc. / Attività: archiviazione e gestione dei dati delle richieste di consulenza (database)",
      "· Responsabile: Vercel, Inc. / Attività: hosting e gestione del sito web",
      "· (In caso di gestione delle notifiche via email) Responsabile: Resend, Inc. / Attività: invio delle email di notifica di ricezione della richiesta di consulenza",
      "② I suddetti responsabili possono gestire server all'estero (ad es. negli Stati Uniti). Nella stipula dei contratti di esternalizzazione, la Società specifica le questioni relative al trattamento sicuro conformemente al Personal Information Protection Act e gestisce e vigila sui responsabili.",
      "③ In caso di modifica del contenuto delle attività esternalizzate o del responsabile, la Società lo renderà noto senza indugio tramite la presente informativa.",
    ],
  },
  {
    title: "Articolo 6 (Diritti e obblighi dell'interessato e del rappresentante legale e modalità di esercizio)",
    paragraphs: [
      "① L'interessato può esercitare in qualsiasi momento i diritti di accesso, rettifica, cancellazione o limitazione del trattamento dei propri dati personali.",
      "② Tali diritti possono essere esercitati per iscritto, per telefono o via email, e la Società vi darà seguito senza indugio.",
      "③ Se l'interessato richiede la rettifica o la cancellazione di errori nei dati personali, la Società non utilizzerà né comunicherà i dati in questione fino al completamento della rettifica o della cancellazione.",
      "④ I diritti possono essere esercitati tramite un rappresentante, quale il rappresentante legale dell'interessato o un delegato autorizzato.",
      "⑤ I dati personali dei minori di 14 anni sono trattati con il consenso di un rappresentante legale e le richieste di consulenza tramite il presente servizio sono, in linea di principio, effettuate da un genitore/tutore (rappresentante legale).",
    ],
  },
  {
    title: "Articolo 7 (Distruzione dei dati personali)",
    paragraphs: [
      "① Quando i dati personali non sono più necessari a causa della scadenza del periodo di conservazione o del raggiungimento della finalità del trattamento, la Società li distrugge senza indugio.",
      "② Modalità di distruzione: le informazioni in formato elettronico sono eliminate con metodi tecnici che le rendono irrecuperabili; i documenti cartacei sono triturati o inceneriti.",
    ],
  },
  {
    title: "Articolo 8 (Misure per garantire la sicurezza dei dati personali)",
    paragraphs: [
      "La Società adotta le seguenti misure per garantire la sicurezza dei dati personali.",
      "1. Misure amministrative: riduzione al minimo dei privilegi di accesso e autenticazione degli amministratori.",
      "2. Misure tecniche: controllo dell'accesso ai dati (visualizzabili solo da amministratori autenticati), crittografia nella trasmissione (HTTPS) e criteri di accesso al database (RLS).",
      "3. Misure fisiche: i dati sono archiviati in un'infrastruttura cloud sicura (Supabase, Vercel).",
    ],
  },
  {
    title: "Articolo 9 (Installazione/gestione dei dispositivi di raccolta automatica e relativo rifiuto)",
    paragraphs: [
      "① La Società utilizza uno strumento di statistiche di visita (Vercel Analytics) per analizzare l'uso del servizio, che raccoglie statistiche anonime che non identificano le persone.",
      "② L'interessato può consentire o bloccare i cookie tramite le impostazioni del proprio browser. Tuttavia, il blocco dei cookie può comportare difficoltà nell'uso di alcuni servizi.",
      "③ La Società non utilizza cookie identificativi a fini di marketing/pubblicità né tracker di terze parti.",
    ],
  },
  {
    title: "Articolo 10 (Responsabile della protezione dei dati personali)",
    paragraphs: [
      "① La Società designa un Responsabile della protezione dei dati personali, come indicato di seguito, per assumere la responsabilità complessiva del trattamento dei dati personali e per gestire i reclami e i rimedi degli interessati.",
      "· Responsabile della protezione dei dati personali: [nome/qualifica da specificare]",
      "· Contatto: tennis.gcm@gmail.com",
      "② L'interessato può rivolgere qualsiasi richiesta, reclamo o domanda di rimedio relativa alla protezione dei dati personali derivante dall'uso del servizio al contatto sopra indicato, e la Società risponderà e provvederà senza indugio.",
    ],
  },
  {
    title: "Articolo 11 (Rimedi per la violazione dei diritti)",
    paragraphs: [
      "L'interessato può richiedere rimedi o consulenza per la violazione dei dati personali ai seguenti organismi (Corea).",
      "· Comitato di mediazione delle controversie sui dati personali: 1833-6972 (www.kopico.go.kr)",
      "· Centro di segnalazione delle violazioni dei dati personali: 118 (privacy.kisa.or.kr)",
      "· Procura Suprema: 1301 (www.spo.go.kr)",
      "· Agenzia nazionale di polizia: 182 (ecrm.police.go.kr)",
    ],
  },
  {
    title: "Articolo 12 (Entrata in vigore e modifica dell'informativa sulla privacy)",
    paragraphs: [
      "La presente Informativa sulla privacy si applica dalla sua data di entrata in vigore. In caso di aggiunte, cancellazioni o modifiche dovute a leggi, politiche o contenuti, la Società le annuncerà tramite il sito a partire da 7 giorni prima della data di entrata in vigore delle modifiche.",
    ],
  },
];

const articlesFr: Article[] = [
  {
    title: "Article 1 (Finalités du traitement des données personnelles)",
    paragraphs: [
      "La Société traite les données personnelles aux fins indiquées ci-dessous. Les données personnelles traitées ne sont pas utilisées à d'autres fins que celles qui suivent et, en cas de changement de finalité, la Société prend les mesures nécessaires, telles que l'obtention d'un consentement distinct, conformément à l'article 18 de la loi sur la protection des renseignements personnels.",
      "1. Réception et traitement des demandes de consultation : réception des demandes de consultation relatives à l'admission au tennis universitaire aux États-Unis et au bien-être mental, identification et contact du demandeur, réalisation de la consultation et communication des résultats.",
      "2. Traitement des réclamations : vérification de l'identité de l'auteur d'une demande ou d'une réclamation, confirmation de la demande, contact/notification à des fins d'établissement des faits et communication du résultat.",
      "3. Inscription et gestion des membres : confirmation de l'intention de s'inscrire, identification et authentification des membres pour les services réservés aux membres, maintien et gestion de l'adhésion, notifications/contacts relatifs à l'utilisation du service.",
    ],
  },
  {
    title: "Article 2 (Catégories de données personnelles traitées)",
    paragraphs: [
      "① Service de demande de consultation : la Société traite les données personnelles suivantes pour fournir le service de demande de consultation.",
      "· Obligatoires : nom du responsable légal, coordonnées (téléphone ou e-mail)",
      "· Facultatives : âge/niveau scolaire de l'enfant, parcours d'intérêt, détails de la demande, e-mail",
      "② Service d'adhésion : la Société traite les données personnelles suivantes pour l'inscription et les services réservés aux membres.",
      "· Obligatoires : nom, e-mail, numéro de téléphone, mot de passe, sexe, date de naissance, statut (joueur/amateur/parent)",
      "③ La Société ne collecte pas d'identifiants uniques tels que le numéro d'enregistrement de résident et ne propose pas de fonctions de paiement.",
    ],
  },
  {
    title: "Article 3 (Durée de traitement et de conservation des données personnelles)",
    paragraphs: [
      "① La Société traite et conserve les données personnelles dans la limite de la durée de conservation/utilisation prévue par la loi ou consentie par la personne concernée.",
      "② Les informations relatives aux demandes de consultation sont conservées pendant 1 an après la réalisation de la finalité de la consultation, puis détruites. Toutefois, si la personne concernée en demande la suppression avant ce terme, elles sont détruites sans délai ; lorsque la conservation est requise par les lois applicables, elles sont conservées pour la durée requise.",
      "③ Les données d'adhésion sont conservées jusqu'au retrait de l'adhésion et détruites sans délai lors du retrait. Toutefois, lorsque la conservation est requise par les lois applicables, elles sont conservées pour la durée requise.",
    ],
  },
  {
    title: "Article 4 (Communication des données personnelles à des tiers)",
    paragraphs: [
      "① La Société ne traite les données personnelles de la personne concernée que dans la limite définie à l'article 1 et ne les communique pas à des tiers, sauf dans les cas relevant des articles 17 et 18 de la loi sur la protection des renseignements personnels, tels que le consentement de la personne concernée ou des dispositions légales particulières.",
      "② Actuellement, la Société ne communique pas les données personnelles de la personne concernée à des tiers. Si une telle communication devenait nécessaire à l'avenir, la Société obtiendrait au préalable un consentement distinct de la personne concernée et le divulguerait via la présente politique.",
    ],
  },
  {
    title: "Article 5 (Sous-traitance du traitement des données personnelles)",
    paragraphs: [
      "① Pour une fourniture fluide du service, la Société sous-traite les opérations de traitement des données personnelles comme suit.",
      "· Sous-traitant : Supabase, Inc. / Mission : stockage et gestion des données des demandes de consultation (base de données)",
      "· Sous-traitant : Vercel, Inc. / Mission : hébergement et exploitation du site web",
      "· (En cas de gestion des notifications par e-mail) Sous-traitant : Resend, Inc. / Mission : envoi des e-mails de notification de réception des demandes de consultation",
      "② Les sous-traitants susmentionnés peuvent exploiter des serveurs à l'étranger (par ex. aux États-Unis). Lors de la conclusion des contrats de sous-traitance, la Société précise les points relatifs au traitement sécurisé conformément à la loi sur la protection des renseignements personnels et gère et supervise les sous-traitants.",
      "③ En cas de modification du contenu des missions sous-traitées ou du sous-traitant, la Société le divulguera sans délai via la présente politique.",
    ],
  },
  {
    title: "Article 6 (Droits et obligations de la personne concernée et du représentant légal, et modalités d'exercice)",
    paragraphs: [
      "① La personne concernée peut, à tout moment, exercer des droits tels que la demande d'accès, de rectification, de suppression ou de limitation du traitement de ses données personnelles.",
      "② Ces droits peuvent être exercés par écrit, par téléphone ou par e-mail, et la Société y donne suite sans délai.",
      "③ Si la personne concernée demande la rectification ou la suppression d'erreurs dans ses données personnelles, la Société n'utilisera ni ne communiquera les données concernées jusqu'à l'achèvement de la rectification ou de la suppression.",
      "④ Les droits peuvent être exercés par l'intermédiaire d'un représentant, tel que le représentant légal de la personne concernée ou un mandataire autorisé.",
      "⑤ Les données personnelles des enfants de moins de 14 ans sont traitées avec le consentement d'un représentant légal, et les demandes de consultation via le présent service sont, en principe, effectuées par un responsable légal (représentant légal).",
    ],
  },
  {
    title: "Article 7 (Destruction des données personnelles)",
    paragraphs: [
      "① Lorsque les données personnelles deviennent inutiles en raison de l'expiration de la durée de conservation ou de la réalisation de la finalité du traitement, la Société les détruit sans délai.",
      "② Méthode de destruction : les informations sous forme électronique sont supprimées par des méthodes techniques les rendant irrécupérables ; les documents papier sont broyés ou incinérés.",
    ],
  },
  {
    title: "Article 8 (Mesures visant à assurer la sécurité des données personnelles)",
    paragraphs: [
      "La Société prend les mesures suivantes pour assurer la sécurité des données personnelles.",
      "1. Mesures administratives : réduction au minimum des droits d'accès et authentification des administrateurs.",
      "2. Mesures techniques : contrôle de l'accès aux données (consultables uniquement par des administrateurs authentifiés), chiffrement de la transmission (HTTPS) et politiques d'accès à la base de données (RLS).",
      "3. Mesures physiques : les données sont stockées sur une infrastructure cloud sécurisée (Supabase, Vercel).",
    ],
  },
  {
    title: "Article 9 (Installation/exploitation des dispositifs de collecte automatique et refus de ceux-ci)",
    paragraphs: [
      "① La Société utilise un outil de statistiques de visite (Vercel Analytics) pour analyser l'utilisation du service, qui collecte des statistiques anonymes n'identifiant pas les personnes.",
      "② La personne concernée peut autoriser ou bloquer les cookies via les paramètres de son navigateur. Toutefois, le blocage des cookies peut entraîner des difficultés pour utiliser certains services.",
      "③ La Société n'utilise pas de cookies d'identification à des fins de marketing/publicité ni de traceurs tiers.",
    ],
  },
  {
    title: "Article 10 (Responsable de la protection des données personnelles)",
    paragraphs: [
      "① La Société désigne un responsable de la protection des données personnelles, comme indiqué ci-dessous, pour assumer la responsabilité globale du traitement des données personnelles et traiter les réclamations et les recours des personnes concernées.",
      "· Responsable de la protection des données personnelles : [nom/fonction à préciser]",
      "· Contact : tennis.gcm@gmail.com",
      "② La personne concernée peut adresser toute question, réclamation ou demande de recours relative à la protection des données personnelles découlant de l'utilisation du service au contact ci-dessus, et la Société y répondra et y donnera suite sans délai.",
    ],
  },
  {
    title: "Article 11 (Recours en cas d'atteinte aux droits)",
    paragraphs: [
      "La personne concernée peut demander des recours ou des conseils en cas d'atteinte à ses données personnelles auprès des organismes suivants (Corée).",
      "· Comité de médiation des litiges relatifs aux données personnelles : 1833-6972 (www.kopico.go.kr)",
      "· Centre de signalement des atteintes aux données personnelles : 118 (privacy.kisa.or.kr)",
      "· Parquet suprême : 1301 (www.spo.go.kr)",
      "· Agence nationale de la police : 182 (ecrm.police.go.kr)",
    ],
  },
  {
    title: "Article 12 (Entrée en vigueur et modification de la politique de confidentialité)",
    paragraphs: [
      "La présente politique de confidentialité s'applique à compter de sa date d'entrée en vigueur. En cas d'ajout, de suppression ou de modification dû aux lois, aux politiques ou au contenu, la Société l'annoncera via le site à partir de 7 jours avant la date d'entrée en vigueur des modifications.",
    ],
  },
];

const articlesEs: Article[] = [
  {
    title: "Artículo 1 (Finalidad del tratamiento de datos personales)",
    paragraphs: [
      "La Empresa trata los datos personales para los fines indicados a continuación. Los datos personales tratados no se utilizan para fines distintos de los siguientes y, en caso de cambio de finalidad, la Empresa adoptará las medidas necesarias, como la obtención de un consentimiento por separado, de conformidad con el artículo 18 de la Ley de Protección de Información Personal.",
      "1. Recepción y atención de solicitudes de consulta: recepción de solicitudes de consulta relacionadas con la admisión al tenis universitario en los Estados Unidos y el bienestar mental, identificación y contacto del solicitante, realización de la consulta e información de los resultados.",
      "2. Gestión de quejas: verificación de la identidad de quien realiza una consulta o una queja, confirmación de la consulta, contacto/notificación para la investigación de los hechos y comunicación del resultado.",
      "3. Registro y gestión de miembros: confirmación de la intención de registrarse, identificación y autenticación de los miembros para los servicios de membresía, mantenimiento y gestión de la membresía, y notificaciones/contactos relativos al uso del servicio.",
    ],
  },
  {
    title: "Artículo 2 (Categorías de datos personales tratados)",
    paragraphs: [
      "① Servicio de solicitud de consulta: la Empresa trata los siguientes datos personales para prestar el servicio de solicitud de consulta.",
      "· Obligatorios: nombre del tutor, datos de contacto (teléfono o correo electrónico)",
      "· Opcionales: edad/curso del hijo, itinerario de interés, detalles de la consulta, correo electrónico",
      "② Servicio de membresía: la Empresa trata los siguientes datos personales para el registro y los servicios de membresía.",
      "· Obligatorios: nombre, correo electrónico, número de teléfono, contraseña, sexo, fecha de nacimiento, rol (jugador/amateur/padre o madre)",
      "③ La Empresa no recopila identificadores únicos como el número de registro de residente y no ofrece funciones de pago.",
    ],
  },
  {
    title: "Artículo 3 (Período de tratamiento y conservación de los datos personales)",
    paragraphs: [
      "① La Empresa trata y conserva los datos personales dentro del período de conservación/uso exigido por la ley o consentido por el interesado.",
      "② La información de las solicitudes de consulta se conserva durante 1 año tras alcanzarse la finalidad de la consulta y luego se destruye. No obstante, si el interesado solicita su supresión antes, se destruye sin demora; cuando la conservación sea exigida por las leyes aplicables, se conserva durante el período requerido.",
      "③ Los datos de membresía se conservan hasta la baja de la membresía y se destruyen sin demora al darse de baja. No obstante, cuando la conservación sea exigida por las leyes aplicables, se conservan durante el período requerido.",
    ],
  },
  {
    title: "Artículo 4 (Comunicación de datos personales a terceros)",
    paragraphs: [
      "① La Empresa trata los datos personales del interesado únicamente dentro del ámbito especificado en el artículo 1 y no los comunica a terceros, salvo en los casos previstos en los artículos 17 y 18 de la Ley de Protección de Información Personal, como el consentimiento del interesado o disposiciones legales especiales.",
      "② Actualmente, la Empresa no comunica los datos personales del interesado a terceros. Si en el futuro fuera necesaria la comunicación a terceros, la Empresa obtendrá previamente un consentimiento por separado del interesado y lo divulgará a través de la presente política.",
    ],
  },
  {
    title: "Artículo 5 (Encargo del tratamiento de datos personales)",
    paragraphs: [
      "① Para una prestación fluida del servicio, la Empresa encarga las tareas de tratamiento de datos personales de la siguiente manera.",
      "· Encargado: Supabase, Inc. / Tarea: almacenamiento y gestión de los datos de las solicitudes de consulta (base de datos)",
      "· Encargado: Vercel, Inc. / Tarea: alojamiento y operación del sitio web",
      "· (Cuando se gestionen notificaciones por correo electrónico) Encargado: Resend, Inc. / Tarea: envío de correos electrónicos de notificación de recepción de la consulta",
      "② Los encargados mencionados pueden operar servidores en el extranjero (p. ej., en los Estados Unidos). Al celebrar los contratos de encargo, la Empresa especifica las cuestiones relativas al tratamiento seguro de conformidad con la Ley de Protección de Información Personal y gestiona y supervisa a los encargados.",
      "③ Si cambia el contenido de las tareas encargadas o el encargado, la Empresa lo divulgará sin demora a través de la presente política.",
    ],
  },
  {
    title: "Artículo 6 (Derechos y obligaciones del interesado y del representante legal, y forma de ejercerlos)",
    paragraphs: [
      "① El interesado puede ejercer en cualquier momento derechos como solicitar el acceso, la rectificación, la supresión o la limitación del tratamiento de sus datos personales.",
      "② Dichos derechos pueden ejercerse por escrito, por teléfono o por correo electrónico, y la Empresa les dará curso sin demora.",
      "③ Si el interesado solicita la rectificación o supresión de errores en sus datos personales, la Empresa no utilizará ni comunicará los datos en cuestión hasta que se complete la rectificación o supresión.",
      "④ Los derechos pueden ejercerse a través de un representante, como el representante legal del interesado o un apoderado autorizado.",
      "⑤ Los datos personales de menores de 14 años se tratan con el consentimiento de un representante legal, y las solicitudes de consulta a través de este servicio las realiza, en principio, un tutor (representante legal).",
    ],
  },
  {
    title: "Artículo 7 (Destrucción de los datos personales)",
    paragraphs: [
      "① Cuando los datos personales dejen de ser necesarios por la expiración del período de conservación o el cumplimiento de la finalidad del tratamiento, la Empresa los destruirá sin demora.",
      "② Método de destrucción: la información en formato electrónico se elimina mediante métodos técnicos que la hacen irrecuperable; los documentos en papel se trituran o incineran.",
    ],
  },
  {
    title: "Artículo 8 (Medidas para garantizar la seguridad de los datos personales)",
    paragraphs: [
      "La Empresa adopta las siguientes medidas para garantizar la seguridad de los datos personales.",
      "1. Medidas administrativas: minimización de los privilegios de acceso y autenticación de los administradores.",
      "2. Medidas técnicas: control de acceso a los datos (solo pueden consultarlos administradores autenticados), cifrado en la transmisión (HTTPS) y políticas de acceso a la base de datos (RLS).",
      "3. Medidas físicas: los datos se almacenan en una infraestructura en la nube segura (Supabase, Vercel).",
    ],
  },
  {
    title: "Artículo 9 (Instalación/operación de dispositivos de recopilación automática y su rechazo)",
    paragraphs: [
      "① La Empresa utiliza una herramienta de estadísticas de visitas (Vercel Analytics) para analizar el uso del servicio, que recopila estadísticas anónimas que no identifican a las personas.",
      "② El interesado puede permitir o bloquear las cookies mediante la configuración de su navegador. No obstante, bloquear las cookies puede dificultar el uso de algunos servicios.",
      "③ La Empresa no utiliza cookies de identificación con fines de marketing/publicidad ni rastreadores de terceros.",
    ],
  },
  {
    title: "Artículo 10 (Responsable de la protección de datos personales)",
    paragraphs: [
      "① La Empresa designa a un Responsable de la Protección de Datos Personales, como se indica a continuación, para asumir la responsabilidad general del tratamiento de datos personales y atender las quejas y los recursos de los interesados.",
      "· Responsable de la Protección de Datos Personales: [nombre/cargo por especificar]",
      "· Contacto: tennis.gcm@gmail.com",
      "② El interesado puede dirigir cualquier consulta, queja o solicitud de recurso relativa a la protección de datos personales derivada del uso del servicio al contacto anterior, y la Empresa responderá y la tramitará sin demora.",
    ],
  },
  {
    title: "Artículo 11 (Vías de reparación ante la vulneración de derechos)",
    paragraphs: [
      "El interesado puede solicitar reparación o asesoramiento por la vulneración de datos personales a los siguientes organismos (Corea).",
      "· Comité de Mediación de Conflictos sobre Datos Personales: 1833-6972 (www.kopico.go.kr)",
      "· Centro de Denuncias de Vulneración de Datos Personales: 118 (privacy.kisa.or.kr)",
      "· Fiscalía Suprema: 1301 (www.spo.go.kr)",
      "· Agencia Nacional de Policía: 182 (ecrm.police.go.kr)",
    ],
  },
  {
    title: "Artículo 12 (Entrada en vigor y modificación de la Política de Privacidad)",
    paragraphs: [
      "La presente Política de Privacidad se aplica a partir de su fecha de entrada en vigor. En caso de adiciones, supresiones o modificaciones debidas a leyes, políticas o contenido, la Empresa las anunciará a través del sitio desde 7 días antes de la fecha de entrada en vigor de los cambios.",
    ],
  },
];

const articlesByLocale: Record<Locale, Article[]> = {
  ko: articles,
  en: articlesEn,
  zh: articlesZh,
  ja: articlesJa,
  it: articlesIt,
  fr: articlesFr,
  es: articlesEs,
};

export default async function PrivacyPage() {
  const locale = await getLocale();
  const list = articlesByLocale[locale] ?? articlesEn;
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
            {pick(locale, {
              ko: "개인정보 처리방침",
              en: "Privacy Policy",
              zh: "隐私政策",
              ja: "個人情報処理方針",
              it: "Informativa sulla privacy",
              fr: "Politique de confidentialité",
              es: "Política de Privacidad",
            })}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {pick(locale, {
              ko: "Effective date: 2026년 6월 11일",
              en: "Effective date: June 11, 2026",
              zh: "生效日期：2026年6月11日",
              ja: "施行日：2026年6月11日",
              it: "Data di entrata in vigore: 11 giugno 2026",
              fr: "Date d'entrée en vigueur : 11 juin 2026",
              es: "Fecha de entrada en vigor: 11 de junio de 2026",
            })}
          </p>
          <p className="mt-1 text-sm text-muted">
            {pick(locale, {
              ko: "This policy is provided in Korean as the governing language.",
              en: "This English version is a courtesy translation. The Korean version is the official, legally governing text; in case of any discrepancy, the Korean version prevails.",
              zh: "本中文版本为便利性翻译。韩文版本为正式且具法律约束力的文本；如有任何不一致，以韩文版本为准。",
              ja: "この日本語版は参考訳です。韓国語版が正式かつ法的に優先する本文であり、相違がある場合は韓国語版が優先します。",
              it: "Questa versione è una traduzione di cortesia. La versione coreana è il testo ufficiale e giuridicamente vincolante; in caso di discrepanze, prevale la versione coreana.",
              fr: "Cette version est une traduction de courtoisie. La version coréenne est le texte officiel et juridiquement contraignant ; en cas de divergence, la version coréenne prévaut.",
              es: "Esta versión es una traducción de cortesía. La versión coreana es el texto oficial y jurídicamente vinculante; en caso de discrepancia, prevalecerá la versión coreana.",
            })}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ink/90">
            {pick(locale, {
              ko: 'GCM(Global Champions Makers, 이하 "회사")은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.',
              en: 'GCM (Global Champions Makers, the "Company") establishes and discloses this Privacy Policy as follows, in accordance with Article 30 of the Personal Information Protection Act, to protect data subjects\' personal information and to handle related grievances promptly and smoothly.',
              zh: 'GCM（Global Champions Makers，以下简称"公司"）依据《个人信息保护法》第30条，为保护信息主体的个人信息并迅速、顺畅地处理相关投诉，特制定并公开如下个人信息处理方针。',
              ja: 'GCM（Global Champions Makers、以下「当社」）は、個人情報保護法第30条に基づき、情報主体の個人情報を保護し、これに関する苦情を迅速かつ円滑に処理できるよう、次のとおり個人情報処理方針を策定・公開します。',
              it: 'GCM (Global Champions Makers, la "Società") stabilisce e pubblica la presente Informativa sulla privacy come segue, ai sensi dell\'articolo 30 del Personal Information Protection Act, al fine di proteggere i dati personali degli interessati e di gestire in modo tempestivo ed efficiente i relativi reclami.',
              fr: 'GCM (Global Champions Makers, la « Société ») établit et publie la présente politique de confidentialité comme suit, conformément à l\'article 30 de la loi sur la protection des renseignements personnels, afin de protéger les données personnelles des personnes concernées et de traiter rapidement et efficacement les réclamations connexes.',
              es: 'GCM (Global Champions Makers, la "Empresa") establece y divulga la presente Política de Privacidad como se indica a continuación, de conformidad con el artículo 30 de la Ley de Protección de Información Personal, para proteger los datos personales de los interesados y atender de forma rápida y fluida las reclamaciones relacionadas.',
            })}
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
