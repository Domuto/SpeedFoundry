import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LINKS = [
  { label: "Directory", to: "/directory" },
  { label: "Events", to: "/event-calendar-2" },
  { label: "Food + Drinks", to: "/food-drinks" },
  { label: "Plan Visit", to: "/plan-your-visit" },
  { label: "News", to: "/news" },
  { label: "About", to: "/about-us" },
  { label: "Lease", to: "/lease" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-bone/10 bg-ink/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}>
        <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
          <Link to="/" className="cursor-pointer text-left" aria-label="Back to top">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-bone">The Interlock</span>
            <span className="ml-2 text-[10px] uppercase tracking-[0.3em] text-gold">ATL</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to} className={({ isActive }) => `text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 hover:text-gold ${isActive ? "text-gold" : "text-bone/85"}`}>{link.label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <Link to="/plan-your-visit" className="btn btn-ghost btn-sm hidden md:inline-flex">Plan Visit</Link>
            <button onClick={() => setOpen(true)} className="flex h-10 w-10 cursor-pointer flex-col items-end justify-center gap-1.5 lg:hidden" aria-label="Open menu">
              <span className="block h-px w-7 bg-bone" />
              <span className="block h-px w-5 bg-gold" />
            </button>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[60] flex flex-col bg-ink transition-opacity duration-500 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="flex items-center justify-between border-b border-bone/10 px-6 py-5">
          <span className="text-sm uppercase tracking-[0.3em] text-bone">The Interlock <span className="text-[10px] text-gold">ATL</span></span>
          <button onClick={() => setOpen(false)} className="cursor-pointer text-[11px] uppercase tracking-[0.3em] text-sand transition-colors hover:text-gold" aria-label="Close menu">Close</button>
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
          {LINKS.map((link, i) => (
            <li key={link.label} style={{ transitionDelay: `${open ? 70 * i : 0}ms` }} className={`transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
              <NavLink to={link.to} onClick={() => setOpen(false)} className="cursor-pointer py-2 font-display text-4xl font-light text-bone transition-colors duration-300 hover:text-gold">{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="border-t border-bone/10 px-8 py-6">
          <p className="label mb-2">Visit</p>
          <p className="text-sm text-sand/80">1115 Howell Mill Rd NW, Atlanta, GA 30318</p>
          <a href="mailto:theinterlockatlanta@gmail.com" className="mt-1 block text-sm text-gold">theinterlockatlanta@gmail.com</a>
        </div>
      </div>
    </>
  );
}
