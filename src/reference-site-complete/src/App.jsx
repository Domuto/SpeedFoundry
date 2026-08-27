import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import DirectoryPage from "./pages/DirectoryPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import PlanVisitPage from "./pages/PlanVisitPage.jsx";
import FoodDrinksPage from "./pages/FoodDrinksPage.jsx";
import ContentPage from "./pages/ContentPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <main id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/event-calendar-2" element={<EventsPage />} />
          <Route path="/plan-your-visit" element={<PlanVisitPage />} />
          <Route path="/food-drinks" element={<FoodDrinksPage />} />

          <Route
            path="/news"
            element={
              <ContentPage
                eyebrow="News"
                title="District updates and announcements."
                description="This route is now mapped so your remake preserves the same page URL as the original site. You can later replace this with a full news grid or CMS feed."
                ctaLabel="See Events"
                ctaHref="/event-calendar-2"
              />
            }
          />
          <Route
            path="/about-us"
            element={
              <ContentPage
                eyebrow="About Us"
                title="An unmatched West Midtown destination."
                description="The Interlock brings together restaurants, shopping, entertainment, residences, offices, and hospitality in one connected district."
                ctaLabel="Plan Your Visit"
                ctaHref="/plan-your-visit"
              />
            }
          />
          <Route
            path="/contact-us"
            element={
              <ContentPage
                eyebrow="Contact"
                title="Let us help you find your vibe."
                description="Reach the team at theinterlockatlanta@gmail.com or visit us at 1115 Howell Mill Rd NW, Atlanta, GA 30318."
                ctaLabel="Email The Interlock"
                ctaHref="mailto:theinterlockatlanta@gmail.com"
              />
            }
          />
          <Route
            path="/lease"
            element={
              <ContentPage
                eyebrow="Lease"
                title="Retail and office opportunities."
                description="This leasing URL is now routed and ready for your custom lead form, brochure download, and current availability details."
                ctaLabel="Contact Us"
                ctaHref="/contact-us"
              />
            }
          />

          <Route
            path="/bellyard"
            element={
              <ContentPage
                eyebrow="Bellyard Hotel"
                title="Stay the night at The Interlock."
                description="The Bellyard route now exists in your rebuild so it can be expanded into a dedicated hotel page with rates, amenities, and booking links."
                ctaLabel="Plan Your Visit"
                ctaHref="/plan-your-visit"
              />
            }
          />
          <Route
            path="/directory/bellyard"
            element={
              <ContentPage
                eyebrow="Directory"
                title="Bellyard Hotel"
                description="This URL is preserved for parity with the source website and can be upgraded into a full tenant detail page."
                ctaLabel="Open Directory"
                ctaHref="/directory"
              />
            }
          />
          <Route
            path="/theriveatlanta"
            element={
              <ContentPage
                eyebrow="Live"
                title="The Rive Atlanta"
                description="Residential partner page route is mapped and ready for full content, floorplans, and inquiry flows."
                ctaLabel="Contact Us"
                ctaHref="/contact-us"
              />
            }
          />
          <Route
            path="/windsor-apartments"
            element={
              <ContentPage
                eyebrow="Live"
                title="Windsor Apartments"
                description="Apartment partner route is preserved so the remake keeps matching page coverage."
                ctaLabel="Contact Us"
                ctaHref="/contact-us"
              />
            }
          />
          <Route
            path="/monte-hewett"
            element={
              <ContentPage
                eyebrow="Live"
                title="Monte Hewett"
                description="Homebuilder partner route is preserved for one-to-one URL compatibility."
                ctaLabel="Contact Us"
                ctaHref="/contact-us"
              />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
