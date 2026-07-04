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
const EMAIL = import.meta.env.VITE_EMAIL;
const PHONE = import.meta.env.VITE_PHONE;
const ADDRESS = import.meta.env.VITE_ADDRESS;

export default function Contact() {
	return (
		<section id="contact" className="py-section-gap relative">
			<div className="container max-w-container-max mx-auto px-gutter relative z-10 animate-reveal stagger-1">
				<div className="glass-card p-16 md:p-24 rounded-[64px] text-center max-w-5xl mx-auto border border-primary/20 shadow-2xl relative overflow-hidden bg-white/5 backdrop-blur-xl border-white/10">
					<div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/30 rounded-full blur-[100px]" />
					<div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/30 rounded-full blur-[100px]" />

					<h2 className="font-display text-headline-lg md:text-display mb-8 tracking-tight relative z-10">
						Let's <span className="text-primary italic">Collaborate</span>
					</h2>
					<p className="font-body-lg text-body-lg text-on-surface-variant mb-16 max-w-2xl mx-auto leading-relaxed relative z-10">
						Have an ambitious project in mind? Let's build something
						extraordinary together. I'm always open to discussing new
						opportunities.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
						<a
							href={`mailto:${EMAIL}`}
							className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 backdrop-blur-xl transition-all group relative overflow-hidden"
						>
							<span className="material-symbols-outlined text-primary text-4xl mb-6 block transition-transform group-hover:scale-110 group-hover:-rotate-12">
								mail
							</span>
							<p className="font-label-md text-label-md font-bold uppercase tracking-[0.2em] mb-2">
								Email
							</p>
							<p className="font-caption text-caption text-on-surface-variant truncate opacity-60">
								{EMAIL}
							</p>
						</a>

						<div className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 backdrop-blur-xl transition-all group relative overflow-hidden">
							<span className="material-symbols-outlined text-primary text-4xl mb-6 block transition-transform group-hover:scale-110 group-hover:rotate-12">
								location_on
							</span>
							<p className="font-label-md text-label-md font-bold uppercase tracking-[0.2em] mb-2">
								Location
							</p>
							<p className="font-caption text-caption text-on-surface-variant truncate opacity-60">
								{ADDRESS}
							</p>
						</div>

						<a
							href={`tel:${PHONE}`}
							className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 backdrop-blur-xl transition-all group relative overflow-hidden"
						>
							<span className="material-symbols-outlined text-primary text-4xl mb-6 block transition-transform group-hover:scale-110 group-hover:rotate-12">
								phone
							</span>
							<p className="font-label-md text-label-md font-bold uppercase tracking-[0.2em] mb-2">
								Phone
							</p>
							<p className="font-caption text-caption text-on-surface-variant truncate opacity-60">
								{PHONE}
							</p>
						</a>
					</div>

					<div className="mb-16 relative z-10 p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl">
						<h3 className="font-display text-2xl mb-8 tracking-tight">
							Connect with me
						</h3>
						<div className="flex justify-center gap-8">
							<a
								href={GITHUB}
								target="_blank"
								rel="noreferrer"
								className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all hover:border-primary/50 hover:bg-primary/10 hover:scale-110"
							>
								<GithubIcon size={28} />
							</a>

							<a
								href={LINKEDIN}
								target="_blank"
								rel="noreferrer"
								className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all hover:border-primary/50 hover:bg-primary/10 hover:scale-110"
							>
								<LinkedinIcon size={28} />
							</a>

							<a
								href={FACEBOOK}
								target="_blank"
								rel="noreferrer"
								className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all hover:border-primary/50 hover:bg-primary/10 hover:scale-110"
							>
								<FacebookIcon size={28} />
							</a>
						</div>
					</div>

					<a
						href={`mailto:${EMAIL}`}
						className="relative z-10 inline-flex items-center justify-center gap-4 px-16 py-6 rounded-full font-display text-2xl font-bold text-on-surface bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-white/15 hover:border-primary/40 active:scale-95"
					>
						<span className="material-symbols-outlined text-3xl text-primary">
							mail
						</span>
						<span>Send Me an Email</span>
					</a>
				</div>
			</div>
		</section>
	);
}
