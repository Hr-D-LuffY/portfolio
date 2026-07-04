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

function MailIcon({ size = 28 }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2.5" y="5" width="19" height="14" rx="2.5" />
			<path d="M3 6.5 12 13l9-6.5" />
		</svg>
	);
}

const GITHUB = "https://github.com/Hr-D-LuffY";
const LINKEDIN = "https://www.linkedin.com/in/md-habib-ur-rahman/";
const FACEBOOK = "https://www.facebook.com/habib420.hr ";
const EMAIL = "hrsiam420@gmail.com";

export default function Footer() {
	return (
		<footer className="w-full py-10 sm:py-12 md:py-16 border-t border-white/5 bg-background relative z-10">
			<div className="max-w-container-max mx-auto px-5 sm:px-gutter">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8 xs:gap-10 md:gap-12 pb-8 xs:pb-10 md:pb-12 border-b border-white/5">
					<div className="font-display text-xl xs:text-2xl sm:text-3xl font-black tracking-tighter text-on-surface uppercase text-center md:text-left">
						Md. Habibur Rahman
					</div>

					<div className="flex flex-col items-center md:items-start gap-3 xs:gap-4">
						<span className="font-label-md text-[11px] xs:text-xs sm:text-label-md text-on-surface-variant uppercase tracking-widest opacity-60">
							Connect with me
						</span>
						<div className="flex gap-5 xs:gap-6 sm:gap-8">
							<a
								href={GITHUB}
								target="_blank"
								rel="noreferrer"
								className="text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-125"
							>
								<GithubIcon size={22} />
							</a>

							<a
								href={LINKEDIN}
								target="_blank"
								rel="noreferrer"
								className="text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-125"
							>
								<LinkedinIcon size={22} />
							</a>

							<a
								href={FACEBOOK}
								target="_blank"
								rel="noreferrer"
								className="text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-125"
							>
								<FacebookIcon size={22} />
							</a>

							<a
								href={`mailto:${EMAIL}`}
								target="_blank"
								rel="noreferrer"
								className="text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-125"
							>
								<MailIcon size={22} />
							</a>
						</div>
					</div>
				</div>

				<div className="pt-6 xs:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="font-caption text-[10px] xs:text-caption text-on-surface-variant uppercase tracking-[0.15em] xs:tracking-[0.2em] opacity-40 text-center">
						© {new Date().getFullYear()} Md. Habibur Rahman. Crafted with
						Precision.
					</p>
				</div>
			</div>
		</footer>
	);
}
