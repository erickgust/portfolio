import styled from 'styled-components'

export const Header = styled.header`
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
`

export const MobileMenu = styled.ul`
  position: absolute;
  list-style: none;

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.dark};

  margin-top: 4rem;
  padding: 2.4rem;
  gap: 1.6rem;
  width: 100%;

  top: 0;
  left: 0;
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
