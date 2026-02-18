import Link from "next/link";

const footerLinks = {
  Mythology: [
    { href: "/gods", label: "Gods" },
    { href: "/heroes", label: "Heroes" },
    { href: "/creatures", label: "Creatures" },
    { href: "/myths", label: "Myths" },
    { href: "/locations", label: "Locations" },
  ],
  "The Archive": [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/auth/signin", label: "Sign In" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border mt-auto">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold text-gold tracking-[0.2em] hover:text-gold-light transition-colors"
            >
              MYTHICA
            </Link>
            <p className="mt-3 font-body text-text-faint text-sm leading-relaxed italic">
              Chronicles of the ancient world — gods, heroes, and the myths
              that shaped civilization.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-xs tracking-[0.2em] uppercase text-gold-muted mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-body text-text-faint text-sm hover:text-gold transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-text-faint text-xs">
            &copy; {new Date().getFullYear()} MYTHICA. All myths reserved.
          </p>
          <p className="font-heading text-xs tracking-[0.15em] uppercase text-text-faint">
            The Olympian Archives
          </p>
        </div>
      </div>
    </footer>
  );
}
