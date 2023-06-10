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
      <div className="my-4 flex w-[374.74px] flex-col gap-3 rounded bg-blue-950 p-2">
        <div className="flex flex-row gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-customBlue-300 p-2 hover:bg-black/50">
            <span className="text-lg text-rose-600">
              <IconPhone />
            </span>
          </div>
          <div>
            <h2 className="text-gray-500">Telefone:</h2>
            <h3 className="text-white">&#40;51&#41; 99445-6865</h3>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-customBlue-300 p-2 hover:bg-black/50">
            <span className="text-lg text-sky-400">
              <IconEmailOutline />
            </span>
          </div>
          <div>
            <h2 className="text-gray-500">E-mail:</h2>
            <h3 className="text-white">filipebacof@gmail.com</h3>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-customBlue-300 p-2 hover:bg-black/50">
            <span className="text-lg text-purple-800">
              <IconLocationPoint />
            </span>
          </div>
          <div>
            <h2 className="text-gray-500">Localização:</h2>
            <h3 className="text-white">Sapucaia do Sul - RS</h3>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-customBlue-300 p-2 hover:bg-black/50">
            <span className="text-lg text-blue-600">
              <IconLocationPoint />
            </span>
          </div>
          <div>
            <h2 className="text-gray-500">Formação Acadêmica:</h2>
            <h3 className="text-white">Engenharia de Software - Unicesumar</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded bg-customBlue-300 p-2 hover:bg-black/50">
          <span className="text-lg text-green-500">
            <IconWhatsApp />
          </span>
        </div>
        <div>
          <h2 className="text-gray-500">Telefone:</h2>
          <h3 className="text-white">&#40;51&#41; 99445-6865</h3>
        </div>
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
