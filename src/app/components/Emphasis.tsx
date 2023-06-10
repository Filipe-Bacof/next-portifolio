import Button from './Button'
import { IconTailwind } from './icons/IconsTechs'

export default function Emphasis() {
  return (
    <div className="mt-6 hidden h-[508px] w-[600px] items-center rounded-3xl bg-blue-950 p-4 md:flex-col lg:flex">
      <Button
        text="Documentação Tailwind CSS"
        color="green"
        size="sm"
        icon={<IconTailwind />}
        linkhref="https://tailwindcss.com/docs/animation"
      />
    </div>
  )
}
