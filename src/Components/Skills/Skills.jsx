import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faSass,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faWind,
  faDiagramProject,
  faMobileAlt,
  faServer,
  faCloud,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import { useLanguage } from "../../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", icon: faHtml5, color: "text-orange-500", percent: 95 },
    { name: "CSS", icon: faCss3Alt, color: "text-blue-500", percent: 90 },
    { name: "Bootstrap", icon: faBootstrap, color: "text-violet-600", percent: 85 },
    { name: "JavaScript", icon: faJs, color: "text-yellow-500", percent: 90 },
    { name: "React", icon: faReact, color: "text-sky-500", percent: 88 },
    { name: "Next.js", icon: faCode, color: "text-muted", percent: 70 },
    { name: "Tailwind", icon: faWind, color: "text-cyan-400", percent: 88 },
    { name: "Sass", icon: faSass, color: "text-pink-400", percent: 60 },
    { name: "TypeScript", icon: faCode, color: "text-blue-400", percent: 65 },
    { name: "Redux", icon: faDiagramProject, color: "text-purple-400", percent: 72 },
    { name: "Git & GitHub", icon: faGitAlt, color: "text-red-400", percent: 85 },
    { name: "Responsive Design", icon: faMobileAlt, color: "text-emerald-400", percent: 92 },
    { name: "REST APIs", icon: faServer, color: "text-indigo-400", percent: 78 },
    { name: "HTTP / JSON", icon: faCloud, color: "text-slate-400", percent: 80 },
    { name: "Debugging", icon: faBug, color: "text-amber-400", percent: 75 },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
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

      <div className="relative container mx-auto px-6 md:px-20">
        <div className="text-center mb-6">
          <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 dark:from-primary-300 dark:via-primary-200 dark:to-primary-50 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]">
            {t.skills.title}
            <span className="absolute left-[30%] -bottom-2 h-1 w-[50%] bg-gradient-to-r from-primary-500 via-primary-300 to-primary-50 rounded-full"></span>
          </h2>
        </div>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted">
          {t.skills.subtitle}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, index) => (
            <article
              key={s.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative rounded-2xl border border-stroke bg-surface-card p-5 backdrop-blur-md
                         shadow-sm dark:shadow-[0_0_24px_rgba(59,130,246,0.08)]
                         transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
            >
              <div className="relative flex items-start gap-4">
                <div className="shrink-0">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-surface border border-stroke ring-1 ring-primary-200 dark:ring-primary-700/40 group-hover:ring-primary-400 dark:group-hover:ring-primary-500/60 transition">
                    <FontAwesomeIcon
                      icon={s.icon}
                      className={`h-6 w-6 ${s.color}`}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base md:text-lg font-semibold text-heading">
                      {s.name}
                    </h3>
                    <span className="text-xs text-muted font-mono">
                      {s.percent}%
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-elevated">
                    <div
                      className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-300 shadow-[0_0_10px_rgba(59,130,246,0.45)_inset]"
                      style={{ width: isVisible ? `${s.percent}%` : "0%" }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
