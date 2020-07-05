import * as functions from 'firebase-functions'
const { Nuxt } = require('nuxt')
const envs = functions.config().environment

const nuxt = new Nuxt({
  dev: false,
  buildDir: 'nuxt'
})

Object.entries(envs).forEach((key, value) => {
  process.env[`${key}`.toUpperCase()] = String(value)
})

exports.ssr = functions.https.onRequest(async (request, response) => {
  await nuxt.ready()
  return nuxt.render(request, response)
})

const nodemailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const adminEmail = functions.config().admin.email

const cors = require('cors')({ origin: true })

function send(response: functions.Response, statusCode: number, body: any) {
  response.send({
    statusCode,
    data: JSON.stringify(body)
  })
}

// 管理者用のメールテンプレート
const ContactEmail = (data: { email: string; contact: string }) => {
  return `
    <h1>
      ポートフォリオからのメールです。
    </h1>

    <h2>
      メールアドレス: ${data.email}
    </h2>

    <p>
      ----------------------------------------------------------------------------------------------------
    </p>

    <p style="white-space:pre-wrap;">
      ${data.contact}
    </p>
  `
}

exports.email = functions.https.onRequest((req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: gmailEmail, // google account email
      pass: gmailPassword // google account password
    }
  })

  cors(req, res, () => {
    const emailData = req.body.data

    const mailOptions = {
      from: 'ポートフォリオお問い合わせ <email@gmail.com>',
      to: adminEmail,
      subject: emailData.title,
      html: ContactEmail(emailData)
    }
    // returning result
    transporter.sendMail(mailOptions, (err: any) => {
      if (err) {
        send(res, 500, { error: err })
      }
      send(res, 200, { message: 'success！' })
    })
  })
})
