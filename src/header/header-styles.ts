import styled from 'styled-components'

export const Header = styled.header`
  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  padding-top: 3.2rem;
  padding-bottom: 0.8rem;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 4.8rem;

  li {
    display: inline-block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 1.8rem;
`

export const HomeLink = styled(Link)`
  font-size: 2.6rem;
  z-index: 10;
`

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  width: 4rem;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.dark};

  margin: 0;
  padding: 2.4rem;
  padding-top: 6.4rem;
  gap: 1.6rem;
  width: 100%;

  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenuItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;

  a {
    padding: 1.2rem;
    width: 100%;
  }
`

type LanguageSwitchProps = {
  hidden?: boolean
}

export const LanguageSwitchButton = styled.button<LanguageSwitchProps>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: 600;
  z-index: 10;

  @media screen and (max-width: 768px) {
    display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  }
`
