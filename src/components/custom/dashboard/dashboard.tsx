import { Button } from '@/components/ui/button'
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TextAlignLeftIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Github, HardDriveDownload, Mail, Phone, Send } from 'lucide-react';

const Dashboard = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-5 w-full h-screen max-w-[1080px] px-4 py-2'>
            <div className='text-2xl md:text-4xl'>
                Hii, I am
            </div>
            <div className='text-6xl md:text-9xl text-center font-semibold text-gradient my-5'>
                Priyansh Sahu
            </div>
            <div className='text-md md:text-xl text-center'>
                Welcome to my portfolio! I&apos;m a dedicated full-stack developer with a strong expertise in web development. I specialize in building dynamic and intuitive web applications.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 my-3">
                <a href="https://github.com/thepriyansh01" className='hover:rotate-[360deg] duration-700 hover:text-yellow-500'>
                    <GitHubLogoIcon height='40' width="40" />
                </a>
                <a href="https://www.linkedin.com/in/priyansh-sahu-ab9380202/" className='hover:rotate-[360deg] duration-700 hover:text-yellow-500'>
                    <LinkedInLogoIcon height='40' width="40" />
                </a>
                <a href="https://twitter.com/_thepriyansh01" className='hover:rotate-[360deg] duration-700 hover:text-yellow-500'>
                    <TwitterLogoIcon height='40' width="40" />
                </a>
                <a href="https://www.instagram.com/_thepriyansh/" className='hover:rotate-[360deg] duration-700 hover:text-yellow-500'>
                    <InstagramLogoIcon height='40' width="40" />
                </a>
                <a href="https://discord.gg/SRZYjv3Q" className='hover:rotate-[360deg] duration-700 hover:text-yellow-500'>
                    <DiscordLogoIcon height='40' width="40" />
                </a>
                <a href="mailto:priyansh.sahu.cer21@iitbhu.ac.in" className="hover:rotate-[360deg] duration-700 hover:text-yellow-500">
                    <Mail height={40} width={40} />
                </a>

            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 font-semibold md:text-2xl">
                <a href='mailto:priyansh.sahu.cer21@iitbhu.ac.in' className='flex justify-center items-center gap-3 px-4 md:px-8 py-2 rounded-[var(--radius)] btn-gradient border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:-rotate-1'>
                    <span>Contact Me</span>
                    <Send size={25} />
                </a>
                <button className='flex justify-center items-center gap-3  px-4 md:px-8 py-2 rounded-[var(--radius)] bg-secondary border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:rotate-1'>
                    <span>Resume</span>
                    <HardDriveDownload size={25} />
                </button>
            </div>
        </section>
    )
}

export default Dashboard
