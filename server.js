const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Handle form submission
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail, Yahoo, etc.
    auth: {
      user: 'handsomed679@gmail.com',
      pass: 'rbdpmecuurfodgot'
    }
  });

  // Create the email options
  const mailOptions = {
  from: 'handsomed679@gmail.com',
  to: 'handsomed679@gmail.com',
  subject: 'Thank you for your submission',
  text: `We received the following message from ${name} (${email}):\n\n${message}`
};


  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error occurred while sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
