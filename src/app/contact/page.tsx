'use client';
import MainHeading from '@/components/custom/heading/mainheading'
import SubHeading from '@/components/custom/heading/subheading'
import React, { useEffect, useState } from 'react'
import InputBox from './inputBox';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast()
  const initialState = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  }
  const [data, setData] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: typeof data) => ({ ...prev, [name]: value }));
  }
  const action = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      fetch('/api/contact', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
        .then((data) => {
          setData(initialState)
          toast({
            description: data.message,
          })
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="grid place-items-center w-full h-screen overflow-x-hidden overflow-y-scroll no-scrollbar" >
      <div className='flex flex-col justify-center items-center mt-20 w-full max-w-[850px] px-4' >
        <MainHeading>Contact Me</MainHeading>
        <SubHeading>Want to connect? My inbox is always open!</SubHeading>
        <form onSubmit={action} className="flex flex-col justify-center items-center gap-5 w-full">
          <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[850px] my-4">
            <InputBox inputname='Name' value={data.Name} onChange={handleChange} istextbox={false} />
            <InputBox inputname='Email' value={data.Email} onChange={handleChange} istextbox={false} />
            <InputBox inputname='Subject' value={data.Subject} onChange={handleChange} istextbox={false} />
            <InputBox inputname='Message' value={data.Message} onChange={handleChange} istextbox={true} />
            <div className="flex items-center justify-end w-full">
              <button type='submit' className='flex justify-center items-center gap-3 w-full sm:w-max px-8 py-2 font-bold rounded-[var(--radius)] bg-gradient border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:-rotate-1'>
                <span>Send</span>
                <Send size={25} />
              </button>
            </div>
          </div>
        </form>
      </div >
    </div >
  )
}

export default Contact
