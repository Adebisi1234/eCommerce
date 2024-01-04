import { Worker } from "@temporalio/worker";
import * as activities from "./activities.js";
import { namespace, taskQueueName } from "./shared.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

async function startWorker() {
  // Register Workflows and Activities with the Worker and connect to
  // the Temporal server.
  const worker = await Worker.create({
    workflowsPath: require.resolve("./workflows"),
    activities,
    namespace,
    taskQueue: taskQueueName,
  });

  // Start accepting tasks from the Task Queue.
  await worker.run();
}

startWorker().catch((err) => console.log(err));
