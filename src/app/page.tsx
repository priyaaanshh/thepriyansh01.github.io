import About from '@/components/custom/dashboard/about'
import Dashboard from '@/components/custom/dashboard/dashboard'
import Projects from '@/components/custom/dashboard/projects'
import Skills from '@/components/custom/dashboard/skills'
import React from 'react'

const Home = () => {
  return (
    <main className='flex justify-center w-full'>
      <div className='flex flex-col justify-center items-center w-full max-w-[950px] px-6'>
        <Dashboard />
        <About />
        <Skills />
        <Projects/>
      </div>
    </main>
  )
}

export default Home
