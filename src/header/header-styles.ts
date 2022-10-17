import styled from 'styled-components'

export const Header = styled.header`
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 4.8rem;

  li {
    display: inline-block;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 1.8rem;
`

export const HomeLink = styled(Link)`
  font-size: 2.6rem;
`
