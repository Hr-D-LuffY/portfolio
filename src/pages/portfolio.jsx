import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ExperienceEducation from "../components/ExperienceEducation";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
	return (
		<>
			<main className="relative z-10">
				<Hero />
				<About />
				<Skills />
				<ExperienceEducation />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
