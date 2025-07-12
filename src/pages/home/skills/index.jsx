import javascript from '@/assets/javascript.svg';
import react from '@/assets/reactjs.svg';
import python from '@/assets/Python-icon.png';
import sass from '@/assets/sass.svg';
import tailwind from '@/assets/tailwind.png';
import next from '@/assets/next.png';
import git from '@/assets/git.svg';
import typeScript from '@/assets/typescript.png';
import french from '@/assets/french.png';

const skills = [
    {
        icon: javascript,
        name: 'Javascript',
    },
    {
        icon: react,
        name: 'ReactJs',
    },
    {
        icon: sass,
        name: 'Sass',
    },
    {
        icon: tailwind,
        name: 'Tailwind',
    },
    {
        icon: next,
        name: 'NextJs',
    },
    {
        icon: git,
        name: 'Git',
    },
    {
        icon: typeScript,
        name: 'Typescript',
    },
    {
        icon: python,
        name: 'Python',
    },
      {
        icon: french,
        name: 'French',
    },
    
]

export default function Skills() {
    return (
        <div className='max-w-full px-4 border border-secondary/50 mx-4 rounded-lg py-6 my-4 text-black/80 dark:text-primary'>
            <h2 className='text-center font-bold font-heading text-2xl mb-8'>Skills</h2>
            <div className='flex flex-wrap justify-start items-center md:justify-between gap-4'>
                {skills.map((skill, idx) => (
                    <div key={idx} className='flex flex-col justify-center items-center gap-1 mt-4'>
                        <img src={skill.icon} alt='' className='w-8 h-8' />
                        <span className='inline-block text-sm'>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}