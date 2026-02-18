"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: "◈", exact: true },
  { href: "/dashboard/gods", label: "Gods", icon: "⚡", exact: false },
  { href: "/dashboard/heroes", label: "Heroes", icon: "⚔", exact: false },
  { href: "/dashboard/locations", label: "Locations", icon: "🏛", exact: false },
  { href: "/dashboard/myths", label: "Myths", icon: "📜", exact: false },
  { href: "/dashboard/creatures", label: "Creatures", icon: "🐉", exact: false },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  function isActive(href: string, exact: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <aside className="w-56 shrink-0 bg-bg-secondary border-r border-border min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-border">
        <Link
          href="/"
          className="font-heading text-lg font-bold text-gold tracking-[0.2em] hover:text-gold-light transition-colors"
        >
          MYTHICA
        </Link>
        <p className="font-heading text-xs tracking-[0.1em] uppercase text-text-faint mt-0.5">
          Dashboard
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {sidebarLinks.map(({ href, label, icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 transition-all font-heading text-xs tracking-[0.1em] uppercase ${
                active
                  ? "bg-gold/10 text-gold border-l-2 border-gold"
                  : "text-text-muted hover:text-gold hover:bg-bg-elevated border-l-2 border-transparent"
              }`}
            >
              <span className="text-base">{icon}</span>
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-3 py-4 border-t border-border space-y-0.5">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 text-text-faint hover:text-gold hover:bg-bg-elevated transition-all font-heading text-xs tracking-[0.1em] uppercase border-l-2 border-transparent"
        >
          <span className="text-base">↩</span>
          View Site
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-text-faint hover:text-danger-light hover:bg-bg-elevated transition-all font-heading text-xs tracking-[0.1em] uppercase border-l-2 border-transparent"
        >
          <span className="text-base">⏻</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
