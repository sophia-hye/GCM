"use client";

import { useState } from "react";

/** 숫자 입력을 010-1234-5678 형태로 포맷 (휴대폰 3-4-4 기준) */
export function formatPhoneNumber(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
}

const DEFAULT_CLASS =
  "w-full rounded-lg border border-line bg-card px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

export function PhoneInput({
  name = "phone",
  placeholder = "010-0000-0000",
  required = true,
  className = DEFAULT_CLASS,
}: {
  name?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  const [value, setValue] = useState("");
  return (
    <input
      type="tel"
      inputMode="numeric"
      autoComplete="tel"
      name={name}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(e) => setValue(formatPhoneNumber(e.target.value))}
      className={className}
    />
  );
}
