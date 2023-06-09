import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'

export default function About() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white">Um pouco sobre mim</h1>
      <Link href={'/'}>
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
