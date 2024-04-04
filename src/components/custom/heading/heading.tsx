import React from 'react'

interface Props {
    children: string
}
const Heading: React.FC<Props> = ({ children }) => {
    return (
        <span className='relative bg-gradient text-gradient text-3xl sm:text-5xl font-bold my-7'>{children}</span>

    )
}

export default Heading
