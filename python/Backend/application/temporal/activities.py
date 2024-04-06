# Seems to run on a different runtime
import math
import random
from temporalio import activity
from flask import Flask
from flask_mail import Message, Mail
import os
from dotenv import load_dotenv
load_dotenv()

def generateOTP():
    min = 100000
    max = 999999
    return math.floor(random.random() * (max - min + 1)) + min

@activity.defn
async def send_otp(email: str):
    otp = generateOTP()
    
    await otp_sender(email, otp)
    return otp

@activity.defn
async def send_receipt(email: str, installment: int, product: str):
    body
    if installment:
        body = f"Here's the receipt for the payment of {product} you're on the {installment} installment"
    else:
        body = f"Here's the receipt for the payment of {product}"

    await receipt_sender(email=email, body=body)
    return

async def otp_sender(email: str, otp: int):
    msg = Message(f"OTP for {email}", sender=("noreply", "ti.adebisi@gmail.com"), recipients=[email], body=f"Hello, your otp is {otp}", html=f"<p>Hello, your otp is {otp}</p>")
    await send(msg)

async def receipt_sender(email: str, body: str):
    msg = Message(f"OTP for {email}", sender=("noreply", "ti.adebisi@gmail.com"), recipients=[email], body=body, html=f"<p>{body}</p>")
    await send(msg)

async def send(msg):
    app = Flask(__name__)
    with app.app_context():
        app.config['MAIL_SERVER']='smtp.gmail.com'
        app.config['MAIL_PORT'] = 465
        app.config['MAIL_USERNAME'] = "oluwatobilobaadebisi6@gmail.com"
        app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
        app.config['MAIL_USE_TLS'] = False
        app.config['MAIL_USE_SSL'] = True
        app.config["SECRET_KEY"] = os.getenv("JWT_REFRESH_SECRET", "JWT_ACCESS_SECRET")
        mail = Mail(app)
        mail.send(msg)
        return "success"
    