import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import GridBackdrop from "../components/ui/GridBackdrop";
import Reveal from "../components/ui/Reveal";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "../data/projects";

export default function AllProjects() {
	const all = getAllProjects();

	return (
		<div className="relative">
			<section className="relative overflow-hidden border-b border-[var(--border)] py-20 sm:py-24">
				<GridBackdrop />
				<div className="relative mx-auto max-w-6xl px-5 sm:px-8">
					<Link
						to="/"
						className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
					>
						<ArrowLeft className="h-3.5 w-3.5" />
						back home
					</Link>

					<Reveal delay={0.05}>
						<p className="mt-6 font-mono text-sm text-[var(--accent)]">
							<span className="text-[var(--text-dim)]">habibur@dev:~$</span> ls
							-la ./projects
						</p>
						<h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
							All Projects
						</h1>
						<p className="mt-4 max-w-xl text-[var(--text-muted)]">
							Every project I've shipped or actively maintain, from full-stack
							marketplaces to small developer tools. This list grows as I build
							more.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="py-16 sm:py-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-8">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{all.map((project, i) => (
							<ProjectCard key={project.slug} project={project} index={i} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
