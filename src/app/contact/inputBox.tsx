import { Label } from '@/components/ui/label'
import React from 'react'

interface props {
    inputname: string,
    istextbox: boolean,
    value: string,
    onChange: Function,
}
const InputBox: React.FC<props> = ({ inputname, istextbox, value, onChange }) => {
    return (
        <Label className="flex flex-col justify-normal items-start gap-3 bg-primary w-full rounded-[--radius] border-2 p-4">
            <span className=''>
                {inputname}
            </span>
            {istextbox === false ?
                <input type="text" name={inputname} value={value} onChange={(e) => onChange(e)} className='border-none outline-none bg-transparent w-full'required /> :
                <textarea name={inputname} value={value} onChange={(e) => onChange(e)} className='h-64 border-none outline-none bg-transparent w-full' required/>
            }
        </Label>
    )
}

export default InputBox
