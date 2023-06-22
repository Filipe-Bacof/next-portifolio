'use client'

import { useEffect, useState } from 'react'

export default function Typewriter() {
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
    <section className="flex flex-col items-center justify-center">
      <div className="flex h-[139.97px] w-[329.65px] flex-col items-center justify-center gap-1">
        <span className="h-[35.99px] w-[238.87px] cursor-default text-3xl text-white">
          {firstText}
        </span>
        <h1 className="h-[60px] w-[315.78px] cursor-default bg-gradient-to-r from-[#3f66e6] to-[#3c16a4] bg-clip-text text-6xl font-extrabold text-transparent">
          {secondText}
        </h1>
        <h2 className="h-[35.99px] w-[329.64px] cursor-default text-3xl text-gray-600">
          {thirdText}
        </h2>
      </div>
    </section>
  )
}
