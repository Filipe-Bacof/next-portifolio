'use client'

import { FormEvent, useState } from 'react'
import Button from './Button'
import IconBxMailSend from './icons/IconBxMailSend'

export default function ContactForm() {
  const [status, setStatus] = useState('Enviar')
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Enviando...')

    const { name, email, message }: any = e.currentTarget
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(details),
      })

      console.log(response)
      setStatus('Enviado!!')
    } catch (error) {
      console.error(error)
      setStatus('Falhou!!')
    }
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center rounded-3xl bg-blue-950 pb-4">
      <h2 className="px-8 py-4 text-lg font-extrabold text-white">
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
            className="flex w-64 flex-row items-center justify-center rounded-2xl bg-customBlue-100 p-4 text-white duration-200 hover:bg-customBlue-200"
            type="text"
            id="name"
            required
            placeholder="Seu nome.."
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="email" id="labeltext" className="text-white">
            Email:
          </label>
          <input
            className="flex w-64 flex-row items-center justify-center rounded-2xl bg-customBlue-100 p-4 text-white duration-200 hover:bg-customBlue-200"
            type="email"
            id="email"
            required
            placeholder="Seu Email.."
          />
        </div>
        <div className="mb-2 flex flex-col p-2">
          <label htmlFor="message" id="labeltext" className="text-white">
            Mensagem:
          </label>
          <textarea
            id="message"
            className="flex h-[130px] w-64 flex-row items-center justify-center rounded-2xl bg-customBlue-100 p-4 text-white duration-200 hover:bg-customBlue-200"
            required
            placeholder="Digite sua mensagem aqui.."
          />
        </div>
        <Button
          text={status}
          model={`${
            status === 'Falhou!!'
              ? 'return'
              : status === 'Enviado!!'
              ? 'success'
              : 'navigate'
          }`}
          icon={<IconBxMailSend />}
        />
      </form>
    </div>
  )
}
