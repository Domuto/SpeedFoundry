import Reveal from "./Reveal.jsx";

/**
 * N° 001 — About.
 * An editorial statement about the shop and a hairline stats row.
 */
const STATS = [
  { value: "4", label: "Core categories — engine, exhaust, suspension, intakes" },
  { value: "GA", label: "Rooted in Peachtree Corners, Georgia" },
  { value: "Pro", label: "Real industry expertise behind every build" },
];

export default function Story() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="px-6 pb-24 pt-14 md:px-12 md:pb-32 md:pt-20 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left rail: label + supporting image */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label">N° 001 — About</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 hidden overflow-hidden lg:block">
                <img
                  src="/images/sf/engine.jpg"
                  alt="Performance engine components at The Speed Foundry"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: statement + copy + stats */}
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-[1.15] text-bone md:text-5xl lg:text-6xl">
                All of the right ingredients —{" "}
                <span className="text-gold">the right parts,</span>{" "}
                the right pricing, the right people.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-sand/80 md:text-base">
                The Speed Foundry is a performance parts shop in Peachtree
                Corners, Georgia, built for enthusiasts who want to do it
                right the first time. From bolt-on power to full-send builds,
                we help you spec the components that actually move the needle.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-sand/60">
                Outstanding service, exclusive pricing, and honest industry
                expertise — that's the whole recipe. Engine, exhaust,
                suspension, and intakes, curated so you can find everything in
                one place and get back on the road.
              </p>
            </Reveal>

            {/* Stats row */}
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

