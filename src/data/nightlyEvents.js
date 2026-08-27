/**
 * ============================================================
 * SERVICES — edit this file to manage the Kingpin Racing lineup.
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
    id: "pro-racing-team",
    day: "Team",
    title: "Professional Racing Team",
    description: "A winning team currently competing in WRL and the IMSA Michelin Pilot Challenge, with a focus on GT3 & GT4 machinery.",
    nextDate: "WRL · IMSA",
    image: "/images/racing/kp13.jpg",
    link: "https://www.imsa.com/racing-teams/kingpin-racing-no-53/",
  },
  {
    id: "driver-development",
    day: "Coaching",
    title: "Driver Development",
    description: "Become your quickest self — mentorship, simulation training, and real-world track coaching from pro drivers.",
    nextDate: "All Levels",
    image: "/images/racing/kp05.jpg",
    link: CONTACT_URL,
  },
  {
    id: "trackside-support",
    day: "Trackside",
    title: "Trackside Support",
    description: "Full trackside support and race weekend logistics — arrive, drive, and let the crew handle the rest.",
    nextDate: "Race Weekends",
    image: "/images/racing/kp16.jpg",
    link: CONTACT_URL,
  },
  {
    id: "performance-tuning",
    day: "Engineering",
    title: "Performance Tuning",
    description: "Every millisecond counts — vehicle setup, diagnostics, and engineering consultation to unlock your car's pace.",
    nextDate: "Setup & Data",
    image: "/images/racing/kp15.jpg",
    link: CONTACT_URL,
  },
  {
    id: "sponsorship-activation",
    day: "Partners",
    title: "Sponsorship Activation",
    description: "Customized branding opportunities at high-visibility race events — your brand, on the podium.",
    nextDate: "Brand Exposure",
    image: "/images/racing/kp09.jpg",
    link: CONTACT_URL,
  },
  {
    id: "event-hosting",
    day: "Experience",
    title: "Event Hosting",
    description: "VIP hospitality at race weekends, behind-the-scenes team access, and live racing experiences.",
    nextDate: "VIP Hospitality",
    image: "/images/racing/kp11.jpg",
    link: CONTACT_URL,
  },
];
