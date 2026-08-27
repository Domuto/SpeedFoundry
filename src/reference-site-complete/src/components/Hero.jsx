import { Link } from "react-router-dom";

/**
 * Culture Haus–style poster hero.
 * Electric cobalt backdrop with faint concentric line-art + glow,
 * a black label pill, a massive stacked title (second word outlined),
 * a location row, a "LIVE / OPEN" badge, and two CTAs.
 *
 * `ready` flips true when the Loader finishes — that fires the
 * staggered entrance (see .hero-el / .is-in in index.css).
 */
function PinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="text-amber"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className="text-amber"
      aria-hidden="true"
    >
      <path
        d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero({ ready, onExplore }) {
  const anim = (delay, extra = "") => ({
    className: `hero-el ${ready ? "is-in" : ""} ${extra}`,
    style: { transitionDelay: `${delay}ms` },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
    >
      <div className="hero-graphic absolute inset-0" />
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero.jpg"
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-blue/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/70" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center">
        <div {...anim(100, "mb-8 flex justify-center")}>
          <div className="pill">
            <span>Mixed-Use District</span>
            <span className="text-gold">•</span>
            <span>West Midtown</span>
            <span className="text-gold">•</span>
            <span>Atlanta</span>
          </div>
        </div>

        <h1 {...anim(220, "font-display uppercase leading-[0.82] text-bone")}>
          <span className="block text-[clamp(3.5rem,13vw,10rem)]">The</span>
          <span className="block text-outline text-[clamp(3.5rem,13vw,10rem)]">
            Interlock
          </span>
        </h1>

        <div
          {...anim(
            360,
            "mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] font-bold uppercase tracking-[0.22em] text-bone"
          )}
        >
          <span className="inline-flex items-center gap-2">
            <PinIcon />
            1115 Howell Mill Rd NW
          </span>
          <span className="hidden h-4 w-px bg-bone/30 sm:block" />
          <span className="inline-flex items-center gap-2">
            <StarIcon />
            Open Daily · Year-Round
          </span>
        </div>

        <p
          {...anim(
            460,
            "mx-auto mt-7 max-w-xl text-sm leading-relaxed text-bone/80 md:text-base"
          )}
        >
          Dining, retail, entertainment, workspaces, and residences — six ways to
          spend a day, all at one address in the heart of the Westside.
        </p>

        <div
          {...anim(
            540,
            "mt-9 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-bone"
          )}
        >
          <span>The District is</span>
          <span className="inline-flex items-center gap-2 rounded-[3px] bg-gold px-3 py-1 text-ink">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ink" />
            Open
          </span>
        </div>

        <div
          {...anim(
            640,
            "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          )}
        >
          <button onClick={() => onExplore?.("All")} className="btn btn-solid">
            Explore Directory
          </button>
          <Link to="/plan-your-visit" className="btn btn-ghost">
            Plan Your Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
