import MainHeading from '@/components/custom/heading/mainheading'
import SubHeading from '@/components/custom/heading/subheading'
import React from 'react'

const Blogs = () => {
    return (
        <div className='grid place-items-center w-full h-screen overflow-y-scroll no-scrollbar'>
            <div className="flex flex-col justify-center items-center">
                <MainHeading>My Blogs</MainHeading>
                <SubHeading>Here are some of my blogs</SubHeading>
            </div>
        </div>
    )
}

export default Blogs
