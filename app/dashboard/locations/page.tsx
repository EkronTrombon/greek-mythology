import Link from "next/link";
import { database as mockDb } from "@/lib/database";
import { deleteLocation } from "@/lib/actions/locations";
import DeleteButton from "@/components/dashboard/DeleteButton";

export default function DashboardLocationsPage() {
  const allLocations = mockDb.getAllLocations();

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">Locations</h1>
          <p className="font-body text-text-faint text-sm">{allLocations.length} entries in the archive</p>
        </div>
        <Link href="/dashboard/locations/new" className="px-4 py-2 bg-gold text-bg-primary font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-all">
          + Add Location
        </Link>
      </div>

      <div className="border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-bg-secondary border-b border-border">
            <tr>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3">Name</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 hidden sm:table-cell">Type</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 hidden lg:table-cell">Region</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {allLocations.map((loc) => (
              <tr key={loc.id} className="hover:bg-bg-elevated transition-colors">
                <td className="px-4 py-3">
                  <span className="font-heading text-sm text-gold">{loc.name}</span>
                  <span className="block font-body text-xs text-text-faint sm:hidden capitalize">{loc.type}</span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className="font-heading text-xs tracking-[0.1em] uppercase px-2 py-0.5 border border-border-gold text-gold-muted capitalize">{loc.type}</span>
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <span className="font-body text-xs text-text-faint">{loc.region ?? "—"}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/dashboard/locations/${loc.id}`} className="font-heading text-xs tracking-[0.1em] uppercase text-gold hover:text-gold-light transition-colors">Edit</Link>
                    <DeleteButton action={deleteLocation.bind(null, loc.id)} entityName={loc.name} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
