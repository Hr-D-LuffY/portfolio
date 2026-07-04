import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

export default function Navbar() {
	const [activeSection, setActiveSection] = useState("home");
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			let current = "home";
			NAV_LINKS.forEach(({ id }) => {
				const element = document.getElementById(id);
				if (element && window.pageYOffset >= element.offsetTop - 200) {
					current = id;
				}
			});
			setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (e, id) => {
		e.preventDefault();
		setMenuOpen(false);

		// Not on the homepage: go there first, then scroll once it's mounted.
		if (location.pathname !== "/") {
			navigate("/");
			// wait a tick for Portfolio to mount before measuring offsetTop
			setTimeout(() => {
				const target = document.getElementById(id);
				if (target) {
					window.scrollTo({ top: target.offsetTop - 100, behavior: "smooth" });
				}
			}, 100);
			return;
		}
		const target = document.getElementById(id);
		if (target) {
			window.scrollTo({ top: target.offsetTop - 100, behavior: "smooth" });
		} else if (id === "home") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-2xl border-b border-white/10 shadow-sm">
			<div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
				<div className="font-display text-headline-md font-extrabold tracking-tight text-on-surface">
					Md. Habibur Rahman
				</div>

				<div className="hidden md:flex gap-10 items-center">
					{NAV_LINKS.map(({ id, label }) => {
						const isActive = activeSection === id;
						return (
							<a
								key={id}
								href={`#${id}`}
								onClick={(e) => handleNavClick(e, id)}
								className={`font-label-md text-label-md uppercase transition-all duration-300 pb-1 ${
									isActive ?
										"text-primary font-bold border-b-2 border-primary"
									:	"text-on-surface-variant hover:text-on-surface"
								}`}
							>
								{label}
							</a>
						);
					})}
					<a
						href="/Md_Habibur_Rahman_Resume.pdf"
						download="Md_Habibur_Rahman_Resume.pdf"
						className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-md text-label-md font-bold neon-glow-primary transition-all duration-300 transform hover:-translate-y-1 inline-block"
					>
						Download Resume
					</a>
				</div>

				<button
					className="md:hidden text-on-surface material-symbols-outlined text-3xl"
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-label="Toggle menu"
				>
					{menuOpen ? "close" : "menu"}
				</button>
			</div>

			{menuOpen && (
				<div className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-white/10 px-gutter py-8 flex flex-col gap-6">
					{NAV_LINKS.map(({ id, label }) => (
						<a
							key={id}
							href={`#${id}`}
							onClick={(e) => handleNavClick(e, id)}
							className={`font-label-md text-label-md uppercase ${
								activeSection === id ?
									"text-primary font-bold"
								:	"text-on-surface-variant"
							}`}
						>
							{label}
						</a>
					))}
					<button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md font-bold neon-glow-primary transition-all duration-300">
						Download Resume
					</button>
				</div>
			)}
		</nav>
	);
}
