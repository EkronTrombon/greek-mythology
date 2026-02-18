interface ArrayFieldProps {
  label: string;
  name: string;
  defaultValue?: string[];
  required?: boolean;
  placeholder?: string;
  hint?: string;
}

export default function ArrayField({
  label,
  name,
  defaultValue,
  required,
  placeholder = "Enter values separated by commas",
  hint,
}: ArrayFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-heading text-xs tracking-[0.15em] uppercase text-text-muted mb-2"
      >
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        defaultValue={defaultValue?.join(", ")}
        required={required}
        placeholder={placeholder}
        className="w-full bg-bg-secondary border border-border text-text-primary px-4 py-2.5 font-body text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-text-faint"
      />
      {hint && (
        <p className="mt-1 font-body text-xs text-text-faint italic">{hint}</p>
      )}
    </div>
  );
}
