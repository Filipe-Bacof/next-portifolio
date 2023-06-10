'use client'

import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'
import { useState } from 'react'
import IconShuffle from '../components/icons/IconShuffle'
import IconGithub from '../components/icons/IconGithub'
import IconLink from '../components/icons/IconLink'

export default function Projects() {
  const [randomGithubLink, setRandomGithubLink] = useState(
    'https://github.com/Filipe-Bacof/portifolio-filipe',
  )
  const [randomDeployLink, setRandomDeployLink] = useState(
    'https://portifolio-filipe-bacof.vercel.app/',
  )
  const [randomProjectName, setRandomProjectName] = useState(
    'Meu Portifólio Antigo',
  )

  function generateNewLink() {
    const projectLinks = [
      {
        id: 1,
        name: 'NLW Spacetime Rocketseat',
        linkRepo: 'https://github.com/Filipe-Bacof/explorer-spacetime',
        linkDeploy: 'https://explorer-spacetime-black.vercel.app/',
      },
      {
        id: 2,
        name: 'Clone do Chat GPT',
        linkRepo: 'https://github.com/Filipe-Bacof/Chat-GPT-Clone',
        linkDeploy: 'https://bacof-chat-gpt-clone.vercel.app/',
      },
      {
        id: 3,
        name: 'Biblioteca de Filmes TMDB',
        linkRepo: 'https://github.com/Filipe-Bacof/movies_lib',
        linkDeploy: 'https://movies-lib-bacof.vercel.app/',
      },
      {
        id: 4,
        name: 'Clone da Netflix',
        linkRepo: 'https://github.com/Filipe-Bacof/netflix_clone',
        linkDeploy:
          'https://filipe-bacof.github.io/netflix_clone/build/index.html',
      },
      {
        id: 5,
        name: 'NLW E-Sports Rocketseat',
        linkRepo:
          'https://github.com/Filipe-Bacof/NLW_Rocketseat_Explorer_Esports',
        linkDeploy: 'https://filipe-bacof.github.io/Musicas-Bacof/',
      },
      {
        id: 6,
        name: 'Pokédex',
        linkRepo: 'https://github.com/Filipe-Bacof/Pokedex',
        linkDeploy: 'https://filipe-bacof.github.io/Pokedex/',
      },
      {
        id: 7,
        name: 'Porta Premiada Monty Hall',
        linkRepo: 'https://github.com/Filipe-Bacof/porta-premiada',
        linkDeploy: 'https://porta-premiada-curso-cod3r.vercel.app/',
      },
      {
        id: 8,
        name: 'Algoritmo Fogo do Doom',
        linkRepo: 'https://github.com/Filipe-Bacof/Domm-Fire-Deschamps',
        linkDeploy:
          'https://filipe-bacof.github.io/Domm-Fire-Deschamps/projeto%20limpo/index.html',
      },
      {
        id: 9,
        name: 'API Node.JS para Aulas',
        linkRepo: 'https://github.com/Filipe-Bacof/imm-teste-tecnico-backend',
        linkDeploy: 'https://imm-teste-tecnico-backend.up.railway.app/',
      },
    ]

    const randomIndex = Math.floor(Math.random() * projectLinks.length)
    setRandomProjectName(projectLinks[randomIndex].name)
    setRandomDeployLink(projectLinks[randomIndex].linkDeploy)
    setRandomGithubLink(projectLinks[randomIndex].linkRepo)
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white">Meus Projetos</h1>
      <div className="flex w-80 flex-col items-center bg-blue-950 p-4">
        <h3 className="text-2xl text-white">
          Clique para ver aleatóriamente um dos projetos que eu desenvolvi
        </h3>
        <div onClick={generateNewLink}>
          <Button
            text="Random"
            color="green"
            size="sm"
            icon={<IconShuffle />}
          />
        </div>
        <Button
          text={randomProjectName}
          color="blue"
          size="sm"
          icon={<IconLink />}
          linkhref={randomDeployLink}
        />
        <Button
          text="Ver no Github"
          color="blue"
          size="sm"
          icon={<IconGithub />}
          linkhref={randomGithubLink}
        />
      </div>

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
