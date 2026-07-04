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
			className={`group glass-card rounded-[40px] overflow-hidden animate-reveal ${stagger} bg-white/5 backdrop-blur-xl border-white/10`}
		>
			<div className="relative aspect-[16/10] overflow-hidden p-3 pb-0">
				<img
					className="w-full h-full object-cover rounded-[32px] group-hover:scale-110 transition-transform duration-1000"
					alt={description}
					src={image}
				/>
				<div className="absolute top-8 right-8 bg-background/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 font-label-md text-caption uppercase tracking-widest font-bold">
					{tag}
				</div>
			</div>
			<div className="p-10 pt-8">
				<h3 className="font-display text-2xl mb-4 tracking-tight">{title}</h3>
				<p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
					{description}
				</p>
				<Link
					to={`/projects/${slug}`}
					className="block text-center w-full py-4 rounded-2xl border border-primary/30 bg-primary/5 text-primary font-label-md text-label-md uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-on-primary transition-all"
				>
					View Details
				</Link>
			</div>
		</div>
	);
}
