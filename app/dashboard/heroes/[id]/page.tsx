import { database as mockDb } from "@/lib/database";
import { notFound } from "next/navigation";
import HeroForm from "@/components/dashboard/forms/HeroForm";
import DeleteButton from "@/components/dashboard/DeleteButton";
import { deleteHero } from "@/lib/actions/heroes";
import Link from "next/link";

export default async function EditHeroPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const hero = mockDb.getHeroById(id);
  if (!hero) notFound();

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">{hero.name}</h1>
          <p className="font-body text-text-faint text-sm italic">{hero.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/heroes" className="font-heading text-xs tracking-[0.1em] uppercase text-text-muted hover:text-gold transition-colors">← Back</Link>
          <DeleteButton action={deleteHero.bind(null, hero.id)} entityName={hero.name} />
        </div>
      </div>
      <HeroForm hero={hero} />
    </div>
  );
}
