import React from 'react'

interface Props {
    children: string
}
const MainHeading: React.FC<Props> = ({ children }) => {
    return (
        <span className='bg-gradient text-gradient text-4xl sm:text-6xl font-bold my-5'>{children}</span>
    )
}

export default MainHeading
