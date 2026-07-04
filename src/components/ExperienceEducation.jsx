import TimelineItem from "./TimelineItem";

const EDUCATION = [
	{
		period: "2021 — 2026",
		title: "B.Sc. in Computer Science and Engineering",
		subtitle: " BRAC University",
		description: "",
		filled: true,
	},
];

// const EXPERIENCE = [
//
// ];

export default function ExperienceEducation() {
	return (
		<section className="py-16 sm:py-24 md:py-section-gap relative">
			<div className="container max-w-container-max mx-auto px-5 sm:px-gutter relative z-10">
				<div className="grid md:grid-cols-2 gap-14 xs:gap-16 sm:gap-20 md:gap-24">
					{/* Education */}
					<div className="animate-reveal stagger-1">
						<h3 className="font-display text-2xl xs:text-3xl sm:text-headline-md mb-8 xs:mb-10 sm:mb-12 flex items-center gap-4 xs:gap-5 sm:gap-6 tracking-tight">
							<span className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-md shrink-0">
								<span className="material-symbols-outlined text-primary text-xl xs:text-2xl sm:text-3xl">
									school
								</span>
							</span>
							Education
						</h3>
						<div className="space-y-8 xs:space-y-9 sm:space-y-10 border-l border-primary/20 ml-5 xs:ml-6 sm:ml-7 pl-8 xs:pl-10 sm:pl-12">
							{EDUCATION.map((item) => (
								<TimelineItem key={item.title} {...item} />
							))}
						</div>
					</div>

					{/* Experience */}
					<div className="animate-reveal stagger-2">
            <h3 className="font-display text-2xl xs:text-3xl sm:text-headline-md mb-8 xs:mb-10 sm:mb-12 flex items-center gap-4 xs:gap-5 sm:gap-6 tracking-tight">
              <span className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-md shrink-0">
                <span className="material-symbols-outlined text-primary text-xl xs:text-2xl sm:text-3xl">history</span>
              </span>
              Experience
            </h3>
            {/* <div className="space-y-10 border-l border-primary/20 ml-7 pl-12">
              {EXPERIENCE.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div> */}
          </div>
				</div>
			</div>
		</section>
	);
}