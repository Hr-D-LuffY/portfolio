/**
 * Ambient backdrop: faint grid + one or two soft teal/amber glows.
 * Tasteful and static-feeling even though the glows are separately
 * animated — kept subtle per the "not distracting" brief.
 */
export default function GridBackdrop({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[var(--accent)]/10 blur-[110px]" />
      <div className="absolute top-1/3 right-0 h-[360px] w-[360px] rounded-full bg-[var(--warm)]/[0.06] blur-[110px]" />
    </div>
  );
}
