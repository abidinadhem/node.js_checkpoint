const nodemailer = require('nodemailer');

// creating transporter
let transporter = nodemailer.createTransport({
  service: 'mail',
  authent: {
    user: 'sending_myemail@gmail.com',
    password: 'password'
  }
});

// setting up email data
let mailOptions = {
  from: 'sending_myemail@gmail.com',
  to: 'recieving_email@yahoo.com',
  subject: 'test test',
  text: 'This is a test email to be sent using nodemailer.'
};

// sending email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});