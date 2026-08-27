import { useEffect, useState } from "react";

import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import Spaces from "./components/Spaces.jsx";
import NightlyEvents from "./components/NightlyEvents.jsx";
import PrivateEvents from "./components/PrivateEvents.jsx";
import Gallery from "./components/Gallery.jsx";
import PlanVisit from "./components/PlanVisit.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

/**
 * ============================================================
 * JRD MOTORSPORT — App shell
 * ============================================================
 * Owns one piece of shared state:
 *   `loading` – true while the cinematic Loader is on screen.
 *               The Hero waits for this before animating in.
 *
 * Section order lives in the JSX below — reorder freely.
 */
export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock page scroll while the loader is covering the screen.
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      <Navbar />

      <main>
        <Hero ready={!loading} />
        <Story />
        <Spaces />
        <NightlyEvents />
        <PrivateEvents />
        <Gallery />
        <PlanVisit />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

