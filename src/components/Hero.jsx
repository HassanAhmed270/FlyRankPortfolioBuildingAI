export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-brand-bg px-6 md:px-16">
      <div className="max-w-3xl mx-auto">

        {/* Small accent line above the headline — a quiet signature touch */}
        <div className="w-16 h-1 bg-brand-teal mb-6 rounded-full"></div>

        {/* Headline — largest, boldest text */}
        <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight text-brand-ink mb-6">
          Full-stack MERN developer. Nothing here is a mockup. Every project
          is built, functional, and explained.
        </h1>

        {/* Subheading — prominent but smaller than the headline */}
        <p className="font-heading font-semibold text-xl md:text-2xl text-brand-indigo mb-4">
          I build full-stack apps with MERN, for small businesses that need
          something built around how they actually work.
        </p>

        {/* Supporting line — smaller, quieter, body font */}
        <p className="font-body text-base md:text-lg text-brand-ink/70 mb-10 max-w-xl">
          I share working projects, clean code, and the decisions behind what
          I build so you can judge my work for yourself.
        </p>

        {/* CTA button — teal accent, visually distinct */}
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
