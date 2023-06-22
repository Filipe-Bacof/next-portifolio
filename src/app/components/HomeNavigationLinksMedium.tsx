import Link from 'next/link'

export default function HomeNavigationLinksMedium() {
  return (
    <nav className="hidden items-center justify-center text-lg font-bold text-blue-900 md:flex md:flex-row md:gap-4 lg:gap-8">
      <Link
        className="rounded-3xl hover:bg-[rgba(0,0,0,0.4)] hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.74)]"
        href={'/about'}
      >
        <span className="hover:underline">Sobre Mim</span>
      </Link>
      <Link
        className="rounded-3xl hover:bg-[rgba(0,0,0,0.4)] hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.74)]"
        href={'/contact'}
      >
        <span className="hover:underline">Contato</span>
      </Link>
      <Link
        className="rounded-3xl hover:bg-[rgba(0,0,0,0.4)] hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.74)]"
        href={'/projects'}
      >
        <span className="hover:underline">Projetos</span>
      </Link>
      <Link
        className="rounded-3xl hover:bg-[rgba(0,0,0,0.4)] hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.74)]"
        href={'/techs'}
      >
        <span className="hover:underline">Tecnologias</span>
      </Link>
      <Link
        className="rounded-3xl hover:bg-[rgba(0,0,0,0.4)] hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.74)]"
        href={'/oportunities'}
      >
        <span className="hover:underline">Oportunidades</span>
      </Link>
    </nav>
  )
}
