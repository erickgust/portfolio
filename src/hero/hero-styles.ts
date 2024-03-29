import styled, { css } from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50rem;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    text-align: center;

    aside {
      display: none;
    }
  }

  @media screen and (max-width: 1140px) {
    overflow-x: hidden;
  }
`

export const Main = styled.main`
  color: ${({ theme }) => theme.colors.white};
  max-width: 34rem;

  h1 {
    font-size: clamp(2.4rem, 1.846rem + 1.538vw, 3.6rem);
  }

  p {
    font-size: clamp(1.6rem, 1.508rem + 0.256vw, 1.8rem);
    color: ${({ theme }) => theme.colors.gray.main};
    font-weight: 500;
    margin: 1.6rem 0 3.2rem;
  }
`

type ButtonProps = {
  primary?: boolean
}

export const InfoButtons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.6rem;
`

export const Button = styled.button<ButtonProps>`${({ theme, primary }) => css`
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${theme.colors.white};
  text-decoration: none;

  cursor: pointer;

  padding: 1.2rem 2.4rem;
  border: 1px solid ${theme.colors.gray[200]};
  background-color: transparent;

  ${primary && css`
    border-color: transparent;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.greenLight};
  `}
`}`
