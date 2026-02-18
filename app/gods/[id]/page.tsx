import { database as mockDb } from "@/lib/database";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function GodDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const god = mockDb.getGodById(id);
  if (!god) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/gods" className="font-heading text-xs tracking-[0.15em] uppercase text-text-muted hover:text-gold transition-colors mb-6 inline-block">
        ← All Gods
      </Link>

      <div className="mb-8">
        <p className="font-heading text-xs tracking-[0.3em] uppercase text-gold-muted mb-2">{god.greekName} · {god.romanName}</p>
        <h1 className="font-heading text-5xl font-bold text-gold mb-2">{god.name}</h1>
        <p className="font-body text-xl italic text-text-muted">{god.title}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Domains</h3>
          <div className="flex flex-wrap gap-2">
            {god.domain.map((d) => (
              <span key={d} className="font-body text-xs px-2 py-1 bg-bg-secondary border border-border text-text-muted capitalize">{d}</span>
            ))}
          </div>
        </div>
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Symbols</h3>
          <div className="flex flex-wrap gap-2">
            {god.symbols.map((s) => (
              <span key={s} className="font-body text-xs px-2 py-1 bg-bg-secondary border border-border text-text-muted capitalize">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Parentage</h3>
          <p className="font-body text-sm text-text-muted">
            {god.parentage.father && <span>Father: {god.parentage.father}<br /></span>}
            {god.parentage.mother && <span>Mother: {god.parentage.mother}</span>}
            {!god.parentage.father && !god.parentage.mother && <span className="text-text-faint">Unknown</span>}
          </p>
          <p className="font-body text-sm text-text-muted mt-2">
            <span className="font-heading text-xs uppercase text-text-faint">Residence: </span>
            {god.residence}
          </p>
        </div>
      </div>

      <div className="bg-bg-card border border-border p-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />
        <h2 className="font-heading text-lg font-bold text-gold mb-4">About</h2>
        <p className="font-body text-text-muted leading-relaxed">{god.description}</p>
      </div>
    </main>
  );
}
