import Link from 'next/link'
import Button from './Button'
import IconArrowRightShort from './icons/IconArrowRightShort'

export default function HomeNavigationLinks() {
  return (
    <nav className="flex flex-col">
      <Link href={'/about'}>
        <Button
          text="Sobre Mim"
          color="blue"
          size="lg"
          icon={<IconArrowRightShort />}
        />
      </Link>
      <Link href={'/contact'}>
        <Button
          text="Contato"
          color="blue"
          size="lg"
          icon={<IconArrowRightShort />}
        />
      </Link>
      <Link href={'/projects'}>
        <Button
          text="Projetos"
          color="blue"
          size="lg"
          icon={<IconArrowRightShort />}
        />
      </Link>
      <Link href={'/techs'}>
        <Button
          text="Tecnologias"
          color="blue"
          size="lg"
          icon={<IconArrowRightShort />}
        />
      </Link>
      <Link href={'/oportunities'}>
        <Button
          text="Opotunidades"
          color="blue"
          size="lg"
          icon={<IconArrowRightShort />}
        />
      </Link>
    </nav>
  )
}
