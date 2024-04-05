# Write code to send email using flask-mail and gmail
# from flask import Flask
# from flask_mail import Mail, Message

# app = Flask(__name__)
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 465
# app.config['MAIL_USE_SSL'] = True
# app.config['MAIL_USERNAME'] = 'your_email@gmail.com'
# app.config['MAIL_PASSWORD'] = 'your_password'

# mail = Mail(app)

# @app.route('/')
# def send_email():
#     msg = Message('Hello', sender='your_email@gmail.com', recipients=['recipient_email@example.com'])
#     msg.body = "This is a sample email sent using Flask-Mail and Gmail."
#     mail.send(msg)
#     return 'Email sent!'

# if __name__ == '__main__':
#     app.run()