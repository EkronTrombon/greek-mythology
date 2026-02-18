"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  session: boolean;
}

export default function MobileMenu({ navLinks, session }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-text-muted hover:text-gold transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-bg-secondary border-b border-border z-50 py-4 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-heading text-sm tracking-[0.15em] uppercase text-text-muted hover:text-gold transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-1">
              {session ? (
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center px-4 py-2 border border-gold text-gold font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-bg-primary transition-all"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/auth/signin"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center px-4 py-2 bg-gold text-bg-primary font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-all"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
