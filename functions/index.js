const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return
    }

    const mailOptions = {
      from: req.body.email,
      replyTo: req.body.email,
      to: gmailEmail,
      subject: `${req.body.nombre} quiere agendar una cita`,
      text: req.body.cita,
      html: `<p>${req.body.cita}</p>`,
    }

    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('New email sent to:', gmailEmail)
      res.status(200).send({ isEmailSend: true })
      return
    })
  })
})
