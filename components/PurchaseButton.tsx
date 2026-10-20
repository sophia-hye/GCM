"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/programs";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

/**
 * 결제(구매) CTA — 온라인 결제(PG) 연동 대비 시임(seam).
 * 현재는 PG 미연동 상태로, 클릭 시 상담 안내를 노출한다.
 * 추후 이 버튼의 onClick 에서 결제 세션 생성(예: Toss Payments) 을 호출하도록 교체하면 된다.
 */
export function PurchaseButton({
  price,
  ko = true,
}: {
  programId: string;
  price: number | null;
  ko?: boolean;
}) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-full bg-court px-8 py-4 text-center font-display text-base font-bold text-white transition hover:bg-court-deep sm:w-auto"
      >
        {`${pick(locale, {
          ko: "구매하기",
          en: "Buy",
          zh: "购买",
          ja: "購入する",
          it: "Acquista",
          fr: "Acheter",
          es: "Comprar",
        })} · ${formatPrice(price, ko)}`}
      </button>

      {open ? (
        <div className="mt-4 rounded-2xl border border-court/25 bg-court/5 p-5 text-sm leading-relaxed text-ink/85">
          <p className="font-semibold text-court-bright">
            {pick(locale, {
              ko: "온라인 결제는 준비 중입니다.",
              en: "Online payment is coming soon.",
              zh: "在线支付即将上线。",
              ja: "オンライン決済は準備中です。",
              it: "Il pagamento online sarà presto disponibile.",
              fr: "Le paiement en ligne arrive bientôt.",
              es: "El pago en línea estará disponible pronto.",
            })}
          </p>
          <p className="mt-1.5">
            {pick(locale, {
              ko: "지금은 상담을 통해 등록을 도와드립니다. 아래로 문의해 주세요.",
              en: "For now we help you enroll via consultation. Please reach out below.",
              zh: "目前我们通过咨询帮助您报名。请通过下方与我们联系。",
              ja: "現在はご相談を通じて登録をお手伝いしています。下記よりお問い合わせください。",
              it: "Per ora ti aiutiamo a iscriverti tramite una consulenza. Contattaci qui sotto.",
              fr: "Pour l'instant, nous vous aidons à vous inscrire via une consultation. Contactez-nous ci-dessous.",
              es: "Por ahora te ayudamos a inscribirte mediante una consulta. Contáctanos a continuación.",
            })}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/consulting"
              className="rounded-full bg-court px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-court-deep"
            >
              {pick(locale, {
                ko: "상담 신청 →",
                en: "Request consultation →",
                zh: "申请咨询 →",
                ja: "相談を申し込む →",
                it: "Richiedi una consulenza →",
                fr: "Demander une consultation →",
                es: "Solicitar consulta →",
              })}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-court-bright"
            >
              {pick(locale, {
                ko: "문의하기",
                en: "Contact",
                zh: "联系我们",
                ja: "お問い合わせ",
                it: "Contatti",
                fr: "Contact",
                es: "Contacto",
              })}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
