import Reveal from "./Reveal.jsx";
import { directory } from "../data/directory.js";

export default function FeaturedTenants() {
  const featured = directory.filter((item) => item.featured).slice(0, 3);
  return (
    <section className="section-pad">
      <Reveal><p className="label">N° 004 — Featured Places</p></Reveal>
      <Reveal delay={100}><h2 className="mt-5 font-display text-4xl text-bone md:text-6xl">Worth making plans for.</h2></Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {featured.map((item, i) => (
          <Reveal key={item.name} delay={i * 100}>
            <article className="group relative min-h-[420px] overflow-hidden border border-bone/10">
              <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              <div className="veil-card absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="label">{item.category}</p>
                <h3 className="mt-3 font-display text-4xl text-bone">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/80">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
