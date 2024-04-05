import asyncio
from temporalio.client import Client
from temporalio.worker import Worker
from activities import send_otp,send_receipt
from shared_objects import task_queue_name
from workflow import SendOTPWorkflow, SendReceiptWorkflow


async def main():
    client = await Client.connect("localhost:7233")

    worker = Worker(
        client,
        task_queue=task_queue_name,
        workflows=[SendOTPWorkflow, SendReceiptWorkflow],
        activities=[send_otp, send_receipt],
    )
    await worker.run()

if __name__ == "__main__":
    asyncio.run(main())