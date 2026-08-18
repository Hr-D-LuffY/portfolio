import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ProjectCard from "../components/ProjectCard";
import { getFeaturedProjects } from "../data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="scroll-mt-20 border-t border-[var(--border)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            command="ls ./projects"
            title="Featured projects"
            description="A few things I've built end to end — each one links out to a full case study."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
