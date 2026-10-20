import { fieldLabel, fieldOptions, fieldPlaceholder, type FormFieldDef } from "@/lib/forms";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { pick } from "@/lib/i18n-pick";

const BASE =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

export function FormField({ field }: { field: FormFieldDef }) {
  const locale = useLocale();
  const label = fieldLabel(field, locale);
  const placeholder = fieldPlaceholder(field, locale);

  return (
    <div className={field.full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-semibold text-muted">
        {label}
        {field.required ? <span className="text-danger"> *</span> : null}
      </label>

      {field.type === "select" ? (
        <select name={field.name} required={field.required} defaultValue="" className={BASE}>
          <option value="" disabled>
            {pick(locale, {
              ko: "선택",
              en: "Select",
              zh: "选择",
              ja: "選択",
              it: "Seleziona",
              fr: "Sélectionner",
              es: "Seleccionar",
            })}
          </option>
          {fieldOptions(field, locale).map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          name={field.name}
          required={field.required}
          rows={3}
          placeholder={placeholder}
          className={BASE}
        />
      ) : field.type === "tel" ? (
        <PhoneInput name={field.name} required={field.required} className={BASE} />
      ) : (
        <input
          type={field.type}
          name={field.name}
          required={field.required}
          placeholder={placeholder}
          min={field.type === "number" ? field.min : undefined}
          max={field.type === "number" ? field.max : undefined}
          step={field.type === "number" ? "1" : undefined}
          inputMode={field.type === "number" ? "numeric" : undefined}
          className={BASE}
        />
      )}
    </div>
  );
}
