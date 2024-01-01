import nodemailer from "nodemailer";
import { google } from "googleapis";
import "dotenv/config";

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({
  refresh_token: process.env.MAIL_REFRESH_TOKEN,
});

export function generateOTP() {
  let min = 100000;
  let max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function sendOTP(email: string) {
  try {
    const otp = generateOTP();
    await sM(otp, email);
    return otp;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error(`${err}`);
  }
}

async function sM(otp: number, email: string) {
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

    const mailOptions = {
      from: "no reply please fgs <ti.adebisi@gmail.com>",
      to: email,
      subject: `OTP for ${email}`,
      text: `Hello, your otp is ${otp}`,
      html: `<h1>Hello, your otp is <b>${otp}</b></h1>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
  }
}
