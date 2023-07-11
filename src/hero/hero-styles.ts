import styled, { css } from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50rem;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    text-align: center;

    aside {
      display: none;
    }
  }
`

export const Main = styled.main`
  color: ${({ theme }) => theme.colors.white};
  max-width: 34rem;

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.8rem;
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
