import client from "twilio";
const accountSid = process.env.TWILIO_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const verifySid = process.env.TWILIO_VERIFY_SID as string;
const cl = client(accountSid, authToken);

export const sendOTP = async (phone: string) => {
  try {
    const { status } = await cl.verify.v2
      .services(verifySid)
      .verifications.create({ to: `+${phone}`, channel: "sms" });
    console.log(status);
    return status;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const verifyOTP = async (phone: string, otpCode: string) => {
  try {
    const { status } = await cl.verify.v2
      .services(verifySid)
      .verificationChecks.create({ to: `+${phone}`, code: otpCode });
    console.log(status);
    return status;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
// cl.verify.v2
//   .services(verifySid)
//   .verifications.create({ to: "+2348114779597", channel: "sms" })
//   .then((verification: any) => console.log(verification.status))
//   .then(() => {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     rl.question("Please enter the OTP:", (otpCode: any) => {
//       cl.verify.v2
//         .services(verifySid)
//         .verificationChecks.create({ to: "+2348114779597", code: otpCode })
//         .then((verification_check: any) =>
//           console.log(verification_check.status)
//         )
//         .then(() => rl.close());
//     });
//   });
