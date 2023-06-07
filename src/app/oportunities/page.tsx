import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'

export default function Oportunities() {
  return (
    <section className="">
      <h1>Objetivos e Oportunidades</h1>
      <Link href={'/'}>
        <Button text="Voltar" model="return" icon={<IconArrowReturnLeft />} />
      </Link>
    </section>
  )
}
