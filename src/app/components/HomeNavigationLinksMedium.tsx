import Link from 'next/link'

export default function HomeNavigationLinksMedium() {
  return (
    <nav className="hidden items-center justify-center text-lg font-bold text-blue-900 md:flex md:flex-row md:gap-4 lg:gap-8">
      <Link href={'/about'}>
        <span>Sobre Mim</span>
      </Link>
      <Link href={'/contact'}>
        <span>Contato</span>
      </Link>
      <Link href={'/projects'}>
        <span>Projetos</span>
      </Link>
      <Link href={'/techs'}>
        <span>Tecnologias</span>
      </Link>
      <Link href={'/oportunities'}>
        <span>Oportunidades</span>
      </Link>
    </nav>
  )
}
