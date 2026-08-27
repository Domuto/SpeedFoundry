import { useEffect, useRef, useState } from "react";

/**
 * <Reveal> — wraps any content in a soft fade-up that triggers
 * the first time it scrolls into view.
 *
 * Props:
 *   delay     – ms to stagger the animation (default 0)
 *   className – extra classes for the wrapper div
 *
 * Usage:
 *   <Reveal delay={150}><h2>Headline</h2></Reveal>
 *
 * The animation itself lives in src/index.css (.reveal / .is-visible),
 * so you can tune the distance, duration, and easing in one place.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once, then stop watching
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
