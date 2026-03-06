import { useState } from "react";
import Card from "../Card/Card";

// Company projects
import TokoStoreImg from "../../assets/imgs/toko-store.webp";
import TokoDashboardImg from "../../assets/imgs/toko-dashboard.webp";
import StudiOfyImg from "../../assets/imgs/studiofy.webp";
import MediflowBookingImg from "../../assets/imgs/mediflow-booking.webp";
import MediflowAdminImg from "../../assets/imgs/mediflow-admin.webp";
import MediflowDashboardImg from "../../assets/imgs/mediflow-dashboard.webp";
import SignatureStaysImg from "../../assets/imgs/signature-stays.webp";
import StudiioImg from "../../assets/imgs/studiio.webp";

// Personal projects
import FreshCartImg from "../../assets/imgs/FreshCart.webp";
import Spylt from "../../assets/imgs/spylt.webp";
import FokirImg from "../../assets/imgs/Fokkir.webp";
import DevfolioImg from "../../assets/imgs/devfoilo.webp";
import Daniels from "../../assets/imgs/Daniels.webp";
import Weather from "../../assets/imgs/Weather.webp";
import Fashion from "../../assets/imgs/Fashion.webp";
import Tomato from "../../assets/imgs/Tomato.webp";
import Iphone from "../../assets/imgs/Iphone.webp";
import Mealify from "../../assets/imgs/Mealify.webp";
import SimpleEcommerce from "../../assets/imgs/simple E-Commerce.webp";

import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../../context/LanguageContext";

const AOS_TYPES = ["fade-up", "zoom-in", "fade-right", "fade-left"];

export default function Projects() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Company", "React", "JavaScript", "CSS & HTML"];

  const projects = [
    { title: "Signature Stays", img: SignatureStaysImg, liveDemo: "https://signaturestays.io/", category: "Company", tags: ["Next.js", "React", "Booking", "Tailwind"] },
    { title: "Studiio", img: StudiioImg, liveDemo: "https://studiio-app.netlify.app/", category: "Company", tags: ["Next.js", "React", "Dashboard", "i18n"] },
    { title: "Toko Store", img: TokoStoreImg, liveDemo: "https://toko.mantaray.digital/", category: "Company", tags: ["Next.js", "React", "E-commerce", "Tailwind"] },
    { title: "Toko Dashboard", img: TokoDashboardImg, liveDemo: "https://dashboard.toko.mantaray.digital/login", category: "Company", tags: ["Next.js", "React", "Dashboard", "Tailwind"] },
    { title: "Studiofy", img: StudiOfyImg, liveDemo: "https://web-production-5875b.up.railway.app/login", category: "Company", tags: ["Next.js", "React", "AI", "SaaS"] },
    { title: "MediFlow Booking", img: MediflowBookingImg, liveDemo: "https://mediflow-sigma-sooty.vercel.app/en/book/admin-ml9boma0", category: "Company", tags: ["Next.js", "React", "i18n", "Healthcare"] },
    { title: "MediFlow Admin", img: MediflowAdminImg, liveDemo: "https://mediflow-sigma-sooty.vercel.app/en/admin-auth/login", category: "Company", tags: ["Next.js", "React", "Dashboard", "RTL"] },
    { title: "MediFlow Dashboard", img: MediflowDashboardImg, liveDemo: "https://mediflow-sigma-sooty.vercel.app/en/dashboard", category: "Company", tags: ["Next.js", "React", "Dashboard", "i18n"] },
    { title: "Fresh Cart", img: FreshCartImg, liveDemo: "https://ahmed-osama-fresh-cart-psi-five.vercel.app/signin", repo: "https://github.com/AhmedOsama143/FreshCart", category: "React", tags: ["React", "API", "Context", "Tailwind"] },
    { title: "SPYLT CAN ANIMATION", img: Spylt, liveDemo: "https://ahmedosama143.github.io/SPYLT-Milk/", repo: "https://github.com/AhmedOsama143/SPYLT-Milk", category: "React", tags: ["React", "GSAP", "Responsive"] },
    { title: "Cukur Store", img: SimpleEcommerce, liveDemo: "https://ahmedosama143.github.io/simple-E-Commerce/", repo: "https://github.com/AhmedOsama143/simple-E-Commerce", category: "React", tags: ["React", "Router"] },
    { title: "Fashion", img: Fashion, liveDemo: "https://fashion-five-lac.vercel.app/", repo: "https://github.com/AhmedOsama143/fashion", category: "JavaScript", tags: ["JavaScript", "API", "CSS"] },
    { title: "Fokir", img: FokirImg, liveDemo: "https://fokir-rho.vercel.app/", repo: "https://github.com/AhmedOsama143/Fokir", category: "CSS & HTML", tags: ["HTML", "CSS", "Bootstrap"] },
    { title: "Iphone 15 Model", img: Iphone, liveDemo: "https://iphone-model-ahmed-osama.vercel.app/", repo: "https://github.com/AhmedOsama143/Iphone-Model", category: "React", tags: ["React", "3D", "CSS"] },
    { title: "Devfolio", img: DevfolioImg, liveDemo: "https://dev-folio-25yd.vercel.app/", repo: "https://github.com/AhmedOsama143/DevFolio", category: "CSS & HTML", tags: ["HTML", "CSS", "Bootstrap", "Typed.js"] },
    { title: "Tomato", img: Tomato, liveDemo: "https://food-delivery-rho-sand.vercel.app/", repo: "https://github.com/AhmedOsama143/Food-delivery", category: "JavaScript", tags: ["JavaScript", "CSS", "Responsive"] },
    { title: "Daniels", img: Daniels, liveDemo: "https://daniels-orpin.vercel.app/", repo: "https://github.com/AhmedOsama143/DANIELS", category: "CSS & HTML", tags: ["HTML", "CSS", "Bootstrap"] },
    { title: "Weather-app", img: Weather, liveDemo: "https://ahmedosama143.github.io/weather/", repo: "https://github.com/AhmedOsama143/weather", category: "JavaScript", tags: ["JavaScript", "API"] },
    { title: "Mealify", img: Mealify, liveDemo: "https://mealify-lac.vercel.app/", repo: "https://github.com/AhmedOsama143/Mealify", tags: ["HTML", "CSS", "JavaScript"] },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative scroll-mt-28 bg-surface text-heading py-16 md:py-20 overflow-hidden"
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
        className="pointer-events-none absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 45%),
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20">
        <div className="mb-8 text-center">
          <h2
            className="inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
                       bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 dark:from-primary-300 dark:via-primary-200 dark:to-primary-50 bg-clip-text text-transparent
                       drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]"
          >
            {t.projects.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            {t.projects.subtitle}
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
                  : "bg-surface-card text-body border-stroke hover:bg-surface-elevated"
              }`}
            >
              {t.projects.categories[cat] || cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              data-aos={AOS_TYPES[index % AOS_TYPES.length]}
              data-aos-delay={index * 100}
              className="relative rounded-2xl border border-stroke bg-surface-card p-1 backdrop-blur-md
                          shadow-sm dark:shadow-[0_0_24px_rgba(59,130,246,0.08)]
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
            >
              <Card
                {...project}
                description={t.projects.descriptions[project.title] || project.title}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-muted">
          {t.projects.moreProjects}
        </div>
      </div>
    </section>
  );
}
