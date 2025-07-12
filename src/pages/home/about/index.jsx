import avatar from '@/assets/workspace.JPG';

export default function AboutMe() {
    return (
        <div className="flex flex-col md:flex-row md:gap-6 md:items-center p-4 m-4 md:border border-secondary/50 dark:border-primary rounded-lg bg-primary dark:bg-secondary text-black dark:text-primary">
            <div className="max-w-[400px] md:min-w-[300px] md:h-[262px] bg-black md:w-[40%] rounded-lg">
                <img src={avatar} alt='' className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='sm:'>
                <h2 className='font-heading text-2xl font-bold md:text-3xl mt-8 md:mt-0'>About Me</h2>
                <p className='font-sans max-w-[600px]'>
                    I am a passionate frontend developer with a flair for crafting elegant, user-focused interfaces that blend design and functionality. I specialize in building responsive, accessible, and interactive web applications,
                    I turn ideas into seamless digital experiences. I’m constantly learning, iterating, and exploring.
                    Beyond the code, I’m a strong advocate for collaboration and communication. I enjoy solving problems, learning something new and playing tennis.
                </p>
            </div>
        </div>
    )
}