import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import * as S from './header-styles'
import { ReactComponent as MobileMenuIcon } from '@/ui/icons/menu.svg'
import { ReactComponent as FlagUs } from '@/ui/icons/flag-us.svg'
import { ReactComponent as FlagBr } from '@/ui/icons/flag-br.svg'

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

function LanguageSwitchButton ({ hidden }: { hidden?: boolean}) {
  const { i18n: { language, changeLanguage } } = useTranslation()
  const switchButtonText = language === 'pt'
    ? 'Switch to English'
    : 'Mudar para português'

  function handleLanguageChange () {
    const newLanguage = language === 'pt' ? 'en' : 'pt'
    changeLanguage(newLanguage)
  }

  return (
    <S.LanguageSwitchButton
      onClick={handleLanguageChange}
      hidden={hidden}
      aria-label={switchButtonText}
      title={switchButtonText}
    >
      {language === 'pt' ? <FlagUs /> : <FlagBr />}
    </S.LanguageSwitchButton>
  )
}

export function Header () {
  const {
    isModalOpen,
    handleModalToggle,
    handleModalClose,
  } = useModal()
  const { t } = useTranslation()

  const links = [
    { title: t('header.about'), href: '#about', label: t('header.aboutLabel') },
    { title: t('header.projects'), href: '#projects', label: t('header.projectsLabel') },
    { title: t('header.skills'), href: '#skills', label: t('header.skillsLabel') },
  ]

  return (
    <S.Header>
      <S.HomeLink href="#" title={t('header.homeTitle')}>
        <strong>{t('header.home')}</strong>
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

      <LanguageSwitchButton hidden />

      <S.MobileMenuButton
        onClick={handleModalToggle}
        aria-label={isModalOpen ? t('header.closeMenu') : t('header.openMenu')}
        title={isModalOpen ? t('header.closeMenu') : t('header.openMenu')}
        aria-expanded={isModalOpen}
        aria-controls="mobile-menu"
        >
        <MobileMenuIcon />
      </S.MobileMenuButton>

      {isModalOpen && (
        <S.Overlay onClick={handleModalClose}>
          <S.MobileMenu
            onClick={e => e.stopPropagation()}
            id='mobile-menu'
            role='menu'
          >
            {links.map(link => (
              <S.MobileMenuItem key={link.href} onClick={handleModalClose}>
                <S.Link href={link.href} aria-label={link.label} tabIndex={0}>
                  {link.title}
                </S.Link>
              </S.MobileMenuItem>
            ))}

            <div style={{ alignSelf: 'flex-end' }}>
              <LanguageSwitchButton />
            </div>
          </S.MobileMenu>
        </S.Overlay>
      )}
    </S.Header>
  )
}
