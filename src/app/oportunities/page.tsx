import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'
import IconWhatsApp from '../components/icons/IconWhatsApp'

export default function Oportunities() {
  const recomendationData = [
    {
      id: '1',
      name: 'Rafael Mahl',
      role: 'Programador PowerBuilder',
      company: 'Zallpy Digital',
      pictureURL: 'https://avatars.githubusercontent.com/mahlignus',
      linkedinURL: 'https://www.linkedin.com/in/rafaelmahl/',
      companyWebsiteURL: 'https://zallpy.com',
      text: 'Booooa, meu consagrado! Esse foguete aí vai pra lua, já falei. Num período de tempo curtíssimo vi tu sair de pequenos joguinhos da memória em JavaScript pra projetos super bem feitos, com o máximo de cuidado e atenção aos detalhes. Tu tá de parabéns por todo o teu empenho e dedicação aos estudos, dá pra ver que tem amor mesmo pelo que faz.',
    },
    {
      id: '2',
      name: 'José Mário Reisswitz',
      role: 'Engenheiro Backend Techlead',
      company: 'Axur',
      pictureURL: 'https://avatars.githubusercontent.com/jmreisswitz',
      linkedinURL:
        'https://www.linkedin.com/in/josé-mário-reisswitz-6a8173135/',
      companyWebsiteURL: 'https://www.axur.com/pt-br/home',
      text: 'O Filipe é um cara mega dedicado e comprometido em adquirir conhecimentos técnicos e práticos. Sua paixão pela tecnologia é evidente em seu envolvimento em diversos projetos e iniciativas, o que demonstra seu desejo de aprender e crescer na área. Tenho certeza de que ele irá se destacar e contribuir significativamente em qualquer projeto que ele participe.',
    },
    {
      id: '3',
      name: 'Leonardo Quevedo',
      role: 'Engenheiro Sênior Frontend',
      company: 'Zé Delivery',
      pictureURL: 'https://avatars.githubusercontent.com/leonardoquevedox',
      linkedinURL: 'https://www.linkedin.com/in/leonardoquevedox/',
      companyWebsiteURL: 'https://www.ze.delivery',
      text: 'Filipe é um profissional extremamente dedicado e competente. Sua sede de conhecimento e determinação o qualificam para resolver problemas dos mais simples aos mais complexos. Acredito que tal busca por conhecimento e seu companheirismo no trabalho em equipe lhe auxiliarão muito na sua carreira. Vejo em Filipe as qualidades de um excelente desenvolvedor pragmático. Código limpo, responsabilidades e parceria para os momentos mais tranquilos e conturbados dos projetos!',
    },
  ]

  return (
    <section className="mx-auto flex w-[90vw] flex-col items-center justify-center">
      <h1 className="my-4 text-center text-4xl font-extrabold text-white">
        Objetivos e Oportunidades
      </h1>
      <div className="mb-4 flex flex-col items-center justify-center gap-4 px-4 text-justify text-white">
        <p>
          Estou empenhado em construir uma carreira sólida na área de tecnologia
          e estou sempre buscando novos desafios e oportunidades de aprendizado.
        </p>
        <p>
          Tenho plena confiança em minhas habilidades técnicas e pessoais, e
          espero poder contribuir de forma significativa para o sucesso de
          qualquer equipe da qual eu faça parte.
        </p>
        <p>
          Meu objetivo é crescer profissionalmente, desenvolvendo soluções
          criativas e inovadoras que possam agregar valor aos projetos e
          clientes.
        </p>
      </div>
      <Button
        text="Me chame no WhatsApp"
        color="blue"
        size="sm"
        icon={<IconWhatsApp />}
        linkhref="https://api.whatsapp.com/send?phone=5551994456865&text=Ol%C3%A1%2C%20adorei%20o%20seu%20portif%C3%B3lio%20online%2C%20vamos%20conversar%3F"
      />
      <div id="recommendations">
        <h1 className="my-4 text-center text-4xl font-extrabold text-white">
          Recomendações
        </h1>
        {recomendationData.map((item) => {
          return (
            <div
              key={item.id}
              className="mb-3 flex flex-col items-center justify-center px-4 text-white md:flex-row"
            >
              <a href={item.linkedinURL} target="_blank" rel="noreferrer">
                <div className="border-gradient-border h-[164px] w-[164px] items-center justify-center rounded-full bg-gradient-background transition-transform duration-300 hover:scale-110 md:mr-4 md:border-none md:bg-transparent">
                  <picture>
                    <img
                      className="rounded-full p-1 md:rounded md:p-0"
                      src={item.pictureURL}
                      alt={item.name}
                    />
                  </picture>
                </div>
              </a>
              <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-start">
                  <h2 className="my-1 flex flex-row text-center text-2xl font-extrabold text-gray-300">
                    {item.name}
                    <span className="hidden md:block">&nbsp;-&nbsp;</span>
                  </h2>
                  <h3 className="text-center text-gray-600">
                    &nbsp;{item.role}
                    <br className="md:hidden" />
                    &nbsp;na empresa&nbsp;&nbsp;
                    <a
                      href={item.companyWebsiteURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="bg-gradient-to-r from-[#3f66e6] to-[#3c16a4] bg-clip-text text-lg underline">
                        {item.company}
                      </span>
                    </a>
                  </h3>
                </div>
                <p className="text-justify">{item.text}</p>
              </div>
            </div>
          )
        })}
      </div>
      <Button
        text="Me chame no WhatsApp"
        color="blue"
        size="sm"
        icon={<IconWhatsApp />}
        linkhref="https://api.whatsapp.com/send?phone=5551994456865&text=Ol%C3%A1%2C%20adorei%20o%20seu%20portif%C3%B3lio%20online%2C%20vamos%20conversar%3F"
      />
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
