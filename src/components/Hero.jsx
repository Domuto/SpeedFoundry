/**
 * Culture Haus–style poster hero.
 * Electric cobalt backdrop with faint concentric line-art + glow,
 * a black label pill, a massive stacked title (second word outlined),
 * a location row, an "OPEN" badge, and two CTAs.
 * `ready` flips true when the Loader finishes — that's what fires
 * the staggered entrance (see .hero-el / .is-in in index.css).
 */
import { useState } from "react";

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
  const [showVideo, setShowVideo] = useState(true);

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
      {/* Electric backdrop + racing video/photo + color veils */}
      <div className="hero-graphic absolute inset-0" />
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/caevid.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      ) : (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/racing/kp14.jpg"
          alt=""
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-blue/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/70" />

      {/* Content — centered stack */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center">
        {/* Badge pill */}
        <div {...anim(100, "mb-8 flex justify-center")}>
          <div className="pill">
            <span>Racing Team</span>
            <span className="text-gold">•</span>
            <span>Road Atlanta</span>
            <span className="text-gold">•</span>
            <span>Braselton, GA</span>
          </div>
        </div>

        {/* Stacked poster headline: solid over outline */}
        <h1 {...anim(220, "font-display uppercase leading-[0.82] text-bone")}>
          <span className="block text-[clamp(3rem,11vw,8.5rem)]">
            Kingpin
          </span>
          <span className="text-outline block text-[clamp(3.5rem,13vw,10rem)]">
            Racing
          </span>
        </h1>

        {/* Address / open line */}
        <div
          {...anim(
            360,
            "mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] font-bold uppercase tracking-[0.22em] text-bone"
          )}
        >
          <span className="inline-flex items-center gap-2">
            <PinIcon />
            Road Atlanta — Braselton, GA
          </span>
          <span className="hidden h-4 w-px bg-bone/30 sm:block" />
          <span className="inline-flex items-center gap-2">
            <StarIcon />
            WRL · IMSA Michelin Pilot Challenge
          </span>
        </div>

        {/* Description */}
        <p
          {...anim(
            460,
            "mx-auto mt-7 max-w-xl text-sm leading-relaxed text-bone/80 md:text-base"
          )}
        >
          Trackside support, driver coaching, and racecar consultation — a
          professional GT3 &amp; GT4 racing team in the heart of Georgia.
        </p>

        {/* Buttons */}
        <div
          {...anim(
            560,
            "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          )}
        >
          <button onClick={() => scrollTo("#events")} className="btn btn-solid">
            Our Services
          </button>
          <button onClick={() => scrollTo("#about")} className="btn btn-ghost">
            About Us
          </button>
        </div>
      </div>

      {/* Corner metadata + backdrop toggle (desktop flourish) */}
      <div
        {...anim(
          900,
          "absolute bottom-8 z-10 hidden w-full items-end justify-between px-6 md:px-12 lg:flex lg:px-20"
        )}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/60">
          Road Atlanta, Braselton GA
        </p>

        {/* Understated video / photo switch */}
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em]">
          <button
            onClick={() => setShowVideo(true)}
            aria-pressed={showVideo}
            className={`cursor-pointer border-b pb-0.5 transition-colors duration-300 ${
              showVideo
                ? "border-gold text-bone"
                : "border-transparent text-bone/40 hover:text-bone/70"
            }`}
          >
            Video
          </button>
          <span className="text-bone/30">/</span>
          <button
            onClick={() => setShowVideo(false)}
            aria-pressed={!showVideo}
            className={`cursor-pointer border-b pb-0.5 transition-colors duration-300 ${
              !showVideo
                ? "border-gold text-bone"
                : "border-transparent text-bone/40 hover:text-bone/70"
            }`}
          >
            Photo
          </button>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/60">
          34.146° N — 83.816° W
        </p>
      </div>

      {/* Mobile backdrop toggle — same understated style, centered */}
      <div
        {...anim(
          900,
          "absolute bottom-6 z-10 flex w-full items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] lg:hidden"
        )}
      >
        <button
          onClick={() => setShowVideo(true)}
          aria-pressed={showVideo}
          className={`cursor-pointer border-b pb-0.5 transition-colors duration-300 ${
            showVideo
              ? "border-gold text-bone"
              : "border-transparent text-bone/40"
          }`}
        >
          Video
        </button>
        <span className="text-bone/30">/</span>
        <button
          onClick={() => setShowVideo(false)}
          aria-pressed={!showVideo}
          className={`cursor-pointer border-b pb-0.5 transition-colors duration-300 ${
            !showVideo
              ? "border-gold text-bone"
              : "border-transparent text-bone/40"
          }`}
        >
          Photo
        </button>
      </div>
    </section>
  );
}

