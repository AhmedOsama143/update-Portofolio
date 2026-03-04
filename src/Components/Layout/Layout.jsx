import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollProgress from "../ScrollProgress/ScrollProgress";

export default function Layout() {
  useEffect(() => {
    AOS.init({ duration: 300, once: false, offset: 100 });
  }, []);

  return (
    <>
      {/* Skip to content link for keyboard/screen reader users */}
      <a
        href="#home"
        className="skip-to-content"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
