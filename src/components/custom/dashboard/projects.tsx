import React from 'react';
import ProjectCard from './card/projectCard';
import Peace from '@/assets/images/Peace.png'
import ShopTalk from '@/assets/images/ShopTalk.png'
import Sharepost from '@/assets/images/Sharepost.png'
import HotelBook from '@/assets/images/HotelBook.png'
import TaskManager from '@/assets/images/TaskManager.png'
import IMDB from '@/assets/images/IMDB.png'
import Zomato from '@/assets/images/Zomato.png'

interface Props {
    projectsToShow: number | undefined
}
const Projects: React.FC<Props> = ({ projectsToShow }) => {
    const projects = [
        {
            title: "ShopTalk",
            description: "Ecommerce website with AI Chat support",
            topics: [
                "ReactJs",
                "NodeJs",
                "MongoDb",
                "Huggingface models"],
            deployLink: "https://build-for-bharat-frontend-v6qd.vercel.app/",
            codeLink: "https://github.com/priyaaanshh/BuildForBharat-Frontend",
            image: ShopTalk
        },
        {
            title: "Peace",
            description: "A health website with media player, mood tracker, real time chat system, appointment booking system",
            topics: [
                "Socket.io",
                "Media Player",
                "Context api",
                "MERN",
                "Authentication",
            ],
            deployLink: "https://peace-client.vercel.app/",
            codeLink: "https://github.com/priyaaanshh/Peace",
            image: Peace
        },
        {
            title: "HotelBook.com",
            description: "Hotel Booking System with admin panel using MERN stack",
            topics: [
                "ReactJs",
                "NodeJs",
                "ExpressJs",
                "MongoDb",
                "Bcrypt",
                "Jsonwebtoken"
            ],
            deployLink: "https://hotel-book-com-client.vercel.app/",
            codeLink: "https://github.com/priyaaanshh/HotelBook.com",
            image: HotelBook
        },
        {
            title: "Sharepost",
            description: "Social media platform like instagram",
            topics: [
                "Tailwind Css",
                "ReactJs",
                "NodeJs",
                "MongoDb",
                "Infinite scroll"],
            deployLink: "https://sharepost-phi.vercel.app/",
            codeLink: "https://github.com/priyaaanshh/sharepost",
            image: Sharepost
        },
        {
            title: "IMDB clone",
            description: "Imdb clone with moviedb apis to show movie details and rating",
            topics: [
                "ReactJs",
                "react-router-dom",
                "Api",
                "Css",
            ],
            deployLink: "https://imdb-clone-tan.vercel.app/",
            codeLink: "https://github.com/priyaaanshh/Movie-Web-App",
            image: IMDB
        },
        {
            title: "Zomato clone",
            description: "Zomato clone with static json to show cusines",
            topics: [
                "ReactJs",
                "react-router-dom",
                "Json",
                "Css",
            ],
            deployLink: "https://zomato-clone-theta-bay.vercel.app/",
            codeLink: "https://github.com/priyaaanshh/Zomato-Clone",
            image: Zomato
        },
        {
            title: "TaskManager",
            description: "Flutter app to note tasks and add reminders",
            topics: [
                "Flutter",
                "Sqlite",
                "flutter_local_notifications",
                "theme switcher",
            ],
            deployLink: null,
            codeLink: "https://github.com/priyaaanshh/Task-Manager-Flutter",
            image: TaskManager
        },
        {
            title: "Calculator",
            description: "Scientific Calculator in Flutter with BMI index calculator",
            topics: [
                "Flutter",
                "math_expressions",
                "BMI calculator",
            ],
            deployLink: null,
            codeLink: "https://github.com/priyaaanshh/Calculator",
            image: null
        },
        {
            title: "Sentiment-Analysis",
            description: "Sentiment Analysis on blogs using transformers",
            topics: [
                "pandas",
                "nltk",
                "beautifulsoup4",
                "transformers",
            ],
            deployLink: null,
            codeLink: "https://github.com/priyaaanshh/Sentiment-Analysis-on-Blogs",
            image: null
        },
    ];

    return (
        <section className='relative flex flex-wrap justify-center items-center text-lg text-center w-full gap-5'>
            {projects.slice(0, projectsToShow).map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                />
            ))}
        </section>
    );
};

export default Projects;
