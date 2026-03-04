import AboutMe from "../../Components/AboutMe/AboutMe";
import ContactMe from "../../Components/ContactMe/ContactMe";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import Timeline from "../../Components/Timeline/Timeline";
import SEO from "../../Components/SEO/SEO";

export default function Home() {
  return (
    <div id="home">
      <SEO />
      <Portfolio />
      <div className="section-divider" />
      <AboutMe />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <ContactMe />
    </div>
  );
}
