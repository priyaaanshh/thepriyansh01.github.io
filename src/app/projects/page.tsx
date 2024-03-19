import Projects from '@/components/custom/dashboard/projects'
import MainHeading from '@/components/custom/heading/mainheading'
import SubHeading from '@/components/custom/heading/subheading'
import React from 'react'

const ProjectPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 px-2'>
      <MainHeading>My Projects</MainHeading>
      <SubHeading>Here are some of my projects</SubHeading>
      <Projects projectsToShow={undefined} />
    </div>
  )
}

export default ProjectPage
