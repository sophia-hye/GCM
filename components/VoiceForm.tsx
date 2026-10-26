"use client";

import { useActionState } from "react";
import { submitVoice, type VoiceState } from "@/app/actions/voices";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

const FIELD =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright";

export function VoiceForm({ defaultName = "" }: { defaultName?: string }) {
  const [state, action, pending] = useActionState<VoiceState, FormData>(submitVoice, {});
  const locale = useLocale();

  return (
    <form action={action} className="space-y-4 rounded-2xl border border-line bg-card p-6">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, { ko: "구분", en: "Category", zh: "身份", ja: "区分", it: "Categoria", fr: "Catégorie", es: "Categoría" })}
        </label>
        <select name="relation" defaultValue="" className={FIELD}>
          <option value="" disabled>
            {pick(locale, { ko: "선택해 주세요", en: "Please select", zh: "请选择", ja: "選択してください", it: "Seleziona", fr: "Veuillez choisir", es: "Selecciona" })}
          </option>
          <option value="player">
            {pick(locale, { ko: "선수", en: "Player", zh: "选手", ja: "選手", it: "Atleta", fr: "Joueur", es: "Jugador" })}
          </option>
          <option value="parent">
            {pick(locale, { ko: "학부모", en: "Parent", zh: "家长", ja: "保護者", it: "Genitore", fr: "Parent", es: "Familiar" })}
          </option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, { ko: "표시할 이름", en: "Display name", zh: "显示名称", ja: "表示名", it: "Nome visualizzato", fr: "Nom affiché", es: "Nombre a mostrar" })}
        </label>
        <input
          type="text"
          name="author_name"
          defaultValue={defaultName}
          placeholder={pick(locale, {
            ko: "예) 김OO 학부모 / 이OO 선수",
            en: "e.g. Parent of Kim / Player Lee",
            zh: "例）金OO 家长 / 李OO 选手",
            ja: "例）キムOO 保護者 / イOO 選手",
            it: "es. Genitore di Kim / Atleta Lee",
            fr: "ex. Parent de Kim / Joueur Lee",
            es: "ej. Familiar de Kim / Jugador Lee",
          })}
          className={FIELD}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, { ko: "제목 (선택)", en: "Title (optional)", zh: "标题（选填）", ja: "タイトル（任意）", it: "Titolo (facoltativo)", fr: "Titre (facultatif)", es: "Título (opcional)" })}
        </label>
        <input
          type="text"
          name="title"
          placeholder={pick(locale, { ko: "한 줄 제목", en: "One-line title", zh: "一句话标题", ja: "ひとことタイトル", it: "Titolo in una riga", fr: "Titre en une ligne", es: "Título en una línea" })}
          className={FIELD}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {pick(locale, { ko: "이야기 내용", en: "Your story", zh: "分享内容", ja: "お話の内容", it: "La tua storia", fr: "Votre histoire", es: "Tu historia" })}
        </label>
        <textarea
          name="body"
          rows={6}
          placeholder={pick(locale, {
            ko: "GCM과 함께한 이야기를 들려주세요.",
            en: "Tell us your story with GCM.",
            zh: "请分享您与 GCM 的故事。",
            ja: "GCM とともに歩んだお話を聞かせてください。",
            it: "Raccontaci la tua storia con GCM.",
            fr: "Partagez votre histoire avec GCM.",
            es: "Cuéntanos tu historia con GCM.",
          })}
          className={FIELD}
        />
      </div>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <p className="text-xs text-muted">
        {pick(locale, {
          ko: "작성하신 글은 GCM 관리자 확인·승인 후 게시판에 공개됩니다.",
          en: "Your post will be published after review and approval by a GCM administrator.",
          zh: "您的内容将在 GCM 管理员确认并通过后发布到留言板。",
          ja: "ご投稿は GCM 管理者の確認・承認後に掲示板へ公開されます。",
          it: "Il tuo messaggio sarà pubblicato dopo la verifica e l'approvazione di un amministratore GCM.",
          fr: "Votre message sera publié après vérification et approbation par un administrateur GCM.",
          es: "Tu mensaje se publicará tras la revisión y aprobación de un administrador de GCM.",
        })}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-court px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending
          ? pick(locale, { ko: "제출 중...", en: "Submitting...", zh: "提交中…", ja: "送信中…", it: "Invio in corso…", fr: "Envoi…", es: "Enviando…" })
          : pick(locale, { ko: "등록 요청", en: "Submit", zh: "提交申请", ja: "登録をリクエスト", it: "Invia richiesta", fr: "Envoyer", es: "Enviar solicitud" })}
      </button>
    </form>
  );
}
