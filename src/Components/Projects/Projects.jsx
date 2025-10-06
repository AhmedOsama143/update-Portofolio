import { useEffect, useState } from "react";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

import FreshCartImg from "../../assets/imgs/FreshCart.png";
import FokirImg from "../../assets/imgs/Fokkir.png";
import DevfolioImg from "../../assets/imgs/devfoilo.png";
import Daniels from "../../assets/imgs/Daniels.png";
// import GameZone from "../../assets/imgs/GameZone.PNG";
// import Yummy from "../../assets/imgs/Yummy.PNG";
import Weather from "../../assets/imgs/Weather.PNG";
import Fashion from "../../assets/imgs/Fashion.PNG";
import Tomato from "../../assets/imgs/Tomato.PNG";
import Iphone from "../../assets/imgs/Iphone.png";
import Mealify from "../../assets/imgs/Mealify.PNG";
import SimpleEcommerce from "../../assets/imgs/simple E-Commerce.png";
// import Bookmarker from "../../assets/imgs/Bookmarker.PNG";
// import SmartLogin from "../../assets/imgs/SmartLogin.png";
// import QuotesGenerator from "../../assets/imgs/QuotesGenerator.png";
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
  // const categories = ["All", "CSS & HTML", "JavaScript", "React","Next.js"];

  const projects = [
    {
      title: "Fresh Cart",
      img: FreshCartImg,
      liveDemo: "https://fresh-cart-psi-five.vercel.app/signin",
      repo: "https://github.com/AhmedOsama143/FreshCart",
      description:
        "FreshCart is a fast and modern online store for fresh groceries and essentials. Enjoy easy browsing, secure checkout, and quick delivery to your door.",
      category: "React",
    },

    {
      title: "simple E-commerce",
      img: SimpleEcommerce,
      liveDemo: "https://ahmedosama143.github.io/simple-E-Commerce/",
      repo: "https://github.com/AhmedOsama143/simple-E-Commerce",
      description:
        "A React Router application created as a hands-on practice project to learn and improve routing skills in React.",
      category: "React",
    },
    {
      title: "Fashion",
      img: Fashion,
      liveDemo: "https://fashion-five-lac.vercel.app/",
      repo: "https://github.com/AhmedOsama143/fashion",
      description:
        "Fashion is a sleek and modern e-commerce website built with Native JavaScript and API integration, offering a seamless shopping experience for fashion enthusiasts.",
      category: "JavaScript",
    },
    {
      title: "Fokir",
      img: FokirImg,
      liveDemo: "https://fokir-rho.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Fokir",
      description:
        "Fokir is a fully responsive website designed with HTML, CSS, and Bootstrap. It offers a seamless user experience with a clean and modern design.",
      category: "CSS & HTML",
    },
    {
      title: "Iphone 15 Model",
      img: Iphone,
      liveDemo: "https://iphone-model-ahmed-osama.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Iphone-Model",
      description:
        "Iphone 15 Model is a responsive product landing page built with React and Simulates reality, showcasing the latest iPhone features and design.",
      category: "React",
    },
    {
      title: "Devfolio",
      img: DevfolioImg,
      liveDemo: "https://dev-folio-25yd.vercel.app/",
      repo: "https://github.com/AhmedOsama143/DevFolio",
      description:
        "Devfolio is a modern, responsive personal portfolio built using HTML, CSS, Bootstrap, and the Typed.js library.",
      category: "CSS & HTML",
    },
    {
      title: "Tomato",
      img: Tomato,
      liveDemo: "https://food-delivery-rho-sand.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Food-delivery",
      description:
        "Tomato is a modern and responsive food delivery website built with HTML, CSS, and Native JavaScript, offering a seamless user experience for ordering delicious meals online.",
      category: "JavaScript",
    },
    {
      title: "Daniels",
      img: Daniels,
      liveDemo: "https://daniels-orpin.vercel.app/",
      repo: "https://github.com/AhmedOsama143/DANIELS",
      description:
        "A modern and responsive personal portfolio template designed for developers, freelancers, or creatives.",
      category: "CSS & HTML",
    },
    // {
    //   title: "GameZone",
    //   img: GameZone,
    //   liveDemo: "https://mahmoudosman2611.github.io/Game-Zone/",
    //   repo: "https://github.com/mahmoudosman2611/Game-Zone",
    //   description:
    //     "Game Zone is a free gaming website built using HTML, CSS, and Vanilla JavaScript.",
    //   category: "JavaScript",
    // },
    // {
    //   title: "Yummy",
    //   img: Yummy,
    //   liveDemo: "https://mahmoudosman2611.github.io/Yummy/",
    //   repo: "https://github.com/mahmoudosman2611/Yummy",
    //   description:
    //     "Yummy is a website that offers delicious and healthy recipes in a simple way.",
    //   category: "JavaScript",
    // },
    {
      title: "Weather-app",
      img: Weather,
      liveDemo: "https://ahmedosama143.github.io/weather/",
      repo: "https://github.com/AhmedOsama143/weather",
      description:
        "Get accurate, real-time weather updates for any city worldwide.",
      category: "JavaScript",
    },

    {
      title: "Mealify",
      img: Mealify,
      liveDemo: "https://mealify-lac.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Mealify",
      description:
        "Mealify is a web application that allows users to search for recipes based on their ingredients.",
    },

    // {
    //   title: "SmartLogin",
    //   img: SmartLogin,
    //   liveDemo: "https://mahmoudosman2611.github.io/Simple-smart-login/",
    //   repo: "https://github.com/mahmoudosman2611/Simple-smart-login",
    //   description:
    //     "A responsive login system built with HTML, CSS, and JavaScript.",
    //   category: "JavaScript",
    // },
    // {
    //   title: "Bookmarker",
    //   img: Bookmarker,
    //   liveDemo: "https://mahmoudosman2611.github.io/Bookmark/",
    //   repo: "https://github.com/mahmoudosman2611/Bookmark",
    //   description:
    //     "Bookmark Manager is a fast and responsive web app for saving and organizing your favorite websites.",
    //   category: "JavaScript",
    // },
    // {
    //   title: "Quotes Generator",
    //   img: QuotesGenerator,
    //   liveDemo: "https://mahmoudosman2611.github.io/simple-quotes-generator/",
    //   repo: "https://github.com/mahmoudosman2611/simple-quotes-generator",
    //   description:
    //     "Simple Quotes Generator is a clean and responsive web app that displays a random quote.",
    //   category: "JavaScript",
    // },
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
              className="relative  rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md
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
