import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../context/project";

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-16 sm:py-24 md:py-section-gap relative"
		>
			<div className="container max-w-container-max mx-auto px-5 sm:px-gutter relative z-10">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14 md:mb-20 gap-5 sm:gap-8 animate-reveal stagger-1 text-center md:text-left">
					<div className="mx-auto md:mx-0">
						<h2 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-headline-lg mb-3 xs:mb-4 sm:mb-6 tracking-tight">
							Featured <span className="text-primary italic">Creations</span>
						</h2>
						<p className="font-body-lg text-sm sm:text-base md:text-body-lg text-on-surface-variant max-w-xl mx-auto md:mx-0">
							Selected works that showcase my technical depth and commitment to
							high-end design quality.
						</p>
					</div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
					{PROJECTS.map((project) => (
						<ProjectCard key={project.slug} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
