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
      ko: "이용약관 | GCM Tennis Academy",
      en: "Terms of Service | GCM Tennis Academy",
      zh: "服务条款 | GCM Tennis Academy",
      ja: "利用規約 | GCM Tennis Academy",
      it: "Termini di servizio | GCM Tennis Academy",
      fr: "Conditions d'utilisation | GCM Tennis Academy",
      es: "Términos del servicio | GCM Tennis Academy",
    }),
  };
}

type Article = { title: string; paragraphs: string[] };

const articles: { title: string; paragraphs: string[] }[] = [
  {
    title: "제1조 (목적)",
    paragraphs: [
      '본 이용약관은 GCM(Global Champions Makers, 이하 "사이트")이 제공하는 서비스의 이용조건과 운영에 관한 제반 사항 규정을 목적으로 합니다.',
    ],
  },
  {
    title: "제2조 (용어의 정의)",
    paragraphs: [
      "본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.",
      "① 이용자 : 사이트에 접속하여 본 약관에 따라 사이트가 제공하는 서비스를 이용하는 자를 말합니다.",
      "② 이용계약 : 사이트 이용과 관련하여 사이트와 이용자 간에 체결하는 계약을 말합니다.",
      "③ 상담 신청 : 이용자가 사이트의 상담 신청 양식을 통해 개인정보를 제공하고 상담을 요청하는 것을 말합니다.",
      "④ 운영자 : 서비스를 개설하여 운영하는 GCM을 말합니다.",
    ],
  },
  {
    title: "제3조 (약관 외 준칙)",
    paragraphs: [
      "운영자는 필요한 경우 별도로 운영정책을 공지·안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.",
    ],
  },
  {
    title: "제4조 (서비스의 제공)",
    paragraphs: [
      "① 사이트는 미국 대학 테니스 진학 및 멘탈 웰니스에 관한 정보 제공, 상담 신청 접수 등의 서비스를 제공합니다.",
      "② 운영자는 서비스의 내용을 변경할 수 있으며, 변경 시 그 내용을 사이트에 공지합니다.",
    ],
  },
  {
    title: "제5조 (상담 신청)",
    paragraphs: [
      "① 상담을 신청하려는 이용자는 사이트가 요청하는 정보(보호자명, 연락처, 이메일 등)를 정확히 제공해야 합니다.",
      "② 타인의 정보를 도용하거나 허위 정보를 등록한 이용자는 서비스 이용과 관련하여 권리를 주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.",
    ],
  },
  {
    title: "제6조 (개인정보처리방침)",
    paragraphs: [
      "운영자는 관계 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위하여 노력하며, 개인정보의 수집·이용·보관·파기에 관한 사항은 사이트의 개인정보처리방침을 따릅니다.",
      "단, 이용자의 귀책 사유로 인해 노출된 정보에 대해 운영자는 일체의 책임을 지지 않습니다.",
    ],
  },
  {
    title: "제7조 (운영자의 의무)",
    paragraphs: [
      "① 운영자는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우 가급적 빨리 처리하여야 합니다. 다만 신속한 처리가 곤란한 경우에는 사후에 공지 또는 전자우편 등을 통해 안내합니다.",
      "② 운영자는 계속적이고 안정적인 서비스 제공을 위하여 설비에 장애가 생기거나 유실된 때에는 이를 지체 없이 수리 또는 복구하도록 노력합니다. 다만 천재지변 또는 부득이한 사유가 있는 경우 서비스 운영을 일시 정지할 수 있습니다.",
    ],
  },
  {
    title: "제8조 (이용자의 의무)",
    paragraphs: [
      "① 이용자는 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정, 공지사항 및 관계 법령을 준수하여야 하며, 사이트의 업무를 방해하거나 명예를 손상하는 행위를 해서는 안 됩니다.",
      "② 이용자는 운영자의 명시적 동의 없이 서비스 이용 권한, 기타 이용계약상 지위를 타인에게 양도·증여할 수 없습니다.",
      "③ 이용자는 운영자 및 제3자의 지적 재산권을 침해해서는 안 됩니다.",
    ],
  },
  {
    title: "제9조 (서비스 이용 시간)",
    paragraphs: [
      "① 서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다. 단, 시스템 정기점검·증설·교체 등을 위해 사이트가 정한 날이나 시간에 서비스를 일시 중단할 수 있습니다.",
      "② 사이트는 긴급한 시스템 점검, 국가비상사태·정전·천재지변 등 불가항력, 기간통신사업자의 전기통신 서비스 중지, 이용 폭주 등의 경우 사전 공지 없이 서비스를 일시적 혹은 영구적으로 중단할 수 있습니다.",
      "③ 서비스 중단의 경우 사이트는 사전에 공지합니다. 단, 통제할 수 없는 사유로 사전 공지가 불가능한 경우 사후 공지로 대신합니다.",
    ],
  },
  {
    title: "제10조 (서비스 이용 제한)",
    paragraphs: [
      "이용자는 다음 각 호에 해당하는 행위를 하여서는 아니 되며, 해당 행위를 한 경우 사이트는 서비스 이용 제한 및 적법한 조치를 할 수 있습니다.",
      "① 정보 등록·변경 시 허위 내용을 등록하는 행위",
      "② 타인의 사이트 이용을 방해하거나 정보를 도용하는 행위",
      "③ 운영진, 직원 또는 관계자를 사칭하는 행위",
      "④ 사이트 또는 제3자의 인격권·지적재산권을 침해하거나 업무를 방해하는 행위",
      "⑤ 타인에 대한 개인정보를 동의 없이 수집·저장·공개하는 행위",
      "⑥ 범죄와 결부된다고 객관적으로 판단되는 행위",
      "⑦ 기타 관련 법령에 위배되는 행위",
    ],
  },
  {
    title: "제11조 (게시물의 관리 및 저작권)",
    paragraphs: [
      "① 사이트에 게재된 콘텐츠(텍스트·이미지 등)의 저작권은 운영자에게 귀속되며, 운영자의 사전 동의 없이 복제·배포·상업적 이용을 할 수 없습니다.",
      "② 공공기관의 시정요구가 있거나 위법한 게시물로 판단되는 경우 운영자는 사전 동의 없이 해당 게시물을 삭제하거나 이동할 수 있습니다.",
    ],
  },
  {
    title: "제12조 (손해배상)",
    paragraphs: [
      "① 서비스 이용과 관련하여 발생한 모든 민·형법상 책임은 1차적으로 이용자 본인에게 있습니다.",
      "② 이용자가 받은 손해가 천재지변 등 불가항력이거나 이용자의 고의 또는 과실로 인하여 발생한 때에는 운영자는 손해배상을 하지 않습니다.",
    ],
  },
  {
    title: "제13조 (면책)",
    paragraphs: [
      "① 운영자는 서비스 제공으로부터 기대되는 이익을 이용자가 얻지 못하였거나 서비스 자료의 취사선택·이용으로 발생한 손해에 대하여 책임이 면제됩니다.",
      "② 운영자는 통신업자가 제공하는 전기통신 서비스의 장애로 인한 손해에 대하여 책임이 면제됩니다.",
      "③ 운영자는 이용자가 게시 또는 전송한 자료의 진위·신뢰도·정확성에 대하여 책임지지 않습니다.",
      "④ 운영자는 이용자의 귀책 사유로 인한 서비스 이용 장애에 대하여 책임지지 않습니다.",
      "⑤ 운영자는 서버 등 설비의 관리·점검·보수 과정 또는 소프트웨어 운용 과정에서 고의 또는 중대한 과실 없이 발생한 시스템 장애, 제3자의 공격, 컴퓨터 바이러스 유포 등 불가항력적 사유로 인한 손해에 대하여 책임지지 않습니다.",
    ],
  },
];

