import { Link } from "react-router-dom";

export default function ProjectCard({
	slug,
	title,
	tag,
	description,
	image,
	stagger,
}) {
	return (
		<div
			className={`group glass-card rounded-2xl xs:rounded-[32px] sm:rounded-[40px] overflow-hidden animate-reveal ${stagger} bg-white/5 backdrop-blur-xl border-white/10`}
		>
			<div className="relative aspect-[16/10] overflow-hidden p-2 xs:p-2.5 sm:p-3 pb-0">
				<img
					className="w-full h-full object-cover rounded-xl xs:rounded-2xl sm:rounded-[32px] group-hover:scale-110 transition-transform duration-1000"
					alt={description}
					src={image}
				/>
				<div className="absolute top-4 right-4 xs:top-6 xs:right-6 sm:top-8 sm:right-8 bg-background/60 backdrop-blur-xl px-3 xs:px-4 py-1 xs:py-1.5 rounded-full border border-white/10 font-label-md text-[10px] xs:text-caption uppercase tracking-widest font-bold">
					{tag}
				</div>
			</div>
			<div className="p-5 xs:p-7 sm:p-10 pt-4 xs:pt-6 sm:pt-8">
				<h3 className="font-display text-lg xs:text-xl sm:text-2xl mb-2 xs:mb-3 sm:mb-4 tracking-tight">
					{title}
				</h3>
				<p className="font-body-md text-sm sm:text-base text-on-surface-variant mb-5 xs:mb-6 sm:mb-8 leading-relaxed">
					{description}
				</p>
				<Link
					to={`/projects/${slug}`}
					className="block text-center w-full py-3 xs:py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/5 text-primary font-label-md text-[11px] xs:text-xs sm:text-label-md uppercase tracking-[0.15em] xs:tracking-[0.2em] font-bold hover:bg-primary hover:text-on-primary transition-all"
				>
					View Details
				</Link>
			</div>
		</div>
	);
}
