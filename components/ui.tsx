import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "lime" | "court" | "outline";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "lime",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5";
  const variants: Record<string, string> = {
    lime: "bg-lime text-[#08111f] hover:brightness-105",
    court: "bg-court text-ink hover:bg-court-bright",
    outline: "border border-line text-ink hover:border-court-bright hover:text-court-bright",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-court/50 bg-court/10 px-3 py-1 text-xs font-semibold text-court-bright">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-court-bright">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-base text-muted sm:text-lg">{lead}</p> : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** 테니스 코트 라인 SVG — 배경 장식 */
export function CourtLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="40" y="30" width="320" height="540" />
      <line x1="40" y1="300" x2="360" y2="300" />
      <rect x="40" y="150" width="320" height="300" />
      <line x1="200" y1="150" x2="200" y2="450" />
      <line x1="200" y1="30" x2="200" y2="60" />
      <line x1="200" y1="540" x2="200" y2="570" />
    </svg>
  );
}
