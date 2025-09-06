import avatar from "@/assets/avatar-me.png";
import linkedIn from "@/assets/linkedIn.svg";
import github from "@/assets/github.svg";
import twitter from "@/assets/twitter.svg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const words = ["Software Engineer", "Historian", "Technology Enthusiast"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Typing effect for greeting and name
  const greeting = "Hello, I am";
  const name = "Itoro Celine James";

  const [typedGreeting, setTypedGreeting] = useState("");
  const [typedName, setTypedName] = useState("");

  const greetingRef = useRef("");
  const nameRef = useRef("");
  const timeouts = useRef([]); // Store timeouts for cleanup

  useEffect(() => {
    let gIndex = 0;
    let nIndex = 0;

    const typeGreeting = () => {
      if (gIndex < greeting.length) {
        greetingRef.current += greeting[gIndex];
        setTypedGreeting(greetingRef.current);
        gIndex++;
        const t = setTimeout(typeGreeting, 70);
        timeouts.current.push(t);
      } else {
        typeName();
      }
    };

    const typeName = () => {
      if (nIndex < name.length) {
        nameRef.current += name[nIndex];
        setTypedName(nameRef.current);
        nIndex++;
        const t = setTimeout(typeName, 90);
        timeouts.current.push(t);
      }
    };

    typeGreeting();

    return () => {
      // Clear timeouts and reset refs on unmount
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
      greetingRef.current = "";
      nameRef.current = "";
      setTypedGreeting("");
      setTypedName("");
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out

      setTimeout(() => {
        // Get a new random index that's different from the current one
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * words.length);
        } while (newIndex === currentIndex);

        setCurrentIndex(newIndex); // Update the word
        setFade(true); // Fade back in
      }, 1000); // Wait for fade-out before switching
    }, 2000); // Full cycle every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, words.length]);

  return (
    <>
      <div className="hidden max-w-[1800px] mx-auto h-[100dvh] overflow-y-hidden relative md:flex flex-row ustify-center items-center bg-primary dark:bg-secondary">
        {/* Left Section (Hero) with slant leaning into black section */}

        <section
          data-aos="fade-right"
          className="flex-1 text-black md:flex flex-col items-start justify-center pl-12 xl:pl-28 pt-24 dark:text-primary -z-1 overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
          }}
        >
          <span className="block font-bold text-xl pb-4 font-heading">
            {typedGreeting}
          </span>
          <h1 className="text-5xl font-bold font-heading">{typedName}</h1>
          <p
            className={`text-black/50 font-bold text-xl font-heading dark:text-primary transition-opacity duration-700 flex items-center gap-[2px] ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-5 h-[2px] bg-secondary dark:bg-primary"></span>
            {words[currentIndex]}
          </p>

          <div className="flex justify-start items-center mt-4 gap-3">
            <a
              href="https://github.com/CelineJames"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition-all"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[26px] h-[26px] flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={github} alt="Twitter" className="" />
              </div>
            </a>
            <a
              href="https://x.com/Khaytorah"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition-all"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[26px] h-[26px] flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={twitter} alt="Twitter" className="" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/itoro-celine-james/"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition-all"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[26px] h-[26px] flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={linkedIn} alt="Twitter" className="" />
              </div>
            </a>
          </div>

          <div className="flex justify-between items-center gap-4 mt-8">
            <Link to="/about" className="w-full">
              <button className="relative w-full overflow-hidden px-6 py-1 rounded-3xl text-secondary bg-white transition-all duration-500 transform hover:-translate-y-1 group">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  About Me
                </span>
                <span className="absolute inset-0 bg-red transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
              </button>
            </Link>

            <Link to="/Resume" target="_blank">
              <button className="w-full bg-red text-secondary px-6 py-1 rounded-3xl transition-all duration-500 transform hover:-translate-y-1">
                Resume
              </button>
            </Link>
          </div>
        </section>

        {/* Right Section (Black) with opposite slant */}
        <div
          data-aos="fade-left"
          className="h-[100dvh] md:flex justify-center items-center flex-1 bg-gray-900"
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <img src={avatar} alt="an avatar" />
        </div>
      </div>

      {/* mobile container */}
      <div className="mobile-container md:hidden h-[100dvh]">
        {/* up side on mobile */}
        <div
          className="flex justify-center items-end w-full bg-primary dark:bg-secondary mt-4"
          style={{
            clipPath: "none",
          }}
        >
          <img src={avatar} alt="an avatar" className="w-full object-contain" />
        </div>

        {/* mobile view of the down section */}
        <div
          // data-aos="fade-up"
          className="w-full pl-14 pt-24 pb-8
             flex flex-col items-start justify-center
             text-primary dark:text-black
             bg-secondary dark:bg-primary
             backdrop-blur-md overflow-y-hidden"
          style={{
            clipPath: "polygon(0 0, 100% 120px, 100% 100%, 0% 100%)",
          }}
        >
          <span className="block font-bold text-xl font-heading">
            {typedGreeting}
          </span>
          <h1 className="text-3xl font-bold font-heading">{typedName}</h1>
          <p
            className={`
        text-primary font-bold text-xl font-heading dark:text-black/60
        transition-opacity duration-700 flex items-center gap-[2px]
        ${fade ? "opacity-100" : "opacity-0"}
      `}
          >
            <span className="w-5 h-[2px] dark:bg-secondary bg-primary"></span>
            {words[currentIndex]}
          </p>

          <div
            data-aos="fade-right"
            className="flex flex-col fixed left-0 top-20 md:flex-row justify-start items-center mt-2 gap-3 pl-2"
          >
            <a
              href="https://github.com/CelineJames"
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[20px] h-[20px] flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={github} alt="Twitter" className="" />
              </div>
            </a>

            <a
              href="https://x.com/Khaytorah"
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[20px] h-[20px] flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={twitter} alt="Twitter" className="" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/itoro-celine-james/"
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[20px] h-[20px] flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={linkedIn} alt="Twitter" className="" />
              </div>
            </a>
          </div>

          <div className="flex justify-between items-center gap-4 mt-6 pb-2">
            <Link to="/about">
              <button className="w-full bg-white text-secondary px-6 py-1 rounded-3xl">
                About Me
              </button>
            </Link>
            <Link to="/resume">
              <button className="w-full bg-red text-secondary px-6 py-1 rounded-3xl">
                Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
