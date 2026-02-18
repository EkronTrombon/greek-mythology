interface FormFieldProps {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}

export default function FormField({
  label,
  name,
  defaultValue,
  required,
  placeholder,
  type = "text",
}: FormFieldProps) {
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
        type={type}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="w-full bg-bg-secondary border border-border text-text-primary px-4 py-2.5 font-body text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-text-faint"
      />
    </div>
  );
}
