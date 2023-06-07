import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'

export default function About() {
  return (
    <section className="">
      <h1>Um pouco sobre mim</h1>
      <Link href={'/'}>
        <Button text="Voltar" model="return" icon={<IconArrowReturnLeft />} />
      </Link>
    </section>
  )
}
