import Link from "next/link";
import { database as mockDb } from "@/lib/database";
import { deleteHero } from "@/lib/actions/heroes";
import DeleteButton from "@/components/dashboard/DeleteButton";

export default function DashboardHeroesPage() {
  const allHeroes = mockDb.getAllHeroes();

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">Heroes</h1>
          <p className="font-body text-text-faint text-sm">
            {allHeroes.length} entries in the archive
          </p>
        </div>
        <Link
          href="/dashboard/heroes/new"
          className="px-4 py-2 bg-gold text-bg-primary font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-all"
        >
          + Add Hero
        </Link>
      </div>

      <div className="border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-bg-secondary border-b border-border">
            <tr>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3">Name</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 hidden sm:table-cell">Title</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 hidden lg:table-cell">Parentage</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {allHeroes.map((hero) => (
              <tr key={hero.id} className="hover:bg-bg-elevated transition-colors">
                <td className="px-4 py-3">
                  <span className="font-heading text-sm text-gold">{hero.name}</span>
                  {hero.parentage.divine && (
                    <span className="ml-2 font-heading text-xs text-gold-muted">Demigod</span>
                  )}
                  <span className="block font-body text-xs text-text-faint sm:hidden">{hero.title}</span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className="font-body text-sm text-text-muted">{hero.title}</span>
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <span className="font-body text-xs text-text-faint">
                    {[hero.parentage.father, hero.parentage.mother].filter(Boolean).join(" & ") || "Unknown"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/dashboard/heroes/${hero.id}`} className="font-heading text-xs tracking-[0.1em] uppercase text-gold hover:text-gold-light transition-colors">Edit</Link>
                    <DeleteButton action={deleteHero.bind(null, hero.id)} entityName={hero.name} />
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
