import { ReactNode } from 'react'

type ButtonProps = {
  text: string
  model: 'link' | 'github' | 'deploy' | 'navigate' | 'return'
  icon?: ReactNode
}

export default function Button({ text, model, icon }: ButtonProps) {
  return (
    <button
      className={`m-2 flex w-64 flex-row items-center justify-center rounded-full p-4 text-white duration-200 ${
        model === 'navigate' &&
        'bg-customBlue-100 text-lg hover:bg-customBlue-200'
      } ${model === 'return' && 'bg-red-500 text-lg hover:bg-red-800'} ${
        model === 'link' && 'bg-customBlue-100 text-sm hover:bg-customBlue-200'
      }`}
    >
      <span className="pr-2 font-bold">{text}</span>
      {icon && icon}
    </button>
  )
}
