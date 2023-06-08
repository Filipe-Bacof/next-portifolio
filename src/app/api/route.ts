import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    })

    const mailData = {
      from: process.env.GMAIL_USER,
      to: 'filipebacof@gmail.com',
      subject: `Nome: ${name}`,
      text: message + ' | Enviado De: ' + email,
      html: `<div>${message}</div><p>Responder para: ${email}</p>`,
    }

    try {
      await new Promise<void>((resolve, reject) => {
        transporter.sendMail(mailData, function (err, info) {
          if (err) {
            console.error('Error sending email:', err)
            reject(err)
          } else {
            console.log('Email sent successfully:', info)
            resolve()
          }
        })
      })
    } catch (error) {
      return NextResponse.json({ status: 400 })
    }

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ status: 500 })
  }
}