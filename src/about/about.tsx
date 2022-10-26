import { Title } from '@/resources/title'
import * as Icon from '@/ui/icons'
import * as S from './about-styles'
import { ContactCard } from './contact-card'

export type Contact = {
  title: string
  desc: string
  src: string
  alt: string
}

const contacts: Contact[] = [
  {
    src: Icon.smile,
    alt: 'Ícone de rosto feliz',
    title: 'Meu Nome',
    desc: 'Erick Gustavo',
  },
  {
    src: Icon.mail,
    alt: 'Ícone de email',
    title: 'E-mail',
    desc: 'erick.prussak@gmail.com',
  },
  {
    src: Icon.github,
    alt: 'Ícone do GitHub',
    title: 'GitHub',
    desc: '@erickgust',
  },
  {
    src: Icon.phone,
    alt: 'Ícone de Telefone',
    title: 'Telefone',
    desc: '(47) 99994-2468',
  },
]

export function About () {
  return (
    <S.Section>
      <div>
        <Title>Sobre mim</Title>
        <S.Desc>
          Sou desenvolvedor web focado principalmente no front-end.
          <br />
          Atualmente me aprofundando mais sobre testes em projetos com ReactJS
          e TypeScript. Comecei na área estudando lógica em Python, então fui
          para web com JavaScript, HTML e CSS.
        </S.Desc>
      </div>

    <address>
      {contacts.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
    </address>

    </S.Section>
  )
}
