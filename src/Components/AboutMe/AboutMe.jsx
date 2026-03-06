import React from "react";
import aboutImg from "../../assets/imgs/AhmedKholiefIMG.webp";
import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();

  const statsArr = [
    t.about.stats.projects,
    t.about.stats.technologies,
    t.about.stats.lighthouse,
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface text-heading py-16 md:py-20 lg:py-28"
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
        className="absolute inset-0 opacity-5 dark:opacity-20 md:dark:opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15), transparent 40%),
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          backgroundPosition: "center, center, center",
        }}
      />

      {/* Aurora blobs */}
      <div className="hidden md:block pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-5 dark:opacity-30 aurora" />
      <div className="hidden md:block pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-5 dark:opacity-25 aurora-2" />

      {/* Star dust */}
      <div className="pointer-events-none absolute inset-0 stars opacity-0 dark:opacity-20 md:dark:opacity-40" />

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-20">
        {/* Header */}
        <header className="max-w-3xl" data-aos="fade-right">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface-elevated px-3 py-1 text-xs md:text-sm tracking-wider border border-stroke">
            <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
            {t.about.badge}
          </span>

          <p className="mt-4 text-body">{t.about.intro}</p>

          {/* Certifications */}
          <div className="mt-3 flex items-center gap-2 text-primary-700 dark:text-primary-200 font-medium">
            <div className="mt-3 flex items-center gap-3 text-primary-700 dark:text-primary-200 font-medium">
              <div className="h-2 w-2 shrink-0 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
              <p>{t.about.certification1}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-primary-700 dark:text-primary-200 font-medium">
            <div className="mt-3 flex items-center gap-3 text-primary-700 dark:text-primary-200 font-medium">
              <div className="h-2 w-2 shrink-0 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
              <p>{t.about.certification2}</p>
            </div>
          </div>
        </header>

        {/* Grid */}
        <div className="mt-10 grid items-start gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Image column */}
          <div className="order-1 lg:order-none">
            <div
              className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 mx-auto"
              data-aos="zoom-in"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary-600/50 to-primary-300/30 blur" />
              <img
                src={aboutImg}
                alt="Ahmed Kholief"
                className="relative h-full w-full rounded-3xl object-cover ring-1 ring-stroke"
                loading="lazy"
                width="600"
                height="600"
                sizes="(min-width:1024px) 288px, (min-width:768px) 288px, 192px"
              />
              <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary-400 shadow-[0_0_18px_rgba(96,165,250,0.9)] animate-ping motion-reduce:hidden" />
            </div>

            {/* Quick skills */}
            <ul
              className="mt-6 grid grid-cols-2 gap-3 text-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t.about.quickSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-xl bg-surface-card px-4 py-3 ring-1 ring-stroke text-center sm:text-start"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Text column */}
          <div className="order-2 lg:order-none space-y-7">
            <div
              className="rounded-3xl border border-stroke bg-surface-card p-6 md:p-8 backdrop-blur-md shadow-md dark:shadow-[0_0_30px_rgba(59,130,246,0.10)]"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-200">
                {t.about.overviewTitle}
              </h3>
              <p className="mt-3 text-body leading-relaxed">
                {t.about.overviewText}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-center gap-3">
                <a
                  href="Ahmed-Kholief-cv.pdf"
                  download="Ahmed-Kholief-cv.pdf"
                  className="group relative inline-flex items-center justify-center rounded-full text-[16px] font-medium"
                >
                  <span className="relative rounded-full hover:bg-surface-elevated transition bg-surface-card px-5 py-2.5 border border-stroke">
                    {t.about.downloadCV}
                  </span>
                </a>

                <a
                  href="https://wa.me/201271989421?text=Hello%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stroke bg-surface-card px-6 py-3 text-sm hover:bg-surface-elevated transition"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-lg" />
                  {t.about.contactMe}
                </a>
              </div>
            </div>

            {/* Highlights */}
            <div
              className="grid sm:grid-cols-3 gap-4"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              {statsArr.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-stroke bg-surface-card px-5 py-6 text-center"
                >
                  <div className="text-3xl font-extrabold text-primary-700 dark:text-primary-200">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div
              className="rounded-3xl border border-stroke bg-surface-card p-6 md:p-8"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-200">
                {t.about.favTechTitle}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.about.favTech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stroke bg-surface-card px-3 py-1.5 text-xs text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
