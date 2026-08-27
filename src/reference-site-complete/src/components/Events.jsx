import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

const events = [
  { date: "AUG 02", title: "Westside Summer Social", meta: "Courtyard · 6 PM" },
  { date: "AUG 10", title: "Sunday Market", meta: "The District · 11 AM" },
  { date: "AUG 22", title: "Rooftop After Dark", meta: "Puttshack Terrace · 8 PM" },
];

export default function Events() {
  return (
    <section className="border-y border-bone/10 bg-blue">
      <div className="section-pad">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><p className="label text-bone">N° 005 — Events</p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 font-display text-5xl text-bone md:text-7xl">What’s on.</h2></Reveal>
            <Reveal delay={180}><Link to="/event-calendar-2" className="btn btn-ghost mt-8">View Calendar</Link></Reveal>
          </div>
          <div className="lg:col-span-8">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 100}>
                <article className="grid gap-4 border-t border-bone/20 py-7 sm:grid-cols-[120px_1fr_auto] sm:items-center">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-bone/70">{event.date}</p>
                  <div><h3 className="font-display text-2xl text-bone md:text-3xl">{event.title}</h3><p className="mt-1 text-sm text-bone/65">{event.meta}</p></div>
                  <span className="text-gold">↗</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
