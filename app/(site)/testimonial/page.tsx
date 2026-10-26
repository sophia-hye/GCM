import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Link } from "@/components/i18n/Link";
import { Section, SectionHeading, Button } from "@/components/ui";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { localizeVoice, type VoiceLocalizable } from "@/lib/voices";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "선수와 학부모의 이야기 | GCM 테니스 아카데미",
      en: "Stories from Players and Parents | GCM Tennis Academy",
      zh: "选手与家长的故事 | GCM Tennis Academy",
      ja: "選手と保護者の声 | GCM Tennis Academy",
      it: "Storie di atleti e genitori | GCM Tennis Academy",
      fr: "Témoignages de joueurs et de parents | GCM Tennis Academy",
      es: "Historias de jugadores y padres | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM 선수와 학부모가 직접 전하는 후기와 이야기.",
      en: "Reviews and stories shared firsthand by GCM players and parents.",
      zh: "GCM 选手与家长亲述的评价与故事。",
      ja: "GCMの選手と保護者が自ら伝えるレビューと声。",
      it: "Recensioni e storie condivise in prima persona da atleti e genitori GCM.",
      fr: "Avis et témoignages partagés directement par les joueurs et parents de GCM.",
      es: "Reseñas e historias compartidas de primera mano por jugadores y padres de GCM.",
    }),
    path: "/testimonial",
  });
}

type Voice = VoiceLocalizable & {
  id: string;
  relation: string;
  created_at: string;
};

