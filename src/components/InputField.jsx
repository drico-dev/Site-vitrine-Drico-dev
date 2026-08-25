/**
 * InputField.jsx — champ de formulaire réutilisable.
 * type: "text" | "textarea" | "select"
 */
export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  options = [],
  rows = 5,
}) {
  const baseClasses =
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric-400/40";
  const borderClasses = error ? "border-red-400" : "border-line focus:border-electric-500";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-navy-900">
        {label}
        {required && <span className="text-electric-600"> *</span>}
      </label>

      {type === "textarea" && (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClasses} ${borderClasses} resize-none`}
        />
      )}

      {type === "select" && (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`${baseClasses} ${borderClasses} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%234A5568%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            Sélectionner...
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {(type === "text" || type === "email" || type === "tel") && (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClasses} ${borderClasses}`}
        />
      )}

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
