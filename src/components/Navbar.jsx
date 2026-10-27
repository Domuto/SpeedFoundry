import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";
import BookButton from "./BookButton.jsx";

/**
 * Fixed navigation.
 *  - Transparent over the hero; solid + hairline border once you scroll.
 *  - Every link scrolls to its section id.
 *  - Mobile: fullscreen overlay menu with staggered display links.
 *
 * Edit the LINKS array to add / remove nav items.
 */
const LINKS = [
  { label: "About", value: "#about" },
  { label: "Parts", value: "#categories" },
  { label: "Why Us", value: "#services" },
  { label: "Merch", value: "#merch" },
  { label: "Gallery", value: "#gallery" },
  { label: "FAQ", value: "#faq" },
  { label: "Blog", value: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isBlog = pathname.startsWith("/blog");

  // Swap to the solid bar after 40px of scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-bone/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
          {/* Logo */}
          {isBlog ? (
            <Link
              to="/"
              className="flex items-center gap-2 text-left"
              aria-label="The Speed Foundry — home"
            >
              <Wordmark stacked={false} className="text-xl md:text-2xl" />
            </Link>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex cursor-pointer items-center gap-2 text-left"
              aria-label="The Speed Foundry — back to top"
            >
              <Wordmark stacked={false} className="text-xl md:text-2xl" />
            </button>
          )}

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <li key={link.label}>
                {link.value === "/blog" ? (
                  <Link
                    to="/blog"
                    className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bone/85 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={isBlog ? `/${link.value}` : link.value}
                    className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bone/85 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <BookButton className="btn btn-solid btn-sm hidden sm:inline-flex">
              Book Now
            </BookButton>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 cursor-pointer flex-col items-end justify-center gap-1.5 lg:hidden"
              aria-label="Open menu"
            >
              <span className="block h-px w-7 bg-bone" />
              <span className="block h-px w-5 bg-gold" />
            </button>
          </div>
        </nav>
      </header>

      {/* ---------- Mobile overlay menu ---------- */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-bone/10 px-6 py-5">
          {isBlog ? (
            <Link to="/" onClick={() => setOpen(false)} aria-label="The Speed Foundry — home">
              <Wordmark stacked={false} className="text-lg" />
            </Link>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="The Speed Foundry — back to top"
            >
              <Wordmark stacked={false} className="text-lg" />
            </button>
          )}
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer text-[11px] uppercase tracking-[0.3em] text-sand transition-colors hover:text-gold"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
          {LINKS.map((link, i) => (
            <li
              key={link.label}
              style={{ transitionDelay: `${open ? 70 * i : 0}ms` }}
              className={`transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {link.value === "/blog" ? (
                <Link
                  to="/blog"
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-4xl font-light text-bone transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={isBlog ? `/${link.value}` : link.value}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-4xl font-light text-bone transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="border-t border-bone/10 px-8 py-6">
          <BookButton
            className="btn btn-solid mb-6 w-full"
            onClick={() => setOpen(false)}
          />
          <p className="label mb-2">Visit</p>
          <p className="text-sm text-sand/80">4849 Buford Hwy — Peachtree Corners, GA</p>
        </div>
      </div>
    </>
  );
}
