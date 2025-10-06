import React from "react";
import aboutImg from "../../assets/imgs/AhmedKholiefIMG.jpg";
import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp } from "react-icons/fa";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black text-white py-16 md:py-20 lg:py-28"
    >
      <FloatingFAIcons
        icons={[faCode, faHtml5, faCss3Alt, faJs, faReact, faBootstrap]}
        count={10}
        colors={["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"]}
        sizeRange={[20, 34]}
        duration={[12, 20]}
        sway={22}
      />
      {/* Neon grid */}
      <div
        className="absolute inset-0 opacity-20 md:opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15), transparent 40%),
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          backgroundPosition: "center, center, center",
        }}
      />

      {/* Aurora blobs */}
      <div className="hidden md:block pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30 aurora" />
      <div className="hidden md:block pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 aurora-2" />

      {/* Star dust */}
      <div className="pointer-events-none absolute inset-0 stars opacity-20 md:opacity-40" />

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-20">
        {/* Header */}
        <header className="max-w-3xl" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm tracking-wider border border-white/20">
            <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
            ABOUT ME
          </span>

          <p className="mt-4 text-white/80">
            I&apos;m a Civil Engineer turned Frontend Developer. My curiosity
            for technology and problem‑solving led me to study programming and
            shift my career into web development. Today I build modern, fast,
            and accessible interfaces.
          </p>
          {/* New line for certification */}
          <div className="mt-3 flex items-center gap-2 text-primary-200 font-medium">
            <div className="mt-3 flex items-center gap-3 text-primary-200 font-medium">
              <div className="h-2 w-2 shrink-0  rounded-full bg-primary-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />

              <p>
                Graduated with a Certified Diploma in Frontend Development from
                ITI (Information Technology Institute)
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-primary-200 font-medium">
            <div className="mt-3 flex items-center gap-3 text-primary-200 font-medium">
              <div className="h-2 w-2 shrink-0  rounded-full bg-primary-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />

              <p>
                Certified Diploma in Frontend Development from Route IT Training
                Center
              </p>
            </div>
          </div>
        </header>

        {/* Grid: image first on mobile, side-by-side on desktop */}
        <div className="mt-10 grid items-start gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Image column: first on mobile */}
          <div className="order-1 lg:order-none">
            <div
              className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 mx-auto"
              data-aos="zoom-in"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary-600/50 to-primary-300/30 blur" />
              <img
                src={aboutImg}
                alt="Ahmed Kholief"
                className="relative h-full w-full rounded-3xl object-cover ring-1 ring-white/10"
                loading="lazy"
                width="600"
                height="600"
                sizes="(min-width:1024px) 288px, (min-width:768px) 288px, 192px"
              />
              {/* small orbiting dot */}
              <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary-400 shadow-[0_0_18px_rgba(96,165,250,0.9)] animate-ping motion-reduce:hidden" />
            </div>

            {/* Quick skills */}
            <ul
              className="mt-6 grid grid-cols-2 gap-3 text-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {[
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 text-center sm:text-left"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Text column */}
          <div className="order-2 lg:order-none space-y-7">
            <div
              className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.10)]"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold text-primary-200">
                Quick Overview
              </h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                I combine an engineering mindset with modern frontend practices
                to deliver clean, reusable, and scalable UI systems. I optimize
                bundle size, use code‑splitting and lazy loading, and leverage
                skeletons to improve perceived performance.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-center gap-3">
                {/* Download CV */}
                <a
                  href="/cv.pdf"
                  download="Ahmed_Kholief_CV.pdf"
                  className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 opacity-90 blur-[10px] transition group-hover:blur-[14px]" />
                  <span className="relative rounded-full bg-black/60 px-5 py-2.5 border border-white/20">
                    Download CV
                  </span>
                </a>

                {/* Contact Me */}
                <a
                  href="https://wa.me/201271989421?text=Hello%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm hover:bg-white/10 transition"
                >
                  <FaWhatsapp className="text-green-500 text-lg" />
                  Contact Me
                </a>
              </div>
            </div>

            {/* Highlights */}
            <div
              className="grid sm:grid-cols-3 gap-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {[
                { label: "Projects", value: "15+" },
                { label: "Technologies", value: "10+" },
                { label: "Lighthouse", value: "90%+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center"
                >
                  <div className="text-3xl font-extrabold text-primary-200">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div
              className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-lg font-semibold text-primary-200">
                Favorite Technologies
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Bootstrap",

                  "AOS / Framer Motion",
                  "Vercel / Netlify",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local styles */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-12px) translateX(6px); }
        }
        .aurora {
          background:
            radial-gradient(closest-side, rgba(59,130,246,0.35), transparent 70%),
            radial-gradient(closest-side, rgba(29,78,216,0.30), transparent 60%);
          animation: float 8s ease-in-out infinite;
        }
        .aurora-2 {
          background:
            radial-gradient(closest-side, rgba(29,78,216,0.35), transparent 70%),
            radial-gradient(closest-side, rgba(59,130,246,0.25), transparent 60%);
          animation: float 10s ease-in-out infinite reverse;
        }
        .stars {
          background-image:
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.9), transparent 60%),
            radial-gradient(1.5px 1.5px at 80% 20%, rgba(255,255,255,0.8), transparent 60%),
            radial-gradient(1.8px 1.8px at 60% 70%, rgba(255,255,255,0.85), transparent 60%),
            radial-gradient(1.2px 1.2px at 30% 80%, rgba(255,255,255,0.8), transparent 60%),
            radial-gradient(1.3px 1.3px at 50% 50%, rgba(255,255,255,0.75), transparent 60%);
          background-repeat: no-repeat;
          background-size: cover;
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora, .aurora-2 { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
