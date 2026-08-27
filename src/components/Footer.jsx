import Wordmark from "./Wordmark.jsx";
import { SHOP_URL as SHOP_URL_SHARED, shopPath } from "../data/shop.js";

/**
 * Footer — address, quick links, socials, copyright.
 */
const YEAR = new Date().getFullYear();

const SHOP_URL = "https://thespeedfoundry-cuvfktu9.myshopify.com/?_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaXQwYUdWemNHVmxaR1p2ZFc1a2Nua3RZM1YyWm10MGRUa3ViWGx6YUc5d2FXWjVMbU52YlFZNkJrVlUiLCJleHAiOiIyMDI2LTA4LTI3VDAyOjM0OjA4LjUwNloiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfeWJ5cGFzcyJ9fQ%3D%3D--a9f9cf6441d8c48a48a24871686241771eec854c&_cd=8800ed06eb2b427f61d5d6b55e9e62daa5220cfb595878200bd9e2410db15fe2&_uid=141529743526&preview_theme_id=197153718438&preview_token=cpi9k6pokejci100lubuasqyxkhyhqd3";

const EXPLORE = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#services" },
  { label: "Merch", href: "#merch" },
  { label: "FAQ", href: "#faq" },
];

const SHOP = [
  { label: "Engine", href: shopPath("/collections/engine") },
  { label: "Exhaust", href: shopPath("/collections/exhaust") },
  { label: "Suspension", href: shopPath("/collections/suspension-1") },
  { label: "Intakes", href: shopPath("/collections/intakes") },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/speedfoundry/" },
  { label: "Online Store", href: SHOP_URL_SHARED },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10">
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Wordmark stacked={false} className="text-3xl" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">
              A performance parts shop in Peachtree Corners, Georgia —
              engine, exhaust, suspension, and intakes with outstanding
              service, exclusive pricing, and real industry expertise.
            </p>
            <p className="mt-6 text-sm text-sand/70">
              4849 Buford Hwy
              <br />
              Peachtree Corners, GA 30071
            </p>
            <a
              href="https://www.instagram.com/speedfoundry/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm text-gold transition-colors duration-300 hover:text-bone"
            >
              @speedfoundry
            </a>
          </div>

          {/* Explore links */}
          <div className="md:col-span-2">
            <p className="label mb-5">Explore</p>
            <ul className="space-y-1">
              {EXPLORE.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block py-1 text-sm text-sand/70 transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop links */}
          <div className="md:col-span-2">
            <p className="label mb-5">Shop</p>
            <ul className="space-y-1">
              {SHOP.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block py-1 text-sm text-sand/70 transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <p className="label mb-5">Follow</p>
            <ul className="space-y-1">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 py-1 text-sm text-sand/70 transition-colors duration-300 hover:text-gold"
                  >
                    {s.label}
                    <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-sand/50">
              Ready to shop?
            </p>
            <a
              href={SHOP_URL_SHARED}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid btn-sm mt-3"
            >
              Shop Parts
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-bone/10 pt-8 text-[10px] uppercase tracking-[0.25em] text-sand/50 md:flex-row md:items-center md:justify-between">
          <p>© {YEAR} The Speed Foundry — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#top"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-gold"
            >
              Back to Top
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 10V2M2.5 5.5L6 2l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
