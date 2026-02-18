import Link from "next/link";
import { database } from "@/lib/db-api";
import { deleteGod } from "@/lib/actions/gods";
import DeleteButton from "@/components/dashboard/DeleteButton";

export default async function DashboardGodsPage() {
  // Use sync mock data for display (real DB data would come from lib/db-api.ts)
  const allGods = await database.getAllGods();

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gold mb-1">Gods</h1>
          <p className="font-body text-text-faint text-sm">
            {allGods.length} entries in the archive
          </p>
        </div>
        <Link
          href="/dashboard/gods/new"
          className="px-4 py-2 bg-gold text-bg-primary font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-all"
        >
          + Add God
        </Link>
      </div>

      {/* Table */}
      <div className="border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-bg-secondary border-b border-border">
            <tr>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3">
                Name
              </th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 hidden sm:table-cell">
                Title
              </th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 hidden lg:table-cell">
                Domains
              </th>
              <th className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted px-4 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {allGods.map((god) => (
              <tr
                key={god.id}
                className="hover:bg-bg-elevated transition-colors"
              >
                <td className="px-4 py-3">
                  <span className="font-heading text-sm text-gold">
                    {god.name}
                  </span>
                  <span className="block font-body text-xs text-text-faint sm:hidden">
                    {god.title}
                  </span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className="font-body text-sm text-text-muted">
                    {god.title}
                  </span>
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <span className="font-body text-xs text-text-faint">
                    {god.domain.slice(0, 3).join(", ")}
                    {god.domain.length > 3 && " ..."}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/dashboard/gods/${god.id}`}
                      className="font-heading text-xs tracking-[0.1em] uppercase text-gold hover:text-gold-light transition-colors"
                    >
                      Edit
                    </Link>
                    <DeleteButton
                      action={deleteGod.bind(null, god.id)}
                      entityName={god.name}
                    />
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
