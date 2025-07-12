import avatar from '@/assets/avatar-me.png';
import linkedIn from '@/assets/linkedIn.png';
import github from '@/assets/github-icon.png';
import twitter from '@/assets/twitter.png';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {

    const words = ['Frontend Developer', 'Historian', 'Technology Enthusiast', 'Historian'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    // Typing effect for greeting and name
    const greeting = 'Hi, I am';
    const name = 'Itoro Celine James';

    const [typedGreeting, setTypedGreeting] = useState('');
    const [typedName, setTypedName] = useState('');

    const greetingRef = useRef('');
    const nameRef = useRef('');
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
            greetingRef.current = '';
            nameRef.current = '';
            setTypedGreeting('');
            setTypedName('');
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
        <div>
            <div className="relative flex h-[90vh] bg-primary dark:bg-secondary ">
                {/* Left Section (Hero) with slant leaning into black section */}

                <section className="hidden flex-1 text-black md:flex flex-col items-start justify-center pl-12 xl:pl-28 pt-24 dark:text-primary -z-1"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0%, 85% 100%, 0% 100%)',
                    }}
                >
                    <span className="block font-bold text-xl pb-4 font-sans">{typedGreeting}</span>
                    <h1 className="text-5xl font-bold font-heading">{typedName}</h1>
                    <p className={`text-black/50 font-bold text-xl font-heading dark:text-primary transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}>{words[currentIndex]}</p>

                    <div className="flex justify-start items-center mt-8 gap-3">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/20 p-2 dark:bg-primary rounded-sm"
                        >
                            <img src={github} alt="GitHub" className="w-3 h-3 dark:w-4 dark:h-4" />
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/20 p-2 dark:bg-primary rounded-sm"
                        >
                            <img src={twitter} alt="Twitter" className="w-3 h-3 dark:w-4 dark:h-4" />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/20 p-2 dark:bg-primary rounded-sm"
                        >
                            <img src={linkedIn} alt="LinkedIn" className="w-3 h-3 dark:w-4 dark:h-4" />
                        </a>
                    </div>

                </section>



                {/* mobile view of the left section */}
                <section
                    className="md:hidden w-full h-[310px] absolute bottom-0 -z-1 pl-12 pt-10 pb-0
             flex flex-col items-start justify-center
             text-primary dark:text-black
             bg-secondary dark:bg-primary
             backdrop-blur-md"
                    style={{
                        clipPath: 'polygon(0 0, 100% 120px, 100% 100%, 0% 100%)',
                    }}
                >
                    <span className="block font-bold text-xl pb-4 font-sans">{typedGreeting}</span>
                    <h1 className="text-4xl font-bold font-heading">{typedName}</h1>
                    <p className={`
        text-primary font-bold text-xl font-heading dark:text-black/60
        transition-opacity duration-700
        ${fade ? 'opacity-100' : 'opacity-0'}
      `}>
                        {words[currentIndex]}
                    </p>

                    <div className="flex flex-col fixed left-0 top-20 md:flex-row justify-start items-center mt-8 gap-3">
                        <a href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer" className="bg-primary p-1 dark:text-black/20 rounded-sm">
                            <img src={github} alt="GitHub" className="w-5 h-5 " />
                        </a>
                        <a href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer" className="bg-primary p-1 dark:text-black/20 rounded-sm">
                            <img src={twitter} alt="Twitter" className="w-5 h-5 " />
                        </a>
                        <a href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer" className="bg-primary p-1 dark:text-black/20 rounded-sm">
                            <img src={linkedIn} alt="LinkedIn" className="w-5 h-5" />
                        </a>
                    </div>
                </section>


                {/* Right Section (Black) with opposite slant */}
                <div
                    className="hidden md:flex justify-center items-center flex-1 bg-gray-900 md:w-full"
                    style={{
                        clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    }}
                >
                    <img src={avatar} alt='an avatar' />
                </div>

                <div
                    className=" flex md:hidden justify-center items-center w-full bg-primary dark:bg-secondary md:w-full"
                    style={{
                        clipPath: 'none',
                    }}
                >
                    <img src={avatar} alt='an avatar' />
                </div>

            </div>
        </div>
    );
}



