'use client';
import React, { useEffect, useState } from 'react'
import InputBox from './inputBox'
import { Send } from 'lucide-react';


const ContactForm = () => {
    const [data, setData] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
    });


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[850px] my-4">
            <InputBox inputname='Name' value={data.Name} onChange={handleChange} istextbox={false} />
            <InputBox inputname='Email' value={data.Email} onChange={handleChange} istextbox={false} />
            <InputBox inputname='Subject' value={data.Subject} onChange={handleChange} istextbox={false} />
            <InputBox inputname='Message' value={data.Message} onChange={handleChange} istextbox={true} />
            <div className="flex items-center justify-end w-full">
                <button className='flex justify-center items-center gap-3 w-full sm:w-max px-8 py-2 font-bold rounded-[var(--radius)] bg-gradient border-2 shadow-lg shadow-black/25 hover:scale-110 duration-300 hover:-rotate-1'>
                    <span>Send</span>
                    <Send size={25} />
                </button>
            </div>
        </div>
    )
}

export default ContactForm
