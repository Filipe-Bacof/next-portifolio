'use client'

import { useEffect, useState } from 'react'
import HomeNavigationLinks from './HomeNavigationLinks'

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
    <header className="mb-6 flex flex-col items-center justify-center md:mt-20 md:gap-5">
      <div className="mb-6 flex h-[139.97px] w-[329.65px] flex-col items-center justify-center">
        <span className="mb-1 h-[35.99px] w-[238.87px] text-3xl text-white">
          {firstText}
        </span>
        <h1 className="mb-1 h-[60px] w-[315.78px] bg-gradient-to-r from-[#3f66e6] to-[#3c16a4] bg-clip-text text-6xl font-extrabold text-transparent">
          {secondText}
        </h1>
        <h2 className="h-[35.99px] w-[329.64px] text-3xl text-gray-600">
          {thirdText}
        </h2>
      </div>
      <HomeNavigationLinks />
    </header>
  )
}
