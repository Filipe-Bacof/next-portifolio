import Image from 'next/image'

export default function ProfilePicHome() {
  return (
    <a
      className="h-[164px] w-[164px] no-underline"
      href="https://www.linkedin.com/in/filipe-bacof/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="border-gradient-border h-[164px] w-[164px] items-center justify-center rounded-full bg-gradient-background transition-transform duration-300 hover:scale-110">
        <Image
          className="rounded-full pl-1 pt-1"
          src="/profilepic.jpg"
          alt="minha foto de perfil"
          priority={false}
          width={160}
          height={160}
        />
      </div>
    </a>
  )
}
