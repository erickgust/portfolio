import * as S from './header-styles'

export function Header () {
  return (
    <S.Header>
      <S.HomeLink href="#">
        <strong>Portfólio</strong>
      </S.HomeLink>

      <nav>
        <S.List>
          <li><S.Link href="#about">Sobre mim</S.Link></li>
          <li><S.Link href="#projects">Projetos</S.Link></li>
          <li><S.Link href="#services">Serviços</S.Link></li>
          <li><S.Link href="#skills">Minhas skills</S.Link></li>
        </S.List>
      </nav>
    </S.Header>
  )
}
