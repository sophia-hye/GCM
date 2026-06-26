import { schedule } from "@/lib/site-data";
import { Section, SectionHeading, Button } from "@/components/ui";

export function ScheduleSection() {
  return (
    <Section id="schedule">
      <SectionHeading
        eyebrow="Showcase & Camp"
        title="대회 & 캠프 일정"
        lead="다가오는 캠프, 쇼케이스, 해외 토너먼트 일정."
      />
      <div className="mt-16 border-t border-line">
        {schedule.map((event) => (
          <div
            key={event.title}
            className="flex flex-col gap-4 border-b border-line py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-6">
              <span className="font-display text-base font-semibold tabular-nums text-court">
                {event.date}
              </span>
              <div>
                <p className="text-base font-bold">{event.title}</p>
                <p className="text-sm text-muted">
                  {event.place} · {event.target}
                </p>
              </div>
            </div>
            <Button href="/consulting" variant="link">
              예약하기
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
