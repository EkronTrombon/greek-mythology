import { database } from "@/lib/db-api";
import { notFound } from "next/navigation";
import MythForm from "@/components/dashboard/forms/MythForm";
import DeleteButton from "@/components/dashboard/DeleteButton";
import { deleteMyth } from "@/lib/actions/myths";
import Link from "next/link";

export default async function EditMythPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const myth = await database.getMythById(id);
  if (!myth) notFound();

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">{myth.title}</h1>
          <p className="font-body text-text-faint text-sm italic capitalize">{myth.category}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/myths" className="font-heading text-xs tracking-[0.1em] uppercase text-text-muted hover:text-gold transition-colors">← Back</Link>
          <DeleteButton action={deleteMyth.bind(null, myth.id)} entityName={myth.title} />
        </div>
      </div>
      <MythForm myth={myth} />
    </div>
  );
}
