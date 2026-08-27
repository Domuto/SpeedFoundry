import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();

const EXPLORE = [
  { label: "Directory", href: "/directory" },
  { label: "Events", href: "/event-calendar-2" },
  { label: "Food + Drinks", href: "/food-drinks" },
  { label: "Plan Your Visit", href: "/plan-your-visit" },
];

const DISTRICT = [
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "News", href: "/news" },
  { label: "Lease", href: "/lease" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/theinterlockatl/" },
  { label: "Facebook", href: "https://www.facebook.com/TheInterlockATL/" },
  { label: "Culture Haus", href: "https://interlockculturehaus.com/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10">
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p>
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-bone">
                The Interlock
              </span>
              <span className="ml-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                ATL
              </span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">
              West Midtown's mixed-use destination for dining, shopping,
              entertainment, living, and working — all at one address.
            </p>
            <p className="mt-6 text-sm text-sand/70">
              1115 Howell Mill Rd NW
              <br />
              Atlanta, GA 30318
            </p>
            <a
              href="mailto:theinterlockatlanta@gmail.com"
              className="mt-2 inline-block text-sm text-gold transition-colors duration-300 hover:text-bone"
            >
              theinterlockatlanta@gmail.com
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-5">Explore</p>
            <ul className="space-y-1">
              {EXPLORE.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="block py-1 text-sm text-sand/70 transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-5">District</p>
            <ul className="space-y-1">
              {DISTRICT.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="block py-1 text-sm text-sand/70 transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
                    <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-sand/50">
              Leasing &amp; press:
              <br />
              <a
                href="mailto:theinterlockatlanta@gmail.com"
                className="normal-case tracking-normal text-sand/70 transition-colors hover:text-gold"
              >
                theinterlockatlanta@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-bone/10 pt-8 text-[10px] uppercase tracking-[0.25em] text-sand/50 md:flex-row md:items-center md:justify-between">
          <p>© {YEAR} The Interlock ATL — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="transition-colors duration-300 hover:text-gold">
              Back to Top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
