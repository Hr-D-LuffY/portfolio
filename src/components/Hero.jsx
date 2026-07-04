import mainpic from "../images/pic1.webp";
function GithubIcon({ size = 28 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
		</svg>
	);
}

function LinkedinIcon({ size = 28 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
			<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
		</svg>
	);
}

function FacebookIcon({ size = 28 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
			<path d="M13.5 22v-8.5H16l.5-3.5h-3V7.8c0-1 .28-1.7 1.73-1.7H16.5V3.14C16.2 3.1 15.2 3 14 3c-2.4 0-4 1.46-4 4.15V10H7.5v3.5H10V22h3.5Z" />
		</svg>
	);
}

const GITHUB = import.meta.env.VITE_GITHUB;
const LINKEDIN = import.meta.env.VITE_LINKEDIN;
const FACEBOOK = import.meta.env.VITE_FACEBOOK;

export default function Hero() {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
		>
			<div className="container max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-16 items-center">
				<div className="space-y-10 animate-reveal stagger-1">
					<div className="inline-block px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-label-md text-label-md uppercase tracking-[0.2em]">
						Available for opportunities
					</div>

					<h1 className="font-display text-display leading-[1.1] tracking-tight">
						<span className="block mb-4 text-glow">Md. Habibur Rahman</span>
						<span className="block text-headline-lg md:text-display text-primary italic opacity-90">
							Backend &amp; Full Stack Developer
						</span>
					</h1>

					<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
						Architecting high-performance web applications with a focus on
						technical precision and creative user experiences.
					</p>

					<div className="flex flex-wrap gap-6 items-center">
						<a
							href="/Md_Habibur_Rahman_Resume.pdf"
							download="Md_Habibur_Rahman_Resume.pdf"
							className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-md text-label-md font-bold neon-glow-primary transition-all duration-300 transform hover:-translate-y-1 inline-block"
						>
							Download Resume
						</a>
						<div className="flex items-center gap-8 px-6 border-l border-white/10">
							<a
								href={GITHUB}
								target="_blank"
								rel="noreferrer"
								className="text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-125"
							>
								<GithubIcon size={28} />
							</a>

							<a
								href={LINKEDIN}
								target="_blank"
								rel="noreferrer"
								className="text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-125"
							>
								<LinkedinIcon size={28} />
							</a>

							<a
								href={FACEBOOK}
								target="_blank"
								rel="noreferrer"
								className="text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-125"
							>
								<FacebookIcon size={28} />
							</a>
						</div>
					</div>
				</div>

				<div className="flex justify-center md:justify-end animate-reveal stagger-2">
					<div className="relative w-80 h-96 md:w-[500px] md:h-[600px]">
						<div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />

						<div className="relative z-10 w-full h-full rounded-[40px] border border-white/10 overflow-hidden glass-card p-2 shadow-2xl">
							<img
								className="w-full h-full object-cover object-top rounded-[32px] transition-all duration-1000"
								alt="Md. Habibur Rahman, backend and full stack developer"
								src={mainpic}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
