import { Section } from '@/resources/section'
import { Title } from '@/resources/title'
import { projects } from './projects-data'
import * as S from './projects-styles'
import { useTranslation } from 'react-i18next'

export function Projects () {
  const { t } = useTranslation()

  const getBannerAlt = (projectTitle: string) => {
    return t('projects.projectAlt', { name: projectTitle })
  }

  return (
    <Section>
      <Title id='projects'>{t('projects.title')}</Title>

      <S.Container>
        {projects.map(project => (
          <S.Article key={project.id}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={t('projects.projectLabel', { name: project.title })}
            >
              {project.banner
                ? <img src={project.banner.src} alt={getBannerAlt(project.title)} />
                : <div role="img" aria-label={getBannerAlt(project.title)}>
                    {project.title}
                  </div>
              }
            </a>
            <strong>{project.title}</strong>
            <p>{project.techs}</p>
          </S.Article>
        ))}
      </S.Container>
    </Section>
  )
}
