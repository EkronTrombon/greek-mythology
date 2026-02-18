import Link from "next/link";
import { database } from "@/lib/db-api";

export const metadata = {
  title: "Locations — MYTHICA",
  description: "Sacred mountains, mythical realms, and ancient cities of Greek mythology.",
};

export default async function LocationsPage() {
  const locations = await database.getAllLocations();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-gold-muted mb-3">Sacred Places</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-3">Mythological Locations</h1>
        <p className="font-body text-text-muted italic max-w-xl">From the heights of Mount Olympus to the depths of the Underworld — the places where legend was born.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc) => (
          <Link key={loc.id} href={`/locations/${loc.id}`} className="group bg-bg-card border border-border hover:border-border-gold p-5 transition-all hover:bg-bg-elevated">
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-heading text-xl font-bold text-gold group-hover:text-gold-light transition-colors">{loc.name}</h2>
              <span className="font-heading text-xs tracking-[0.05em] uppercase px-2 py-0.5 border border-border-gold text-gold-muted">{loc.type}</span>
            </div>
            {loc.region && <p className="font-body text-xs text-text-faint mb-2">{loc.region}</p>}
            <p className="font-body text-text-muted text-sm leading-relaxed line-clamp-3">{loc.description}</p>
            <div className="mt-3 font-heading text-xs tracking-[0.15em] uppercase text-gold-muted group-hover:text-gold transition-colors">Learn more →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
