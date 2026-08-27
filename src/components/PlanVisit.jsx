import Reveal from "./Reveal.jsx";

/**
 * N° 006 — Plan Your Visit.
 * Concierge-style section: statement + action buttons on the left,
 * hairline detail rows (address / parking / reservations / contact)
 * on the right, and a full-width arrival image below.
 */
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Road+Atlanta,+Braselton,+GA";
const PARKING_URL =
  "https://www.google.com/maps/search/?api=1&query=Road+Atlanta+Paddock+Parking";

const DETAILS = [
  {
    k: "Location",
    lines: ["Road Atlanta", "Braselton, GA — just north of Atlanta"],
  },
  {
    k: "Race Weekends",
    lines: ["Find us in the paddock at WRL and IMSA Michelin Pilot Challenge events.", "Stop by the Kingpin trailer and say hello."],
  },
  {
    k: "Bookings",
    lines: ["Call (540) 771-0135 for coaching & trackside support.", "Consultations and experiences are quoted individually."],
  },
  {
    k: "Contact",
    lines: ["info@kingpinracing.com"],
    mail: true,
  },
];

export default function PlanVisit() {
  return (
    <section id="visit" className="scroll-mt-24">
      <div className="section-pad">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: statement + buttons */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label">N° 006 — Find Us Trackside</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-bone md:text-6xl">
                Consider it <span className="text-gold">handled.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-sm leading-relaxed text-sand/75 md:text-base">
                Headquartered in Braselton, Georgia, right outside the gates of
                Road Atlanta — one of the most iconic circuits in North
                America. The crew handles the rest.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid"
                >
                  Get Directions
                </a>
                <a
                  href={PARKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  Track Info
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: hairline detail rows */}
          <div className="lg:col-span-7">
            {DETAILS.map((d, i) => (
              <Reveal key={d.k} delay={i * 100}>
                <div className="grid gap-2 border-t border-bone/10 py-7 sm:grid-cols-3 sm:gap-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80 sm:pt-1">
                    {d.k}
                  </p>
                  <div className="sm:col-span-2">
                    {d.mail ? (
                      <a
                        href={`mailto:${d.lines[0]}`}
                        className="text-base text-bone underline decoration-bone/20 underline-offset-4 transition-colors duration-300 hover:text-gold hover:decoration-gold md:text-lg"
                      >
                        {d.lines[0]}
                      </a>
                    ) : (
                      d.lines.map((line) => (
                        <p
                          key={line}
                          className="text-base leading-relaxed text-bone/90 md:text-lg"
                        >
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="hairline" />
          </div>
        </div>

        {/* Full-width arrival image */}
        <Reveal delay={150} className="mt-20">
          <div className="relative h-72 overflow-hidden md:h-96">
            <img
              src="/images/racing/kp14.jpg"
              alt="Kingpin Racing at Road Atlanta"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/30" />
            <p className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.35em] text-bone/70 md:left-10">
              Road Atlanta — Braselton, Georgia
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

