import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Optional: Install `react-icons`
// import background from "@/assets/Background.png";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header
        // data-aos="fade-down"
        className={`fixed top-0 w-full z-50 transition-all font-heading duration-300 ${
          scrolled
            ? "bg-primary dark:bg-secondary dark:shadow-none backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 text-primary dark:text-black flex items-center justify-between">
          <div className="md:hidden text-2xl font-bold text-white ">CJ</div>
          <div
            data-aos="slide-right"
            className={`hidden md:block text-2xl font-bold ${
              scrolled
                ? "text-dark dark:text-primary"
                : "text-dark dark:text-primary"
            }`}
          >
            CJ
          </div>
          {/* Desktop Nav */}
          <nav
          data-aos="slide-left" 
            className={`hidden md:flex items-center gap-6 font-bold  ${
              scrolled
                ? "text-secondary dark:text-primary"
                : "text-secondary dark:text-primary"
            }`}
          >
            <Link to="/about" className="hover:underline hover:decoration-red">
              About Me
            </Link>
            <Link
              to="/projects"
              className="hover:underline hover:decoration-red"
            >
              Projects
            </Link>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:decoration-red"
            >
              Contact Me
            </a>
          </nav>

          {/* Theme Toggle + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-2xl transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden text-white text-2xl relative w-8 h-8"
              aria-label="Toggle menu"
            >
              {/* Animated Hamburger */}
              <span
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  menuOpen
                    ? "rotate-180 opacity-0 scale-50"
                    : "rotate-0 opacity-100 scale-100"
                }`}
              >
                <HiMenuAlt3 className="w-8 h-8" />
              </span>

              {/* Animated Close Icon */}
              <span
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  menuOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "rotate-180 opacity-0 scale-50"
                }`}
              >
                <HiX className="w-8 h-8" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden min-h-screen backdrop-blur-xl text-dark dark:text-white font-bold px-6 py-4 space-y-4 bg-cover bg-center flex flex-col justify-center items-center gap-10 text-3xl"
            // style={{ backgroundImage: `url(${background})` }}
          >
            <Link
              to="/about"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
