import { Section } from '@/resources/section'
import { Title } from '@/resources/title'
import { projects } from './projects-data'
import * as S from './projects-styles'

export function Projects () {
  return (
    <Section>
      <Title id='projects'>Projetos</Title>

      <S.Container>
        {projects.map(project => (
          <S.Article key={project.id}>
            <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Link para o projeto ${project.title}`}>
              {project.banner
                ? <img src={project.banner.src} alt={project.banner.alt} />
                : <div role="img" aria-label={`Imagem do projeto ${project.title}`}>{project.title}</div>
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
