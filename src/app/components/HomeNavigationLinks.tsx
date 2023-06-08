import Link from 'next/link'
import Button from './Button'
import IconArrowRightShort from './icons/IconArrowRightShort'

export default function HomeNavigationLinks() {
  return (
    <nav className="flex flex-col">
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
    </nav>
  )
}
