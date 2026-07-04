import { useState } from "react";

// Small colored badge used instead of external logo images.
function SkillIcon({ label, bg, fg = "#ffffff" }) {
	return (
		<div
			className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center font-display font-extrabold text-xs sm:text-sm shrink-0"
			style={{ backgroundColor: bg, color: fg }}
		>
			{label}
		</div>
	);
}

const CATEGORIES = [
	{
		id: "frontend",
		label: "Frontend",
		icon: "palette",
		skills: [
			{ name: "HTML5", badge: "5", bg: "#e34f26" },
			{ name: "CSS3", badge: "3", bg: "#1572b6" },
			{ name: "JavaScript", badge: "JS", bg: "#f0db4f", fg: "#1b1b1d" },
			{ name: "React", badge: "⚛", bg: "#20232a", fg: "#61dafb" },
			{ name: "Tailwind CSS", badge: "~", bg: "#0e7490" },
		],
	},
	{
		id: "backend",
		label: "Backend",
		icon: "dns",
		skills: [
			{ name: "Node.js / Express", badge: "JS", bg: "#3c873a" },
			{ name: "Flask", badge: "FL", bg: "#2a2a2c" },
			{ name: "Django", badge: "DJ", bg: "#0c4b33" },
		],
	},
	{
		id: "database",
		label: "Database",
		icon: "storage",
		skills: [
			{ name: "MySQL", badge: "SQL", bg: "#00618a" },
			{ name: "MongoDB", badge: "DB", bg: "#12924f" },
		],
	},
	{
		id: "languages",
		label: "Languages",
		icon: "code",
		skills: [
			{ name: "Python", badge: "PY", bg: "#356a94" },
			{ name: "C", badge: "C", bg: "#5c6bc0" },
			{ name: "C++", badge: "C++", bg: "#004482" },
			{ name: "Assembly", badge: "ASM", bg: "#454545" },
		],
	},
	{
		id: "version-control",
		label: "Version Control",
		icon: "account_tree",
		skills: [
			{ name: "Git", badge: "GIT", bg: "#f1502f" },
			{ name: "GitHub", badge: "GH", bg: "#181717" },
		],
	},
	{
		id: "tools",
		label: "Tools",
		icon: "build",
		skills: [
			{ name: "VS Code", badge: "VSC", bg: "#0065a9" },
			{ name: "npm", badge: "npm", bg: "#cb3837" },
		],
	},
];

export default function Skills() {
	const [activeId, setActiveId] = useState(CATEGORIES[0].id);
	const active = CATEGORIES.find((c) => c.id === activeId);

	return (
		<section id="skills" className="py-16 sm:py-24 md:py-section-gap relative">
			<div className="container max-w-container-max mx-auto px-5 sm:px-gutter relative z-10">
				<div className="text-center mb-10 sm:mb-12 md:mb-16 animate-reveal stagger-1">
					<p className="font-label-md text-xs sm:text-label-md text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
						My Expertise
					</p>
					<h2 className="font-display text-3xl sm:text-4xl md:text-headline-lg mb-4 sm:mb-6 tracking-tight">
						Skills &amp;{" "}
						<span className="text-primary italic">Technologies</span>
					</h2>
					<p className="font-body-lg text-sm sm:text-base md:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
						The languages, frameworks, and tools I've used building real,
						working projects.
					</p>
				</div>

				{/* Category tabs */}
				<div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16 animate-reveal stagger-2">
					{CATEGORIES.map((cat) => {
						const isActive = cat.id === activeId;
						return (
							<button
								key={cat.id}
								onClick={() => setActiveId(cat.id)}
								className={`flex items-center gap-1.5 xs:gap-2 sm:gap-3 px-3.5 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border font-label-md text-[11px] xs:text-xs sm:text-label-md font-bold uppercase tracking-wide sm:tracking-widest transition-all ${
									isActive ?
										"bg-primary text-on-primary border-primary"
									:	"bg-white/5 text-on-surface-variant border-white/10 hover:border-primary/40 hover:text-on-surface"
								}`}
							>
								<span className="material-symbols-outlined text-base xs:text-lg sm:text-xl">
									{cat.icon}
								</span>
								{cat.label}
								<span
									className={`text-caption font-caption ${
										isActive ? "text-on-primary/70" : (
											"text-on-surface-variant/60"
										)
									}`}
								>
									({cat.skills.length})
								</span>
							</button>
						);
					})}
				</div>

				{/* Skill grid for active category */}
				<div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 xs:gap-4 sm:gap-6 animate-reveal stagger-3">
					{active.skills.map((skill) => (
						<div
							key={skill.name}
							className="p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center gap-2.5 xs:gap-3 sm:gap-4 transition-all hover:border-primary/40 hover:bg-primary/10 hover:backdrop-blur-xl hover:scale-105"
						>
							<SkillIcon label={skill.badge} bg={skill.bg} fg={skill.fg} />
							<span className="font-label-md text-[11px] xs:text-xs sm:text-label-md uppercase tracking-wide sm:tracking-widest font-bold text-center">
								{skill.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
