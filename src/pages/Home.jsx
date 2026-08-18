import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import FeaturedProjects from "../sections/FeaturedProjects";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Education />
      <Contact />
    </>
  );
}
