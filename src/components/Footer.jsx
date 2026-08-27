/**
 * Footer — address, quick links, socials, copyright.
 */
const YEAR = new Date().getFullYear();

const EXPLORE = [
  { label: "Services", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experiences", href: "#featured" },
  { label: "Find Us Trackside", href: "#visit" },
];

const VENUE = [
  { label: "About", href: "#about" },
  { label: "The Team", href: "#spaces" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/kingpin_racing" },
  { label: "Facebook", href: "https://www.facebook.com/KingpinRacingLLC/" },
  { label: "IMSA Team Page", href: "https://www.imsa.com/racing-teams/kingpin-racing-no-53/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10">
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <img src="/images/logo.png" alt="Kingpin Racing logo" className="h-16 w-auto" />
            <p className="mt-4">
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-bone">
                Kingpin Racing
              </span>
              <span className="ml-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                GA
              </span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">
              A professional GT3 &amp; GT4 racing team — trackside support,
              driver coaching, and racecar consultation, based at Road Atlanta.
            </p>
            <p className="mt-6 text-sm text-sand/70">
              Road Atlanta
              <br />
              Braselton, GA
            </p>
            <a
              href="mailto:info@kingpinracing.com"
              className="mt-2 inline-block text-sm text-gold transition-colors duration-300 hover:text-bone"
            >
              info@kingpinracing.com
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

          {/* Venue links */}
          <div className="md:col-span-2">
            <p className="label mb-5">Venue</p>
            <ul className="space-y-1">
              {VENUE.map((l) => (
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
              Bookings &amp; inquiries:
              <br />
              <a
                href="tel:+15407710135"
                className="normal-case tracking-normal text-sand/70 transition-colors hover:text-gold"
              >
                (540) 771-0135
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-bone/10 pt-8 text-[10px] uppercase tracking-[0.25em] text-sand/50 md:flex-row md:items-center md:justify-between">
          <p>© {YEAR} Kingpin Racing — All rights reserved.</p>
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
