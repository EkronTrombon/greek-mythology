import Link from "next/link";
import { database as mockDb } from "@/lib/database";

export const metadata = {
  title: "Myths — MYTHICA",
  description: "The great myths of ancient Greece — stories of creation, heroism, tragedy, and divine power.",
};

const categoryColors: Record<string, string> = {
  creation: "text-amber-400",
  heroic: "text-red-400",
  divine: "text-purple-400",
  tragedy: "text-blue-400",
  war: "text-orange-400",
  love: "text-pink-400",
};

export default function MythsPage() {
  const myths = mockDb.getAllMyths();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-gold-muted mb-3">Ancient Tales</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-3">The Great Myths</h1>
        <p className="font-body text-text-muted italic max-w-xl">Stories of creation, heroism, and divine will that shaped the ancient Greek understanding of the world.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {myths.map((myth) => (
          <Link key={myth.id} href={`/myths/${myth.id}`} className="group bg-bg-card border border-border hover:border-border-gold p-5 transition-all hover:bg-bg-elevated">
            <div className="flex items-center justify-between mb-2">
              <span className={`font-heading text-xs tracking-[0.1em] uppercase ${categoryColors[myth.category] ?? "text-gold-muted"}`}>{myth.category}</span>
            </div>
            <h2 className="font-heading text-lg font-bold text-gold group-hover:text-gold-light transition-colors mb-2">{myth.title}</h2>
            <p className="font-body text-text-muted text-sm leading-relaxed line-clamp-3 italic">&ldquo;{myth.summary}&rdquo;</p>
            <div className="mt-3 font-heading text-xs tracking-[0.15em] uppercase text-gold-muted group-hover:text-gold transition-colors">Read more →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
