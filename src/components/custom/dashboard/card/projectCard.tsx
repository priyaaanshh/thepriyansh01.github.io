import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Project {
    title: string;
    description: string;
    topics: string[];
    deployLink: string | null;
    codeLink: string | null;
    image: StaticImageData | null;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, description, topics, deployLink, codeLink, image } = project;
    return (
        <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-5 w-full bg-primary rounded-md sm:rounded-lg shadow-lg shadow-black/30 px-4 sm:px-8 py-4 overflow-hidden'>
            <div className="flex flex-col justify-center items-start gap-5 w-full sm:max-w-[60%]">
                <div className="flex flex-col justify-center items-start text-left">
                    <span className='text-xl sm:text-3xl font-semibold'>{title}</span>
                    <span className='text-sm sm:text-lg'>{description}</span>
                </div>
                <div className="flex flex-wrap justify-start items-start gap-2">
                    {topics.map((topic, index) => <div key={index} className='flex justify-center items-center bg-secondary rounded-lg px-2 py-1 cursor-pointer font-semibold hover:bg-destructive hover:text-primary hover:scale-105 text-xs sm:text-sm duration-300'>{topic}</div>)}
                </div>
                <div className="flex justify-normal items-center gap-5 text-md sm:text-xl font-semibold">
                    {deployLink && <a href={deployLink} target='blank' className='flex justify-center items-center gap-1 px-4 py-1 text-primary bg-secondary-foreground rounded-lg  hover:scale-110 duration-300'>
                        <span>Live</span>
                        <Link height="15" />
                    </a>}
                    {codeLink && <a href={codeLink} target='blank' className='flex justify-center items-center gap-2 px-4 py-1 bg-secondary rounded-lg  hover:scale-110 duration-300'>
                        <span>Github</span>
                        <GitHubLogoIcon height="20" width="20" />
                    </a>}
                </div>
            </div>
            <div>
                {image && <Image loading='lazy' src={image} alt='' className='sm:h-44 w-full object-cover rounded-[10px] sm:rounded-lg overflow-hidden shadow-lg shadow-black/50 hover:scale-105 sm:hover:scale-125 sm:hover:-rotate-6 duration-300' />}
            </div>
        </div>
    );
};

export default ProjectCard;
