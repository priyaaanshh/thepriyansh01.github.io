import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Dage = () => {
    const action = async (formData: FormData) => {
        'use server';
        console.log(formData.get("todo"))
    }
    return (
        <div className='flex justify-center items-center'>
            <form action={action} className='flex flex-col justify-center items-start gap-5 p-8 rounded-[--radius] bg-primary border-2 w-full max-w-96'>
                <label htmlFor="todo">Enter Task</label>
                <Input type="text" id='todo' name='todo' className='bg-black' required />
                <Button className='w-full bg-black hover:bg-black'>Add</Button>
            </form>
        </div>
    )
}

export default Dage
