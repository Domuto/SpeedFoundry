/**
 * ============================================================
 * SERVICES — edit this file to manage the JRD Motorsport lineup.
 * ============================================================
 * Each entry supports:
 *   id          – unique string (used as the React key)
 *   day         – small eyebrow tag above the title
 *   title       – service name
 *   description – one line describing the service
 *   nextDate    – secondary tag shown with the eyebrow
 *   image       – photo for the card
 *   link        – learn-more / inquiry URL
 */
const CONTACT_URL = "#contact";

export const nightlyEvents = [
  {
    id: "arc2-rally-program",
    day: "Program",
    title: "ARC2 Rally Program",
    description: "Our flagship rally platform — engineered for accessible, top-tier American rally competition.",
    nextDate: "American Rally",
    image: "/images/venue/tng-main-1.jpg",
    link: CONTACT_URL,
  },
  {
    id: "engineering-services",
    day: "Engineering",
    title: "Engineering Services",
    description: "Precision engineering and design consultation — from concept through race-ready hardware.",
    nextDate: "Design & Build",
    image: "/images/venue/ven02.jpg",
    link: CONTACT_URL,
  },
  {
    id: "racecar-fabrication",
    day: "Fabrication",
    title: "Racecar Fabrication",
    description: "In-house builds, setup, and diagnostics — championship-caliber preparation for rally and race cars.",
    nextDate: "Builds & Setup",
    image: "/images/venue/ven05.jpg",
    link: CONTACT_URL,
  },
  {
    id: "performance-parts",
    day: "Parts",
    title: "Performance Parts",
    description: "Precision equipment and performance platforms from our technology partners, ready to ship.",
    nextDate: "Shop Parts",
    image: "/images/venue/ven08.jpg",
    link: CONTACT_URL,
  },
  {
    id: "trackside-support",
    day: "Trackside",
    title: "Trackside Support",
    description: "Full trackside and testing support for race weekends — arrive, drive, and let the crew handle the rest.",
    nextDate: "Race Weekends",
    image: "/images/venue/ven09.jpg",
    link: CONTACT_URL,
  },
  {
    id: "sponsorship-activation",
    day: "Partners",
    title: "Sponsorship Activation",
    description: "Customized branding opportunities at high-visibility rally events — your brand, on the stage.",
    nextDate: "Brand Exposure",
    image: "/images/venue/ven11.jpg",
    link: CONTACT_URL,
  },
];
