import MainHeading from '@/components/custom/heading/mainheading'
import SubHeading from '@/components/custom/heading/subheading'
import React from 'react'
import sendEmail from '@/utils/sendEmail';
import ContactForm from './form';

const Contact = () => {

  const action = async (formData: FormData) => {
    'use server';
    const emailData = `
                      <html>
                        <head>
                          <style>
                          .heading {
                              margin-top: 8px;
                              margin-bottom: 8px;
                          }
                          .message {
                              white-space: pre-line;
                              max-width: 1080px;
                          }
                          </style>
                        </head>
                        <body>
                          <div class="heading">
                            <h2>From : ${formData.get("Name")}</h2>
                          </div>
                          <div class="message">
                            <p>${formData.get("Message")}</p>
                          </div>
                          <div class="heading">
                            <h3>Mail Id : ${formData.get("Email")}</h3>
                          </div>
                        </body>
                      </html>
                    `;

    const emailOptions = {
      name: formData.get("Name") as string,
      to: process.env.MyEmailId as string,
      subject: formData.get("Subject") as string,
      html: emailData,
    };
    await sendEmail(emailOptions);
  }


  return (
    <div className='flex flex-col items-center  w-full  pt-[100px] px-4'>
      <MainHeading>Contact Me</MainHeading>
      <SubHeading>Want to connect? My inbox is always open!</SubHeading>
      <form action={action} className="flex flex-col justify-center items-center gap-5 w-full max-w-[850px] my-4">
        <ContactForm />
      </form>
    </div>
  )
}

export default Contact
