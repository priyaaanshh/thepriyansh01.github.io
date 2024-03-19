import React from 'react'

interface Props {
    children: string
}
const SubHeading: React.FC<Props> = ({ children }) => {
    return (
        <span className='text-md sm:text-4xl font-semibold mb-2'>{children}</span>
    )
}

export default SubHeading
