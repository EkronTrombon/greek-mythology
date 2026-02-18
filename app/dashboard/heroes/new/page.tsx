import HeroForm from "@/components/dashboard/forms/HeroForm";

export default function NewHeroPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="font-heading text-3xl font-bold text-gold mb-1">Add New Hero</h1>
        <p className="font-body text-text-faint text-sm italic">Add a legendary hero to the archive</p>
      </div>
      <HeroForm />
    </div>
  );
}
