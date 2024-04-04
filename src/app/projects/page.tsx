import Projects from '@/components/custom/dashboard/projects'
import MainHeading from '@/components/custom/heading/mainheading'
import SubHeading from '@/components/custom/heading/subheading'
import ParticleBg from '@/components/particles/particleBg'
import React from 'react'

const ProjectPage = () => {
  return (
    <div className="grid place-items-center w-full h-screen overflow-x-hidden overflow-y-scroll no-scrollbar">
      <ParticleBg/>
      <div className='flex flex-col justify-center items-center mt-20 w-full max-w-[850px] px-4'>
        <MainHeading>My Projects</MainHeading>
        <SubHeading>Here are some of my projects</SubHeading>
        <div className='my-5'></div>
        <Projects projectsToShow={undefined} />
        <div className='my-2'></div>
      </div>
    </div>
  )
}

export default ProjectPage
