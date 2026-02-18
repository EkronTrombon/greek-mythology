import Link from "next/link";
import { database } from "@/lib/db-api";

export const metadata = {
  title: "Gods — MYTHICA",
  description: "Explore the twelve Olympian gods and divine beings of ancient Greece.",
};

export default async function GodsPage() {
  const gods = await database.getAllGods();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-gold-muted mb-3">The Pantheon</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-3">Gods of Olympus</h1>
        <p className="font-body text-text-muted italic max-w-xl">
          The immortal deities who shaped the cosmos, ruled from Mount Olympus, and governed the fate of mortals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gods.map((god) => (
          <Link
            key={god.id}
            href={`/gods/${god.id}`}
            className="group bg-bg-card border border-border hover:border-border-gold p-5 transition-all hover:bg-bg-elevated"
          >
            <h2 className="font-heading text-xl font-bold text-gold group-hover:text-gold-light transition-colors mb-1">
              {god.name}
            </h2>
            <p className="font-body text-xs text-text-faint mb-3 italic">{god.title}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {god.domain.slice(0, 3).map((d) => (
                <span key={d} className="font-heading text-xs tracking-[0.05em] px-2 py-0.5 bg-bg-secondary border border-border text-text-faint capitalize">
                  {d}
                </span>
              ))}
            </div>
            <p className="font-body text-text-muted text-sm leading-relaxed line-clamp-3">{god.description}</p>
            <div className="mt-3 font-heading text-xs tracking-[0.15em] uppercase text-gold-muted group-hover:text-gold transition-colors">
              Learn more →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
