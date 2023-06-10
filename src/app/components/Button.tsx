import { ReactNode } from 'react'

type ButtonProps = {
  text: string
  color: 'blue' | 'red' | 'green'
  size: 'sm' | 'lg' | 'xg'
  icon?: ReactNode
  linkhref?: string
}

export default function Button({
  text,
  color,
  size,
  icon,
  linkhref,
}: ButtonProps) {
  const btnclasses = `m-2 flex w-64 flex-row items-center justify-center rounded-full p-4 text-white duration-200 ${
    color === 'blue'
      ? 'bg-customBlue-100 hover:bg-customBlue-200'
      : color === 'red'
      ? 'bg-red-500 hover:bg-red-800'
      : color === 'green'
      ? 'bg-green-500 hover:bg-green-800'
      : ''
  } ${
    size === 'sm'
      ? 'p-3 text-sm'
      : size === 'lg'
      ? 'text-lg'
      : size === 'xg'
      ? ''
      : ''
  }`

  return linkhref && linkhref.length > 0 ? (
    <a href={linkhref} target="_blank" className={btnclasses} rel="noreferrer">
      <span className="pr-2 font-bold capitalize">{text}</span>
      {icon && icon}
    </a>
  ) : (
    <button className={btnclasses}>
      <span className="pr-2 font-bold capitalize">{text}</span>
      {icon && icon}
    </button>
  )
}
