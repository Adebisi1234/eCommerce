import {
  ApplicationFailure,
  proxyActivities,
  sleep,
  defineSignal,
  defineQuery,
  setHandler,
} from "@temporalio/workflow";
import * as activities from "./activities.js";
import { ProductDetails } from "./shared.js";
import { Document } from "mongoose";
import { UserDoc } from "../models/User.js";
export const cancelPurchase = defineSignal("cancelPurchase");
export const installmentQ = defineQuery("installment");
export const resetOTP = defineSignal("resetOTP");

export async function payInInstallments(
  email: string,
  productDetails: ProductDetails,
  installment?: number,
  sleepTime?: string
) {
  const { sendReceipt } = proxyActivities<typeof activities>({
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
    } else if (installment) {
      while (i <= installment) {
        await sendReceipt(email, productDetails, i);
        i++;
        setHandler(installmentQ, () => i);
        setHandler(cancelPurchase, () => void (state = "canceled"));
        if (state === "pending") {
          await sleep(sleepTime ?? "30m");
        } else if (state === "canceled") {
          await sendReceipt(email, productDetails, undefined, true);
          break;
        }
      }
    } else {
      await sendReceipt(email, productDetails);
    }
  } catch (err) {
    throw new ApplicationFailure(`Failed to send receipt. Error: ${err}`);
  }
}

export async function sendOTPEmail(user: Document & UserDoc & any) {
  let reset = false;
  const { sendOTP } = proxyActivities<typeof activities>({
    retry: {
      maximumAttempts: 10,
    },
    startToCloseTimeout: "10s",
  });
  try {
    console.log("Sending otp to", user.email);
    return await sendOTP(user.email);
  } catch (err) {
    throw new ApplicationFailure(`Failed to send otp. Error: ${err}`);
  }
}
