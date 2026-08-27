import Reveal from "./Reveal.jsx";

/**
 * N° 004 — Private & Corporate Events.
 * Alternating editorial spotlight rows covering VIP tables and
 * private/corporate bookings, plus a sample-menu photo grid.
 * Edit the SPOTLIGHTS array to change copy, images, or links.
 */
const SPOTLIGHTS = [
  {
    n: "001",
    name: "ARC2 Testing with Marcus Grönholm",
    category: "Rally Program",
    image: "/images/jrd/arc2-action.jpg",
    copy: "JRD Motorsport completed a grueling two-day test of the ARC2 rally car with two-time FIA World Rally Champion Marcus Grönholm behind the wheel — a major milestone in what we believe is the future of accessible, top-tier American rally competition.",
    link: "mailto:info@jrdmotorsport.com",
    linkLabel: "Ask About ARC2",
  },
  {
    n: "002",
    name: "Racecar Consultation & Management",
    category: "Builds & Ownership",
    image: "/images/jrd/circuit-56d.jpg",
    copy: "Discover the epitome of motorsport engineering and racecar build consultation. From sourcing your platform to setup, maintenance, and full program management — pricing is quoted individually.",
    link: "#contact",
    linkLabel: "Inquire About Your Build",
    scroll: true,
  },
  {
    n: "003",
    name: "Partner Race Products",
    category: "Performance Parts",
    image: "/images/jrd/circuit-56e.jpg",
    copy: "Performance platforms, precision equipment, and expert engineering services — designed to set the standard. Shop parts from our technology partners or ask us to spec a build.",
    link: "#contact",
    linkLabel: "Shop Partner Products",
    scroll: true,
  },
];

const SAMPLE_MENU = [
  { src: "/images/jrd/rally-vintage.jpg", alt: "JRD Motorsport rally car" },
  { src: "/images/jrd/rally-silver.jpg", alt: "Rally weekend action" },
  { src: "/images/jrd/rally-dust-a.jpg", alt: "Rally car at speed" },
  { src: "/images/jrd/rally-tarmac.jpg", alt: "On the circuit" },
  { src: "/images/jrd/rally-red.jpg", alt: "Special stage" },
  { src: "/images/jrd/rally-dust-b.jpg", alt: "Trackside moments" },
];

export default function PrivateEvents() {
  const scrollTo = (e, selector) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="featured" className="scroll-mt-24">
      <div className="section-pad">
        {/* Section header */}
        <div className="mb-4">
          <Reveal>
            <p className="label">N° 004 — Featured Programs</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
              Own your stage.
            </h2>
          </Reveal>
        </div>

        {/* Spotlight rows */}
        {SPOTLIGHTS.map((f, i) => (
          <div
            key={f.name}
            className={`grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-16 ${
              i > 0 ? "border-t border-bone/10" : ""
            }`}
          >
            {/* Image (alternates sides on desktop) */}
            <Reveal className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="group overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 sm:aspect-[16/11]"
                />
              </div>
            </Reveal>

            {/* Copy */}
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <Reveal delay={120}>
                <p className="label">N° {f.n}</p>
              </Reveal>
              <Reveal delay={200}>
                <h3 className="mt-5 font-display text-4xl font-light text-bone md:text-5xl">
                  {f.name}
                </h3>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold/80">
                  {f.category}
                </p>
              </Reveal>
              <Reveal delay={320}>
                <p className="mt-6 text-sm leading-relaxed text-sand/75 md:text-base">
                  {f.copy}
                </p>
              </Reveal>
              <Reveal delay={400}>
                <a
                  href={f.link}
                  {...(f.scroll
                    ? { onClick: (e) => scrollTo(e, f.link) }
                    : { target: "_blank", rel: "noreferrer" })}
                  className="group mt-8 inline-flex items-center gap-3 border-b border-bone/20 pb-1 text-[11px] uppercase tracking-[0.3em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  {f.linkLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        ))}

        {/* On track */}
        <div className="border-t border-bone/10 pt-16">
          <Reveal>
            <p className="label">On the Stage</p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mt-5 font-display text-3xl font-light text-bone md:text-4xl">
              Fractions of a second, captured.
            </h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
            {SAMPLE_MENU.map((item, i) => (
              <Reveal key={item.src} delay={(i % 6) * 60}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-[1000ms] hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

