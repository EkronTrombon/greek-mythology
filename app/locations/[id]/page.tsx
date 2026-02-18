import { database as mockDb } from "@/lib/database";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function LocationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const location = mockDb.getLocationById(id);
  if (!location) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/locations" className="font-heading text-xs tracking-[0.15em] uppercase text-text-muted hover:text-gold transition-colors mb-6 inline-block">← All Locations</Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="font-heading text-5xl font-bold text-gold">{location.name}</h1>
          <span className="font-heading text-sm border border-gold text-gold px-2 py-1 capitalize">{location.type}</span>
        </div>
        {location.region && <p className="font-body text-text-muted">{location.region}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Significance</h3>
          <p className="font-body text-sm text-text-muted">{location.significance}</p>
        </div>
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Associated Deities</h3>
          <div className="flex flex-wrap gap-2">
            {location.associatedDeities.length > 0
              ? location.associatedDeities.map((d) => <span key={d} className="font-body text-xs px-2 py-1 bg-bg-secondary border border-border text-text-muted">{d}</span>)
              : <span className="font-body text-xs text-text-faint">None recorded</span>}
          </div>
        </div>
      </div>

      <div className="bg-bg-card border border-border p-6">
        <h2 className="font-heading text-lg font-bold text-gold mb-4">About</h2>
        <p className="font-body text-text-muted leading-relaxed">{location.description}</p>
      </div>
    </main>
  );
}
