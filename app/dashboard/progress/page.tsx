import { createClient } from "@/lib/supabase/server";
import { curriculum } from "@/lib/site-data";

export const metadata = { title: "발달/진로 단계 | GCM" };

const stageKeys = ["foundation", "development", "junior_elite", "professional"];
const trackLabel: Record<string, string> = {
  undecided: "미정",
  professional: "프로 트랙",
  college: "대학 트랙",
};

export default async function ProgressPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: progress } = await supabase
    .from("progress")
    .select("stage, track, current_utr, target_utr, note")
    .eq("user_id", user!.id)
    .maybeSingle();

  const currentStage = progress?.stage ?? "foundation";
  const currentIndex = stageKeys.indexOf(currentStage);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">발달/진로 단계</h1>
        <p className="mt-1 text-sm text-muted">
          현재 단계와 진로 트랙, UTR 목표를 확인하세요. (단계 설정은 아카데미에서 관리)
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <InfoCard label="진로 트랙" value={trackLabel[progress?.track ?? "undecided"]} />
        <InfoCard label="현재 UTR" value={progress?.current_utr ?? "-"} />
        <InfoCard label="목표 UTR" value={progress?.target_utr ?? "-"} highlight />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {curriculum.map((stage, i) => {
          const done = i <= currentIndex;
          const active = i === currentIndex;
          return (
            <div
              key={stage.key}
              className={`rounded-2xl border p-5 ${
                active
                  ? "border-lime/60 bg-lime/5"
                  : done
                    ? "border-court/50 bg-card"
                    : "border-line bg-card/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    done ? "bg-court text-ink" : "bg-line text-muted"
                  }`}
                >
                  {i + 1}
                </span>
                {active ? <span className="text-xs font-bold text-lime">현재</span> : null}
              </div>
              <p className="mt-3 font-display text-sm font-bold uppercase text-court-bright">
                {stage.key}
              </p>
              <p className="text-base font-bold">{stage.title}</p>
            </div>
          );
        })}
      </div>

      {progress?.note ? (
        <div className="rounded-2xl border border-line bg-card/40 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
            코치 메모
          </h2>
          <p className="mt-2 whitespace-pre-wrap text-sm text-muted">{progress.note}</p>
        </div>
      ) : null}
    </div>
  );
}

function InfoCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <p className="text-xs text-muted">{label}</p>
      <p
        className={`mt-2 font-display text-2xl font-extrabold ${
          highlight ? "text-lime" : "text-ink"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
