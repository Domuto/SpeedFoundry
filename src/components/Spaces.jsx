import Reveal from "./Reveal.jsx";

/**
 * N° 002 — Categories.
 * Large cards in a hairline grid for the four part categories.
 *
 * Edit titles, blurbs, and images in the CATEGORIES array below.
 */
const CATEGORIES = [
  {
    n: "01",
    title: "Engine",
    image: "/images/sf/engine.jpg",
    blurb: "Power, cooling, and internals — the hardware that makes real numbers.",
  },
  {
    n: "02",
    title: "Exhaust",
    image: "/images/sf/exhaust.jpg",
    blurb: "Cat-backs, downpipes, and full systems for flow, sound, and gains.",
  },
  {
    n: "03",
    title: "Suspension",
    image: "/images/sf/suspension.jpg",
    blurb: "Coilovers, arms, and bushings to plant the car and sharpen response.",
  },
  {
    n: "04",
    title: "Intakes",
    image: "/images/sf/intakes.jpg",
    blurb: "Cold-air and short-ram intakes to feed the build more air.",
  },
];

export default function Spaces() {
  return (
    <section id="categories" className="section-pad scroll-mt-24">
      {/* Section header */}
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="label">N° 002 — Categories</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
              Find every ingredient.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="max-w-xs text-sm leading-relaxed text-sand/60">
            Curated performance parts across four categories — engine,
            exhaust, suspension, and intakes.
          </p>
        </Reveal>
      </div>

      {/* Hairline grid of cards */}
      <div className="grid gap-px border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 100} className="bg-ink">
            <div className="group block w-full bg-ink text-left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="veil-card absolute inset-0" />

                {/* Card copy */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
                    {s.n}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-light text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-sand/70">{s.blurb}</p>
                </div>

                {/* Blaze hairline that draws in on hover */}
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

