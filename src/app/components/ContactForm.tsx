'use client'

import { FormEvent, useState } from 'react'
import Button from './Button'
import IconBxMailSend from './icons/IconBxMailSend'

export default function ContactForm() {
  const [status, setStatus] = useState('Enviar')
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Enviando...')

    const { name, email, phone, subject, message }: any = e.currentTarget
    const details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    }
    try {
      await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(details),
      })

      setStatus('Enviado!!')
    } catch (error) {
      console.error(error)
      setStatus('Falhou!!')
    }
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center rounded-3xl bg-blue-950 pb-4">
      <h2 className="cursor-default px-8 py-4 text-lg font-extrabold text-white">
        Formulário de Contato
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-6 items-center justify-center"
      >
        <div className="flex flex-col p-2">
          <label htmlFor="name" id="labeltext" className="text-white">
            Nome:
          </label>
          <input
            className="flex w-64 flex-row items-center justify-center rounded-2xl bg-customBlue-100 p-4 text-white outline-none duration-200 hover:bg-customBlue-200"
            type="text"
            id="name"
            placeholder="Como posso chamar você?"
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="email" id="labeltext" className="text-white">
            Email:
          </label>
          <input
            className="flex w-64 flex-row items-center justify-center rounded-2xl bg-customBlue-100 p-4 text-white outline-none duration-200 hover:bg-customBlue-200"
            type="email"
            id="email"
            placeholder="Seu melhor email"
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="phone" id="labeltext" className="text-white">
            Telefone:
          </label>
          <input
            className="flex w-64 flex-row items-center justify-center rounded-2xl bg-customBlue-100 p-4 text-white outline-none duration-200 hover:bg-customBlue-200"
            type="tel"
            id="phone"
            placeholder="Seu telefone"
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="subject" id="labeltext" className="text-white">
            Assunto:
          </label>
          <input
            className="flex w-64 flex-row items-center justify-center rounded-2xl bg-customBlue-100 p-4 text-white outline-none duration-200 hover:bg-customBlue-200"
            type="text"
            id="subject"
            placeholder="Assunto relacionado"
          />
        </div>
        <div className="mb-2 flex flex-col p-2">
          <label htmlFor="message" id="labeltext" className="text-white">
            Mensagem: &#40;obrigatório&#41;
          </label>
          <textarea
            id="message"
            className="flex h-[130px] max-h-48 w-64 resize-none flex-row items-center justify-center overflow-y-auto rounded-2xl bg-customBlue-100 p-4 text-white outline-none duration-200 hover:bg-customBlue-200"
            required
            placeholder="Digite sua mensagem aqui..."
          />
        </div>
        <Button
          text={status}
          color={`${
            status === 'Falhou!!'
              ? 'red'
              : status === 'Enviado!!'
              ? 'green'
              : 'blue'
          }`}
          size="lg"
          icon={<IconBxMailSend />}
        />
      </form>
    </div>
  )
}
