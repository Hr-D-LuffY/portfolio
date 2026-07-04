export default function TimelineItem({
	period,
	title,
	subtitle,
	description,
	filled,
}) {
	return (
		<div className="relative group">
			<div
				className={`absolute -left-[33px] xs:-left-[41px] sm:-left-[49px] top-1 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full bg-background border-2 transition-all group-hover:scale-125 ${
					filled ?
						"border-primary ring-4 xs:ring-6 sm:ring-8 ring-primary/10"
					:	"border-white/20 group-hover:border-primary"
				}`}
			/>
			<div className="glass-card p-5 xs:p-7 sm:p-10 rounded-2xl xs:rounded-[28px] sm:rounded-[32px] group-hover:border-primary/50">
				<span className="font-label-md text-[11px] xs:text-xs sm:text-label-md text-primary uppercase tracking-[0.15em] xs:tracking-[0.2em] font-bold">
					{period}
				</span>
				<h4 className="font-display text-base xs:text-lg sm:text-xl font-bold mt-2 xs:mt-3 tracking-tight">
					{title}
				</h4>
				<p className="font-label-md text-[11px] xs:text-xs sm:text-label-md text-on-surface-variant uppercase tracking-wide sm:tracking-widest mb-4 xs:mb-5 sm:mb-6 opacity-60">
					{subtitle}
				</p>
				<p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);
}
