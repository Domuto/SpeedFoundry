import { useState } from "react";
import Reveal from "./Reveal.jsx";

/**
 * N° 008 — Contact & Reservations.
 * Front-end only for now: on submit it logs the inquiry and swaps
 * to a confirmation state. To wire it up later, replace the body of
 * handleSubmit with a real call — e.g. Web3Forms, Formspree, or a
 * small serverless function — the UI won't need to change.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    console.log("Inquiry submitted:", form); // ← replace with a real integration
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-bone/10 bg-charcoal/40">
      <div className="section-pad">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: statement + quick contact */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label">N° 008 — Contact &amp; Inquiries</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-bone md:text-6xl">
                Let's build <span className="text-gold">something.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-sm leading-relaxed text-sand/75 md:text-base">
                Questions on fitment, pricing, or a full build? Send us a note
                or slide into the DMs — we'll help you find the right parts.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.instagram.com/speedfoundry/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid"
                >
                  Message @speedfoundry
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: inquiry form */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              {submitted ? (
                <div className="border border-gold/40 px-8 py-7">
                  <p className="font-display text-2xl font-light text-gold">
                    Message sent.
                  </p>
                  <p className="mt-2 text-sm text-sand/70">
                    Thanks for reaching out — our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-5 border border-bone/15 bg-ink/40 p-6 sm:grid-cols-2 sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0"
                >
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Full name"
                    aria-label="Full name"
                    className="w-full border border-bone/25 bg-transparent px-4 py-3.5 text-base tracking-wide text-bone outline-none transition-colors duration-300 placeholder:text-sand/40 focus:border-gold sm:border-0 sm:border-b sm:px-1 sm:py-4 sm:text-sm sm:col-span-1"
                  />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="Phone (optional)"
                    aria-label="Phone number"
                    className="w-full border border-bone/25 bg-transparent px-4 py-3.5 text-base tracking-wide text-bone outline-none transition-colors duration-300 placeholder:text-sand/40 focus:border-gold sm:border-0 sm:border-b sm:px-1 sm:py-4 sm:text-sm sm:col-span-1"
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="Email address"
                    aria-label="Email address"
                    className="w-full border border-bone/25 bg-transparent px-4 py-3.5 text-base tracking-wide text-bone outline-none transition-colors duration-300 placeholder:text-sand/40 focus:border-gold sm:border-0 sm:border-b sm:px-1 sm:py-4 sm:text-sm sm:col-span-2"
                  />
                  <select
                    value={form.interest}
                    onChange={update("interest")}
                    aria-label="Interest"
                    className={`w-full appearance-none border border-bone/25 bg-transparent px-4 py-3.5 text-base tracking-wide outline-none transition-colors duration-300 focus:border-gold sm:border-0 sm:border-b sm:px-1 sm:py-4 sm:text-sm sm:col-span-2 ${form.interest ? "text-bone" : "text-sand/40"}`}
                  >
                    <option value="" className="bg-ink text-sand">I'm interested in… (optional)</option>
                    <option value="Engine" className="bg-ink text-bone">Engine</option>
                    <option value="Exhaust" className="bg-ink text-bone">Exhaust</option>
                    <option value="Suspension" className="bg-ink text-bone">Suspension</option>
                    <option value="Intakes" className="bg-ink text-bone">Intakes</option>
                    <option value="Full Build" className="bg-ink text-bone">Full Build</option>
                    <option value="Merch" className="bg-ink text-bone">Merch</option>
                  </select>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your car and what you're after"
                    aria-label="Message"
                    className="w-full resize-none border border-bone/25 bg-transparent px-4 py-3.5 text-base tracking-wide text-bone outline-none transition-colors duration-300 placeholder:text-sand/40 focus:border-gold sm:border-0 sm:border-b sm:px-1 sm:py-4 sm:text-sm sm:col-span-2"
                  />
                  <button type="submit" className="btn btn-solid w-full sm:col-span-2 sm:w-fit">
                    Send Message
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

