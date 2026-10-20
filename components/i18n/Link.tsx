"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { localizeHref } from "@/lib/i18n-pick";

/**
 * 로케일 인식 Link. 내부 경로(href 가 문자열이고 "/" 시작)는 현재 로케일
 * 접두어(/en, /zh 등)를 자동으로 붙인다. 기본 로케일(ko)은 접두어 없음.
 * 외부 링크·해시·tel/mailto·UrlObject 는 그대로 통과.
 */
export function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const localized = typeof href === "string" ? localizeHref(href, locale) : href;
  return <NextLink href={localized} {...props} />;
}
