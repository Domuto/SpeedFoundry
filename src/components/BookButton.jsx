const FALLBACK_URL = "https://www.instagram.com/speedfoundry/";

/**
 * Opens the AutoOps appointment scheduler (script loaded in index.html).
 * Falls back to Instagram if the AutoOps script hasn't loaded or is blocked.
 */
export function openScheduler() {
  if (window.AutoOps?.show) {
    window.AutoOps.show();
  } else {
    window.open(FALLBACK_URL, "_blank", "noopener,noreferrer");
  }
}

export default function BookButton({
  className = "btn btn-solid",
  children = "Book Appointment",
  onClick,
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openScheduler();
      }}
    >
      {children}
    </button>
  );
}
