import Link from "next/link";
import { database as mockDb } from "@/lib/database";
import { deleteCreature } from "@/lib/actions/creatures";
import DeleteButton from "@/components/dashboard/DeleteButton";

export default function DashboardCreaturesPage() {
  const allCreatures = mockDb.getAllCreatures();

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">Creatures</h1>
          <p className="font-body text-text-faint text-sm">{allCreatures.length} entries in the archive</p>
        </div>
        <Link href="/dashboard/creatures/new" className="px-4 py-2 bg-gold text-bg-primary font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-all">
          + Add Creature
        </Link>
      </div>

      <div className="border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-bg-secondary border-b border-border">
            <tr>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3">Name</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 hidden sm:table-cell">Type</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 hidden lg:table-cell">Abilities</th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {allCreatures.map((creature) => (
              <tr key={creature.id} className="hover:bg-bg-elevated transition-colors">
                <td className="px-4 py-3">
                  <span className="font-heading text-sm text-gold">{creature.name}</span>
                  <span className="block font-body text-xs text-text-faint sm:hidden">{creature.type}</span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className="font-body text-sm text-text-muted">{creature.type}</span>
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <span className="font-body text-xs text-text-faint">{creature.abilities.slice(0, 2).join(", ")}{creature.abilities.length > 2 && " ..."}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/dashboard/creatures/${creature.id}`} className="font-heading text-xs tracking-[0.1em] uppercase text-gold hover:text-gold-light transition-colors">Edit</Link>
                    <DeleteButton action={deleteCreature.bind(null, creature.id)} entityName={creature.name} />
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
