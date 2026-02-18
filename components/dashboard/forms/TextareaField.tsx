interface TextareaFieldProps {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export default function TextareaField({
  label,
  name,
  defaultValue,
  required,
  placeholder,
  rows = 4,
}: TextareaFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-heading text-xs tracking-[0.15em] uppercase text-text-muted mb-2"
      >
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-bg-secondary border border-border text-text-primary px-4 py-2.5 font-body text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-text-faint resize-y"
      />
    </div>
  );
}
