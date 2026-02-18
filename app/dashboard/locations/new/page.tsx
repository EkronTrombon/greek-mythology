import LocationForm from "@/components/dashboard/forms/LocationForm";

export default function NewLocationPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="font-heading text-3xl font-bold text-gold mb-1">Add New Location</h1>
        <p className="font-body text-text-faint text-sm italic">Add a mythological place to the archive</p>
      </div>
      <LocationForm />
    </div>
  );
}