// 영문 참고 번역(courtesy translation) — 한글본이 정본이며, 불일치 시 한글본이 우선한다.
const articlesEn: { title: string; paragraphs: string[] }[] = [
  {
    title: "Article 1 (Purpose)",
    paragraphs: [
      'These Terms of Service are intended to set out the conditions of use and matters concerning the operation of the services provided by GCM (Global Champions Makers, the "Site").',
    ],
  },
  {
    title: "Article 2 (Definitions)",
    paragraphs: [
      "The definitions of the main terms used in these Terms are as follows.",
      "① User: a person who accesses the Site and uses the services it provides in accordance with these Terms.",
      "② Use Agreement: the agreement concluded between the Site and a User in connection with use of the Site.",
      "③ Consultation Request: a User providing personal information through the Site's consultation form and requesting a consultation.",
      "④ Operator: GCM, which establishes and operates the services.",
    ],
  },
  {
    title: "Article 3 (Rules Outside These Terms)",
    paragraphs: [
      "The Operator may separately announce operating policies where necessary. Where these Terms and an operating policy overlap, the operating policy applies first.",
    ],
  },
  {
    title: "Article 4 (Provision of Services)",
    paragraphs: [
      "① The Site provides services such as offering information on U.S. college tennis admissions and mental wellness, and receiving consultation requests.",
      "② The Operator may change the content of the services and, upon such change, will announce it on the Site.",
    ],
  },
  {
    title: "Article 5 (Consultation Requests)",
    paragraphs: [
      "① A User wishing to request a consultation must accurately provide the information requested by the Site (guardian's name, contact, email, etc.).",
      "② A User who misappropriates another's information or registers false information may not claim rights in connection with use of the services and may be punished under applicable laws.",
    ],
  },
  {
    title: "Article 6 (Privacy Policy)",
    paragraphs: [
      "The Operator endeavors to protect Users' personal information as prescribed by applicable laws, and matters concerning the collection, use, storage, and destruction of personal information follow the Site's Privacy Policy.",
      "However, the Operator bears no responsibility for information exposed due to causes attributable to the User.",
    ],
  },
  {
    title: "Article 7 (Obligations of the Operator)",
    paragraphs: [
      "① Where the Operator recognizes an opinion or complaint raised by a User as legitimate, it shall handle it as promptly as possible. Where prompt handling is difficult, the Operator will inform the User afterward via announcement or email.",
      "② For continuous and stable service, the Operator will endeavor to repair or restore facilities without delay if they fail or are lost. However, in the event of a natural disaster or unavoidable cause, service operation may be temporarily suspended.",
    ],
  },
  {
    title: "Article 8 (Obligations of the User)",
    paragraphs: [
      "① The User shall comply with these Terms, the various rules and notices established by the Operator, and applicable laws, and shall not obstruct the Site's operations or damage its reputation.",
      "② The User may not transfer or gift their right to use the services or other status under the Use Agreement to another person without the Operator's express consent.",
      "③ The User shall not infringe the intellectual property rights of the Operator or any third party.",
    ],
  },
  {
    title: "Article 9 (Service Hours)",
    paragraphs: [
      "① Service hours are, in principle, 24 hours a day, year-round, unless there is a special operational or technical impediment. However, the Site may temporarily suspend the service on dates or times it designates for regular system inspection, expansion, or replacement.",
      "② The Site may suspend the service temporarily or permanently without prior notice in cases such as urgent system maintenance, force majeure (national emergency, power outage, natural disaster, etc.), suspension of telecommunications services by a carrier, or a surge in usage.",
      "③ In the case of service suspension, the Site will give prior notice. However, where prior notice is impossible due to causes beyond its control, it will be replaced by subsequent notice.",
    ],
  },
  {
    title: "Article 10 (Restrictions on Service Use)",
    paragraphs: [
      "The User shall not engage in any of the following acts; where a User does so, the Site may restrict service use and take lawful measures.",
      "① Registering false information when registering or changing information",
      "② Obstructing another person's use of the Site or misappropriating information",
      "③ Impersonating the Operator, staff, or related persons",
      "④ Infringing the personal or intellectual property rights of the Site or a third party, or obstructing operations",
      "⑤ Collecting, storing, or disclosing another person's personal information without consent",
      "⑥ Acts objectively judged to be connected to a crime",
      "⑦ Other acts that violate applicable laws",
    ],
  },
  {
    title: "Article 11 (Management of Postings and Copyright)",
    paragraphs: [
      "① The copyright of content posted on the Site (text, images, etc.) belongs to the Operator, and may not be reproduced, distributed, or used commercially without the Operator's prior consent.",
      "② Where there is a corrective request from a public authority or a posting is judged unlawful, the Operator may delete or move the posting without prior consent.",
    ],
  },
  {
    title: "Article 12 (Liability for Damages)",
    paragraphs: [
      "① All civil and criminal liability arising in connection with use of the services rests primarily with the User.",
      "② Where damage suffered by the User is due to force majeure such as a natural disaster, or arises from the User's intent or negligence, the Operator does not provide compensation.",
    ],
  },
  {
    title: "Article 13 (Disclaimer)",
    paragraphs: [
      "① The Operator is exempt from liability where the User fails to obtain the benefits expected from the services, or for damage arising from the User's selection or use of service materials.",
      "② The Operator is exempt from liability for damage due to failures of telecommunications services provided by a carrier.",
      "③ The Operator is not responsible for the authenticity, reliability, or accuracy of materials posted or transmitted by Users.",
      "④ The Operator is not responsible for service disruptions caused by reasons attributable to the User.",
      "⑤ The Operator is not responsible for damage arising from force majeure such as system failures, third-party attacks, or the spread of computer viruses that occur without the Operator's intent or gross negligence during the management, inspection, or repair of facilities such as servers, or during software operation.",
    ],
  },
];

