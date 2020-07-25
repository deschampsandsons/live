const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const connectDB = require('./config/db');

const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

const NRWS = require('./models/NRWS');

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// app.get ('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// POST route from contact form
app.post('/contact', async (req, res) => {
  try {
    const newNRWS = new NRWS({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.tel,
    });

    await newNRWS.save();

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      auth: {
        user: ``,
        pass: ``,
      },
    });

    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: ``,
      subject: 'New message from NRWS contact form',
      text: `${req.body.name} (${req.body.tel}) says: ${req.body.email}`,
    };

    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.sendFile(__dirname + '/success.html'); // Show a page indicating failure
      } else {
        res.sendFile(__dirname + '/success.html'); // Show a page indicating success
      }
    });
  } catch (err) {
    console.error(err.message);
    res.sendFile(__dirname + '/error.html');
  }
});

app.listen(port, () => {
  console.log('Server listening on Port 8080');
});
