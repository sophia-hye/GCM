import { SITE_URL } from "@/lib/site-url";
import { TRACK_LABEL, type Player } from "@/lib/players";
import { parseBio } from "@/lib/players-query";

const ORG = {
  "@type": "SportsOrganization",
  name: "GCM 테니스 아카데미",
  url: SITE_URL,
};

/** "2013.03.16" → "2013-03-16" (schema.org Date) */
function toISODate(d: string | null): string | undefined {
  if (!d) return undefined;
  const m = d.match(/(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
  if (!m) return undefined;
  return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
}

/** 선수 1명을 schema.org Person 객체로 (@context 없이 — 목록/그래프에 재사용) */
export function playerPerson(player: Player): Record<string, unknown> {
  const { tagline, tags } = parseBio(player.bio);
  const descParts = [
    tagline,
    player.track ? `${TRACK_LABEL[player.track].ko} 트랙` : null,
    player.utr ? `UTR ${player.utr}` : null,
    player.result,
    tags.length ? tags.join(", ") : null,
  ].filter(Boolean);

  const person: Record<string, unknown> = {
    "@type": "Person",
    name: player.name,
    url: `${SITE_URL}/players/${player.slug}`,
    jobTitle: "테니스 선수",
    memberOf: ORG,
    nationality: "KR",
    knowsAbout: ["Tennis", "테니스"],
  };
  if (player.image) person.image = `${SITE_URL}${player.image}`;
  if (descParts.length) person.description = descParts.join(" · ");
  const birth = toISODate(player.birthday);
  if (birth) person.birthDate = birth;
  if (player.birthplace) person.birthPlace = player.birthplace;
  return person;
}

/** 개별 선수 페이지: Person + BreadcrumbList */
export function PlayerJsonLd({ player }: { player: Player }) {
  const person = { "@context": "https://schema.org", ...playerPerson(player) };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "배출·소속 선수", item: `${SITE_URL}/players` },
      {
        "@type": "ListItem",
        position: 3,
        name: player.name,
        item: `${SITE_URL}/players/${player.slug}`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([person, breadcrumb]) }}
    />
  );
}

/** 선수 목록 페이지: 선수 전체를 ItemList(Person)로 — 검색/LLM 열거에 유리 */
export function PlayersListJsonLd({ players }: { players: Player[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "GCM 배출·소속 선수",
    itemListElement: players.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/players/${p.slug}`,
      item: playerPerson(p),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
