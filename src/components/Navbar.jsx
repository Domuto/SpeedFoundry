import { useEffect, useState } from "react";

/**
 * Fixed navigation.
 *  - Transparent over the hero; solid + hairline border once you scroll.
 *  - Every link scrolls to its section id.
 *  - Mobile: fullscreen overlay menu with staggered serif links.
 *
 * Edit the LINKS array to add / remove nav items.
 */
const LINKS = [
  { label: "About", value: "#about" },
  { label: "The Team", value: "#spaces" },
  { label: "Services", value: "#events" },
  { label: "Gallery", value: "#gallery" },
  { label: "Experiences", value: "#featured" },
  { label: "FAQ", value: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  const scrollTo = (selector) => {
    setOpen(false);
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex cursor-pointer items-center gap-3 text-left"
            aria-label="Back to top"
          >
            <img src="/images/logo.png" alt="Kingpin Racing logo" className="h-9 w-auto" />
            <span>
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-bone">
                Kingpin Racing
              </span>
              <span className="ml-2 text-[10px] uppercase tracking-[0.3em] text-gold">GA</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.value)}
                  className="cursor-pointer text-[11px] font-semibold uppercase tracking-[0.22em] text-bone/85 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            {/* About Us (desktop) */}
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#about");
              }}
              className="btn btn-ghost btn-sm hidden md:inline-flex"
            >
              About Us
            </a>

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
          <span className="flex items-center gap-3">
            <img src="/images/logo.png" alt="" className="h-8 w-auto" />
            <span className="text-sm uppercase tracking-[0.3em] text-bone">
              Kingpin Racing <span className="text-[10px] text-gold">GA</span>
            </span>
          </span>
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
              <button
                onClick={() => scrollTo(link.value)}
                className="cursor-pointer py-2 font-display text-4xl font-light text-bone transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="border-t border-bone/10 px-8 py-6">
          <p className="label mb-2">Visit</p>
          <p className="text-sm text-sand/80">Road Atlanta — Braselton, GA</p>
          <a href="tel:+15407710135" className="mt-1 block text-sm text-gold">
            (540) 771-0135
          </a>
        </div>
      </div>
    </>
  );
}
