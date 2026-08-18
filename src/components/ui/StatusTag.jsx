import { cn } from "../../lib/utils";

const TONE = {
  online: { dot: "bg-[var(--accent)]", text: "text-[var(--accent)]" },
  deployed: { dot: "bg-[var(--accent)]", text: "text-[var(--text-muted)]" },
  "in progress": { dot: "bg-[var(--warm)]", text: "text-[var(--text-muted)]" },
  neutral: { dot: "bg-[var(--text-dim)]", text: "text-[var(--text-muted)]" },
};

/**
 * `[● online]` style status chip — the motif that repeats across the hero,
 * project cards, and detail pages to keep the "systems dashboard" identity
 * consistent site-wide.
 */
export default function StatusTag({ label, tone = "online", pulse = true, className }) {
  const t = TONE[tone] ?? TONE.neutral;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1 font-mono text-xs",
        t.text,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", t.dot)}
          />
        )}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", t.dot)} />
      </span>
      {label}
    </span>
  );
}
