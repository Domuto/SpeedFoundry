import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import Spaces from "./components/Spaces.jsx";
import NightlyEvents from "./components/NightlyEvents.jsx";
import PrivateEvents from "./components/PrivateEvents.jsx";
import Gallery from "./components/Gallery.jsx";
import PlanVisit from "./components/PlanVisit.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import BlogPage from "./pages/BlogPage.jsx";

/**
 * ============================================================
 * THE SPEED FOUNDRY — App shell
 * ============================================================
 * Owns one piece of shared state:
 *   `loading` – true while the cinematic Loader is on screen.
 *               The Hero waits for this before animating in.
 *
 * Section order lives in the JSX below — reorder freely.
 */
function HomePage() {
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
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/manage" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<main className="min-h-screen pt-40 text-center">Page not found</main>} />
      </Routes>
      <Footer />
    </>
  );
}
