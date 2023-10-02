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

  const links = [
    { title: 'Sobre mim', href: '#about', label: 'Ir para a seção Sobre mim' },
    { title: 'Projetos', href: '#projects', label: 'Ir para a seção Projetos' },
    // { title: 'Serviços', href: '#services', label: 'Ir para a seção Serviços' },
    { title: 'Minhas skills', href: '#skills', label: 'Ir para a seção Minhas skills' },
  ]

  return (
    <S.Header>
      <S.HomeLink href="#" title="Ir para a página inicial">
        <strong>Portfólio</strong>
      </S.HomeLink>

      <nav>
        <S.List>
          {links.map(link => (
            <li key={link.href}>
              <S.Link href={link.href} aria-label={link.label} tabIndex={0}>{link.title}</S.Link>
            </li>
          ))}
        </S.List>
      </nav>

      <S.MobileMenuButton onClick={handleModalToggle} aria-label="Abrir menu de navegação">
        <MobileMenuIcon />
      </S.MobileMenuButton>

      {isModalOpen && (
        <S.Overlay onClick={handleModalClose}>
          <S.MobileMenu onClick={e => e.stopPropagation()}>
            {links.map(link => (
              <S.MobileMenuItem key={link.href} onClick={handleModalClose}>
                <S.Link href={link.href} aria-label={link.label} tabIndex={0}>
                  {link.title}
                </S.Link>
              </S.MobileMenuItem>
            ))}
          </S.MobileMenu>
        </S.Overlay>
      )}
    </S.Header>
  )
}
