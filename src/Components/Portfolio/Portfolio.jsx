import React from "react";
import Ahmed from "../../assets/imgs/AhmedKholiefIMG.jpg";
import linkedinAnimation from "../../assets/jsonIcons/Linkedin Icon.json";
import GitHubicon from "../../assets/jsonIcons/GitHubicon.json";
import Gmail from "../../assets/jsonIcons/Gmail.json";
import "animate.css";
import Lottie from "lottie-react";
import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  return (
    <section
      id="home"
      className="relative  min-h-screen overflow-hidden bg-black text-white py-10 md:py-20 lg:pt-28"
    >
      <FloatingFAIcons
        icons={[faCode, faHtml5, faCss3Alt, faJs, faReact, faBootstrap]}
        count={10}
        colors={["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"]}
        sizeRange={[20, 34]}
        duration={[12, 20]}
        sway={22}
      />

      {/* Aurora blobs */}
      <div className="hidden md:block pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30 aurora" />
      <div className="hidden md:block pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 aurora-2" />

      {/* Star dust */}
      <div className="pointer-events-none absolute inset-0 stars opacity-20 md:opacity-40" />

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-20 py-10 md:py-16">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
          {/* Left: Text card */}
          <div className="order-2 lg:order-1 animate__animated animate__backInLeft">
            <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.10)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm tracking-wider border border-white/20">
                <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
                FRONTEND DEVELOPER
              </span>

              <h1 className="mt-4 font-extrabold leading-tight break-words text-2xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                  Ahmed&nbsp;Kholief
                </span>
              </h1>

              <p className="mt-3 text-base md:text-lg text-white/80">
                Building Modern Web Applications.
              </p>

              {/* Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "REACT", "NEXT"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-center gap-1">
                <a
                  href="#Projects"
                  className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
                >
                  <span className="relative rounded-full  hover:bg-white/10 transition bg-black/60 px-6 py-3 border border-white/20">
                    View Projects
                  </span>
                </a>

                <a
                  href="Ahmed-Kholief-cv.pdf"
                  download="Ahmed-Kholief-cv.pdf"
                  className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
                >
                  <span className="relative rounded-full bg-black/60 px-5 py-2.5 hover:bg-white/10 transition border border-white/20">
                    Download CV
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="lottieIcons flex justify-center items-center gap-1 mt-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                  <a target="_blank" href="https://github.com/AhmedOsama143">
                    <Lottie animationData={GitHubicon} loop autoplay />
                  </a>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ahmedkholief/"
                  >
                    <Lottie animationData={linkedinAnimation} loop autoplay />
                  </a>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                  <a href="mailto:ahmedkholief143@gmail.com">
                    <Lottie animationData={Gmail} loop autoplay />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Avatar with rotating irregular shape */}
          <div className="order-1 lg:order-2 flex justify-center animate__animated animate__backInRight">
            <div className="relative">
              {/* Rotating irregular blob */}
              <div className="absolute inset-10">
                <div className="w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-primary-500/70 via-primary-400/30 to-transparent blur-xl animate-spin-slow" />
              </div>

              {/* Glow background */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary-500 via-primary-400 to-transparent opacity-30 md:opacity-50 blur-2xl" />

              {/* Image */}
              <img
                src={Ahmed}
                alt="Ahmed Kholief"
                className="relative aspect-square w-40 sm:w-56 md:w-80 lg:w-[520px] rounded-full object-cover shadow-[0_10px_40px_rgba(0,0,0,0.7)] ring-2 ring-white/30 md:ring-white/40"
                loading="eager"
                sizes="(min-width:1024px) 520px, (min-width:768px) 320px, 160px"
              />

              {/* Orbiting dot */}
              <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary-400 shadow-[0_0_18px_rgba(96,165,250,0.9)] animate-ping motion-reduce:hidden" />
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora, .aurora-2, .animate-spin-slow { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
