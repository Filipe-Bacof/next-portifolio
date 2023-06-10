import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'
import IconWhatsApp from '../components/icons/IconWhatsApp'

export default function Oportunities() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white">
        Objetivos e Oportunidades
      </h1>
      <div className="flex w-[400px] flex-col gap-4 text-justify text-white">
        <p>
          Isso é o que está no portifólio antigo, irei reescrever e reformular
          esta seção inteira!!!!
        </p>
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
