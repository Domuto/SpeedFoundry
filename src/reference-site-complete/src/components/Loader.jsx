import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setExit(true), 1600);
    const doneTimer = window.setTimeout(() => onDone?.(), 2500);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`loader fixed inset-0 z-[100] flex items-center justify-center bg-ink ${exit ? "loader--exit" : ""}`}>
      <div className="w-full max-w-xl px-8 text-center">
        <p className="loader__label label">West Midtown — Atlanta</p>
        <h1 className="loader__title mt-5 font-display text-6xl uppercase leading-none text-bone md:text-8xl">
          The <span className="text-gold">Interlock</span>
        </h1>
        <div className="loader__line mt-8 h-px bg-gold" />
      </div>
    </div>
  );
}
