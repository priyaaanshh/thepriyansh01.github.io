import MainHeading from '@/components/custom/heading/mainheading'
import SubHeading from '@/components/custom/heading/subheading'
import { Send } from 'lucide-react';
import React from 'react'
import InputBox from './inputBox'
import sendEmail from '@/utils/sendEmail';


const Contact = () => {

  const action = async (formData: FormData) => {
    'use server';

    const emailOptions = {
      to: process.env.MyEmailId as string,
      subject: formData.get("Subject") as string,
      message: `
      Name : ${formData.get("Name")}

      ${formData.get("Message")}

      Email : ${formData.get("Email")}
      `
    };

    await sendEmail(emailOptions);
  }


  return (
    <div className='flex flex-col items-center h-screen pt-[100px] px-4'>
      <MainHeading>Contact Me</MainHeading>
      <SubHeading>Want to connect? My inbox is always open!</SubHeading>
      <form action={action} className="flex flex-col justify-center items-center gap-5 w-full max-w-[850px] my-4">
        <InputBox inputname='Name' istextbox={false} />
        <InputBox inputname='Email' istextbox={false} />
        <InputBox inputname='Subject' istextbox={false} />
        <InputBox inputname='Message' istextbox={true} />
        <div className="flex items-center justify-end w-full">
          <button className='flex justify-center items-center gap-3 w-full sm:w-max px-8 py-2 font-bold rounded-[var(--radius)] bg-gradient border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:-rotate-1'>
            <span>Send</span>
            <Send size={25} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
