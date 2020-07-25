const express = require('express');
const router = express.Router();
const config = require('config');
const rateLimit = require('express-rate-limit');

const Feedback = require('../../models/Feedback');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 1
});

// @route    POST api/feedback
// @desc     Post feedback
// @access   public
router.post('/', limiter, async (req, res) => {
  try {
    const newFeedback = new Feedback({
      text: req.body.text
    });

    await newFeedback.save();

    res.status(200).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// app.post('/', (req, res) => {
//   // Instantiate the SMTP server
//   const smtpTrans = nodemailer.createTransport({
//     host: 'smtp.mailgun.org',
//     port: 587,
//     auth: {
//       user: `postmaster@sandboxff3dc56b776b4e80a5c9bcb75819e45e.mailgun.org`,
//       pass: `mailgunPass`
//     }
//   });

//   // Specify what the email will look like
//   const mailOpts = {
//     from: 'Your sender info here', // This is ignored by Gmail
//     to: `tdeschampsjr@gmail.com`,
//     subject: 'New message from NCS Feedback',
//     text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
//   };

//   // Attempt to send the email
//   smtpTrans.sendMail(mailOpts, (error, response) => {
//     if (error) {
//       res.sendFile(__dirname + '/error.html'); // Show a page indicating failure
//     } else {
//       res.sendFile(__dirname + '/success.html'); // Show a page indicating success
//     }
//   });
// });

module.exports = router;
