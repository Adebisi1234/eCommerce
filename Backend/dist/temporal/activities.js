import nodemailer from "nodemailer";
import { google } from "googleapis";
import "dotenv/config";
// Installment Payment Workflow
/*
- Basically send a email to the user in the interval they entered
*/
export async function sendReceipt(email, productDetails, installment, canceled) {
    const details = canceled
        ? {
            subject: `Purchase of ${productDetails.name} canceled`,
            text: `This is an alert to inform you that you've canceled the purchase of ${productDetails.name}`,
            html: `<p>This is an alert to inform you that you've canceled the purchase of ${productDetails.name} <a href="https://buysomething.vercel.app/unsubscribe/${productDetails.userId}/${productDetails.id}">Unsubscribe</a></p>`,
        }
        : installment
            ? {
                subject: `${installment} Installment for ${productDetails.name} deducted`,
                text: `This is an alert to inform you that you've paid the ${installment}(th) installment of your re-curring payment for ${productDetails.name} remaining `,
                html: `<p> This is an alert to inform you that you've paid the ${installment}(th) installment of your re-curring payment for ${productDetails.name} remaining  <a href="https://buysomething.vercel.app/unsubscribe/${productDetails.userId}/${productDetails.id}">Unsubscribe</a></p>`,
            }
            : {
                subject: `Payment for ${productDetails.name} deducted`,
                text: `This is an alert to inform you that you've paid for ${productDetails.name}`,
                html: `<p> This is an alert to inform you that you've paid for ${productDetails.name} <a href="https://buysomething.vercel.app/unsubscribe/${productDetails.userId}/${productDetails.id}">Unsubscribe</a></p>`,
            };
    try {
        return (await sM(email, details)).messageId;
    }
    catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        throw new Error(`${err}`);
    }
}
// OTP registration workflow
const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({
    refresh_token: process.env.MAIL_REFRESH_TOKEN,
});
export async function sendOTP(email) {
    function generateOTP() {
        let min = 100000;
        let max = 999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    try {
        const otp = generateOTP();
        await sM(email, otp);
        return otp;
    }
    catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        throw new Error(`${err}`);
    }
}
async function sM(email, param2) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            // @ts-expect-error
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.MAIL_USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.MAIL_REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });
        const mailOptions = typeof param2 === "number"
            ? {
                from: `no reply please ${process.env.MAIL_USER}`,
                to: email,
                subject: `OTP for ${email}`,
                text: `Hello, your otp is ${param2}`,
                html: `<h1>Hello, your otp is <b>${param2}</b></h1>`,
            }
            : {
                from: `no reply please ${process.env.MAIL_USER}`,
                to: email,
                subject: param2.subject,
                text: param2.text,
                html: param2.html,
            };
        const result = await transport.sendMail(mailOptions);
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error(`${error}`);
    }
}
