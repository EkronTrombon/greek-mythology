import { database as mockDb } from "@/lib/database";
import { notFound } from "next/navigation";
import LocationForm from "@/components/dashboard/forms/LocationForm";
import DeleteButton from "@/components/dashboard/DeleteButton";
import { deleteLocation } from "@/lib/actions/locations";
import Link from "next/link";

export default async function EditLocationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const location = mockDb.getLocationById(id);
  if (!location) notFound();

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">{location.name}</h1>
          <p className="font-body text-text-faint text-sm italic capitalize">{location.type}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/locations" className="font-heading text-xs tracking-[0.1em] uppercase text-text-muted hover:text-gold transition-colors">← Back</Link>
          <DeleteButton action={deleteLocation.bind(null, location.id)} entityName={location.name} />
        </div>
      </div>
      <LocationForm location={location} />
    </div>
  );
}
