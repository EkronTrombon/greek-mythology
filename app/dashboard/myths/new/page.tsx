import MythForm from "@/components/dashboard/forms/MythForm";

export default function NewMythPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="font-heading text-3xl font-bold text-gold mb-1">Add New Myth</h1>
        <p className="font-body text-text-faint text-sm italic">Add an ancient tale to the archive</p>
      </div>
      <MythForm />
    </div>
  );
}
