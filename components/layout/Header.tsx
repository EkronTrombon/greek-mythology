import Link from "next/link";
import { auth } from "@/auth";
import MobileMenu from "./MobileMenu";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/gods", label: "Gods" },
  { href: "/heroes", label: "Heroes" },
  { href: "/locations", label: "Locations" },
  { href: "/myths", label: "Myths" },
  { href: "/creatures", label: "Creatures" },
];

export default async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 bg-bg-secondary border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity shrink-0"
          aria-label="Mythica — Home"
        >
          <Logo iconSize={28} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-heading text-xs tracking-[0.15em] uppercase text-text-muted hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {session ? (
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center px-4 py-1.5 border border-gold text-gold font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-bg-primary transition-all"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/auth/signin"
              className="hidden sm:inline-flex items-center px-4 py-1.5 bg-gold text-bg-primary font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-all"
            >
              Sign In
            </Link>
          )}

          {/* Mobile menu */}
          <MobileMenu navLinks={navLinks} session={!!session} />
        </div>
      </nav>
    </header>
  );
}
