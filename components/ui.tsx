import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

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
  variant?: "lime" | "court" | "outline" | "outline-light" | "link";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "lime",
  className = "",
}: ButtonProps) {
  if (variant === "link") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-court ${className}`}
      >
        {children}
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    );
  }

  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5";
  const variants: Record<string, string> = {
    lime: "bg-lime text-white hover:brightness-105",
    court: "bg-court text-white hover:bg-court-deep",
    outline: "border border-line text-ink hover:border-court hover:text-court",
    "outline-light": "border border-white/40 text-white hover:bg-white/10",
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
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {lead ? <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p> : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  tone = "default",
  lines = false,
  reveal = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "court";
  lines?: boolean;
  reveal?: boolean;
}) {
  const toneCls =
    tone === "muted"
      ? "bg-card/40"
      : tone === "court"
        ? "bg-court-gradient text-white"
        : "";

  const linesColor = tone === "court" ? "text-white/10" : "text-court/[0.06]";

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 overflow-hidden py-24 sm:py-36 ${toneCls} ${className}`}
    >
      {lines ? (
        <CourtLines
          className={`pointer-events-none absolute -right-16 top-0 h-full w-2/3 ${linesColor}`}
        />
      ) : null}
      <Container className="relative">
        {reveal ? <Reveal>{children}</Reveal> : children}
      </Container>
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
