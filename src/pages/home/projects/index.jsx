import { useState } from "react";
import { projects } from "./projects";
import { HiArrowRight } from 'react-icons/hi';


export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0); // or based on scroll later
    const maxVisibleDots = 4;

    const visibleDotsStart = Math.max(0, currentIndex - 1); // Show 4 max centered around current
    const visibleDots = projects
        .map((_, i) => i)
        .slice(visibleDotsStart, visibleDotsStart + maxVisibleDots);


    return (
        <>
            <div className="max-w-full h-auto mt-2 border border-secondary/50 dark:border-primary py-8 mx-4 rounded-xl">
                <div className='pl-5'>
                    <h3 className='text-black dark:text-primary text-2xl font-bold font-heading'>My Portfolio</h3>
                    <p className='font-light text-black dark:text-primary text-base'>Here are some of the projects i have built and worked on.</p>
                </div>
                {/* scroll through classes */}
                <div>
                    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <div data-aos="zoom-in" className='flex gap-4 my-5 px-4 md:px-0'>
                            {projects.map((item, idx) => (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setCurrentIndex(idx)}
                                    className={`
    w-[95%] md:w-[384px] flex-shrink-0 p-6 mt-8 rounded-lg shadow-xl group transition-all
    bg-primary text-black border dark:bg-secondary dark:text-primary 
    hover:bg-secondary hover:text-primary dark:hover:bg-primary dark:hover:text-black 
    border-t-black/10 dark:border-t-primary border-primary

    ${idx === 0 ? 'md:ml-5' : ''}
    ${idx === projects.length - 1 ? 'mr-5' : ''}
  `}
                                >

                                    {item.tools.map((tool) => (
                                        <span key={idx} className="inline-block py-[2px] group-hover:border-primary dark:group-hover:border-black/20 text-sm px-2 border border-black/20 dark:border-primary rounded-md mr-2">{tool}</span>
                                    ))}
                                    <h4 className='font-semibold font-heading mt-2 text-lg pb-2'>{item.Heading}</h4>
                                    <img src={item.image} alt={item.title} className='w-full object-cover rounded-lg mb-4' />
                                    {/* <span className='text-primary font-bold text-sm'>{item.section}</span> */}
                                    <div className='flex items-center justify-between'>

                                        <img src={item.arrowUp} className='size-5' />
                                    </div>
                                    <p className='whitespace-break-spaces text-sm font-light text-gray2 mb-2'>{item.text}</p>
                                    <a
                                        href={item.livesite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=""
                                    >
                                        <button className="flex items-center justify-between mb-8 gap-1 py-1 px-2 border border-secondary rounded-md dark:border-primary group-hover:border-primary dark:group-hover:border-black/20 group">
                                            View project
                                            <HiArrowRight className="transform transition-all duration-700 group-hover:translate-x-1" />
                                        </button>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* scrolable dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {visibleDots.map((i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-secondary/40 dark:bg-primary/30' : 'w-2 bg-secondary dark:bg-primary'
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}






















// export default function Projects() {
//     return (
//         <div className="flex flex-col mx-4 mt-4 md:flex-row md:gap-6  dark:bg-black text-black dark:text-primary rounded-lg pb-14">
//             <div className="border border-black/20 dark:border-primary rounded-2xl pt-4 pb-14 pl-8 pr-16 md:flex-1">
//                 <h2 className="font-heading text-2xl mb-4">My Projects</h2>
//                 <div
//                     className="bg-black dark:bg-black/20 dark:border border-primary rounded-2xl text-primary flex flex-col justify-start items-start px-6 py-8
//              shadow-[16px_14px_0px_#0000001A,_34px_28px_0px_#0000001A]

//              transition duration-500 ease-in-out transform origin-left hover:rotate-[2deg]"
//                 >
//                     <button className="border border-primary rounded-md py-1 px-2 mb-6">ReactJs</button>

//                     <h3 className="text-3xl font-heading mb-4">Give Me Some Food</h3>

//                     <p className="w-[80%] text-base">
//                         This is a ReactJS application which gives you information about the food items when a food emoji is given as an input
//                     </p>

//                     <button className="border border-primary py-1 px-3 rounded-md mt-14 self-end hover:-translate-y-1 transition duration-500 ease-in-out">
//                         Visit
//                     </button>
//                 </div>


//             </div>
//             <div className="flex flex-col justify-between md:flex-1">
//                 {/* skills div */}
//                 <div className="border border-black/20 dark:border-primary rounded-lg p-10 mt-4 md:mt-0">
//                     <h2 className="font-heading text-2xl mb-6">My Skills</h2>
//                     <div>
//                         {skills.map((skill, idx) => (
//                             <span key={idx} className=" inline-block p-2 bg-black text-primary dark:border border-primary rounded-lg mr-3 mt-4">
//                                 {skill}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//                 {/* resume div */}
//                 <div className="flex flex-col lg:flex-row lg:gap-6 lg:justify-between lg:items-center border border-black/20 dark:border-primary p-4 lg:p-10 rounded-lg mt-4">
//                     <h2 className="font-heading text-2xl mb-4 md:mb-0">Resume</h2>
//                     <div className="flex justify-between w-full lg:w-3/4 items-center gap-2 bg-black dark:border p-6 rounded-xl">
//                         <p className="text-primary text-base md:text-xl">More details about my career</p>
//                         <button className="bg-primary dark:bg-black dark:border text-black dark:text-primary py-2 px-4 md:px-7 rounded-xl hover:-translate-y-1 transition duration-500 ease-in-out">Open</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }