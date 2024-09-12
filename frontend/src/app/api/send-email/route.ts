import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, reason, message } = await req.json();

        // 1. Set up the Nodemailer transporter with Outlook SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,  // Use TLS
            auth: {
                user: process.env.EMAIL_USER,  // Your Outlook email address
                pass: process.env.EMAIL_PASS,  // Your Outlook app-specific password
            },
            tls: {
                ciphers: 'SSLv3',
            },
        });

        // 2. Determine the recipient based on the reason for inquiry
        let recipient;
        switch (reason) {
            case 'Estimating':
                recipient = 'jdmconnell@gmail.com';
                break;
            case 'Materials / Supplies / Equipment sales/ Rentals':
                recipient = 'orders@sanbarcc.com';
                break;
            default:
                recipient = 'Generalinquiries@sanbarcc.com ';  // General inquiries
        }

        // 3. Compose the email
        const mailOptions = {
            from: email,
            to: recipient,
            subject: `New Contact Form Submission: ${reason}`,
            text: `
        Name: ${name}
        Email: ${email}
        Reason for Inquiry: ${reason}
        Message: ${message}
      `,
        };

        // 4. Send the email
        await transporter.sendMail(mailOptions);

        // 5. Respond with success
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}
