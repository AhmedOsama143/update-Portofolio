import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import { useLanguage } from "../../context/LanguageContext";

export default function Layout() {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 300, once: false, offset: 100 });
  }, []);

  return (
    <>
      <a href="#home" className="skip-to-content">
        {t.nav.skipToContent}
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
