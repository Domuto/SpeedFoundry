/**
 * <Wordmark> — the text logo for The Speed Foundry.
 * "SPEED" in solid off-white, "FOUNDRY" in blaze red, tightly stacked
 * in the Anton poster face. Size it via the className font-size.
 *
 * Props:
 *   stacked   – true (default) stacks the two words; false renders inline.
 *   className – font-size / color utilities for the wrapper.
 */
export default function Wordmark({ stacked = true, className = "" }) {
  return (
    <span
      className={`font-display uppercase leading-[0.82] tracking-tight text-bone ${className}`}
      aria-label="The Speed Foundry"
    >
      <span className={stacked ? "block" : ""}>Speed</span>
      <span className={`text-gold ${stacked ? "block" : " "}`}>
        {stacked ? "Foundry" : " Foundry"}
      </span>
    </span>
  );
}
