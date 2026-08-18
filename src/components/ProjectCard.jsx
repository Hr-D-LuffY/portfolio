import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import StatusTag from "./ui/StatusTag";
import TechBadge from "./ui/TechBadge";

export default function ProjectCard({ project, index = 0 }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{
				duration: 0.5,
				delay: index * 0.08,
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={{ y: -6 }}
			className="group relative"
		>
			<Link
				to={`/projects/${project.slug}`}
				className="block h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--accent)]/50 focus-visible:border-[var(--accent)]/50"
			>
				<div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--bg-elevated)]">
					<img
						src={`/images/projects/${project.image}.png`}
						alt={`${project.name} interface preview`}
						className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
						loading="lazy"
					/>
					<div className="absolute left-3 top-3">
						<StatusTag
							label={`status: ${project.status}`}
							tone={project.status}
							pulse={false}
						/>
					</div>
				</div>

				<div className="p-6">
					<div className="flex items-start justify-between gap-3">
						<div>
							<h3 className="font-display text-lg font-semibold text-[var(--text)]">
								{project.name}
							</h3>
							<p className="mt-0.5 font-mono text-xs text-[var(--text-dim)]">
								{project.tagline}
							</p>
						</div>
						<ArrowUpRight
							className="mt-1 h-4 w-4 shrink-0 text-[var(--text-dim)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
							aria-hidden="true"
						/>
					</div>

					<p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
						{project.summary}
					</p>

					<div className="mt-5 flex flex-wrap gap-1.5">
						{project.tech.slice(0, 4).map((t) => (
							<TechBadge key={t} name={t} size="sm" />
						))}
						{project.tech.length > 4 && (
							<TechBadge name={`+${project.tech.length - 4}`} size="sm" />
						)}
					</div>
				</div>
			</Link>
		</motion.div>
	);
}
