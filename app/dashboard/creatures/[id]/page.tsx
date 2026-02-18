import { database } from "@/lib/db-api";
import { notFound } from "next/navigation";
import CreatureForm from "@/components/dashboard/forms/CreatureForm";
import DeleteButton from "@/components/dashboard/DeleteButton";
import { deleteCreature } from "@/lib/actions/creatures";
import Link from "next/link";

export default async function EditCreaturePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const creature = await database.getCreatureById(id);
  if (!creature) notFound();

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">{creature.name}</h1>
          <p className="font-body text-text-faint text-sm italic">{creature.type}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/creatures" className="font-heading text-xs tracking-[0.1em] uppercase text-text-muted hover:text-gold transition-colors">← Back</Link>
          <DeleteButton action={deleteCreature.bind(null, creature.id)} entityName={creature.name} />
        </div>
      </div>
      <CreatureForm creature={creature} />
    </div>
  );
}
