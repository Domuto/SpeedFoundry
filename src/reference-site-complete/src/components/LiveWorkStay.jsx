import Reveal from "./Reveal.jsx";

const cards = [
  { title: "Live", copy: "Residences connected to the energy of West Midtown.", image: "/images/live.jpg" },
  { title: "Work", copy: "Creative office space with the district outside your door.", image: "/images/work.jpg" },
  { title: "Stay", copy: "Boutique hospitality in the middle of everything.", image: "/images/stay.jpg" },
];

export default function LiveWorkStay() {
  return (
    <section className="section-pad border-t border-bone/10">
      <Reveal><p className="label">N° 007 — Live / Work / Stay</p></Reveal>
      <div className="mt-10 grid gap-px bg-bone/10 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 100} className="bg-ink">
            <article className="group relative min-h-[500px] overflow-hidden">
              <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              <div className="veil-card absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-8"><h3 className="font-display text-5xl text-bone">{card.title}</h3><p className="mt-3 max-w-xs text-sm leading-relaxed text-sand/80">{card.copy}</p></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
