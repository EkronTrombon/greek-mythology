import { database as mockDb } from "@/lib/database";
import { notFound } from "next/navigation";
import GodForm from "@/components/dashboard/forms/GodForm";
import DeleteButton from "@/components/dashboard/DeleteButton";
import { deleteGod } from "@/lib/actions/gods";
import Link from "next/link";

export default async function EditGodPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const god = mockDb.getGodById(id);
  if (!god) notFound();

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">
            {god.name}
          </h1>
          <p className="font-body text-text-faint text-sm italic">{god.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/gods"
            className="font-heading text-xs tracking-[0.1em] uppercase text-text-muted hover:text-gold transition-colors"
          >
            ← Back
          </Link>
          <DeleteButton
            action={deleteGod.bind(null, god.id)}
            entityName={god.name}
          />
        </div>
      </div>

      <GodForm god={god} />
    </div>
  );
}
