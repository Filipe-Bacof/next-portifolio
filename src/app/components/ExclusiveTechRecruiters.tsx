import Link from 'next/link'
import Button from './Button'
import IconBxsMedal from './icons/IconBxsMedal'
import IconDownload from './icons/IconDownload'
import IconLinkedin from './icons/IconLinkedin'
import IconWhatsApp from './icons/IconWhatsApp'

export default function ExclusiveTechRecruiters() {
  return (
    <section className="border-gradient-border rounded-xl bg-gradient-background p-1">
      <div className="flex flex-col items-center justify-center rounded-xl bg-customBlue-400 p-4 text-white">
        <h2 className="cursor-default text-lg font-extrabold text-white">
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
        <Link href={'/certificates'}>
          <Button
            text="Ver os meus certificados"
            color="blue"
            size="sm"
            icon={<IconBxsMedal />}
          />
        </Link>
        <Button
          text="Ver meu LinkedIn"
          color="blue"
          size="sm"
          icon={<IconLinkedin />}
          linkhref="https://www.linkedin.com/in/filipe-bacof/"
        />
        <Button
          text="Me chame no WhatsApp"
          color="blue"
          size="sm"
          icon={<IconWhatsApp />}
          linkhref="https://api.whatsapp.com/send?phone=5551994456865&text=Ol%C3%A1%2C%20adorei%20o%20seu%20portif%C3%B3lio%20online%2C%20vamos%20conversar%3F"
        />
      </div>
    </section>
  )
}
