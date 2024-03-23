import { Label } from '@/components/ui/label'
import React from 'react'

interface props {
    inputname: string,
    istextbox: boolean
}
const InputBox: React.FC<props> = ({ inputname, istextbox }) => {
    return (
        <Label className="flex flex-col justify-normal items-start gap-3 bg-primary w-full rounded-[--radius] border-2 p-4">
            <span className=''>
                {inputname}
            </span>
            {istextbox === false ?
                <input type="text" name={inputname} className='border-none outline-none bg-transparent w-full' /> :
                <textarea name={inputname} className='h-40 border-none outline-none bg-transparent w-full' />
            }
        </Label>
    )
}

export default InputBox
