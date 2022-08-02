const mailer = require('nodemailer');


const transporter = mailer.createTransport( {
    service: 'gmail',
  auth: {
    user: process.env.NM_USERNAME,
    pass: process.env.NM_PASSWORD
  }
});

const send = async (to, subject, body, attachment) => transporter.sendMail({
  from: process.env.GMAIL_FROM_ADDRESS, // sender address
  to, // list of receivers
  subject, // Subject line
  html: body, // plain text body
  attachments: attachment,
});
module.exports = {
  send,
};