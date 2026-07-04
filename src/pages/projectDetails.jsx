import { useParams, Link } from "react-router-dom";
import { PROJECTS_DETAIL } from "../context/projectsData";
import { useNavigate } from "react-router-dom";

export default function ProjectDetailPage() {
	const navigate = useNavigate();
	const { slug } = useParams();
	const project = PROJECTS_DETAIL.find((p) => p.slug === slug);

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-surface text-on-surface">
				<div className="text-center">
					<p className="font-headline-md text-headline-md mb-4">
						Project not found
					</p>
					<Link to="/" className="text-primary underline">
						Back to home
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-surface text-on-surface min-h-screen font-body-md text-body-md selection:bg-primary-container selection:text-on-primary">
			<main className="pt-24 pb-section-gap overflow-x-hidden">
				{/* Hero */}
				<section className="max-w-container-max mx-auto px-gutter mb-section-gap">
					<button
						onClick={() => navigate(-1)}
						className="group flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md mb-8"
					>
						<span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
							arrow_back
						</span>
						Back
					</button>
					<div className="flex flex-col gap-unit mb-12">
						<h1 className="font-display text-display max-w-4xl">
							{project.title}
						</h1>
					</div>
					<div className="relative w-full aspect-video rounded-xl overflow-hidden glass-card group">
						<div
							className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
							style={{ backgroundImage: `url('${project.heroImage}')` }}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
					</div>
				</section>

				{/* Overview + Tech stack */}
				<section className="max-w-container-max mx-auto px-gutter mb-section-gap grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					<div className="lg:col-span-7 flex flex-col gap-8">
						<div className="flex flex-col gap-4">
							<h2 className="font-headline-md text-headline-md">Overview</h2>
							<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
								{project.overview}
							</p>
						</div>
						<div className="flex flex-wrap gap-4 pt-4">
							{project.links.live && (
								<a
									href={project.links.live}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:shadow-[0_0_20px_rgba(195,192,255,0.4)] transition-all"
								>
									<span className="material-symbols-outlined text-[20px]">
										rocket_launch
									</span>
									Live Project
								</a>
							)}
							{project.links.github && (
								<a
									href={project.links.github}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-2 border border-outline-variant px-8 py-3 rounded-full font-label-md text-label-md hover:bg-surface-variant transition-all"
								>
									<span className="material-symbols-outlined text-[20px]">
										code
									</span>
									GitHub Repository
								</a>
							)}
						</div>
					</div>

					<div className="lg:col-span-5 glass-card p-8 rounded-xl flex flex-col gap-6">
						<h3 className="font-label-md text-label-md text-primary uppercase tracking-widest">
							Technologies Used
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{project.techStack.map((tech) => (
								<div
									key={tech.label}
									className="flex items-center gap-3 p-3 rounded-lg bg-surface-container/50 border border-white/5"
								>
									<span className="material-symbols-outlined text-secondary">
										{tech.icon}
									</span>
									<span className="font-label-md text-label-md">
										{tech.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Challenges / Improvements */}
				<section className="bg-surface-container-low py-section-gap border-y border-white/5">
					<div className="max-w-container-max mx-auto px-gutter">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
							<div className="flex flex-col gap-8">
								<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center border border-primary/20">
									<span className="material-symbols-outlined text-primary">
										warning
									</span>
								</div>
								<h3 className="font-headline-md text-headline-md">
									Challenges Faced
								</h3>
								<div className="space-y-6">
									{project.challenges.map((challenge, i) => (
										<div key={i} className="flex gap-4">
											<span className="text-primary font-bold">
												{String(i + 1).padStart(2, "0")}
											</span>
											<p className="text-on-surface-variant">{challenge}</p>
										</div>
									))}
								</div>
							</div>

							<div className="flex flex-col gap-8">
								<div className="w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center border border-tertiary/20">
									<span className="material-symbols-outlined text-tertiary">
										trending_up
									</span>
								</div>
								<h3 className="font-headline-md text-headline-md">
									Future Improvements
								</h3>
								<div className="space-y-6">
									{project.improvements.map((item, i) => (
										<div key={i} className="flex gap-4">
											<span className="text-tertiary font-bold">
												{String.fromCharCode(65 + i)}
											</span>
											<p className="text-on-surface-variant">{item}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
