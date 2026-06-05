import { stats } from "@/lib/site-data";
import { Container } from "@/components/ui";

export function StatBar() {
  return (
    <div className="border-y border-line bg-card/40">
      <Container className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-extrabold text-lime sm:text-4xl">
              {stat.value}
              <span className="text-xl text-court-bright">{stat.suffix}</span>
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}
