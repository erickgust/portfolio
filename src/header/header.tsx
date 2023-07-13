import { useState } from 'react'
import * as S from './header-styles'
import { ReactComponent as MobileMenuIcon } from '@/ui/icons/menu.svg'

export function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function handleMobileMenuClick () {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <S.Header>
      <S.HomeLink href="#">
        <strong>Portfólio</strong>
      </S.HomeLink>

      {/* <nav>
        <S.List>
          <li><S.Link href="#about">Sobre mim</S.Link></li>
          <li><S.Link href="#projects">Projetos</S.Link></li>
          <li><S.Link href="#services">Serviços</S.Link></li>
          <li><S.Link href="#skills">Minhas skills</S.Link></li>
        </S.List>
      </nav> */}

      <S.MobileMenuButton onClick={handleMobileMenuClick}>
        <MobileMenuIcon />
      </S.MobileMenuButton>

      {isMobileMenuOpen && (
        <S.MobileMenu>
          <S.MobileMenuItem><S.Link href="#about">Sobre mim</S.Link></S.MobileMenuItem>
          <S.MobileMenuItem><S.Link href="#projects">Projetos</S.Link></S.MobileMenuItem>
          <S.MobileMenuItem><S.Link href="#services">Serviços</S.Link></S.MobileMenuItem>
          <S.MobileMenuItem><S.Link href="#skills">Minhas skills</S.Link></S.MobileMenuItem>
        </S.MobileMenu>
      )}
    </S.Header>
  )
}
