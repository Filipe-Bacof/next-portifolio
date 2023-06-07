import { ReactNode } from 'react'

type ButtonProps = {
  text: string
  model: 'link' | 'github' | 'deploy' | 'navigate' | 'return'
  icon?: ReactNode
}

export default function Button({ text, model, icon }: ButtonProps) {
  return (
    <button
      className={`m-2 flex w-64 flex-row items-center justify-center rounded p-4 duration-200 ${
        model === 'navigate' &&
        'bg-customBlue-100 text-white hover:bg-customBlue-200'
      } ${model === 'return' && 'bg-red-500 hover:bg-red-800'}`}
    >
      <span className="pr-2 text-lg font-bold">{text}</span>
      {icon && icon}
    </button>
  )
}
