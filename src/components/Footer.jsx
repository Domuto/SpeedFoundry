/**
 * Footer — address, quick links, socials, copyright.
 */
const YEAR = new Date().getFullYear();

const EXPLORE = [
  { label: "Services", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Programs", href: "#featured" },
  { label: "Find Us", href: "#visit" },
];

const VENUE = [
  { label: "About", href: "#about" },
  { label: "The Shop", href: "#spaces" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/jrd.motorsport" },
  { label: "Facebook", href: "https://www.facebook.com/JRDMotorsport/" },
  { label: "X", href: "https://x.com/JRDRally" },
  { label: "Youtube", href: "https://www.youtube.com/channel/UCQzKf7wH08HfffoOCOHrHyw" },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10">
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <img
              src="/images/jrd-logo.png"
              alt="JRD Motorsport"
              className="h-auto w-[280px] max-w-full"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">
              A motorsport engineering company — the ARC2 rally platform,
              engineering services, and performance parts, based in
              Hoschton, GA.
            </p>
            <p className="mt-6 text-sm text-sand/70">
              1101 Hwy 124
              <br />
              Hoschton, GA 30548
            </p>
            <a
              href="mailto:info@jrdmotorsport.com"
              className="mt-2 inline-block text-sm text-gold transition-colors duration-300 hover:text-bone"
            >
              info@jrdmotorsport.com
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
                href="mailto:info@jrdmotorsport.com"
                className="normal-case tracking-normal text-sand/70 transition-colors hover:text-gold"
              >
                info@jrdmotorsport.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-bone/10 pt-8 text-[10px] uppercase tracking-[0.25em] text-sand/50 md:flex-row md:items-center md:justify-between">
          <p>© {YEAR} JRD Motorsport — All rights reserved.</p>
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