const articlesZh: Article[] = [
  {
    title: "第1条（目的）",
    paragraphs: [
      '本服务条款旨在规定 GCM（Global Champions Makers，以下简称"本网站"）所提供服务的使用条件及运营相关的各项事宜。',
    ],
  },
  {
    title: "第2条（术语定义）",
    paragraphs: [
      "本条款中使用的主要术语定义如下。",
      "① 用户：指接入本网站并依据本条款使用本网站所提供服务的人。",
      "② 使用合同：指就本网站的使用在本网站与用户之间订立的合同。",
      "③ 咨询申请：指用户通过本网站的咨询申请表单提供个人信息并请求咨询。",
      "④ 运营者：指开设并运营本服务的 GCM。",
    ],
  },
  {
    title: "第3条（条款以外的准则）",
    paragraphs: [
      "运营者在必要时可另行公告·告知运营政策；本条款与运营政策重叠时，优先适用运营政策。",
    ],
  },
  {
    title: "第4条（服务的提供）",
    paragraphs: [
      "① 本网站提供有关美国大学网球升学及心理健康的信息提供、受理咨询申请等服务。",
      "② 运营者可变更服务内容，变更时将在本网站予以公告。",
    ],
  },
  {
    title: "第5条（咨询申请）",
    paragraphs: [
      "① 欲申请咨询的用户，须准确提供本网站所要求的信息（监护人姓名、联系方式、电子邮件等）。",
      "② 盗用他人信息或登记虚假信息的用户，不得就服务使用主张权利，并可能依相关法律受到处罚。",
    ],
  },
  {
    title: "第6条（个人信息处理方针）",
    paragraphs: [
      "运营者依相关法律规定努力保护用户的个人信息；个人信息的收集·使用·保管·销毁事项遵循本网站的个人信息处理方针。",
      "但对于因用户自身的过错而泄露的信息，运营者概不承担任何责任。",
    ],
  },
  {
    title: "第7条（运营者的义务）",
    paragraphs: [
      "① 运营者在认定用户提出的意见或投诉正当时，应尽快予以处理。若难以迅速处理，将事后通过公告或电子邮件等方式告知。",
      "② 为持续稳定地提供服务，运营者在设备发生故障或丢失时，将努力立即修理或恢复。但在发生天灾或不可抗力事由时，可暂时中止服务运营。",
    ],
  },
  {
    title: "第8条（用户的义务）",
    paragraphs: [
      "① 用户应遵守本条款规定的事项及运营者制定的各项规定、公告事项与相关法律，不得妨碍本网站的业务或损害其名誉。",
      "② 未经运营者明示同意，用户不得将服务使用权限或使用合同上的其他地位转让·赠与他人。",
      "③ 用户不得侵害运营者及第三方的知识产权。",
    ],
  },
  {
    title: "第9条（服务使用时间）",
    paragraphs: [
      "① 除业务上或技术上有特别障碍外，服务使用时间原则上为全年无休、每日24小时。但本网站可在其指定的日期或时间，为系统定期检查·扩容·更换等暂时中止服务。",
      "② 在紧急系统检查、国家紧急状态·停电·天灾等不可抗力、基干通信运营商的电信服务中断、使用量激增等情形下，本网站可在不事先公告的情况下暂时或永久中止服务。",
      "③ 服务中止时，本网站将事先公告。但因无法控制的事由而无法事先公告的，以事后公告代替。",
    ],
  },
  {
    title: "第10条（服务使用限制）",
    paragraphs: [
      "用户不得实施下列各项行为；实施上述行为时，本网站可限制其服务使用并采取合法措施。",
      "① 在登记·变更信息时登记虚假内容的行为",
      "② 妨碍他人使用本网站或盗用信息的行为",
      "③ 冒充运营人员、职员或相关人士的行为",
      "④ 侵害本网站或第三方的人格权·知识产权或妨碍业务的行为",
      "⑤ 未经同意收集·存储·公开他人个人信息的行为",
      "⑥ 客观上被判断为与犯罪相关的行为",
      "⑦ 其他违反相关法律的行为",
    ],
  },
  {
    title: "第11条（帖子的管理及著作权）",
    paragraphs: [
      "① 本网站上登载的内容（文本·图片等）的著作权归属于运营者，未经运营者事先同意，不得复制·传播·进行商业利用。",
      "② 在有公共机关的整改要求，或被判断为违法帖子时，运营者可在未经事先同意的情况下删除或移动该帖子。",
    ],
  },
  {
    title: "第12条（损害赔偿）",
    paragraphs: [
      "① 与服务使用相关产生的一切民事·刑事责任，首先由用户本人承担。",
      "② 用户所受损害系因天灾等不可抗力，或因用户的故意或过失而产生时，运营者不予赔偿。",
    ],
  },
  {
    title: "第13条（免责）",
    paragraphs: [
      "① 对于用户未能获得由服务提供所期待的利益，或因服务资料的取舍选择·使用而产生的损害，运营者免予承担责任。",
      "② 对于因通信运营商提供的电信服务故障所致的损害，运营者免予承担责任。",
      "③ 运营者对用户所发布或传输资料的真实性·可靠性·准确性不承担责任。",
      "④ 运营者对因用户自身过错导致的服务使用障碍不承担责任。",
      "⑤ 对于在服务器等设备的管理·检查·维修过程或软件运行过程中，在无运营者故意或重大过失的情况下发生的系统故障、第三方攻击、计算机病毒传播等不可抗力事由所致的损害，运营者不承担责任。",
    ],
  },
];

