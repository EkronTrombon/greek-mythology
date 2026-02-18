"use client";

import { signIn } from "next-auth/react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SignInForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials. The gods do not recognize you.");
      setLoading(false);
    } else {
      window.location.href = callbackUrl;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="username"
          className="block font-heading text-xs tracking-[0.15em] uppercase text-text-muted mb-2"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoComplete="username"
          className="w-full bg-bg-secondary border border-border text-text-primary px-4 py-3 font-body focus:border-gold focus:outline-none transition-colors placeholder:text-text-faint"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block font-heading text-xs tracking-[0.15em] uppercase text-text-muted mb-2"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full bg-bg-secondary border border-border text-text-primary px-4 py-3 font-body focus:border-gold focus:outline-none transition-colors placeholder:text-text-faint"
          placeholder="Enter your password"
        />
      </div>

      {error && (
        <p className="font-body text-sm text-danger-light border border-danger/30 bg-danger/10 px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-gold text-bg-primary font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {loading ? "Consulting the Oracle..." : "Enter the Pantheon"}
      </button>
    </form>
  );
}

export default function SignInPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-bg-primary flex items-center justify-center px-4 py-12">
      {/* Background radial glow */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(201,168,76,0.2), transparent)",
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-bg-card border border-border p-8 sm:p-10">
          {/* Top gold line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

          {/* Header */}
          <div className="text-center mb-8">
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-gold tracking-[0.2em] hover:text-gold-light transition-colors"
            >
              MYTHICA
            </Link>
            <div className="h-px bg-gradient-to-r from-transparent via-border-gold to-transparent my-4" />
            <h1 className="font-heading text-xl font-bold text-gold mb-2">
              Enter the Archive
            </h1>
            <p className="font-body text-text-faint text-sm italic">
              Only those chosen by the gods may pass
            </p>
          </div>

          <Suspense fallback={<div className="text-text-muted text-center py-4 font-body">Loading...</div>}>
            <SignInForm />
          </Suspense>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="font-body text-text-faint text-xs italic">
              &ldquo;Know thyself.&rdquo; — Oracle of Delphi
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
