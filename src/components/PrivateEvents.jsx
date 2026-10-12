import Reveal from "./Reveal.jsx";

/**
 * N° 004 — Swag.
 * Merch grid showing image and name for each item.
 * Edit the PRODUCTS array to change items or images.
 */
const PRODUCTS = [
  {
    name: "Short-Sleeve T-Shirt",
    image: "/images/sf/merch-tee-front.png",
  },
  {
    name: "Men's Tank Top",
    image: "/images/sf/merch-tank.jpg",
  },
  {
    name: "Wide Wheels Classic Tee",
    image: "/images/sf/merch-tee-back.png",
  },
];

export default function PrivateEvents() {
  return (
    <section id="merch" className="scroll-mt-24">
      <div className="section-pad">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="label">N° 004 — Swag</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
                Wear the Foundry.
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90} className="h-full">
              <div className="group flex h-full flex-col border border-bone/10 bg-charcoal/40 transition-colors duration-500 hover:border-gold/40">
                <div className="relative aspect-square overflow-hidden bg-smoke">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-light text-bone">
                    {p.name}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