const articlesJa: Article[] = [
  {
    title: "第1条（目的）",
    paragraphs: [
      "本利用規約は、GCM（Global Champions Makers、以下「サイト」）が提供するサービスの利用条件および運営に関する諸事項を定めることを目的とします。",
    ],
  },
  {
    title: "第2条（用語の定義）",
    paragraphs: [
      "本規約で使用する主な用語の定義は次のとおりです。",
      "① 利用者：サイトにアクセスし、本規約に従いサイトが提供するサービスを利用する者をいいます。",
      "② 利用契約：サイトの利用に関してサイトと利用者との間で締結する契約をいいます。",
      "③ 相談申込：利用者がサイトの相談申込フォームを通じて個人情報を提供し、相談を依頼することをいいます。",
      "④ 運営者：サービスを開設して運営するGCMをいいます。",
    ],
  },
  {
    title: "第3条（規約外の準則）",
    paragraphs: [
      "運営者は必要な場合、別途運営方針を公告・案内することができ、本規約と運営方針が重複する場合は運営方針が優先して適用されます。",
    ],
  },
  {
    title: "第4条（サービスの提供）",
    paragraphs: [
      "① サイトは、米国大学テニス進学およびメンタルウェルネスに関する情報提供、相談申込の受付等のサービスを提供します。",
      "② 運営者はサービスの内容を変更することができ、変更時にはその内容をサイトに公告します。",
    ],
  },
  {
    title: "第5条（相談申込）",
    paragraphs: [
      "① 相談を申し込もうとする利用者は、サイトが求める情報（保護者名、連絡先、メール等）を正確に提供しなければなりません。",
      "② 他人の情報を盗用し、または虚偽の情報を登録した利用者は、サービス利用に関して権利を主張することができず、関係法令により処罰されることがあります。",
    ],
  },
  {
    title: "第6条（個人情報処理方針）",
    paragraphs: [
      "運営者は関係法令の定めるところに従い利用者の個人情報を保護するよう努め、個人情報の収集・利用・保管・破棄に関する事項はサイトの個人情報処理方針に従います。",
      "ただし、利用者の帰責事由により露出した情報について、運営者は一切の責任を負いません。",
    ],
  },
  {
    title: "第7条（運営者の義務）",
    paragraphs: [
      "① 運営者は、利用者から提起された意見や苦情が正当であると認める場合、できる限り速やかに処理しなければなりません。ただし、迅速な処理が困難な場合は、事後に公告または電子メール等を通じて案内します。",
      "② 運営者は、継続的かつ安定的なサービス提供のため、設備に障害が生じ、または滅失したときは、これを遅滞なく修理または復旧するよう努めます。ただし、天災地変またはやむを得ない事由がある場合は、サービス運営を一時停止することがあります。",
    ],
  },
  {
    title: "第8条（利用者の義務）",
    paragraphs: [
      "① 利用者は、本規約に定める事項および運営者が定める諸規定、公告事項ならびに関係法令を遵守しなければならず、サイトの業務を妨害し、または名誉を毀損する行為をしてはなりません。",
      "② 利用者は、運営者の明示的な同意なく、サービス利用権限その他利用契約上の地位を他人に譲渡・贈与することはできません。",
      "③ 利用者は、運営者および第三者の知的財産権を侵害してはなりません。",
    ],
  },
  {
    title: "第9条（サービス利用時間）",
    paragraphs: [
      "① サービス利用時間は、業務上または技術上の特別な支障がない限り、年中無休1日24時間を原則とします。ただし、システムの定期点検・増設・交換等のためにサイトが定めた日または時間に、サービスを一時中断することがあります。",
      "② サイトは、緊急のシステム点検、国家非常事態・停電・天災地変等の不可抗力、基幹通信事業者の電気通信サービスの停止、利用の集中等の場合、事前の公告なくサービスを一時的または永久的に中断することがあります。",
      "③ サービス中断の場合、サイトは事前に公告します。ただし、統制できない事由により事前公告が不可能な場合は、事後公告をもって代えます。",
    ],
  },
  {
    title: "第10条（サービス利用の制限）",
    paragraphs: [
      "利用者は次の各号に該当する行為をしてはならず、当該行為をした場合、サイトはサービス利用の制限および適法な措置をとることができます。",
      "① 情報の登録・変更時に虚偽の内容を登録する行為",
      "② 他人のサイト利用を妨害し、または情報を盗用する行為",
      "③ 運営陣、職員または関係者を詐称する行為",
      "④ サイトまたは第三者の人格権・知的財産権を侵害し、または業務を妨害する行為",
      "⑤ 他人の個人情報を同意なく収集・保存・公開する行為",
      "⑥ 犯罪に結びつくと客観的に判断される行為",
      "⑦ その他関係法令に違反する行為",
    ],
  },
  {
    title: "第11条（掲示物の管理および著作権）",
    paragraphs: [
      "① サイトに掲載されたコンテンツ（テキスト・画像等）の著作権は運営者に帰属し、運営者の事前同意なく複製・配布・商業的利用をすることはできません。",
      "② 公共機関の是正要求がある場合、または違法な掲示物と判断される場合、運営者は事前同意なく当該掲示物を削除または移動することができます。",
    ],
  },
  {
    title: "第12条（損害賠償）",
    paragraphs: [
      "① サービス利用に関連して発生したすべての民事・刑事上の責任は、第一次的に利用者本人にあります。",
      "② 利用者が受けた損害が天災地変等の不可抗力であるか、利用者の故意または過失により生じたときは、運営者は損害賠償を行いません。",
    ],
  },
  {
    title: "第13条（免責）",
    paragraphs: [
      "① 運営者は、サービス提供から期待される利益を利用者が得られなかったこと、またはサービス資料の取捨選択・利用により生じた損害について責任を免れます。",
      "② 運営者は、通信事業者が提供する電気通信サービスの障害による損害について責任を免れます。",
      "③ 運営者は、利用者が掲示または送信した資料の真偽・信頼度・正確性について責任を負いません。",
      "④ 運営者は、利用者の帰責事由によるサービス利用障害について責任を負いません。",
      "⑤ 運営者は、サーバー等設備の管理・点検・補修の過程またはソフトウェアの運用過程において、故意または重大な過失なく発生したシステム障害、第三者の攻撃、コンピュータウイルスの流布等の不可抗力的事由による損害について責任を負いません。",
    ],
  },
];

