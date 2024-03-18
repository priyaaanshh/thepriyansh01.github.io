// ProjectCard.tsx
import Image from 'next/image';
import React from 'react';
import Peace from '../../../../assets/images/Peace.png'

interface Project {
    title: string;
    description: string;
    topics: string[];
    deployLink: string;
    codeLink: string;
    image: any;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, description, topics, deployLink, codeLink, image } = project;

    return (
        <div className='flex flex-col-reverse sm:flex-row justify-between items-start gap-5 w-full bg-primary rounded-md sm:rounded-[var(--radius)] shadow-lg shadow-black/30 px-4 sm:px-8 py-4 overflow-hidden'>
            <div className="flex flex-col justify-center items-start gap-5">
                <div className="flex flex-col justify-center items-start">
                    <span className='text-3xl font-semibold'>{title}</span>
                    <span className='text-lg text-left'>{description}</span>
                </div>
                <div className="flex flex-wrap justify-start items-start gap-2">
                    {topics.map((topic, index) => <div key={index} className='flex justify-center items-center bg-secondary rounded px-2 cursor-pointer hover:text-destructive text-sm duration-300'>{topic}</div>)}
                </div>
                <div className="flex justify-normal items-center gap-5">
                    <a href={deployLink} className='flex justify-center items-center px-4 py-1 text-primary text-xl bg-secondary-foreground rounded-[var(--radius)]  hover:scale-110 duration-300'>Live</a>
                    <a href={codeLink} className='flex justify-center items-center px-4 py-1 text-xl bg-secondary rounded-[var(--radius)]  hover:scale-110 duration-300'>Code</a>
                </div>
            </div>
            <div>
                <Image src={Peace} alt='' className='sm:h-44 w-full sm:w-max object-cover rounded-[10px] sm:rounded-[var(--radius)] overflow-hidden shadow-lg shadow-black/50 hover:scale-105 sm:hover:scale-125 sm:hover:-rotate-6 duration-300' loading='lazy' />
            </div>
        </div>
    );
};

export default ProjectCard;
