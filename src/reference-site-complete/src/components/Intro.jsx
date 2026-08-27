import Reveal from "./Reveal.jsx";

const MARQUEE_ITEMS = ["Dine", "Shop", "Play", "Stay", "Live", "Work", "Gather"];

const STATS = [
  { value: "808", label: "Parking spaces on site" },
  { value: "06", label: "Levels of covered parking" },
  { value: "1115", label: "Howell Mill Road NW" },
];

function Strip({ hidden = false }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 font-display text-2xl uppercase tracking-wide text-bone/80 md:px-10 md:text-4xl">
            {item}
          </span>
          <span className="text-2xl text-gold md:text-3xl">/</span>
        </span>
      ))}
    </div>
  );
}

export default function Intro() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="marquee overflow-hidden border-b border-bone/10 py-5">
        <div className="marquee-track flex w-max">
          <Strip />
          <Strip hidden />
        </div>
      </div>

      <div className="section-pad">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label">N° 001 — The Destination</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 hidden overflow-hidden lg:block">
                <img
                  src="/images/intro.jpg"
                  alt="Inside The Interlock district"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-[1.15] text-bone md:text-5xl lg:text-6xl">
                A West Midtown gathering place —{" "}
                <span className="text-gold">refined, social,</span> and
                unmistakably Atlanta.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-sand/80 md:text-base">
                The Interlock brings together chef-driven dining, boutique retail,
                rooftop entertainment, a boutique hotel, modern residences, and
                creative offices along Howell Mill Road. It's where the Westside
                meets — for first dates and closing dinners, morning coffee and
                late-night rounds — a district built for the way Atlanta actually
                lives.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-sand/60">
                The name nods to a historic railroad interlocking nearby, where
                four lines once converged — a fitting emblem for a place where
                culture, commerce, and community intersect.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-10 border-t border-bone/10 pt-10 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 120}>
                  <p className="font-display text-4xl font-light text-gold md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-sand/60">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
