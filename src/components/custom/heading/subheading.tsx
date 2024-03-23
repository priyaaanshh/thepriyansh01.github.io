import React from 'react'

interface Props {
    children: string
}
const SubHeading: React.FC<Props> = ({ children }) => {
    return (
        <span className='text-md text-center sm:text-3xl font-semibold mb-2'>{children}</span>
    )
}

export default SubHeading
