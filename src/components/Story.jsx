import Reveal from "./Reveal.jsx";

/**
 * N° 001 — The Story.
 * An editorial statement about the venue and a hairline stats row
 * (established / nights weekly / address).
 */
const STATS = [
  { value: "2017", label: "Year the team was founded" },
  { value: "GT3/4", label: "Our focus — GT3 & GT4 machinery" },
  { value: "10+", label: "Years of combined pro experience" },
];

export default function Story() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="px-6 pb-24 pt-14 md:px-12 md:pb-32 md:pt-20 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left rail: label + supporting image */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label">N° 001 — The Story</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 hidden overflow-hidden lg:block">
                <img
                  src="/images/racing/kp16.jpg"
                  alt="Kingpin Racing crew at work"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: statement + copy + stats */}
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-[1.15] text-bone md:text-5xl lg:text-6xl">
                A racing dynasty —{" "}
                <span className="text-gold">precise, relentless,</span>{" "}
                and unmistakably Georgia.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-sand/80 md:text-base">
                Based in Braselton, Georgia — right outside Road Atlanta —
                Kingpin Racing is a professional racing team rooted in a legacy
                of excellence. We are a tightly knit family unit dedicated to
                the art of high-speed performance, with a steadfast focus on
                GT3 &amp; GT4 cars.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-sand/60">
                From trackside support and personalized coaching to seamless
                transportation solutions, we've developed championship-caliber
                vehicles, trained elite drivers, and built lasting partnerships
                across the industry. Join us on the podium of success.
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

