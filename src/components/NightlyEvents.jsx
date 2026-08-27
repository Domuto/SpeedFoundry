import Reveal from "./Reveal.jsx";
import { nightlyEvents } from "../data/nightlyEvents.js";

/**
 * N° 003 — Services.
 * Grid of JRD Motorsport services fed by src/data/nightlyEvents.js —
 * edit that file to add, remove, or reorder services. Each card:
 * photo, tag + title, description, and a Learn More CTA.
 */
export default function NightlyEvents() {
  return (
    <section id="events" className="scroll-mt-24 border-t border-bone/10 bg-charcoal/40">
      <div className="section-pad">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="label">N° 003 — Services</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
                Speed meets substance.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-xs text-sm leading-relaxed text-sand/60">
              From the ARC2 rally program to engineering consultation and
              partner performance parts — JRD covers every mile of the stage.
            </p>
          </Reveal>
        </div>

        {/* Event cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nightlyEvents.map((e, i) => (
            <Reveal key={e.id} delay={(i % 3) * 80} className="h-full">
              <article className="group flex h-full flex-col border border-bone/10 bg-ink transition-colors duration-500 hover:border-gold/40">
                <div className="relative overflow-hidden bg-charcoal">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="veil-card absolute inset-0 opacity-60" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
                    {e.day} — {e.nextDate}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-light text-bone">
                    {e.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sand/70">
                    {e.description}
                  </p>
                  <a
                    href={e.link}
                    {...(e.link.startsWith("#")
                      ? {
                          onClick: (ev) => {
                            ev.preventDefault();
                            document.querySelector(e.link)?.scrollIntoView({ behavior: "smooth" });
                          },
                        }
                      : { target: "_blank", rel: "noreferrer" })}
                    className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-sand/60 transition-colors duration-300 hover:text-gold"
                  >
                    Learn More{" "}
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

