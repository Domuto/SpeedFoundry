import { useEffect, useState } from "react";

import Loader from "../components/Loader.jsx";
import Hero from "../components/Hero.jsx";
import Intro from "../components/Intro.jsx";
import DestinationSections from "../components/DestinationSections.jsx";
import Directory from "../components/Directory.jsx";
import FeaturedTenants from "../components/FeaturedTenants.jsx";
import Events from "../components/Events.jsx";
import PlanVisit from "../components/PlanVisit.jsx";
import LiveWorkStay from "../components/LiveWorkStay.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Gallery from "../components/Gallery.jsx";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const goToDirectory = (category) => {
    setFilter(category);
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      <Hero ready={!loading} onExplore={goToDirectory} />
      <Intro />
      <DestinationSections onExplore={goToDirectory} />
      <Directory filter={filter} setFilter={setFilter} />
      <FeaturedTenants />
      <Events />
      <PlanVisit />
      <LiveWorkStay />
      <Newsletter />
      <Gallery />
    </>
  );
}
