import avatar from "@/assets/Ity2.png";
import linkedIn from "@/assets/linkedIn.svg";
import github from "@/assets/github.svg";
import twitter from "@/assets/twitter.svg";
import instagram from "@/assets/instagram.svg";
import facebook from "@/assets/facebook.svg";
import { skills } from "./skills";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div
        data-aos="fade-down"
        className="flex flex-col justify-center items-center gap-2 pt-20 pb-16"
      >
        <h1 className="font-sans text-6xl font-bold mb-1">About Me.</h1>
        <span className="border-2 border-secondary dark:border-red rounded-3xl px-4 py-2 flex items-center gap-4">
          <a href="/" className="">
            Home.
          </a>
          <span className="w-[2px] h-4 bg-secondary dark:bg-red"></span>
          <a href="/projects">Projects.</a>
        </span>
      </div>
      {/* about me */}
      <div className=" max-w-[90%] md:max-w-[80%] mx-auto flex flex-col justify-center items-center  md:flex-row md:justify-between md:items-start gap-10">
        <div data-aos="fade-up" className="md:w-1/2">
          <img
            src={avatar}
            alt=""
            loading="lazy"
            className="w-full max-w-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2
            data-aos="fade-up"
            className="text-4xl font-sans font-semibold mb-2"
          >
            About Myself.
          </h2>
          <span
            data-aos="fade-up"
            className="w-20 h-[2px] bg-red inline-block mb-2 relative"
          >
            <span className="w-3 h-3 rounded-full absolute -top-1 bg-red z-10"></span>
          </span>
          <p data-aos="fade-up">
            {" "}
            Welcome to my journey. I’m a passionate developer who transitioned
            from a degree in History into the exciting world of technology. My
            adventure began in 2023 when I realized that technology could
            enhance how we preserve and share historical knowledge. What started
            as curiosity quickly evolved into writing code, building
            full-functioning websites, games, and impactful applications. <br />
            <br /> During my internship, I’ve contributed to scaling digital
            products and collaborated cross-functionally across teams. I take
            pride in crafting intuitive, responsive user interfaces and solving
            real-world problems through code. I’m also an eager learner,
            constantly expanding my knowledge and it brings me genuine joy.{" "}
            <br />
            <br /> One of my proudest projects is <strong>HerStories</strong> a
            digital archive that aims to preserves and celebrates the stories of
            African women throughout history. It’s a perfect blend of my
            historical background and software development skills. I specialize
            in frontend development but I’m now expanding into backend
            development, and Python based solutions. <br />
            <br /> I strongly believe that technology has the power to transform
            every sector, making processes simpler, smarter, and more impactful.{" "}
            <br />
            <br /> When I’m not coding, you’ll find me reading, playing tennis,
            or brainstorming. If you’re looking for a passionate, creative, and
            growth-minded individual who’s dedicated to both personal
            development and contributing meaningfully to every team, I’m glad
            you’re here.{" "}
          </p>
          <div
            data-aos="fade-up"
            className="flex justify-start items-center gap-4 mt-8"
          >
            <Link to="/projects">
              <button className="w-full bg-transparent border border-red text-secondary dark:text-white px-8 py-2 rounded-3xl hover:-translate-y-1 duration-500 transition-all">
                Projects
              </button>
            </Link>
            {/*Mobile: open PDF directly */}
            <a
              href="/itoro_james.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:hidden"
            >
              <button className="w-full bg-red text-secondary px-8 py-2 rounded-3xl hover:-translate-y-1 duration-500 transition-all">
                Resume
              </button>
            </a>

            {/* Desktop: go to embedded resume page */}
            <Link to="/resume" className="hidden md:block">
              <button className="w-full bg-red text-secondary px-8 py-2 rounded-3xl hover:-translate-y-1 duration-500 transition-all">
                Resume
              </button>
            </Link>
          </div>
          <div
            data-aos="fade-up"
            className="flex justify-start items-center mt-4 gap-3"
          >
            <a
              href="https://github.com/CelineJames"
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
            <a
              href="/about"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition-all"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[26px] h-[26px] flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={instagram} alt="Twitter" className="" />
              </div>
            </a>
            <a
              href="/about"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition-all"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[26px] h-[26px] flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={facebook} alt="Twitter" className="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* stack and tools */}
      <div className="md:max-w-[80%] mx-auto px-1 mt-16">
        <h2
          data-aos="fade-up"
          className="text-4xl font-sans font-semibold text-center mb-8 "
        >
          Skills And Tools
        </h2>
        <div
          data-aos="fade-up"
          className="flex -ml-4 -mr-4 flex-wrap justify-center pb-6 gap-4 md:gap-8"
        >
          {skills.map((skil, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center p-6 bg-white gap-4 hover:bg-red group"
            >
              <div className="">
                <img
                  src={skil.icon}
                  alt={skil.name}
                  className="w-20 h-20 md:w-[100px] md:h-[100px] rounded-full transition-all duration-500 ease-in-out group-hover:rotate-[15deg] group-hover:translate-x-2 group-hover:translate-y-1"
                />
              </div>
              <h5 className="font-sans text-lg font-semibold text-secondary">
                {skil.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
