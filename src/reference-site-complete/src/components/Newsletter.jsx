import Reveal from "./Reveal.jsx";

export default function Newsletter() {
  return (
    <section className="bg-gold text-ink">
      <div className="section-pad grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal><p className="text-[11px] font-bold uppercase tracking-[0.3em]">Stay connected</p></Reveal>
          <Reveal delay={100}><h2 className="mt-5 font-display text-5xl md:text-7xl">Get the Westside in your inbox.</h2></Reveal>
        </div>
        <Reveal delay={180} className="lg:col-span-5">
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="EMAIL ADDRESS" className="min-w-0 flex-1 border border-ink/35 bg-transparent px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] placeholder:text-ink/60 focus:outline-none" />
            <button className="btn border-ink bg-ink text-bone hover:bg-bone hover:text-ink">Subscribe</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
