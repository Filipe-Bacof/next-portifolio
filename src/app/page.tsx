import Button from './components/Button'
import Header from './components/Header'
import HeaderPhoto from './components/HeaderPhoto'
import IconBxsMedal from './components/icons/IconBxsMedal'
import IconDownload from './components/icons/IconDownload'
import IconGithub from './components/icons/IconGithub'

export default function Home() {
  return (
    <main className="mb-16 flex flex-col items-center justify-center md:mb-0 md:flex-row">
      <div className="flex flex-col items-center justify-center md:mt-16">
        <HeaderPhoto />
        <div className="hidden items-center justify-center rounded-3xl bg-blue-950 pb-4 text-white md:flex md:flex-col">
          <h2 className="px-8 py-4 text-lg font-extrabold text-white">
            Exclusivo para Tech Recruiters
          </h2>
          <Button
            text="Baixar Currículo (PT)"
            model="link"
            icon={<IconDownload />}
          />
          <Button
            text="Baixar Currículo (EN)"
            model="link"
            icon={<IconDownload />}
          />
          <Button
            text="Ver meus certificados"
            model="link"
            icon={<IconBxsMedal />}
          />
          <Button
            text="Ver Repositório deste Portifólio"
            model="link"
            icon={<IconGithub />}
          />
        </div>
      </div>
      <Header />
    </main>
  )
}
