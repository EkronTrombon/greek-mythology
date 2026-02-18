import { database as mockDb } from "@/lib/database";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function MythDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const myth = mockDb.getMythById(id);
  if (!myth) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/myths" className="font-heading text-xs tracking-[0.15em] uppercase text-text-muted hover:text-gold transition-colors mb-6 inline-block">← All Myths</Link>

      <div className="mb-8">
        <p className="font-heading text-xs tracking-[0.3em] uppercase text-gold-muted mb-3">{myth.category}</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-4">{myth.title}</h1>
        <p className="font-body text-xl italic text-text-muted leading-relaxed">&ldquo;{myth.summary}&rdquo;</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Characters</h3>
          <div className="flex flex-wrap gap-2">{myth.characters.map((c) => <span key={c} className="font-body text-xs px-2 py-1 bg-bg-secondary border border-border text-text-muted">{c}</span>)}</div>
        </div>
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Locations</h3>
          <div className="flex flex-wrap gap-2">
            {myth.locations.length > 0
              ? myth.locations.map((l) => <span key={l} className="font-body text-xs px-2 py-1 bg-bg-secondary border border-border text-text-muted">{l}</span>)
              : <span className="text-text-faint font-body text-xs">Various</span>}
          </div>
        </div>
      </div>

      {myth.moralLesson && (
        <div className="bg-bg-secondary border-l-2 border-gold px-6 py-4 mb-6">
          <span className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted">Moral: </span>
          <span className="font-body text-text-muted italic">{myth.moralLesson}</span>
        </div>
      )}

      <div className="bg-bg-card border border-border p-6">
        <h2 className="font-heading text-lg font-bold text-gold mb-4">The Full Story</h2>
        <p className="font-body text-text-muted leading-relaxed">{myth.description}</p>
      </div>
    </main>
  );
}
