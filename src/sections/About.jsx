import { GraduationCap } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { statRow } from "../data/skills";

export default function About() {
	return (
		<section
			id="about"
			className="scroll-mt-20 border-t border-[var(--border)] py-24 sm:py-32"
		>
			<div className="mx-auto max-w-6xl px-5 sm:px-8">
				<SectionHeading command="cat about.md" title="About" />

				<div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
					<div>
						<Reveal delay={0.05}>
							<p className="text-lg leading-relaxed text-[var(--text-muted)]">
								I'm a full-stack software engineer who likes building the whole
								product — from the interfaces people actually use down to the
								APIs, auth flows, and data models running underneath. Most of my
								hands-on experience is in the MERN stack and Next.js, building
								applications that hold up under real usage: role-based access,
								payment flows, and schedules that can't afford to get out of
								sync.
							</p>
							<p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)]">
								Right now I'm looking for a Junior Full Stack Developer role
								where I can keep building complete products inside a team, learn
								from people further along than me, and ship things that real
								users depend on. Longer term, I want to specialize in
								distributed system design across the stack — the FixItNow and
								Disaster Relief projects below were both, in part, me practicing
								exactly that.
							</p>
						</Reveal>

						<Reveal
							delay={0.15}
							className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md"
						>
							{statRow.map((stat) => (
								<div
									key={stat.label}
									className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-center"
								>
									<p className="font-display text-2xl font-semibold text-[var(--accent)]">
										{stat.value}
									</p>
									<p className="mt-1 font-mono text-[11px] leading-tight text-[var(--text-dim)]">
										{stat.label}
									</p>
								</div>
							))}
						</Reveal>
					</div>

					<Reveal delay={0.1}>
						<div className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--surface)] p-6 sm:p-7">
							<div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
								<GraduationCap className="h-4 w-4" />
								education.highlight
							</div>
							<p className="mt-4 font-display text-xl font-semibold text-[var(--text)]">
								B.Sc. in Computer Science &amp; Engineering
							</p>
							<p className="mt-1 text-sm text-[var(--text-muted)]">
								BRAC University
							</p>
							<div className="mt-5 border-t border-[var(--border)] pt-5">
								<p className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-dim)]">
									Thesis
								</p>
								<p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
									"A Security Evaluation Framework for Distributed
									Retrieval-Augmented Generation Systems"
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
