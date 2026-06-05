import { schedule } from "@/lib/site-data";
import { Section, SectionHeading, Button } from "@/components/ui";

export function ScheduleSection() {
  return (
    <Section id="schedule" className="bg-card/30">
      <SectionHeading
        eyebrow="Showcase & Camp"
        title="대회 & 캠프 일정"
        lead="다가오는 캠프, 쇼케이스, 해외 토너먼트 일정."
      />
      <div className="mt-12 space-y-4">
        {schedule.map((event) => (
          <div
            key={event.title}
            className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-5">
              <span className="font-display text-lg font-extrabold text-lime">
                {event.date}
              </span>
              <div>
                <p className="text-base font-bold">{event.title}</p>
                <p className="text-sm text-muted">
                  {event.place} · {event.target}
                </p>
              </div>
            </div>
            <Button href="#contact" variant="outline" className="px-5 py-2">
              예약하기
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
