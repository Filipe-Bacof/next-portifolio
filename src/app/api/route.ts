import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  try {
    const { name, email, phone, subject, message } = await req.json()

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
      subject:
        subject ||
        (name && `${name} - Contato via portifólio`) ||
        'Contato via portifólio',
      text: `${message} | ${name ? 'Nome: ' + name : 'Não informou o nome'} | ${
        email ? 'Email: ' + email : 'Não informou o e-mail'
      } | ${phone ? 'Telefone: ' + phone : 'Não informou o telefone'}`,
      html: `<div>
      ${name ? '<h1>Nome: ' + name + '</h1>' : '<h1>Nome não informado</h1>'}
      ${
        email
          ? '<h2>E-mail: ' + email + '</h2>'
          : '<h2>E-mail não informado</h2>'
      }
      ${
        phone
          ? '<h2>Telefone: ' + phone + '</h2>'
          : '<h2>Telefone não informado</h2>'
      }
      <p>${message}</p>
      </div>`,
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
