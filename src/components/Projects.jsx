import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../context/project";

export default function Projects() {
	return (
		<section id="projects" className="py-section-gap relative">
			<div className="container max-w-container-max mx-auto px-gutter relative z-10">
				<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 animate-reveal stagger-1">
					<div>
						<h2 className="font-display text-headline-lg mb-6 tracking-tight">
							Featured <span className="text-primary italic">Creations</span>
						</h2>
						<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
							Selected works that showcase my technical depth and commitment to
							high-end design quality.
						</p>
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-10">
					{PROJECTS.map((project) => (
						<ProjectCard key={project.slug} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
