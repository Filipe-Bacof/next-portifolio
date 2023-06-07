import Link from 'next/link'
import Button from './components/Button'
import IconArrowRightShort from './components/icons/IconArrowRightShort'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="my-8 bg-gradient-to-r from-[#3f66e6] to-[#3c16a4] bg-clip-text text-6xl font-extrabold text-transparent">
        Filipe Bacof
      </h1>
      <a
        className="mb-8 h-[164px] w-[164px] no-underline"
        href="https://portifolio-filipe-bacof.vercel.app/"
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
      <div className="flex flex-col">
        <Link href={'/about'}>
          <Button
            text="Sobre Mim"
            model="navigate"
            icon={<IconArrowRightShort />}
          />
        </Link>
        <Link href={'/contact'}>
          <Button
            text="Contato"
            model="navigate"
            icon={<IconArrowRightShort />}
          />
        </Link>
        <Link href={'/projects'}>
          <Button
            text="Projetos"
            model="navigate"
            icon={<IconArrowRightShort />}
          />
        </Link>
        <Link href={'/techs'}>
          <Button
            text="Tecnologias"
            model="navigate"
            icon={<IconArrowRightShort />}
          />
        </Link>
        <Link href={'/oportunities'}>
          <Button
            text="Opotunidades"
            model="navigate"
            icon={<IconArrowRightShort />}
          />
        </Link>
      </div>
    </main>
  )
}
