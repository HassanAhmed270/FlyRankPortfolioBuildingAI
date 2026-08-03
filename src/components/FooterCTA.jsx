export default function FooterCTA() {
  return (
    <section className="bg-brand-bg border-t border-brand-ink/10 px-6 py-12 text-center">

      {/* CTA button — same style/behavior as Hero */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand-teal text-white font-heading font-semibold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        WhatsApp me from the Hire Me button.
      </a>

      {/* Copyright line — small, muted, below the button */}
      <p className="font-body text-sm text-brand-ink/60 mt-4">
        © 2026 Hassan Ahmed. All rights reserved.
      </p>

    </section>
  );
}
