import Button from './Button'
import IconBxsMedal from './icons/IconBxsMedal'
import IconDownload from './icons/IconDownload'
import IconGithub from './icons/IconGithub'

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
  )
}
