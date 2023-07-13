import { ReactComponent as HeroImage } from '@/ui/hero.svg'
import * as S from './hero-styles'

export function Hero () {
  return (
    <S.Section>
      <S.Main>
        <h1>Olá, meu nome é Erick! 😃</h1>
        <p>Desenvolvedor Front-End & UI Designer</p>

        <S.InfoButtons>
          <S.Button type="button" primary aria-label="Download CV">Download CV</S.Button>
          <S.Button type="button" aria-label="Entrar em contato">Entrar em contato</S.Button>
        </S.InfoButtons>
      </S.Main>

      <aside role="complementary">
        <HeroImage title="Hero image" />
      </aside>
    </S.Section>
  )
}
