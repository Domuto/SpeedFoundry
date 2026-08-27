import { Link } from "react-router-dom";

export default function ContentPage({ eyebrow, title, description, ctaLabel, ctaHref }) {
  const external = ctaHref?.startsWith("http") || ctaHref?.startsWith("mailto:");
  const button = external ? <a href={ctaHref} target={ctaHref.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="btn btn-solid">{ctaLabel}</a> : <Link to={ctaHref || "/"} className="btn btn-solid">{ctaLabel}</Link>;
  return (
    <section className="hero-graphic relative flex min-h-[72vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-ink/15 to-ink/75" />
      <div className="relative z-10 section-pad mx-auto w-full max-w-6xl">
        <p className="label">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-5xl uppercase leading-[0.95] text-bone md:text-8xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-bone/75 md:text-lg">{description}</p>
        <div className="mt-9">{button}</div>
      </div>
    </section>
  );
}
