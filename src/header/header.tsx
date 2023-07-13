import { useEffect, useState } from 'react'
import * as S from './header-styles'
import { ReactComponent as MobileMenuIcon } from '@/ui/icons/menu.svg'

function useModal () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleModalClose () {
    setIsModalOpen(false)
  }

  function handleModalToggle () {
    setIsModalOpen(prevState => !prevState)
  }

  useEffect(() => {
    function handleEscape (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return {
    isModalOpen,
    handleModalClose,
    handleModalToggle,
  }
}

export function Header () {
  const {
    isModalOpen,
    handleModalToggle,
    handleModalClose,
  } = useModal()

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

      <S.MobileMenuButton onClick={handleModalToggle}>
        <MobileMenuIcon />
      </S.MobileMenuButton>

      {isModalOpen && (
        <S.Overlay onClick={handleModalClose}>
          <S.MobileMenu onClick={e => e.stopPropagation()}>
            <S.MobileMenuItem onClick={handleModalClose}>
              <S.Link href="#about">Sobre mim</S.Link>
            </S.MobileMenuItem>

            <S.MobileMenuItem onClick={handleModalClose}>
              <S.Link href="#projects">Projetos</S.Link>
            </S.MobileMenuItem>

            <S.MobileMenuItem onClick={handleModalClose}>
              <S.Link href="#services">Serviços</S.Link>
            </S.MobileMenuItem>

            <S.MobileMenuItem onClick={handleModalClose}>
              <S.Link href="#skills">Minhas skills</S.Link>
            </S.MobileMenuItem>
          </S.MobileMenu>
        </S.Overlay>
      )}
    </S.Header>
  )
}
