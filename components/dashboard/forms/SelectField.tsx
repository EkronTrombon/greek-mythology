interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  required?: boolean;
}

export default function SelectField({
  label,
  name,
  options,
  defaultValue,
  required,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-heading text-xs tracking-[0.15em] uppercase text-text-muted mb-2"
      >
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="w-full bg-bg-secondary border border-border text-text-primary px-4 py-2.5 font-body text-sm focus:border-gold focus:outline-none transition-colors"
      >
        {!required && (
          <option value="" className="bg-bg-secondary">
            — Select —
          </option>
        )}
        {options.map(({ value, label }) => (
          <option key={value} value={value} className="bg-bg-secondary">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
