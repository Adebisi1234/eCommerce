import { type ProductDetails, taskQueueName, namespace } from "./shared.js";
import { Connection, WorkflowClient } from "@temporalio/client";
import { payInInstallments, sendOTPEmail } from "./workflows.js";

async function runInstallment(email: string, productDetails: ProductDetails) {
  const connection = await Connection.connect();
  const client = new WorkflowClient({ connection, namespace });

  const handle = await client.start(payInInstallments, {
    args: [email, productDetails],
    taskQueue: taskQueueName,
    workflowId: "email-workflow-id",
  });
  return await handle.result();
}
async function sendEmail(email: string) {
  const connection = await Connection.connect();
  const client = new WorkflowClient({ connection, namespace });

  const handle = await client.start(sendOTPEmail, {
    args: [email],
    taskQueue: taskQueueName,
    workflowId: "email-workflow-id",
  });

  return await handle.result();
}
