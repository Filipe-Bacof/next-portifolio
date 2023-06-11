import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'
import IconLinkedin from '../components/icons/IconLinkedin'
import IconGithub from '../components/icons/IconGithub'
import IconInstagram from '../components/icons/IconInstagram'
import IconSpotify from '../components/icons/IconSpotify'
import IconRocketLaunch from '../components/icons/IconRocketLauch'
import IconWhatsApp from '../components/icons/IconWhatsApp'
import ContactForm from '../components/ContactForm'
import IconEmailOutline from '../components/icons/IconEmailOutline'
import IconPhone from '../components/icons/IconPhone'
import IconLocationPoint from '../components/icons/IconLocationPoint'
import IconSchool from '../components/icons/IconSchool'

export default function Contact() {
  const socialNetworks = [
    {
      name: 'linkedin',
      icon: <IconLinkedin />,
      color: 'text-sky-700',
      link: 'https://www.linkedin.com/in/filipe-bacof/',
    },
    {
      name: 'github',
      icon: <IconGithub />,
      color: 'text-zinc-50',
      link: 'https://github.com/Filipe-Bacof',
    },
    {
      name: 'instagram',
      icon: <IconInstagram />,
      color: 'text-rose-700',
      link: 'https://www.instagram.com/filipe.bacof/',
    },
    {
      name: 'spotify',
      icon: <IconSpotify />,
      color: 'text-green-700',
      link: 'https://open.spotify.com/user/8k3a5mqfxtf78erfftdjjp03e',
    },
    {
      name: 'rocketseat',
      icon: <IconRocketLaunch />,
      color: 'text-violet-700',
      link: 'https://app.rocketseat.com.br/me/filipe-bacof',
    },
  ]

  const infoData = [
    {
      name: 'Telefone',
      value: '(51) 99445-6865',
      icon: <IconPhone />,
      color: 'text-rose-600',
    },
    {
      name: 'E-mail',
      value: 'filipebacof@gmail.com',
      icon: <IconEmailOutline />,
      color: 'text-sky-400',
    },
    {
      name: 'Localização',
      value: 'Sapucaia do Sul - RS',
      icon: <IconLocationPoint />,
      color: 'text-purple-800',
    },
    {
      name: 'Formação Acadêmica',
      value: 'Engenharia de Software',
      icon: <IconSchool />,
      color: 'text-blue-600',
    },
  ]

  return (
    <section className="flex flex-col items-center">
      <h1 className="my-4 text-4xl font-extrabold text-white">
        Entre em contato
      </h1>
      <h2 className="text-3xl font-extrabold text-gray-500 md:hidden">
        Minhas Redes Sociais
      </h2>
      <div className="my-4 flex max-w-[90vw] flex-col items-center rounded bg-blue-950 md:flex-row">
        {socialNetworks.map((network) => (
          <Button
            key={network.name}
            text={network.name}
            color="transparent"
            size="sm"
            icon={network.icon}
            iconColor={network.color}
            onlyIcon={false}
            linkhref={network.link}
            rounded="rounded"
          />
        ))}
      </div>
      <h2 className="my-4 text-3xl font-extrabold text-gray-500 md:hidden">
        Dados Pessoais
      </h2>
      <div className="mb-4 flex w-[90vw] max-w-[272px] flex-col gap-3 rounded bg-blue-950 p-2 md:max-w-[90vw] md:flex-row md:justify-around">
        {infoData.map((oneInfo) => (
          <div
            key={oneInfo.value}
            className="flex flex-row flex-wrap gap-3 md:min-w-[170px] md:flex-col md:items-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded bg-customBlue-300 p-2 hover:bg-black/50 md:min-w-[90%]">
              <span className={`text-lg ${oneInfo.color}`}>{oneInfo.icon}</span>
            </div>
            <div className="flex flex-col items-center md:gap-1">
              <h2 className="text-gray-500">{oneInfo.name}:</h2>
              <h3 className="text-white">{oneInfo.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <Button
        text="Me chame no WhatsApp"
        color="blue"
        size="sm"
        icon={<IconWhatsApp />}
        linkhref="https://api.whatsapp.com/send?phone=5551994456865&text=Ol%C3%A1%2C%20adorei%20o%20seu%20portif%C3%B3lio%20online%2C%20vamos%20conversar%3F"
      />
      <ContactForm />
      <Link className="my-4" href={'/'}>
        <Button
          text="Voltar"
          color="red"
          size="lg"
          icon={<IconArrowReturnLeft />}
        />
      </Link>
    </section>
  )
}
