import About from "@/components/custom/dashboard/about";
import Dashboard from "@/components/custom/dashboard/dashboard";
import Projects from "@/components/custom/dashboard/projects";
import Skills from "@/components/custom/dashboard/skills";
import Heading from "@/components/custom/heading/heading";
import ParticleBg from "@/components/particles/particleBg";

const Home = () => {
  return (
    <div className="sm:snap-y snap-mandatory flex flex-col items-center justify-start h-screen w-full px-4 pb-3 overflow-y-scroll no-scrollbar">
      <div className="sm:snap-start shrink-0 min-h-screen w-full max-w-[1440px] flex flex-col justify-center items-center gap-5">
        <Dashboard />
      </div>
      <div className="sm:snap-start shrink-0 min-h-screen w-full max-w-[850px] flex flex-col justify-center items-center gap-5">
        <div className="my-5"></div>
        <Heading>{"About Me"}</Heading>
        <About />
      </div>
      <div className="sm:snap-start shrink-0 min-h-screen w-full max-w-[850px] flex flex-col justify-center items-center gap-5">
        <div className="my-5"></div>
        <Heading>{"Skills"}</Heading>
        <Skills />
      </div>
      <div className="sm:snap-start shrink-0 min-h-screen w-full max-w-[850px] flex flex-col justify-start items-center gap-5">
        <div className="my-5"></div>
        <Heading>{"Projects"}</Heading>
        <Projects projectsToShow={3} />
      </div>
    </div>
  );
};

export default Home;
