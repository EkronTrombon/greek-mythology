import Link from "next/link";
import { database } from "@/lib/db-api";

const categoryConfig = [
  {
    key: "totalGods",
    label: "Gods",
    href: "/dashboard/gods",
    icon: "⚡",
    description: "Olympian deities and divine beings",
  },
  {
    key: "totalHeroes",
    label: "Heroes",
    href: "/dashboard/heroes",
    icon: "⚔",
    description: "Legendary mortals and demigods",
  },
  {
    key: "totalLocations",
    label: "Locations",
    href: "/dashboard/locations",
    icon: "🏛",
    description: "Sacred places and mythical realms",
  },
  {
    key: "totalMyths",
    label: "Myths",
    href: "/dashboard/myths",
    icon: "📜",
    description: "Epic stories and ancient tales",
  },
  {
    key: "totalCreatures",
    label: "Creatures",
    href: "/dashboard/creatures",
    icon: "🐉",
    description: "Monsters, beasts, and mythical beings",
  },
] as const;

export default async function DashboardPage() {
  const stats = await database.getStats();

  return (
    <div className="max-w-5xl">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-gold mb-1">
          Archive Overview
        </h1>
        <p className="font-body text-text-muted italic">
          The complete state of the Olympian Archives
        </p>
      </div>

      {/* Total banner */}
      <div className="bg-bg-card border border-border-gold p-6 mb-6 flex items-center justify-between">
        <div>
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-text-faint mb-1">
            Total Entries
          </p>
          <p className="font-heading text-5xl font-black text-gold">
            {stats.totalEntities}
          </p>
        </div>
        <div className="text-right">
          <p className="font-body text-text-faint text-sm italic">
            Across all categories of myth
          </p>
        </div>
      </div>

      {/* Category stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categoryConfig.map(({ key, label, href, icon, description }) => (
          <Link
            key={key}
            href={href}
            className="group bg-bg-card border border-border hover:border-border-gold p-5 transition-all hover:bg-bg-elevated"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{icon}</span>
              <span className="font-heading text-3xl font-bold text-gold">
                {stats[key]}
              </span>
            </div>
            <h3 className="font-heading text-sm tracking-[0.1em] uppercase text-gold group-hover:text-gold-light transition-colors mb-1">
              {label}
            </h3>
            <p className="font-body text-text-faint text-xs">{description}</p>
            <div className="mt-3 font-heading text-xs tracking-[0.1em] uppercase text-text-faint group-hover:text-gold transition-colors">
              Manage →
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="border-t border-border pt-6">
        <h2 className="font-heading text-sm tracking-[0.2em] uppercase text-text-muted mb-4">
          Quick Add
        </h2>
        <div className="flex flex-wrap gap-3">
          {categoryConfig.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={`${href}/new`}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-muted hover:border-gold hover:text-gold transition-all font-heading text-xs tracking-[0.1em] uppercase"
            >
              <span>{icon}</span>
              New {label.slice(0, -1)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
