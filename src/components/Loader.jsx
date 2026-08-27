import { useEffect, useState } from "react";

/**
 * Cinematic entry screen — "Entering JRD Motorsport".
 * Holds for ~2.4s, slides up over ~0.9s, then unmounts.
 *
 * To speed it up / slow it down, adjust the two timeout values
 * below (keep doneTimer ≈ exitTimer + 900ms so the slide finishes).
 */
export default function Loader({ onDone }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 1600); // start slide-up
    const doneTimer = setTimeout(() => onDone?.(), 2500); // unmount
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      aria-hidden="true"
      className={`loader fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink ${
        exiting ? "loader--exit" : ""
      }`}
    >
      {/* Background image + dark veil */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/jrd/rally-peugeot.jpg"
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <img
          src="/images/jrd-logo.png"
          alt="JRD Motorsport"
          className="loader__title w-64 md:w-96"
        />
        <p className="loader__label label">Hoschton, GA</p>

        <span className="loader__line block h-px w-40 bg-gold/70 md:w-56" />
      </div>
    </div>
  );
}

