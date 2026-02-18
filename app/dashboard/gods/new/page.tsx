import GodForm from "@/components/dashboard/forms/GodForm";

export default function NewGodPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="font-heading text-3xl font-bold text-gold mb-1">
          Add New God
        </h1>
        <p className="font-body text-text-faint text-sm italic">
          Add a new deity to the Olympian Archives
        </p>
      </div>
      <GodForm />
    </div>
  );
}
