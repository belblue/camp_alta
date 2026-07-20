from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os
import httpx

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("campalta.contact")

# Load environment variables from .env file (before middleware so
# ALLOWED_ORIGINS is available)
load_dotenv()

app = FastAPI()

# Browsers never call this service directly (the Nuxt server route proxies
# over the internal Docker network), so this is defence-in-depth only.
# Override with ALLOWED_ORIGINS=http://localhost:3000 for local dev.
allowed_origins = os.getenv(
    "ALLOWED_ORIGINS", "https://campalta.net,https://www.campalta.net"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["*"],
)

sender_email = os.getenv("SENDER_EMAIL")
sender_password = os.getenv("SENDER_PASSWORD")
receiver_email = os.getenv("RECEIVER_EMAIL")
recaptcha_secret_key= os.getenv("RECAPTCHA_SECRET_KEY")
smtp_server= os.getenv("SMTP_SERVER")
smtp_port = int(os.getenv("SMTP_PORT", "587"))


async def verify_recaptcha(token: str) -> bool:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://www.google.com/recaptcha/api/siteverify",
            data={"secret": recaptcha_secret_key, "response": token},
        )
        result = response.json()
        if not result.get("success", False):
            logger.warning("recaptcha rejected: %s", result.get("error-codes"))
            return False
        score = result.get("score", 0.0)
        action = result.get("action", "")
        logger.info("recaptcha score=%s action=%s", score, action)
        return score >= 0.3 and action == "submit"

async def send_email(name: str, email: str, message: str):
    content = MIMEMultipart()
    content["From"] = sender_email
    content["To"] = receiver_email
    content["Subject"] = "New Contact Form Submission"

    body = f"""
    --System-copy--
    New contact form submission from Camp Alta webpage. Name: {name}. Email: {email}. Message: {message}
    """

    html = f"""
    <html>
    <body>
        <h3>New contact form submission from Camp Alta webpage.</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong> {message}</p>
    </body>
    </html>
    """

    part2 = MIMEText(body, "plain")
    part1 = MIMEText(html, "html")
    content.attach(part1)
    content.attach(part2)

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, receiver_email, content.as_string())
        server.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/submit_form/")
async def submit_form(    
    name: str = Form(...), 
    email: str = Form(...), 
    message: str = Form(...), 
    recaptchaToken: str = Form(...)
):
    try:
        logger.info("contact form submission received")
        is_valid_recaptcha = await verify_recaptcha(recaptchaToken)
        if not is_valid_recaptcha:
            return({"result":"error", "message":"Invalid recaptcha"})
        await send_email(name, email, message)
        return {"result":"ok", "message": "Form submitted successfully"}

    except Exception:
        logger.exception("contact form processing failed")
        return({"result":"error", "message":"Internal server error"})

