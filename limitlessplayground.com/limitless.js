const express = require('express');
const app = express();
// const nodemailer = require('nodemailer');

const port = process.env.PORT || 8081;
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

 app.get ('*', (req, res) => {
   res.sendFile(__dirname + '/index.html');
 });

// app.get ('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.listen(port, () => {
  console.log("Server listening on Port 8081");
});
