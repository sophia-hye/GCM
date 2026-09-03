import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return { title: ko ? "이용약관 | GCM Tennis Academy" : "Terms of Service | GCM Tennis Academy" };
}

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

export default async function TermsPage() {
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
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
            {ko ? "이용약관" : "Terms of Service"}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {ko
              ? "GCM(Global Champions Makers) 서비스 이용약관입니다."
              : "Terms of Service for GCM (Global Champions Makers)."}
          </p>
          {!ko ? (
            <p className="mt-1 text-sm text-muted">
              This English version is a courtesy translation. The Korean version is the official,
              legally governing text; in case of any discrepancy, the Korean version prevails.
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
