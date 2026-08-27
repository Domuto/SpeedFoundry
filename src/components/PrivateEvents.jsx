import Reveal from "./Reveal.jsx";
import { SHOP_URL as SHOP_URL_SHARED, shopPath } from "../data/shop.js";

/**
 * N° 004 — Swag.
 * Merch product grid pulling image, name, and price for each item.
 * Every card links to the matching product on thespeedfoundry.com.
 * Edit the PRODUCTS array to change items, images, prices, or links.
 */
const SHOP_URL = "https://thespeedfoundry-cuvfktu9.myshopify.com/?_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaXQwYUdWemNHVmxaR1p2ZFc1a2Nua3RZM1YyWm10MGRUa3ViWGx6YUc5d2FXWjVMbU52YlFZNkJrVlUiLCJleHAiOiIyMDI2LTA4LTI3VDAyOjM0OjA4LjUwNloiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfeWJ5cGFzcyJ9fQ%3D%3D--a9f9cf6441d8c48a48a24871686241771eec854c&_cd=8800ed06eb2b427f61d5d6b55e9e62daa5220cfb595878200bd9e2410db15fe2&_uid=141529743526&preview_theme_id=197153718438&preview_token=cpi9k6pokejci100lubuasqyxkhyhqd3";

const PRODUCTS = [
  {
    name: "Short-Sleeve T-Shirt",
    price: "$29.99",
    image: "/images/sf/merch-tee-front.png",
    href: shopPath("/products/short-sleeve-t-shirt"),
  },
  {
    name: "Men's Tank Top",
    price: "$24.99",
    image: "/images/sf/merch-tank.jpg",
    href: shopPath("/products/mens-tank-top"),
  },
  {
    name: "Wide Wheels Classic Tee",
    price: "$29.95",
    image: "/images/sf/merch-tee-back.png",
    href: shopPath("/products/unisex-classic-tee"),
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
              <p className="label">N° 004 — Swag for Sale</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-light text-bone md:text-6xl">
                Wear the Foundry.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a
              href={SHOP_URL_SHARED}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border-b border-bone/20 pb-1 text-[11px] uppercase tracking-[0.3em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Shop All Swag
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90} className="h-full">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col border border-bone/10 bg-charcoal/40 transition-colors duration-500 hover:border-gold/40"
              >
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
                  <p className="mt-2 text-sm text-sand/70">{p.price} USD</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold transition-transform duration-300 group-hover:translate-x-1">
                    Choose Options →
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

