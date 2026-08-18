import { cn } from "../../lib/utils";

/**
 * A single tech-stack pill, e.g. inside `stack: node, postgres, prisma`
 * meta rows. `Icon` is optional so plain tags (RBAC-adjacent labels etc.)
 * still render cleanly.
 */
export default function TechBadge({ name, Icon, size = "md", className }) {
  const isSm = size === "sm";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] font-mono text-[var(--text-muted)] transition-colors",
        isSm ? "px-2 py-1 text-[11px]" : "px-3 py-1.5 text-xs",
        className
      )}
    >
      {Icon && <Icon className={cn(isSm ? "h-3 w-3" : "h-3.5 w-3.5", "text-[var(--accent)]")} aria-hidden="true" />}
      {name}
    </span>
  );
}
