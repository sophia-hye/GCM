import { stats } from "@/lib/site-data";
import { Container } from "@/components/ui";

export function StatBar() {
  return (
    <div className="border-b border-line">
      <Container className="grid grid-cols-2 gap-8 py-16 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl font-bold text-ink sm:text-5xl">
              {stat.value}
              <span className="text-2xl text-court">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}