const articlesIt: Article[] = [
  {
    title: "Articolo 1 (Finalità)",
    paragraphs: [
      'I presenti Termini di servizio hanno lo scopo di stabilire le condizioni d\'uso e le varie questioni relative al funzionamento dei servizi forniti da GCM (Global Champions Makers, il "Sito").',
    ],
  },
  {
    title: "Articolo 2 (Definizioni)",
    paragraphs: [
      "Le definizioni dei principali termini utilizzati nei presenti Termini sono le seguenti.",
      "① Utente: la persona che accede al Sito e utilizza i servizi da esso forniti in conformità ai presenti Termini.",
      "② Contratto d'uso: il contratto concluso tra il Sito e un Utente in relazione all'uso del Sito.",
      "③ Richiesta di consulenza: l'atto con cui un Utente fornisce dati personali tramite il modulo di consulenza del Sito e richiede una consulenza.",
      "④ Gestore: GCM, che istituisce e gestisce i servizi.",
    ],
  },
  {
    title: "Articolo 3 (Norme esterne ai presenti Termini)",
    paragraphs: [
      "Il Gestore può annunciare separatamente politiche operative ove necessario. Qualora i presenti Termini e una politica operativa si sovrappongano, si applica in via prioritaria la politica operativa.",
    ],
  },
  {
    title: "Articolo 4 (Fornitura dei servizi)",
    paragraphs: [
      "① Il Sito fornisce servizi quali la messa a disposizione di informazioni sull'ammissione al tennis universitario negli Stati Uniti e sul benessere mentale, e la ricezione delle richieste di consulenza.",
      "② Il Gestore può modificare il contenuto dei servizi e, in caso di tale modifica, lo annuncerà sul Sito.",
    ],
  },
  {
    title: "Articolo 5 (Richieste di consulenza)",
    paragraphs: [
      "① L'Utente che desidera richiedere una consulenza deve fornire con esattezza le informazioni richieste dal Sito (nome del genitore/tutore, recapito, email, ecc.).",
      "② L'Utente che si appropria indebitamente delle informazioni altrui o registra informazioni false non può vantare diritti in relazione all'uso dei servizi e può essere sanzionato ai sensi delle leggi applicabili.",
    ],
  },
  {
    title: "Articolo 6 (Informativa sulla privacy)",
    paragraphs: [
      "Il Gestore si adopera per proteggere i dati personali degli Utenti come prescritto dalle leggi applicabili, e le questioni relative alla raccolta, all'uso, alla conservazione e alla distruzione dei dati personali seguono l'Informativa sulla privacy del Sito.",
      "Tuttavia, il Gestore non è responsabile per le informazioni divulgate a causa di cause imputabili all'Utente.",
    ],
  },
  {
    title: "Articolo 7 (Obblighi del Gestore)",
    paragraphs: [
      "① Qualora il Gestore riconosca come legittima un'opinione o un reclamo sollevato da un Utente, lo tratta con la massima tempestività possibile. Qualora un trattamento tempestivo sia difficile, il Gestore ne informa successivamente l'Utente tramite annuncio o email.",
      "② Per un servizio continuo e stabile, il Gestore si adopera per riparare o ripristinare senza indugio le attrezzature in caso di guasto o perdita. Tuttavia, in caso di calamità naturale o di causa inevitabile, il funzionamento del servizio può essere temporaneamente sospeso.",
    ],
  },
  {
    title: "Articolo 8 (Obblighi dell'Utente)",
    paragraphs: [
      "① L'Utente deve rispettare i presenti Termini, le varie norme e gli avvisi stabiliti dal Gestore e le leggi applicabili, e non deve ostacolare le attività del Sito né lederne la reputazione.",
      "② L'Utente non può cedere o donare ad altri il proprio diritto di utilizzare i servizi o altra posizione derivante dal Contratto d'uso senza l'espresso consenso del Gestore.",
      "③ L'Utente non deve violare i diritti di proprietà intellettuale del Gestore o di terzi.",
    ],
  },
  {
    title: "Articolo 9 (Orari di servizio)",
    paragraphs: [
      "① Gli orari del servizio sono, in linea di principio, 24 ore su 24, tutto l'anno, salvo particolari impedimenti operativi o tecnici. Tuttavia, il Sito può sospendere temporaneamente il servizio nelle date o negli orari da esso stabiliti per manutenzione, ampliamento o sostituzione periodica del sistema.",
      "② Il Sito può sospendere il servizio temporaneamente o permanentemente senza preavviso in casi quali manutenzione urgente del sistema, forza maggiore (emergenza nazionale, interruzione di corrente, calamità naturale, ecc.), sospensione dei servizi di telecomunicazione da parte di un operatore o un picco di utilizzo.",
      "③ In caso di sospensione del servizio, il Sito ne dà preavviso. Tuttavia, qualora il preavviso sia impossibile per cause al di fuori del suo controllo, esso è sostituito da un avviso successivo.",
    ],
  },
  {
    title: "Articolo 10 (Limitazioni all'uso del servizio)",
    paragraphs: [
      "L'Utente non deve compiere alcuno dei seguenti atti; qualora lo faccia, il Sito può limitare l'uso del servizio e adottare misure legittime.",
      "① Registrare informazioni false durante la registrazione o la modifica delle informazioni",
      "② Ostacolare l'uso del Sito da parte di altri o appropriarsi indebitamente di informazioni",
      "③ Spacciarsi per il Gestore, il personale o persone collegate",
      "④ Violare i diritti della personalità o di proprietà intellettuale del Sito o di terzi, o ostacolare le attività",
      "⑤ Raccogliere, conservare o divulgare dati personali altrui senza consenso",
      "⑥ Atti oggettivamente giudicati connessi a un reato",
      "⑦ Altri atti che violano le leggi applicabili",
    ],
  },
  {
    title: "Articolo 11 (Gestione dei contenuti pubblicati e diritto d'autore)",
    paragraphs: [
      "① Il diritto d'autore sui contenuti pubblicati sul Sito (testi, immagini, ecc.) appartiene al Gestore e non può essere riprodotto, distribuito o utilizzato commercialmente senza il previo consenso del Gestore.",
      "② In presenza di una richiesta di rettifica da parte di un'autorità pubblica o qualora un contenuto sia giudicato illecito, il Gestore può eliminare o spostare tale contenuto senza previo consenso.",
    ],
  },
  {
    title: "Articolo 12 (Risarcimento dei danni)",
    paragraphs: [
      "① Ogni responsabilità civile e penale derivante dall'uso dei servizi ricade in via primaria sull'Utente.",
      "② Qualora il danno subito dall'Utente derivi da forza maggiore, come una calamità naturale, o dal dolo o dalla colpa dell'Utente, il Gestore non corrisponde alcun risarcimento.",
    ],
  },
  {
    title: "Articolo 13 (Esclusione di responsabilità)",
    paragraphs: [
      "① Il Gestore è esonerato da responsabilità qualora l'Utente non ottenga i benefici attesi dai servizi, o per i danni derivanti dalla selezione o dall'uso dei materiali del servizio da parte dell'Utente.",
      "② Il Gestore è esonerato da responsabilità per i danni dovuti a guasti dei servizi di telecomunicazione forniti da un operatore.",
      "③ Il Gestore non è responsabile dell'autenticità, dell'affidabilità o dell'accuratezza dei materiali pubblicati o trasmessi dagli Utenti.",
      "④ Il Gestore non è responsabile delle interruzioni del servizio dovute a cause imputabili all'Utente.",
      "⑤ Il Gestore non è responsabile dei danni derivanti da cause di forza maggiore, quali guasti di sistema, attacchi di terzi o la diffusione di virus informatici, che si verifichino senza dolo o colpa grave del Gestore durante la gestione, l'ispezione o la riparazione di attrezzature come i server, o durante il funzionamento del software.",
    ],
  },
];

