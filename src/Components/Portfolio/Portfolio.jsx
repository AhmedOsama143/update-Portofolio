import React, { useState, useEffect, useCallback } from "react";
import Ahmed from "../../assets/imgs/AhmedKholiefIMG.webp";
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
import { useLanguage } from "../../context/LanguageContext";

function useTypingAnimation(phrases, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1800) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [displayText, phraseIndex, isDeleting, phrases, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return displayText;
}

export default function Portfolio() {
  const { t } = useLanguage();
  const typedText = useTypingAnimation(t.hero.taglines);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-surface text-heading py-10 md:py-20 lg:pt-28"
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
      <div className="hidden md:block pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-5 dark:opacity-30 aurora" />
      <div className="hidden md:block pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-5 dark:opacity-25 aurora-2" />

      {/* Star dust */}
      <div className="pointer-events-none absolute inset-0 stars opacity-0 dark:opacity-20 md:dark:opacity-40" />

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-20 py-10 md:py-16">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
          {/* Left: Text card */}
          <div className="order-2 lg:order-1 animate__animated animate__backInLeft">
            <div className="max-w-xl rounded-3xl border border-stroke bg-surface-card p-6 md:p-8 backdrop-blur-md shadow-md dark:shadow-[0_0_30px_rgba(59,130,246,0.10)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-elevated px-3 py-1 text-xs md:text-sm tracking-wider border border-stroke">
                <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
                {t.hero.badge}
              </span>

              <h1 className="mt-4 font-extrabold leading-tight break-words text-2xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 dark:from-primary-300 dark:via-primary-200 dark:to-primary-50 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                  {t.hero.name}
                </span>
              </h1>

              <p className="mt-3 text-base md:text-lg text-body min-h-[1.75rem]">
                {typedText}
                <span className="typing-cursor" />
              </p>

              {/* Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {t.hero.techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-stroke bg-surface-card px-3 py-1 text-xs text-body"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-1">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 blur-md opacity-60 group-hover:opacity-80 transition" />
                  <span className="relative rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-[0_0_24px_rgba(59,130,246,0.6)] transition-all">
                    {t.hero.viewProjects}
                  </span>
                </a>

                <a
                  href="Ahmed-Kholief-cv.pdf"
                  download="Ahmed-Kholief-cv.pdf"
                  className="group relative inline-flex items-center justify-center rounded-full sm:ms-4 text-sm font-medium"
                >
                  <span className="relative rounded-full bg-surface-card px-5 py-2.5 hover:bg-surface-elevated transition border border-stroke">
                    {t.hero.downloadCV}
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="lottieIcons flex justify-start items-center gap-1 mt-4">
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
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary-500 via-primary-400 to-transparent opacity-20 dark:opacity-30 md:opacity-30 dark:md:opacity-50 blur-2xl" />

              {/* Image */}
              <img
                src={Ahmed}
                alt="Ahmed Kholief"
                className="relative aspect-square w-40 sm:w-56 md:w-80 lg:w-[520px] rounded-full object-cover shadow-[0_10px_40px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)] ring-2 ring-stroke-strong md:ring-stroke-strong"
                loading="eager"
                sizes="(min-width:1024px) 520px, (min-width:768px) 320px, 160px"
              />

              {/* Orbiting dot */}
              <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary-400 shadow-[0_0_18px_rgba(96,165,250,0.9)] animate-ping motion-reduce:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
