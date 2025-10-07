import { useEffect, useState } from "react";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 300, once: false, offset: 100 });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "CSS & HTML", "JavaScript", "React"];

  const projects = [
    {
      title: "Fresh Cart",
      img: "/imgs/FreshCart.png",
      liveDemo: "https://fresh-cart-psi-five.vercel.app/signin",
      repo: "https://github.com/AhmedOsama143/FreshCart",
      description:
        "FreshCart is a fast and modern online store for fresh groceries and essentials. Enjoy easy browsing, secure checkout, and quick delivery to your door.",
      category: "React",
    },
    {
      title: "simple E-commerce",
      img: "/imgs/simple-E-Commerce.png",
      liveDemo: "https://ahmedosama143.github.io/simple-E-Commerce/",
      repo: "https://github.com/AhmedOsama143/simple-E-Commerce",
      description:
        "A React Router application created as a hands-on practice project to learn and improve routing skills in React.",
      category: "React",
    },
    {
      title: "Fashion",
      img: "/imgs/Fashion.png",
      liveDemo: "https://fashion-five-lac.vercel.app/",
      repo: "https://github.com/AhmedOsama143/fashion",
      description:
        "Fashion is a sleek and modern e-commerce website built with Native JavaScript and API integration, offering a seamless shopping experience for fashion enthusiasts.",
      category: "JavaScript",
    },
    {
      title: "Fokir",
      img: "/imgs/Fokkir.png",
      liveDemo: "https://fokir-rho.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Fokir",
      description:
        "Fokir is a fully responsive website designed with HTML, CSS, and Bootstrap. It offers a seamless user experience with a clean and modern design.",
      category: "CSS & HTML",
    },
    {
      title: "Iphone 15 Model",
      img: "/imgs/Iphone.png",
      liveDemo: "https://iphone-model-ahmed-osama.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Iphone-Model",
      description:
        "Iphone 15 Model is a responsive product landing page built with React and simulates reality, showcasing the latest iPhone features and design.",
      category: "React",
    },
    {
      title: "Devfolio",
      img: "/imgs/devfoilo.png",
      liveDemo: "https://dev-folio-25yd.vercel.app/",
      repo: "https://github.com/AhmedOsama143/DevFolio",
      description:
        "Devfolio is a modern, responsive personal portfolio built using HTML, CSS, Bootstrap, and the Typed.js library.",
      category: "CSS & HTML",
    },
    {
      title: "Tomato",
      img: "/imgs/Tomato.png",
      liveDemo: "https://food-delivery-rho-sand.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Food-delivery",
      description:
        "Tomato is a modern and responsive food delivery website built with HTML, CSS, and Native JavaScript, offering a seamless user experience for ordering delicious meals online.",
      category: "JavaScript",
    },
    {
      title: "Daniels",
      img: "/imgs/Daniels.png",
      liveDemo: "https://daniels-orpin.vercel.app/",
      repo: "https://github.com/AhmedOsama143/DANIELS",
      description:
        "A modern and responsive personal portfolio template designed for developers, freelancers, or creatives.",
      category: "CSS & HTML",
    },
    {
      title: "Weather-app",
      img: "/imgs/Weather.PNG",
      liveDemo: "https://ahmedosama143.github.io/weather/",
      repo: "https://github.com/AhmedOsama143/weather",
      description:
        "Get accurate, real-time weather updates for any city worldwide.",
      category: "JavaScript",
    },
    {
      title: "Mealify",
      img: "/imgs/Mealify.PNG",
      liveDemo: "https://mealify-lac.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Mealify",
      description:
        "Mealify is a web application that allows users to search for recipes based on their ingredients.",
      category: "JavaScript",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="Projects"
      className="relative scroll-mt-28 bg-black text-white py-16 md:py-20 overflow-hidden"
    >
      <FloatingFAIcons
        icons={[faCode, faHtml5, faCss3Alt, faJs, faReact, faBootstrap]}
        count={10}
        colors={["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"]}
        sizeRange={[20, 34]}
        duration={[12, 20]}
        sway={22}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 45%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20">
        <div className="mb-8 text-center">
          <h2
            className="inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
                       bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent
                       drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]"
          >
            My Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Selected works focused on speed, accessibility, and clean UX.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white border-primary-400"
                  : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md
                          shadow-[0_0_24px_rgba(59,130,246,0.08)]
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
            >
              <Card {...project} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-white/50">
          * More projects available upon request.
        </div>
      </div>
    </section>
  );
}
