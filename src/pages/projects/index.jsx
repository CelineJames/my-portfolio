import { projects } from "./projects";
import github from "@/assets/github.svg";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div
        data-aos="fade-down"
        className="flex flex-col justify-center items-center gap-2 pt-20 pb-32"
      >
        <h1 className="font-sans text-6xl font-bold mb-1">Projects.</h1>
        <span className="border-2 border-secondary dark:border-red rounded-3xl px-4 py-2 flex items-center gap-4">
          <a href="/" className="">
            Home.
          </a>
          <span className="w-[2px] h-4 bg-secondary dark:bg-red"></span>
          <a href="/contact">Contact Me.</a>
        </span>
      </div>
      <div className="px-4 md:px-32 lg:px-2 lg:max-w-[80%] mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="lg:flex justify-between items-start gap-20">
            <div data-aos="fade-up" className="mb-8 lg:w-1/2">
              <img src={project.image} alt="" loading="lazy" />
            </div>
            <div data-aos="fade-up" className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-sans font-semibold">
                {project.Heading}
              </h2>
              <span className="w-28 h-[2px] bg-red inline-block mt-2 relative">
                <span className="w-3 h-3 rounded-full absolute -top-1 bg-red"></span>
              </span>
              <div className="flex flex-wrap gap-2 mb-4 mt-5">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className={`text-xs bg-darkblack dark: px-[10px] py-[6px] rounded ${
                      idx % 2 === 0 ? "text-red" : " text-white"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p>{project.text}</p>
              <div className="flex justify-between items-center mt-3 gap-3">
                <a
                  href={project.livesite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-2 py-1 bg-red font-sans font-semibold rounded-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="w-9 h-9 flex items-center justify-center rounded-full"
                  style={{
                    background: "linear-gradient(0deg, #0b0d14, #393a42)",
                  }}
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
              </div>
              <hr className="w-full h-[1px] bg-secondary dark:bg-white border-0 mt-4 mb-10" />
            </div>
          </div>
        ))}
        <a href="/contact" className="block group mt-12">
          <div className="flex justify-center items-center gap-3 pb-6">
            <p className="text-3xl font-bold">Contact Me</p>
            <HiArrowRight className="text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:text-red" />
          </div>
        </a>
      </div>
    </div>
  );
}
