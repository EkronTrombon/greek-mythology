import CreatureForm from "@/components/dashboard/forms/CreatureForm";

export default function NewCreaturePage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="font-heading text-3xl font-bold text-gold mb-1">Add New Creature</h1>
        <p className="font-body text-text-faint text-sm italic">Add a mythological beast to the archive</p>
      </div>
      <CreatureForm />
    </div>
  );
}
