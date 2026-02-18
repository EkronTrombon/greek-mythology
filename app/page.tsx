import Link from "next/link";
import { database } from "@/lib/db-api";

const categories = [
  {
    href: "/gods",
    label: "Gods",
    icon: "⚡",
    description:
      "The twelve Olympians and the divine forces that shaped the cosmos.",
    color: "from-yellow-900/20 to-transparent",
  },
  {
    href: "/heroes",
    label: "Heroes",
    icon: "⚔",
    description:
      "Mortals of legendary strength and cunning who defied fate itself.",
    color: "from-red-900/20 to-transparent",
  },
  {
    href: "/locations",
    label: "Locations",
    icon: "🏛",
    description:
      "Sacred mountains, hidden realms, and the cities where legend was born.",
    color: "from-blue-900/20 to-transparent",
  },
  {
    href: "/myths",
    label: "Myths",
    icon: "📜",
    description:
      "The great stories — creation, war, love, and the eternal struggle between gods and men.",
    color: "from-purple-900/20 to-transparent",
  },
  {
    href: "/creatures",
    label: "Creatures",
    icon: "🐉",
    description:
      "Monsters and beasts of impossible form that terrorized the ancient world.",
    color: "from-green-900/20 to-transparent",
  },
];

export default async function HomePage() {
  const [stats, heroicMyths] = await Promise.all([
    database.getStats(),
    database.getMythsByCategory("heroic"),
  ]);
  const featuredMyth = heroicMyths[0];

  const categoryCounts: Record<string, number> = {
    Gods: stats.totalGods,
    Heroes: stats.totalHeroes,
    Locations: stats.totalLocations,
    Myths: stats.totalMyths,
    Creatures: stats.totalCreatures,
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-primary" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(201,168,76,0.15), transparent)",
          }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <p className="font-heading text-xs tracking-[0.5em] uppercase text-gold-muted mb-6">
            Ancient Greece Awaits
          </p>

          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-gold mb-6 leading-none tracking-wide">
            THE OLYMPIAN
            <br />
            <span className="text-gold-light">ARCHIVES</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-text-muted italic max-w-2xl mx-auto mb-10 leading-relaxed">
            Delve into the sacred chronicles of gods and monsters, heroes and
            myths — from the age when Olympus ruled the heavens and fate was
            written in the stars.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gods"
              className="px-8 py-3 bg-gold text-bg-primary font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-all"
            >
              Enter the Pantheon
            </Link>
            <Link
              href="/myths"
              className="px-8 py-3 border border-gold text-gold font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold/10 transition-all"
            >
              Read the Myths
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 sm:grid-cols-5 divide-x divide-border">
            {Object.entries(categoryCounts).map(([name, count]) => (
              <div key={name} className="py-6 text-center">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-gold">
                  {count}
                </div>
                <div className="font-heading text-xs tracking-[0.15em] uppercase text-text-faint mt-1">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gold mb-3">
            Explore the Archive
          </h2>
          <p className="font-body text-text-muted italic">
            Five realms of myth await your discovery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(({ href, label, icon, description, color }) => (
            <Link
              key={href}
              href={href}
              className="group relative bg-bg-card border border-border hover:border-border-gold p-6 transition-all hover:bg-bg-elevated"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <div className="text-3xl mb-4">{icon}</div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-lg font-bold text-gold group-hover:text-gold-light transition-colors">
                    {label}
                  </h3>
                  <span className="font-heading text-xs text-text-faint">
                    {categoryCounts[label]}
                  </span>
                </div>
                <p className="font-body text-text-muted text-sm leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 font-heading text-xs tracking-[0.15em] uppercase text-gold-muted group-hover:text-gold transition-colors">
                  Explore →
                </div>
              </div>
            </Link>
          ))}

          {/* Total card */}
          <div className="bg-bg-secondary border border-border-gold p-6 flex flex-col justify-center items-center text-center">
            <div className="font-heading text-4xl font-black text-gold mb-2">
              {stats.totalEntities}
            </div>
            <div className="font-heading text-xs tracking-[0.2em] uppercase text-text-muted">
              Entries in the Archive
            </div>
          </div>
        </div>
      </section>

      {/* Featured myth */}
      {featuredMyth && (
        <section className="border-t border-border bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <p className="font-heading text-xs tracking-[0.4em] uppercase text-gold-muted mb-4 text-center">
              Featured Myth
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gold text-center mb-10">
              {featuredMyth.title}
            </h2>

            <div className="max-w-3xl mx-auto bg-bg-card border border-border p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="font-heading text-xs tracking-[0.15em] uppercase px-3 py-1 border border-border-gold text-gold-muted">
                  {featuredMyth.category}
                </span>
                {featuredMyth.characters.slice(0, 3).map((c: string) => (
                  <span
                    key={c}
                    className="font-body text-xs px-3 py-1 bg-bg-secondary text-text-faint"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="font-body text-text-muted leading-relaxed mb-6 italic text-lg">
                &ldquo;{featuredMyth.summary}&rdquo;
              </p>

              {featuredMyth.moralLesson && (
                <p className="font-body text-text-faint text-sm border-l-2 border-gold pl-4">
                  <span className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted mr-2">
                    Moral:
                  </span>
                  {featuredMyth.moralLesson}
                </p>
              )}

              <Link
                href="/myths"
                className="inline-flex mt-6 font-heading text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors"
              >
                Read all myths →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-heading text-3xl font-bold text-gold mb-4">
          Become the Keeper of the Archive
        </h2>
        <p className="font-body text-text-muted italic mb-8 max-w-lg mx-auto">
          Sign in to access the dashboard and manage the mythology database.
        </p>
        <Link
          href="/auth/signin"
          className="inline-flex px-8 py-3 bg-gold text-bg-primary font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-all"
        >
          Sign In to Dashboard
        </Link>
      </section>
    </main>
  );
}
