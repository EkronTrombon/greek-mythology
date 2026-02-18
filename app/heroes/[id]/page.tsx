import { database } from "@/lib/db-api";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function HeroDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const hero = await database.getHeroById(id);
  if (!hero) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/heroes" className="font-heading text-xs tracking-[0.15em] uppercase text-text-muted hover:text-gold transition-colors mb-6 inline-block">← All Heroes</Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="font-heading text-5xl font-bold text-gold">{hero.name}</h1>
          {hero.parentage.divine && <span className="font-heading text-sm border border-gold text-gold px-2 py-1">Demigod</span>}
        </div>
        <p className="font-body text-xl italic text-text-muted">{hero.title}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Parentage</h3>
          <p className="font-body text-sm text-text-muted">
            {hero.parentage.father && <span>Father: {hero.parentage.father}<br /></span>}
            {hero.parentage.mother && <span>Mother: {hero.parentage.mother}</span>}
          </p>
        </div>
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Fate</h3>
          <p className="font-body text-sm text-text-muted">{hero.fate}</p>
        </div>
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Weapons</h3>
          <div className="flex flex-wrap gap-2">{hero.weapons.map((w) => <span key={w} className="font-body text-xs px-2 py-1 bg-bg-secondary border border-border text-text-muted capitalize">{w}</span>)}</div>
        </div>
        <div className="bg-bg-card border border-border p-4">
          <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-gold-muted mb-3">Famous For</h3>
          <ul className="space-y-1">{hero.famousFor.slice(0, 4).map((f) => <li key={f} className="font-body text-xs text-text-muted before:content-['·'] before:text-gold before:mr-2">{f}</li>)}</ul>
        </div>
      </div>

      <div className="bg-bg-card border border-border p-6">
        <h2 className="font-heading text-lg font-bold text-gold mb-4">About</h2>
        <p className="font-body text-text-muted leading-relaxed">{hero.description}</p>
      </div>
    </main>
  );
}
