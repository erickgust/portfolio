import { Title } from '@/resources/title'
import { projects } from './projects-data'
import * as S from './projects-styles'

export function Projects () {
  return (
    <S.Section>
      <Title>Projetos</Title>

      <S.Container>
        {projects.map(project => (
          <S.Article key={project.id}>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.banner
                ? <img src={project.banner.src} alt={project.banner.alt} />
                : <div>{project.title}</div>
              }
            </a>
            <strong>{project.title}</strong>
            <p>{project.techs}</p>
          </S.Article>
        ))}
      </S.Container>
    </S.Section>
  )
}
