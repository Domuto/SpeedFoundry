/**
 * Poster hero for The Speed Foundry.
 * Molten carbon backdrop with a faint weave grid, a black label pill of
 * value props, a massive stacked wordmark (FOUNDRY in blaze red), a
 * location row, and two CTAs. A subtle switcher swaps the backdrop photo
 * across the four part categories.
 * `ready` flips true when the Loader finishes — that fires the staggered
 * entrance (see .hero-el / .is-in in index.css).
 */
import { useState } from "react";
import { SHOP_URL as SHOP_URL_SHARED } from "../data/shop.js";

const SHOP_URL = "https://thespeedfoundry-cuvfktu9.myshopify.com/?_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaXQwYUdWemNHVmxaR1p2ZFc1a2Nua3RZM1YyWm10MGRUa3ViWGx6YUc5d2FXWjVMbU52YlFZNkJrVlUiLCJleHAiOiIyMDI2LTA4LTI3VDAyOjM0OjA4LjUwNloiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfeWJ5cGFzcyJ9fQ%3D%3D--a9f9cf6441d8c48a48a24871686241771eec854c&_cd=8800ed06eb2b427f61d5d6b55e9e62daa5220cfb595878200bd9e2410db15fe2&_uid=141529743526&preview_theme_id=197153718438&preview_token=cpi9k6pokejci100lubuasqyxkhyhqd3";

const BACKDROPS = {
  engine: "/images/sf/engine.jpg",
  exhaust: "/images/sf/exhaust.jpg",
  suspension: "/images/sf/suspension.jpg",
  intakes: "/images/sf/intakes.jpg",
};

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-amber" aria-hidden="true">
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="text-amber" aria-hidden="true">
      <path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4L12 2Z" fill="currentColor" />
    </svg>
  );
}

export default function Hero({ ready }) {
  const [view, setView] = useState("engine");

  const scrollTo = (selector) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

  // Helper: builds the animated class + stagger delay for each element.
  const anim = (delay, extra = "") => ({
    className: `hero-el ${ready ? "is-in" : ""} ${extra}`,
    style: { transitionDelay: `${delay}ms` },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
    >
      {/* Molten carbon backdrop + category photo + veils */}
      <div className="hero-graphic absolute inset-0" />
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-45 transition-opacity duration-700"
        src={BACKDROPS[view]}
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/85" />

      {/* Content — centered stack */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center">
        {/* Badge pill */}
        <div {...anim(100, "mb-8 flex justify-center")}>
          <div className="pill">
            <span>Outstanding Service</span>
            <span className="text-gold">•</span>
            <span>Exclusive Pricing</span>
            <span className="text-gold">•</span>
            <span>Industry Expertise</span>
          </div>
        </div>

        {/* Stacked poster headline: solid over blaze red */}
        <h1 {...anim(220, "font-display uppercase leading-[0.82] text-bone")}>
          <span className="block text-[clamp(3rem,11vw,8.5rem)]">Speed</span>
          <span className="block text-gold text-[clamp(3.5rem,13vw,10rem)]">
            Foundry
          </span>
        </h1>

        {/* Address / trust line */}
        <div
          {...anim(
            360,
            "mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] font-bold uppercase tracking-[0.22em] text-bone"
          )}
        >
          <span className="inline-flex items-center gap-2">
            <PinIcon />
            Peachtree Corners, GA
          </span>
          <span className="hidden h-4 w-px bg-bone/30 sm:block" />
          <span className="inline-flex items-center gap-2">
            <StarIcon />
            Performance Parts, Done Right
          </span>
        </div>

        {/* Description */}
        <p
          {...anim(
            460,
            "mx-auto mt-7 max-w-xl text-sm leading-relaxed text-bone/80 md:text-base"
          )}
        >
          Here you will find all of the right ingredients — engine, exhaust,
          suspension, and intake upgrades, backed by real industry expertise
          and exclusive pricing.
        </p>

        {/* Buttons */}
        <div
          {...anim(
            560,
            "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          )}
        >
          <a href={SHOP_URL_SHARED} target="_blank" rel="noreferrer" className="btn btn-solid">
            Shop Parts
          </a>
          <button onClick={() => scrollTo("#categories")} className="btn btn-ghost">
            Browse Categories
          </button>
        </div>
      </div>

      {/* Corner metadata + backdrop switch (desktop flourish) */}
      <div
        {...anim(
          900,
          "absolute bottom-8 z-10 hidden w-full items-end justify-between px-6 md:px-12 lg:flex lg:px-20"
        )}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/60">
          Peachtree Corners, GA
        </p>

        {/* Category backdrop switch */}
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em]">
          {Object.keys(BACKDROPS).map((key, i) => (
            <span key={key} className="flex items-center gap-3">
              {i > 0 && <span className="text-bone/30">/</span>}
              <button
                onClick={() => setView(key)}
                aria-pressed={view === key}
                className={`cursor-pointer border-b pb-0.5 capitalize transition-colors duration-300 ${
                  view === key
                    ? "border-gold text-bone"
                    : "border-transparent text-bone/40 hover:text-bone/70"
                }`}
              >
                {key}
              </button>
            </span>
          ))}
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/60">
          4849 Buford Hwy
        </p>
      </div>

      {/* Mobile backdrop switch — centered */}
      <div
        {...anim(
          900,
          "absolute bottom-6 z-10 flex w-full items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] lg:hidden"
        )}
      >
        {Object.keys(BACKDROPS).map((key, i) => (
          <span key={key} className="flex items-center gap-3">
            {i > 0 && <span className="text-bone/30">/</span>}
            <button
              onClick={() => setView(key)}
              aria-pressed={view === key}
              className={`cursor-pointer border-b pb-0.5 capitalize transition-colors duration-300 ${
                view === key
                  ? "border-gold text-bone"
                  : "border-transparent text-bone/40"
              }`}
            >
              {key}
            </button>
          </span>
        ))}
      </div>
    </section>
  );
}

