import type { FormFieldDef } from "@/lib/forms";
import { PhoneInput } from "@/components/ui/PhoneInput";

const BASE =
  "w-full rounded-lg border border-line bg-base px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

export function FormField({ field }: { field: FormFieldDef }) {
  return (
    <div className={field.full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-semibold text-muted">
        {field.label}
        {field.required ? <span className="text-danger"> *</span> : null}
      </label>

      {field.type === "select" ? (
        <select name={field.name} required={field.required} defaultValue="" className={BASE}>
          <option value="" disabled>
            선택
          </option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          name={field.name}
          required={field.required}
          rows={3}
          placeholder={field.placeholder}
          className={BASE}
        />
      ) : field.type === "tel" ? (
        <PhoneInput name={field.name} required={field.required} className={BASE} />
      ) : (
        <input
          type={field.type}
          name={field.name}
          required={field.required}
          placeholder={field.placeholder}
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
