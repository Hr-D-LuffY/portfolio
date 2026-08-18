import { Link, Navigate, useParams } from "react-router-dom";
import {
	ArrowLeft,
	ExternalLink,
	CheckCircle2,
	Lightbulb,
	Wrench,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import Reveal from "../components/ui/Reveal";
import StatusTag from "../components/ui/StatusTag";
import TechBadge from "../components/ui/TechBadge";
import ProjectCard from "../components/ProjectCard";
import GridBackdrop from "../components/ui/GridBackdrop";
import { getAllProjects, getProjectBySlug } from "../data/projects";
import { TECH_ICON } from "../data/techIcons";

export default function ProjectDetail() {
	const { slug } = useParams();
	const project = getProjectBySlug(slug);

	if (!project) {
		return <Navigate to="/projects" replace />;
	}

	const { links } = project;
	const hasBothRepos = links.client && links.server;
	const otherProjects = getAllProjects()
		.filter((p) => p.slug !== project.slug)
		.slice(0, 2);

	return (
		<div className="relative">
			{/* Hero banner */}
			<section className="relative overflow-hidden border-b border-[var(--border)] pt-14 pb-14 sm:pt-16">
				<GridBackdrop />
				<div className="relative mx-auto max-w-5xl px-5 sm:px-8">
					<Link
						to="/projects"
						className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
					>
						<ArrowLeft className="h-3.5 w-3.5" />
						back to projects
					</Link>

					<Reveal delay={0.05} className="mt-6">
						<StatusTag
							label={`status: ${project.status}`}
							tone={project.status}
						/>
						<h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
							{project.name}
						</h1>
						<p className="mt-3 max-w-2xl text-lg text-[var(--text-muted)]">
							{project.summary}
						</p>

						<div className="mt-7 flex flex-wrap gap-3">
							{links.live && (
								<a
									href={links.live}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 font-mono text-sm font-medium text-[#06120f] transition-transform hover:-translate-y-0.5"
								>
									<ExternalLink className="h-4 w-4" />
									Live demo
								</a>
							)}
							{links.client && (
								<a
									href={links.client}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
								>
									<SiGithub className="h-4 w-4" />
									{hasBothRepos ? "Client repo" : "GitHub"}
								</a>
							)}
							{links.server && (
								<a
									href={links.server}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
								>
									<SiGithub className="h-4 w-4" />
									{hasBothRepos ? "Server repo" : "GitHub"}
								</a>
							)}
						</div>
					</Reveal>

					<Reveal delay={0.12} className="mt-10">
						<div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-2xl shadow-black/30">
							<img
								src={`/images/projects/${project.image}.png`}
								alt={`${project.name} interface preview`}
								className="w-full"
							/>
						</div>
					</Reveal>
				</div>
			</section>

			{/* Body */}
			<section className="py-16 sm:py-20">
				<div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_300px] lg:gap-14">
					<div className="space-y-14">
						{/* Description */}
						<Reveal>
							<p className="font-mono text-xs text-[var(--text-dim)]">
								01 — overview
							</p>
							<div className="mt-3 space-y-4">
								{project.description.map((para, i) => (
									<p
										key={i}
										className="text-base leading-relaxed text-[var(--text-muted)]"
									>
										{para}
									</p>
								))}
							</div>
						</Reveal>

						{/* Key features */}
						<Reveal>
							<p className="font-mono text-xs text-[var(--text-dim)]">
								02 — key features
							</p>
							<div className="mt-4 grid gap-3 sm:grid-cols-2">
								{project.features.map((feature) => (
									<div
										key={feature}
										className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
									>
										<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
										<p className="text-sm leading-relaxed text-[var(--text)]">
											{feature}
										</p>
									</div>
								))}
							</div>
						</Reveal>

						{/* Role */}
						<Reveal>
							<p className="font-mono text-xs text-[var(--text-dim)]">
								03 — my role
							</p>
							<div className="mt-4 flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
								<Wrench className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warm)]" />
								<p className="text-sm leading-relaxed text-[var(--text)]">
									{project.role}
								</p>
							</div>
						</Reveal>

						{/* Challenges & learnings */}
						<Reveal>
							<p className="font-mono text-xs text-[var(--text-dim)]">
								04 — challenges &amp; learnings
							</p>
							<div className="mt-4 space-y-3">
								{project.challenges.map((challenge, i) => (
									<div
										key={i}
										className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
									>
										<Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
										<p className="text-sm leading-relaxed text-[var(--text-muted)]">
											{challenge}
										</p>
									</div>
								))}
							</div>
						</Reveal>
					</div>

					{/* Sidebar */}
					<div className="lg:sticky lg:top-24 lg:self-start">
						<Reveal delay={0.1}>
							<div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
								<p className="font-mono text-xs uppercase tracking-wide text-[var(--text-dim)]">
									stack: {project.tech.length} tools
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{project.tech.map((t) => (
										<TechBadge key={t} name={t} Icon={TECH_ICON[t]} />
									))}
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* More projects */}
			{otherProjects.length > 0 && (
				<section className="border-t border-[var(--border)] py-16 sm:py-20">
					<div className="mx-auto max-w-5xl px-5 sm:px-8">
						<p className="font-mono text-sm text-[var(--accent)]">
							<span className="text-[var(--text-dim)]">habibur@dev:~$</span> ls
							../more-projects
						</p>
						<div className="mt-6 grid gap-6 sm:grid-cols-2">
							{otherProjects.map((p, i) => (
								<ProjectCard key={p.slug} project={p} index={i} />
							))}
						</div>
						<Link
							to="/projects"
							className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
						>
							<ArrowLeft className="h-3.5 w-3.5" />
							back to all projects
						</Link>
					</div>
				</section>
			)}
		</div>
	);
}
