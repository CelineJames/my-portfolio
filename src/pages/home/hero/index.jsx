import avatar from "@/assets/avatar-me.png";
import linkedIn from "@/assets/linkedIn.svg";
import github from "@/assets/github.svg";
import twitter from "@/assets/twitter.svg";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const words = ["Frontend Developer", "Historian", "Technology Enthusiast"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [typedGreeting, setTypedGreeting] = useState("");
  const [typedName, setTypedName] = useState("");
  const greetingRef = useRef("");
  const nameRef = useRef("");
  const timeouts = useRef([]);

  const greeting = "Hello, I am";
  const name = "Itoro Celine James";

  useEffect(() => {
    let gIndex = 0;
    let nIndex = 0;

    const typeGreeting = () => {
      if (gIndex < greeting.length) {
        greetingRef.current += greeting[gIndex];
        setTypedGreeting(greetingRef.current);
        gIndex++;
        timeouts.current.push(setTimeout(typeGreeting, 70));
      } else {
        typeName();
      }
    };

    const typeName = () => {
      if (nIndex < name.length) {
        nameRef.current += name[nIndex];
        setTypedName(nameRef.current);
        nIndex++;
        timeouts.current.push(setTimeout(typeName, 90));
      }
    };

    typeGreeting();
    return () => {
      timeouts.current.forEach(clearTimeout);
      greetingRef.current = "";
      nameRef.current = "";
      setTypedGreeting("");
      setTypedName("");
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * words.length);
        } while (newIndex === currentIndex);
        setCurrentIndex(newIndex);
        setFade(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, words.length]);

  return (
    <div className="relative flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Left Section */}
      <section
        data-aos="fade-right"
        className="hidden md:flex flex-1 flex-col justify-center pl-12 xl:pl-28 pt-24 text-black dark:text-primary"
        style={{
          clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
        }}
      >
        <span className="font-heading text-xl font-bold pb-4">
          {typedGreeting}
        </span>
        <h1 className="text-5xl font-heading font-bold">{typedName}</h1>
        <p
          className={`text-xl font-heading font-bold flex items-center gap-2 transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          } text-black/50 dark:text-primary`}
        >
          <span className="w-5 h-[2px] bg-secondary dark:bg-primary"></span>
          {words[currentIndex]}
        </p>

        <div className="flex gap-3 mt-4">
          {[github, twitter, linkedIn].map((icon, idx) => (
            <a
              key={idx}
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
                <img src={icon} alt="icon" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <button className="bg-white text-secondary px-6 py-1 rounded-3xl">
            Hire Me
          </button>
          <a href="/resume" target="_blank" rel="noopener noreferrer">
            <button className="bg-red text-secondary px-6 py-1 rounded-3xl">
              Resume
            </button>
          </a>
        </div>
      </section>

      {/* Right Section (avatar) */}
      <div
        data-aos="fade-left"
        className="hidden md:flex flex-1 justify-center items-center bg-gray-900"
        style={{
          clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <img src={avatar} alt="avatar" />
      </div>

      {/* Mobile Section */}
      <section
        className="md:hidden w-full h-[310px] absolute bottom-0 left-0 px-6 pt-10 pb-4 flex flex-col justify-center bg-secondary dark:bg-primary text-primary dark:text-black"
        style={{
          clipPath: "polygon(0 0, 100% 120px, 100% 100%, 0% 100%)",
        }}
      >
        <span className="text-xl font-heading font-bold pb-2">
          {typedGreeting}
        </span>
        <h1 className="text-3xl font-heading font-bold">{typedName}</h1>
        <p
          className={`text-xl font-heading font-bold transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          } text-primary dark:text-black/60 flex items-center gap-2`}
        >
          <span className="w-5 h-[2px] bg-primary dark:bg-secondary"></span>
          {words[currentIndex]}
        </p>

        <div className="flex gap-3 mt-4">
          {[github, linkedIn, twitter].map((icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
            >
              <div
                className="w-[20px] h-[20px] rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(0deg, #393a42, #0b0d14)",
                }}
              >
                <img src={icon} alt="icon" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <button className="w-full bg-white text-secondary px-6 py-1 rounded-3xl">
            Hire Me
          </button>
          <a href="/resume" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-red text-secondary px-6 py-1 rounded-3xl">
              Resume
            </button>
          </a>
        </div>
      </section>

      {/* Mobile Avatar Section */}
      <div className="md:hidden flex justify-center items-center h-screen bg-primary dark:bg-secondary pt-20">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

// import avatar from "@/assets/avatar-me.png";
// import linkedIn from "@/assets/linkedIn.svg";
// import github from "@/assets/github.svg";
// import twitter from "@/assets/twitter.svg";
// import { useState, useEffect, useRef } from "react";

// export default function Hero() {
//   const words = ["Frontend Developer", "Historian", "Technology Enthusiast"];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   // Typing effect for greeting and name
//   const greeting = "Hello, I am";
//   const name = "Itoro Celine James";

//   const [typedGreeting, setTypedGreeting] = useState("");
//   const [typedName, setTypedName] = useState("");

//   const greetingRef = useRef("");
//   const nameRef = useRef("");
//   const timeouts = useRef([]); // Store timeouts for cleanup

//   useEffect(() => {
//     let gIndex = 0;
//     let nIndex = 0;

//     const typeGreeting = () => {
//       if (gIndex < greeting.length) {
//         greetingRef.current += greeting[gIndex];
//         setTypedGreeting(greetingRef.current);
//         gIndex++;
//         const t = setTimeout(typeGreeting, 70);
//         timeouts.current.push(t);
//       } else {
//         typeName();
//       }
//     };

//     const typeName = () => {
//       if (nIndex < name.length) {
//         nameRef.current += name[nIndex];
//         setTypedName(nameRef.current);
//         nIndex++;
//         const t = setTimeout(typeName, 90);
//         timeouts.current.push(t);
//       }
//     };

//     typeGreeting();

//     return () => {
//       // Clear timeouts and reset refs on unmount
//       timeouts.current.forEach(clearTimeout);
//       timeouts.current = [];
//       greetingRef.current = "";
//       nameRef.current = "";
//       setTypedGreeting("");
//       setTypedName("");
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false); // Start fade out

//       setTimeout(() => {
//         // Get a new random index that's different from the current one
//         let newIndex;
//         do {
//           newIndex = Math.floor(Math.random() * words.length);
//         } while (newIndex === currentIndex);

//         setCurrentIndex(newIndex); // Update the word
//         setFade(true); // Fade back in
//       }, 1000); // Wait for fade-out before switching
//     }, 2000); // Full cycle every 4 seconds

//     return () => clearInterval(interval);
//   }, [currentIndex, words.length]);

//   return (
//     <div className="relative md:flex h-screen bg-primary dark:bg-secondary">
//       {/* Left Section (Hero) with slant leaning into black section */}

//       <section
//         data-aos="fade-right"
//         className="hidden flex-1 text-black md:flex flex-col items-start justify-center pl-12 xl:pl-28 pt-24 dark:text-primary -z-1"
//         style={{
//           clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
//         }}
//       >
//         <span className="block font-bold text-xl pb-4 font-heading">
//           {typedGreeting}
//         </span>
//         <h1 className="text-5xl font-bold font-heading">{typedName}</h1>
//         <p
//           className={`text-black/50 font-bold text-xl font-heading dark:text-primary transition-opacity duration-700 flex items-center gap-[2px] ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <span className="w-5 h-[2px] bg-secondary dark:bg-primary"></span>
//           {words[currentIndex]}
//         </p>

//         <div className="flex justify-start items-center mt-4 gap-3">
//           <a
//             href="#"
//             className="w-9 h-9 flex items-center justify-center rounded-full"
//             style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
//           >
//             <div
//               className="w-[26px] h-[26px] flex items-center justify-center rounded-full"
//               style={{
//                 background: "linear-gradient(0deg, #393a42, #0b0d14)",
//               }}
//             >
//               <img src={github} alt="Twitter" className="" />
//             </div>
//           </a>
//           <a
//             href="#"
//             className="w-9 h-9 flex items-center justify-center rounded-full"
//             style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
//           >
//             <div
//               className="w-[26px] h-[26px] flex items-center justify-center rounded-full"
//               style={{
//                 background: "linear-gradient(0deg, #393a42, #0b0d14)",
//               }}
//             >
//               <img src={twitter} alt="Twitter" className="" />
//             </div>
//           </a>

//           <a
//             href="#"
//             className="w-9 h-9 flex items-center justify-center rounded-full"
//             style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
//           >
//             <div
//               className="w-[26px] h-[26px] flex items-center justify-center rounded-full"
//               style={{
//                 background: "linear-gradient(0deg, #393a42, #0b0d14)",
//               }}
//             >
//               <img src={linkedIn} alt="Twitter" className="" />
//             </div>
//           </a>
//         </div>

//         <div className="flex justify-between items-center gap-4 mt-8">
//           <button className="w-full bg-white text-secondary px-6 py-1 rounded-3xl">
//             Hire Me
//           </button>
//           <a href="/resume" target="_blank" rel="noopener noreferrer">
//             <button className="w-full bg-red text-secondary px-6 py-1 rounded-3xl">
//               Resume
//             </button>
//           </a>
//         </div>
//       </section>

//       {/* mobile view of the left section */}
//       <section
//         // data-aos="fade-up"
//         className="md:hidden w-full h-[310px] absolute bottom-0 -z-1 pl-14 pt-10 pb-0
//              flex flex-col items-start justify-center
//              text-primary dark:text-black
//              bg-secondary dark:bg-primary
//              backdrop-blur-md"
//         style={{
//           clipPath: "polygon(0 0, 100% 120px, 100% 100%, 0% 100%)",
//         }}
//       >
//         <span className="block font-bold text-xl pb-2 font-heading">
//           {typedGreeting}
//         </span>
//         <h1 className="text-3xl font-bold font-heading">{typedName}</h1>
//         <p
//           className={`
//         text-primary font-bold text-xl font-heading dark:text-black/60
//         transition-opacity duration-700 flex items-center gap-[2px]
//         ${fade ? "opacity-100" : "opacity-0"}
//       `}
//         >
//           <span className="w-5 h-[2px] dark:bg-secondary bg-primary"></span>
//           {words[currentIndex]}
//         </p>

//         <div
//           data-aos="fade-right"
//           className="flex flex-col fixed left-0 top-20 md:flex-row justify-start items-center mt-2 gap-3"
//         >
//           <a
//             href="#"
//             className="w-8 h-8 flex items-center justify-center rounded-full"
//             style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
//           >
//             <div
//               className="w-[20px] h-[20px] flex items-center justify-center rounded-full"
//               style={{
//                 background: "linear-gradient(0deg, #393a42, #0b0d14)",
//               }}
//             >
//               <img src={github} alt="Twitter" className="" />
//             </div>
//           </a>
//           <a
//             href="#"
//             className="w-8 h-8 flex items-center justify-center rounded-full"
//             style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
//           >
//             <div
//               className="w-[20px] h-[20px] flex items-center justify-center rounded-full"
//               style={{
//                 background: "linear-gradient(0deg, #393a42, #0b0d14)",
//               }}
//             >
//               <img src={linkedIn} alt="Twitter" className="" />
//             </div>
//           </a>
//           <a
//             href="#"
//             className="w-8 h-8 flex items-center justify-center rounded-full"
//             style={{ background: "linear-gradient(0deg, #0b0d14, #393a42)" }}
//           >
//             <div
//               className="w-[20px] h-[20px] flex items-center justify-center rounded-full"
//               style={{
//                 background: "linear-gradient(0deg, #393a42, #0b0d14)",
//               }}
//             >
//               <img src={twitter} alt="Twitter" className="" />
//             </div>
//           </a>
//         </div>

//         <div className="flex justify-between items-center gap-4 mt-8">
//           <button className="w-full bg-white text-secondary px-6 py-1 rounded-3xl">
//             Hire Me
//           </button>
//           <a href="/resume" target="_blank" rel="noopener noreferrer">
//             <button className="w-full bg-red text-secondary px-6 py-1 rounded-3xl">
//               Resume
//             </button>
//           </a>
//         </div>
//       </section>

//       {/* Right Section (Black) with opposite slant */}
//       <div
//         data-aos="fade-left"
//         className="hidden md:flex justify-center items-center flex-1 bg-gray-900 md:w-full"
//         style={{
//           clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         }}
//       >
//         <img src={avatar} alt="an avatar" />
//       </div>

//       <div
//         className="flex h-screen md:hidden justify-center items-center w-full bg-primary dark:bg-secondary md:w-full"
//         style={{
//           clipPath: "none",
//         }}
//       >
//         <img src={avatar} alt="an avatar" />
//       </div>
//     </div>
//   );
// }
