import markee from '@/ui/markee.png'
import * as S from './projects-styles'

export function Projects () {
  return (
    <S.Section>
      <S.Title>Projetos</S.Title>

      <S.Container>
        <S.Article>
          <a href="https://github.com/erickgust/markee" target="_blank" rel="noreferrer">
            <img src={markee} alt="Logo do projeto Markee" />
          </a>
          <strong>Markee</strong>
          <p>Tecnologias: React, TypeScript e Styled Components.</p>
        </S.Article>
        <S.Article>
          <a href="https://github.com/erickgust/calculator-js" target="_blank" rel="noreferrer">
            <div>Calculator</div>
          </a>
          <strong>Markee</strong>
          <p>Tecnologias: React, TypeScript e Styled Components.</p>
        </S.Article>
      </S.Container>
    </S.Section>
  )
}
