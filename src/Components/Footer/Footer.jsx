import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const RING_RADIUS = 18;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export default function Footer() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector("section");
      if (firstSection) {
        const sectionHeight = firstSection.offsetHeight;
        setIsVisible(window.scrollY > sectionHeight);
      }

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(window.scrollY / scrollHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const strokeDashoffset = RING_CIRCUMFERENCE * (1 - scrollProgress);

  return (
    <footer id="Footer" className="relative overflow-hidden bg-surface text-heading py-4">
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
      <div
        className="pointer-events-none absolute -top-24 -left-24 hidden md:block h-80 w-80 rounded-full blur-3xl opacity-5 dark:opacity-25"
        style={{
          background: "radial-gradient(closest-side, rgba(29,78,216,0.35), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 hidden md:block h-[26rem] w-[26rem] rounded-full blur-3xl opacity-5 dark:opacity-25"
        style={{
          background: "radial-gradient(closest-side, rgba(59,130,246,0.28), transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20 py-12 md:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* About */}
          <div className="space-y-3 rounded-2xl border border-stroke bg-surface-card p-5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h2 className="font-extrabold text-2xl bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 dark:from-primary-300 dark:via-primary-200 dark:to-primary-50 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.25)]">
              {t.footer.name}
            </h2>
            <p className="text-muted">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 rounded-2xl border border-stroke bg-surface-card p-5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl text-primary-700 dark:text-primary-200">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: t.footer.quickLinks.about },
                { href: "#skills", label: t.footer.quickLinks.skills },
                { href: "#projects", label: t.footer.quickLinks.projects },
                { href: "#contact", label: t.footer.quickLinks.contact },
                {
                  href: "Ahmed-Kholief-cv.pdf",
                  label: t.footer.quickLinks.downloadCV,
                  external: true,
                  download: true,
                },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noreferrer", download: l.download }
                      : {})}
                    className="text-body hover:text-primary-600 dark:hover:text-primary-200 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 rounded-2xl border hover:scale-105 transition-transform duration-300 border-stroke bg-surface-card p-4 md:p-5 backdrop-blur-md">
            <h3 className="font-bold text-lg md:text-xl text-primary-700 dark:text-primary-200">
              {t.footer.contactTitle}
            </h3>

            <ul className="space-y-2.5 md:space-y-3">
              {/* Email */}
              <li className="min-w-0 flex items-center gap-3 text-body hover:text-primary-600 dark:hover:text-primary-200 transition-colors">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-stroke bg-surface">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a
                  href="mailto:ahmedkholief143@gmail.com"
                  className="flex-1 min-w-0 break-words leading-5 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 rounded-sm"
                  aria-label="Send email to ahmedkholief143@gmail.com"
                >
                  ahmedkholief143@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="min-w-0 flex items-center gap-3 text-body hover:text-primary-600 dark:hover:text-primary-200 transition-colors">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-stroke bg-surface">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <a
                  href="https://wa.me/201271989421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 break-words leading-5 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 rounded-sm"
                  aria-label="Chat on WhatsApp +201271989421"
                >
                  +201271989421
                </a>
              </li>

              {/* Location */}
              <li className="min-w-0 flex items-center gap-3 text-body hover:text-primary-600 dark:hover:text-primary-200 transition-colors">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-stroke bg-surface">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span className="flex-1 min-w-0 break-words leading-5">
                  {t.contact.locationValue}
                </span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="space-y-3 rounded-2xl border border-stroke bg-surface-card p-5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl text-primary-700 dark:text-primary-200">
              {t.footer.followTitle}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {[
                { href: "https://github.com/AhmedOsama143", icon: faGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/ahmedkholief/", icon: faLinkedin, label: "LinkedIn" },
                { href: "https://x.com/AhmedOs66268732", icon: faXTwitter, label: "Twitter" },
                { href: "https://www.instagram.com/aahmedosamaa/", icon: faInstagram, label: "Instagram" },
                { href: "https://www.facebook.com/ahmed.osama.kholief", icon: faFacebookF, label: "Facebook" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-surface text-body
                               hover:text-primary-600 dark:hover:text-primary-50 hover:border-primary-400/40 hover:shadow-[0_0_18px_rgba(59,130,246,0.45)]
                               transition-all"
                  >
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-2 flex flex-col gap-3 sm:flex-row items-center justify-between pt-4 border-t border-stroke">
          <p className="text-muted text-sm text-center sm:text-start">
            &copy; {new Date().getFullYear()} <strong>{t.footer.name}</strong>.{" "}
            {t.footer.copyright}
          </p>
        </div>
      </div>

      {/* Back to top with progress ring */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.footer.backToTop}
          className="fixed bottom-6 end-6 z-[60] group"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 blur-[14px] opacity-60 group-hover:opacity-80 transition" />
          <span className="relative inline-flex items-center justify-center h-12 w-12">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={RING_RADIUS}
                fill="none"
                stroke="rgba(148,163,184,0.25)"
                strokeWidth="3"
              />
              <circle
                cx="22"
                cy="22"
                r={RING_RADIUS}
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE}
                strokeDashoffset={strokeDashoffset}
                className="progress-ring-circle"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
            </svg>
            <span className="relative inline-flex items-center justify-center rounded-full bg-primary-600 hover:bg-primary-700 text-white h-9 w-9 shadow-lg transition">
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </span>
        </button>
      )}
    </footer>
  );
}
