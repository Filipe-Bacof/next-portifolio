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

  return (
    <section className="flex flex-col items-center">
      <h1 className="my-4 text-4xl font-extrabold text-white">
        Entre em contato comigo
      </h1>
      <div className="flex flex-row rounded bg-blue-950">
        {socialNetworks.map((network) => (
          <Button
            key={network.name}
            text={network.name}
            color="transparent"
            size="lg"
            icon={network.icon}
            iconColor={network.color}
            onlyIcon={true}
            linkhref={network.link}
            rounded="rounded"
          />
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
