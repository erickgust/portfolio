import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { Section } from '@/resources/section'
import { Title } from '@/resources/title'
import * as Icon from '@/ui/icons'
import * as S from './about-styles'
import { ContactCard } from './contact-card'

export type Contact = {
  title: string
  desc: string
  src: string
  alt: string
  url?: string
}

export function About () {
  const { t } = useTranslation()
  const contacts: Contact[] = [
    {
      src: Icon.smile,
      alt: t('aboutMe.contacts.happyFaceIconAlt'),
      title: t('aboutMe.contacts.name'),
      desc: 'Erick Gustavo',
    },
    {
      src: Icon.mail,
      alt: t('aboutMe.contacts.emailIconAlt'),
      title: 'E-mail',
      desc: 'erick.prussak@gmail.com',
      url: 'mailto:erick.prussak@gmail.com',
    },
    {
      src: Icon.github,
      alt: t('aboutMe.contacts.githubIconAlt'),
      title: 'GitHub',
      desc: '@erickgust',
      url: 'https://www.github.com/erickgust',
    },
    {
      src: Icon.phone,
      alt: t('aboutMe.contacts.phoneIconAlt'),
      title: t('aboutMe.contacts.phone'),
      desc: '(47) 99994-2468',
      url: 'tel:+5547999942468',
    },
  ]

  return (
    <Section>
      <S.Div>
        <Title id='about'>{t('aboutMe.title')}</Title>

        <S.Desc>
          {t('aboutMe.desc')}
          <span>
            {t('aboutMe.desc2')}
          </span>
          {t('aboutMe.desc3')}
        </S.Desc>
      </S.Div>

    <S.Address>
      {contacts.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
    </S.Address>

    </Section>
  )
}
