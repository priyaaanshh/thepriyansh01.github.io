import About from '@/components/custom/dashboard/about'
import Dashboard from '@/components/custom/dashboard/dashboard'
import Projects from '@/components/custom/dashboard/projects'
import Skills from '@/components/custom/dashboard/skills'
import Heading from '@/components/custom/heading/heading'
import React from 'react'

const Home = () => {
  return (
    <main className='flex justify-center w-full'>
      <div className='flex flex-col justify-center items-center w-full max-w-[950px] px-6'>
        <Dashboard />
        <Heading >{"About Me"}</Heading>
        <About />
        <Heading >{"Skills"}</Heading>
        <Skills />
        <Heading >{'Projects'}</Heading>
        <Projects projectsToShow={3} />
      </div>
    </main>
  )
}

export default Home
