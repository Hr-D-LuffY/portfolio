import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useTypewriter } from "../hooks/useTypewriter";
import GridBackdrop from "../components/ui/GridBackdrop";
import StatusTag from "../components/ui/StatusTag";

export default function Hero() {
	const { output: nameOut, done: nameDone } = useTypewriter(
		"Md. Habibur Rahman",
		{
			speed: 40,
			startDelay: 450,
		},
	);

	return (
		<section
			className="relative overflow-hidden pt-8 pb-24 sm:pt-14 sm:pb-32"
			id="hero"
		>
			<GridBackdrop />

			<div className="relative mx-auto max-w-6xl px-5 sm:px-8">
				<div className="flex items-center justify-between">
					<StatusTag label="online" />
					<div className="hidden items-center gap-4 sm:flex">
						<a
							href="https://github.com/Hr-D-LuffY"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
						>
							<SiGithub className="h-3.5 w-3.5" /> GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/md-habib-ur-rahman/"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
						>
							<FaLinkedin className="h-3.5 w-3.5" /> LinkedIn
						</a>
					</div>
				</div>

				<div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
					<div>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4 }}
							className="font-mono text-base text-[var(--text-muted)] sm:text-lg"
						>
							<span className="text-[var(--accent)]">habibur@dev</span>
							<span className="text-[var(--text-dim)]">:~$</span> whoami_
						</motion.p>

						<h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
							{nameOut}
							<span
								className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-[var(--accent)] align-middle"
								style={{ animation: "blink 1s step-end infinite" }}
								aria-hidden="true"
							/>
						</h1>

						<motion.p
							initial={{ opacity: 0, y: 8 }}
							animate={nameDone ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5 }}
							className="mt-4 max-w-xl text-lg text-[var(--text-muted)] sm:text-xl"
						>
							Full Stack Developer —{" "}
							<span className="text-[var(--text)]">
								Web Apps, APIs &amp; Systems
							</span>
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 8 }}
							animate={nameDone ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.15 }}
							className="mt-9 flex flex-wrap items-center gap-4"
						>
							<a
								href="#projects"
								className="group inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 font-mono text-sm font-medium text-[#06120f] transition-transform hover:-translate-y-0.5"
							>
								View Projects
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</a>
							<a
								href="#contact"
								className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
							>
								Contact Me
							</a>
							<motion.a
								href="/resume.pdf"
								download
								whileHover="hover"
								className="inline-flex items-center gap-2 font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
							>
								<motion.span
									variants={{ hover: { y: [0, 3, 0] } }}
									transition={{ duration: 0.5 }}
									className="inline-flex"
								>
									<Download className="h-4 w-4" />
								</motion.span>
								Download Resume
							</motion.a>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.92 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:mx-0 lg:ml-auto lg:max-w-[480px]"
					>
						<div className="relative">
							<div
								className="absolute -inset-3 rounded-[2rem] bg-[var(--accent)]/10 blur-2xl"
								aria-hidden="true"
							/>
							<img
								src="/images/pp.png"
								alt="Portrait of Md. Habibur Rahman"
								className="relative aspect-square w-full rounded-[1.75rem] border border-[var(--border)] object-cover shadow-2xl shadow-black/30"
							/>
						</div>
					</motion.div>
				</div>
			</div>

			<style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
		</section>
	);
}
