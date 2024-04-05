# @@@SNIPSTART email-subscription-project-python-activity_function
import math
import random
from temporalio import activity

from flask_mail import Message, Mail
from flask import current_app, jsonify


def generateOTP():
    min = 100000
    max = 999999
    return math.floor(random.random() * (max - min + 1)) + min

@activity.defn
async def send_otp(email: str):
    otp = generateOTP()
    otp_sender(email, otp)
    return otp

@activity.defn
async def send_receipt(email: str, installment: int, product: str):
    body
    if installment:
        body = f"Here's the receipt for the payment of {product} you're on the {installment} installment"
    else:
        body = f"Here's the receipt for the payment of {product}"

    receipt_sender(email=email, body=body)
    return

async def otp_sender(email: str, otp: int):
    mail = Mail(current_app)
    msg = Message(f"OTP for {email}", sender=("noreply", "ti.adebisi@gmail.com"), recipients=[email], body=f"Hello, your otp is {otp}", html=f"<p>Hello, your otp is {otp}</p>")
    mail.send(msg)
    return jsonify("success")

async def receipt_sender(email: str, body: str):
    mail = Mail(current_app)
    msg = Message(f"OTP for {email}", sender=("noreply", "ti.adebisi@gmail.com"), recipients=[email], body=body, html=f"<p>{body}</p>")
    mail.send(msg)
    return jsonify("success")