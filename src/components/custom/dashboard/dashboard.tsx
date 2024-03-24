import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { HardDriveDownload, Mail, Mouse, Send } from 'lucide-react';


const Dashboard = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-5 w-full h-[100lvh] max-w-[1080px] px-4 py-2'>
            <div className='text-xl md:text-4xl'>
                Hii, I am
            </div>
            <div className='text-4xl md:text-8xl text-center font-semibold bg-gradient text-gradient sm:my-5'>
                Priyansh Sahu
            </div>
            <div className='text-sm md:text-xl text-center'>
                Welcome to my portfolio! I&apos;m a dedicated full-stack developer with a strong expertise in web development. I specialize in building dynamic and intuitive web applications.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 px-4 my-3 scale-75 sm:scale-100">
                <a href="https://twitter.com/_thepriyansh01" target="_blank" className='hover:rotate-[360deg] duration-700 hover:text-destructive'>
                    <TwitterLogoIcon height='40' width="40" />
                </a>
                <a href="https://www.instagram.com/priyaaaanshhh/" target="_blank" className='hover:rotate-[360deg] duration-700 hover:text-destructive'>
                    <InstagramLogoIcon height='40' width="40" />
                </a>
                <a href="https://github.com/priyaaanshh" target="_blank" className='hover:rotate-[360deg] duration-700 hover:text-destructive'>
                    <GitHubLogoIcon height='40' width="40" />
                </a>
                <a href="https://www.linkedin.com/in/priyansh-sahu-ab9380202/" target="_blank" className='hover:rotate-[360deg] duration-700 hover:text-destructive'>
                    <LinkedInLogoIcon height='40' width="40" />
                </a>
                <a href="https://discord.gg/SRZYjv3Q" target="_blank" className='hover:rotate-[360deg] duration-700 hover:text-destructive'>
                    <DiscordLogoIcon height='40' width="40" />
                </a>
                <a href="mailto:priyansh.sahu.cer21@iitbhu.ac.in" target="_blank" className="hover:rotate-[360deg] duration-700 hover:text-destructive">
                    <Mail height={40} width={40} />
                </a>

            </div>
            <div className="flex flex-wrap justify-center items-center w-full px-4 gap-5 md:gap-10 font-semibold sm:text-2xl">
                <a href='mailto:priyansh.sahu.cer21@iitbhu.ac.in' target="_blank" className='flex justify-center items-center gap-3 w-full sm:w-max px-8 py-2 rounded-[var(--radius)] bg-gradient border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:-rotate-1'>
                    <span>Contact Me</span>
                    <Send size={25} />
                </a>
                <a href='https://drive.google.com/file/d/1LmbYn9rovs5e7BffkpEhK_jnAZPV82d7/view' target="_blank" className='flex justify-center items-center gap-3 w-full sm:w-max px-8 py-2 rounded-[var(--radius)] bg-secondary border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:rotate-1'>
                    <span>Resume</span>
                    <HardDriveDownload size={25} />
                </a>
            </div>
            <div className='flex justify-center  gap-3 absolute bottom-1 sm:bottom-10 animate-bounce'>
                <Mouse color='rgb(168, 85, 247)' />
                <span className='text-xl '>Scroll Down</span>
            </div>
        </section>
    );
};

export default Dashboard;
