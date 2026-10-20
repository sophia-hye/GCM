import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { pick, type Locale } from "@/lib/i18n-pick";
import { Container, Button } from "@/components/ui";
import { MatchAnalysisForm, type FeedbackCategory } from "@/components/dashboard/MatchAnalysisForm";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "매치피드백 | GCM 테니스 아카데미",
      en: "Match Feedback | GCM Tennis Academy",
      zh: "比赛反馈 | GCM Tennis Academy",
      ja: "マッチフィードバック | GCM Tennis Academy",
      it: "Feedback partita | GCM Tennis Academy",
      fr: "Retour de match | GCM Tennis Academy",
      es: "Comentarios del partido | GCM Tennis Academy",
    }),
  };
}

type Analysis = {
  id: string;
  category: string;
  match_date: string;
  opponent: string | null;
  final_result: string | null;
  better_than_last: string | null;
  improved_than_last: string | null;
  worse_than_last: string | null;
  needed: string | null;
  needed_practice: string | null;
  coach_feedback: string | null;
};

function getFields(locale: Locale): { key: keyof Analysis; label: string }[] {
  return [
    {
      key: "better_than_last",
      label: pick(locale, {
        ko: "잘 됐던 부분",
        en: "What went well",
        zh: "做得好的方面",
        ja: "うまくいった点",
        it: "Cosa è andato bene",
        fr: "Ce qui a bien marché",
        es: "Lo que salió bien",
      }),
    },
    {
      key: "improved_than_last",
      label: pick(locale, {
        ko: "좋아진 부분",
        en: "What improved",
        zh: "有所提升的方面",
        ja: "改善した点",
        it: "Cosa è migliorato",
        fr: "Ce qui s'est amélioré",
        es: "Lo que mejoró",
      }),
    },
    {
      key: "worse_than_last",
      label: pick(locale, {
        ko: "안 됐던 부분",
        en: "What didn't work",
        zh: "不理想的方面",
        ja: "うまくいかなかった点",
        it: "Cosa non ha funzionato",
        fr: "Ce qui n'a pas marché",
        es: "Lo que no funcionó",
      }),
    },
    {
      key: "needed",
      label: pick(locale, {
        ko: "필요한 부분",
        en: "What was needed",
        zh: "需要的方面",
        ja: "必要だった点",
        it: "Cosa serviva",
        fr: "Ce qui manquait",
        es: "Lo que hizo falta",
      }),
    },
    {
      key: "needed_practice",
      label: pick(locale, {
        ko: "필요한 부분과 안 됐던 부분에 따른 필요한 연습",
        en: "Practice needed based on gaps and weak points",
        zh: "根据不足与薄弱环节所需的练习",
        ja: "課題と弱点に基づいて必要な練習",
        it: "Allenamento necessario in base a lacune e punti deboli",
        fr: "Entraînement nécessaire selon les lacunes et points faibles",
        es: "Práctica necesaria según carencias y puntos débiles",
      }),
    },
  ];
}

function getTabs(locale: Locale): { key: FeedbackCategory; label: string }[] {
  return [
    {
      key: "tournament",
      label: pick(locale, {
        ko: "🏆 토너먼트",
        en: "🏆 Tournament",
        zh: "🏆 锦标赛",
        ja: "🏆 トーナメント",
        it: "🏆 Torneo",
        fr: "🏆 Tournoi",
        es: "🏆 Torneo",
      }),
    },
    {
      key: "training",
      label: pick(locale, {
        ko: "🎾 정규 훈련",
        en: "🎾 Regular training",
        zh: "🎾 常规训练",
        ja: "🎾 通常練習",
        it: "🎾 Allenamento regolare",
        fr: "🎾 Entraînement régulier",
        es: "🎾 Entrenamiento regular",
      }),
    },
  ];
}

