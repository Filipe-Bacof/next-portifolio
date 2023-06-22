import { ReactNode } from 'react'
import './globals.css'
import { Barlow } from 'next/font/google'
import Image from 'next/image'
import Icon from './icon.png'
import HomeNavigationLinksMedium from './components/HomeNavigationLinksMedium'
// import HomeNavigationLinksMobile from './components/HomeNavigationLinksMobile'
import Link from 'next/link'
import IconMenu from './components/icons/IconMenu'

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
        <header className="fixed z-50 flex h-16 w-full flex-row items-center justify-around bg-customBlue-400 md:justify-center md:gap-4 lg:gap-8">
          <Link href={'/'}>
            <Image
              className="cursor-pointer rounded-full"
              src={Icon}
              alt="Icon Red Potion"
              priority={false}
              width={50}
              height={50}
            />
          </Link>
          <HomeNavigationLinksMedium />
          {/* <HomeNavigationLinksMobile /> */}
          <IconMenu className="cursor-pointer text-2xl text-blue-900 md:hidden" />
          <picture>
            <img
              src="./flags-icons/portuguese.svg"
              className="h-[50px] w-[50px]"
              alt="Idioma Portugues"
            />
          </picture>
        </header>
        <div className="fixed z-50 mt-16 h-[2px] w-full bg-gradient-background"></div>
        <main className="pt-[66px]">{children}</main>
      </body>
    </html>
  )
}
