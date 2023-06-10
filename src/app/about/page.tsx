import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'

export default function About() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="my-4 text-center text-4xl font-extrabold text-white">
        Um pouco sobre mim
      </h1>
      <div className="flex w-[400px] flex-col gap-4 text-justify text-white">
        <p>
          Isso é o que está no portifólio antigo, irei reescrever e reformular
          esta seção inteira!!!!
        </p>
        <p>
          Sou um profissional apaixonado por tecnologia e sempre busco me manter
          atualizado com as últimas tendências e ferramentas do mercado. Além
          disso, tenho facilidade para aprender e internalizar novos assuntos, o
          que me permite enfrentar desafios complexos com mais confiança e
          eficiência.
        </p>
        <p>
          Além de habilidades técnicas, acredito que todo programador deve ter
          uma boa dose de inteligência emocional, sendo capaz de lidar com
          pressão, estresse e conflitos de forma construtiva e empática. Isso é
          especialmente importante em equipes grandes, onde a colaboração e a
          comunicação são fundamentais para o sucesso do projeto.
        </p>
        <p>
          Outra característica importante para um programador é a capacidade de
          se adaptar a mudanças rapidamente. A tecnologia avança a passos largos
          e é comum que novas ferramentas, linguagens e metodologias surjam com
          frequência. Portanto, é essencial ter flexibilidade e curiosidade para
          experimentar novas abordagens e se reinventar constantemente.
        </p>
        <p>
          Programação não é apenas uma habilidade técnica, mas também requer uma
          boa dose de resiliência e perseverança. Por vezes, o processo pode ser
          frustrante, mas é preciso ter motivação e persistência para superar
          obstáculos e encontrar soluções viáveis.
        </p>
        <p>
          Por fim, um programador de sucesso deve ter um senso de ética e
          responsabilidade, sabendo que seus códigos e soluções podem impactar
          significativamente a vida das pessoas. É importante sempre buscar a
          excelência e qualidade em seu trabalho, mantendo os valores éticos e
          morais em alta estima.
        </p>
      </div>
      <Link className="my-4" href={'/'}>
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
