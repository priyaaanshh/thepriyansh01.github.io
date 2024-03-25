import About from '@/components/custom/dashboard/about'
import Dashboard from '@/components/custom/dashboard/dashboard'
import Projects from '@/components/custom/dashboard/projects'
import Skills from '@/components/custom/dashboard/skills'
import Heading from '@/components/custom/heading/heading'

const Home = () => {
  return (
    <div className='snap-y snap-mandatory flex flex-col items-center justify-start h-screen w-full px-4 overflow-y-scroll no-scrollbar'>
      <div className="snap-center shrink-0 min-h-screen w-full max-w-[850px] flex flex-col justify-center items-center gap-5">
        <Dashboard />
      </div>
      <div className="snap-center shrink-0 min-h-screen w-full max-w-[850px] flex flex-col justify-center items-center gap-5">
        <Heading >{"About Me"}</Heading>
        <About />
      </div>
      <div className="snap-center shrink-0 min-h-screen w-full max-w-[850px] flex flex-col justify-center items-center gap-5">
        <Heading >{"Skills"}</Heading>
        <Skills />
      </div>
      <div className="snap-center shrink-0 min-h-screen w-full max-w-[850px] flex flex-col justify-center items-center gap-5">
        <Heading >{'Projects'}</Heading>
        <Projects projectsToShow={3} />
      </div>
    </div>
  )
}

export default Home
