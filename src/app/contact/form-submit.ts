"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";

// I really don't know if ANY of this is correct or resilient
// forms are weird in react, sorry to whoever has to look at this in the future (note: probably me)

async function submitContactForm(formData: any) {
    // create reusable transport method (opens pool of SMTP connections)
    const smtpTransport = nodemailer.createTransport({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        host: "smtp.gmail.com",
        post: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `DJ EPX <${process.env.EMAIL_USER}>`,
        to: `${process.env.EMAIL_USER}`,
        subject: "DJEPX Contact Form Submission",
        html: `<p><b>Name:</b> ${formData.name}</p><p><b>Email:</b> ${formData.email}</p><p><b>Event Date:</b> ${formData.date}</p> <p><b>Event Location:</b> ${formData.venue}</p><p><b>Details:</b></p><p>${formData.message}</p>`,
    };

    // send mail with defined transport object
    return smtpTransport.sendMail(mailOptions);
}

export default async function handleContactForm(
    prevState: any,
    formData: FormData
) {
    const rawFormData = {
        name: formData.get("name"),
        email: formData.get("email"),
        date: formData.get("date"),
        venue: formData.get("venue"),
        message: formData.get("message"),
    };

    try {
        await submitContactForm(rawFormData);
        return { message: "good" };
    } catch (error) {
        console.log(error);
        return { message: "error" };
    }
}
