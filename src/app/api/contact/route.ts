import sendEmail from "@/utils/sendEmail";
import { NextRequest, NextResponse } from "next/server";

const prepareAndSendMail = async (data: { Name: string, Email: string, Subject: string, Message: string, }) => {
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
                            <h2>From : ${data.Name}</h2>
                          </div>
                          <div class="message">
                            <p>${data.Message}</p>
                          </div>
                          <div class="heading">
                            <h3>Mail Id : ${data.Email}</h3>
                          </div>
                        </body>
                      </html>
                    `;

    const emailOptions = {
        name: data.Name,
        to: process.env.MyEmailId as string,
        subject: data.Subject,
        html: emailData,
    };
    try {
        await sendEmail(emailOptions);
        return "Your message has been sent.";
    } catch (error) {
        return "Message failed";
    }
}
export async function POST(request: NextRequest) {
    const data = await request.json();
    const message = await prepareAndSendMail(data);
    console.log("Message : ",message)
    return NextResponse.json({ message: message }, { status: 200 });
}


