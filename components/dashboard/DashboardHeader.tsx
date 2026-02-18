"use client";

import { usePathname } from "next/navigation";
import type { Session } from "next-auth";

interface DashboardHeaderProps {
  session: Session;
}

const pathLabels: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/gods": "Gods",
  "/dashboard/gods/new": "New God",
  "/dashboard/heroes": "Heroes",
  "/dashboard/heroes/new": "New Hero",
  "/dashboard/locations": "Locations",
  "/dashboard/locations/new": "New Location",
  "/dashboard/myths": "Myths",
  "/dashboard/myths/new": "New Myth",
  "/dashboard/creatures": "Creatures",
  "/dashboard/creatures/new": "New Creature",
};

function getPageTitle(pathname: string): string {
  if (pathLabels[pathname]) return pathLabels[pathname];
  // Check for [id] routes like /dashboard/gods/zeus
  const parts = pathname.split("/");
  if (parts.length === 4) {
    const category = parts[2];
    return `Edit ${category.slice(0, -1).charAt(0).toUpperCase() + category.slice(1, -1)}`;
  }
  return "Dashboard";
}

export default function DashboardHeader({ session }: DashboardHeaderProps) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="h-14 bg-bg-secondary border-b border-border flex items-center justify-between px-6 shrink-0">
      <h2 className="font-heading text-sm tracking-[0.15em] uppercase text-gold">
        {pageTitle}
      </h2>
      <div className="flex items-center gap-3">
        <span className="font-body text-text-faint text-sm">
          {session.user?.name ?? session.user?.email}
        </span>
        <div className="w-7 h-7 rounded-full bg-gold/20 border border-border-gold flex items-center justify-center">
          <span className="font-heading text-xs text-gold">
            {(session.user?.name ?? "A")[0].toUpperCase()}
          </span>
        </div>
      </div>
    </header>
  );
}
