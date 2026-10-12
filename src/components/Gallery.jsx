import Reveal from "./Reveal.jsx";

/**
 * N° 005 — The Feed.
 * Grid of shop imagery linking to the real Instagram profile. Swap the
 * paths in IMAGES for updated photos as they come in.
 */
const IMAGES = [
  { src: "/images/sf/shop-floor.jpg", alt: "Inside The Speed Foundry shop floor" },
  { src: "/images/sf/lifestyle-mustang-wing.jpg", alt: "Speed Foundry tee with the track Mustang" },
  { src: "/images/sf/crew.jpg", alt: "The Speed Foundry crew in matching tees" },
  { src: "/images/sf/engine.jpg", alt: "Performance engine components" },
  { src: "/images/sf/lifestyle-evo-lean.jpg", alt: "Blue Lancer Evolution at the shop" },
  { src: "/images/sf/lifestyle-crouch.jpg", alt: "Mechanic checking the Speed Foundry Mustang" },
  { src: "/images/sf/lifestyle-mustang-front.jpg", alt: "Speed Foundry tee in front of the Mustang" },
  { src: "/images/sf/suspension.jpg", alt: "Performance suspension components" },
  { src: "/images/sf/lifestyle-engine-bay.jpg", alt: "Under the hood of the Evolution" },
  { src: "/images/sf/lifestyle-evo-walk.jpg", alt: "Walking up to the Lancer Evolution" },
  { src: "/images/sf/lifestyle-garage.jpg", alt: "Speed Foundry tee outside the garage" },
  { src: "/images/sf/lifestyle-mustang-back.jpg", alt: "Speed Foundry back graphic tee" },
];

const INSTAGRAM_URL = "https://www.instagram.com/speedfoundry/";

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad scroll-mt-24">
      {/* Section header */}
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="label">N° 005 — The Feed</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
              From the shop floor.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border-b border-bone/20 pb-1 text-[11px] uppercase tracking-[0.3em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            @speedfoundry
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </Reveal>
      </div>

      {/* Square grid */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {IMAGES.map(({ src, alt }, i) => (
          <Reveal key={src} delay={(i % 3) * 80}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/45">
                <span className="text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <svg width="20" height="20" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

