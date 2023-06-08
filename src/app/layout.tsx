import { ReactNode } from 'react'
import './globals.css'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  weight: ['200', '400', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Filipe Bacof - Portifólio de Desenvolvedor',
  description:
    'Portfólio do Desenvolvedor Filipe Bacof. Saiba mais sobre mim, tecnologias que utilizo, projetos desenvolvidos e formas de entrar em contato.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${barlow.className} bg-customBlue-300 md:h-full`}>
        {children}
      </body>
    </html>
  )
}
