import { useEffect, useState } from "react";
import Wordmark from "./Wordmark.jsx";

/**
 * Cinematic entry screen — "Entering The Speed Foundry".
 * Holds for ~1.6s, slides up over ~0.9s, then unmounts.
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
      {/* Forge backdrop + dark veil */}
      <div className="hero-graphic absolute inset-0" />
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <div className="loader__title">
          <Wordmark className="text-[clamp(2.25rem,8vw,4.5rem)]" />
        </div>
        <p className="loader__label label">Peachtree Corners, GA</p>

        <span className="loader__line block h-px w-40 bg-gold/70 md:w-56" />
      </div>
    </div>
  );
}

