import Link from 'next/link'
import Button from './Button'
import IconArrowRightShort from './icons/IconArrowRightShort'

export default function HomeNavigationLinksMobile() {
  return (
    <nav className="flex flex-col items-center justify-center text-lg font-bold text-blue-900 md:hidden">
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
    // <select className="items-center justify-center text-lg font-bold text-blue-900 md:hidden">
    //   <option>
    //     <Link href={'/about'}>
    //       <span>Sobre Mim</span>
    //     </Link>
    //   </option>
    //   <option>
    //     <Link href={'/contact'}>
    //       <span>Contato</span>
    //     </Link>
    //   </option>
    //   <option>
    //     <Link href={'/projects'}>
    //       <span>Projetos</span>
    //     </Link>
    //   </option>
    //   <option>
    //     <Link href={'/techs'}>
    //       <span>Tecnologias</span>
    //     </Link>
    //   </option>
    //   <option>
    //     <Link href={'/oportunities'}>
    //       <span>Oportunidades</span>
    //     </Link>
    //   </option>
    // </select>
  )
}
