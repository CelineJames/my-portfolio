import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Navbar from "./components/navbar";
import AboutMe from "./pages/about";
import Footer from "./components/footer";
import Projects from "./pages/projects";
import ResumeViewer from "./pages/resume";
import ContactMe from "./pages/contact";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden bg-primary text-black transition-colors duration-300 dark:bg-secondary dark:text-white">
      <Navbar />
      <main className="">
        {/* Optional: prevent overlap with fixed Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<ResumeViewer />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer />  */}
    </div>
  );
}
