import { ReactNode } from 'react'

type ButtonProps = {
  text: string
  color: 'blue' | 'red' | 'green' | 'transparent'
  size: 'sm' | 'lg' | 'xg'
  icon?: ReactNode
  iconColor?: string
  onlyIcon?: boolean
  linkhref?: string
  rounded?: string
}

export default function Button({
  text,
  color,
  size,
  icon,
  iconColor,
  onlyIcon,
  linkhref,
  rounded,
}: ButtonProps) {
  const btnclasses = `m-2 flex flex-row items-center justify-center p-4 text-white duration-200 ${
    color === 'blue'
      ? 'bg-customBlue-100 hover:bg-customBlue-200'
      : color === 'red'
      ? 'bg-red-500 hover:bg-red-800'
      : color === 'green'
      ? 'bg-green-500 hover:bg-green-800'
      : color === 'transparent'
      ? 'bg-transparent hover:bg-black/80'
      : ''
  } ${
    size === 'sm'
      ? 'p-3 text-sm'
      : size === 'lg'
      ? 'text-lg'
      : size === 'xg'
      ? ''
      : ''
  } ${!onlyIcon && 'w-64'} ${rounded || 'rounded-full'}`

  return linkhref && linkhref.length > 0 ? (
    <a href={linkhref} target="_blank" className={btnclasses} rel="noreferrer">
      <span className={`pr-2 font-bold capitalize ${onlyIcon && 'hidden'}`}>
        {text}
      </span>
      {icon && <span className={`${iconColor || 'text-white'}`}>{icon}</span>}
    </a>
  ) : (
    <button className={btnclasses}>
      <span className={`pr-2 font-bold capitalize ${onlyIcon && 'hidden'}`}>
        {text}
      </span>
      {icon && <span className={`${iconColor || 'text-white'}`}>{icon}</span>}
    </button>
  )
}
