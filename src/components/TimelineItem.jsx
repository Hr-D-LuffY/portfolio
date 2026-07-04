export default function TimelineItem({ period, title, subtitle, description, filled }) {
  return (
    <div className="relative group">
      <div
        className={`absolute -left-[61px] top-1 w-6 h-6 rounded-full bg-background border-2 transition-all group-hover:scale-125 ${
          filled
            ? "border-primary ring-8 ring-primary/10"
            : "border-white/20 group-hover:border-primary"
        }`}
      />
      <div className="glass-card p-10 rounded-[32px] group-hover:border-primary/50">
        <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] font-bold">
          {period}
        </span>
        <h4 className="font-display text-xl font-bold mt-3 tracking-tight">{title}</h4>
        <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6 opacity-60">
          {subtitle}
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
