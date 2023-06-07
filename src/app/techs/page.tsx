import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'

export default function Techs() {
  return (
    <section className="">
      <h1>Tecnologias que utilizo</h1>
      <Link href={'/'}>
        <Button text="Voltar" model="return" icon={<IconArrowReturnLeft />} />
      </Link>
    </section>
  )
}
