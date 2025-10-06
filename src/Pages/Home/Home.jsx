import AboutMe from "../../Components/AboutMe/AboutMe";
import ContactMe from "../../Components/ContactMe/ContactMe";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

export default function Home() {
  return (
    <>
      <div id="home">
        <PageMetaData
          title="Ahmed Kholief -Frontend Developer"
          description="Discover fresh deals and best-selling products on FreshCart – your ultimate online grocery destination."
          keywords="FreshCart, grocery, deals, fresh food, online shopping, offers"
          author="Ahmed Kholief"
        />

        <Portfolio />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
}