const articlesFr: Article[] = [
  {
    title: "Article 1 (Objet)",
    paragraphs: [
      'Les présentes Conditions d\'utilisation ont pour objet de définir les conditions d\'utilisation et les diverses questions relatives à l\'exploitation des services fournis par GCM (Global Champions Makers, le « Site »).',
    ],
  },
  {
    title: "Article 2 (Définitions)",
    paragraphs: [
      "Les définitions des principaux termes employés dans les présentes Conditions sont les suivantes.",
      "① Utilisateur : la personne qui accède au Site et utilise les services qu'il fournit conformément aux présentes Conditions.",
      "② Contrat d'utilisation : le contrat conclu entre le Site et un Utilisateur relativement à l'utilisation du Site.",
      "③ Demande de consultation : le fait pour un Utilisateur de fournir des données personnelles via le formulaire de consultation du Site et de demander une consultation.",
      "④ Exploitant : GCM, qui établit et exploite les services.",
    ],
  },
  {
    title: "Article 3 (Règles hors des présentes Conditions)",
    paragraphs: [
      "L'Exploitant peut, si nécessaire, annoncer séparément des politiques d'exploitation. Lorsque les présentes Conditions et une politique d'exploitation se chevauchent, la politique d'exploitation s'applique en priorité.",
    ],
  },
  {
    title: "Article 4 (Fourniture des services)",
    paragraphs: [
      "① Le Site fournit des services tels que la mise à disposition d'informations sur l'admission au tennis universitaire aux États-Unis et sur le bien-être mental, ainsi que la réception des demandes de consultation.",
      "② L'Exploitant peut modifier le contenu des services et, en cas de modification, l'annoncera sur le Site.",
    ],
  },
  {
    title: "Article 5 (Demandes de consultation)",
    paragraphs: [
      "① L'Utilisateur souhaitant demander une consultation doit fournir avec exactitude les informations demandées par le Site (nom du responsable légal, coordonnées, e-mail, etc.).",
      "② L'Utilisateur qui usurpe les informations d'autrui ou enregistre de fausses informations ne peut revendiquer de droits relatifs à l'utilisation des services et peut être sanctionné en vertu des lois applicables.",
    ],
  },
  {
    title: "Article 6 (Politique de confidentialité)",
    paragraphs: [
      "L'Exploitant s'efforce de protéger les données personnelles des Utilisateurs conformément aux lois applicables, et les questions relatives à la collecte, à l'utilisation, à la conservation et à la destruction des données personnelles sont régies par la politique de confidentialité du Site.",
      "Toutefois, l'Exploitant n'assume aucune responsabilité pour les informations exposées en raison de causes imputables à l'Utilisateur.",
    ],
  },
  {
    title: "Article 7 (Obligations de l'Exploitant)",
    paragraphs: [
      "① Lorsque l'Exploitant reconnaît comme légitime une opinion ou une réclamation formulée par un Utilisateur, il la traite aussi rapidement que possible. Lorsqu'un traitement rapide est difficile, l'Exploitant en informe l'Utilisateur ultérieurement par annonce ou par e-mail.",
      "② Pour un service continu et stable, l'Exploitant s'efforce de réparer ou de restaurer sans délai les installations en cas de panne ou de perte. Toutefois, en cas de catastrophe naturelle ou de cause inévitable, l'exploitation du service peut être temporairement suspendue.",
    ],
  },
  {
    title: "Article 8 (Obligations de l'Utilisateur)",
    paragraphs: [
      "① L'Utilisateur doit respecter les présentes Conditions, les diverses règles et avis établis par l'Exploitant ainsi que les lois applicables, et ne doit pas entraver les activités du Site ni porter atteinte à sa réputation.",
      "② L'Utilisateur ne peut céder ni donner à autrui son droit d'utiliser les services ou tout autre statut découlant du Contrat d'utilisation sans le consentement exprès de l'Exploitant.",
      "③ L'Utilisateur ne doit pas porter atteinte aux droits de propriété intellectuelle de l'Exploitant ou de tiers.",
    ],
  },
  {
    title: "Article 9 (Heures de service)",
    paragraphs: [
      "① Les heures de service sont, en principe, de 24 heures sur 24, toute l'année, sauf empêchement opérationnel ou technique particulier. Toutefois, le Site peut suspendre temporairement le service aux dates ou aux heures qu'il fixe pour l'inspection, l'extension ou le remplacement périodique du système.",
      "② Le Site peut suspendre le service temporairement ou définitivement sans préavis dans des cas tels qu'une maintenance urgente du système, un cas de force majeure (urgence nationale, panne de courant, catastrophe naturelle, etc.), la suspension des services de télécommunications par un opérateur ou une forte affluence.",
      "③ En cas de suspension du service, le Site en donne un préavis. Toutefois, lorsque le préavis est impossible pour des causes indépendantes de sa volonté, il est remplacé par un avis ultérieur.",
    ],
  },
  {
    title: "Article 10 (Restrictions à l'utilisation du service)",
    paragraphs: [
      "L'Utilisateur ne doit commettre aucun des actes suivants ; s'il le fait, le Site peut restreindre l'utilisation du service et prendre des mesures légales.",
      "① Enregistrer de fausses informations lors de l'enregistrement ou de la modification d'informations",
      "② Entraver l'utilisation du Site par autrui ou usurper des informations",
      "③ Se faire passer pour l'Exploitant, le personnel ou des personnes liées",
      "④ Porter atteinte aux droits de la personnalité ou de propriété intellectuelle du Site ou d'un tiers, ou entraver les activités",
      "⑤ Collecter, conserver ou divulguer les données personnelles d'autrui sans consentement",
      "⑥ Actes objectivement jugés liés à une infraction",
      "⑦ Autres actes contraires aux lois applicables",
    ],
  },
  {
    title: "Article 11 (Gestion des publications et droit d'auteur)",
    paragraphs: [
      "① Le droit d'auteur sur le contenu publié sur le Site (textes, images, etc.) appartient à l'Exploitant et ne peut être reproduit, distribué ou utilisé à des fins commerciales sans le consentement préalable de l'Exploitant.",
      "② En présence d'une demande de rectification d'une autorité publique ou lorsqu'une publication est jugée illicite, l'Exploitant peut supprimer ou déplacer cette publication sans consentement préalable.",
    ],
  },
  {
    title: "Article 12 (Indemnisation des dommages)",
    paragraphs: [
      "① Toute responsabilité civile et pénale découlant de l'utilisation des services incombe en premier lieu à l'Utilisateur.",
      "② Lorsque le dommage subi par l'Utilisateur résulte d'un cas de force majeure tel qu'une catastrophe naturelle, ou de l'intention ou de la négligence de l'Utilisateur, l'Exploitant n'accorde aucune indemnisation.",
    ],
  },
  {
    title: "Article 13 (Clause de non-responsabilité)",
    paragraphs: [
      "① L'Exploitant est dégagé de toute responsabilité lorsque l'Utilisateur n'obtient pas les avantages attendus des services, ou pour les dommages résultant de la sélection ou de l'utilisation des documents du service par l'Utilisateur.",
      "② L'Exploitant est dégagé de toute responsabilité pour les dommages dus aux défaillances des services de télécommunications fournis par un opérateur.",
      "③ L'Exploitant n'est pas responsable de l'authenticité, de la fiabilité ou de l'exactitude des documents publiés ou transmis par les Utilisateurs.",
      "④ L'Exploitant n'est pas responsable des interruptions de service dues à des causes imputables à l'Utilisateur.",
      "⑤ L'Exploitant n'est pas responsable des dommages résultant de cas de force majeure tels que des défaillances du système, des attaques de tiers ou la propagation de virus informatiques, survenant sans intention ni faute grave de l'Exploitant lors de la gestion, de l'inspection ou de la réparation d'installations telles que les serveurs, ou lors du fonctionnement des logiciels.",
    ],
  },
];

