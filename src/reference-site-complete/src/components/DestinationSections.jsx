import Reveal from "./Reveal.jsx";

const DESTINATIONS = [
  { n: "01", category: "Eat", title: "Eat", image: "/images/eat.jpg", blurb: "Chef-driven kitchens, patios, and late-night bites." },
  { n: "02", category: "Shop", title: "Shop", image: "/images/shop.jpg", blurb: "Boutiques, everyday retail, and neighborhood essentials." },
  { n: "03", category: "Play", title: "Play", image: "/images/play.jpg", blurb: "Rooftop energy, social gaming, and nights that run late." },
  { n: "04", category: "Stay", title: "Stay", image: "/images/stay.jpg", blurb: "A boutique hotel in the heart of the district." },
  { n: "05", category: "Live", title: "Live", image: "/images/live.jpg", blurb: "Modern residences above it all." },
  { n: "06", category: "Work", title: "Work", image: "/images/work.jpg", blurb: "Creative offices with West Midtown energy." },
];

export default function DestinationSections({ onExplore }) {
  return (
    <section id="destinations" className="section-pad scroll-mt-24">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal><p className="label">N° 002 — Explore the District</p></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">Six ways to spend a day.</h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="max-w-xs text-sm leading-relaxed text-sand/60">Morning to midnight, everything is a short walk apart. Choose a lane — or drift between all six.</p>
        </Reveal>
      </div>

      <div className="grid gap-px border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d, i) => (
          <Reveal key={d.title} delay={(i % 3) * 100} className="bg-ink">
            <button onClick={() => onExplore?.(d.category)} className="group block w-full cursor-pointer bg-ink text-left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={d.image} alt={d.title} className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                <div className="veil-card absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gold/80">{d.n} — {d.category}</p>
                  <h3 className="mt-3 font-display text-3xl font-light text-bone">{d.title}</h3>
                  <p className="mt-2 text-sm text-sand/70">{d.blurb}</p>
                  <p className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">Explore <span className="transition-transform duration-500 group-hover:translate-x-1">→</span></p>
                </div>
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
