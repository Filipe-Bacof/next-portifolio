'use client'

import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from 'react'

register()

export default function Certificates() {
  const [slidePerView, setSlidePerView] = useState(2)
  const data = [
    {
      id: 116,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/udemy-cod3r-nextjs.jpg?raw=true',
      alt: 'NextJS - Aprenda com Projetos - Cod3r',
    },
    {
      id: 113,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/udemy-horadecodar-react-do-zero-a-maestria.jpg?raw=true',
      alt: 'React.JS do zero a maestria Hora de Codar',
    },
    {
      id: 112,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/udemy-horadecodar-node-mongo.jpg?raw=true',
      alt: 'Node.JS primeira API Restful Hora de Codar',
    },
    {
      id: 109,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/rocketseat-discover-conectar.png?raw=true',
      alt: 'RocketSeat Discover Conectar 1',
    },
    {
      id: 110,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/rocketseat-discover-fundamentar.png?raw=true',
      alt: 'RocketSeat Discover Fundamentar 2',
    },
    {
      id: 111,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/rocketseat-discover-especializar.png?raw=true',
      alt: 'RocketSeat Discover Especializar 3',
    },
    {
      id: 103,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/kenzie-amazonia.jpg?raw=true',
      alt: 'Kenzie Amazônia',
    },
    {
      id: 104,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/kenzie-codigo-da-virada.jpg?raw=true',
      alt: 'Kenzie Código da Virada',
    },
    {
      id: 105,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/kenzie-dev-festival.png?raw=true',
      alt: 'Kenzie Dev Festival',
    },
    {
      id: 106,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/kenzie-maratona-da-programacao.jpg?raw=true',
      alt: 'Kenzie Maratona da Programação',
    },
    {
      id: 107,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/kenzie-maratona-nas-estrelas.png?raw=true',
      alt: 'Kenzie Maratona nas Estrelas',
    },
    {
      id: 108,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/kenzie-programar-para-evoluir.jpg?raw=true',
      alt: 'Kenzie Programar para Evoluir',
    },
    {
      id: 114,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/solides-empregabilidade.png?raw=true',
      alt: 'Solides Empregabilidade',
    },
    {
      id: 101,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/b7web-javascript.jpg?raw=true',
      alt: 'JavaScript B7web',
    },
    {
      id: 102,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/excelclub-maratona-do-excel.png?raw=true',
      alt: 'Maratona do Excel',
    },
    {
      id: 115,
      image:
        'https://github.com/Filipe-Bacof/Meus-Certificados/blob/main/images/ozielzinho-arpejos.jpg?raw=true',
      alt: 'Ozielzinho Arpejos',
    },
  ]

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 860) {
        setSlidePerView(2)
      } else {
        setSlidePerView(1)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="mx-auto my-0 w-full max-w-[1440px]">
      <h1 className="mx-0 my-6 text-center text-4xl font-extrabold text-white">
        Meus Certificados
      </h1>

      <Swiper
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <picture>
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full object-cover px-2`}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>

      <Link href={'/'} className="">
        <Button
          text="Voltar"
          color="red"
          size="sm"
          icon={<IconArrowReturnLeft />}
        />
      </Link>
    </section>
  )
}
