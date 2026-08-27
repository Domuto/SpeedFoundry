import Reveal from "./Reveal.jsx";

/**
 * N° 002 — Explore the Venue.
 * Large cards in a hairline grid showcasing the venue's rooms.
 * Each card scrolls to the most relevant section on click.
 *
 * Edit titles, blurbs, and images in the SPACES array below.
 */
const SPACES = [
  {
    n: "01",
    title: "The Race Team",
    image: "/images/racing/kp13.jpg",
    blurb: "A winning program competing in WRL and IMSA Michelin Pilot Challenge — built on GT3 & GT4 cars.",
    target: "#events",
  },
  {
    n: "02",
    title: "Driver Coaching",
    image: "/images/racing/kp05.jpg",
    blurb: "Personalized mentorship, sim training, and real-world track coaching to make you your quickest self.",
    target: "#events",
  },
  {
    n: "03",
    title: "The Garage",
    image: "/images/racing/kp15.jpg",
    blurb: "Racecar builds, setup, diagnostics, and engineering consultation — championship-caliber preparation.",
    target: "#events",
  },
  {
    n: "04",
    title: "Race Experiences",
    image: "/images/racing/kp11.jpg",
    blurb: "VIP hospitality at race weekends, team access, and exclusive live racing experiences.",
    target: "#featured",
  },
];

export default function Spaces() {
  const scrollTo = (selector) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="spaces" className="section-pad scroll-mt-24">
      {/* Section header */}
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="label">N° 002 — Explore the Team</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
              Built for the podium.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="max-w-xs text-sm leading-relaxed text-sand/60">
            From the pit box to the driver's seat, every part of Kingpin is
            built to find speed — and keep it.
          </p>
        </Reveal>
      </div>

      {/* Hairline grid of cards */}
      <div className="grid gap-px border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
        {SPACES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 100} className="bg-ink">
            <button
              onClick={() => scrollTo(s.target)}
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
                    Explore
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>

                {/* Gold hairline that draws in on hover */}
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

