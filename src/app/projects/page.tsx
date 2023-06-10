'use client'

import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'
import React, { useEffect, useState } from 'react'
import IconShuffle from '../components/icons/IconShuffle'
import IconGithub from '../components/icons/IconGithub'
import IconLink from '../components/icons/IconLink'

export default function Projects() {
  const [randomGithubLink, setRandomGithubLink] = useState('')
  const [randomDeployLink, setRandomDeployLink] = useState('')
  const [randomProjectName, setRandomProjectName] = useState('Carregando...')
  const [randomProjectDescription, setRandomProjectDescription] = useState(
    'Gerando Link de um Projeto, aguarde...',
  )

  function generateNewLink() {
    const projectLinks = [
      {
        id: 1,
        name: 'NLW Spacetime Rocketseat',
        linkRepo: 'https://github.com/Filipe-Bacof/explorer-spacetime',
        linkDeploy: 'https://explorer-spacetime-black.vercel.app/',
        projectDesc:
          'Realizado entre os dias 15 e 19 de maio de 2023; Durante este evento pude aprimorar minhas habilidades de desenvolvimento full-stack e brincar um pouco com desenvolvimento mobile; Tecnologias utilizadas na trilha Ignite: NodeJS, Fastify, Prisma, Typescript, Zod, Autenticação JWT, GitHub O-Auth, NextJS, ReactJS, TailwindCSS, React Native e Expo. Para a trilha explorer fiz uma abordagem diferente, como eu queria ter o projeto no ar com minhas memórias, repliquei o projetinho simples utilizando NextJS e Tailwind.',
      },
      {
        id: 2,
        name: 'Clone do Chat GPT',
        linkRepo: 'https://github.com/Filipe-Bacof/Chat-GPT-Clone',
        linkDeploy: 'https://bacof-chat-gpt-clone.vercel.app/',
        projectDesc:
          'Projeto efetuado utilizando o framework Next.JS e a API da OpenAI, que é a mesma utilizada pelo Chat GPT oficial; Clonar esta interface e integrar ela com a API foi uma experiência muito empolgante, descobri diversos recursos interessantes sobre a OpenAI para aplicar em projetos futuros; Neste projeto, como foi feito utilizando Next.JS, é recomendado utilizar o Tailwind CSS, as vezes fico verdadeiramente impressionado com a capacidade dessa ferramenta em aumentar fortemente a nossa produtividade.',
      },
      {
        id: 3,
        name: 'Biblioteca de Filmes TMDB',
        linkRepo: 'https://github.com/Filipe-Bacof/movies_lib',
        linkDeploy: 'https://movies-lib-bacof.vercel.app/',
        projectDesc:
          'Aqui você consegue encontrar e pesquisar por filmes, e ver detalhes como orçamento, produtor, duração; Este projeto foi feito com React no curso do Hora de Codar, do professor Matheus Battisti; Foi utilizada a API disponibilizada pelo The Movie DataBase (TMDB).',
      },
      {
        id: 4,
        name: 'Clone da Netflix',
        linkRepo: 'https://github.com/Filipe-Bacof/netflix_clone',
        linkDeploy:
          'https://filipe-bacof.github.io/netflix_clone/build/index.html',
        projectDesc:
          'Executei este site enquanto estudava front-end utilizando React; Clonei apenas a interface da Netflix utilizando a API do The Movie DataBase (TMDB) Cada vez que atualizar a tela um novo filme será gerado na home, como este projeto é um pouco antigo, as vezes geram filmes sem sentido para estar "em alta", como achei isso engraçado mantive no projeto; O deploy foi feito no próprio GitHub Pages.',
      },
      {
        id: 5,
        name: 'NLW E-Sports Rocketseat',
        linkRepo:
          'https://github.com/Filipe-Bacof/NLW_Rocketseat_Explorer_Esports',
        linkDeploy: 'https://filipe-bacof.github.io/Musicas-Bacof/',
        projectDesc:
          'Evento que ocorreu em Setembro de 2022, onde efetuei a trilha Explorer com este projeto de HTML, CSS e JavaScript; O objetivo era efetuei algo semelhante a um link-tree para gamers, gostei bastante do resultado com todas as animações; O desafio após o evento ficou de "clonar" o site utilizando outra temática, portanto fiz um link-tree para músicos.',
      },
      {
        id: 6,
        name: 'NLW Copa Rocketseat',
        linkRepo: 'https://github.com/Filipe-Bacof/Calendario-Jogos-Copa',
        linkDeploy: 'https://filipe-bacof.github.io/Calendario-Jogos-Copa/',
        projectDesc:
          'Evento que aconteceu em Outubro de 2022 promovido pela Rocketseat; Durante esse evento, tive a oportunidade de desenvolver várias ideias que aumentaram a complexidade do projeto. Como não havia uma API disponível com os resultados dos jogos, fiz todas as atualizações manualmente, o que tornou a experiência ainda mais desafiadora; Acompanhar esse evento gigante e desenvolver minhas habilidades foi uma experiência divertida, isso me motiva a retomar esse projeto durante a próxima copa, mas desta vez utilizando linguagens mais modernas e transformando-o em uma aplicação mobile em vez de apenas um site. Isso me permitirá explorar recursos avançados e fornecer uma experiência ainda melhor aos usuários.',
      },
      {
        id: 7,
        name: 'Pokédex',
        linkRepo: 'https://github.com/Filipe-Bacof/Pokedex',
        linkDeploy: 'https://filipe-bacof.github.io/Pokedex/',
        projectDesc:
          'Projeto utilizando HTML, CSS e JavaScript utilizando a PokéAPI. A PokéAPI oferece acesso a uma ampla gama de dados, incluindo informações detalhadas sobre cada Pokémon, como nome, habilidades, tipos, estatísticas, evoluções, sprites e muito mais. Ela também fornece informações sobre movimentos, itens, jogos e localizações encontradas nos jogos Pokémon.',
      },
      {
        id: 8,
        name: 'Porta Premiada Monty Hall',
        linkRepo: 'https://github.com/Filipe-Bacof/porta-premiada',
        linkDeploy: 'https://porta-premiada-curso-cod3r.vercel.app/',
        projectDesc:
          'Desenvolvi este projeto utilizando Next.js e Tailwind CSS, com o objetivo de proporcionar uma explicação sobre o enigma estatístico e paradoxal de Monty Hall.',
      },
      {
        id: 9,
        name: 'Algoritmo Fogo do Doom',
        linkRepo: 'https://github.com/Filipe-Bacof/Domm-Fire-Deschamps',
        linkDeploy:
          'https://filipe-bacof.github.io/Domm-Fire-Deschamps/projeto%20limpo/index.html',
        projectDesc:
          'Fazer esse projeto junto com o Filipe Deschamps é o que pode fazer você se apaixonar por programação, tive diversas idéias que estão registradas para treinar melhor minhas habilidades de desenvolvimento front-end.',
      },
      {
        id: 10,
        name: 'API Node.JS para Aulas',
        linkRepo: 'https://github.com/Filipe-Bacof/imm-teste-tecnico-backend',
        linkDeploy: 'https://imm-teste-tecnico-backend.up.railway.app/',
        projectDesc:
          'Projeto feito como teste técnico no processo de seleção para a empresa IMM Digital. Em apenas 3 dias, desenvolvi uma solução utilizando tecnologias como Node.js, Express, JavaScript, MongoDB, Mongoose e JsonWebToken (JWT). A implementação da autenticação JWT garantiu a segurança dos dados sensíveis, enquanto o Railway foi utilizado para hospedar a API. Apesar do prazo curto, enfrentei o desafio com determinação e entreguei um projeto funcional e bem estruturado.',
      },
      {
        id: 11,
        name: 'Meu Portifólio Antigo',
        linkRepo: 'https://github.com/Filipe-Bacof/portifolio-filipe',
        linkDeploy: 'https://portifolio-filipe-bacof.vercel.app/',
        projectDesc:
          'Portfólio de Programador. Saiba mais sobre mim, tecnologias que utilizo, projetos desenvolvidos e formas de entrar em contato.',
      },
    ]

    const randomIndex = Math.floor(Math.random() * projectLinks.length)
    setRandomProjectName(projectLinks[randomIndex].name)
    setRandomDeployLink(projectLinks[randomIndex].linkDeploy)
    setRandomGithubLink(projectLinks[randomIndex].linkRepo)
    setRandomProjectDescription(projectLinks[randomIndex].projectDesc)
  }

  useEffect(() => {
    generateNewLink()
  }, [])

  return (
    <section className="flex flex-col items-center">
      <h1 className="my-4 text-4xl font-extrabold text-white">Meus Projetos</h1>
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
        <p className="text-justify text-2xl text-gray-400">
          {randomProjectDescription}
        </p>
      </div>

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
