import useReveal from "../hooks/useReveal";

export default function About() {
	const [ref, visible] = useReveal();

	return (
		<section id="about" className="py-16 sm:py-24 md:py-section-gap relative">
			<div className="container max-w-container-max mx-auto px-5 sm:px-gutter relative z-10">
				<div className="grid md:grid-cols-12 gap-10 sm:gap-16 md:gap-20 items-start">
					<div
						ref={ref}
						className={`md:col-span-12 space-y-10 sm:space-y-12 md:space-y-16 stagger-2 ${visible ? "animate-reveal" : "opacity-0"}`}
					>
						<div className="glass-card p-6 xs:p-8 sm:p-12 md:p-20 rounded-2xl xs:rounded-[32px] sm:rounded-[48px] space-y-6 xs:space-y-8 sm:space-y-10 bg-white/5 backdrop-blur-xl border-white/10">
							<h2 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-headline-lg tracking-tight mb-2 xs:mb-4">
								My <span className="text-primary italic">Journey</span>
							</h2>

							<div className="grid md:grid-cols-2 gap-6 xs:gap-8 sm:gap-12">
								<p className="font-body-lg text-sm sm:text-base md:text-body-lg text-on-surface-variant leading-relaxed">
									I'm a{" "}
									<span className="text-primary font-bold uppercase tracking-wider">
										Computer Science student
									</span>{" "}
									at BRAC University. My journey started with small class
									scripts I barely understood, but fixing my first real bug at 2
									AM hooked me for good. Since then I've built everything from a
									MERN disaster relief platform to a Django auction site,
									chasing whatever project teaches me something new.
								</p>
								<p className="font-body-lg text-sm sm:text-base md:text-body-lg text-on-surface-variant leading-relaxed">
									I enjoy full-stack work most: turning a rough idea into
									something people can actually click through. I like the
									puzzle-solving side of engineering, figuring out why something
									breaks and how to build it so it doesn't break again, more
									than I like the polish.
								</p>
							</div>

							<div className="pt-6 xs:pt-8 sm:pt-10 border-t border-white/10">
								<h4 className="font-label-md text-xs sm:text-label-md text-primary uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] mb-6 xs:mb-8 sm:mb-10">
									Beyond the Code
								</h4>
								<div className="flex flex-col xs:flex-row gap-4 xs:gap-6 group max-w-2xl">
									<div className="w-12 h-12 xs:w-14 xs:h-14 rounded-xl xs:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:backdrop-blur-xl shrink-0">
										<span className="material-symbols-outlined text-primary text-2xl xs:text-3xl">
											sports_esports
										</span>
									</div>
									<div>
										<p className="font-label-md text-xs sm:text-label-md font-bold uppercase tracking-wide sm:tracking-widest mb-1.5 xs:mb-2">
											Competitive Gaming
										</p>
										<p className="font-body-md text-sm sm:text-base md:text-body-md text-on-surface-variant leading-relaxed">
											Outside of code, I'm usually grinding ranked matches. It
											scratches the same itch as debugging, fast decisions under
											pressure and the same lose-review-adjust loop I use on
											stubborn bugs.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
