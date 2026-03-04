import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const milestones = [
  {
    year: "2025",
    title: "Frontend Developer",
    org: "Mantaray Digital Solutions",
    description:
      "Building production-grade web applications at a digital product studio that partners with startups and enterprises across Egypt and the GCC to design, develop, and scale SaaS platforms, e-commerce stores, and healthcare systems. Working with Next.js, React, and Tailwind CSS to deliver responsive, bilingual (EN/AR) interfaces with a focus on performance and clean UX.",
    icon: faBriefcase,
  },
  {
    year: "2024",
    title: "Frontend Development Diploma",
    org: "ITI — Information Technology Institute",
    description:
      "Intensive certified diploma covering React, TypeScript, Next.js, and modern web development practices.",
    icon: faGraduationCap,
  },
  {
    year: "2023",
    title: "Frontend Development Diploma",
    org: "Route IT Training Center",
    description:
      "Comprehensive program in HTML, CSS, JavaScript, React, and frontend frameworks with hands-on projects.",
    icon: faCertificate,
  },
  {
    year: "2022",
    title: "Career Transition to Web Development",
    org: "Self-directed Learning",
    description:
      "Transitioned from Civil Engineering into web development through disciplined self-study and building real-world projects.",
    icon: faRocket,
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black text-white py-16 md:py-24"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(59,130,246,0.2), transparent 50%)",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]">
            Experience
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Key milestones in my journey from engineering to frontend
            development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-primary-400/20 to-transparent" />

          {milestones.map((m, i) => (
            <div
              key={m.title}
              className="relative mb-12 last:mb-0"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 120}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 z-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-primary-400/60 bg-black shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                  <FontAwesomeIcon
                    icon={m.icon}
                    className="text-primary-300 text-sm"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  i % 2 === 0
                    ? "md:mr-auto md:pr-0"
                    : "md:ml-auto md:pl-0"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.08)] hover:shadow-[0_0_34px_rgba(59,130,246,0.18)] transition-all duration-300">
                  <span className="inline-block rounded-full bg-primary-500/20 px-3 py-0.5 text-xs font-semibold text-primary-300 mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {m.title}
                  </h3>
                  <p className="text-sm text-primary-200/70 mt-0.5">{m.org}</p>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
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
