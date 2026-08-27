import Reveal from "./Reveal.jsx";
import { nightlyEvents } from "../data/nightlyEvents.js";

/**
 * N° 003 — Why Us.
 * Grid of value props fed by src/data/nightlyEvents.js — edit that file
 * to add, remove, or reorder. Each card: number, tag, title, description.
 */
export default function NightlyEvents() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-bone/10 bg-charcoal/40">
      <div className="section-pad">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="label">N° 003 — Why Us</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
                The Foundry advantage.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-xs text-sm leading-relaxed text-sand/60">
              Outstanding service, exclusive pricing, and industry expertise —
              the reasons enthusiasts source their parts through us.
            </p>
          </Reveal>
        </div>

        {/* Value-prop cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nightlyEvents.map((e, i) => (
            <Reveal key={e.id} delay={(i % 3) * 80} className="h-full">
              <article className="group flex h-full flex-col border border-bone/10 bg-ink p-8 transition-colors duration-500 hover:border-gold/40">
                <p className="font-display text-5xl font-light text-gold/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-gold/80">
                  {e.day}
                </p>
                <h3 className="mt-3 font-display text-2xl font-light text-bone">
                  {e.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sand/70">
                  {e.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

