import nodemailer from 'nodemailer';

interface EmailOptions {
    to: string;
    subject: string;
    message: string;
}

async function sendEmail(options: EmailOptions): Promise<void> {
    const mailId = process.env.MailId
    const mailPassword = process.env.MailPassword
    try {
        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: mailId,
                pass: mailPassword
            }
        });

        // Define email message
        const mailOptions = {
            from: process.env.MailId,
            to: options.to,
            subject: options.subject,
            text: options.message
        };

        // Send email
        console.log(mailOptions)
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export default sendEmail;
