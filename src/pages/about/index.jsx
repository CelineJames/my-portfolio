import avatar from "@/assets/workspace.JPG";
import linkedIn from "@/assets/linkedIn.svg";
import github from "@/assets/github.svg";
import twitter from "@/assets/twitter.svg";
import { skills } from "./skills";

export default function AboutMe() {
  return (
    <div className="">
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
          <a href="">About.</a>
        </span>
      </div>
      {/* about me */}
      <div className="max-w-[90%] md:max-w-[80%] mx-auto flex flex-col justify-center items-center  md:flex-row md:justify-between md:items-start gap-10">
        <div data-aos="fade-up" className="md:w-1/2">
          <img
            src={avatar}
            alt=""
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
            <span className="w-3 h-3 rounded-full absolute -top-1 bg-red"></span>
          </span>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            quisquam. Quo eos aliquid esse hic accusamus voluptatum, dicta
            laborum excepturi repudiandae eius, dolore consectetur sit, incidunt
            <br />
            <br />
            beatae libero quia modi! Deserunt qui iure, nulla, facere minus
            fugit dolor quo facilis animi, nostrum modi! Iste numquam, optio
            <br />
            <br />
            perspiciatis accusamus eum nostrum error natus velit vero, repellat
            excepturi dolor cum? Alias inventore architecto reiciendis ut. Hic
          </p>
          <div
            data-aos="fade-up"
            className="flex justify-start items-center gap-4 mt-8"
          >
            <a href="">
              <button className="w-full bg-transparent border border-red text-secondary dark:text-white px-8 py-2 rounded-3xl">
                Hire Me
              </button>
            </a>
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-red text-secondary px-8 py-2 rounded-3xl">
                Resume
              </button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="flex justify-start items-center mt-4 gap-3"
          >
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full"
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
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full"
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
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full"
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
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full"
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
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full"
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
        </div>
      </div>
      {/* stack and tools */}
      <div className="md:max-w-[80%] mx-auto px-1 mt-16">
        <h2
          data-aos="fade-up"
          className="text-4xl font-sans font-semibold text-center mb-8 "
        >
          Stack And Tools
        </h2>
        <div
          data-aos="fade-up"
          className="flex -ml-4 -mr-4 flex-wrap justify-center pb-6 gap-4 md:gap-8"
        >
          {skills.map((skil) => (
            <div className="flex flex-col justify-center items-center p-6 bg-white gap-4 hover:bg-red">
              <div className="">
                <img
                  src={skil.icon}
                  alt={skil.name}
                  className="w-20 h-20 md:w-[100px] md:h-[100px] rounded-full"
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
