import nodemailer from 'nodemailer';

interface EmailOptions {
    name: string;
    to: string;
    subject: string;
    html: string;
}

async function sendEmail(options: EmailOptions): Promise<void> {
    const mailId = process.env.MailId
    const mailPassword = process.env.MailPassword
    try {
        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: "smtp.gmail.com",
            auth: {
                user: mailId,
                pass: mailPassword
            }
        });

        // Define email message
        const mailOptions = {
            from: `${options.name} ${process.env.MailId}`,
            to: options.to,
            subject: options.subject,
            html: options.html,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export default sendEmail;
