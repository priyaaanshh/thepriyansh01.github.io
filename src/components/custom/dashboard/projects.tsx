// Projects.tsx
import React from 'react';
import ProjectCard from './card/projectCard';
import Peace from '../../../assets/images/Peace.png'

const Projects = () => {
    const projects = [
        {
            title: "Search EX",
            description: "Powerful Search Engine in NextJs",
            topics: ["SASS",
                "NextJs",
                "search - engine",
                "MongoDb",
                "NextAuth"],
            deployLink: "haha",
            codeLink: "huhuhuhu",
            image: { Peace }
        },
        {
            title: "Search EX",
            description: "Powerful Search Engine in NextJs",
            topics: ["SASS",
                "NextJs",
                "search - engine",
                "MongoDb",
                "NextAuth"],
            deployLink: "haha",
            codeLink: "huhuhuhu",
            image: { Peace }
        },
        {
            title: "Search EX",
            description: "Powerful Search Engine in NextJs",
            topics: ["SASS",
                "NextJs",
                "search - engine",
                "MongoDb",
                "NextAuth"],
            deployLink: "haha",
            codeLink: "huhuhuhu",
            image: { Peace }
        },
        {
            title: "Search EX",
            description: "Powerful Search Engine in NextJs",
            topics: ["SASS",
                "NextJs",
                "search - engine",
                "MongoDb",
                "NextAuth"],
            deployLink: "haha",
            codeLink: "huhuhuhu",
            image: { Peace }
        },
        {
            title: "Search EX",
            description: "Powerful Search Engine in NextJs",
            topics: ["SASS",
                "NextJs",
                "search - engine",
                "MongoDb",
                "NextAuth"],
            deployLink: "haha",
            codeLink: "huhuhuhu",
            image: { Peace }
        }
    ];

    return (
        <section className='flex flex-col justify-center items-center w-full min-h-screen max-w-[850px] my-5'>
            <span className='bg-gradient text-gradient text-5xl font-bold my-7'>Projects</span>
            <div className='flex flex-wrap justify-center items-center text-lg text-center w-full gap-5'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
