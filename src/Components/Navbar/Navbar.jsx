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
import { Link, NavLink } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <div
          className="fixed top-0 left-0 right-0 z-50 shadow-md 
          bg-white/10 backdrop-blur-md px-10 border-b border-white/20"
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

            <ul className="hidden lg:flex items-center gap-15 text-white">
              <li>
                <a
                  href="#home"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faHouse} className="" />
                  <span className="text-sm">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="" />
                  <span className="text-sm">About Me</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faScrewdriverWrench} className="" />
                  <span className="text-sm">Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faLaptop} className="" />
                  <span className="text-sm">Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#ContactMe"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="" />
                  <span className="text-sm">Contact Me</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AhmedOsama143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-3xl hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="text-[14px]">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="Ahmed-Kholief-cv.pdf"
                  download="Ahmed-Kholief-cv.pdf"
                  className="flex flex-col items-center gap-1 text-white hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-2xl" />
                  <span className="text-[15px]"> CV</span>
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
        {isMenuOpen && (
          <>
            <div
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-40 cursor-pointer"
            ></div>

            <div
              className="OffCanvas fixed z-50 bg-white/10 backdrop-blur-lg 
                text-white top-0 bottom-0 p-5 space-y-5 animate-slide-in 
                border-r border-white/20 w-64"
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
                <button onClick={toggleMenu} className="text-white ">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              {/* <h2 className="text-xl font-bold text-primary-300">Menu</h2> */}
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="#home"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faHouse} className="text-xl" />
                    <span className="text-sm">Home</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
                    <span className="text-sm">About Me</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon
                      icon={faScrewdriverWrench}
                      className="text-2xl"
                    />
                    <span className="text-sm">Skills</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faLaptop} className="text-2xl" />
                    <span className="text-sm">Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#ContactMe"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                    <span className="text-sm">Contact Me</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AhmedOsama143"
                    onClick={toggleMenu}
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
                    className="flex flex-col items-start  gap-1 text-white hover:text-primary-300 transition-colors"
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
