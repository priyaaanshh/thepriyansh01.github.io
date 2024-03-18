import React from 'react'
import SkillCard from './card/skillCard'

const Skills = () => {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Git',
        'Tailwind',
        'MongoDB',
        'Redux',
        'Express',
        'MySQL',
        'Python',
        'C++',
        'Figma',
        'Pandas',
        'Matplotlib',
        'Seaborn',
        'Sklearn',
        'PyTorch',
        'Tensorflow',
    ];

    return (
        <section className='flex flex-col justify-center items-center w-full max-w-[850px] my-16'>
            <span className='bg-gradient text-gradient text-5xl font-bold my-7'>Skills</span>
            <div className='flex flex-wrap justify-center items-center text-lg text-center w-full gap-5'>
                {skills.map((skill, index) => (
                    <SkillCard key={index}>{skill}</SkillCard>
                ))}
            </div>
        </section>
    )
}

export default Skills
