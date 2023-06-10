import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'
import IconLinkedin from '../components/icons/IconLinkedin'
import IconGithub from '../components/icons/IconGithub'
import IconInstagram from '../components/icons/IconInstagram'
import IconSpotify from '../components/icons/IconSpotify'
import IconRocketLaunch from '../components/icons/IconRocketLauch'

export default function Contact() {
  const socialNetworks = [
    {
      name: 'linkedin',
      icon: <IconLinkedin />,
      link: 'https://www.linkedin.com/in/filipe-bacof/',
    },
    {
      name: 'github',
      icon: <IconGithub />,
      link: 'https://github.com/Filipe-Bacof',
    },
    {
      name: 'instagram',
      icon: <IconInstagram />,
      link: 'https://www.instagram.com/filipe.bacof/',
    },
    {
      name: 'spotify',
      icon: <IconSpotify />,
      link: 'https://open.spotify.com/user/8k3a5mqfxtf78erfftdjjp03e',
    },
    {
      name: 'rocketseat',
      icon: <IconRocketLaunch />,
      link: 'https://app.rocketseat.com.br/me/filipe-bacof',
    },
  ]

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white">
        Entre em contato comigo
      </h1>
      {socialNetworks.map((network) => (
        <Button
          key={network.name}
          text={network.name}
          color="blue"
          size="sm"
          icon={network.icon}
          linkhref={network.link}
        />
      ))}
      <Link href={'/'}>
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
