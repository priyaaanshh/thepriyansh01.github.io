import React from 'react'
import SkillCard from './card/skillCard'
import Heading from '../heading/heading';

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
            <Heading >{"Skills"}</Heading>
            <div className='flex flex-wrap justify-center items-center text-center w-full gap-5'>
                {skills.map((skill, index) => (
                    <SkillCard key={index}>{skill}</SkillCard>
                ))}
            </div>
        </section>
    )
}

export default Skills
