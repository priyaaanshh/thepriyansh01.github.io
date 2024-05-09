import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { HardDriveDownload, Mail, Mouse, Send } from "lucide-react";
import Link from "next/link";
import Astronaut from "@/assets/svg/Astronaut.svg";
import Image from "next/image";
import TypingAnimation from "./type-animate";

const Dashboard = () => {
  return (
    <section className="relative flex justify-center items-center gap-5 w-full h-screen px-4 py-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col justify-center items-left gap-5 w-full max-w-[900px] h-screen px-4 py-2">
          <div className="text-xl md:text-4xl">Hii, I am</div>
          <div className="text-4xl md:text-8xl font-semibold text-gradient bg-gradient ">
            <TypingAnimation />
          </div>
          <div className="text-sm md:text-xl">
            Welcome to my portfolio! I&apos;m a dedicated full-stack developer
            with a strong expertise in web development. I specialize in building
            dynamic and intuitive web applications.
          </div>
          <div className="flex flex-wrap justify-left items-center gap-8  my-3 scale-75 sm:scale-100">
            <a
              href="https://twitter.com/_thepriyansh01"
              target="_blank"
              className="hover:rotate-[360deg] duration-700 hover:text-destructive"
            >
              <TwitterLogoIcon height="40" width="40" />
            </a>
            <a
              href="https://www.instagram.com/priyaaaanshhh/"
              target="_blank"
              className="hover:rotate-[360deg] duration-700 hover:text-destructive"
            >
              <InstagramLogoIcon height="40" width="40" />
            </a>
            <a
              href="https://github.com/priyaaanshh"
              target="_blank"
              className="hover:rotate-[360deg] duration-700 hover:text-destructive"
            >
              <GitHubLogoIcon height="40" width="40" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyansh-sahu-ab9380202/"
              target="_blank"
              className="hover:rotate-[360deg] duration-700 hover:text-destructive"
            >
              <LinkedInLogoIcon height="40" width="40" />
            </a>
            <a
              href="https://discord.gg/SRZYjv3Q"
              target="_blank"
              className="hover:rotate-[360deg] duration-700 hover:text-destructive"
            >
              <DiscordLogoIcon height="40" width="40" />
            </a>
            <a
              href="mailto:priyansh.sahu.cer21@iitbhu.ac.in"
              target="_blank"
              className="hover:rotate-[360deg] duration-700 hover:text-destructive"
            >
              <Mail height={40} width={40} />
            </a>
          </div>
          <div className="flex flex-wrap justify-left items-center w-full  gap-5 md:gap-10 font-semibold sm:text-2xl">
            <Link
              href="/contact"
              className="flex justify-center items-center gap-3 w-full sm:w-max px-8 py-2 rounded-lg bg-gradient border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:-rotate-1"
            >
              <span>Contact Me</span>
              <Send size={25} />
            </Link>
            <a
              href="https://drive.google.com/file/d/1sn-LJ_gFjXjTJ5UvSicUUtdGYOT_W1Bw/view?usp=sharing"
              target="_blank"
              className="flex justify-center items-center gap-3 w-full sm:w-max px-8 py-2 rounded-lg bg-secondary border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:rotate-1"
            >
              <span>Resume</span>
              <HardDriveDownload size={25} />
            </a>
          </div>
        </div>
        <div className="hidden sm:flex size-[600px] overflow-hidden object-contain animate-bounce-slow">
          <Image src={Astronaut} alt="" priority/>
        </div>
      </div>
      <div className="flex justify-center  gap-3 absolute bottom-1 sm:bottom-10 animate-bounce">
        <Mouse color="rgb(168, 85, 247)" />
        <span className="text-xl ">Scroll Down</span>
      </div>
    </section>
  );
};

export default Dashboard;
