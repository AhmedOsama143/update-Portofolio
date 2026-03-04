import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faBars,
  faCode,
  faHouse,
  faLaptop,
  faPhone,
  faScrewdriverWrench,
  faUserCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useActiveSection from "../../hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#home", icon: faHouse, label: "Home", id: "home" },
  { href: "#about", icon: faUserCircle, label: "About Me", id: "about" },
  { href: "#skills", icon: faScrewdriverWrench, label: "Skills", id: "skills" },
  { href: "#projects", icon: faLaptop, label: "Projects", id: "projects" },
  { href: "#contact", icon: faPhone, label: "Contact Me", id: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const activeSection = useActiveSection();
  const timeoutRef = useRef(null);

  function closeMenu() {
    setIsClosing(true);
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
      setIsClosing(false);
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <header>
        <div
          className="fixed top-0 left-0 right-0 z-50 shadow-md 
          bg-white/10 backdrop-blur-md px-20 border-b border-white/20"
        >
          {/* Main Navbar */}
          <nav className="flex items-center justify-between py-4 gap-2">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faCode}
                className=" fa-beat text-primary-600 text-xl lg:text-2xl"
              />
              <h1 className="flex items-center font-bold text-xl lg:text-3xl text-white hover:text-primary-300 transition-colors">
                <Link to={`/`} className="tracking-wide">
                  A.Kholief
                </Link>
                <span className="ml-2 w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary-600"></span>
              </h1>
            </div>

            <ul className="hidden lg:flex items-center pt-2 gap-10 text-white">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`flex flex-col items-center gap-2 transition-colors relative ${
                      activeSection === link.id
                        ? "text-primary-300"
                        : "hover:text-primary-300"
                    }`}
                  >
                    <FontAwesomeIcon icon={link.icon} />
                    <span className="text-sm">{link.label}</span>
                    {activeSection === link.id && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
                    )}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/AhmedOsama143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-3xl hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                  <span className="text-sm">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="Ahmed-Kholief-cv.pdf"
                  download="Ahmed-Kholief-cv.pdf"
                  className="flex flex-col items-center gap-1 text-white hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-2xl" />
                  <span className="text-sm"> CV</span>
                </a>
              </li>
            </ul>

            <button
              onClick={toggleMenu}
              className="bg-primary-400 text-white text-sm block lg:hidden btn px-2 py-1 "
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>

        {/* OffCanvas */}
        {(isMenuOpen || isClosing) && (
          <>
            <div
              onClick={closeMenu}
              className={`fixed inset-0 bg-black/50 z-40 cursor-pointer transition-opacity duration-300 ${
                isClosing ? "opacity-0" : "opacity-100"
              }`}
            ></div>

            <div
              className={`OffCanvas fixed z-50 bg-white/10 backdrop-blur-lg 
                text-white top-0 bottom-0 p-5 space-y-5 
                border-r border-white/20 w-64 ${
                  isClosing ? "offcanvas-exit" : "offcanvas-active"
                }`}
              style={!isClosing ? undefined : undefined}
            >
              <div className="flex items-center justify-between py-5 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCode}
                    className=" fa-beat text-primary-600 text-base"
                  />
                  <h1 className="font-bold text-base hover:text-primary-300 transition-colors">
                    <Link to={`/`} className="tracking-wide">
                      Ahmed
                    </Link>
                    <span className="ml-2 w-1 h-1 rounded-full bg-primary-600"></span>
                  </h1>
                </div>
                <button onClick={closeMenu} className="text-white ">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <ul className="mt-3 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex gap-2 px-2 py-3 rounded transition-colors ${
                        activeSection === link.id
                          ? "text-primary-300 bg-white/10"
                          : "text-white hover:text-primary-300"
                      }`}
                    >
                      <FontAwesomeIcon icon={link.icon} className="text-xl" />
                      <span className="text-sm">{link.label}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://github.com/AhmedOsama143"
                    onClick={closeMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="Ahmed-Kholief-cv.pdf"
                    download="Ahmed-Kholief-cv.pdf"
                    className="flex flex-col items-start gap-1 text-white hover:text-primary-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faDownload} className="text-3xl" />
                    <span className="text-[16px]"> CV</span>
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </header>
    </>
  );
}