export default async function VoicesPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const locale = await getLocale();
  const ko = locale === "ko";
  const relationLabel: Record<string, string> = {
    player: pick(locale, {
      ko: "선수",
      en: "Player",
      zh: "选手",
      ja: "選手",
      it: "Atleta",
      fr: "Joueur",
      es: "Jugador",
    }),
    parent: pick(locale, {
      ko: "학부모",
      en: "Parent",
      zh: "家长",
      ja: "保護者",
      it: "Genitore",
      fr: "Parent",
      es: "Padre/madre",
    }),
  };
  const { submitted } = await searchParams;
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_voices")
    .select("id, relation, author_name, title, body, created_at, title_en, body_en, author_name_en, i18n")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  const voices = (data ?? []) as Voice[];

  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "선수·학부모 이야기",
          en: "Player & Parent Stories",
          zh: "选手与家长的故事",
          ja: "選手・保護者の声",
          it: "Storie di atleti e genitori",
          fr: "Témoignages de joueurs et de parents",
          es: "Historias de jugadores y padres",
        })}
        path="/testimonial"
      />
      <Section id="testimonial">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Testimonial"
            title={pick(locale, {
              ko: "선수와 학부모의 이야기",
              en: "Stories from Players and Parents",
              zh: "选手与家长的故事",
              ja: "選手と保護者の声",
              it: "Storie di atleti e genitori",
              fr: "Témoignages de joueurs et de parents",
              es: "Historias de jugadores y padres",
            })}
          />
          <Button href="/testimonial/new" variant="court">
            {pick(locale, {
              ko: "이야기 남기기",
              en: "Share Your Story",
              zh: "分享你的故事",
              ja: "体験を投稿する",
              it: "Condividi la tua storia",
              fr: "Partagez votre histoire",
              es: "Comparte tu historia",
            })}
          </Button>
        </div>

        {submitted ? (
          <p className="mt-6 rounded-lg border border-lime/40 bg-lime/10 px-4 py-3 text-sm text-lime">
            {pick(locale, {
              ko: "소중한 이야기가 접수되었습니다. 관리자 확인·승인 후 게시판에 공개됩니다. 감사합니다.",
              en: "Your story has been received. It will be published after review and approval by an administrator. Thank you.",
              zh: "您的宝贵故事已收到。将在管理员审核并批准后发布到留言板。谢谢。",
              ja: "大切な体験を受け付けました。管理者の確認・承認後に掲示板へ公開されます。ありがとうございます。",
              it: "La tua storia è stata ricevuta. Sarà pubblicata dopo la revisione e l'approvazione di un amministratore. Grazie.",
              fr: "Votre histoire a bien été reçue. Elle sera publiée après examen et approbation par un administrateur. Merci.",
              es: "Hemos recibido tu historia. Se publicará tras la revisión y aprobación de un administrador. Gracias.",
            })}
          </p>
        ) : null}

        {voices.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {voices.map((raw) => {
              const v = localizeVoice(raw, locale);
              return (
                <div key={v.id} className="flex flex-col rounded-2xl border border-line bg-card/40 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-court-bright">
                    {relationLabel[v.relation] ?? v.relation}
                  </span>
                  {v.title ? <h3 className="mt-3 font-display text-lg font-bold">{v.title}</h3> : null}
                  <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-ink/90">
                    {v.body}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-muted">— {v.author_name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-line px-6 py-16 text-center text-sm text-muted">
            {pick(locale, {
              ko: "아직 공개된 이야기가 없습니다. 첫 이야기를 남겨주세요.",
              en: "No stories have been published yet. Be the first to share yours.",
              zh: "目前还没有公开的故事。来分享第一个故事吧。",
              ja: "まだ公開された声はありません。最初の体験を投稿してください。",
              it: "Non è ancora stata pubblicata alcuna storia. Sii il primo a condividere la tua.",
              fr: "Aucune histoire n'a encore été publiée. Soyez le premier à partager la vôtre.",
              es: "Aún no se ha publicado ninguna historia. Sé el primero en compartir la tuya.",
            })}
            <div className="mt-4">
              <Link href="/testimonial/new" className="font-semibold text-court hover:underline">
                {pick(locale, {
                  ko: "이야기 남기기 →",
                  en: "Share Your Story →",
                  zh: "分享你的故事 →",
                  ja: "体験を投稿する →",
                  it: "Condividi la tua storia →",
                  fr: "Partagez votre histoire →",
                  es: "Comparte tu historia →",
                })}
              </Link>
            </div>
          </div>
        )}
      </Section>

      <Section tone="muted">
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/players" variant="court">
            {pick(locale, { ko: "선수들 보러가기", en: "Meet the players", zh: "认识选手", ja: "選手を見る", it: "Scopri gli atleti", fr: "Voir les joueurs", es: "Ver a los jugadores" })}
          </Button>
          <Button href="/coaches" variant="outline">
            {pick(locale, { ko: "코치진 보러가기", en: "Meet the coaches", zh: "认识教练团队", ja: "コーチ陣を見る", it: "Scopri gli allenatori", fr: "Voir les entraîneurs", es: "Ver a los entrenadores" })}
          </Button>
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <h2 className="break-keep font-display text-2xl font-bold sm:text-3xl">
            {pick(locale, {
              ko: "다음 이야기의 주인공은 우리 아이입니다",
              en: "Your child's story could be the next one",
              zh: "下一个故事的主角，就是您的孩子",
              ja: "次の物語の主人公は、お子さまです",
              it: "La prossima storia potrebbe essere quella di tuo figlio",
              fr: "La prochaine histoire pourrait être celle de votre enfant",
              es: "La próxima historia podría ser la de tu hijo",
            })}
          </h2>
          <p className="mt-3 break-keep leading-relaxed text-muted">
            {pick(locale, {
              ko: "선수의 현재 위치와 목표에 맞는 코칭·진로를 편하게 문의하세요.",
              en: "Reach out about coaching and pathways tailored to where your athlete is now.",
              zh: "欢迎咨询契合选手当前水平与目标的教学与升学路径。",
              ja: "選手の現在地と目標に合ったコーチング・進路をお気軽にお問い合わせください。",
              it: "Contattaci per un coaching e un percorso su misura per il livello attuale del tuo atleta.",
              fr: "Contactez-nous pour un encadrement et un parcours adaptés au niveau actuel de votre joueur.",
              es: "Consúltanos sobre el coaching y el itinerario adecuados al nivel actual de tu jugador.",
            })}
          </p>
          <div className="mt-8">
            <Button href="/consulting" variant="court">
              {pick(locale, { ko: "상담하기", en: "Request consultation", zh: "预约咨询", ja: "相談する", it: "Richiedi una consulenza", fr: "Demander un conseil", es: "Solicitar asesoría" })}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
