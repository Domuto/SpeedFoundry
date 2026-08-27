import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { faq } from "../data/faq.js";

/**
 * N° 007 — FAQ.
 * Simple single-open accordion fed by src/data/faq.js — edit that
 * file to add, remove, or reorder questions.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-bone/10 bg-charcoal/40">
      <div className="section-pad">
        <div className="mb-14">
          <Reveal>
            <p className="label">N° 007 — FAQ</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
              Good to know.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto max-w-3xl border-t border-bone/10">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="border-b border-bone/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl font-light text-bone md:text-2xl">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 text-lg text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-sm leading-relaxed text-sand/75 md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
