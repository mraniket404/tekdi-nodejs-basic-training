
require("dotenv").config();

const nodemailer = require("nodemailer");

async function sendEmail() {
    try {
        // 1. Create email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 2. Verify email connection
        await transporter.verify();
        console.log("Email server is ready!");

        // 3. Send email
        const info = await transporter.sendMail({
            from: `"Aniket Gosavi" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: "Node.js Nodemailer Practical",
            text: "Hello! This email was sent using Node.js and Nodemailer.",
            html: `
                <h2>Hello!</h2>
                <p>This email was sent using <b>Node.js and Nodemailer</b>.</p>
                <p>Regards,<br>Aniket Gosavi</p>
            `,
        });

        console.log("Email sent successfully!");
        console.log("Message ID:", info.messageId);
    } catch (error) {
        console.error("Email sending failed:", error.message);
    }
}

sendEmail();
