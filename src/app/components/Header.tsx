'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {
  const [firstText, setFirstText] = useState('')
  const [secondText, setSecondText] = useState('')
  const [thirdText, setThirdText] = useState('')

  useEffect(() => {
    const header1 = 'Bem vindo! Eu sou'.split('')
    const header2 = 'Filipe Bacof'.split('')
    const header3 = 'Desenvolvedor Full-Stack'.split('')

    header1.forEach((letter, index) => {
      setTimeout(() => {
        setFirstText((prevText) => prevText + letter)
      }, 75 * index)
    })

    setTimeout(() => {
      header2.forEach((letter, index) => {
        setTimeout(() => {
          setSecondText((prevText) => prevText + letter)
        }, 75 * index)
      })
    }, 1500)

    setTimeout(() => {
      header3.forEach((letter, index) => {
        setTimeout(() => {
          setThirdText((prevText) => prevText + letter)
        }, 75 * index)
      })
    }, 2500)
  }, [])

  return (
    <header className="flex flex-col items-center justify-center">
      <a
        className="m-8 h-[164px] w-[164px] no-underline"
        href="https://github.com/Filipe-Bacof"
        target="_blank"
        rel="noreferrer"
      >
        <div className="border-gradient-border h-[164px] w-[164px] items-center justify-center rounded-full bg-gradient-background transition-transform duration-300 hover:scale-110">
          <Image
            className="rounded-full pl-1 pt-1"
            src="/profilepic.jpg"
            alt="minha foto de perfil"
            priority={false}
            width={160}
            height={160}
          />
        </div>
      </a>
      <div className="mb-6 flex flex-col items-center justify-center">
        <span className="mb-1 text-3xl text-white">{firstText}</span>
        <h1 className="mb-1 bg-gradient-to-r from-[#3f66e6] to-[#3c16a4] bg-clip-text text-6xl font-extrabold text-transparent">
          {secondText}
        </h1>
        <h2 className="text-3xl text-gray-600">{thirdText}</h2>
      </div>
    </header>
  )
}
