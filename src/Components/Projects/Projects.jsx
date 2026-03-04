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

const AOS_TYPES = ["fade-up", "zoom-in", "fade-right", "fade-left"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Company", "React", "JavaScript", "CSS & HTML"];

  const projects = [
    // ── Company Projects (first) ──
    {
      title: "Signature Stays",
      img: SignatureStaysImg,
      liveDemo: "https://signaturestays.io/",
      description:
        "Luxury apartment rental platform in New Cairo featuring property listings, guest reviews, booking search, and a partner management program. Fully responsive with a modern, elegant design.",
      category: "Company",
      tags: ["Next.js", "React", "Booking", "Tailwind"],
    },
    {
      title: "Studiio",
      img: StudiioImg,
      liveDemo: "https://studiio-app.netlify.app/",
      description:
        "Comprehensive studio management SaaS for gyms and fitness centers. Manages class templates, schedules, customers, payments, staff, and multi-branch operations with bilingual English/Arabic support.",
      category: "Company",
      tags: ["Next.js", "React", "Dashboard", "i18n"],
    },
    {
      title: "Toko Store",
      img: TokoStoreImg,
      liveDemo: "https://toko.mantaray.digital/",
      description:
        "E-commerce platform for collectible 3D-printed characters and mystery boxes. Features product browsing, FAQ section, Instagram feed integration, and a vibrant brand experience.",
      category: "Company",
      tags: ["Next.js", "React", "E-commerce", "Tailwind"],
    },
    {
      title: "Toko Dashboard",
      img: TokoDashboardImg,
      liveDemo: "https://dashboard.toko.mantaray.digital/login",
      description:
        "Admin management dashboard for the Toko collectibles platform. Handles products, orders, inventory tracking, and business analytics.",
      category: "Company",
      tags: ["Next.js", "React", "Dashboard", "Tailwind"],
    },
    {
      title: "Studiofy",
      img: StudiOfyImg,
      liveDemo: "https://web-production-5875b.up.railway.app/login",
      description:
        "AI-powered product photography SaaS that transforms product images with professional studio backgrounds in under 60 seconds. Features Google OAuth and credit-based usage.",
      category: "Company",
      tags: ["Next.js", "React", "AI", "SaaS"],
    },
    {
      title: "MediFlow Booking",
      img: MediflowBookingImg,
      liveDemo: "https://mediflow-clinic.netlify.app/en/book/admin-ml9boma0",
      description:
        "Patient-facing booking interface for the MediFlow clinic management system. Supports bilingual English/Arabic with seamless appointment scheduling.",
      category: "Company",
      tags: ["Next.js", "React", "i18n", "Healthcare"],
    },
    {
      title: "MediFlow Admin",
      img: MediflowAdminImg,
      liveDemo: "https://mediflow-clinic.netlify.app/en/admin/dashboard",
      description:
        "Comprehensive admin dashboard for clinic management — appointments, patients, doctors, and analytics with full RTL Arabic support.",
      category: "Company",
      tags: ["Next.js", "React", "Dashboard", "RTL"],
    },
    {
      title: "MediFlow Dashboard",
      img: MediflowDashboardImg,
      liveDemo: "https://mediflow-clinic.netlify.app/en/dashboard",
      description:
        "Patient portal for viewing appointments, medical history, and managing bookings. Features bilingual interface with English and Arabic support.",
      category: "Company",
      tags: ["Next.js", "React", "Dashboard", "i18n"],
    },

    // ── Personal Projects ──
    {
      title: "Fresh Cart",
      img: FreshCartImg,
      liveDemo: "https://ahmed-osama-fresh-cart-psi-five.vercel.app/signin",
      repo: "https://github.com/AhmedOsama143/FreshCart",
      description:
        "FreshCart is a fast and modern online store for fresh groceries and essentials. Enjoy easy browsing, secure checkout, and quick delivery to your door.",
      category: "React",
      tags: ["React", "API", "Context", "Tailwind"],
    },
    {
      title: "SPYLT CAN ANIMATION",
      img: Spylt,
      liveDemo: "https://ahmedosama143.github.io/SPYLT-Milk/",
      repo: "https://github.com/AhmedOsama143/SPYLT-Milk",
      description:
        "SPYLT Milk is an interactive website showcasing protein drinks in a variety of flavors, featuring smooth browsing with GSAP animations. Videos and images are displayed dynamically, encouraging users to explore and engage with the products. The design is fully responsive, optimized for mobile, tablet, and desktop screens.",
      category: "React",
      tags: ["React", "GSAP", "Responsive"],
    },
    {
      title: "Cukur Store",
      img: SimpleEcommerce,
      liveDemo: "https://ahmedosama143.github.io/simple-E-Commerce/",
      repo: "https://github.com/AhmedOsama143/simple-E-Commerce",
      description:
        "A React Router application created as a hands-on practice project to learn and improve routing skills in React.",
      category: "React",
      tags: ["React", "Router"],
    },
    {
      title: "Fashion",
      img: Fashion,
      liveDemo: "https://fashion-five-lac.vercel.app/",
      repo: "https://github.com/AhmedOsama143/fashion",
      description:
        "Fashion is a sleek and modern e-commerce website built with Native JavaScript and API integration, offering a seamless shopping experience for fashion enthusiasts.",
      category: "JavaScript",
      tags: ["JavaScript", "API", "CSS"],
    },
    {
      title: "Fokir",
      img: FokirImg,
      liveDemo: "https://fokir-rho.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Fokir",
      description:
        "Fokir is a fully responsive website designed with HTML, CSS, and Bootstrap. It offers a seamless user experience with a clean and modern design.",
      category: "CSS & HTML",
      tags: ["HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Iphone 15 Model",
      img: Iphone,
      liveDemo: "https://iphone-model-ahmed-osama.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Iphone-Model",
      description:
        "Iphone 15 Model is a responsive product landing page built with React and Simulates reality, showcasing the latest iPhone features and design.",
      category: "React",
      tags: ["React", "3D", "CSS"],
    },
    {
      title: "Devfolio",
      img: DevfolioImg,
      liveDemo: "https://dev-folio-25yd.vercel.app/",
      repo: "https://github.com/AhmedOsama143/DevFolio",
      description:
        "Devfolio is a modern, responsive personal portfolio built using HTML, CSS, Bootstrap, and the Typed.js library.",
      category: "CSS & HTML",
      tags: ["HTML", "CSS", "Bootstrap", "Typed.js"],
    },
    {
      title: "Tomato",
      img: Tomato,
      liveDemo: "https://food-delivery-rho-sand.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Food-delivery",
      description:
        "Tomato is a modern and responsive food delivery website built with HTML, CSS, and Native JavaScript, offering a seamless user experience for ordering delicious meals online.",
      category: "JavaScript",
      tags: ["JavaScript", "CSS", "Responsive"],
    },
    {
      title: "Daniels",
      img: Daniels,
      liveDemo: "https://daniels-orpin.vercel.app/",
      repo: "https://github.com/AhmedOsama143/DANIELS",
      description:
        "A modern and responsive personal portfolio template designed for developers, freelancers, or creatives.",
      category: "CSS & HTML",
      tags: ["HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Weather-app",
      img: Weather,
      liveDemo: "https://ahmedosama143.github.io/weather/",
      repo: "https://github.com/AhmedOsama143/weather",
      description:
        "Get accurate, real-time weather updates for any city worldwide.",
      category: "JavaScript",
      tags: ["JavaScript", "API"],
    },
    {
      title: "Mealify",
      img: Mealify,
      liveDemo: "https://mealify-lac.vercel.app/",
      repo: "https://github.com/AhmedOsama143/Mealify",
      description:
        "Mealify is a web application that allows users to search for recipes based on their ingredients.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
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
              data-aos={AOS_TYPES[index % AOS_TYPES.length]}
              data-aos-delay={index * 100}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md
                          shadow-[0_0_24px_rgba(59,130,246,0.08)]
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
            >
              <Card {...project} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-white/60">
          * More projects available upon request.
        </div>
      </div>
    </section>
  );
}