const articlesEs: Article[] = [
  {
    title: "Artículo 1 (Objeto)",
    paragraphs: [
      'Los presentes Términos del servicio tienen por objeto establecer las condiciones de uso y las diversas cuestiones relativas a la operación de los servicios prestados por GCM (Global Champions Makers, el "Sitio").',
    ],
  },
  {
    title: "Artículo 2 (Definiciones)",
    paragraphs: [
      "Las definiciones de los principales términos empleados en los presentes Términos son las siguientes.",
      "① Usuario: la persona que accede al Sitio y utiliza los servicios que este presta de conformidad con los presentes Términos.",
      "② Contrato de uso: el contrato celebrado entre el Sitio y un Usuario en relación con el uso del Sitio.",
      "③ Solicitud de consulta: el acto por el cual un Usuario facilita datos personales a través del formulario de consulta del Sitio y solicita una consulta.",
      "④ Operador: GCM, que establece y opera los servicios.",
    ],
  },
  {
    title: "Artículo 3 (Normas ajenas a los presentes Términos)",
    paragraphs: [
      "El Operador podrá anunciar por separado políticas operativas cuando sea necesario. Cuando los presentes Términos y una política operativa se superpongan, se aplicará con prioridad la política operativa.",
    ],
  },
  {
    title: "Artículo 4 (Prestación de los servicios)",
    paragraphs: [
      "① El Sitio presta servicios como la puesta a disposición de información sobre la admisión al tenis universitario en los Estados Unidos y el bienestar mental, así como la recepción de solicitudes de consulta.",
      "② El Operador podrá modificar el contenido de los servicios y, en caso de modificación, lo anunciará en el Sitio.",
    ],
  },
  {
    title: "Artículo 5 (Solicitudes de consulta)",
    paragraphs: [
      "① El Usuario que desee solicitar una consulta deberá facilitar con exactitud la información requerida por el Sitio (nombre del tutor, datos de contacto, correo electrónico, etc.).",
      "② El Usuario que se apropie indebidamente de la información de otra persona o registre información falsa no podrá reclamar derechos en relación con el uso de los servicios y podrá ser sancionado conforme a las leyes aplicables.",
    ],
  },
  {
    title: "Artículo 6 (Política de Privacidad)",
    paragraphs: [
      "El Operador se esfuerza por proteger los datos personales de los Usuarios según lo prescrito por las leyes aplicables, y las cuestiones relativas a la recopilación, el uso, la conservación y la destrucción de los datos personales se rigen por la Política de Privacidad del Sitio.",
      "No obstante, el Operador no asume responsabilidad alguna por la información expuesta debido a causas imputables al Usuario.",
    ],
  },
  {
    title: "Artículo 7 (Obligaciones del Operador)",
    paragraphs: [
      "① Cuando el Operador reconozca como legítima una opinión o reclamación planteada por un Usuario, la atenderá con la mayor prontitud posible. Cuando una atención rápida resulte difícil, el Operador informará posteriormente al Usuario mediante aviso o correo electrónico.",
      "② Para un servicio continuo y estable, el Operador se esforzará por reparar o restaurar sin demora las instalaciones en caso de avería o pérdida. No obstante, en caso de desastre natural o causa inevitable, la operación del servicio podrá suspenderse temporalmente.",
    ],
  },
  {
    title: "Artículo 8 (Obligaciones del Usuario)",
    paragraphs: [
      "① El Usuario deberá cumplir los presentes Términos, las diversas normas y avisos establecidos por el Operador y las leyes aplicables, y no deberá obstaculizar las actividades del Sitio ni dañar su reputación.",
      "② El Usuario no podrá transferir ni ceder a otra persona su derecho a usar los servicios u otra posición derivada del Contrato de uso sin el consentimiento expreso del Operador.",
      "③ El Usuario no deberá vulnerar los derechos de propiedad intelectual del Operador ni de terceros.",
    ],
  },
  {
    title: "Artículo 9 (Horario del servicio)",
    paragraphs: [
      "① El horario del servicio es, en principio, de 24 horas al día, todo el año, salvo que exista un impedimento operativo o técnico especial. No obstante, el Sitio podrá suspender temporalmente el servicio en las fechas u horas que determine para la inspección, ampliación o sustitución periódica del sistema.",
      "② El Sitio podrá suspender el servicio temporal o permanentemente sin previo aviso en casos como el mantenimiento urgente del sistema, fuerza mayor (emergencia nacional, corte de energía, desastre natural, etc.), la suspensión de los servicios de telecomunicaciones por parte de un operador o un aumento repentino del uso.",
      "③ En caso de suspensión del servicio, el Sitio dará aviso previo. No obstante, cuando el aviso previo sea imposible por causas ajenas a su control, se sustituirá por un aviso posterior.",
    ],
  },
  {
    title: "Artículo 10 (Restricciones al uso del servicio)",
    paragraphs: [
      "El Usuario no deberá realizar ninguno de los siguientes actos; si lo hace, el Sitio podrá restringir el uso del servicio y adoptar medidas legales.",
      "① Registrar información falsa al registrar o modificar información",
      "② Obstaculizar el uso del Sitio por parte de otras personas o apropiarse indebidamente de información",
      "③ Hacerse pasar por el Operador, el personal o personas relacionadas",
      "④ Vulnerar los derechos de la personalidad o de propiedad intelectual del Sitio o de un tercero, u obstaculizar las actividades",
      "⑤ Recopilar, almacenar o divulgar datos personales de otras personas sin consentimiento",
      "⑥ Actos objetivamente considerados relacionados con un delito",
      "⑦ Otros actos que infrinjan las leyes aplicables",
    ],
  },
  {
    title: "Artículo 11 (Gestión de las publicaciones y derechos de autor)",
    paragraphs: [
      "① Los derechos de autor del contenido publicado en el Sitio (textos, imágenes, etc.) pertenecen al Operador y no podrán reproducirse, distribuirse ni utilizarse comercialmente sin el consentimiento previo del Operador.",
      "② Cuando exista un requerimiento de corrección de una autoridad pública o una publicación se considere ilícita, el Operador podrá eliminar o trasladar dicha publicación sin consentimiento previo.",
    ],
  },
  {
    title: "Artículo 12 (Indemnización de daños)",
    paragraphs: [
      "① Toda responsabilidad civil y penal derivada del uso de los servicios recae en primer lugar en el propio Usuario.",
      "② Cuando el daño sufrido por el Usuario se deba a fuerza mayor, como un desastre natural, o al dolo o negligencia del Usuario, el Operador no otorgará indemnización.",
    ],
  },
  {
    title: "Artículo 13 (Exención de responsabilidad)",
    paragraphs: [
      "① El Operador queda exento de responsabilidad cuando el Usuario no obtenga los beneficios esperados de los servicios, o por los daños derivados de la selección o el uso de los materiales del servicio por parte del Usuario.",
      "② El Operador queda exento de responsabilidad por los daños debidos a fallos de los servicios de telecomunicaciones prestados por un operador.",
      "③ El Operador no es responsable de la autenticidad, la fiabilidad o la exactitud de los materiales publicados o transmitidos por los Usuarios.",
      "④ El Operador no es responsable de las interrupciones del servicio debidas a causas imputables al Usuario.",
      "⑤ El Operador no es responsable de los daños derivados de causas de fuerza mayor, como fallos del sistema, ataques de terceros o la propagación de virus informáticos, que ocurran sin dolo ni negligencia grave del Operador durante la gestión, inspección o reparación de instalaciones como los servidores, o durante la operación del software.",
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

export default async function TermsPage() {
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
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
            {pick(locale, {
              ko: "이용약관",
              en: "Terms of Service",
              zh: "服务条款",
              ja: "利用規約",
              it: "Termini di servizio",
              fr: "Conditions d'utilisation",
              es: "Términos del servicio",
            })}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {pick(locale, {
              ko: "GCM(Global Champions Makers) 서비스 이용약관입니다.",
              en: "Terms of Service for GCM (Global Champions Makers).",
              zh: "GCM（Global Champions Makers）的服务条款。",
              ja: "GCM（Global Champions Makers）のサービス利用規約です。",
              it: "Termini di servizio di GCM (Global Champions Makers).",
              fr: "Conditions d'utilisation de GCM (Global Champions Makers).",
              es: "Términos del servicio de GCM (Global Champions Makers).",
            })}
          </p>
          {locale !== "ko" ? (
            <p className="mt-1 text-sm text-muted">
              {pick(locale, {
                en: "This English version is a courtesy translation. The Korean version is the official, legally governing text; in case of any discrepancy, the Korean version prevails.",
                zh: "本中文版本为便利性翻译。韩文版本为正式且具法律约束力的文本；如有任何不一致，以韩文版本为准。",
                ja: "この日本語版は参考訳です。韓国語版が正式かつ法的に優先する本文であり、相違がある場合は韓国語版が優先します。",
                it: "Questa versione è una traduzione di cortesia. La versione coreana è il testo ufficiale e giuridicamente vincolante; in caso di discrepanze, prevale la versione coreana.",
                fr: "Cette version est une traduction de courtoisie. La version coréenne est le texte officiel et juridiquement contraignant ; en cas de divergence, la version coréenne prévaut.",
                es: "Esta versión es una traducción de cortesía. La versión coreana es el texto oficial y jurídicamente vinculante; en caso de discrepancia, prevalecerá la versión coreana.",
              })}
            </p>
          ) : null}

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
