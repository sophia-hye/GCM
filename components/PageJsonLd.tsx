import { SITE_URL } from "@/lib/site-url";
import { team, programs } from "@/lib/site-data";
import { getConsultingExtra } from "@/lib/consulting-content";

const ORG = { "@type": "Organization", name: "GCM 테니스 아카데미", url: SITE_URL };

const PROGRAM_NAMES: Record<string, string> = {
  KIDS: "키즈 테니스 클래스",
  JUNIOR: "주니어 엘리트 프로그램",
  PRO: "프로 퍼포먼스 프로그램",
};

function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

function faqPage() {
  const items = getConsultingExtra("ko").faq.items;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

type Coach = {
  name: string;
  role: string;
  nameEn?: string;
  roleEn?: string;
};

function coachList() {
  const members = team as readonly Coach[];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "GCM 코치진",
    itemListElement: members.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: m.name,
        alternateName: m.nameEn,
        jobTitle: m.roleEn || m.role,
        worksFor: ORG,
      },
    })),
  };
}

function courseList() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "GCM 트레이닝 프로그램",
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: PROGRAM_NAMES[p.key] ?? p.target,
        description: p.desc,
        provider: ORG,
      },
    })),
  };
}

/**
 * 페이지별 구조화 데이터(JSON-LD). 항상 BreadcrumbList를 포함하고,
 * 플래그에 따라 FAQPage / 코치 Person / 프로그램 Course 목록을 함께 출력한다.
 */
export function PageJsonLd({
  name,
  path,
  faq,
  coaches,
  courses,
}: {
  name: string;
  path: string;
  faq?: boolean;
  coaches?: boolean;
  courses?: boolean;
}) {
  const graph: unknown[] = [breadcrumb(name, path)];
  if (faq) graph.push(faqPage());
  if (coaches) graph.push(coachList());
  if (courses) graph.push(courseList());

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
