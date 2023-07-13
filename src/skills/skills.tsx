import { Section } from '@/resources/section'
import { Title } from '@/resources/title'
import * as icon from '@/ui/skills-icons'
import * as S from './skills-styles'

type Lang = 'react' | 'typescript' | 'javascript' | 'html' | 'css' | 'tailwind'

type SkillsCardProps = {
  lang: Lang
}

function SkillsCard ({ lang }: SkillsCardProps) {
  const Icon = {
    react: icon.React,
    typescript: icon.Typescript,
    javascript: icon.Javascript,
    css: icon.Css,
    html: icon.Html,
    tailwind: icon.Tailwind,
  }[lang]

  return (
    <S.Article>
      <Icon lang={lang} title={lang} />
    </S.Article>
  )
}

export function Skills () {
  return (
    <Section>
      <Title>Minhas skills</Title>

      <S.Container>
        <SkillsCard lang='html'/>
        <SkillsCard lang='css'/>
        <SkillsCard lang='javascript'/>
        <SkillsCard lang='typescript'/>
        <SkillsCard lang='react'/>
        <SkillsCard lang='tailwind'/>
      </S.Container>
    </Section>
  )
}
