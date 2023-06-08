import Button from './Button'
import IconBxsMedal from './icons/IconBxsMedal'
import IconDownload from './icons/IconDownload'
import IconGithub from './icons/IconGithub'
import IconWhatsApp from './icons/IconWhatsApp'

type ExclusiveTechRecruitersProps = {
  onlyForBigScreens: boolean
}

export default function ExclusiveTechRecruiters({
  onlyForBigScreens,
}: ExclusiveTechRecruitersProps) {
  return (
    <div
      className={`items-center justify-center rounded-3xl bg-blue-950 pb-4 text-white ${
        onlyForBigScreens
          ? 'hidden md:flex md:flex-col'
          : 'flex flex-col md:hidden'
      }`}
    >
      <h2 className="cursor-default px-8 py-4 text-lg font-extrabold text-white">
        Exclusivo para Tech Recruiters
      </h2>
      <Button
        text="Baixar Currículo (Português)"
        color="blue"
        size="sm"
        icon={<IconDownload />}
        linkhref="https://github.com/Filipe-Bacof/portifolio-filipe/raw/master/public/curriculo-filipe-bacof.pdf"
      />
      <Button
        text="Baixar Currículo (Inglês)"
        color="blue"
        size="sm"
        icon={<IconDownload />}
        linkhref="https://github.com/Filipe-Bacof/portifolio-filipe/raw/master/public/resume-filipe-bacof.pdf"
      />
      <Button
        text="Ver os meus certificados"
        color="blue"
        size="sm"
        icon={<IconBxsMedal />}
        linkhref="https://filipe-bacof.github.io/Meus-Certificados/"
        // LINK TEMPORÁRIO, CRIAR UMA PÁGINA AQUI NO NEXT MAIS PROFISSIONAL
      />
      <Button
        text="Ver Repositório deste Portifólio"
        color="blue"
        size="sm"
        icon={<IconGithub />}
        linkhref="https://github.com/Filipe-Bacof/next-portifolio"
      />
      <Button
        text="Me chame no WhatsApp"
        color="blue"
        size="sm"
        icon={<IconWhatsApp />}
        linkhref="https://wa.me/5551994456865?text=Ol%C3%A1%2C+adorei+o+seu+portif%C3%B3lio+online%2C+vamos+conversar%3F"
      />
    </div>
  )
}
