import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`
export const Article = styled.article`${({ theme }) => css`
  border: 1px solid ${theme.colors.gray[200]};
  background-color: ${theme.colors.gray[400]};
  min-width: 14rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    max-width: 7.5rem;
  }

  @media (max-width: 768px) {
    min-width: 9rem;
    height: 9rem;

    svg {
      max-width: 4.8rem;
    }
  }
`}`
