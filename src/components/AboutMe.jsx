export default function AboutMe() {
  return (
    <section className="bg-brand-bg border-t border-brand-ink/10 px-6 py-16">
      <div className="max-w-[650px] mx-auto">

        {/* Trust-line — largest, boldest text in this section */}
        <h2 className="font-heading font-bold text-2xl md:text-3xl leading-snug text-brand-ink mb-4">
          I'm not going to tell you I'm a great developer. I'm going to show
          you three real projects and let you decide.
        </h2>

        {/* Certification line — smaller, status-style */}
        <p className="font-body text-base text-brand-indigo mb-6">
          Currently pursuing a certification in Agentic AI with MERN Stack.
        </p>

        {/* Font rationale — small, footnote-style */}
        <p className="font-body text-sm text-brand-ink/60 mb-8">
          This page uses Atkinson Hyperlegible for body text — chosen for
          legibility, not looks.
        </p>

        {/* CTA button — same style/behavior as Hero */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-teal text-white font-heading font-semibold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          WhatsApp me from the Hire Me button.
        </a>

      </div>
    </section>
  );
}
