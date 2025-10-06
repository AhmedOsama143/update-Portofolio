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

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector("section");
      if (firstSection) {
        const sectionHeight = firstSection.offsetHeight;
        setIsVisible(window.scrollY > sectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer
      id="Footer"
      className="relative  overflow-hidden bg-black text-white py-4"
    >
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
      <div
        className="pointer-events-none absolute -top-24 -left-24 hidden md:block h-80 w-80 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(29,78,216,0.35), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 hidden md:block h-[26rem] w-[26rem] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.28), transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20 py-12 md:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* About */}
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h2 className="font-extrabold text-2xl bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.25)]">
              Ahmed Kholief
            </h2>
            <p className="text-white/70">
              Frontend Developer — I build fast, accessible, and scalable web
              UIs. Let’s craft delightful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl text-primary-200">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#Projects", label: "Projects" },
                { href: "#ContactMe", label: "Contact" },
                {
                  href: "/Ahmed_Kholief_CV.pdf",
                  label: "Download CV",
                  external: true,
                  download: true,
                },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? {
                          target: "_blank",
                          rel: "noreferrer",
                          download: l.download,
                        }
                      : {})}
                    className="text-white/80 hover:text-primary-200 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 rounded-2xl border hover:scale-105 transition-transform duration-300 border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-md">
            <h3 className="font-bold text-lg md:text-xl text-primary-200">
              Contact
            </h3>

            <ul className="space-y-2.5 md:space-y-3">
              {/* Email */}
              <li className="min-w-0 flex items-center gap-3 text-white/80 hover:text-primary-200 transition-colors">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/40">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a
                  href="mailto:ahmedkholief143@gmail.com"
                  className="flex-1 min-w-0 break-words leading-5 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 rounded-sm"
                  aria-label="Send email to mahmoudosmann2018@gmail.com"
                >
                  ahmedkholief143@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="min-w-0 flex items-center gap-3 text-white/80 hover:text-primary-200 transition-colors">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/40">
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
              <li className="min-w-0 flex items-center gap-3 text-white/80 hover:text-primary-200 transition-colors">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/40">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span className="flex-1 min-w-0 break-words leading-5">
                  Alexandria, Egypt
                </span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl text-primary-200">Follow</h3>
            <ul className="flex flex-wrap gap-3">
              {[
                {
                  href: "https://github.com/AhmedOsama143",
                  icon: faGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/ahmedkholief/",
                  icon: faLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://x.com/AhmedOs66268732",
                  icon: faXTwitter,
                  label: "Twitter",
                },
                {
                  href: "https://www.instagram.com/aahmedosamaa/",
                  icon: faInstagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.facebook.com/ahmed.osama.kholief",
                  icon: faFacebookF,
                  label: "Facebook",
                },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80
                               hover:text-primary-50 hover:border-primary-400/40 hover:shadow-[0_0_18px_rgba(59,130,246,0.45)]
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
        <div className="mt-2 flex flex-col gap-3 sm:flex-row items-center justify-between pt-4 border-t border-white/10">
          <p className="text-white/70 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} <strong>Ahmed Kholief</strong>.
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[60] group"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 blur-[14px] opacity-60 group-hover:opacity-80 transition" />
          <span className="inline-flex items-center justify-center rounded-full bg-primary-600 hover:bg-primary-700 text-white h-11 w-11 shadow-lg transition">
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
        </button>
      )}
    </footer>
  );
}
