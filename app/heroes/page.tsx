import Link from "next/link";
import { database as mockDb } from "@/lib/database";

export const metadata = {
  title: "Heroes — MYTHICA",
  description: "The legendary heroes of ancient Greece — mortals and demigods who defied fate.",
};

export default function HeroesPage() {
  const heroes = mockDb.getAllHeroes();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-gold-muted mb-3">The Champions</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-3">Legendary Heroes</h1>
        <p className="font-body text-text-muted italic max-w-xl">
          Mortals and demigods of extraordinary strength and cunning who shaped the ancient world through their deeds.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {heroes.map((hero) => (
          <Link key={hero.id} href={`/heroes/${hero.id}`} className="group bg-bg-card border border-border hover:border-border-gold p-5 transition-all hover:bg-bg-elevated">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-heading text-xl font-bold text-gold group-hover:text-gold-light transition-colors">{hero.name}</h2>
              {hero.parentage.divine && <span className="font-heading text-xs text-gold-muted border border-border-gold px-1.5 py-0.5">Demigod</span>}
            </div>
            <p className="font-body text-xs text-text-faint mb-3 italic">{hero.title}</p>
            <p className="font-body text-text-muted text-sm leading-relaxed line-clamp-3">{hero.description}</p>
            <div className="mt-3 font-heading text-xs tracking-[0.15em] uppercase text-gold-muted group-hover:text-gold transition-colors">Learn more →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
