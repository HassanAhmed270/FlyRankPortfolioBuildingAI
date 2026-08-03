import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="bg-brand-bg border-t border-brand-ink/10 px-6 py-16">
      <div className="max-w-[700px] mx-auto">

        <p className="font-heading font-semibold text-sm tracking-wide uppercase text-brand-teal mb-6">
          Selected Work
        </p>

        <ProjectCard
          name="Wmart"
          imageSrc="/wmart.png"
          imageAlt="Wmart e-commerce site screenshot"
          summary="A real client, a real store, no payment gateway (yet) — and that's the point."
          problem="A relative sells watches. No catalog, no website — every sale started with a WhatsApp message and a photo. Stock tracking was in his head. When two people wanted the same watch at once, orders got mixed up."
          decisions="I built a real e-commerce site in MERN. Stock updates are atomic — MongoDB's findOneAndUpdate makes sure two people can't buy the last unit at the same time. Low-stock items get a quantity limit so the site never oversells. Unconfirmed orders expire automatically, so stock doesn't sit locked up. There's no payment gateway — the client doesn't have business registration yet, so it's Cash on Delivery or pickup only. I kept a separate Stripe test-mode demo live, so you can see the payment flow works without pretending it's connected to real money."
          outcome="The site is in real use for orders. Volume is modest, but it's real, not staged."
        />

        <ProjectCard
          name="Restaurant App"
          imageSrc="/restaurant.png"
          imageAlt="Restaurant ordering and reservation app screenshot"
          summary="A restaurant ordering + reservation system, built speculatively for places that don't have a website yet."
          problem="Small restaurants without a website still take orders over the phone and reservations by memory. No menu online, no way to see what's available, no record of who's reserved what."
          decisions="I built an ordering and reservation system in MERN. Orders go through Cash on Delivery or pickup, with a status flow so both the restaurant and customer know where an order stands. The reservation system needed a lock — if two people tried to book the same table and time slot at once, one had to fail cleanly. That took some extra problem-solving to get the timing right: a server-side 30-second lock that holds a slot while someone completes their booking, so it can't be double-booked."
          outcome="Deployed on Vercel and GitHub. One restaurant showed real interest — the deal didn't close, but the system works end to end."
        />

        <ProjectCard
          name="Billing & Inventory System"
          imageSrc="/billing.png"
          imageAlt="Billing and inventory system screenshot"
          summary="A billing and inventory system I built without a framework — no React, just JavaScript and the DOM."
          problem="Small shop owners track customer credit (udhar), supplier balances, and inventory in notebooks or memory. Nothing is backed up, and mistakes are easy to make."
          decisions="I built this without React — plain JavaScript, HTML, and DOM manipulation, on purpose, to prove I understand the fundamentals underneath the framework. It tracks inventory, customer credit balances, and supplier balances. Every transaction logs twice — once to a text file, once to MongoDB — so there's always a backup copy to cross-check against."
          outcome="I showed it to a friend who runs a shop. He was interested, but wants the UI improved before he'd actually use it day to day."
        />

      </div>
    </section>
  );
}
