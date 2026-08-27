import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

export default function PlanVisit() {
  return (
    <section className="section-pad">
      <div className="grid overflow-hidden border border-bone/10 lg:grid-cols-2">
        <Reveal className="min-h-[430px]">
          <img src="/images/visit.jpg" alt="Visit The Interlock" className="h-full w-full object-cover" />
        </Reveal>
        <div className="flex flex-col justify-center bg-charcoal p-10 md:p-16">
          <Reveal><p className="label">N° 006 — Plan Your Visit</p></Reveal>
          <Reveal delay={100}><h2 className="mt-5 font-display text-4xl text-bone md:text-6xl">One address. A full day.</h2></Reveal>
          <Reveal delay={180}><p className="mt-6 max-w-lg text-sm leading-relaxed text-sand/75 md:text-base">Find parking, directions, district hours, accessibility information, and everything you need before arriving.</p></Reveal>
          <Reveal delay={260}><Link to="/plan-your-visit" className="btn btn-solid mt-8 self-start">Plan Your Visit</Link></Reveal>
        </div>
      </div>
    </section>
  );
}