export default async function MatchFeedbackPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const locale = await getLocale();
  const FIELDS = getFields(locale);
  const TABS = getTabs(locale);
  const category: FeedbackCategory = type === "training" ? "training" : "tournament";
  const contextLabel =
    category === "tournament"
      ? pick(locale, {
          ko: "대회",
          en: "Tournament",
          zh: "比赛",
          ja: "大会",
          it: "Torneo",
          fr: "Tournoi",
          es: "Torneo",
        })
      : pick(locale, {
          ko: "훈련 내용/주제",
          en: "Training focus/topic",
          zh: "训练内容/主题",
          ja: "練習内容・テーマ",
          it: "Focus/argomento allenamento",
          fr: "Thème/objet de l'entraînement",
          es: "Enfoque/tema del entrenamiento",
        });
  const typeLabel =
    category === "tournament"
      ? pick(locale, {
          ko: "토너먼트",
          en: "Tournament",
          zh: "锦标赛",
          ja: "トーナメント",
          it: "Torneo",
          fr: "Tournoi",
          es: "Torneo",
        })
      : pick(locale, {
          ko: "정규 훈련",
          en: "Regular training",
          zh: "常规训练",
          ja: "通常練習",
          it: "Allenamento regolare",
          fr: "Entraînement régulier",
          es: "Entrenamiento regular",
        });

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 비로그인: 리다이렉트 대신 미리보기 + 로그인 CTA 를 보여준다.
  if (!user) {
    const sample: Analysis = {
      id: "sample",
      category,
      match_date: "2026.03.15",
      opponent:
        category === "tournament"
          ? pick(locale, {
              ko: "OO배 주니어 16강",
              en: "OO Cup Junior, Round of 16",
              zh: "OO杯青少年组 16强",
              ja: "OO杯ジュニア ベスト16",
              it: "OO Cup Junior, ottavi di finale",
              fr: "OO Cup Junior, huitièmes de finale",
              es: "OO Cup Junior, octavos de final",
            })
          : pick(locale, {
              ko: "서브 & 발리 집중 훈련",
              en: "Serve & volley focus session",
              zh: "发球与截击专项训练",
              ja: "サーブ＆ボレー集中練習",
              it: "Sessione focalizzata su servizio e volée",
              fr: "Séance axée service et volée",
              es: "Sesión centrada en saque y volea",
            }),
      final_result:
        category === "tournament"
          ? pick(locale, {
              ko: "8강 진출",
              en: "Reached quarterfinals",
              zh: "晋级八强",
              ja: "ベスト8進出",
              it: "Raggiunti i quarti di finale",
              fr: "Qualifié en quarts de finale",
              es: "Clasificado a cuartos de final",
            })
          : null,
      better_than_last: pick(locale, {
        ko: "첫 서브 성공률이 높아 초반부터 리드를 잡았습니다.",
        en: "A high first-serve percentage let me take the lead early.",
        zh: "一发成功率高，从开局就取得领先。",
        ja: "ファーストサーブの成功率が高く、序盤からリードを奪えました。",
        it: "Un'alta percentuale di prime di servizio mi ha permesso di andare in vantaggio presto.",
        fr: "Un bon pourcentage de premières balles m'a permis de prendre l'avantage tôt.",
        es: "Un alto porcentaje de primeros saques me permitió tomar la delantera pronto.",
      }),
      improved_than_last: pick(locale, {
        ko: "백핸드 크로스 안정감이 지난번보다 좋아졌습니다.",
        en: "My backhand crosscourt was steadier than last time.",
        zh: "反手斜线比上次更稳定。",
        ja: "バックハンドのクロスが前回より安定しました。",
        it: "Il mio rovescio incrociato è stato più stabile della volta scorsa.",
        fr: "Mon revers croisé était plus régulier que la dernière fois.",
        es: "Mi revés cruzado estuvo más estable que la última vez.",
      }),
      worse_than_last: pick(locale, {
        ko: "듀스 접전에서 집중력이 흔들렸습니다.",
        en: "My focus wavered in the tight deuce games.",
        zh: "在平分的焦灼局中注意力有所动摇。",
        ja: "デュースの競り合いで集中力が揺らぎました。",
        it: "La mia concentrazione ha vacillato nei game combattuti ai vantaggi.",
        fr: "Ma concentration a vacillé dans les jeux serrés à égalité.",
        es: "Mi concentración flaqueó en los juegos ajustados con deuce.",
      }),
      needed: pick(locale, {
        ko: "접전 상황에서의 멘탈 루틴이 필요합니다.",
        en: "I need a mental routine for close situations.",
        zh: "在焦灼局面中需要一套心理调节流程。",
        ja: "接戦の場面でのメンタルルーティンが必要です。",
        it: "Mi serve una routine mentale per le situazioni equilibrate.",
        fr: "J'ai besoin d'une routine mentale pour les situations serrées.",
        es: "Necesito una rutina mental para las situaciones ajustadas.",
      }),
      needed_practice: pick(locale, {
        ko: "타이브레이크 시뮬레이션, 압박 상황 서브 연습.",
        en: "Tiebreak simulations and serving under pressure.",
        zh: "抢七模拟，以及压力下的发球练习。",
        ja: "タイブレークのシミュレーション、プレッシャー下でのサーブ練習。",
        it: "Simulazioni di tie-break e servizio sotto pressione.",
        fr: "Simulations de tie-break et service sous pression.",
        es: "Simulaciones de tie-break y saque bajo presión.",
      }),
      coach_feedback: pick(locale, {
        ko: "리드 관리가 좋아졌어요. 접전에서 루틴을 지키는 연습을 이어갑시다.",
        en: "Your lead management has improved. Let's keep practicing sticking to your routine in tight matches.",
        zh: "你的领先局面管理进步了。让我们继续练习在焦灼比赛中坚持既定流程。",
        ja: "リードの管理が上手くなりました。接戦でルーティンを守る練習を続けましょう。",
        it: "La gestione del vantaggio è migliorata. Continuiamo ad allenarci a mantenere la routine nelle partite combattute.",
        fr: "Ta gestion de l'avance s'est améliorée. Continuons à t'entraîner à garder ta routine dans les matchs serrés.",
        es: "Tu gestión de la ventaja ha mejorado. Sigamos practicando mantener tu rutina en los partidos ajustados.",
      }),
    };

    return (
      <div className="pt-16">
        <Container className="py-12">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h1 className="font-display text-3xl font-bold">
                {pick(locale, {
                  ko: "매치피드백",
                  en: "Match Feedback",
                  zh: "比赛反馈",
                  ja: "マッチフィードバック",
                  it: "Feedback partita",
                  fr: "Retour de match",
                  es: "Comentarios del partido",
                })}
              </h1>
              <p className="mt-1 text-sm text-muted">
                {pick(locale, {
                  ko: "시합·훈련 후 스스로 돌아본 내용을 기록하면 코치가 확인하고 피드백을 드립니다.",
                  en: "Record your own reflections after a match or session, and your coach will review them and give feedback.",
                  zh: "在比赛或训练后记录自己的反思，教练会查看并给予反馈。",
                  ja: "試合や練習の後に自分で振り返った内容を記録すると、コーチが確認してフィードバックします。",
                  it: "Annota le tue riflessioni dopo una partita o una sessione e il tuo allenatore le esaminerà e ti darà un feedback.",
                  fr: "Note tes réflexions après un match ou une séance, et ton entraîneur les examinera et te donnera un retour.",
                  es: "Registra tus propias reflexiones después de un partido o sesión, y tu entrenador las revisará y te dará comentarios.",
                })}
              </p>
            </div>

            {/* 로그인 CTA */}
            <div className="rounded-2xl border border-court/30 bg-court/5 p-6 text-center">
              <p className="font-semibold text-court-bright">
                {pick(locale, {
                  ko: "로그인이 필요한 메뉴입니다",
                  en: "This menu requires login",
                  zh: "此菜单需要登录",
                  ja: "ログインが必要なメニューです",
                  it: "Questo menu richiede l'accesso",
                  fr: "Ce menu nécessite une connexion",
                  es: "Este menú requiere iniciar sesión",
                })}
              </p>
              <p className="mt-1.5 break-keep text-sm leading-relaxed text-muted">
                {pick(locale, {
                  ko: "로그인하면 내 시합·훈련 기록을 작성하고 코치의 피드백을 받아볼 수 있습니다.",
                  en: "Log in to write your own match and training records and receive feedback from your coach.",
                  zh: "登录后即可撰写自己的比赛与训练记录，并获得教练的反馈。",
                  ja: "ログインすると、自分の試合・練習の記録を作成し、コーチのフィードバックを受け取れます。",
                  it: "Accedi per scrivere i tuoi resoconti di partite e allenamenti e ricevere il feedback del tuo allenatore.",
                  fr: "Connecte-toi pour rédiger tes comptes rendus de matchs et d'entraînements et recevoir les retours de ton entraîneur.",
                  es: "Inicia sesión para escribir tus registros de partidos y entrenamientos y recibir comentarios de tu entrenador.",
                })}
                <br className="hidden sm:block" />
                {pick(locale, {
                  ko: "아래는 실제 화면 미리보기입니다.",
                  en: "Below is a preview of the actual screen.",
                  zh: "以下是实际页面的预览。",
                  ja: "以下は実際の画面のプレビューです。",
                  it: "Di seguito un'anteprima della schermata reale.",
                  fr: "Voici un aperçu de l'écran réel.",
                  es: "A continuación, una vista previa de la pantalla real.",
                })}
              </p>
              <div className="mt-5">
                <Button href="/login?next=/match-feedback" variant="court">
                  {pick(locale, {
                    ko: "로그인하기",
                    en: "Log in",
                    zh: "登录",
                    ja: "ログイン",
                    it: "Accedi",
                    fr: "Se connecter",
                    es: "Iniciar sesión",
                  })}
                </Button>
              </div>
            </div>

            {/* 미리보기 (예시) */}
            <div className="space-y-4">
              <h2 className="font-display text-lg font-bold">
                {pick(locale, {
                  ko: "미리보기",
                  en: "Preview",
                  zh: "预览",
                  ja: "プレビュー",
                  it: "Anteprima",
                  fr: "Aperçu",
                  es: "Vista previa",
                })}{" "}
                <span className="text-xs font-normal text-muted">
                  {pick(locale, {
                    ko: "— 예시 화면",
                    en: "— Sample screen",
                    zh: "— 示例画面",
                    ja: "— サンプル画面",
                    it: "— Schermata di esempio",
                    fr: "— Écran d'exemple",
                    es: "— Pantalla de ejemplo",
                  })}
                </span>
              </h2>
              <div className="pointer-events-none select-none rounded-2xl border border-line bg-card/40 p-5 opacity-90">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">
                    {sample.match_date}
                    {sample.opponent ? (
                      <span className="ml-2 text-sm text-muted">
                        {contextLabel} · {sample.opponent}
                      </span>
                    ) : null}
                  </p>
                  {sample.final_result ? (
                    <span className="rounded-md bg-lime/15 px-2 py-1 text-xs font-semibold text-lime">
                      {pick(locale, {
                        ko: "최종성적",
                        en: "Final result",
                        zh: "最终成绩",
                        ja: "最終成績",
                        it: "Risultato finale",
                        fr: "Résultat final",
                        es: "Resultado final",
                      })}{" "}
                      · {sample.final_result}
                    </span>
                  ) : null}
                </div>
                <dl className="mt-3 space-y-2 text-sm">
                  {FIELDS.map((f) =>
                    sample[f.key] ? (
                      <div key={f.key}>
                        <dt className="text-xs font-semibold text-court-bright">{f.label}</dt>
                        <dd className="whitespace-pre-line text-ink/90">{sample[f.key]}</dd>
                      </div>
                    ) : null,
                  )}
                </dl>
                <div className="mt-4 rounded-lg border border-court/30 bg-court/5 p-3">
                  <p className="text-xs font-semibold text-court-bright">
                    {pick(locale, {
                      ko: "코치 피드백",
                      en: "Coach feedback",
                      zh: "教练反馈",
                      ja: "コーチのフィードバック",
                      it: "Feedback dell'allenatore",
                      fr: "Retour de l'entraîneur",
                      es: "Comentarios del entrenador",
                    })}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-sm text-ink/90">{sample.coach_feedback}</p>
                </div>
              </div>
              <p className="text-center text-xs text-muted">
                {pick(locale, {
                  ko: "실제 기록과 코치 피드백은 로그인 후 확인할 수 있습니다.",
                  en: "You can view your actual records and coach feedback after logging in.",
                  zh: "登录后即可查看实际记录与教练反馈。",
                  ja: "実際の記録とコーチのフィードバックはログイン後に確認できます。",
                  it: "Puoi visualizzare i tuoi resoconti reali e il feedback dell'allenatore dopo aver effettuato l'accesso.",
                  fr: "Tu pourras voir tes comptes rendus réels et les retours de l'entraîneur après connexion.",
                  es: "Puedes ver tus registros reales y los comentarios del entrenador después de iniciar sesión.",
                })}
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("approved, is_admin")
    .eq("id", user.id)
    .maybeSingle();
  const canWrite = Boolean(profile?.approved || profile?.is_admin);

  // 항상 '본인 기록만' 보여준다(관리자는 RLS상 전체 조회 가능하므로 명시적으로 본인 필터).
  const { data } = await supabase
    .from("gcm_match_analyses")
    .select("*")
    .eq("user_id", user.id)
    .eq("category", category)
    .order("match_date", { ascending: false });
  const analyses = (data ?? []) as Analysis[];

  return (
    <div className="pt-16">
      <Container className="py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold">
              {pick(locale, {
                ko: "매치피드백",
                en: "Match Feedback",
                zh: "比赛反馈",
                ja: "マッチフィードバック",
                it: "Feedback partita",
                fr: "Retour de match",
                es: "Comentarios del partido",
              })}
            </h1>
            <p className="mt-1 text-sm text-muted">
              {pick(locale, {
                ko: "시합·훈련 후 스스로 돌아본 내용을 기록하면 코치가 확인하고 피드백을 드립니다.",
                en: "Record your own reflections after a match or session, and your coach will review them and give feedback.",
                zh: "在比赛或训练后记录自己的反思，教练会查看并给予反馈。",
                ja: "試合や練習の後に自分で振り返った内容を記録すると、コーチが確認してフィードバックします。",
                it: "Annota le tue riflessioni dopo una partita o una sessione e il tuo allenatore le esaminerà e ti darà un feedback.",
                fr: "Note tes réflexions après un match ou une séance, et ton entraîneur les examinera et te donnera un retour.",
                es: "Registra tus propias reflexiones después de un partido o sesión, y tu entrenador las revisará y te dará comentarios.",
              })}
            </p>
          </div>

          {/* 유형 탭 */}
          <div className="flex gap-1 border-b border-line">
            {TABS.map((t) => {
              const active = t.key === category;
              return (
                <Link
                  key={t.key}
                  href={`/match-feedback?type=${t.key}`}
                  className={`-mb-px rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active ? "border-b-2 border-court text-court" : "text-muted hover:text-ink"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>

          {canWrite ? (
            <MatchAnalysisForm category={category} />
          ) : (
            <div className="rounded-2xl border border-court/30 bg-court/5 p-6 text-sm">
              <p className="font-semibold text-court-bright">
                {pick(locale, {
                  ko: "작성 권한이 없습니다",
                  en: "You don't have write access",
                  zh: "您没有写入权限",
                  ja: "作成権限がありません",
                  it: "Non hai i permessi di scrittura",
                  fr: "Vous n'avez pas les droits d'écriture",
                  es: "No tienes permiso de escritura",
                })}
              </p>
              <p className="mt-1 text-muted">
                {pick(locale, {
                  ko: "매치피드백은 승인된 GCM 팀 선수만 작성할 수 있습니다. 팀 소속·승인 여부는 코치에게 문의해 주세요.",
                  en: "Only approved GCM team players can write match feedback. Please ask your coach about team membership and approval.",
                  zh: "只有通过审批的 GCM 队选手才能撰写比赛反馈。有关队伍归属与审批情况，请咨询教练。",
                  ja: "マッチフィードバックは承認されたGCMチームの選手のみ作成できます。チーム所属・承認状況はコーチにお問い合わせください。",
                  it: "Solo i giocatori approvati del team GCM possono scrivere i feedback delle partite. Chiedi al tuo allenatore informazioni sull'appartenenza al team e sull'approvazione.",
                  fr: "Seuls les joueurs approuvés de l'équipe GCM peuvent rédiger des retours de match. Renseigne-toi auprès de ton entraîneur sur l'appartenance à l'équipe et l'approbation.",
                  es: "Solo los jugadores aprobados del equipo GCM pueden escribir comentarios de partidos. Consulta con tu entrenador sobre la pertenencia al equipo y la aprobación.",
                })}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold">
              {pick(locale, {
                ko: `내 ${typeLabel} 기록`,
                en: `My ${typeLabel} records`,
                zh: `我的${typeLabel}记录`,
                ja: `私の${typeLabel}記録`,
                it: `I miei resoconti · ${typeLabel}`,
                fr: `Mes comptes rendus · ${typeLabel}`,
                es: `Mis registros · ${typeLabel}`,
              })}
            </h2>
            {analyses.length > 0 ? (
              analyses.map((a) => (
                <div key={a.id} className="rounded-2xl border border-line bg-card/40 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold">
                      {a.match_date}
                      {a.opponent ? (
                        <span className="ml-2 text-sm text-muted">
                          {contextLabel} · {a.opponent}
                        </span>
                      ) : null}
                    </p>
                    {a.final_result ? (
                      <span className="rounded-md bg-lime/15 px-2 py-1 text-xs font-semibold text-lime">
                        {pick(locale, {
                          ko: "최종성적",
                          en: "Final result",
                          zh: "最终成绩",
                          ja: "最終成績",
                          it: "Risultato finale",
                          fr: "Résultat final",
                          es: "Resultado final",
                        })}{" "}
                        · {a.final_result}
                      </span>
                    ) : null}
                  </div>
                  <dl className="mt-3 space-y-2 text-sm">
                    {FIELDS.map((f) =>
                      a[f.key] ? (
                        <div key={f.key}>
                          <dt className="text-xs font-semibold text-court-bright">{f.label}</dt>
                          <dd className="whitespace-pre-line text-ink/90">{a[f.key]}</dd>
                        </div>
                      ) : null,
                    )}
                  </dl>
                  {a.coach_feedback ? (
                    <div className="mt-4 rounded-lg border border-court/30 bg-court/5 p-3">
                      <p className="text-xs font-semibold text-court-bright">
                        {pick(locale, {
                          ko: "코치 피드백",
                          en: "Coach feedback",
                          zh: "教练反馈",
                          ja: "コーチのフィードバック",
                          it: "Feedback dell'allenatore",
                          fr: "Retour de l'entraîneur",
                          es: "Comentarios del entrenador",
                        })}
                      </p>
                      <p className="mt-1 whitespace-pre-line text-sm text-ink/90">{a.coach_feedback}</p>
                    </div>
                  ) : (
                    <p className="mt-3 text-xs text-muted">
                      {pick(locale, {
                        ko: "코치 피드백 대기 중",
                        en: "Awaiting coach feedback",
                        zh: "等待教练反馈",
                        ja: "コーチのフィードバック待ち",
                        it: "In attesa del feedback dell'allenatore",
                        fr: "En attente du retour de l'entraîneur",
                        es: "A la espera de los comentarios del entrenador",
                      })}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-line bg-card/40 px-5 py-8 text-center text-sm text-muted">
                {pick(locale, {
                  ko: `아직 작성한 ${typeLabel} 기록이 없습니다.`,
                  en: `You haven't written any ${typeLabel} records yet.`,
                  zh: `您还没有撰写任何${typeLabel}记录。`,
                  ja: `まだ作成した${typeLabel}の記録がありません。`,
                  it: `Non hai ancora scritto resoconti (${typeLabel}).`,
                  fr: `Tu n'as pas encore rédigé de comptes rendus (${typeLabel}).`,
                  es: `Aún no has escrito registros (${typeLabel}).`,
                })}
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
