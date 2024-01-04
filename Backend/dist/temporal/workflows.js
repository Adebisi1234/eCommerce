import { ApplicationFailure, proxyActivities, sleep, defineSignal, defineQuery, setHandler, } from "@temporalio/workflow";
export const cancelPurchase = defineSignal("cancelPurchase");
export const installmentQ = defineQuery("installment");
export async function payInInstallments(email, productDetails, installment, sleepTime) {
    const { sendReceipt } = proxyActivities({
        retry: {
            maximumAttempts: 10,
        },
        startToCloseTimeout: "10s",
    });
    try {
        let i = 1;
        let state = "pending";
        if (state === "canceled") {
            await sendReceipt(email, productDetails, undefined, true);
        }
        else if (installment) {
            while (i < installment) {
                await sendReceipt(email, productDetails, i);
                i++;
                setHandler(installmentQ, () => i);
                setHandler(cancelPurchase, () => void (state = "canceled"));
                if (state === "pending") {
                    await sleep(sleepTime ?? "30m");
                }
                else if (state === "canceled") {
                    await sendReceipt(email, productDetails, undefined, true);
                    break;
                }
            }
        }
        else {
            await sendReceipt(email, productDetails);
        }
    }
    catch (err) {
        throw new ApplicationFailure(`Failed to send receipt. Error: ${err}`);
    }
}
export async function sendOTPEmail(email) {
    const { sendOTP } = proxyActivities({
        retry: {
            maximumAttempts: 10,
        },
        startToCloseTimeout: "10s",
    });
    try {
        console.log("Sending otp to", email);
        return await sendOTP(email);
    }
    catch (err) {
        throw new ApplicationFailure(`Failed to send otp. Error: ${err}`);
    }
}
