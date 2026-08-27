import Reveal from "./Reveal.jsx";
import { shopPath } from "../data/shop.js";

/**
 * N° 002 — Shop by Category.
 * Large cards in a hairline grid for the four part categories.
 * Each card opens the matching collection on thespeedfoundry.com.
 *
 * Edit titles, blurbs, images, and links in the CATEGORIES array below.
 */
const CATEGORIES = [
  {
    n: "01",
    title: "Engine",
    image: "/images/sf/engine.jpg",
    blurb: "Power, cooling, and internals — the hardware that makes real numbers.",
    href: shopPath("/collections/engine"),
  },
  {
    n: "02",
    title: "Exhaust",
    image: "/images/sf/exhaust.jpg",
    blurb: "Cat-backs, downpipes, and full systems for flow, sound, and gains.",
    href: shopPath("/collections/exhaust"),
  },
  {
    n: "03",
    title: "Suspension",
    image: "/images/sf/suspension.jpg",
    blurb: "Coilovers, arms, and bushings to plant the car and sharpen response.",
    href: shopPath("/collections/suspension-1"),
  },
  {
    n: "04",
    title: "Intakes",
    image: "/images/sf/intakes.jpg",
    blurb: "Cold-air and short-ram intakes to feed the build more air.",
    href: shopPath("/collections/intakes"),
  },
];

export default function Spaces() {
  return (
    <section id="categories" className="section-pad scroll-mt-24">
      {/* Section header */}
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="label">N° 002 — Shop by Category</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
              Find every ingredient.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="max-w-xs text-sm leading-relaxed text-sand/60">
            Curated performance parts across four categories — pick your lane
            and browse the full collection.
          </p>
        </Reveal>
      </div>

      {/* Hairline grid of cards */}
      <div className="grid gap-px border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 100} className="bg-ink">
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group block w-full cursor-pointer bg-ink text-left"
            >
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
                  <p className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Shop {s.title}
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>

                {/* Blaze hairline that draws in on hover */}
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

