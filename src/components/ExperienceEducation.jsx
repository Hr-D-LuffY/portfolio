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
		<section className="py-section-gap relative">
			<div className="container max-w-container-max mx-auto px-gutter relative z-10">
				<div className="grid md:grid-cols-2 gap-24">
					{/* Education */}
					<div className="animate-reveal stagger-1">
						<h3 className="font-display text-headline-md mb-12 flex items-center gap-6 tracking-tight">
							<span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-md">
								<span className="material-symbols-outlined text-primary text-3xl">
									school
								</span>
							</span>
							Education
						</h3>
						<div className="space-y-10 border-l border-primary/20 ml-7 pl-12">
							{EDUCATION.map((item) => (
								<TimelineItem key={item.title} {...item} />
							))}
						</div>
					</div>

					{/* Experience */}
					<div className="animate-reveal stagger-2">
            <h3 className="font-display text-headline-md mb-12 flex items-center gap-6 tracking-tight">
              <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-md">
                <span className="material-symbols-outlined text-primary text-3xl">history</span>
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
