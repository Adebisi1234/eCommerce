# @@@SNIPSTART email-subscription-project-python-workflows

import asyncio
from datetime import timedelta
import sys
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))

from temporalio import workflow
with workflow.unsafe.imports_passed_through():
    from temporal.activities import send_otp, send_receipt
    @workflow.defn
    class SendOTPWorkflow:

        @workflow.run
        async def run(self, data):

            try:
                return await workflow.execute_activity(
                    send_otp,
                    data,
                    start_to_close_timeout=timedelta(seconds=10),
                )

            except asyncio.CancelledError as err:
                # raise error so workflow shows as cancelled.
                raise err
    @workflow.defn
    class SendReceiptWorkflow:

        @workflow.run
        async def run(self, data) -> None:

            try:
                await workflow.execute_activity(
                    send_receipt,
                    data,
                    start_to_close_timeout=timedelta(seconds=10),
                )

            except asyncio.CancelledError as err:
                # raise error so workflow shows as cancelled.
                raise err

   
    # @workflow.defn
    # class ShippingWorkflow:
    
    #     @workflow.run
    #     async def run(self, product_id: str) -> str:
        
    #         try:
    #             # Start shipping process
    #             await workflow.sleep(timedelta(seconds=5))
    #             shipping_status = "In progress"
    
    #             # Check for cancellation signal
    #             if await workflow.is_cancel_requested():
    #                 shipping_status = "Cancelled"
    #                 return shipping_status
    
    #             # Continue shipping process
    #             await workflow.sleep(timedelta(seconds=5))
    #             shipping_status = "Completed"
    
    #             return shipping_status
    
    #         except asyncio.CancelledError as err:
    #             # raise error so workflow shows as cancelled.
    #             raise err
    
    
    # @workflow.defn
    # class ShippingStatusQueryWorkflow:
    
    #     @workflow.run
    #     async def run(self, product_id: str) -> str:
        
    #         try:
    #             # Query shipping status
    #             shipping_status = await workflow.execute_workflow(ShippingWorkflow, product_id)
    
    #             return shipping_status
    
    #         except asyncio.CancelledError as err:
    #             # raise error so workflow shows as cancelled.
    #             raise err

   
