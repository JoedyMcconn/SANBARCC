import {NextRequest, NextResponse} from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        // Parse form data
        const formData = await req.formData();
        console.log("Form data received:", formData);

        // Extract form fields
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const reason = formData.get('reason') as string;
        const message = formData.get('message') as string;
        const file = formData.get('file') as Blob | null;

        console.log("Parsed form fields:", { name, email, phone, reason, message });

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("Nodemailer transporter set up");

        // Determine recipient
        let recipient;
        switch (reason) {
            case 'Estimating':
                recipient = 'estimating@sanbarcc.com';
                break;
            case 'Materials / Supplies / Equipment sales/ Rentals':
                recipient = 'sales@sanbarcc.com';
                break;
            case 'General Inquiry':
                recipient = 'info@sanbarcc.com';
                break;
            case 'Employment':
                recipient = 'employment@sanbarcc.com';
                break;
            default:
                recipient = 'info@sanbarcc.com';
        }

        console.log("Recipient determined:", recipient);

        // Compose email
        const mailOptions: any = {
            from: email,
            to: recipient,
            subject: `New Inquiry from ${name} - ${reason}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Reason for Inquiry: ${reason}
        Message: ${message}
      `,
        };

        // Handle file attachment
        if (file) {
            const buffer = Buffer.from(await file.arrayBuffer());
            mailOptions.attachments = [
                {
                    filename: 'attachment', // Set filename
                    content: buffer,
                },
            ];
            console.log("File attached:", mailOptions.attachments);
        }

        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS);


        // Send the email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error("Error in email sending process:", error);
        return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }
}
