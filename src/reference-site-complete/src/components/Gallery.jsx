import Reveal from "./Reveal.jsx";

const images = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg"];

export default function Gallery() {
  return (
    <section className="section-pad">
      <div className="mb-10 flex items-end justify-between gap-6">
        <Reveal><div><p className="label">N° 008 — Around The District</p><h2 className="mt-5 font-display text-4xl text-bone md:text-6xl">Seen at The Interlock.</h2></div></Reveal>
        <Reveal delay={120}><a href="https://www.instagram.com/theinterlockatl/" target="_blank" rel="noreferrer" className="hidden text-[11px] uppercase tracking-[0.28em] text-gold md:block">Instagram ↗</a></Reveal>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, i) => (
          <Reveal key={image} delay={i * 80}><img src={`/images/${image}`} alt="The Interlock" className="aspect-square w-full object-cover" /></Reveal>
        ))}
      </div>
    </section>
  );
}
