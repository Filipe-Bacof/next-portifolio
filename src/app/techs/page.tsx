import Link from 'next/link'
import Button from '../components/Button'
import IconArrowReturnLeft from '../components/icons/IconArrowReturnLeft'
import {
  IconHtml5,
  IconCss3,
  IconJavascript,
  IconReact,
  IconMysql,
  IconLogoNodejs,
  IconMongodb,
  IconTypescript,
  IconNextdotjs,
  IconTailwind,
  IconPrisma,
  IconJest,
} from '../components/icons/IconsTechs'

export default function Techs() {
  const technologies = [
    {
      id: 'html',
      name: 'HTML5',
      icon: <IconHtml5 />,
      color: 'text-orange-500',
      text: 'Linguagem de marcação utilizada na construção de páginas na Web.',
    },
    {
      id: 'css',
      name: 'CSS3',
      icon: <IconCss3 />,
      color: 'text-cyan-600',
      text: 'Mecanismo para adicionar estilização aos elementos de uma página web.',
    },
    {
      id: 'js',
      name: 'JavaScript',
      icon: <IconJavascript />,
      color: 'text-yellow-400',
      text: 'Linguagem de programação interpretada estruturada, de alto nível, com tipagem dinâmica e multiparadigma.',
    },
    {
      id: 'react',
      name: 'React.JS',
      icon: <IconReact />,
      color: 'text-sky-700',
      text: 'Framework de JavaScript com foco em criar interfaces de usuário em páginas web, criado e mantido pelo Facebook (atual Meta).',
    },
    {
      id: 'mysql',
      name: 'MySQL',
      icon: <IconMysql />,
      color: 'text-cyan-800',
      text: 'Sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.',
    },
    {
      id: 'node',
      name: 'Node.JS',
      icon: <IconLogoNodejs />,
      color: 'text-lime-500',
      text: 'Software multiplataforma baseado no interpretador V8 do Google, permite a execução de códigos JavaScript fora de um navegador web.',
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: <IconMongodb />,
      color: 'text-lime-400',
      text: 'Banco de dados não-relacional orientado a documentos, classificado como um programa de banco de dados NoSQL.',
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: <IconTypescript />,
      color: 'text-blue-700',
      text: 'Superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
    },
    {
      id: 'nextjs',
      name: 'Next.JS',
      icon: <IconNextdotjs />,
      color: 'text-white',
      text: 'Next.js é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel.',
    },
    {
      id: 'tailwindcss',
      name: 'Tailwind CSS',
      icon: <IconTailwind />,
      color: 'text-cyan-500',
      text: 'Tailwind CSS é uma biblioteca de classes utilitárias de CSS que permite estilização mais eficiente, através de uma ampla gama de classes pré-definidas.',
    },
    {
      id: 'prisma',
      name: 'Prisma',
      icon: <IconPrisma />,
      color: 'text-sky-900',
      text: 'Prisma é uma ferramenta de mapeamento objeto-relacional (ORM) para bancos de dados. Ela simplifica o acesso e a manipulação de bancos de dados em aplicativos web.',
    },
    {
      id: 'jest',
      name: 'Jest',
      icon: <IconJest />,
      color: 'text-red-800',
      text: 'Framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.',
    },
  ]

  return (
    <section className="flex flex-col items-center">
      <h1 className="my-4 text-center text-4xl font-extrabold text-white">
        Tecnologias <br className="block md:hidden" /> que eu utilizo
      </h1>

      <div className="flex w-[400px] flex-col gap-5 overflow-y-hidden">
        {technologies.map((tech) => (
          <div
            className="flex w-[400px] flex-col rounded bg-blue-950 p-4"
            id={tech.id}
            key={tech.id}
          >
            <div className="flex flex-row gap-1">
              <span className={tech.color || 'text-white'}>{tech.icon}</span>
              <h3 className="text-center text-white">{tech.name}</h3>
            </div>
            <p className="text-justify text-gray-500">{tech.text}</p>
          </div>
        ))}
      </div>

      <Link href={'/'} className="my-4">
        <Button
          text="Voltar"
          color="red"
          size="lg"
          icon={<IconArrowReturnLeft />}
        />
      </Link>
    </section>
  )
}
