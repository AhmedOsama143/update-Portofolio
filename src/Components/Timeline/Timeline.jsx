import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/LanguageContext";

const ICONS = [faBriefcase, faGraduationCap, faCertificate, faRocket];

export default function Timeline() {
  const { t } = useLanguage();
  const milestones = t.timeline.milestones.map((m, i) => ({
    ...m,
    icon: ICONS[i],
  }));

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-surface text-heading py-16 md:py-24"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5 dark:opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(59,130,246,0.2), transparent 50%)",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 dark:from-primary-300 dark:via-primary-200 dark:to-primary-50 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]">
            {t.timeline.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            {t.timeline.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute start-[19px] md:start-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-primary-400/20 to-transparent" />

          {milestones.map((m, i) => (
            <div
              key={m.title}
              className="relative mb-12 last:mb-0"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 120}
            >
              {/* Timeline dot */}
              <div className="absolute start-0 md:start-1/2 md:-translate-x-1/2 top-1 z-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-primary-400/60 bg-surface shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                  <FontAwesomeIcon
                    icon={m.icon}
                    className="text-primary-500 dark:text-primary-300 text-sm"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`ms-14 md:ms-0 md:w-[calc(50%-2.5rem)] ${
                  i % 2 === 0
                    ? "md:me-auto md:pe-0"
                    : "md:ms-auto md:ps-0"
                }`}
              >
                <div className="rounded-2xl border border-stroke bg-surface-card p-5 md:p-6 backdrop-blur-md shadow-sm dark:shadow-[0_0_24px_rgba(59,130,246,0.08)] hover:shadow-md dark:hover:shadow-[0_0_34px_rgba(59,130,246,0.18)] transition-all duration-300">
                  <span className="inline-block rounded-full bg-primary-500/20 px-3 py-0.5 text-xs font-semibold text-primary-600 dark:text-primary-300 mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-semibold text-heading">
                    {m.title}
                  </h3>
                  <p className="text-sm text-primary-600/70 dark:text-primary-200/70 mt-0.5">{m.org}</p>
                  <p className="mt-2 text-sm text-body leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
