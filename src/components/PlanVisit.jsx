import Reveal from "./Reveal.jsx";
import { SHOP_URL as SHOP_URL_SHARED } from "../data/shop.js";

/**
 * N° 006 — Visit / Find Us.
 * Statement + action buttons on the left, hairline detail rows
 * (address / hours / shop online / follow) on the right, and a
 * full-width image below.
 */
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=4849+Buford+Hwy,+Peachtree+Corners,+GA+30071";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=4849+Buford+Hwy+Peachtree+Corners+GA+30071";
const SHOP_URL = "https://thespeedfoundry-cuvfktu9.myshopify.com/?_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaXQwYUdWemNHVmxaR1p2ZFc1a2Nua3RZM1YyWm10MGRUa3ViWGx6YUc5d2FXWjVMbU52YlFZNkJrVlUiLCJleHAiOiIyMDI2LTA4LTI3VDAyOjM0OjA4LjUwNloiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfeGJ5cGFzcyJ9fQ%3D%3D--a9f9cf6441d8c48a48a24871686241771eec854c&_cd=8800ed06eb2b427f61d5d6b55e9e62daa5220cfb595878200bd9e2410db15fe2&_uid=141529743526&preview_theme_id=197153718438&preview_token=cpi9k6pokejci100lubuasqyxkhyhqd3";

const DETAILS = [
  {
    k: "Location",
    lines: ["4849 Buford Hwy", "Peachtree Corners, GA 30071"],
  },
  {
    k: "Shop Online",
    lines: ["Browse the full catalog and check out securely at", "thespeedfoundry-cuvfktu9.myshopify.com."],
  },
  {
    k: "Fitment Help",
    lines: ["Not sure a part fits your build?", "Message us and we'll confirm before you buy."],
  },
  {
    k: "Follow",
    lines: ["@speedfoundry on Instagram"],
    insta: true,
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
              <p className="label">N° 006 — Find Us</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-bone md:text-6xl">
                Stop by the <span className="text-gold">shop.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-sm leading-relaxed text-sand/75 md:text-base">
                Find us on Buford Highway in Peachtree Corners, Georgia — or
                shop the full catalog online and we'll get your parts moving.
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
                  href={SHOP_URL_SHARED}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  Shop Parts
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
                    {d.insta ? (
                      <a
                        href="https://www.instagram.com/speedfoundry/"
                        target="_blank"
                        rel="noreferrer"
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

        {/* Full-width image */}
        <Reveal delay={150} className="mt-20">
          <div className="relative h-72 overflow-hidden md:h-96">
            <img
              src="/images/sf/shop-floor.jpg"
              alt="The Speed Foundry — Peachtree Corners, Georgia"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/40" />
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.35em] text-bone/80 transition-colors duration-300 hover:text-gold md:left-10"
            >
              4849 Buford Hwy — Peachtree Corners, Georgia
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

