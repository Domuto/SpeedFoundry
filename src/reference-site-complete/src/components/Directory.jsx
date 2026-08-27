import Reveal from "./Reveal.jsx";
import { directory } from "../data/directory.js";

const CATEGORIES = ["All", "Eat", "Shop", "Play", "Stay", "Live", "Work"];

const CATEGORY_IMAGES = {
  Eat: "/images/eat.jpg",
  Shop: "/images/shop.jpg",
  Play: "/images/play.jpg",
  Stay: "/images/stay.jpg",
  Live: "/images/live.jpg",
  Work: "/images/work.jpg",
};

export default function Directory({ filter, setFilter }) {
  const items =
    filter === "All" ? directory : directory.filter((t) => t.category === filter);

  return (
    <section id="directory" className="scroll-mt-24 border-t border-bone/10 bg-charcoal/40">
      <div className="section-pad">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="label">N° 003 — The Directory</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
                Who's here.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-sand/50">
              Showing {items.length} of {directory.length}
            </p>
          </Reveal>
        </div>

        <div className="mb-14 flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`cursor-pointer border px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] transition-all duration-300 ${
                filter === c
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-bone/15 text-sand/70 hover:border-bone/40 hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80} className="h-full">
              <article className="group flex h-full flex-col border border-bone/10 bg-ink transition-colors duration-500 hover:border-gold/40">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={t.image || CATEGORY_IMAGES[t.category]}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="veil-card absolute inset-0 opacity-60" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
                    {t.category}
                    {t.tag ? ` — ${t.tag}` : ""}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-light text-bone">
                    {t.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sand/70">
                    {t.description}
                  </p>
                  {t.url && (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-sand/60 transition-colors duration-300 hover:text-gold"
                    >
                      Visit <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-sm text-sand/60">
            Nothing in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
