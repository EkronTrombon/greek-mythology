import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-bg-primary flex items-center justify-center px-4 py-12">
      <div
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(201,168,76,0.2), transparent)",
        }}
      />

      <div className="relative w-full max-w-md">
        <div className="bg-bg-card border border-border p-8 sm:p-10 text-center">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

          <Link
            href="/"
            className="font-heading text-2xl font-bold text-gold tracking-[0.2em] hover:text-gold-light transition-colors"
          >
            MYTHICA
          </Link>

          <div className="h-px bg-gradient-to-r from-transparent via-border-gold to-transparent my-4" />

          <div className="text-4xl mb-4">🏺</div>
          <h1 className="font-heading text-xl font-bold text-gold mb-3">
            The Archive is Sealed
          </h1>
          <p className="font-body text-text-muted italic leading-relaxed mb-6">
            Registration to the Olympian Archives is currently by invitation
            only. Only those deemed worthy by the Fates may join the order of
            Keepers.
          </p>

          <div className="bg-bg-secondary border border-border px-6 py-4 mb-6">
            <p className="font-body text-text-faint text-sm italic">
              &ldquo;Not everyone is destined to walk among the gods.&rdquo;
            </p>
            <p className="font-heading text-xs tracking-[0.1em] uppercase text-gold-muted mt-2">
              — The Oracle
            </p>
          </div>

          <Link
            href="/auth/signin"
            className="inline-flex px-6 py-2.5 border border-gold text-gold font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-bg-primary transition-all"
          >
            Return to Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
